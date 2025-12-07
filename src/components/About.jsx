import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import photo from '../assets/photo.jpg';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        { label: 'Projects Completed', value: '4' },
        { label: 'LeetCode Problems', value: '100+' },
        { label: 'GitHub Repos', value: '20+' },
        { label: 'Certifications', value: '2' },
    ];

    return (
        <section id="about" className="min-h-screen py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* PART 1: PERSONAL INTRODUCTION (Original Content) */}
                <motion.div
                    ref={ref}
                    className="mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Image/3D Element */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="glass rounded-3xl p-4 card-hover overflow-hidden relative group">
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10">
                                    <img
                                        src={photo}
                                        alt="Rithik R"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl blur-xl -z-10 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </motion.div>

                        {/* Right Side - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-3xl font-bold mb-6 text-white">
                                Hi! I'm a <span className="gradient-text">Passionate Developer</span>
                            </h3>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                I'm currently in my 3rd year of engineering, specializing in Full Stack Development
                                with a strong focus on Frontend technologies. I love creating beautiful, interactive
                                user experiences that make a difference.
                            </p>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                My journey in tech has been exciting, from building responsive web applications to
                                exploring Machine Learning algorithms. I'm constantly learning and pushing my
                                boundaries to stay ahead in this ever-evolving field.
                            </p>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Currently seeking placement opportunities where I can contribute my skills and grow
                                as a professional developer.
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                        className="glass rounded-xl p-4 text-center card-hover"
                                    >
                                        <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* PART 2: CODE CHRONICLES (Heatmaps) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                            Code Chronicles
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
                        <p className="text-gray-400 mt-4 text-lg">
                            My real-time coding activity and contribution journey
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* LeetCode Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <SiLeetcode className="text-4xl text-yellow-500" />
                                <div>
                                    <h3 className="text-2xl font-bold text-white">LeetCode Activity</h3>
                                    <p className="text-gray-400">Problem Solving Journey</p>
                                </div>
                            </div>

                            <div className="flex justify-center overflow-x-auto pb-4">
                                <img
                                    src="https://leetcard.jacoblin.cool/RithikRajaram?theme=dark&font=outfit&ext=heatmap"
                                    alt="LeetCode Heatmap"
                                    className="w-full max-w-4xl rounded-xl shadow-lg"
                                />
                            </div>
                            <div className="text-center mt-4">
                                <a
                                    href="https://leetcode.com/u/RithikRajaram/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
                                >
                                    View Profile <FaCode />
                                </a>
                            </div>
                        </motion.div>

                        {/* GitHub Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <FaGithub className="text-4xl text-white" />
                                <div>
                                    <h3 className="text-2xl font-bold text-white">GitHub Contributions</h3>
                                    <p className="text-gray-400">Open Source & Projects</p>
                                </div>
                            </div>

                            <div className="w-full overflow-x-auto pb-4 bg-[#0d1117] rounded-xl p-4">
                                <img
                                    src="https://ghchart.rshah.org/8b5cf6/Rithikrajaram"
                                    alt="GitHub Heatmap"
                                    className="w-full min-w-[800px]"
                                />
                            </div>
                            <div className="text-center mt-4">
                                <a
                                    href="https://github.com/Rithikrajaram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    View Profile <FaGithub />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
