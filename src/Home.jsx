import Intro from './components/Intro';
import Mission from './components/Mission';
import Discover from './components/Discover';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import GetInvolved from './components/GetInvolved';

function Home() {

    return (
        <div>
          <Navbar/>
          <Intro/>
          <Mission/>
          <Discover/>
          <GetInvolved/>
        </div>
    );
  }

export default Home