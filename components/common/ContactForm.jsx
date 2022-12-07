import React, { useState } from "react";
import emailjs from "emailjs-com";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useTranslation } from "react-i18next";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ContactForm = (props) => {
  const { contactTitle } = props;
  const { t } = useTranslation();

  //! State
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    open: false,
  });
  const [loading, setLoading] = useState(false);

  //! Function
  const handleClick = () => {
    setForm({ open: true });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setForm({ open: false });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      setLoading(true);
      emailjs
        .send(
          "service_g106gtk",
          "template_nsm9za6",
          {
            reply_to: form.email,
            to_name: form.subject,
            message: form.message,
            from_name: form.name,
          },
          "rs09pawXQSaR8azA8"
        )
        .then(
          (result) => {
            handleClick();
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      alert(`${t('contact:required')}`);
    }
  };
  //! Render
  return (
    <div className="contact-form--1">
      <div className="container">
        <center>
          <div className="col-lg-8 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className="title">{contactTitle}</h2>
              <p className="description">
                {t("contact:description")}
                <a href="mailto:honghai251.info@gmail.com">
                  honghai251.info@gmail.com
                </a>
              </p>
            </div>
            <div className="form-wrapper">
              <form onSubmit={sendEmail}>
                <label style={{ float: "left", width: "48%" }} htmlFor="item01">
                  <input
                    type="text"
                    name="name"
                    id="item01"
                    value={form.name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Your Name *"
                  />
                </label>

                <label
                  style={{ float: "right", width: "48%" }}
                  htmlFor="item02"
                >
                  <input
                    type="email"
                    name="email"
                    id="item02"
                    value={form.email}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Your email *"
                  />
                </label>

                <label htmlFor="item03">
                  <input
                    type="text"
                    name="subject"
                    id="item03"
                    value={form.subject}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Write a Subject"
                  />
                </label>
                <label htmlFor="item04">
                  <textarea
                    type="text"
                    id="item04"
                    name="message"
                    value={form.message}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Your Message"
                  />
                </label>
                <button
                  className="rn-btn btn-solid"
                  type="submit"
                  value="submit"
                  name="submit"
                  id="mc-embedded-subscribe"
                  disabled={loading}
                >
                  {loading ? `${t('button:sending')}` : `${t('button:submit')}`}
                </button>
              </form>
            </div>
          </div>
        </center>
      </div>
      <Snackbar open={form.open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {t('contact:notification')}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactForm;
