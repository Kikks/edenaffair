import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { images } from '../../utils/constants';
import AnimatedHeader from '../animated-header';
import GalleryImage from '../gallery-image';

const Gallery = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section id="Gallery" className="flex w-full justify-center p-5">
      <div className="container py-20">
        <div ref={ref} className="relative z-10 h-14 w-full sm:h-24 lg:h-28">
          <AnimatedHeader
            title="Gallery"
            visible={isInView}
            className="font-chillax text-3xl md:text-4xl lg:text-5xl"
          />
        </div>

        <motion.div
          variants={{
            initial: {},
            animate: {
              transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1,
              },
            },
            exit: {
              transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1,
              },
            },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          className="gallery__container mx-auto w-full md:w-[80%]"
        >
          {images.map((image, index) => {
            return (
              <GalleryImage
                key={index}
                className={image.className}
                url={image.url}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
