import { Search, ArrowRight, Sparkles, TrendingUp, Users, Zap, Play, Star, Shield, CheckCircle, Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef, useEffect } from "react";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Particle system - fewer particles for better performance
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-950">
      {/* Dynamic Mouse Follower Effect - Hidden on mobile for performance */}
      <motion.div
        className="fixed w-64 h-64 md:w-96 md:h-96 rounded-full pointer-events-none z-0 hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Animated Particles - Reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.slice(0, window.innerWidth < 768 ? 15 : 30).map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-purple-400/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Grid Pattern with Animation */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] md:bg-[size:72px_72px]"
        style={{ y, opacity }}
      />

      <motion.div style={{ opacity }} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 z-10"
          >
            {/* Badge with Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-xl border border-white/30 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-full group hover:bg-white/25 transition-all cursor-pointer text-xs sm:text-sm shadow-lg"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300 animate-pulse" />
              <span className="text-white font-medium">
                10,000+ professionals worldwide
              </span>
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300" />
            </motion.div>

            {/* Main Heading with Staggered Animation */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
                >
                  <motion.span
                    className="block text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Transform Your
                  </motion.span>
                  <motion.span
                    className="block relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                      Freelance Journey
                    </span>
                    {/* Animated Underline */}
                    <motion.div
                      className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    />
                  </motion.span>
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl"
              >
                Connect with world-class talent or discover your next opportunity. 
                Experience the future of work with seamless collaboration.
              </motion.p>
            </div>

            {/* Search Bar - Premium Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="relative group w-full"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl sm:rounded-2xl opacity-75 blur-sm"
                animate={{
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative bg-white/95 backdrop-blur-2xl border-2 border-white/40 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shadow-2xl">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 px-3 sm:px-4 py-2 sm:py-0">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search services or freelancers..."
                    className="flex-1 bg-transparent text-gray-900 placeholder-gray-500 text-sm sm:text-base py-2 sm:py-4 outline-none min-w-0"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 sm:px-10 py-3.5 sm:py-4 rounded-lg sm:rounded-xl shadow-xl shadow-purple-500/50 text-sm sm:text-base transition-all"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Search</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* CTA Buttons with Enhanced Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden bg-white text-indigo-950 px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all shadow-xl shadow-white/20 text-sm sm:text-base"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Free
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative group overflow-hidden border-2 border-white/30 backdrop-blur-xl text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:border-white/50 transition-all text-sm sm:text-base"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Watch Demo
                </span>
              </motion.button>
            </motion.div>

            {/* Enhanced Social Proof with Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2 sm:pt-4"
            >
              <div className="flex -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-indigo-950 bg-gradient-to-br ${
                      i === 1 ? "from-purple-400 to-indigo-600" :
                      i === 2 ? "from-indigo-400 to-purple-600" :
                      i === 3 ? "from-purple-500 to-indigo-500" :
                      "from-indigo-500 to-purple-500"
                    } flex items-center justify-center text-white cursor-pointer shadow-lg`}
                  >
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-indigo-950 bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center text-white cursor-pointer text-xs sm:text-sm shadow-lg"
                >
                  <span>50K+</span>
                </motion.div>
              </div>
              <div className="text-gray-100 space-y-1 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300" />
                  <span className="font-medium">Verified professionals</span>
                </div>
                <div className="flex gap-0.5 sm:gap-1 items-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + i * 0.1 }}
                    >
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                    </motion.span>
                  ))}
                  <span className="ml-1 sm:ml-2 font-medium">4.9/5 • 15K+ reviews</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Interactive Visual Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Dashboard */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 xl:p-8 shadow-2xl"
            >
              {/* Live Stats Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-between mb-6"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
                  />
                  <span className="text-white text-sm xl:text-base font-medium">Live Dashboard</span>
                </div>
              </motion.div>

              {/* Glassmorphic Stats Cards */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 xl:p-6 cursor-pointer relative overflow-hidden group"
                >
                  <div className="relative flex items-center justify-between">
                    <div>
                      <div className="text-gray-300 mb-1 text-xs xl:text-sm font-medium">Total Projects</div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                        className="text-white text-2xl xl:text-3xl"
                      >
                        500K+
                      </motion.div>
                      <div className="text-purple-300 mt-2 flex items-center gap-1 text-xs xl:text-sm font-medium">
                        <TrendingUp className="w-3 h-3 xl:w-4 xl:h-4" />
                        <span>+23% this month</span>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 xl:w-16 xl:h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <Sparkles className="w-6 h-6 xl:w-8 xl:h-8 text-white" />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-4 xl:p-6 cursor-pointer relative overflow-hidden"
                >
                  <div className="relative flex items-center justify-between">
                    <div>
                      <div className="text-gray-300 mb-1 text-xs xl:text-sm font-medium">Active Freelancers</div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.9, type: "spring" }}
                        className="text-white text-2xl xl:text-3xl"
                      >
                        1M+
                      </motion.div>
                      <div className="text-purple-300 mt-2 flex items-center gap-1 text-xs xl:text-sm font-medium">
                        <TrendingUp className="w-3 h-3 xl:w-4 xl:h-4" />
                        <span>Growing daily</span>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 xl:w-16 xl:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <Users className="w-6 h-6 xl:w-8 xl:h-8 text-white" />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 xl:p-6 cursor-pointer relative overflow-hidden"
                >
                  <div className="relative flex items-center justify-between">
                    <div>
                      <div className="text-gray-300 mb-1 text-xs xl:text-sm font-medium">Avg. Response Time</div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, type: "spring" }}
                        className="text-white text-2xl xl:text-3xl"
                      >
                        &lt;2hrs
                      </motion.div>
                      <div className="text-purple-300 mt-2 flex items-center gap-1 text-xs xl:text-sm font-medium">
                        <Zap className="w-3 h-3 xl:w-4 xl:h-4" />
                        <span>Lightning fast</span>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 xl:w-16 xl:h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <Zap className="w-6 h-6 xl:w-8 xl:h-8 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Stat Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
              animate-on-scroll={{ y: [0, -20, 0] }}
              className="absolute -top-6 -right-6 xl:-top-8 xl:-right-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-4 xl:p-6 shadow-2xl"
            >
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 xl:w-5 xl:h-5" />
                  <span className="text-xs xl:text-sm">Success Rate</span>
                </div>
                <div className="text-3xl xl:text-4xl">99%</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 -left-6 xl:-bottom-8 xl:-left-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-4 xl:p-6 shadow-2xl"
            >
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 xl:w-5 xl:h-5" />
                  <span className="text-xs xl:text-sm">Paid Out</span>
                </div>
                <div className="text-3xl xl:text-4xl">$2M+</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-indigo-950 to-transparent pointer-events-none" />
    </div>
  );
}
