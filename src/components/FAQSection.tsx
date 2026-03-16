'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Sifariş neçə günə hazır olur?',
    answer: 'Sifarişiniz qəbul edildikdən sonra adətən 12–24 saat ərzində hazırlanır. Premium və mürəkkəb dizaynlar üçün bu müddət 48 saata qədər uzana bilər. Tezliklə lazım olması halında bunu sifarişdə qeyd etməyiniz kifayətdir.',
  },
  {
    question: 'Dəyişiklik etmək mümkündür?',
    answer: 'Bəli, sifariş verildikdən sonra 2 dəfəyə qədər pulsuz dəyişiklik hüququnuz var. Dəyişikliklər ad, tarix, rəng, font kimi detalları əhatə edir. Əsaslı dizayn dəyişikliyi üçün əlavə haqqı nəzərdə tutun.',
  },
  {
    question: 'WhatsApp ilə sifariş verə bilərəm?',
    answer: 'Bəli, əlbəttə! Bütün sifarişlər WhatsApp üzərindən qəbul edilir. Sizə rahat olduqda — gecə də, gündüz də — yazın. Nömrəmiz: +994 XX XXX XX XX',
  },
  {
    question: 'Qiymətlər necə hesablanır?',
    answer: 'Qiymətlər seçdiyiniz şablona, fərdiləşdirmə dərəcəsinə və əlavə funksiyalara (animasiya, musiqi, RSVP formu) görə dəyişir. Ən sadə dəvətnamələr 20 AZN-dən başlayır. Dəqiq qiymət üçün bizə yazmağınız kifayətdir.',
  },
  {
    question: 'Hazır dizaynı fərdiləşdirmək olur?',
    answer: 'Bəli, bütün hazır şablonlar sizin məlumatlarınız, rəngləriniz və tercihlərinizdə tam fərdiləşdirilir. Adlar, tarix, yer, xüsusi mesaj — hamısı dəyişdirilir. Öz rəng palitrənizi da istifadə edə bilərik.',
  },
  {
    question: 'Dəvətnaməni necə qonaqlara çatdırıram?',
    answer: 'Hazır dəvətnamə sizə link şəklində göndərilir. Bu linki WhatsApp, Instagram, Telegram, e-poçt — istənilən platformda paylaşa bilərsiniz. Əlavə olaraq QR kod formatında da hazırlaya bilərik.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        padding: 'clamp(80px, 12vw, 140px) 32px',
        background: 'var(--color-white)',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p className="section-tag" style={{ marginBottom: '16px' }}>
            ✦ Tez-tez Soruşulanlar ✦
          </p>
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              marginBottom: '20px',
              lineHeight: 1.15,
            }}
          >
            Ağlınızdakı
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>
              Sualların Cavabı
            </span>
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                border: openIdx === i
                  ? '1px solid rgba(201,169,110,0.4)'
                  : '1px solid rgba(201,169,110,0.15)',
                borderRadius: '4px',
                overflow: 'hidden',
                transition: 'border-color 0.3s ease',
                background: openIdx === i ? 'var(--color-cream)' : '#fff',
              }}
            >
              {/* Question */}
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '20px',
                  padding: '24px 28px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '19px',
                    fontWeight: openIdx === i ? 500 : 400,
                    color: openIdx === i ? 'var(--color-text)' : 'var(--color-text)',
                    letterSpacing: '0.01em',
                    flex: 1,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {faq.question}
                </span>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    background: openIdx === i ? 'var(--color-gold)' : 'transparent',
                    border: '1px solid',
                    borderColor: openIdx === i ? 'var(--color-gold)' : 'rgba(201,169,110,0.4)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: openIdx === i ? '#fff' : 'var(--color-gold)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {openIdx === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: openIdx === i ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '14px',
                    fontWeight: 300,
                    color: 'var(--color-text-light)',
                    lineHeight: 1.85,
                    padding: '0 28px 28px',
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '64px',
            padding: '48px',
            background: 'var(--color-cream)',
            border: '1px solid rgba(201,169,110,0.2)',
            borderRadius: '4px',
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '22px',
              fontStyle: 'italic',
              color: 'var(--color-text)',
              marginBottom: '8px',
            }}
          >
            Başqa sualınız var?
          </p>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '14px',
              fontWeight: 300,
              color: 'var(--color-text-light)',
              marginBottom: '28px',
            }}
          >
            WhatsApp üzərindən bizə yazın, dərhal cavablayaq
          </p>
          <a
            href="https://wa.me/994XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            WhatsApp-da Yazın
          </a>
        </div>
      </div>
    </section>
  );
}
