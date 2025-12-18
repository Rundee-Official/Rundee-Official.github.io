/**
 * File Name: HomeBackground.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Three.js animated particle background with camera rotation support
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

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

export default function HomeBackground({ blurAmount = 8, cameraRotation = 0 }) {
  const mountRef = useRef();
  const canvasRef = useRef(null);
  const cameraRef = useRef(null);
  
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
    canvasRef.current = renderer.domElement;
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
    
    // Plasma-like link material with blue color palette
    const maxLinks = (PARTICLE_COUNT * (PARTICLE_COUNT - 1)) / 2;
    const colorPalette = [
      new THREE.Color(0x00ffff), // Cyan
      new THREE.Color(0x0080ff), // Blue
      new THREE.Color(0x00aaff), // Light Blue
      new THREE.Color(0x0040ff), // Medium Blue
      new THREE.Color(0x87ceeb), // Sky Blue
      new THREE.Color(0x4682b4), // Steel Blue
      new THREE.Color(0x00bfff), // Deep Sky Blue
      new THREE.Color(0x4169e1), // Royal Blue
    ];
    const cylinderPool = [];
    
    for (let i = 0; i < maxLinks; i++) {
      const geo = new THREE.CylinderGeometry(LINE_RADIUS, LINE_RADIUS, 1, 6, 1, true);
      const mat = new THREE.MeshStandardMaterial({
        color: colorPalette[i % colorPalette.length].clone(),
        transparent: true,
        opacity: 0.22,
        emissive: colorPalette[i % colorPalette.length].clone(),
        emissiveIntensity: 0.4
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.visible = false;
      scene.add(mesh);
      cylinderPool.push(mesh);
    }
    
    // Spark particles (for link hits) with blue color palette
    const sparkGeometry = new THREE.SphereGeometry(0.01, 6, 6);
    const sparkPool = [];
    const sparkState = [];
    const sparkVelocity = [];
    const sparkColorPalette = [
      new THREE.Color(0x00ffff), // Cyan
      new THREE.Color(0x0080ff), // Blue
      new THREE.Color(0x00aaff), // Light Blue
      new THREE.Color(0x87ceeb), // Sky Blue
      new THREE.Color(0x00bfff), // Deep Sky Blue
      new THREE.Color(0x4169e1), // Royal Blue
    ];
    for (let i = 0; i < SPARK_POOL; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: sparkColorPalette[i % sparkColorPalette.length],
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
        const scale = 0.15 + Math.random() * 0.15;
        s.scale.setScalar(scale);
        
        // Random blue spark
        const sparkColor = sparkColorPalette[Math.floor(Math.random() * sparkColorPalette.length)].clone();
        s.material.color.copy(sparkColor);
        
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
    let targetRotationY = 0;
    let currentRotationY = 0;
    
    // Global variable for camera rotation target (accessible from useEffect)
    window.cameraRotationTarget = 0;
    
    const animate = () => {
      const delta = clock.getDelta();
      theta += 0.003;
      mouse.lerp(targetMouse, 0.06);
      
      // Update camera rotation target
      if (window.cameraRotationTarget !== undefined) {
        targetRotationY = window.cameraRotationTarget;
      }
      
      // Camera rotation interpolation with ease-in-out effect
      // Slow start → fast → slow end
      const diff = targetRotationY - currentRotationY;
      // Slower when close, faster when far
      const speed = Math.abs(diff) > 0.1 ? 0.08 : 0.03;
      currentRotationY += diff * speed;
      
      const orbitX = Math.sin(theta) * BASE_RADIUS;
      const orbitZ = Math.cos(theta) * BASE_RADIUS;
      const mouseInfluence = 0.7;
      const mouseTilt = 0.9;
      
      // Apply camera rotation
      const rotationMatrix = new THREE.Matrix4().makeRotationY(currentRotationY);
      const basePosition = new THREE.Vector3(
        orbitX + mouse.x * mouseInfluence,
        1 + mouse.y * 0.9,
        orbitZ + mouse.y * 0.4
      );
      basePosition.applyMatrix4(rotationMatrix);
      
      camera.position.copy(basePosition);
      
      // Apply rotation to lookAt target
      const lookTarget = new THREE.Vector3(
        mouse.x * mouseTilt,
        mouse.y * mouseTilt * 0.6,
        0
      );
      lookTarget.applyMatrix4(rotationMatrix);
      camera.lookAt(lookTarget);
      
      const time = Date.now() * 0.005;
      
      // Track which particles are connected
      const isConnected = new Array(PARTICLE_COUNT).fill(false);
      
      let usedCount = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const a = spheres[i].position;
          const b = spheres[j].position;
          if (a.distanceTo(b) < MAX_DISTANCE) {
            isConnected[i] = true;
            isConnected[j] = true;
            
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
            
            // Plasma pulsating effect with blue color variations
            const pulse = 0.22 + 0.22 * Math.sin(time + i * 0.5 + j * 0.3);
            cyl.material.emissiveIntensity = pulse;
            cyl.material.opacity = pulse;
            
            // Dynamic color based on connection index and time
            const linkColorIndex = Math.floor((i * 7 + j * 11 + time * 5) % colorPalette.length);
            const linkColor = colorPalette[linkColorIndex].clone();
            const colorShift = Math.sin(time + i * 0.3 + j * 0.2) * 0.15;
            linkColor.offsetHSL(colorShift, 0.3, 0);
            
            cyl.material.color.lerp(linkColor, 0.7);
            cyl.material.emissive.lerp(linkColor, 0.7);
            
            // Small spark burst emitted from node positions when a link is active
            if (Math.random() < 0.03) {
              const fromA = Math.random() < 0.5;
              const origin = fromA ? a : b;
              spawnSpark(origin, 0.12, 2);
            }
          }
        }
      }
      
      // Update particles with connection-based blue color effects
      const unconnectedColor = new THREE.Color(0xffffff);
      const particleColorPalette = [
        new THREE.Color(0x00ffff), // Cyan
        new THREE.Color(0x0080ff), // Blue
        new THREE.Color(0x00aaff), // Light Blue
        new THREE.Color(0x0040ff), // Medium Blue
        new THREE.Color(0x87ceeb), // Sky Blue
        new THREE.Color(0x4682b4), // Steel Blue
        new THREE.Color(0x00bfff), // Deep Sky Blue
        new THREE.Color(0x4169e1), // Royal Blue
      ];
      
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
        
        if (isConnected[i]) {
          // Connected particles: vibrant blue colors from palette based on index and time
          const colorIndex = Math.floor((i + time * 10) % particleColorPalette.length);
          const targetColor = particleColorPalette[colorIndex].clone();
          
          // Add subtle hue shift over time for dynamic blue color variation
          const hueShift = Math.sin(time * 0.5 + i * 0.1) * 0.05;
          targetColor.offsetHSL(hueShift, 0.2, 0);
          
          s.material.color.lerp(targetColor, 0.8);
          s.material.emissive.lerp(targetColor, 0.6);
          const baseIntensity = 0.5 + 0.3 * Math.sin(time + i * 0.8);
          s.material.emissiveIntensity = baseIntensity;
        } else {
          // Unconnected particles: dimmer white with lower intensity
          s.material.color.lerp(unconnectedColor, 0.8);
          s.material.emissive.lerp(new THREE.Color(0x333333), 0.6);
          const baseIntensity = 0.2 + 0.1 * Math.sin(time + i * 0.8);
          s.material.emissiveIntensity = baseIntensity;
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
  
  // Apply consistent blur effect to background
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.style.filter = 'blur(2px)';
    }
  }, []);
  
  // Update camera rotation
  useEffect(() => {
    // Animate camera rotation when cameraRotation changes
    // cameraRotation is in radians (0 = front, Math.PI/2 = left 90°, -Math.PI/2 = right 90°)
    if (window.cameraRotationTarget !== undefined) {
      window.cameraRotationTarget = cameraRotation;
    }
  }, [cameraRotation]);
  
  return (
    <motion.div
      ref={mountRef}
      className="hero-bg-canvas"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}
