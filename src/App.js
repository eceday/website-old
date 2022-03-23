import {Fragment} from 'react';
import Accordion from './components/Accordion/';
import './App.css';
import Nav from './components/Nav';
import {ReactComponent as BearGraphic} from './assets/svgs/Bear Graphic Full.svg';
import {ReactComponent as BearQuestion} from './assets/svgs/Bear Questionmark.svg';
import {ReactComponent as Pin} from './assets/svgs/Location Marker.svg';
import {ReactComponent as IEEE} from './assets/svgs/IEEE Logo.svg';
import {ReactComponent as ECEUSC} from './assets/svgs/ECE USC Logo.svg';
import {ReactComponent as ECE} from './assets/svgs/UCSD ECE logo.svg';
import {ReactComponent as ACM} from './assets/svgs/ACM Logo.svg';
import {ReactComponent as HKN} from './assets/svgs/HKN Logo.svg';
import {ReactComponent as PIB} from './assets/svgs/PIB Logo.svg';
import {ReactComponent as TBP} from './assets/svgs/TBP Logo.svg';


function App() {
  return (
    <Fragment>
      <Nav/>
      <div className='hero-img'>
        <div className='hero-frame'>
          <BearGraphic className='bear-graphic'/>
        </div>
        <div className='location-float'>
          <div className='location-wrapper'>
              <h1>
                Warren Bear
              </h1>
          </div>
          <Pin className='pin'/>
        </div>
      </div>
      <section className='concrete-background'>
        <h2 id='about' className='about'>What is ECE Day?</h2>
        <p>
          ECE Day is a day dedicated to celebrating the spirit of Electrical and Computer Engineering and bringing awareness of all that it offers to its students, faculty, and beloved alumni. Throughout the day, there will be many opportunities for students to learn virtually about the numerous exciting fields within ECE and the joys of being a part of the ECE family!
        </p>
      </section>
      <section className='grass-background'>
        <h2 id='schedule' className='schedule'>What's happening?</h2>
        <div className='schedule-placeholder' style={{height:'500px'}}></div>
      </section>
      <section className='concrete-background'>
        <h2 id='faq' className='faq'> Frequently Asked Questions</h2>
        <div className='faq-wrapper'>
          <BearQuestion className='bear-question'/>
          <div className='accordion-group'>
            <Accordion title={"Will this be online or in person?"} 
              content={"We will be in person at UCSD all day! "} 
              initial_open={true}/>
            <Accordion title={"Is this a recruiting event?"} 
              content={"This is not explicitly a recruiting event. Furthermore, we haven't invited any companies to focus more on UCSD specific aspects."} 
              />
            <Accordion title={"Is there a cost to attend?"} 
              content={"ECE Day is completely free for all students to attend!"} 
              />
            <Accordion title={"Who can come?"} 
              content={"Everyone who is interested in ECE is encouraged to attend! You do not have to be a current or future ECE student!"} 
              />
          </div>
        </div>
      </section>
      <section className='grass-background'>
        <h2 className='brought'>Brought to you by:</h2>
        <div className='logos'>
          <ECE className='ece'/>
          <IEEE/>
          <ECEUSC/>
          <HKN/>
          <ACM/>
          <PIB/>
          <TBP/>
        </div>
      </section>
      <div className='contact-float'>
        <div id='contact'>have a question? contact us!</div>
        <a href="mailto:eceday@eng.ucsd.edu">
          email
        </a>
      </div>
    </Fragment>
  );
}

export default App;
