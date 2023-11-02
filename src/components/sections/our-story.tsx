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
        <div className="relative order-1 mx-auto flex aspect-square w-[90%] max-w-[400px] items-center justify-center md:mx-0">
          <figure
            data-aos={smallScreen ? '' : 'fade-in'}
            data-aos-delay={smallScreen ? 0 : 400}
            className="relative aspect-square w-[90%] overflow-hidden rounded-full md:h-full md:w-full"
          >
            <img
              src={
                smallScreen
                  ? 'https://res.cloudinary.com/kikks/image/upload/c_fill,g_north,h_500,w_500/v1698944432/keren-weds-israel/jjujxmy7lktiru6cnpfg.jpg'
                  : 'https://res.cloudinary.com/kikks/image/upload/c_fill,g_north,h_1000,w_1000/v1698944432/keren-weds-israel/jjujxmy7lktiru6cnpfg.jpg'
              }
              alt=""
              className="h-full w-full select-none object-cover"
            />

            <div className="absolute inset-0 flex h-full w-full items-center justify-center" />
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
              A few months after I joined the church, I was chatting with a
              group of mutual friends after a midweek service, and there she
              was, a captivating beauty that had caught my eye before.
              Serendipity seemed to bring us together within the same social
              circles repeatedly. Then, on a particularly enchanting evening,
              she took the initiative and said, "Why don't we talk?" From that
              moment, our conversations flowed effortlessly, and we quickly
              became inseparable.
            </p>
            <p data-aos="fade-up" data-aos-delay={smallScreen ? 0 : 400}>
              For two years, we nurtured a deep, profound friendship, and
              countless moments of joy. When I finally gathered the courage to
              ask her out, she answered, an obvious "yes." And so, as written in
              the stars our love story began—a testament to the power of fate,
              friendship, and love, where two souls found their perfect match,
              and the rest, as they say, is history.
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
              I actually approached him first. I saw him in church one Sunday, I
              walked up to him and said “Hi, my name is Keren. What’s yours?” We
              spoke very briefly and then it was a couple of hellos here and
              there. Then one day, after midweek service in church, I walked up
              to him again and said, “why don’t we talk” Honestly, at the time,
              it was all harmless and I was just being very friendly.
            </p>
            <p data-aos="fade-up" data-aos-delay={smallScreen ? 0 : 400}>
              He sent me a dm that night on Twitter, we started talking and we
              haven’t stopped. He became one of my fav people in a very short
              time and now, the love of my life!
            </p>
          </div>
        </div>

        <div className="relative order-1 mx-auto flex aspect-square w-[90%] max-w-[400px] items-center justify-center md:order-2 md:mx-0">
          <figure
            data-aos={smallScreen ? '' : 'fade-in'}
            data-aos-delay={smallScreen ? 0 : 400}
            className="relative aspect-square w-[90%] overflow-hidden rounded-full md:h-full md:w-full"
          >
            <img
              src={
                smallScreen
                  ? 'https://res.cloudinary.com/kikks/image/upload/c_fill,g_north,h_500,w_500/v1698944432/keren-weds-israel/uvrdx5w4xee4bmaa93xz.jpg'
                  : 'https://res.cloudinary.com/kikks/image/upload/c_fill,g_north,h_1000,w_1000/v1698944432/keren-weds-israel/uvrdx5w4xee4bmaa93xz.jpg'
              }
              alt=""
              className="h-full w-full select-none object-cover"
            />

            <div className="absolute inset-0 flex h-full w-full items-center justify-center" />
          </figure>
          <div className="absolute bottom-[12%] left-[12%] z-20 h-8 w-8 rounded-full bg-gradient-to-l from-[#FFFBF2] to-[#ffcc56] md:bottom-[5%] md:left-[5%] md:h-14 md:w-14" />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
