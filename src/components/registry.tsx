import { Icon } from '@iconify/react/dist/iconify.js';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.5,
    },
  },
};

const itemScaleVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Registry = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  // Hide the scroll bar when the modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showModal && (
          <div className="fixed left-0 top-0 z-[2000] flex h-screen w-full items-center justify-center">
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed left-0 top-0 z-[20000] h-screen w-screen bg-black/40 lg:backdrop-blur-md"
              onClick={() => setShowModal(false)}
              style={{}}
            />

            {showModal && (
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="z-[20001] flex h-[60vh] max-h-[800px] w-[90%] max-w-[700px] flex-col items-center rounded-lg bg-white shadow-xl"
              >
                <div className="flex w-full justify-end p-5">
                  <button
                    className="flex size-10 items-center justify-center rounded-full bg-gray-50"
                    onClick={() => setShowModal(false)}
                  >
                    <Icon icon="mdi:close" className="text-[#222]" />
                  </button>
                </div>

                <div className="flex w-full flex-1 flex-col items-center space-y-10 overflow-y-auto p-5 !pt-0">
                  <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    animate="visible"
                    className="flex w-full flex-col items-center space-y-5"
                  >
                    <motion.div
                      variants={itemScaleVariant}
                      className="h-18 w-18 flex items-center justify-center"
                    >
                      <Icon icon="noto:wrapped-gift" className="text-6xl" />
                    </motion.div>
                    <motion.p
                      variants={itemScaleVariant}
                      className="flex w-full max-w-[60ch] flex-col space-y-2 text-center text-xs md:text-sm"
                    >
                      <span>
                        Thank you for being a part of our special day.
                      </span>
                      <span>
                        All gifts should be converted to cash as we do not have
                        a wish list.
                      </span>
                      <span>Your love and support mean the world to us.</span>
                    </motion.p>
                  </motion.div>

                  <hr className="w-full" />

                  <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    animate="visible"
                    className="flex w-full flex-wrap items-start justify-center"
                  >
                    <motion.div
                      variants={itemVariant}
                      className="mb-10 flex w-full flex-col items-center space-y-1 px-5 md:mb-5"
                    >
                      <div className="!mb-3 flex items-center space-x-2">
                        <figure className="aspect-square h-4 w-7">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg"
                            alt=""
                            className="size-full object-cover"
                          />
                        </figure>
                        <span className="text-sm font-bold text-[#222]">
                          NGN
                        </span>
                      </div>

                      <p>
                        <span className="mr-3 text-xs font-bold">
                          Bank Account:
                        </span>
                        <span className="text-xs font-medium">Opay</span>
                      </p>
                      <p>
                        <span className="mr-3 text-xs font-bold">
                          Account Number:
                        </span>
                        <span className="text-xs font-medium">7085889157</span>
                      </p>
                      <p>
                        <span className="mr-3 text-xs font-bold">
                          Account Holder:
                        </span>
                        <span className="text-xs font-medium">
                          Dorcas Adeyemo
                        </span>
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!showModal && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="registry"
            onClick={() => setShowModal(true)}
            className={`fixed bottom-5 left-1/2 z-[1000] flex -translate-x-1/2 items-center justify-center space-x-5 rounded-lg bg-white p-3 text-center shadow-xl duration-300 sm:p-5 md:bottom-10 ${
              isScrolled
                ? 'translate-y-0 opacity-100'
                : 'translate-y-[200px] opacity-100'
            }`}
          >
            <Icon
              icon="solar:gift-broken"
              className="text-2xl text-[#ffcc56]"
            />
            <span className="text-sm text-[#222] md:text-base">
              Our Registry
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Registry;
