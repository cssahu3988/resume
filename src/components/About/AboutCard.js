import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chandrasekhar Sahu </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I started my career in software development after completing 
            {/* I am currently employed as a software developer at MantraLabs. */}
            
            my Bachelor of Technology in 2019. My journey started with my interests being in Android development
            {/* I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra. */}
            
            . Then I started being interested in knowing the "behind the scenes" of product development
            
            and started backend development in nodejs followed by react.
            
            Currently i am working as a senior software engineer at MantraLabs.
            <br/>
            <br/>
            Some of my other fields of interests are : 
            <br/>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Physics
            </li>
            <li className="about-activity">
              <ImPointRight /> Mathematics
            </li>
            <li className="about-activity">
              <ImPointRight /> AI and ML
            </li>
            <li className="about-activity">
              <ImPointRight /> Martial arts
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports (cricket)
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">ChandraSekhar</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
