import React from "react";
import InViewMotion from "./InViewMotion";

function About() {
  return (
    <div className="flex justify-center md:justify-start py-10 lg:pt-56 lg:pb-20">
      <div className="flex flex-col lg:gap-36 md:gap-24 gap-16 md:ml-12 ml-0 md:w-[80%] w-[90%]">
        <div className="flex flex-col md:gap-14 gap-8">
          <InViewMotion>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 lg:text-8xl flex">
              Who We Are
            </h2>
          </InViewMotion>
          <InViewMotion>
            <p className="lg:text-2xl md:text-xl text-lg">
              We are not just another web design agency. We are the storytellers
              of the digital world, weaving captivating narratives through
              stunning visuals and immersive experiences. From the moment
              visitors land on your website, we make sure they are spellbound by
              your brand's unique story, creating connections that last a
              lifetime.
            </p>
          </InViewMotion>
        </div>
        <div className="flex flex-col md:gap-14 gap-8">
          <InViewMotion>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 flex">
              Our Mission
            </h2>
          </InViewMotion>
          <InViewMotion>
            <p className="md:text-2xl text-lg">
              Our mission is to empower organizations to leave a lasting
              impression in the digital realm. We believe in the transformative
              power of a strong online presence and the ability to express your
              mission and values through cutting-edge design and innovative
              technology. We don't just build websites; we craft digital
              experiences that spark curiosity, evoke emotion, and inspire
              action. Let us help you unleash the full potential of your brand
              in the digital landscape.
            </p>
          </InViewMotion>
        </div>
        <div className="flex flex-col md:gap-14 gap-8 justify-center">
          <InViewMotion>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 flex">
              Our Values
            </h2>
          </InViewMotion>
          <InViewMotion>
            <p className="md:text-2xl text-lg">
              At Echo Web LLC, we live and breathe our core values. They are the
              guiding principles that drive us forward and shape every project
              we undertake:
            </p>
          </InViewMotion>
          <ul className="flex flex-col gap-6 md:text-2xl text-lg">
            <InViewMotion>
              <li>
                <span className="font-semibold">Unleash Creativity:</span> We
                embrace the boundless power of creativity to craft extraordinary
                digital experiences. Our team of visionaries pushes the
                boundaries of design and technology to deliver solutions that
                leave a lasting impact.
              </li>
            </InViewMotion>
            <InViewMotion>
              <li>
                <span className="font-semibold">Deliver Excellence:</span> We
                strive for excellence in everything we do. From pixel-perfect
                designs to flawless functionality, we obsess over the details to
                ensure that every project we deliver is of the highest quality.
              </li>
            </InViewMotion>
            <InViewMotion>
              <li>
                <span className="font-semibold">Ignite Collaboration:</span> We
                believe that great ideas are born from collaboration. By
                fostering an environment of trust, respect, and open
                communication, we collaborate closely with our clients to bring
                their visions to life, transforming ideas into reality.
              </li>
            </InViewMotion>
            <InViewMotion>
              <li>
                <span className="font-semibold">Inspire Innovation:</span> We
                thrive on pushing the boundaries of what's possible. Our team
                stays at the forefront of industry trends and emerging
                technologies, constantly seeking innovative solutions to propel
                your brand ahead of the competition.
              </li>
            </InViewMotion>
          </ul>
          <InViewMotion>
            <p className="md:text-2xl text-lg">
              These values are not just words on a wall; they are the pillars of
              our agency. We invite you to embark on a digital journey with us,
              where creativity knows no bounds, excellence is a standard, and
              collaboration fuels remarkable innovation.
            </p>
          </InViewMotion>
        </div>
        <div>CTA INSERTED HERE</div>
      </div>
    </div>
  );
}

export default About;
