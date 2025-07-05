import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Landing from '../src/components/LandingPage';
import WebSets from '../src/components/WebSets';
import Write from '../src/components/Write';
import Newsletter from '../src/components/ComingSoon';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing id="home" />
      <WebSets id="about" />
      <Write />
      <Newsletter id="contact" />
      <Footer />
    </div>
  );
}
