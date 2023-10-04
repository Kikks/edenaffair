import Countdown from '../components/sections/countdown';
import Events from '../components/sections/events';
import Gallery from '../components/sections/gallery';
import Header from '../components/sections/header';
import Navbar from '../components/sections/navbar';
import OurStory from '../components/sections/our-story';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Events />
      <Countdown />
      <OurStory />
      <Gallery />
      <div className="h-[1000px]" id="Footer" />
    </>
  );
};

export default Home;
