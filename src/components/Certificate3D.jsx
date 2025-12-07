
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, RoundedBox, Sparkles } from '@react-three/drei';

const Certificate3D = ({ color = '#FFD700' }) => {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Glowing Particles around the certificate */}
            <Sparkles count={50} scale={2.5} size={2} speed={0.4} opacity={0.5} color={color} />

            {/* Main Certificate Body Frame - Metallic Outline */}
            <RoundedBox args={[1.6, 1.2, 0.08]} radius={0.1} smoothness={4} position={[0, 0, 0]}>
                <meshStandardMaterial
                    color={color}
                    metalness={0.9}
                    roughness={0.2}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </RoundedBox>

            {/* Inner Dark Frame for contrast */}
            <RoundedBox args={[1.45, 1.05, 0.09]} radius={0.05} smoothness={4} position={[0, 0, 0.01]}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
            </RoundedBox>

            {/* White Paper Content */}
            <Box args={[1.35, 0.95, 0.1]} position={[0, 0, 0.02]}>
                <meshStandardMaterial color="#FFF8DC" metalness={0.1} roughness={0.8} />
            </Box>

            {/* Dummy Text Lines to look like a document */}
            <Box args={[1.0, 0.02, 0.105]} position={[0, 0.25, 0.02]}><meshStandardMaterial color="#333" /></Box>
            <Box args={[0.8, 0.02, 0.105]} position={[0, 0.15, 0.02]}><meshStandardMaterial color="#555" /></Box>
            <Box args={[0.9, 0.01, 0.105]} position={[0, 0.05, 0.02]}><meshStandardMaterial color="#ccc" /></Box>
            <Box args={[0.9, 0.01, 0.105]} position={[0, -0.05, 0.02]}><meshStandardMaterial color="#ccc" /></Box>

            {/* Wax Seal - 3D Detail */}
            <group position={[0.45, -0.3, 0.06]}>
                <mesh>
                    <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
                    <meshStandardMaterial color="#C0392B" metalness={0.3} roughness={0.4} />
                </mesh>
                <mesh position={[0, 0, 0.03]}>
                    <cylinderGeometry args={[0.12, 0.12, 0.02, 32]} />
                    <meshStandardMaterial color="#E74C3C" metalness={0.2} roughness={0.5} />
                </mesh>
                {/* Ribbon tails */}
                <mesh position={[-0.05, -0.2, -0.02]} rotation={[0, 0, 0.4]}>
                    <boxGeometry args={[0.08, 0.4, 0.01]} />
                    <meshStandardMaterial color="#C0392B" />
                </mesh>
                <mesh position={[0.05, -0.2, -0.02]} rotation={[0, 0, -0.4]}>
                    <boxGeometry args={[0.08, 0.4, 0.01]} />
                    <meshStandardMaterial color="#C0392B" />
                </mesh>
            </group>
        </group>
    );
};

export default Certificate3D;
