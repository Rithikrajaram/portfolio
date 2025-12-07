import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Sphere, Torus, Sparkles } from '@react-three/drei';

const Trophy3D = ({ color = '#FFD700' }) => {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Floating Particles */}
            <Sparkles count={40} scale={2} size={3} speed={0.4} opacity={0.6} color={color} />

            {/* Trophy Cup Body */}
            <Cylinder args={[0.5, 0.3, 0.8, 32]} position={[0, 0.6, 0]}>
                <meshStandardMaterial
                    color={color}
                    metalness={0.8}
                    roughness={0.2}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </Cylinder>

            {/* Cup Upper Part (Main Bowl) */}
            <Cylinder args={[0.8, 0.5, 0.8, 32]} position={[0, 1.2, 0]} openEnded>
                <meshStandardMaterial
                    color={color}
                    metalness={0.8}
                    roughness={0.2}
                    side={2} // DoubleSide for inside visibility
                />
            </Cylinder>

            {/* Inner Gold Glow sphere */}
            <Sphere args={[0.3, 16, 16]} position={[0, 1.2, 0]}>
                <meshStandardMaterial color="#FFF" emissive={color} emissiveIntensity={2} toneMapped={false} />
            </Sphere>

            {/* Cup Rim */}
            <Torus args={[0.8, 0.05, 16, 32]} position={[0, 1.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
            </Torus>

            {/* Handles - More ornate */}
            <Torus args={[0.5, 0.08, 16, 32]} position={[-0.8, 1.1, 0]} rotation={[0, 0, 2]}>
                <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
            </Torus>
            <Torus args={[0.5, 0.08, 16, 32]} position={[0.8, 1.1, 0]} rotation={[0, 0, -2]}>
                <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
            </Torus>

            {/* Stem */}
            <Cylinder args={[0.15, 0.15, 0.6, 32]} position={[0, 0, 0]}>
                <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
            </Cylinder>

            {/* Base Detail - Ring */}
            <Torus args={[0.3, 0.05, 16, 32]} position={[0, -0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
            </Torus>

            {/* Main Base - Dark Marble Contrast */}
            <Cylinder args={[0.6, 0.7, 0.2, 32]} position={[0, -0.5, 0]}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.2} />
            </Cylinder>
            <Cylinder args={[0.7, 0.8, 0.1, 32]} position={[0, -0.65, 0]}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.2} />
            </Cylinder>

        </group>
    );
};

export default Trophy3D;
