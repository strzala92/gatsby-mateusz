import React from "react"
import { Container, Row, Col } from 'reactstrap';
import { Link } from "gatsby"

const HeaderBg = () => (
    <Container fluid={true}>
      <Row>
        <Col>
        <div className="branding">
            <div className="block">
                <h1 className="header"><Link to="/" rel="home">Mateusz Piórkowski</Link></h1>
                        <p className="text">Duczymińska kronika internetowa…</p>
             </div>
         </div>
        </Col>
      </Row>
    </Container>
)


export default HeaderBg



