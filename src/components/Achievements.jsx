import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronLeft, FaChevronRight, FaTrophy } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Trophy3D from './Trophy3D';
import Medal3D from './Medal3D';
import Certificate3D from './Certificate3D';

import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.jpg';
import cert3 from '../assets/cert3.jpg';
import cert4 from '../assets/cert4.jpg';
import cert5 from '../assets/cert5.jpg';

const Achievements = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [currentPage, setCurrentPage] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const [flipDirection, setFlipDirection] = useState('next');

    const achievements = [
        {
            id: 1,
            title: 'GitHub Copilot Workshop',
            image: cert1,
            description: 'Task Completion of game using Copilot',
        },
        {
            id: 2,
            title: 'Hacknovate-24 hours Hackathon-WINNER !!',
            image: cert2,
            description: 'Ziya-Onestop Ayurvedic Platform',
        },
        {
            id: 3,
            title: 'EXODIA 30 hours Hackathon-WINNER !!',
            image: cert3,
            description: 'AI Face Finder in Albums-A project to Vanitha photography',
        },
        {
            id: 4,
            title: 'IBM_GenAI Hackathon-WINNER !!',
            image: cert4,
            description: 'StudyMate-A different type of sources for students to learn and test them',
        },
        {
            id: 5,
            title: 'Project Presentation-WINNER !!',
            image: cert5,
            description: 'AI-Mock Interview Platform',
        },
    ];

    const nextPage = () => {
        if (isFlipping) return;
        setFlipDirection('next');
        setIsFlipping(true);
    };

    const prevPage = () => {
        if (isFlipping) return;
        setFlipDirection('prev');
        setIsFlipping(true);
    };

    const getNextPageIndex = () => {
        return (currentPage + 1) % achievements.length;
    };

    const getPrevPageIndex = () => {
        return (currentPage - 1 + achievements.length) % achievements.length;
    };

    return (
        <section id="achievements" className="min-h-screen py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block mb-4"
                    >
                        <FaTrophy className="text-6xl text-yellow-500 mx-auto animate-bounce" />
                    </motion.div>

                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 font-display">
                        Achievements & Certifications
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>

                    <p className="text-gray-400 mt-4 text-lg">
                        Click to flip the page
                    </p>
                </motion.div>

                {/* High-Tech Tome (Dark Book) */}
                <div className="relative max-w-5xl mx-auto mb-20" style={{ perspective: '2500px' }}>
                    {/* Purple Glow Behind Book */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Book Shadow */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-20 bg-black/30 blur-3xl rounded-full"></div>

                        {/* Main Book Display */}
                        <div
                            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl shadow-2xl border-4 border-white/10"
                            style={{
                                transformStyle: 'preserve-3d',
                                boxShadow: '0 50px 100px rgba(0,0,0,0.5), inset 0 0 50px rgba(139,92,246,0.1)'
                            }}
                        >
                            {/* Book Spine Effect */}
                            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-lg z-20 rounded-l-3xl border-r border-white/5">
                                <div className="absolute inset-y-0 left-1/2 w-1 bg-purple-500/20"></div>
                            </div>

                            {/* Page Container */}
                            <div
                                className="relative min-h-[500px] md:min-h-[600px] ml-12 overflow-hidden rounded-r-3xl"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Background Page (Next/Prev content) */}
                                <div className="absolute inset-0 bg-gray-900 rounded-r-3xl border border-white/5">
                                    <div className="h-full flex flex-col p-8 md:p-12">
                                        <div className="flex-1 relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 mb-6 border border-white/10">
                                            <img
                                                src={achievements[flipDirection === 'next' ? getNextPageIndex() : getPrevPageIndex()].image}
                                                alt="Next page"
                                                className="w-full h-full object-contain opacity-50 blur-sm transform scale-95 transition-all duration-500"
                                                style={{ filter: isFlipping ? 'none' : 'blur(2px)', transform: isFlipping ? 'scale(1)' : 'scale(0.98)' }}
                                            />
                                        </div>
                                        <div className="text-center opacity-50">
                                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                                {achievements[flipDirection === 'next' ? getNextPageIndex() : getPrevPageIndex()].title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Top/Active Page - The one that transforms */}
                                <motion.div
                                    key={currentPage}
                                    className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-r-3xl shadow-xl origin-left z-10 border border-white/20"
                                    style={{ transformStyle: 'preserve-3d' }}
                                    initial={{ rotateY: 0, opacity: 1 }}
                                    animate={{
                                        rotateY: isFlipping ? (flipDirection === 'next' ? -180 : 180) : 0,
                                        opacity: isFlipping ? 0 : 1,
                                    }}
                                    transition={{
                                        rotateY: { duration: 0.8, ease: "easeInOut" },
                                        opacity: { duration: 0.6, delay: 0.1 }
                                    }}
                                    onAnimationComplete={() => {
                                        if (isFlipping) {
                                            if (flipDirection === 'next') {
                                                setCurrentPage((prev) => (prev + 1) % achievements.length);
                                            } else {
                                                setCurrentPage((prev) => (prev - 1 + achievements.length) % achievements.length);
                                            }
                                            setIsFlipping(false);
                                        }
                                    }}
                                >
                                    {/* Front Content */}
                                    <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-r-3xl">
                                        <div className="h-full flex flex-col p-8 md:p-12 relative">
                                            {/* Image */}
                                            <div className="flex-1 relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 mb-6 border border-purple-500/20">
                                                <img
                                                    src={achievements[currentPage].image}
                                                    alt={achievements[currentPage].title}
                                                    className="w-full h-full object-contain select-none"
                                                    draggable="false"
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="text-center">
                                                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                                    {achievements[currentPage].title}
                                                </h3>
                                                <p className="text-gray-400 text-lg">
                                                    {achievements[currentPage].description}
                                                </p>
                                            </div>

                                            {/* Click Zones (Invisible) */}
                                            <div onClick={nextPage} className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer z-20 group">
                                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-4xl text-purple-400 font-bold">→</div>
                                            </div>
                                            <div onClick={prevPage} className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer z-20 group">
                                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-4xl text-purple-400 font-bold">←</div>
                                            </div>

                                            {/* Decorative Corner */}
                                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-900/20 to-transparent pointer-events-none rounded-br-3xl"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Subtle Tech Grid Overlay */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none rounded-r-3xl"
                                style={{
                                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 25px, rgba(139,92,246,0.5) 25px, rgba(139,92,246,0.5) 26px)',
                                    marginLeft: '48px'
                                }}>
                            </div>
                        </div>
                    </motion.div>

                    {/* Controls */}
                    <div className="flex justify-center items-center gap-8 mt-12">
                        <button onClick={prevPage} disabled={isFlipping} className="p-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-purple-500/50 hover:scale-110 transition-all text-white disabled:opacity-50">
                            <FaChevronLeft className="text-xl" />
                        </button>
                        <div className="flex gap-2">
                            {achievements.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        if (isFlipping || i === currentPage) return;
                                        setFlipDirection(i > currentPage ? 'next' : 'prev');
                                        setCurrentPage(i);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all ${i === currentPage ? 'bg-purple-500 w-8 shadow-lg shadow-purple-500/50' : 'bg-gray-600'}`}
                                />
                            ))}
                        </div>
                        <button onClick={nextPage} disabled={isFlipping} className="p-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-purple-500/50 hover:scale-110 transition-all text-white disabled:opacity-50">
                            <FaChevronRight className="text-xl" />
                        </button>
                    </div>
                </div>

                {/* 3D Glowing Panels Section */}
                <div className="grid md:grid-cols-2 gap-12 mt-20">
                    {/* Hackathon Trophy Panel - Yellow Glow */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-[400px] relative rounded-3xl p-8 bg-black/40 backdrop-blur-xl border-2 border-yellow-500/20 hover:border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.1)] hover:shadow-[0_0_50px_rgba(234,179,8,0.3)] transition-all duration-500 group overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(0,0,0,0.4), rgba(20,20,20,0.6))',
                        }}
                    >
                        {/* Internal Gradient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                        <div className="absolute top-6 left-6 z-10 pointer-events-none">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2 drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]">
                                3x Hackathon Winner
                            </h3>
                            <p className="text-gray-300 text-lg">National Level Tech Symposiums</p>
                            <ul className="mt-4 space-y-2 text-sm text-gray-400">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.8)]"></span>
                                    IBM Gen AI 2 Days Hackathon - Runner Up !!
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.8)]"></span>
                                    EXODIA 30 Hours Hackathon - Winner !!
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.8)]"></span>
                                    Hacknovate 24 Hours Hackathon - Winner !!
                                </li>
                            </ul>
                        </div>
                        <div className="absolute inset-0 translate-x-[15%] translate-y-20 md:translate-x-[25%] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                            <Canvas>
                                <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                                <ambientLight intensity={0.6} />
                                <pointLight position={[10, 10, 10]} intensity={1.2} color="#fbbf24" />
                                <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={1.5} color="#fbbf24" />
                                <Trophy3D color="#FFD700" />
                                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
                            </Canvas>
                        </div>
                    </motion.div>

                    {/* Certifications Panel - Blue Glow */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="h-[400px] relative rounded-3xl p-8 bg-black/40 backdrop-blur-xl border-2 border-blue-500/20 hover:border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all duration-500 group overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(0,0,0,0.4), rgba(20,20,20,0.6))',
                        }}
                    >
                        {/* Internal Gradient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                        <div className="absolute top-6 left-6 z-10 pointer-events-none">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                Global Certifications
                            </h3>
                            <p className="text-gray-300 text-lg">Industrial Recognition</p>
                            <ul className="mt-4 space-y-2 text-sm text-gray-400">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                                    AWS Cloud Practitioner
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                                    Oracle Apex Cloud Developer
                                </li>
                            </ul>
                        </div>
                        <div className="absolute inset-0 translate-x-1/4 translate-y-10 md:translate-x-1/3 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                            <Canvas>
                                <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                                <ambientLight intensity={0.6} />
                                <pointLight position={[10, 10, 10]} intensity={1.2} color="#3b82f6" />
                                <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={1.5} color="#3b82f6" />
                                <Certificate3D color="#60A5FA" />
                                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
                            </Canvas>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Achievements;
