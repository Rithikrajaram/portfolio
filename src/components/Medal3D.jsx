import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Torus, Box } from '@react-three/drei';

const Medal3D = ({ color = '#C0C0C0' }) => {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Medal Circle */}
            <Cylinder args={[0.8, 0.8, 0.2, 64]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color={color} metalness={0.1} roughness={0.2} />
            </Cylinder>

            {/* Inner Circle */}
            <Cylinder args={[0.6, 0.6, 0.22, 64]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color="#fafafa" metalness={0.1} roughness={0.2} />
            </Cylinder>

            {/* Star in center */}
            {[0, 1, 2, 3, 4].map((i) => (
                <Box
                    key={i}
                    args={[0.1, 0.5, 0.1]}
                    position={[
                        Math.cos((i * Math.PI * 2) / 5) * 0.3,
                        0,
                        Math.sin((i * Math.PI * 2) / 5) * 0.3
                    ]}
                    rotation={[0, (i * Math.PI * 2) / 5, 0]}
                >
                    <meshStandardMaterial color={color} metalness={0.1} roughness={0.2} />
                </Box>
            ))}

            {/* Ribbon Ring */}
            <Torus args={[0.3, 0.05, 16, 32]} position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color="#8B0000" metalness={0.2} roughness={0.8} />
            </Torus>
        </group>
    );
};

export default Medal3D;
