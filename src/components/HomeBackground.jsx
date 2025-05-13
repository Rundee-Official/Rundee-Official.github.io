import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const PARTICLE_COUNT = 200;
const MAX_DISTANCE = 0.6;
const LINE_RADIUS = 0.006;

export default function HomeBackground() {
  const mountRef = useRef();
  
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 3.5, 7);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 4;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    mount.appendChild(renderer.domElement);
    
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.8, 1.2, 0.0
    ));
    
    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(-1, 1, 2);
    scene.add(dirLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(2, 3, 3);
    scene.add(pointLight);
    
    // Particles
    const spheres = [];
    const velocities = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const geo = new THREE.SphereGeometry(0.02, 8, 8);
      const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x444444 });
      const s = new THREE.Mesh(geo, mat);
      const SPAWN_RADIUS = 3;
      
      s.position.set(
        (Math.random() - 0.5) * SPAWN_RADIUS * 2,
        (Math.random() - 0.5) * SPAWN_RADIUS * 2,
        (Math.random() - 0.5) * SPAWN_RADIUS * 2
      );
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      ));
      spheres.push(s);
      scene.add(s);
    }
    
    // Plasma-like link material
    const maxLinks = (PARTICLE_COUNT * (PARTICLE_COUNT - 1)) / 2;
    const baseColor = new THREE.Color(0x55ffff);
    const cylinderPool = [];
    
    for (let i = 0; i < maxLinks; i++) {
      const geo = new THREE.CylinderGeometry(LINE_RADIUS, LINE_RADIUS, 1, 6, 1, true);
      const mat = new THREE.MeshStandardMaterial({
        color: baseColor.clone(),
        transparent: true,
        opacity: 0.3,
        emissive: new THREE.Color(0x00ffff),
        emissiveIntensity: 0.5
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.visible = false;
      scene.add(mesh);
      cylinderPool.push(mesh);
    }
    
    let theta = 0;
    let animationId;
    
    const animate = () => {
      theta += 0.003;
      camera.position.x = Math.sin(theta) * 4;
      camera.position.z = Math.cos(theta) * 4;
      camera.lookAt(0, 0, 0);
      
      const time = Date.now() * 0.005;
      
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const s = spheres[i];
        s.position.add(velocities[i]);
        ['x', 'y', 'z'].forEach(axis => {
          if (s.position[axis] > 3 || s.position[axis] < -3) {
            velocities[i][axis] *= -1;
          }
        });
        
        const dist = s.position.distanceTo(camera.position);
        const scale = THREE.MathUtils.clamp(3 - dist, 0.4, 2.5);
        s.scale.setScalar(scale);
        
        s.material.emissiveIntensity = 0.5 + 0.3 * Math.sin(time + i * 0.8);
      }
      
      let usedCount = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const a = spheres[i].position;
          const b = spheres[j].position;
          if (a.distanceTo(b) < MAX_DISTANCE) {
            if (usedCount >= cylinderPool.length) break;
            
            const cyl = cylinderPool[usedCount++];
            cyl.visible = true;
            
            const dir = new THREE.Vector3().subVectors(b, a);
            const len = dir.length();
            const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
            
            const axis = new THREE.Vector3(0, 1, 0);
            const quat = new THREE.Quaternion().setFromUnitVectors(axis, dir.clone().normalize());
            
            cyl.position.copy(mid);
            cyl.setRotationFromQuaternion(quat);
            cyl.scale.set(1, len, 1);
            
            // ✨ Plasma pulsating effect
            const pulse = 0.3 + 0.3 * Math.sin(time + i * 0.5 + j * 0.3);
            cyl.material.emissiveIntensity = pulse;
            cyl.material.opacity = pulse;
          }
        }
      }
      
      for (let i = usedCount; i < cylinderPool.length; i++) {
        cylinderPool[i].visible = false;
      }
      
      composer.render();
      animationId = requestAnimationFrame(animate);
    };
    animate();
    
    const onResize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
    };
    
    window.addEventListener('resize', onResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
      
      if (renderer.domElement && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
      
      spheres.forEach(s => {
        s.geometry.dispose();
        s.material.dispose();
      });
      cylinderPool.forEach(c => {
        c.geometry.dispose();
        c.material.dispose();
      });
      
      renderer.dispose();
      composer.dispose();
    };
  }, []);
  
  return (
    <motion.div
      ref={mountRef}
      className="hero-bg-canvas"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    />
  );
}
