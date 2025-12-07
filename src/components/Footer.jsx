import { motion } from 'framer-motion';
import { FaHeart, FaDownload } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="glass py-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-12 border-b border-white/10 pb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 block w-fit font-display">
                            Portfolio
                        </a>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            Thank you for visiting my personal portfolio. I am dedicated to building high-quality, user-centric digital experiences. Always open to new opportunities and interesting projects.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                             <li><a href="#about" className="hover:text-purple-400 transition-colors flex items-center gap-2">About Me</a></li>
                             <li><a href="#projects" className="hover:text-purple-400 transition-colors flex items-center gap-2">My Projects</a></li>
                             <li><a href="#skills" className="hover:text-purple-400 transition-colors flex items-center gap-2">Skills & Tech</a></li>
                             <li><a href="#achievements" className="hover:text-purple-400 transition-colors flex items-center gap-2">Achievements</a></li>
                        </ul>
                    </div>

                    <div>
                         <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
                         <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <span>📍</span> Tiruppur, India
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📧</span> rithikyalini@gmail.com
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📱</span> +91 9384970509
                            </li>
                         </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-gray-400 text-center md:text-left"
                        >
                            <p className="flex items-center gap-2 justify-center md:justify-start">

                                <span className="gradient-text font-semibold">Rithik</span>
                            </p>
                            <p className="text-sm mt-1">© {currentYear} All rights reserved.</p>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex gap-6 text-sm"
                        >
                            <a href="#home" className="link-underline text-gray-400 hover:text-white transition-colors duration-300">
                                Home
                            </a>
                            <a href="#about" className="link-underline text-gray-400 hover:text-white transition-colors duration-300">
                                About
                            </a>
                            <a href="#projects" className="link-underline text-gray-400 hover:text-white transition-colors duration-300">
                                Projects
                            </a>
                            <a href="#contact" className="link-underline text-gray-400 hover:text-white transition-colors duration-300">
                                Contact
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
