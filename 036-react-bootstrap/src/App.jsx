import { useState } from 'react'
import { Button, Carousel } from "react-bootstrap"


function App() {
  const [count, setCount] = useState(0)
  const sumarUno = () => { setCount(count + 1) }
  return (
    <>
      {/* <h1 className='text-white'>Movie App</h1>
      
      <div>
        <Button onClick={sumarUno}>+1</Button>
      </div> */}
      
      <div>
        <Carousel className='' >
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
            src="https://www.lavoz.com.ar/resizer/TjuWBjBYw5imsArxf5gRD7bLj8I=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/RZ23WR3Y6JBTZKQLPSJBSAXADU.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      
    </>
  )
}

export default App
