import { motion, AnimatePresence } from 'framer-motion';
import { FaInfoCircle, FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';

const Notification = ({ message, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="fixed top-24 right-4 z-50 flex items-center gap-3 px-6 py-4 rounded-xl glass border border-purple-500/30 shadow-2xl backdrop-blur-xl md:right-8"
                >
                    <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                        <FaInfoCircle className="text-white text-lg" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">Update</h4>
                        <p className="text-gray-300 text-sm">{message}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="ml-4 text-gray-400 hover:text-white transition-colors"
                    >
                        <FaTimes />
                    </button>

                    {/* Progress bar */}
                    <motion.div
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: 3, ease: "linear" }}
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-b-xl"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Notification;
