import { AnimatePresence, motion } from 'framer-motion';

const AnimatedHeader = ({
  title,
  visible,
  className,
}: {
  title: string;
  visible: boolean;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.h1
          key={title}
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
          className={`absolute left-0 top-0 flex h-full w-full justify-center overflow-hidden text-center ${
            className || ''
          }`}
        >
          {title.split('').map((letter, index) => (
            <motion.span
              variants={{
                initial: {
                  y: 100,
                  opacity: 0,
                },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 50,
                    duration: 1,
                  },
                },
                exit: {
                  y: -100,
                  opacity: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 50,
                    duration: 1,
                  },
                },
              }}
              key={index}
              className={className}
            >
              {letter === ' ' ? <>&nbsp;</> : letter}
            </motion.span>
          ))}
        </motion.h1>
      )}
    </AnimatePresence>
  );
};

export default AnimatedHeader;
