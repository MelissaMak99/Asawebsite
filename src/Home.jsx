import Intro from './components/Intro';
import Mission from './components/Mission';
import Discover from './components/Discover';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function Home() {

    return (
        <div>
          <Navbar/>
          <Intro/>
          <Mission/>
          <Discover/>
          <Contact/>
        </div>
    );
  }

export default Home