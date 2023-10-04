import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface GalleryImageProps extends HTMLMotionProps<'div'> {
  url?: string;
  className: string;
  style?: React.CSSProperties;
}

const GalleryImage: FC<GalleryImageProps> = ({
  className,
  onClick,
  url,
  ...rest
}) => (
  <motion.div
    className={`gallery__image ${className} overflow-hidden`}
    data-aos="fade-up"
    onClick={onClick}
    {...rest}
  >
    <LazyLoadImage alt="" src={url} className="h-full w-full object-cover" />
  </motion.div>
);

export default GalleryImage;
