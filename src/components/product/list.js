import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import { getProducts, deleteProduct } from '../../services/admin'
import { FaRegEdit, FaTrashAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'


const ListProducts = (props) => {
    const [products, setProducts] = useState([])
    const [isUpdate, setUpdate] = useState(false)

    useEffect(() => {
        setUpdate(false)
        let get = async () => {
            try {
                const prd = await getProducts();
                setProducts(prd.data)
            } catch (error) {
                console.log(error)
            }
        }
        if (!isUpdate) {
            get();
        }
        //clear
        return () => get = () => { };
    }, [isUpdate])

    const _deleteCategory = async (obj) => {
        const message = (type, message) => Swal.fire({
            position: 'top-end',
            icon: type || 'success',
            title: message || `Categoria excluída com sucesso.`,
            showConfirmButton: false,
            timer: 2500
        })

        Swal.fire({
            title: `Deseja exluir o produto ${obj.title} `,
            showCancelButton: true,
            confirmButtonText: `Sim`,
            cancelButtonText: `Não`,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(obj._id)
                    .then(() => {
                        setUpdate(true)
                        message('success', `Produto ${obj.title} excluída com sucesso.`)
                    })
                    .catch(() => message('danger', `Erro ao excluir o produto`))
            }
        })
    }

    return (
        <>
            <NewTable striped hover size="sm">
                <thead>
                    <tr>
                        <THeadItem>Status</THeadItem>
                        <THeadItem>Highlight</THeadItem>
                        <THeadItem>Nome</THeadItem>
                        <THeadItem>Categoria</THeadItem>
                        <THeadItem>Preço</THeadItem>
                        <THeadItem>Desconto</THeadItem>
                        <THeadItem>Perc</THeadItem>
                        <THeadItem></THeadItem>
                    </tr>
                </thead>
                <tbody>
                    {products.map((prd, i) => (
                        <tr key={i}>
                            <TbodyItem>{prd.status ? <FaCheckCircle /> : <FaTimesCircle />}</TbodyItem>
                            <TbodyItem>{prd.highlight ? <FaCheckCircle /> : <FaTimesCircle />}</TbodyItem>
                            <TbodyItem>{prd.title}</TbodyItem>
                            <TbodyItem>{prd.category?.name}</TbodyItem>
                            <TbodyItem>{prd.price}</TbodyItem>
                            <TbodyItem>{prd.discount_price}</TbodyItem>
                            <TbodyItem>{prd.discount_price_percent}</TbodyItem>
                            <TbodyItem>
                                <ActionButton onClick={() => props.updateProduct(prd)} variant="link" size="sm">
                                    <FaRegEdit />                                </ActionButton>
                                <ActionButton onClick={() => _deleteCategory(prd)} variant="link" size="sm">
                                    <FaTrashAlt />
                                </ActionButton>
                            </TbodyItem>
                        </tr>
                    ))}

                </tbody>
            </NewTable>
        </>
    )
}

export default ListProducts


const NewTable = styled(Table)`
    font-size: 14px
`

const THeadItem = styled.th`
    background: #666;
    color:#eee;
`
const TbodyItem = styled.td`
    :nth-child(1){  width: 10%; }
    :nth-child(2){  width: 10%; }
    :nth-child(3){  width: 20%; }
    :nth-child(4){  width: 10%; }
    :nth-child(5){  width: 10%; }
    :nth-child(6){  width: 10%; }
    :nth-child(7){  width: 10%; }
    :nth-child(8){  width: 20%; }
`
const ActionButton = styled(Button)`
    padding:2px 4px;
    font-weight:500;
    font-size: 16px;

    :hover {
        opacity:0.4;
        color: red
    }
`



// {
//     "highlight": true
//     "status": true
//     "_id": "5f7eea912ce7e17121ef72e0"
//     "category": "5f730ecab8f6c96fac7f68fd"
//     "description": "pizza com tudo dentro"
//     "complete_description": "não sei todos os ingredientes"
//     "price": 30
//     "discount_price": 27
//     "discount_price_percent": 10
//     "title": "Portuguesa"
//     "photo": "https://pizza-infnet.s3.amazonaws.com/product/taycabral..jpg"
//     "last_modification_date": "2020-10-08T10:31:45.828Z"
//     "__v": 0
//     "last_modified_by": "5f74650a3bad77eb5a4cf41e"
// }