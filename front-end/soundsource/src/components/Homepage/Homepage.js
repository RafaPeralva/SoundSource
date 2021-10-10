import React from "react";
import { Container, Row, Col, RowProps, ColProps } from "react-bootstrap";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-body">
        <Container fluid>
          {/* for now cols and rows are manually generated
            once backend is set up we will do it with a map function */}
          <Row>
            <Col className="text-center">
              <h3>Suggested</h3>
            </Col>
            <Col className="text-center">
              <h3>Playlists</h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              here goes the suggested songs ...
              <Row>
                <Col className="text-center">with new rows </Col>
              </Row>
            </Col>
            <Col className="text-center">
              here goes the suggested Playlists ...
              <Row>
                <Col className="text-center">with new rows</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
