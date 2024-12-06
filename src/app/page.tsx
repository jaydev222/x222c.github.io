'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Laptop, Paintbrush, Megaphone, Mail, X, Menu } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

function ServiceCard({ title, description, icon: Icon }: { title: string, description: string, icon: React.ElementType }) {
  return (
    <motion.div 
      className="p-6 bg-white rounded-xl shadow-lg overflow-hidden relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-primary"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
      <h3 className="mb-4 text-xl font-bold text-foreground flex items-center">
        <Icon className="w-6 h-6 text-primary mr-2" />
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

function ContactBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground rounded-full shadow-lg cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="px-6 py-3 flex items-center">
          <Mail className="w-5 h-5 mr-2" />
          <span>Contact Us</span>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground rounded-md py-2 px-4 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-50">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="w-8"></div>
        <h1 className="text-xl font-bold text-primary">x222c.eu</h1>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-primary hover:text-primary/80"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-4"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="mt-8">
              <ul className="space-y-4">
                <li><Link href="/" className="text-primary hover:text-primary/80">Home</Link></li>
                <li><Link href="/about" className="text-primary hover:text-primary/80">About</Link></li>
                <li><Link href="/support" className="text-primary hover:text-primary/80">Support</Link></li>
                <li><Link href="/profile" className="text-primary hover:text-primary/80">My Profile</Link></li>
                <li><Link href="/membership" className="text-primary hover:text-primary/80">Become a Member!</Link></li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />

      {/* Hero Section with Services */}
      <section className="pt-32 pb-16">
        <div className="container px-4 mx-auto">
          <AnimatedSection>
            <h2 className="mb-8 text-5xl font-bold leading-tight md:text-6xl text-foreground text-center">
              We craft digital experiences
            </h2>
            <p className="mb-12 text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              Our creative agency specializes in delivering innovative solutions that drive results for your business.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
            <AnimatedSection>
              <ServiceCard 
                title="Web Design" 
                description="We create stunning, user-friendly websites that capture your brand's essence."
                icon={Laptop}
              />
            </AnimatedSection>
            <AnimatedSection>
              <ServiceCard 
                title="Branding" 
                description="We develop cohesive brand identities that resonate with your target audience."
                icon={Paintbrush}
              />
            </AnimatedSection>
            <AnimatedSection>
              <ServiceCard 
                title="Digital Marketing" 
                description="We implement strategies to increase your online presence and drive growth."
                icon={Megaphone}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <motion.div 
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Project 1"
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 text-primary-foreground bg-primary/90 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold dot-font">Project One</h3>
                </div>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection>
              <motion.div 
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Project 2"
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 text-primary-foreground bg-primary/90 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold dot-font">Project Two</h3>
                </div>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection>
              <motion.div 
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Project 3"
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 text-primary-foreground bg-primary/90 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold dot-font">Project Three</h3>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ContactBar />
    </div>
  )
}

