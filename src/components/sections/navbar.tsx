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
      } absolute z-[200] flex w-full justify-center p-5 duration-500 md:fixed md:px-10`}
    >
      <div className="container flex items-center justify-between">
        <div
          className=""
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-once="true"
          data-aos-offset="-100"
        >
          <h2
            className={`${
              isScrolled ? 'text-white' : 'text-white'
            } font-bold duration-500`}
          >
            Keren Weds Israel
          </h2>
        </div>

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
