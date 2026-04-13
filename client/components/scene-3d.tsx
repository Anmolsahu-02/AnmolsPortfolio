"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Torus, Box, Environment, Stars } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"
import { useTheme } from "next-themes"

function AnimatedSphere({ position, color, speed = 1, distort = 0.3 }: { position: [number, number, number], color: string, speed?: number, distort?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={speed * 2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function AnimatedTorus({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <Torus ref={meshRef} args={[1.2, 0.4, 32, 64]} position={position}>
        <MeshWobbleMaterial
          color={color}
          attach="material"
          factor={0.4}
          speed={speed}
          roughness={0.3}
          metalness={0.7}
        />
      </Torus>
    </Float>
  )
}

function AnimatedBox({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.4
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.6
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
      <Box ref={meshRef} args={[1.2, 1.2, 1.2]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.2}
          speed={speed * 1.5}
          roughness={0.1}
          metalness={0.9}
        />
      </Box>
    </Float>
  )
}

function ParticleField({ particleColor }: { particleColor: string }) {
  const count = 500
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return pos
  }, [])

  const ref = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
      ref.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={particleColor}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.5
    state.camera.position.y = Math.cos(state.clock.elapsedTime * 0.1) * 0.3
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

function SceneContent({ isDark }: { isDark: boolean }) {
  // Color palettes for dark and light themes
  const colors = isDark ? {
    bg: "#1a1512",
    primary: "#e8a87c",
    secondary: "#c85a3a", 
    tertiary: "#ffd4a3",
    accent: "#d4a574",
    particle: "#e8a87c"
  } : {
    bg: "#f5ebe0",
    primary: "#d4a574",
    secondary: "#c17f59",
    tertiary: "#e8cdb5",
    accent: "#b8956c",
    particle: "#c17f59"
  }

  return (
    <>
      <color attach="background" args={[colors.bg]} />
      <fog attach="fog" args={[colors.bg, 8, 25]} />
      
      <ambientLight intensity={isDark ? 0.3 : 0.5} />
      <directionalLight position={[10, 10, 5]} intensity={isDark ? 1 : 0.8} color="#ffd4a3" />
      <pointLight position={[-10, -10, -5]} intensity={isDark ? 0.5 : 0.3} color={colors.primary} />
      <pointLight position={[5, 5, 5]} intensity={isDark ? 0.3 : 0.2} color={colors.secondary} />
      
      <AnimatedSphere position={[-3, 2, -2]} color={colors.primary} speed={0.8} distort={0.4} />
      <AnimatedSphere position={[4, -1, -3]} color={colors.secondary} speed={1.2} distort={0.3} />
      <AnimatedSphere position={[0, 3, -4]} color={colors.tertiary} speed={0.6} distort={0.5} />
      
      <AnimatedTorus position={[3, 1, -1]} color={colors.primary} speed={0.7} />
      <AnimatedTorus position={[-4, -2, -2]} color={colors.accent} speed={1} />
      
      <AnimatedBox position={[-2, -2, -1]} color={colors.secondary} speed={0.9} />
      <AnimatedBox position={[2, 3, -3]} color={colors.tertiary} speed={0.5} />
      
      <ParticleField particleColor={colors.particle} />
      <Stars radius={50} depth={50} count={isDark ? 1000 : 500} factor={3} saturation={0} fade speed={0.5} />
      
      <CameraRig />
      <Environment preset={isDark ? "sunset" : "dawn"} />
    </>
  )
}

export function Scene3D() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <SceneContent isDark={isDark} />
      </Canvas>
    </div>
  )
}
