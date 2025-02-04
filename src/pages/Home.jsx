import React, { useEffect } from 'react';
import Button from '../components/Button';
import ScrollReveal from 'scrollreveal';

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const Home = () => {
  useEffect(() => {
    ScrollReveal().reveal(".about__container .section__header", {
      ...scrollRevealOption,
    });
    ScrollReveal().reveal(".about__container .section__description", {
      ...scrollRevealOption,
      delay: 500,
      interval: 500
    });
    ScrollReveal().reveal(".about__container img", {
      ...scrollRevealOption,
      delay: 1500,
    });

    ScrollReveal().reveal(".service__container .section__header", {
      ...scrollRevealOption,
    });
    ScrollReveal().reveal(".service__container .section__description", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".service__card", {
      duration: 1000,
      delay: 1000,
      interval: 500
    });
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
      <div className='header'></div>
      <div className="section__container about__container mt-20" id="about">
        <h2 className="section__header">
           ~ WE CAPTURE THE MOMENTS ~
        </h2>
        <p className="section__description">
          Moments are those fleeting instances where everything we’ve worked for comes to fruition. These are the moments we cherish, the ones we look back on to remember what truly matters. I am here to capture these precious moments for you through the art of photography, ensuring that you can relive and treasure them forever.
        </p>
        <p className="section__description">
          Each photograph tells a unique story, reflecting the emotions, beauty, and significance of the moment. As you explore my portfolio, you will see a collection of images that capture the essence of various events, from intimate gatherings to grand celebrations. Whether it's a wedding, a family portrait, or a special occasion, my goal is to create timeless photographs that you will treasure forever.
        </p>
    </div>

    <div className="section__container portfolio__container">
        <h2 className="section__header">~ PORTFOLIO ~</h2>
        <div className="portfolio__grid">
            <div className="portfolio__card">
                <img src="/assets/images/Product Brand/Kallahari/k1.jpeg" alt="portfolio"/>
                <div className="portfolio__content">
                  <a href="/portfolio">
                    <button className="btn">VIEW PORTFOLIO</button>
                  </a>
                </div>
            </div>
            <div className="portfolio__card">
                <img src="/assets/images/Wedding/White Wedding One/w1_1.jpeg" alt="portfolio"/>
                <div className="portfolio__content">
                  <a href="/portfolio">
                    <button className="btn">VIEW PORTFOLIO</button>
                  </a>
                </div>
            </div>
            <div className="portfolio__card">
                <img src="/assets/images/Self Protrait/Person One/p1.jpeg" alt="portfolio"/>
                <div className="portfolio__content">
                  <a href="/portfolio">
                    <button className="btn">VIEW PORTFOLIO</button>
                  </a>
                </div>
            </div>
            <div className="portfolio__card">
                <img src="/assets/images/Fashion/Ancients/A1.jpeg" alt="portfolio"/>
                <div className="portfolio__content">
                  <a href="/portfolio">
                    <button className="btn">VIEW PORTFOLIO</button>
                  </a>
                </div>
            </div>
        </div>
    </div>

    <section className="service" id="service">
        <div className="section__container service__container">
            <h2 className="section__header">~ SERVICES ~</h2>
            <p className="section__description">
            Every picture tells a story, and at Dalidnyebo's Photography, we strive to capture the moments that matter most to you. Whether it’s the intimate joy of a wedding, the unique personality of an individual, the sleek details of a product, or the cutting-edge style of fashion, our diverse photography services are crafted to meet your needs. Explore the range of specialized services we offer to see how we can bring your vision to life.
            </p>
            <div className="service__grid">
                <div className="service__card">
                    <h4>Commissioned Portraits</h4>
                    <p>
                    Capture your essence with our bespoke portrait photography services. Whether it's for a professional headshot, a family portrait, or a personal project, we offer tailored sessions to meet your specific needs. Our goal is to create images that reflect your personality and tell your unique story.
                    </p>
                    
                    <a href="/portfolio">
                    <Button/>

                    </a>
                </div>
                <div className="service__card">
                    <h4>Wedding Photography</h4>
                    <p>
                    Your wedding day is one of the most important days of your life, and we are here to ensure that every precious moment is beautifully documented. From the intimate exchange of vows to the joyous celebrations, our wedding photography services focus on capturing the love, laughter, and emotions that make your day unforgettable. Let us preserve the memories that you will cherish for a lifetime.
                    </p>
                    
                    <a href="/portfolio">
                    <Button/>

                    </a>
                </div>
                <div className="service__card">
                    <h4>Product Photography</h4>
                    <p>
                    Elevate your brand with our expert product photography services. We specialize in creating stunning images that highlight the features and details of your products. Whether for e-commerce, advertising, or catalogs, our photographs will help you stand out and attract customers. Let us showcase your merchandise in the best possible light.
                    </p>
                    
                    <a href="/portfolio">
                    <Button/>

                    </a>
                </div>
                <div className="service__card">
                    <h4>Fashion Photography</h4>
                    <p>
                    Bring your fashion vision to life with our dynamic fashion photography services. From editorial shoots to lookbooks, we work closely with designers, models, and stylists to create captivating images that showcase your fashion collections. Our aim is to capture the style, creativity, and essence of your brand, making a lasting impression on your audience.
                    </p>
                    <a href="/portfolio">
                    <Button/>

                    </a>
                </div>
            </div>
        </div>
    </section>

    <section className="contact p-6" id="contact">
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
            <br/>
            <p>I am available for consultations, bookings, and any other inquiries. Looking forward to connecting with you and capturing your special moments!</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
