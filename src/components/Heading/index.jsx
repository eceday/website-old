import React, { useState } from "react";
import { Header, Nav, Link, SvgBox } from "./Styles";

function Heading(props) {
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
        staggerChildren: 0.5,
      },
    },
    closed: {
      top: "-90vh",
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

  return (
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
        <Link  variants={linkVariants}><a href="https://www.youtube.com/watch?v=iik25wqIuFo">Home</a></Link>
        <Link  variants={linkVariants}><a href="https://www.youtube.com/watch?v=iik25wqIuFo">About</a></Link>
        <Link  variants={linkVariants}><a href="https://www.youtube.com/watch?v=iik25wqIuFo">Gallery</a></Link>
      </Nav>
    </div>
  );
}

export default Heading;