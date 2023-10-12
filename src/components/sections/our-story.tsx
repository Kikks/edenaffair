import { useInView } from 'framer-motion';
import { useRef } from 'react';

import useMediaQuery from '../../hooks/useMediaQuery';
import AnimatedHeader from '../animated-header';

const OurStory = () => {
  const smallScreen = useMediaQuery('(max-width: 768px)');
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section
      id="Our Story"
      className="flex w-full flex-col items-center justify-center p-5"
    >
      <div className="container w-full pt-20">
        <div ref={ref} className="relative z-10 h-14 w-full sm:h-24 lg:h-28">
          <AnimatedHeader
            title="Our Story"
            visible={isInView}
            className="font-chillax text-3xl md:text-4xl lg:text-5xl"
          />
        </div>
      </div>

      <div className="container flex w-full flex-col items-center justify-center space-y-5 py-20 md:flex-row md:space-x-10 md:space-y-0">
        <div className="relative order-1 mx-auto flex aspect-square w-[90%] max-w-[400px] items-center justify-center">
          <figure
            data-aos={smallScreen ? '' : 'fade-in'}
            data-aos-delay={smallScreen ? 0 : 400}
            className="aspect-square w-[90%] overflow-hidden rounded-full md:h-full md:w-full"
          >
            <img
              src="/assets/images/header-image.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="absolute bottom-[12%] right-[12%] z-20 h-8 w-8 rounded-full bg-gradient-to-r from-[#FFFBF2] to-[#ffcc56] md:bottom-[5%] md:right-[5%] md:h-14 md:w-14" />
        </div>

        <div className="order-2 flex max-w-[500px] flex-col items-start space-y-5">
          <h3
            data-aos="fade-up"
            className="z-10 text-center font-pacifico text-2xl font-medium text-black md:text-5xl"
          >
            Groom
          </h3>
          <div className="space-y-3">
            <p data-aos="fade-up" data-aos-delay={smallScreen ? 0 : 200}>
              I met her among a group of other people in church but it was
              nothing serious, then a couple of mindless "hello" here and there.
              I thought she was pretty but I was minding my business.
            </p>
            <p data-aos="fade-up" data-aos-delay={smallScreen ? 0 : 400}>
              Then one that beautiful day after midweek service, she approached
              me and said "Why don't we talk?"
            </p>
            <p data-aos="fade-up" data-aos-delay={smallScreen ? 0 : 600}>
              We've not stopped talking since then.
            </p>
          </div>
        </div>
      </div>

      <div className="container flex w-full flex-col items-center justify-center space-y-5 py-20 md:flex-row md:space-x-10 md:space-y-0">
        <div className="order-2 flex max-w-[500px] flex-col items-start space-y-5 md:order-1">
          <h3
            data-aos="fade-up"
            className="z-10 text-center font-pacifico text-2xl font-medium text-black md:text-5xl"
          >
            Bride
          </h3>
          <div className="space-y-3">
            <p data-aos="fade-up" data-aos-delay={smallScreen ? 0 : 200}>
              I met her among a group of other people in church but it was
              nothing serious, then a couple of mindless "hello" here and there.
              I thought she was pretty but I was minding my business.
            </p>
            <p data-aos="fade-up" data-aos-delay={smallScreen ? 0 : 400}>
              Then one that beautiful day after midweek service, she approached
              me and said "Why don't we talk?"
            </p>
            <p data-aos="fade-up" data-aos-delay={smallScreen ? 0 : 600}>
              We've not stopped talking since then.
            </p>
          </div>
        </div>

        <div className="relative order-1 mx-auto flex aspect-square w-[90%] max-w-[400px] items-center justify-center md:order-2">
          <figure
            data-aos={smallScreen ? '' : 'fade-in'}
            data-aos-delay={smallScreen ? 0 : 400}
            className="aspect-square w-[90%] overflow-hidden rounded-full md:h-full md:w-full"
          >
            <img
              src="/assets/images/header-image.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="absolute bottom-[12%] left-[12%] z-20 h-8 w-8 rounded-full bg-gradient-to-l from-[#FFFBF2] to-[#ffcc56] md:bottom-[5%] md:left-[5%] md:h-14 md:w-14" />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
