import { Carousel, Container } from "react-bootstrap";
import Nav1 from './Nav1'
import Cards1 from './Cards1'

function Home() {
    return (
        <>
            <Nav1/>
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
            <Cards1/>
        </>


    )
}
export default Home