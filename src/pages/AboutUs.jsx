import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const AboutUs = () => {
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

    ScrollReveal().reveal(".aboutUs .section__header", {
      ...scrollRevealOption,
    });
    ScrollReveal().reveal(".aboutUs .section__header", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".aboutUs .section__description", {
      duration: 1000,
      delay: 1000,
      interval: 500
    });
  }, []);
  return (
    <section id="about" className='aboutUs'>
      <h2 className="section__header mt-6">
           ~ About Me ~
        </h2>
    <div className='flex gap-6'>
      
      <div className='flex-1 justify-center items-center p-5'>
      <p className="section__description mb-8 px-8">
      Hello, I’m Dalindyebo Mzandile Ngene, a professional photographer based in Dawn Park, Boksburg. My journey into the world of photography began during my first year of college as a media student. It was then that I first held a camera, assigned to a photography project for my photography module. Though I had limited knowledge of camera operations, I possessed a discerning eye for what makes a captivating image.
        </p>

        <p className='section__description mb-8 px-8'>
        Our lecturer provided a brief crash course on using the camera, but it was the practical application where we were to be evaluated. With the camera set to auto mode, I ventured out to capture moments. To my surprise, the photos I took during that assignment turned out to be some of my best work. I excelled in the project, igniting a passion for photography that I hadn't realized existed within me.
        </p>
        <p className='section__description mb-8 px-8'>
        Realizing this newfound passion, I made the pivotal decision to leave media school and pursue photography professionally. I applied to the Vaal University of Technology (VUT) for a diploma in photography, was accepted, and completed the program with outstanding results. My time at VUT not only honed my technical skills but also deepened my love and passion for the craft.
        </p>
        <p className='section__description mb-8 px-8'>
        Since then, I have been fortunate to receive mentorship from seasoned professionals and gain diverse experiences that have enriched my career. Each project and each photograph has been a stepping stone, contributing to my growth and expertise.
        </p>
        <p className='section__description mb-8 px-8'>
        I firmly believe that this is just the beginning. The world of photography is vast, and I am eager to explore its depths further. My journey is a testament to the power of passion and perseverance, and I am excited about the future opportunities and experiences that lie ahead. Together, we can capture moments that tell compelling stories and create lasting memories.
        </p>
      </div>
      <div className='flex-1 justify-center items-center p-5 h-full hidden lg:flex md:flex img'>
        <img src="/assets/aboutus.jpeg" alt="About Us" />
      </div>

    </div>
    </section>
  )
}

export default AboutUs