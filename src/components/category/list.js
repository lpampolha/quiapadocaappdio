import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import styled from 'styled-components'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'
import { categoryDrop, categoryList } from '../../store/categories/category.actions'
import { useDispatch, useSelector } from 'react-redux'



const ListCategory = (props) => {
    const dispatch = useDispatch()

    const categoryState = useSelector(state => state.category.categories)
    // let categoryLoading = useSelector(state => state.category.loading)

    useEffect(() => {
        dispatch(categoryList())
    }, [dispatch])

    const _deleteCategory = async (obj) => {
        const resultConfirmation = await Swal.fire({
            title: `Deseja exluir o usuário ${obj.name} `,
            showCancelButton: true,
            confirmButtonText: `Sim`,
            cancelButtonText: `Não`,
        })

        if (resultConfirmation.isConfirmed) {
            dispatch(categoryDrop({ category: obj }))
            // dispatch(categoryList())
        }

    }

    const sortCategoryByName = categoryState.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });


    return (
        <>

            <Table striped hover size="sm">
                <thead>
                    <tr>
                        <THeadItem>Nome</THeadItem>
                        <THeadItem></THeadItem>
                    </tr>
                </thead>
                <tbody>
                    {sortCategoryByName.map((catg, i) => (
                        <tr key={i}>
                            <td>{catg.name}</td>
                            <td>
                                <ActionButton onClick={() => props.updateCategory(catg)} variant="link" size="sm">
                                    <FaRegEdit />                                </ActionButton>
                                <ActionButton onClick={() => _deleteCategory(catg)} variant="link" size="sm">
                                    <FaTrashAlt />
                                </ActionButton>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </>
    )
}

export default ListCategory


const THeadItem = styled.th`
    background: #666;
    color:#eee;

    :nth-child(1){  width: 80%; }
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
