import { Template } from '@/data/templates';

interface Props {
  template: Template;
}

/**
 * Renders a phone-frame-style preview for a template.
 * If a public preview image exists it will show it, otherwise a
 * colour-coded placeholder with the template name.
 */
export default function PhonePreview({ template }: Props) {
  return (
    <div className="phone-frame">
      {template.preview ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={template.preview} alt={template.name} />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: template.color,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            paddingTop: 14, // leave space for notch
          }}
        >
          {/* Decorative rings */}
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.55)',
                background: 'rgba(255,255,255,0.12)',
              }}
            />
          </div>
          <span
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 10,
              fontFamily: 'var(--font-serif)',
              textAlign: 'center',
              padding: '0 12px',
              lineHeight: 1.4,
            }}
          >
            {template.name}
          </span>
        </div>
      )}
    </div>
  );
}
