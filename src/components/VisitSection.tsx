import { useState, type FormEvent } from 'react';
import {
  Input,
  Button,
  Label,
  Textarea,
  makeStyles,
} from '@fluentui/react-components';

// ── Types ────────────────────────────────────────────────────────────────────
interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

// ── Styles ───────────────────────────────────────────────────────────────────
const useStyles = makeStyles({
  section: {
    backgroundColor: '#FDF8F5',
    padding: '80px 24px',
    '@media (max-width: 768px)': {
      padding: '56px 20px',
    },
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },

  /* ── Headings ── */
  heading: {
    fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
    fontSize: '42px',
    fontWeight: 700,
    color: '#2D1B14',
    textAlign: 'center',
    margin: '0 0 8px 0',
    lineHeight: 1.2,
    '@media (max-width: 768px)': {
      fontSize: '32px',
    },
  },
  subtitle: {
    fontFamily: 'Montserrat, "Helvetica Neue", Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 300,
    color: '#2D1B14',
    textAlign: 'center',
    margin: '0 0 52px 0',
    lineHeight: 1.5,
    opacity: 0.7,
    '@media (max-width: 768px)': {
      fontSize: '14px',
      marginBottom: '40px',
    },
  },

  /* ── Form ── */
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },

  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },

  label: {
    fontFamily: 'Montserrat, "Helvetica Neue", Arial, sans-serif',
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: '#2D1B14',
    padding: 0,
  },

  /* Fluent UI Input / Textarea overrides */
  input: {
    backgroundColor: '#FFFFFF',
    fontFamily: 'Montserrat, "Helvetica Neue", Arial, sans-serif',
    fontSize: '14px',
    color: '#1A1A1A',
    '& .fui-Input__input': {
      backgroundColor: '#FFFFFF',
    },
  },
  textarea: {
    backgroundColor: '#FFFFFF',
    fontFamily: 'Montserrat, "Helvetica Neue", Arial, sans-serif',
    fontSize: '14px',
    color: '#1A1A1A',
    minHeight: '120px',
    '& .fui-Textarea__textarea': {
      backgroundColor: '#FFFFFF',
    },
  },

  /* ── Button ── */
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '12px',
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  button: {
    borderRadius: '9999px',
    backgroundColor: '#C9754A',
    color: '#FFFFFF',
    fontFamily: 'Montserrat, "Helvetica Neue", Arial, sans-serif',
    fontWeight: 700,
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    padding: '14px 40px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
    '@media (max-width: 768px)': {
      width: '100%',
      padding: '14px 24px',
    },
    ':hover': {
      backgroundColor: '#B8653A',
      transform: 'translateY(-1px)',
    },
    ':active': {
      backgroundColor: '#9A5530',
      transform: 'translateY(0)',
    },
  },

  smallPrint: {
    fontFamily: 'Montserrat, "Helvetica Neue", Arial, sans-serif',
    fontSize: '12px',
    color: '#999999',
    textAlign: 'center',
    marginTop: '20px',
    lineHeight: 1.5,
  },

  /* ── Success ── */
  successContainer: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  successIcon: {
    fontSize: '48px',
    marginBottom: '16px',
    display: 'block',
    color: '#C9754A',
  },
  successTitle: {
    fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
    fontSize: '32px',
    fontWeight: 700,
    color: '#2D1B14',
    margin: '0 0 12px 0',
    lineHeight: 1.3,
  },
  successText: {
    fontFamily: 'Montserrat, "Helvetica Neue", Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    color: '#1A1A1A',
    margin: '0 0 32px 0',
    lineHeight: 1.6,
    opacity: 0.7,
  },
  successButton: {
    borderRadius: '9999px',
    backgroundColor: '#C9754A',
    color: '#FFFFFF',
    fontFamily: 'Montserrat, "Helvetica Neue", Arial, sans-serif',
    fontWeight: 700,
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    padding: '12px 32px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    ':hover': {
      backgroundColor: '#B8653A',
    },
  },
});

// ── Component ────────────────────────────────────────────────────────────────
const VisitSection = () => {
  const styles = useStyles();
  const [formValues, setFormValues] = useState<ContactFormValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Frontend-only demo: just show success
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormValues(initialValues);
    setSubmitted(false);
  };

  // ── Success State ──
  if (submitted) {
    return (
      <section id="visit" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.successContainer}>
            <span className={styles.successIcon} aria-hidden="true">
              ✦
            </span>
            <h2 className={styles.successTitle}>Merci pour votre message&nbsp;!</h2>
            <p className={styles.successText}>
              Nous vous répondrons dans les plus brefs délais.
              <br />
              À très bientôt chez BeanUp&nbsp;!
            </p>
            <button
              type="button"
              className={styles.successButton}
              onClick={handleReset}
            >
              Nouveau message
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ── Form State ──
  return (
    <section id="visit" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Nous Rendre Visite</h2>
        <p className={styles.subtitle}>
          Une question, une suggestion ? Écrivez-nous&nbsp;!
        </p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {/* ── Name ── */}
          <div className={styles.fieldGroup}>
            <Label className={styles.label} htmlFor="visit-name">
              Nom complet
            </Label>
            <Input
              id="visit-name"
              className={styles.input}
              appearance="outline"
              value={formValues.name}
              onChange={(_, data) => handleChange('name', data.value)}
              placeholder="Votre nom"
              required
            />
          </div>

          {/* ── Email ── */}
          <div className={styles.fieldGroup}>
            <Label className={styles.label} htmlFor="visit-email">
              Email
            </Label>
            <Input
              id="visit-email"
              className={styles.input}
              type="email"
              appearance="outline"
              value={formValues.email}
              onChange={(_, data) => handleChange('email', data.value)}
              placeholder="vous@email.com"
              required
            />
          </div>

          {/* ── Phone / WhatsApp ── */}
          <div className={styles.fieldGroup}>
            <Label className={styles.label} htmlFor="visit-phone">
              Téléphone / WhatsApp
            </Label>
            <Input
              id="visit-phone"
              className={styles.input}
              type="tel"
              appearance="outline"
              value={formValues.phone}
              onChange={(_, data) => handleChange('phone', data.value)}
              placeholder="+216 XX XXX XXX"
            />
          </div>

          {/* ── Message ── */}
          <div className={styles.fieldGroup}>
            <Label className={styles.label} htmlFor="visit-message">
              Message
            </Label>
            <Textarea
              id="visit-message"
              className={styles.textarea}
              appearance="outline"
              resize="vertical"
              value={formValues.message}
              onChange={(_, data) => handleChange('message', data.value)}
              placeholder="Votre message, une question, une suggestion..."
            />
          </div>

          {/* ── Submit ── */}
          <div className={styles.buttonWrapper}>
            <Button
              type="submit"
              className={styles.button}
              appearance="primary"
            >
              Envoyer
            </Button>
          </div>
        </form>

        <p className={styles.smallPrint}>
          Nous vous répondons sous 24h. À très bientôt&nbsp;!
        </p>
      </div>
    </section>
  );
};

export default VisitSection;
