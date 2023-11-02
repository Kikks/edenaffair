import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import { links } from '../../utils/constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? 'bg-black/20 mix-blend-difference backdrop-blur-md'
          : 'bg-transparent'
      } absolute z-[200] flex w-full justify-center px-5 py-1 duration-500 md:fixed md:px-10`}
    >
      <div className="container flex items-center justify-between">
        <figure
          className="aspect-square h-20 w-20 md:h-24 md:w-24"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-once="true"
          data-aos-offset="-100"
        >
          <img
            src={isScrolled ? '/logo--white.svg' : '/logo--white.svg'}
            alt=""
            className="h-full w-full object-contain"
          />
        </figure>

        <div className="hidden items-center justify-center space-x-10 md:flex">
          {links.map((link, index) => (
            <div
              key={index}
              className=""
              data-aos="fade-left"
              data-aos-delay={index * 100 + 500}
              data-aos-once="true"
            >
              <Link
                activeClass="!text-[#DFAE01] underline"
                to={`${link}`}
                spy={true}
                smooth={true}
                duration={500}
                className={`cursor-pointer font-medium duration-500 ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                {link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
