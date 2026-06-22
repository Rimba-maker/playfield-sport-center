import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IconPlus } from '@tabler/icons-react';

const faqs = [
  {
    q: 'Apakah bisa walk-in tanpa booking?',
    a: 'Bisa jika ada lapangan kosong. Tapi sangat disarankan booking online — terutama slot sore dan weekend yang sering penuh.',
  },
  {
    q: 'Berapa maksimal orang per lapangan?',
    a: 'Futsal: max 14 orang (10 main + 4 cadangan). Badminton: 4 orang. Padel: 4 orang (wajib 4, format doubles). Tenis: 4 orang.',
  },
  {
    q: 'Apakah menyediakan perlengkapan olahraga?',
    a: 'Raket badminton bisa dipinjam (deposit Rp 100k, dikembalikan). Raket padel tersedia pinjam gratis. Bola dan shuttlecock dijual di sport shop kami.',
  },
  {
    q: 'Apakah bisa perpanjang waktu di tempat?',
    a: 'Bisa, tergantung ketersediaan lapangan sesudahnya. Konfirmasi ke staff minimal 15 menit sebelum waktu habis.',
  },
  {
    q: 'Bagaimana kebijakan cancel booking?',
    a: 'Cancel H-24 = refund penuh. Cancel H-12 = refund 50%. Under 12 jam = no refund. Reschedule gratis jika H-24.',
  },
  {
    q: 'Apakah lapangan padel cocok untuk pemula?',
    a: 'Sangat cocok! Padel lebih mudah dipelajari dari tenis. Ikuti intro session gratis tiap Sabtu pagi untuk mulai dari nol.',
  },
  {
    q: 'Apakah ada parkir?',
    a: '60 mobil + 100 motor. CCTV 24 jam. Gratis untuk member, Rp 5k/jam untuk non-member.',
  },
  {
    q: 'Apakah lapangan tenis bisa dipakai saat hujan?',
    a: 'Lapangan tenis kami semi-outdoor dengan atap, tapi bisa terkena angin/air jika hujan deras. Jika tidak bisa digunakan karena hujan, booking dapat direscheduled gratis.',
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-xl overflow-hidden"
      style={{ background: '#181818', border: '1px solid #2a2a2a' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
        aria-expanded={open}
      >
        <span
          className="font-semibold text-sm text-white"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full"
          style={{
            background: open ? '#f97316' : '#2a2a2a',
            color: open ? '#fff' : '#b3b3b3',
          }}
        >
          <IconPlus size={14} stroke={2.5} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="px-6 pb-5 text-sm leading-relaxed"
              style={{ color: '#b3b3b3', fontFamily: 'var(--font-sans)' }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      id="faq"
      ref={ref}
      className="section-padding"
      style={{ background: '#0d0d0d' }}
    >
      <div className="container-main">
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
            ADA PERTANYAAN?
          </h2>
          <p style={{ color: '#707072', fontFamily: 'var(--font-sans)' }}>
            Yang paling sering ditanyakan, sudah kami jawab di sini.
          </p>
        </motion.div>

        {isInView && (
          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
