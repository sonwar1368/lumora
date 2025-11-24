'use client'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import { useState } from 'react'

export default function Hero() {
  const [showConfetti, setShowConfetti] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {showConfetti && <Confetti recycle={false} numberOfPieces={400} />}
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Build the<br />Future Today
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mt-8 max-w-xl">
            The most powerful AI-native platform. Launch intelligent apps 10× faster.
          </p>
          <button
            onClick={() => setShowConfetti(true)}
            className="mt-12 px-10 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Early Access →
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 blur-3xl opacity-50 animate-pulse"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl h-96 flex items-center justify-center text-white text-4xl font-bold">
              3D Mockup (Spline or Image)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
