import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';

import useCarousel from '../../hooks/useCarousel';
import useMediaQuery from '../../hooks/useMediaQuery';
import { titles } from '../../utils/constants';
import AnimatedHeader from '../animated-header';
import AnimatedText from '../animated-text';

const Header = () => {
  const { current } = useCarousel(titles.length);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <header className="relative h-screen w-full items-center justify-center bg-gray-400 p-2 sm:p-5">
      <figure className="absolute left-0 top-0 z-[1] h-full w-full overflow-hidden">
        <motion.img
          animate={{
            scale: [1, 1.2, 1],
            rotate: isMobile ? [0, 0, 0] : [0, -5, 0],
            transition: {
              duration: 30,
              repeat: Infinity,
            },
          }}
          src={
            isMobile
              ? 'https://res.cloudinary.com/kikks/image/upload/ar_9:16,c_fill/c_scale,w_auto/dpr_auto/v1698944427/keren-weds-israel/oflpetjywkqhtboirbau.jpg'
              : 'https://res.cloudinary.com/kikks/image/upload/ar_16:9,c_fill/c_scale,w_auto/dpr_auto/v1698944427/keren-weds-israel/oflpetjywkqhtboirbau.jpg'
          }
          alt=""
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="absolute left-0 top-0 z-[2] h-full w-full bg-gradient-to-t from-black/80 to-black/20" />

      <div className="container flex h-full flex-col items-center justify-center space-y-5">
        <div className="relative z-10 h-14 w-full sm:h-24 lg:h-28">
          {titles.map((text, index) => (
            <AnimatedHeader
              key={index}
              title={text}
              visible={index === current}
              className="inline-block whitespace-nowrap font-chillax text-3xl font-semibold leading-loose text-white drop-shadow-sm sm:text-4xl md:text-6xl lg:text-7xl"
            />
          ))}
        </div>

        <div className="relative z-10 flex w-full items-center justify-center text-center">
          {['#LifeIsEaziWithKeren'].map((text, index) => (
            <AnimatedText
              key={index}
              visible
              className="absolute left-0 top-0 w-full font-medium text-white drop-shadow-sm md:text-xl lg:text-lg"
            >
              {text}
            </AnimatedText>
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 left-[50%] z-[50] flex translate-x-[-50%] translate-y-0 items-center justify-center">
        <motion.a
          href="#Events"
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
            },
          }}
        >
          <Icon icon="octicon:chevron-down-12" className="text-lg text-white" />
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
