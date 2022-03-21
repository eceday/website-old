import {Fragment} from 'react';
import Accordion from './components/Accordion/';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Heading';
import {ReactComponent as BearGraphic} from './assets/svgs/Bear Graphic Full.svg';


function App() {
  return (
    <Fragment>
      <Nav/>
      <div className='hero-img'>
        <BearGraphic className='bear-graphic'/>
        <div className='location-float'>
          warren bear
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
        
      </section>
      <section className='grass-background'>
        <h2 className='brought'>Brought to you by:</h2>
      </section>
      <div className='contact-float'>
        <div id='contact'>have a question? contact us!</div>
        {/* email link here */}
      </div>
    </Fragment>
  );
}

export default App;
