import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { createCategory, updateCategory } from '../../services/admin'
const FormCategory = (props) => {


    const [formCategory, setFormCategory] = useState({
        ...props.update
    })
    const typeReq = (data) => Object.keys(props.update).length > 0 ? updateCategory(props.update._id, data) : createCategory(data)

    const handleChange = (attr) => {
        const { value, name } = attr.target
        setFormCategory({
            ...formCategory,
            [name]: value
        })
        return;
    }

    const isUpdate = Object.keys(props.update).length > 0

    const submitCategory = async () => {
        const message = (type, message) => Swal.fire({
            position: 'top-end',
            icon: type || 'success',
            title: message || `Categoria excluída com sucesso.`,
            showConfirmButton: false,
            timer: 2500
        })

        try {
            await typeReq(formCategory)
            message('success', `Categoria ${isUpdate ? "Atualizada" : "Cadastrada"} com sucesso.`)

            if (!isUpdate) {
                setFormCategory({})
            }

        } catch (error) {
            message('error', `Deu Ruimn.`)
        }

    }


    return (
        <>
            <Form.Group >
                <Form.Control type="text" onChange={handleChange} name="name" value={formCategory.name || ""} placeholder="Nome da Categoria" />
            </Form.Group>
            <Form.Group >
                <Form.Control type="text" onChange={handleChange} name="icon" value={formCategory.icon || ""} placeholder="Url Icone" />
            </Form.Group>
            <Button variant="primary" onClick={submitCategory}>
                {isUpdate ? "Atualizar" : "Cadastrar"}
            </Button>
        </>
    )

}

export default FormCategory


