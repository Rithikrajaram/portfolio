import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiTensorflow, SiHtml5, SiCss3, SiLinux } from 'react-icons/si';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skillCategories = [
        {
            title: 'Frontend',
            color: 'from-blue-500 to-cyan-500',
            skills: [
                { name: 'React', icon: FaReact, level: 90 },
                { name: 'JavaScript', icon: SiJavascript, level: 85 },
                { name: 'HTML5', icon: SiHtml5, level: 95 },
                { name: 'CSS3', icon: SiCss3, level: 90 },
            ],
        },
        {
            title: 'Backend',
            color: 'from-green-500 to-emerald-500',
            skills: [
                { name: 'Node.js', icon: FaNodeJs, level: 85 },
                { name: 'Express', icon: SiExpress, level: 80 },
                { name: 'MongoDB', icon: SiMongodb, level: 75 },
                { name: 'Java', icon: FaJava, level: 70 },
            ],
        },
        {
            title: 'Tools & Others',
            color: 'from-purple-500 to-pink-500',
            skills: [
                { name: 'Git', icon: FaGitAlt, level: 85 },
                { name: 'TensorFlow', icon: SiTensorflow, level: 60 },
                { name: 'Linux', icon: SiLinux, level: 75 },
                { name: 'Python', icon: FaPython, level: 85 },
            ],
        },
    ];

    return (
        <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
                        Skills & Technologies
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                            className="glass rounded-2xl p-6 card-hover"
                        >
                            <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <skill.icon className={`text-2xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                                                <span className="font-semibold text-white">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : {}}
                                                transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                                                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Cloud */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <h3 className="text-2xl font-bold mb-6 text-white">Also Familiar With</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Computer Vision', 'DBMS', 'Three.js', 'TypeScript', 'SQL', 'Machine Learning', 'Deep Learning'].map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="relative px-6 py-3 rounded-xl text-sm font-bold text-white bg-gray-900 border border-gray-700 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:border-purple-500 transition-all duration-300 cursor-pointer overflow-hidden group"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative z-10">{tech}</span>
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
