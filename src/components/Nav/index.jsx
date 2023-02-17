import styles from './nav.module.css';
import React, { useState, Fragment, useEffect } from "react";
import { Header, Nav, Link, SvgBox } from "./Styles";
function Heading(props) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  const iconVariants = {
    opened: {
      rotate: 90,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      top: "-100vh",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };
  
  useEffect(() => {
    const handleScroll = () => {
      // find current scroll position
      const currentScrollPos = window.pageYOffset;
  
      // set state based on location info (explained in more detail below)
      // setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
      // set state to new scroll position
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos]);

  const linkHandler = (event) => {
    event.preventDefault()
    event.nativeEvent.stopImmediatePropagation();
    setIsOpen(!isOpen)
    console.log(event.target.href.split("#")[1])
    let element_id = event.target.href.split("#")[1]
    const element = document.getElementById(element_id);
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middle = absoluteElementTop - (window.innerHeight/2);
    console.log(absoluteElementTop,middle)
    window.scrollTo(0, middle);
  }
  return <Fragment>
    <div className="Heading">
      <Header>
        <SvgBox
          variants={iconVariants}
          animate={isOpen ? "opened" : "closed"}
          whileHover={{ scale: 1.2 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="47" height="41" viewBox="0 0 187 181" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="34" y="29" width="119" height="26" fill="white"/>
            <rect x="34" y="74" width="119" height="26" fill="white"/>
            <rect x="34" y="119" width="119" height="26" fill="white"/>
          </svg>
        </SvgBox>
      </Header>

      <Nav
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
      >
        <Link  variants={linkVariants}><a className={styles.nav_link} href="#about" onClick={linkHandler}>About</a></Link>
        <Link  variants={linkVariants}><a className={styles.nav_link} href="#schedule" onClick={linkHandler}>Schedule</a></Link>
        <Link  variants={linkVariants}><a className={styles.nav_link} href="#faq" onClick={linkHandler}>FAQ</a></Link>
        <Link  variants={linkVariants}><a className={styles.nav_link} href="#contact" onClick={linkHandler}>Contact</a></Link>
      </Nav>
    </div>
    <div className='title' style={(prevScrollPos<500 || isOpen)?{'position':'absolute'}:
      {
        'position':'sticky',
        'top':'10px',
        'padding-left':'5%',
        'display':'flex',
        'flexDirection':(window.innerWidth<520)?'column':'row',
        'width':'fit-content'
      }
    }>
      <h1 style={(prevScrollPos<500)?{}:{"fontSize":"3rem"}}
      
      >ECE DAY</h1>
      <h2 style={(prevScrollPos<500)?{}:
      {
        "fontSize":"3rem",
        'left':0,
        'position':'initial',
        'margin-left':'10px',
        'display':(window.innerWidth<520 && !isOpen)?'none':'block'
      }
      }>4.14.2023</h2>
    </div>
  </Fragment>;
  }

export default Heading;