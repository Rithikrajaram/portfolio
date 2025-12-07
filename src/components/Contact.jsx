import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'rithikyalini@gmail.com',
            href: 'mailto:rithikyalini@gmail.com',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: FaPhone,
            label: 'Phone',
            value: '+91 9384970509',
            href: 'tel:+919384970509',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Location',
            value: 'Tiruppur, India',
            href: '#',
            color: 'from-purple-500 to-pink-500',
        },
    ];

    const socialLinks = [
        {
            icon: FaGithub,
            label: 'GitHub',
            href: 'https://github.com/Rithikrajaram',
            color: 'hover:text-gray-400',
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/rithik-r-9906a530a/',
            color: 'hover:text-blue-500',
        },
        {
            icon: SiLeetcode,
            label: 'LeetCode',
            href: 'https://leetcode.com/u/RithikRajaram/',
            color: 'hover:text-yellow-500',
        },
    ];

    return (
        <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4 text-lg">
                        Let's discuss your next project or opportunity
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold mb-6 text-white">
                            Contact Information
                        </h3>
                        <p className="text-gray-400 mb-8 text-lg">
                            Feel free to reach out to me through any of these channels. I'm always open to discussing new opportunities and collaborations.
                        </p>

                        {/* Contact Cards */}
                        <div className="space-y-4 mb-8">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    className="glass rounded-xl p-4 flex items-center gap-4 card-hover group"
                                >
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <info.icon className="text-xl text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">{info.label}</div>
                                        <div className="text-white font-semibold">{info.value}</div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-xl font-bold mb-4 text-white">Follow Me</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        className={`w-14 h-14 glass rounded-full flex items-center justify-center text-2xl ${social.color} transition-all duration-300`}
                                    >
                                        <social.icon />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300 text-white"
                                    placeholder="Enter your name..."
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300 text-white"
                                    placeholder="Enter your email..."
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300 text-white resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full btn-primary px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <FaPaperPlane />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
