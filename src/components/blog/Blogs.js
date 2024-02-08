import React from "react";
import { Container} from "react-bootstrap";
import Trending from "./Trending";
import './Blog.css';
import Regular from "./Regular";

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Trending/>
        <Regular/>
      </Container>
    </Container>
  );
}

export default Blogs;
