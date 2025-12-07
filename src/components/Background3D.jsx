import { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const Background3D = () => {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    useEffect(() => {
        if (vantaRef.current && !vantaEffect.current) {
            vantaEffect.current = NET({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3b82f6, // Blue network lines
                backgroundColor: 0x0a0a0a, // Almost black background
                points: 12.00, // Number of connection points
                maxDistance: 20.00, // Max distance for connections
                spacing: 15.00, // Space between points
                showDots: true
            });
        }

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    return (
        <div
            ref={vantaRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
            style={{
                background: 'radial-gradient(ellipse at top, #1a1a2e 0%, #0a0a0a 50%, #000000 100%)'
            }}
        />
    );
};

export default Background3D;
