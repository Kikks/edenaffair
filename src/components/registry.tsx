import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect, useState } from 'react';

const Registry = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      key="registry"
      className={`fixed bottom-10 left-[50%] z-[1000] flex translate-x-[-50%] items-center justify-center space-x-5 rounded-lg bg-white p-5 text-center shadow-xl duration-300 ${
        isScrolled
          ? 'translate-y-0 opacity-100'
          : 'translate-y-[200px] opacity-100'
      }`}
    >
      <Icon icon="solar:gift-broken" className="text-2xl text-[#ffcc56]" />
      <span className="text-[#222]">Our Registry</span>
    </div>
  );
};

export default Registry;
