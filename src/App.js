import {Fragment} from 'react';
import Accordion from './components/Accordion/';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Heading';

function App() {
  return (
    <Fragment>
      <Nav/>
      <div className='hero-img'>
        <svg></svg>
        <div className='location-float'>
          Warren Bear
        </div>
      </div>
      <section className='concrete-background'>
        <h2>What is ECE Day?</h2>
        <p>
          ECE Day is a day dedicated to celebrating the spirit of Electrical and Computer Engineering and bringing awareness of all that it offers to its students, faculty, and beloved alumni. Throughout the day, there will be many opportunities for students to learn virtually about the numerous exciting fields within ECE and the joys of being a part of the ECE family!
        </p>
      </section>
      <section className='grass-background'>
        <h2>What's happening?</h2>
        <div className='schedule-placeholder'></div>
      </section>
      <section className='concrete-background'>
        <h2> Frequently Asked Questions</h2>
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
        <h2>Brought to you by:</h2>
      </section>
      <div className='contact-float'>
        <div>have a question? contact us!</div>
        {/* email link here */}
      </div>
    </Fragment>
  );
}

export default App;
