import { AnimatePresence, motion } from 'framer-motion';
import type { FC, PropsWithChildren } from 'react';

const AnimatedText: FC<
  PropsWithChildren<{
    visible: boolean;
    className?: string;
  }>
> = ({ visible, className, children }) => {
  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.span
          key="child"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
              transition: {
                duration: 5,
              },
            },
            exit: {
              opacity: 0,
            },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          className={className}
        >
          {children}
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default AnimatedText;
