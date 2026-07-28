"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Environment, ContactShadows } from "@react-three/drei";
import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";

function DustParticles() {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(100 * 3);
    for(let i=0; i<100; i++) {
      positions[i*3] = (Math.random() - 0.5) * 10;
      positions[i*3+1] = Math.random() * 5;
      positions[i*3+2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
      points.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particlesPosition, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.4} />
    </points>
  );
}

function CameraController({ step }: { step: number }) {
  const lookAtTarget = useRef(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    let targetPos = new THREE.Vector3(0, 1, 4.5);
    
    if (step === 0) { // Cricket (Follow ball right)
      targetPos.set(-1, 1, 4.5);
      lookAtTarget.current.set(1, 0.5, 0);
    } else if (step === 1) { // Football (Zoom in on kick)
      targetPos.set(0, 0.6, 3.2);
      lookAtTarget.current.set(0, 0, 0);
    } else if (step === 2) { // Badminton (Tilt up for smash)
      targetPos.set(0, 0.2, 5.0);
      lookAtTarget.current.set(0, 2, 0);
    } else if (step >= 3) { // Door & Desk (Push in tight)
      targetPos.set(1.5, 1.2, 2.8);
      lookAtTarget.current.set(1.5, 0.5, 0);
    }

    // Smoothly interpolate camera position and rotation
    state.camera.position.lerp(targetPos, 0.04);
    currentLookAt.current.lerp(lookAtTarget.current, 0.04);
    state.camera.lookAt(currentLookAt.current);
  });
  return null;
}

function Model({ url, active, position = [0, -1.2, 0] }: { url: string, active: boolean, position?: [number, number, number] }) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(url);
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (active && names.length > 0) {
      const action = actions[names[0]];
      if (action) {
        action.reset().fadeIn(0.5).play(); // Increased fade for smoother transitions
        return () => { action.fadeOut(0.5); };
      }
    }
  }, [active, actions, names]);

  if (!active) return null;

  return (
    <group ref={group} dispose={null} position={position} scale={1.2}>
      <primitive object={scene} />
    </group>
  );
}

export function JourneyCompanion3D({ step }: { step: number }) {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 1, 4.5], fov: 40 }}>
        <CameraController step={step} />
        
        {/* Cinematic Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 5, 0]} intensity={3} angle={0.6} penumbra={1} castShadow color="#ffffff" />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#f43f5e" /> {/* Warm accent */}
        <directionalLight position={[-5, 5, -5]} intensity={1} color="#3b82f6" /> {/* Cool accent */}
        
        <DustParticles />

        {/* Render only the active animation model */}
        {/* Offset the work model to align with the door/desk UI on the right */}
        <Model url="/cricket.glb" active={step === 0} />
        <Model url="/football.glb" active={step === 1} />
        <Model url="/badminton.glb" active={step === 2} />
        <Model url="/work.glb" active={step >= 3} position={[1.5, -1.2, 0]} />
        
        {/* Adds realistic shadow under the character */}
        <ContactShadows position={[0, -1.2, 0]} opacity={0.6} scale={10} blur={2.5} far={4} />
        <ContactShadows position={[1.5, -1.2, 0]} opacity={0.6} scale={10} blur={2.5} far={4} /> {/* Shadow for desk position */}
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/cricket.glb");
useGLTF.preload("/football.glb");
useGLTF.preload("/badminton.glb");
useGLTF.preload("/work.glb");
