import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'
import axios from 'axios'


export default () => {
    const [responseSubmit, setresponseSubmit] = useState("")
    const [form, setForm] = useState({
        name: "Nome do usuário",
        email: 'email@infnet.edu.br',
        message: "isso é uma mensagem de teste"

    })

    const handleChange = (attr) => {
        setForm({
            ...form,
            [attr.target.name]: [attr.target.value]
        })
    }

    const submitLogin = async () => {

        const result = await axios.post('http://localhost:3001/mail', form)
        setresponseSubmit(result.data)
    }

    return (
        <Contact>
            <TitlePage title="Contato" sub="Veja Nossos Contatos" />
            <Container>
                <Row>
                    <Info md={4}></Info>
                    <FormData md={8}>
                        <br />
                        <br />
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control className="form-control form-control-user" onChange={handleChange} type="text" name="name" placeholder="Entre com seu Nome" value={form.name || ""} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control className="form-control form-control-user" onChange={handleChange} type="email" name="email" placeholder="Entre com seu Email" value={form.email || ""} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control className="form-control form-control-user" onChange={handleChange} type="text" as="textarea" rows={3} name="message" placeholder="Entre com um Mensagem" value={form.message || ""} />
                        </Form.Group>

                        <Button onClick={submitLogin} className="btn btn-primary btn-user btn-block" variant="primary" type="submit">Enviar</Button>
                        <br />
                        <ResponseForm type={responseSubmit.type}>{responseSubmit.message}</ResponseForm>
                    </FormData>
                </Row>

            </Container>
        </Contact>
    )
}


const Contact = styled.div`
    display:block;
`

const Info = styled(Col)`
    background: '../../../assets/images/bg_4.jpg'
    width: 100%;
    height: 350px
`
const FormData = styled(Col)`
    background: #fff;
    width: 100%;
    height: 350px
`
const ResponseForm = styled.div`
   color:  ${props => props.type === 'success' ? 'green' : 'red'};
`





