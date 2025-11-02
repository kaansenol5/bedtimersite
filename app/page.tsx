'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  LockClosedIcon,
  SunIcon,
  MoonIcon,
  FireIcon,
  SparklesIcon,
  ClockIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-5 md:px-10 py-20">
        <motion.div
          initial="initial"
          animate="animate"
          className="text-center space-y-8 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <Image
              src="/icon-dark.png"
              alt="Bedtimer App Icon"
              width={120}
              height={120}
              className="rounded-3xl"
              priority
            />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
          >
            Block apps at bedtime.
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Sleep better.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Automatically lock distracting apps during your sleep hours. No willpower required.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'var(--color-accent)',
                color: '#000000'
              }}
            >
              Download Now
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-2xl transition-all duration-300"
              style={{
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)'
              }}
            >
              Learn More
            </a>
          </motion.div>

          <motion.p
            variants={fadeIn}
            className="text-sm pt-4"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            Available on the App Store
          </motion.p>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-5 md:px-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Set it once. Forget about it.
            </h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Three simple steps to better sleep
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                number: '1',
                title: 'Set your schedule',
                description: 'Choose when you sleep and wake up',
                icon: <ClockIcon className="w-8 h-8" />
              },
              {
                number: '2',
                title: 'Select apps to block',
                description: 'Pick the apps that keep you awake',
                icon: <LockClosedIcon className="w-8 h-8" />
              },
              {
                number: '3',
                title: 'Sleep better',
                description: 'Apps automatically lock at bedtime',
                icon: <MoonIcon className="w-8 h-8" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative p-8 rounded-2xl text-center"
                style={{ background: 'var(--color-surface)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: 'var(--color-surface-2)',
                    color: 'var(--color-accent)'
                  }}
                >
                  {step.icon}
                </div>
                <div
                  className="text-sm font-bold mb-2"
                  style={{ color: 'var(--color-accent)' }}
                >
                  STEP {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-5 md:px-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Everything you need
            </h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Simple features that actually work
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <BoltIcon className="w-6 h-6" />,
                title: 'Automatic Blocking',
                description: 'Apps lock at bedtime, unlock when you wake up. No daily actions needed.',
                color: 'var(--color-accent)'
              },
              {
                icon: <LockClosedIcon className="w-6 h-6" />,
                title: 'Flexible Unlock Options',
                description: 'Emergency access available with instant, delayed, or impossible unlock modes.',
                color: 'var(--color-accent-muted)'
              },
              {
                icon: <FireIcon className="w-6 h-6" />,
                title: 'Track Your Progress',
                description: 'Build streaks and earn points for consistent sleep habits.',
                color: 'var(--color-pastel-orange)'
              },
              {
                icon: <SparklesIcon className="w-6 h-6" />,
                title: 'Beautiful Themes',
                description: 'Unlock new themes as you progress. Minimalist design meets pastel aesthetics.',
                color: 'var(--color-pastel-lavender)'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-2xl group hover:scale-[1.02] transition-transform duration-300"
                style={{ background: 'var(--color-surface)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: 'var(--color-surface-2)',
                    color: feature.color
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-5 md:px-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { stat: '8+', label: 'Hours of sleep' },
              { stat: '90%', label: 'Sleep consistency' },
              { stat: '0', label: 'Late night scrolls' },
              { stat: '∞', label: 'Sleep streaks' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {item.stat}
                </div>
                <div
                  className="text-sm md:text-base"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-5 md:px-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Your data stays on your device
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Bedtimer uses Apple's Screen Time API. No data collection, no tracking, no servers.
              Everything happens locally on your iPhone.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-5 md:px-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={staggerContainer} className="space-y-8">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold"
            >
              Ready for better sleep?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Download Bedtimer on the App Store
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-12 py-5 text-xl font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
                style={{
                  background: 'var(--color-accent)',
                  color: '#000000'
                }}
              >
                Get Bedtimer
              </a>
            </motion.div>

            <motion.p
              variants={fadeIn}
              className="text-sm pt-6"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              Requires iOS 16 or later
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-5 md:px-10 border-t"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <Image
              src="/icon-dark.png"
              alt="Bedtimer"
              width={48}
              height={48}
              className="rounded-xl opacity-80"
            />
          </div>
          <p className="text-lg font-medium">Bedtimer</p>

          <div className="flex items-center justify-center gap-4 text-sm">
            <Link
              href="/privacy"
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Privacy
            </Link>
            <span style={{ color: 'var(--color-text-tertiary)' }}>·</span>
            <Link
              href="/terms"
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Terms
            </Link>
          </div>

          <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
            © 2025 Kaan Senol. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
