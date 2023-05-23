import { Button, Carousel, Col, Container,Row, Card } from "react-bootstrap"


function Home() {
  
  return (
    <>

      <Container>
        <Carousel >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://resizer.glanacion.com/resizer/othdWx273LRpcCnnGXYd4rZmrwU=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/7IXBPJ5JHBDCBHSUDK3CFZ5XHU.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.lavoz.com.ar/resizer/TjuWBjBYw5imsArxf5gRD7bLj8I=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/RZ23WR3Y6JBTZKQLPSJBSAXADU.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0003/1916/0381/articles/asado-perfecto-1.jpg?v=1574172033"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container className='mt-3'>
        <Row>
          <Col xs={12} md={6} lg={4} xl={3}>
            <Card >
              <Card.Img variant="top" src="https://vocescriticas1.cdn.net.ar/252/vocescriticas1/images/56/30/563021_b59dd2a8f3bfa4bd623f1c5bc304727019c81ddc9575bacf2a6f73b428065821/lg.webp" />
              <Card.Body>
                <Card.Title>sfijas</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3}>
            <Card >
              <Card.Img variant="top" src="https://resizer.glanacion.com/resizer/DX1-dyjtqe3efPEahil_dwkYeuQ=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/VLWFAANIWBGPFO4CSUHS7RYVVQ.jpg" />
              <Card.Body>
                <Card.Title>sfijas</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3}>
            <Card >
              <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0003/1916/0381/articles/asado-perfecto-1.jpg?v=1574172033" />
              <Card.Body>
                <Card.Title className='text-center'>sfijas</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3}>
            <Card>
              <Card.Img variant="top" src="https://resizer.glanacion.com/resizer/DX1-dyjtqe3efPEahil_dwkYeuQ=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/VLWFAANIWBGPFO4CSUHS7RYVVQ.jpg" />
              <Card.Body>
                <Card.Title>sfijas</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  )
}

export default Home
