import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import resume from '../assets/resume.pdf';

const Hero = () => {
    const roles = ['Full Stack Developer', 'Vibe Coder', 'ML Enthusiast'];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-500 rounded-full opacity-50"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                        }}
                        animate={{
                            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
                            x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4"
                    >
                        <span className="text-lg md:text-xl text-purple-400 font-mono">
                            Hi there! 👋 I'm
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                        style={{
                            fontFamily: 'Outfit, sans-serif',
                            textShadow: '0 0 80px rgba(139, 92, 246, 0.5)'
                        }}
                    >
                        Rithik R
                    </motion.h1>

                    {/* Animated Roles */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-2xl md:text-4xl font-semibold mb-8 h-16 relative"
                    >
                        {roles.map((role, index) => (
                            <motion.span
                                key={role}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: [0, 1, 1, 0], y: 0 }}
                                transition={{
                                    duration: 2,
                                    delay: index * 2,
                                    repeat: Infinity,
                                    repeatDelay: (roles.length - 1) * 2,
                                }}
                                className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                            >
                                {role}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        Passionate about creating stunning web experiences with modern technologies.
                        Currently in 3rd year, actively seeking placement opportunities to bring
                        innovative ideas to life.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex flex-wrap justify-center gap-6 mb-12"
                    >
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                        >
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border-2 border-purple-500 hover:border-pink-500"
                        >
                            Get In Touch
                        </a>
                        <a
                            href={resume}
                            download="Rithik_Resume.pdf"
                            className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border-2 border-pink-500 hover:border-purple-500 flex items-center gap-2"
                        >
                            <span>Download Resume</span>
                            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="flex justify-center gap-6"
                    >
                        {[
                            { icon: FaGithub, href: 'https://github.com/Rithikrajaram', label: 'GitHub' },
                            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rithik-r-9906a530a/', label: 'LinkedIn' },
                            { icon: SiLeetcode, href: 'https://leetcode.com/u/RithikRajaram/', label: 'LeetCode' },
                        ].map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 border border-white/10"
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default Hero;
