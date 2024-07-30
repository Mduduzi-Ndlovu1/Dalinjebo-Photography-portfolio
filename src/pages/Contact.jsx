import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const ContactMe = () => {
  useEffect(() => {
    ScrollReveal().reveal(".contact__container .section__header", {
      ...scrollRevealOption,
    });
    ScrollReveal().reveal(".contact__container .contact__details", {
      ...scrollRevealOption,
      delay: 500,
    });
  }, []);

  return (
    <main>
      <section className="contact" id="contact">
        <div className="section__container contact__container">
          <h2 className="section__header">~ CONTACT ME ~</h2>
          <div className="contact__details">
            <p>I'd love to hear from you! Whether you have a question about my services, want to discuss a project, or simply want to say hello, feel free to reach out to me through any of the following methods:</p>
            <p><strong>Email:</strong> <a href="mailto:dalidnyebo@example.com">dalidnyebo@example.com</a></p>
            <p><strong>Phone:</strong> (+27) 6767 44576</p>
            <p><strong>Social Media:</strong></p>
            <ul>
              <li><a href="https://www.facebook.com/dalidnyebo">Facebook</a></li>
              <li><a href="https://www.instagram.com/dalidnyebo">Instagram</a></li>
              <li><a href="https://www.twitter.com/dalidnyebo">Twitter</a></li>
            </ul>
            <p>I am available for consultations, bookings, and any other inquiries. Looking forward to connecting with you and capturing your special moments!</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactMe;
