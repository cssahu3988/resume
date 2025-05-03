import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import videoCall from "../../Assets/Projects/video_call.png";
import VideoConference from "../../Assets/Projects/chnadra-video-conference.png";
import SocialMedia from "../../Assets/Projects/super_dev.png";
import OttApp from "../../Assets/Projects/ott.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="StreamPi"
              description="An android application which streams on demand media and live media. On demand media stemaing is achieved through HTTP live media streaming and live stremaing is achieved through RTMP server written in nodeJS"
              ghLink="https://github.com/sekhar-fullstack-dev/MediaStreaming"
              demoLink="http://ec2-51-21-2-219.eu-north-1.compute.amazonaws.com:80/downloadFile/mediastreaming-release.apk"
              downloadLink="https://drive.google.com/file/d/1ey8jXLFLyD-SWqZD5Zk2i-y2KLBgWlJX/view?usp=sharing"
              introVideo="https://firebasestorage.googleapis.com/v0/b/resume-f3810.appspot.com/o/portfolio_1.mp4?alt=media&token=fac48c2c-23ee-4c90-8aa3-4e8957658ff5"
              installationGuide="As you can see from the video, the app enables you to stream on demand media, create a live stream and stream that to many more users. Find the download button below and download the to expolre the app. Feel free to add new features to the project and give a star if you liked the project. Contact me for the backend implementation of this project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoCall}
              isBlog={false}
              title="Video conference"
              description="A video calling app written from scratch with out any third part library. This is also availabe as a library to be used in other projects"
              ghLink="https://github.com/cssahu3988/Videocalling_project"
              demoLink="http://ec2-51-21-2-219.eu-north-1.compute.amazonaws.com:80/downloadFile/mediastreaming-release.apk"
              downloadLink="https://drive.google.com/file/d/1_AeR-OprFgZ-e9WA8ev_L3TnbBNwlnkv/view?usp=sharing"
              introVideo="https://firebasestorage.googleapis.com/v0/b/resume-f3810.appspot.com/o/videocalling.mp4?alt=media&token=a9bfdca9-617e-4552-b63e-c920040ab650"
              installationGuide="Find the download button below. Click the download button to download the apk and install it. Intall the apk in two different devices so that you can check the video calling feature in real time. Make sure both the devices are conencted to same wifi as right now, devices on the same network will be able to communicate. Communication over intenet will be possible in the next update"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VideoConference}
              isBlog={false}
              title="Video conferencing app like google meet"
              description="A Comprehensive Video conferencing web application like google meet with screen sharing, participant management, chat and other features"
              ghLink="https://github.com/sekhar-fullstack-dev/web-rtc"
              demoLink="https://agorasdk-c3bfe.web.app/"
              downloadLink=""
              introVideo="https://firebasestorage.googleapis.com/v0/b/resume-f3810.appspot.com/o/Web-RTC%20-%20Made%20with%20Clipchamp.mp4?alt=media&token=6bba43ab-c637-4e65-940d-553b530c879d"
              installationGuide="Goto the website and login with your google account to explore the app."
              button="Go to website"
              webSite="https://agorasdk-c3bfe.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SocialMedia}
              isBlog={false}
              title="Social Media App"
              description="A Social media app to connect with fellow developers"
              ghLink=""
              demoLink="https://superdev.chandrasekharsahu.com/"
              downloadLink=""
              introVideo="https://firebasestorage.googleapis.com/v0/b/resume-f3810.appspot.com/o/Web-RTC%20-%20Made%20with%20Clipchamp.mp4?alt=media&token=6bba43ab-c637-4e65-940d-553b530c879d"
              installationGuide="Goto the website and create a account and explore"
              button="Go to website"
              webSite="https://superdev.chandrasekharsahu.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OttApp}
              isBlog={false}
              title="OTT App"
              description="An OTT app that is legit. You can watch movies in this"
              ghLink=""
              demoLink="https://ott.chandrasekharsahu.com/"
              downloadLink=""
              introVideo="https://firebasestorage.googleapis.com/v0/b/resume-f3810.appspot.com/o/Ott-app.mov?alt=media&token=398e3fa5-fe45-4afb-ad6a-c4fd37ad8505"
              installationGuide="Goto the url and enjoy"
              button="Go to website"
              webSite="https://ott.chandrasekharsahu.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
