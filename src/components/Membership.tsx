import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IconCheck } from '@tabler/icons-react';

const WA_NUMBER = '6281234567890';

const plans = [
  {
    id: 'member',
    tier: '🥉',
    name: 'PlayField Member',
    price: 'Rp 200k',
    period: '/bulan',
    desc: 'Untuk yang main 1–2x seminggu',
    color: '#b3b3b3',
    popular: false,
    scale: 1,
    benefits: [
      '10% off semua lapangan & slot',
      'Prioritas booking 7 hari sebelum',
      'Free 1 jam sewa locker/bulan',
      'Akses lounge & WiFi unlimited',
    ],
    waMsg: 'Halo, saya tertarik daftar PlayField Member (Rp 200k/bulan).',
  },
  {
    id: 'pro',
    tier: '🥈',
    name: 'PlayField Pro',
    price: 'Rp 450k',
    period: '/bulan',
    desc: 'Untuk yang main rutin 3x+ seminggu',
    color: '#3b82f6',
    popular: true,
    scale: 1.03,
    benefits: [
      '20% off semua lapangan',
      'Prioritas booking 14 hari sebelum',
      'Free locker personal (private, monthly)',
      'Free akses mini warm-up area',
      '1x shuttle/bola gratis per bulan',
      'Invite ke member-only tournament',
    ],
    waMsg: 'Halo, saya tertarik daftar PlayField Pro (Rp 450k/bulan).',
  },
  {
    id: 'elite',
    tier: '🥇',
    name: 'PlayField Elite',
    price: 'Rp 900k',
    period: '/bulan',
    desc: 'Untuk atlet & komunitas serius',
    color: '#f97316',
    popular: false,
    scale: 1,
    benefits: [
      '30% off semua lapangan',
      'Prioritas booking 21 hari sebelum',
      'Private locker permanent',
      'Free 4 jam lapangan per bulan',
      'Free akses semua turnamen member',
      'Nama di "PlayField Wall of Honor"',
      'Dedicated WhatsApp support',
    ],
    waMsg: 'Halo, saya tertarik daftar PlayField Elite (Rp 900k/bulan).',
  },
];

export default function Membership() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      id="member"
      ref={ref}
      className="section-padding"
      style={{ background: '#121212' }}
    >
      <div className="container-main">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="font-display text-4xl md:text-6xl text-white mb-3"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}
          >
            MAIN LEBIH SERING,
            <br />
            <span style={{ color: '#3b82f6' }}>BAYAR LEBIH HEMAT.</span>
          </h2>
          <p style={{ color: '#b3b3b3', fontFamily: 'var(--font-sans)' }}>
            Member PlayField hemat up to{' '}
            <strong style={{ color: '#22c55e' }}>30%</strong> dari harga regular.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex overflow-x-auto gap-4 pt-5 pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pt-0 md:pb-0">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-6 md:p-8 flex flex-col flex-shrink-0 snap-start w-[78vw] sm:w-[55vw] md:w-auto ${plan.popular ? 'md:scale-[1.03]' : ''}`}
              style={{
                background: '#181818',
                border: plan.popular
                  ? `1.5px solid ${plan.color}`
                  : '1px solid #2a2a2a',
                boxShadow: plan.popular
                  ? `0 0 40px rgba(59,130,246,0.12), 0 8px 24px rgba(0,0,0,0.4)`
                  : 'none',
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap"
                  style={{ background: plan.color, color: '#fff' }}
                >
                  ⭐ Terlaris
                </div>
              )}

              {/* Tier + Name */}
              <div className="mb-6">
                <span className="text-2xl">{plan.tier}</span>
                <h3
                  className="font-bold text-lg text-white mt-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm mt-1" style={{ color: '#707072' }}>
                  {plan.desc}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className="font-display text-4xl"
                  style={{ color: plan.color, fontFamily: 'var(--font-display)' }}
                >
                  {plan.price}
                </span>
                <span className="text-sm" style={{ color: '#707072' }}>
                  {plan.period}
                </span>
              </div>

              {/* Benefits */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm" style={{ color: '#b3b3b3' }}>
                    <IconCheck size={14} stroke={2.5} style={{ color: plan.color, flexShrink: 0, marginTop: '2px' }} />
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(plan.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
                style={{
                  background: plan.popular ? plan.color : 'transparent',
                  color: plan.popular ? '#fff' : plan.color,
                  border: `1px solid ${plan.color}`,
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.05em',
                }}
              >
                Daftar Sekarang
              </a>
            </motion.div>
          ))}
        </div>

        {/* Corporate footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-sm" style={{ color: '#707072' }}>
            Butuh paket untuk perusahaan?{' '}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo, saya ingin tanya Corporate Member untuk min. 10 anggota.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline transition-colors hover:text-white"
              style={{ color: '#b3b3b3' }}
            >
              Corporate Member — min. 10 anggota →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
