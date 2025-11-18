'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export default function Terms() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="py-6 px-5 md:px-10 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/icon-dark.png"
              alt="Nightshade"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold">Nightshade</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-20 px-5 md:px-10">
        <motion.div
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto space-y-12"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
            <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              Last updated: January 2025
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">License Agreement</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <p>
                  By downloading and using Nightshade, you agree to be bound by Apple's Standard End User License Agreement (EULA).
                </p>
                <p>
                  Nightshade is licensed, not sold, to you for use strictly in accordance with the terms of this agreement.
                </p>
              </div>
            </section>

            {/* Apple EULA */}
            <section
              className="space-y-4 p-6 rounded-2xl"
              style={{ background: 'var(--color-surface)' }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold">Apple Standard EULA</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <p>
                  This application is licensed under the Apple Standard End User License Agreement.
                </p>
                <p>
                  You can read the full Apple Licensed Application End User License Agreement here:
                </p>
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'var(--color-surface-2)',
                    color: 'var(--color-accent)'
                  }}
                >
                  View Apple EULA →
                </a>
              </div>
            </section>

            {/* Acceptable Use */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Acceptable Use</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <p>You agree to use Nightshade only for lawful purposes and in accordance with this agreement. You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Attempt to reverse engineer, decompile, or disassemble the app</li>
                  <li>Use the app in any way that violates applicable laws or regulations</li>
                  <li>Circumvent or attempt to bypass the app's security features</li>
                  <li>Use the app to harm minors in any way</li>
                </ul>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Disclaimer</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <p>
                  Nightshade is provided "as is" without warranties of any kind, either express or implied.
                  While we strive to provide a reliable service, we do not guarantee that the app will be
                  error-free or uninterrupted.
                </p>
                <p>
                  Nightshade is designed to help you build better sleep habits, but it is not a substitute
                  for professional medical advice. If you have sleep disorders or health concerns, please
                  consult a healthcare professional.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Limitation of Liability</h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                To the maximum extent permitted by law, Kaan Senol shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
                whether incurred directly or indirectly, or any loss of data, use, goodwill, or other
                intangible losses resulting from your use of Nightshade.
              </p>
            </section>

            {/* Screen Time API */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Screen Time Requirements</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <p>
                  Nightshade requires iOS 16 or later and uses Apple's Screen Time API to function.
                  You must grant the app permission to use Screen Time features. If you revoke these
                  permissions, the app will not be able to block apps during bedtime.
                </p>
                <p>
                  You acknowledge that app blocking functionality is dependent on iOS system features
                  and may be affected by iOS updates or changes to the Screen Time API.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Changes to Terms</h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                We may update these terms from time to time. If we make material changes, we will notify
                you through the app or update this page with a new "Last updated" date. Your continued
                use of Nightshade after changes become effective constitutes your acceptance of the revised terms.
              </p>
            </section>

            {/* Termination */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Termination</h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                You may stop using Nightshade at any time by deleting the app from your device. We reserve
                the right to terminate or suspend your access to the app if you violate these terms.
              </p>
            </section>

            {/* Governing Law */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Governing Law</h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                These terms shall be governed by and construed in accordance with the laws applicable
                in your jurisdiction, without regard to conflict of law provisions.
              </p>
            </section>

            {/* Contact */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                If you have any questions about these terms, please contact us through the App Store.
              </p>
            </section>
          </motion.div>

          {/* Back Link */}
          <motion.div variants={fadeInUp} className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-base font-medium hover:opacity-80 transition-opacity"
              style={{ color: 'var(--color-accent)' }}
            >
              ← Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-5 md:px-10 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
            © 2025 Kaan Senol. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
