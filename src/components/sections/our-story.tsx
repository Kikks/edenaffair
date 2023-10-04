import { useInView } from 'framer-motion';
import { useRef } from 'react';

import AnimatedHeader from '../animated-header';

const OurStory = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section id="Our Story" className="flex w-full justify-center p-5">
      <div className="container py-20">
        <div ref={ref} className="relative z-10 h-14 w-full sm:h-24 lg:h-28">
          <AnimatedHeader
            title="Our Story"
            visible={isInView}
            className="font-chillax text-3xl md:text-4xl lg:text-5xl"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
