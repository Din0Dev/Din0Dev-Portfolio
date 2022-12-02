import ContactForm from "./common/ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="fix">
      <div className="rn-contact-area ptb--120 bg_color--1">
        <ContactForm
          contactImages="/assets/images/about/about-9.jpg"
          contactTitle="Hire Me."
        />
      </div>
    </div>
  );
};

export default Contact;
