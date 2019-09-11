import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from 'reactstrap'
import NavbarComponent from './navbar'
import NavbarComponent2 from './navbar2'
import HeaderBg from './hedaer-bg'

const Header = () => (
  <header>
    <Container>
      <Row>
        <Col>
          <NavbarComponent/>
        </Col>
      </Row>
    </Container>
    <HeaderBg/>
    <Container>
      <Row>
        <Col>
          <NavbarComponent2/>
        </Col>
      </Row>
    </Container>
  </header>
)


export default Header
