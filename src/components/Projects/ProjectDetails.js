import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import VideoPlayer from '../VideoPlayer';
import { useLocation } from 'react-router-dom';


const ProjectDetails = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
      <Row>
        <Col>
          <div className="project-demo-header">
            <h2>{'Project demo'}</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="project-video-wrapper">
            {/* Assuming you have a component for video playing */}
            <VideoPlayer src={state.myProp.introVideo} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="project-description">
            <p>
              {state.myProp.installationGuide}
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button variant="primary" href={state.myProp.button?state.myProp.webSite:state.myProp.downloadLink} target="_blank">
            {state.myProp.button?state.myProp.button:'Download'}
          </Button>
        </Col>
      </Row>
      </Container>
    </Container>
  );
};

export default ProjectDetails;
