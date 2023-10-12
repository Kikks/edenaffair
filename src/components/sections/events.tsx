import { Icon } from '@iconify/react/dist/iconify.js';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Tilt from 'react-parallax-tilt';

import useMediaQuery from '../../hooks/useMediaQuery';
import { events } from '../../utils/constants';
import AnimatedHeader from '../animated-header';

const Events = () => {
  const mobileScreen = useMediaQuery('(max-width: 768px)');
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section id="Events" className="relative flex w-full justify-center p-5">
      <div className="events-bg absolute left-0 top-0 h-full w-full"></div>

      <div className="container z-[10] flex flex-col items-center justify-center py-20 lg:min-h-screen">
        <div ref={ref} className="relative z-10 h-14 w-full sm:h-24 lg:h-28">
          <AnimatedHeader
            title="Events"
            visible={isInView}
            className="font-chillax text-3xl md:text-4xl lg:text-5xl"
          />
        </div>

        <div className="grid grid-cols-1 items-center justify-between divide-y md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          {events.map((event, index) => (
            <Tilt key={index} tiltEnable={!mobileScreen}>
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                className="group flex aspect-square flex-col items-center justify-center p-10 hover:z-10 hover:bg-gray-500"
              >
                <div className="flex flex-col items-center justify-center space-y-5">
                  <div className="flex items-center justify-center">
                    <Icon
                      icon={event.icon}
                      className="text-5xl text-[#777] group-hover:text-[#eee]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-3 text-center">
                    <h3 className="text-xl font-bold text-[#222] group-hover:text-[#eee]">
                      {event.title}
                    </h3>
                    <div>
                      <h5 className="text-sm font-medium text-[#222] group-hover:text-[#eee]">
                        {event.date}
                      </h5>
                      <h5 className="text-sm font-medium text-[#222] group-hover:text-[#eee]">
                        {event.time}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
