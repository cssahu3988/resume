import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import videoCall from "../../Assets/Projects/video_call.png";
import webRTC from "../../Assets/Projects/webRTC.png";


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
              introVideo = "https://firebasestorage.googleapis.com/v0/b/resume-f3810.appspot.com/o/portfolio_1.mp4?alt=media&token=fac48c2c-23ee-4c90-8aa3-4e8957658ff5"
              installationGuide = "As you can see from the video, the app enables you to stream on demand media, create a live stream and stream that to many more users. Find the download button below and download the to expolre the app. Feel free to add new features to the project and give a star if you liked the project. Contact me for the backend implementation of this project"
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
              introVideo = "https://firebasestorage.googleapis.com/v0/b/resume-f3810.appspot.com/o/videocalling.mp4?alt=media&token=a9bfdca9-617e-4552-b63e-c920040ab650"
              installationGuide = "Find the download button below. Click the download button to download the apk and install it. Intall the apk in two different devices so that you can check the video calling feature in real time. Make sure both the devices are conencted to same wifi as right now, devices on the same network will be able to communicate. Communication over intenet will be possible in the next update"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
        <Row>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webRTC}
              isBlog={false}
              title="WebRTC React app"
              description="A Video conferencing web application built with open source webRTC library"
              ghLink="https://github.com/sekhar-fullstack-dev/web-rtc"
              demoLink="http://ec2-51-21-2-219.eu-north-1.compute.amazonaws.com:80/downloadFile/mediastreaming-release.apk"
              downloadLink="https://drive.google.com/file/d/1_AeR-OprFgZ-e9WA8ev_L3TnbBNwlnkv/view?usp=sharing"
              introVideo = "https://firebasestorage.googleapis.com/v0/b/resume-f3810.appspot.com/o/Web-RTC%20-%20Made%20with%20Clipchamp.mp4?alt=media&token=6bba43ab-c637-4e65-940d-553b530c879d"
              installationGuide = "Goto the website and login with your google account to explore the app. If you have any concerns please send a email at sekhar.fullstack.dev@gmail.com"
              button = "Go to website"
              webSite = "https://chat-app-a9673.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
