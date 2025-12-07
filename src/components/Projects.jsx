import Notification from './Notification';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [notification, setNotification] = useState({ show: false, message: '' });

    const showNotification = (message) => {
        setNotification({ show: true, message });
    };

    const projects = [
        {
            title: 'AI Google Sheet Analyzer',
            description: 'A classroom management system with AI-powered analysis to detect incomplete submissions, identify roll numbers, and automate email notifications. Includes a faculty dashboard for performance monitoring.',
            tags: ['AI', 'Google Sheets API', 'Automation', 'Dashboard'],
            image: '📊',
            github: 'https://github.com/Rithikrajaram', // Placeholder, user can update specific links
            demo: '#',
            color: 'from-green-500 to-emerald-600',
        },
        {
            title: 'Fleet Management App',
            description: 'Mobile application for real-time vehicle tracking, driver management, and route optimization. Features intuitive UI for simplified operations and maintenance scheduling.',
            tags: ['Mobile App', 'Real-time Tracking', 'UI/UX', 'Management'],
            image: '🚛',
            github: 'https://github.com/Rithikrajaram',
            demo: '#',
            color: 'from-blue-500 to-indigo-600',
        },
        {
            title: 'Automatic Number Plate Recognition (ANPR)',
            description: 'High-throughput analytics application using Kafka Streams processing 1 lakh events in 10 minutes. Includes an interactive React analytics UI for visualizing data.',
            tags: ['Kafka Streams', 'React', 'Analytics', 'Computer Vision'],
            image: '🚗',
            github: 'https://github.com/Rithikrajaram',
            demo: '#',
            color: 'from-orange-500 to-red-600',
        },
        {
            title: 'Task Management System',
            description: 'Student task management platform with status categorization (Active, Completed), due dates, and automated email reminders for pending tasks to ensure timely completion.',
            tags: ['Full Stack', 'Email Automation', 'Web App', 'Productivity'],
            image: '✅',
            github: 'https://github.com/Rithikrajaram/WT_PROJECT.git',
            demo: '#',
            color: 'from-purple-500 to-pink-600',
        },
        {
            title: 'StudyMate',
            description: 'A comprehensive study companion app designed to help students organize schedules, share resources, and collaborate on subjects effectively.',
            tags: ['React', 'Education', 'Collaboration', 'Planner'],
            image: '📚',
            github: 'https://github.com/Rithikrajaram',
            demo: '#',
            color: 'from-cyan-500 to-blue-600',
        },
    ];

    return (
        <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
            <Notification
                isVisible={notification.show}
                message={notification.message}
                onClose={() => setNotification({ ...notification, show: false })}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4 text-lg">
                        Here are some of my recent works that showcase my skills
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Tilt
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                glareColor="#ffffff"
                                glarePosition="all"
                                glareBorderRadius="20px"
                            >
                                <div className="glass rounded-2xl overflow-hidden h-full card-hover group">
                                    {/* Project Image/Icon */}
                                    <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-8xl relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                                        <span className="relative z-10">{project.image}</span>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:gradient-text transition-all duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-300 border border-white/10"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-4">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                            >
                                                <FaGithub className="text-lg" />
                                                Code
                                            </a>
                                            <a
                                                href={project.demo}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    showNotification("Live demo will be updated soon! 🚀");
                                                }}
                                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                                            >
                                                <FaExternalLinkAlt className="text-lg" />
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/Rithikrajaram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                        View All Projects on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
