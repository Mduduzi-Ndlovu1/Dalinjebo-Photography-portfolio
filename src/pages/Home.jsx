import React from 'react'

const Home = () => {
  return (
    <main>
      <div class="section__container about__container" id="about">
        <h2 class="section__header">
            WE CAPTURE THE MOMENTS 
        </h2>
        <p class="section__description">
          Moments are those fleeting instances where everything we’ve worked for comes to fruition. These are the moments we cherish, the ones we look back on to remember what truly matters. I am here to capture these precious moments for you through the art of photography, ensuring that you can relive and treasure them forever.
        </p>
        <p class="section__description">
          Each photograph tells a unique story, reflecting the emotions, beauty, and significance of the moment. As you explore my portfolio, you will see a collection of images that capture the essence of various events, from intimate gatherings to grand celebrations. Whether it's a wedding, a family portrait, or a special occasion, my goal is to create timeless photographs that you will treasure forever.
        </p>
        
    </div>

    <div class="section__container portfolio__container">
        <h2 class="section__header">~ PORTFOLIO ~</h2>
        <div class="portfolio__grid">
            <div class="portfolio__card">
                <img src="src\assets\images\Product Brand\Kallahari\IMG_3587.jpeg" alt="portfolio"/>
                <div class="portfolio__content">
                    <button class="btn">VIEW PORTFOLIO</button>
                </div>
            </div>
            <div class="portfolio__card">
                <img src="src\assets\images\Wedding\White Wedding One\P1010094.jpeg" alt="portfolio"/>
                <div class="portfolio__content">
                    <button class="btn">VIEW PORTFOLIO</button>
                </div>
            </div>
            <div class="portfolio__card">
                <img src="src\assets\images\Self Protrait\Person One\IMG_1714.jpeg" alt="portfolio"/>
                <div class="portfolio__content">
                    <button class="btn">VIEW PORTFOLIO</button>
                </div>
            </div>
            <div class="portfolio__card">
                <img src="src\assets\images\Fashion\Ancients\IMG_0412.jpeg" alt="portfolio"/>
                <div class="portfolio__content">
                    <button class="btn">VIEW PORTFOLIO</button>
                </div>
            </div>

        </div>
    </div>

    <section class="service" id="service">
        <div class="section__container service__container">
            <h2 class="section__header">~ SERVICES ~</h2>
            <p class="section__description">
            Every picture tells a story, and at Dalidnyebo's Photography, we strive to capture the moments that matter most to you. Whether it’s the intimate joy of a wedding, the unique personality of an individual, the sleek details of a product, or the cutting-edge style of fashion, our diverse photography services are crafted to meet your needs. Explore the range of specialized services we offer to see how we can bring your vision to life.
            </p>
            <div class="service__grid">
                <div class="service__card">
                    <h4>Commissioned Portraits</h4>
                    <p>
                    Capture your essence with our bespoke portrait photography services. Whether it's for a professional headshot, a family portrait, or a personal project, we offer tailored sessions to meet your specific needs. Our goal is to create images that reflect your personality and tell your unique story.
                    </p>
                    <Button/>
                </div>
                <div class="service__card">
                    <h4>Wedding Photography
                    </h4>
                    <p>
                    Your wedding day is one of the most important days of your life, and we are here to ensure that every precious moment is beautifully documented. From the intimate exchange of vows to the joyous celebrations, our wedding photography services focus on capturing the love, laughter, and emotions that make your day unforgettable. Let us preserve the memories that you will cherish for a lifetime.
                    </p>
                    <Button/>
                </div>
                <div class="service__card">
                    <h4>Product Photography
                    </h4>
                    <p>
                    Elevate your brand with our expert product photography services. We specialize in creating stunning images that highlight the features and details of your products. Whether for e-commerce, advertising, or catalogs, our photographs will help you stand out and attract customers. Let us showcase your merchandise in the best possible light.
                    </p>
                    <Button/>
                </div>
                <div class="service__card">
                    <h4>Fashion Photography
                    </h4>
                    <p>
                    Bring your fashion vision to life with our dynamic fashion photography services. From editorial shoots to lookbooks, we work closely with designers, models, and stylists to create captivating images that showcase your fashion collections. Our aim is to capture the style, creativity, and essence of your brand, making a lasting impression on your audience.
                    </p>

                    <Button/>
                </div>
            </div>
        </div>
    </section>
    </main>
  )
}

export default Home