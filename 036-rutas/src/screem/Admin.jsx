import Nav1 from './Nav1'
import { Container, Form, Button, FloatingLabel } from "react-bootstrap"

function Admin() {
    return (
        <div>
            <Nav1 />
            <Container className='mt-3 text-white'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-white">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>

                    <Button variant="danger" type="submit" className='mt-3'>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Admin
