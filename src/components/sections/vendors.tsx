import { Icon } from '@iconify/react/dist/iconify.js';
import Tilt from 'react-parallax-tilt';

import useMediaQuery from '../../hooks/useMediaQuery';
import { vendors } from '../../utils/constants';

const Vendors = () => {
  const mobileScreen = useMediaQuery('(max-width: 768px)');

  return (
    <section className="flex w-full justify-center border-y p-5">
      <div className="container grid grid-cols-1 gap-5 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {vendors.map((vendor, index) => (
          <Tilt key={index} tiltEnable={!mobileScreen}>
            <div
              data-aos="fade-up"
              data-aos-delay={mobileScreen ? 0 : index * 100}
              data-aos-duration="800"
              className="group mx-auto flex aspect-square max-w-[300px] flex-col items-center justify-center rounded-md border px-5 py-7 hover:z-10 hover:bg-gray-500 sm:mx-0 sm:max-w-none"
            >
              <div className="flex h-full flex-col items-center justify-center space-y-5">
                <div className="flex items-center justify-center">
                  <Icon
                    icon={vendor.icon}
                    className="text-3xl text-[#777] group-hover:text-[#eee]"
                  />
                </div>

                <div className="flex flex-col items-center justify-center text-center md:flex-1">
                  <h3 className="text-base font-bold text-[#222] group-hover:text-[#eee] lg:max-w-[15ch]">
                    {vendor.name}
                  </h3>
                  <h5 className="text-sm font-medium text-[#222] group-hover:text-[#eee]">
                    {vendor.service}
                  </h5>
                </div>

                <div className="flex space-x-3">
                  {vendor.instagram && (
                    <a href={vendor.instagram} target="_blank" rel="noreferrer">
                      <Icon
                        icon="ant-design:instagram-filled"
                        className="text-2xl text-[#777] group-hover:text-[#eee]"
                      />
                    </a>
                  )}
                  {vendor.gmail && (
                    <a
                      href={`mailto:${vendor.gmail}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon
                        icon="mdi:gmail"
                        className="text-2xl text-[#777] group-hover:text-[#eee]"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Vendors;
