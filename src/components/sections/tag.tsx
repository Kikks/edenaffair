import { Icon } from '@iconify/react/dist/iconify.js';

import useMediaQuery from '../../hooks/useMediaQuery';

const Tag = () => {
  const smallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#FFFBF2]">
      <div className="z-10 flex w-full flex-col items-center space-y-5 pb-40 md:pb-0">
        <div data-aos="fade-in" className="z-10">
          <Icon icon="noto-v1:clinking-glasses" className="text-7xl" />
        </div>
        <div className="w-full">
          <h3
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset={smallScreen ? '-150' : 0}
            className="z-10 text-center font-pacifico text-2xl font-medium text-black md:text-5xl"
          >
            My heart is yours to hold
          </h3>

          <h3
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-offset={smallScreen ? '-150' : 0}
            className="z-10 text-center font-pacifico text-2xl font-medium text-black md:text-5xl"
          >
            and cherish for the rest of our days.
          </h3>
        </div>
      </div>

      <figure className="absolute bottom-0 left-0 select-none">
        <img src="/flower1.svg" alt="" />
      </figure>

      <figure className="absolute bottom-0 right-0 select-none">
        <img src="/flower2.svg" alt="" />
      </figure>
    </section>
  );
};

export default Tag;
