import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const PARTICLE_COUNT = 200;
const MAX_DISTANCE = 0.6;
const LINE_RADIUS = 0.006;
const SPARK_POOL = 60;
const SPARK_LIFETIME = 0.4;
const BASE_RADIUS = 4;

export default function HomeBackground() {
  const mountRef = useRef();
  
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 3.5, 7);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 1, BASE_RADIUS);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    mount.appendChild(renderer.domElement);
    
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.3, 1.05, 0.0
    ));
    
    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.45);
    dirLight.position.set(-1, 1, 2);
    scene.add(dirLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.6);
    pointLight.position.set(2, 3, 3);
    scene.add(pointLight);
    
    // Particles
    const spheres = [];
    const velocities = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const geo = new THREE.SphereGeometry(0.015, 8, 8);
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
        opacity: 0.22,
        emissive: new THREE.Color(0x00ffff),
        emissiveIntensity: 0.4
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.visible = false;
      scene.add(mesh);
      cylinderPool.push(mesh);
    }
    
    // Spark particles (for link hits)
    const sparkGeometry = new THREE.SphereGeometry(0.02, 6, 6);
    const sparkPool = [];
    const sparkState = [];
    const sparkVelocity = [];
    for (let i = 0; i < SPARK_POOL; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const spark = new THREE.Mesh(sparkGeometry, mat);
      spark.visible = false;
      sparkPool.push(spark);
      sparkState.push({ life: 0, maxLife: SPARK_LIFETIME });
      sparkVelocity.push(new THREE.Vector3());
      scene.add(spark);
    }
    let sparkIndex = 0;
    const spawnSpark = (position, spread = 0.13, count = 1) => {
      for (let n = 0; n < count; n++) {
        const s = sparkPool[sparkIndex];
        const st = sparkState[sparkIndex];
        s.visible = true;
        const jitter = new THREE.Vector3(
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread
        );
        s.position.copy(position).add(jitter);
        const scale = 0.32 + Math.random() * 0.36;
        s.scale.setScalar(scale);
        st.life = SPARK_LIFETIME;
        st.maxLife = SPARK_LIFETIME;
        s.material.opacity = 0.7;
        // outward velocity for mild burst
        sparkVelocity[sparkIndex].set(
          (Math.random() - 0.5) * spread * 2.4,
          (Math.random() - 0.5) * spread * 2.4,
          (Math.random() - 0.5) * spread * 2.4
        );
        sparkIndex = (sparkIndex + 1) % SPARK_POOL;
      }
    };
    
    // Mouse reactive camera
    const targetMouse = new THREE.Vector2(0, 0);
    const mouse = new THREE.Vector2(0, 0);
    const handlePointer = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      targetMouse.set(x, y);
    };
    window.addEventListener('pointermove', handlePointer);
    
    const clock = new THREE.Clock();
    let theta = 0;
    let animationId;
    
    const animate = () => {
      const delta = clock.getDelta();
      theta += 0.003;
      mouse.lerp(targetMouse, 0.06);
      
      const orbitX = Math.sin(theta) * BASE_RADIUS;
      const orbitZ = Math.cos(theta) * BASE_RADIUS;
      const mouseInfluence = 0.7;
      const mouseTilt = 0.9;
      
      camera.position.set(
        orbitX + mouse.x * mouseInfluence,
        1 + mouse.y * 0.9,
        orbitZ + mouse.y * 0.4
      );
      camera.lookAt(mouse.x * mouseTilt, mouse.y * mouseTilt * 0.6, 0);
      
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
        const scale = THREE.MathUtils.clamp(3 - dist, 0.25, 1.6);
        s.scale.setScalar(scale);
        
        s.material.emissiveIntensity = 0.35 + 0.22 * Math.sin(time + i * 0.8);
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
            const pulse = 0.22 + 0.22 * Math.sin(time + i * 0.5 + j * 0.3);
            cyl.material.emissiveIntensity = pulse;
            cyl.material.opacity = pulse;
            
            // Small spark burst emitted from node positions when a link is active
            if (Math.random() < 0.03) {
              const fromA = Math.random() < 0.5;
              const origin = fromA ? a : b;
              spawnSpark(origin, 0.12, 2);
            }
          }
        }
      }
      
      for (let i = usedCount; i < cylinderPool.length; i++) {
        cylinderPool[i].visible = false;
      }
      
      // Update spark lifetimes
      for (let i = 0; i < SPARK_POOL; i++) {
        const st = sparkState[i];
        if (st.life > 0) {
          st.life -= delta;
          const t = THREE.MathUtils.clamp(st.life / st.maxLife, 0, 1);
          const s = sparkPool[i];
          s.material.opacity = t * 0.9;
          s.scale.setScalar(0.5 + t * 0.4);
          s.position.addScaledVector(sparkVelocity[i], delta * 2.5);
          sparkVelocity[i].multiplyScalar(0.9);
          s.visible = t > 0;
        } else {
          sparkPool[i].visible = false;
        }
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
      window.removeEventListener('pointermove', handlePointer);
      
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
      sparkPool.forEach(s => {
        s.geometry.dispose();
        s.material.dispose();
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
