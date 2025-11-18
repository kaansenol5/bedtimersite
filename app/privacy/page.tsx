'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export default function Privacy() {
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
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              Last updated: January 2025
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Your Privacy Matters</h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Nightshade is built with privacy at its core. We believe your sleep data is personal and should stay that way.
              </p>
            </section>

            {/* Data Storage */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">All Data Stays Local</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <p>
                  All of your data is stored locally on your device. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your sleep schedule and bedtime settings</li>
                  <li>Apps you've chosen to block</li>
                  <li>Sleep streaks and points</li>
                  <li>Theme preferences and unlocked rewards</li>
                  <li>All usage history and statistics</li>
                </ul>
                <p>
                  <strong>We do not have access to any of this data.</strong> It never leaves your iPhone.
                </p>
              </div>
            </section>

            {/* Screen Time API */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Screen Time Integration</h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Nightshade uses Apple's Screen Time API to block apps during your scheduled bedtime. This API is designed
                with privacy in mind—all app blocking happens locally on your device through iOS. Apple does not share
                your Screen Time data with us.
              </p>
            </section>

            {/* Analytics */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">What We Track</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <p>
                  We collect limited analytics data to improve the app experience. Specifically, we track:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Onboarding retention:</strong> Whether users complete the initial app setup</li>
                  <li><strong>Location data:</strong> Your approximate location (country/region level)</li>
                </ul>
                <p>
                  This data helps us understand how users interact with the app and where our users are located,
                  allowing us to improve the onboarding experience and provide better support.
                </p>
              </div>
            </section>

            {/* Third Parties */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Third-Party Services</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <p>
                  To provide and improve Nightshade, we use the following third-party services:
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-white mb-2">Mixpanel</p>
                    <p>
                      We use Mixpanel for analytics to understand how users interact with the app and track
                      onboarding completion. Mixpanel may collect device information, location data, and usage patterns.
                    </p>
                    <a
                      href="https://mixpanel.com/legal/privacy-policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 hover:opacity-80 transition-opacity"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      View Mixpanel Privacy Policy →
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-white mb-2">RevenueCat</p>
                    <p>
                      We use RevenueCat to manage in-app purchases and subscriptions. RevenueCat processes
                      purchase-related information and may collect device identifiers.
                    </p>
                    <a
                      href="https://www.revenuecat.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 hover:opacity-80 transition-opacity"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      View RevenueCat Privacy Policy →
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-white mb-2">Apple Screen Time API</p>
                    <p>
                      The app blocking functionality uses Apple's Screen Time API, which operates entirely
                      on your device. Apple does not share your Screen Time data with us.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* What's Not Collected */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">What We Don't Collect</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <p>Despite using analytics services, we do NOT collect or have access to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your sleep schedule or bedtime settings</li>
                  <li>Which specific apps you choose to block</li>
                  <li>Your streak counts or points</li>
                  <li>Your theme preferences</li>
                  <li>Your contacts or photos</li>
                  <li>Any Screen Time data (this stays on your device)</li>
                </ul>
                <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                  Your personal sleep data always stays on your device.
                </p>
              </div>
            </section>


            {/* Data Security */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Data Security</h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Your core sleep data (schedule, blocked apps, streaks, themes) is stored locally on your device
                and protected by your iPhone's security features, including encryption and biometric authentication.
                Analytics data collected by Mixpanel and RevenueCat is transmitted securely and handled according
                to their respective privacy policies.
              </p>
            </section>

            {/* Children */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Children's Privacy</h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Nightshade does not knowingly collect any information from anyone, including children under 13.
                The app is designed to work entirely offline with local storage only.
              </p>
            </section>

            {/* Changes */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Changes to This Policy</h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                If we make any changes to this privacy policy, we will update this page and change the
                "Last updated" date at the top. We will never reduce your privacy protections without your consent.
              </p>
            </section>

            {/* Contact */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Questions?</h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                If you have any questions about this privacy policy or how Nightshade handles your data,
                please contact us through the App Store.
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
