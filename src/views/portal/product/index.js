import React, { useState, useEffect } from "react"
import { Container, Tab, Tabs } from "react-bootstrap"
import styled from "styled-components"

import TitlePage from "../../../components/titlePage"
import { getProducts } from "../../../services/admin"
import { useDispatch, useSelector } from "react-redux"
import { categoryList } from "../../../store/categories/category.actions"
export default () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.category.categories);
  console.log("categories", categories);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      dispatch(categoryList());
      const p = await getProducts();
      setProducts(p.data);
    })();

    //clear
    return () => () => {};
  }, [dispatch]);
  const mountProducts = (cat) => {
    const prods = products.filter((item) => item.category._id === cat._id);
    console.log(prods);
    return (
      <GridCards>
        {prods.length === 0 ? (
          <div>Sem produtos</div>
        ) : (
          prods.map((prd, i) => (
            <>
            <li> 
              <img src={prd.photo} alt="" />
              <h6>{prd.title}</h6>
            </li>
            </>
          ))
        )}
      </GridCards>
    );
  };

  return (
    <Product>
      <TitlePage title="Produtos" sub="Conheça nossa Lista de Produtos" />

      <Container>
        <TabBox defaultActiveKey={1} className="produtos">
          {categories.map((cat, i) => (
            <Tab eventKey={i} key={i} title={cat.name}>
              {mountProducts(cat)}
            </Tab>
          ))}
        </TabBox>
      </Container>
    </Product>
  );
};

const Product = styled.div`
  display: block;
  background: #000;
  color: #fff;
  li{

    display: flex;
    list-style-type: none;
    width:100%;

  .produtos {
    margin-top: 20px;
  }
  .tab-content {
  }
  .tab-pane {
    display: flex;
    div {
      display: grid;
      grid-gap: 10px;
      /* grid-template-columns: repeat(auto-fit, 250px); */
      width: 100%;
    }
  }
`;

const TabBox = styled(Tabs)`
  background: #000;
  color: #fff;
  display: flex;
  width:100%;
`;
const GridCards = styled.div`

background: #000;
color: #fff;

li{

  display: flex;
  list-style-type: none;
  width:100%;

  img{
      width:100px;
      height:100px;
      border-radius: 50px;
  }

  h6{
    text-align: center;
    padding: 15px;
    margin: 15px;
  }
}

`;