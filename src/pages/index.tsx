import Registry from '../components/registry';
import Countdown from '../components/sections/countdown';
import Events from '../components/sections/events';
import Gallery from '../components/sections/gallery';
import Header from '../components/sections/header';
import Navbar from '../components/sections/navbar';
import OurStory from '../components/sections/our-story';
import Tag from '../components/sections/tag';
// import Vendors from '../components/sections/vendors';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Events />
      <Countdown />
      <OurStory />
      <Tag />
      <Gallery />
      {/* <Vendors /> */}
      <Registry />
      <div className="h-[100px]" id="Footer" />
    </>
  );
};

export default Home;
