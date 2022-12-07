import { useTranslation } from "react-i18next";
import ContactForm from "./common/ContactForm";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div id="contact" className="fix">
      <div className="rn-contact-area ptb--120 bg_color--1">
        <ContactForm
          contactImages="/assets/images/about/about-9.jpg"
          contactTitle={t('contact:title')}
        />
      </div>
    </div>
  );
};

export default Contact;
