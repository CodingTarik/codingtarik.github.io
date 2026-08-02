import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Activity, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function FocusDetector() {
    const [isFocused, setIsFocused] = useState(document.hasFocus());
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const handleFocus = () => {
            setIsFocused(true);
            addToHistory('Gained Focus');
        };

        const handleBlur = () => {
            setIsFocused(false);
            addToHistory('Lost Focus');
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                setIsFocused(false);
                addToHistory('Tab Hidden');
            } else {
                // We don't automatically set focused to true here because visibility doesn't guarantee focus
                // But usually focus follows visibility. We'll let the focus event handle the true state if it fires.
                addToHistory('Tab Visible');
            }
        };

        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Initial check
        setIsFocused(document.hasFocus());

        return () => {
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('blur', handleBlur);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const addToHistory = (action) => {
        setHistory(prev => [{
            id: Date.now(),
            action,
            time: new Date().toLocaleTimeString()
        }, ...prev].slice(0, 20)); // Keep last 20 events
    };

    return (
        <div className={`min-h-[calc(100vh-64px)] w-full transition-colors duration-500 overflow-hidden relative flex flex-col items-center justify-center p-4 ${isFocused
                ? 'bg-emerald-50 dark:bg-emerald-950/30'
                : 'bg-red-50 dark:bg-red-950/30'
            }`}>

            {/* Background Pulse Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${isFocused ? 'bg-emerald-500/20' : 'bg-red-500/20'
                        }`}
                />
            </div>

            <div className="relative z-10 max-w-2xl w-full">
                {/* Main Status Display */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className={`relative backdrop-blur-xl border-4 rounded-3xl p-12 text-center shadow-2xl transition-colors duration-500 ${isFocused
                            ? 'bg-white/80 dark:bg-stone-900/80 border-emerald-500 shadow-emerald-500/20'
                            : 'bg-white/80 dark:bg-stone-900/80 border-red-500 shadow-red-500/20'
                        }`}
                >
                    <motion.div
                        animate={{ rotate: isFocused ? 0 : 180 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-colors duration-500 ${isFocused ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
                            }`}
                    >
                        {isFocused ? <Eye size={48} /> : <EyeOff size={48} />}
                    </motion.div>

                    <h1 className={`text-4xl md:text-5xl font-black mb-4 transition-colors duration-500 ${isFocused ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
                        }`}>
                        {isFocused ? 'FOCUSED' : 'WAYWARD'}
                    </h1>

                    <p className="text-xl text-stone-600 dark:text-stone-300 font-medium">
                        {isFocused
                            ? "You're paying attention! Keep it up."
                            : "Focus lost! Come back to the app."}
                    </p>

                    {!isFocused && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 flex items-center justify-center gap-2 text-red-500 font-semibold"
                        >
                            <AlertCircle size={20} />
                            <span>User is currently tabbed out</span>
                        </motion.div>
                    )}
                </motion.div>

                {/* History Log */}
                <div className="mt-8 bg-white/50 dark:bg-stone-900/50 backdrop-blur-md rounded-2xl border border-stone-200 dark:border-stone-800 p-6 max-h-60 overflow-y-auto">
                    <div className="flex items-center gap-2 mb-4 text-stone-500 dark:text-stone-400 font-medium uppercase tracking-wider text-xs">
                        <Activity size={14} />
                        Focus History
                    </div>
                    <div className="space-y-2">
                        <AnimatePresence initial={false}>
                            {history.map((event) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, x: -20, height: 0 }}
                                    animate={{ opacity: 1, x: 0, height: 'auto' }}
                                    className={`flex items-center justify-between text-sm p-2 rounded-lg ${event.action.includes('Focus') || event.action.includes('Visible')
                                            ? 'bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300'
                                            : 'bg-red-100/50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                                        }`}
                                >
                                    <span className="font-medium flex items-center gap-2">
                                        {event.action.includes('Focus') ? <CheckCircle2 size={14} /> : <EyeOff size={14} />}
                                        {event.action}
                                    </span>
                                    <span className="opacity-70 font-mono text-xs">{event.time}</span>
                                </motion.div>
                            ))}
                            {history.length === 0 && (
                                <div className="text-center py-4 text-stone-400 italic text-sm">
                                    Waiting for activity...
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
