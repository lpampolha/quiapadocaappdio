import React, { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Form,
  ProgressBar,
  ToggleButton,
} from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  getCategories,
  createProduct,
  updateProduct,
} from "../../services/admin";
import { FaCheck, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import IntlCurrencyInput from "react-intl-currency-input";

import history from "../../config/history";
import currencyConfig from "../../config/currency";

const FormProducts = (props) => {
  const [formProduct, setFormProduct] = useState({
    ...props.update,
    category: props.update?.category?._id || undefined,
  });
  const [categories, setCategories] = useState([]);
  const [progress, setProgress] = useState(0);
  const [updatePhoto, setUpdatePhoto] = useState(false);

  useEffect(() => {
    let get = async () => {
      const c = await getCategories();
      setCategories(c.data);
    };
    get();
    //clear
    return () => (get = () => {});
  }, []);

  const isUpdate = Object.keys(props.update).length > 0;

  const typeReq = (data) =>
    isUpdate ? updateProduct(props.update._id, data) : createProduct(data);

  const handleChange = (attr) => {
    const { value, name, checked } = attr.target;
    const isCheck = name === "status" || name === "highlight";

    if (name === "photo") {
      setFormProduct({
        ...formProduct,
        photo: attr.target.files[0],
      });
    } else {
      setFormProduct({
        ...formProduct,
        [name]: isCheck ? checked : value,
      });
    }
    return;
  };

  const submitProduct = async () => {
    const message = (type, message) =>
      Swal.fire({
        position: "top-end",
        icon: type || "success",
        title: message,
        showConfirmButton: false,
        timer: 2500,
      });
    // conversao dos dados paa formData

    let data = new FormData();
    Object.keys(formProduct).forEach((key) =>
      data.append(key, formProduct[key])
    );
    // Exibição dos valores chave/valor
    for (var pair of data.entries()) {
      console.dir(pair[1].photo)
      console.log(pair[0] + ", " + pair[1]);
    }
    const config = {
      onUploadProgress: function (progressEvent) {
        let successPercent = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setProgress(successPercent);
      },
      headers: {
        "Content-type": "multipart/form-data",
      },
    };

    typeReq(data, config)
      .then((res) => {
        clearForm();
        message("success", `Produto Cadastrado com sucesso.`);
        history.push("/admin/produtos", { update: true });
      })
      .catch((err) => message("error", `Erro ao cadastrar produto.`));
  };

  const clearForm = () => {
    setUpdatePhoto(true);
    setFormProduct({
      category: "",
      status: true,
      highlight: false,
      photo: "",
    });
  };

  const isNotValid = () => {
    return Object.keys(formProduct).some(
      (k) => typeof formProduct[k] === "string" && formProduct[k] === ""
    );
  };

  const removePhoto = () => {
    setUpdatePhoto(true);
    setFormProduct({
      ...formProduct,
      photo: "",
    });
  };

  const handlePrice = (event, value, maskedValue) => {
    event.preventDefault();
    setFormProduct({
      ...formProduct,
      price: value,
    });
  };

  const handlePriceDiscount = (event, value, maskedValue) => {
    event.preventDefault();
    const percent = (value / formProduct.price) * 100;
    const percentAllow = percent >= 100 ? 100 : percent;
    setFormProduct({
      ...formProduct,
      discount_price: value,
      discount_price_percent: percentAllow,
    });
  };

  const handlePercentDiscount = (attr) => {
    const desc = attr.target.value;

    const valorDesconto = Math.round(formProduct.price * (desc / 100));
    setFormProduct({
      ...formProduct,
      discount_price: formProduct.price - valorDesconto,
      discount_price_percent: desc >= 0 && desc <= 100 ? desc : 0,
    });
  };

  return (
    <>
      <Form.Group>
        <Form.Control
          type="text"
          onChange={handleChange}
          name="title"
          value={formProduct.title || ""}
          placeholder="Titulo do Produto"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          onChange={handleChange}
          name="description"
          value={formProduct.description || ""}
          placeholder="Descrição curta do Produto"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          onChange={handleChange}
          name="complete_description"
          value={formProduct.complete_description || ""}
          as="textarea"
          rows={3}
          placeholder="Descrição completa do Produto"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="select"
          custom
          name="category"
          onChange={handleChange}
          value={formProduct.category}
        >
          <option value="">-----------</option>
          {categories.map((it, i) => (
            <option key={i} value={it._id}>
              {it.name}
            </option> 
          ))}
        </Form.Control>
      </Form.Group>
      <hr />
      <Form.Group>
        {/* <Form.Control type="text" onChange={handleChange} name="price" value={formProduct.price || ""} placeholder="Preço" /> */}
        <Form.Label>Preço</Form.Label>
        <IntlCurrencyInput
          className="form-control"
          currency="BRL"
          config={currencyConfig}
          value={formProduct.price || ""}
          onChange={handlePrice}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Preço com desconto</Form.Label>
        {/* <Form.Control type="text" onChange={handleChange} name="discount_price" value={formProduct.discount_price || ""} placeholder="Desconto" /> */}
        <IntlCurrencyInput
          disabled={!formProduct.price}
          className="form-control"
          value={formProduct.discount_price || ""}
          currency="BRL"
          config={currencyConfig}
          onChange={handlePriceDiscount}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Desconto (%)</Form.Label>
        <Form.Control
          disabled={!formProduct.price}
          type="number"
          onChange={handlePercentDiscount}
          max="100"
          min="0"
          name="discount_price_percent"
          value={formProduct.discount_price_percent || ""}
          placeholder="Desconto em porcentagem"
        />
      </Form.Group>
      <Form.Group>
        {isUpdate && !updatePhoto ? (
          <Thumb>
            <img src={formProduct.photo} alt="photox" />
            <span onClick={removePhoto}>Remover</span>
          </Thumb>
        ) : (
          <input name="photo" type="file" onChange={handleChange} />
        )}
      </Form.Group>
      <Form.Group className="d-flex">
        <ButtonGroup toggle className="mr-3">
          <ToggleButton
            type="checkbox"
            variant={Boolean(formProduct.highlight) ? "success" : "danger"}
            name="highlight"
            onChange={handleChange}
            checked={Boolean(formProduct.highlight)}
          >
            {Boolean(formProduct.highlight) ? <FaCheck /> : <FaTimes />}{" "}
            Destaque
          </ToggleButton>
        </ButtonGroup>
        <ButtonGroup toggle className="mr-3">
          <ToggleButton
            type="checkbox"
            variant={Boolean(formProduct.status) ? "success" : "danger"}
            name="status"
            onChange={handleChange}
            checked={Boolean(formProduct.status)}
          >
            {Boolean(formProduct.status) ? <FaCheck /> : <FaTimes />} Status
          </ToggleButton>
        </ButtonGroup>
      </Form.Group>
      <Form.Group>
        <Button
          variant="primary"
          disabled={isNotValid()}
          onClick={submitProduct}
        >
          {isUpdate ? "Atualizar" : "Cadastrar"}
        </Button>
      </Form.Group>
      <br />
      {progress > 0 ? (
        <ProgressBar striped variant="success" now={progress} />
      ) : (
        ""
      )}
      <br />
    </>
  );
};

export default FormProducts;

const Thumb = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-width: 200px;
    max-height: 200px;
  }

  span {
    cursor: pointer;
    color: #ccc;
    &:hover {
      color: red;
    }
  }
`;

// complete_description: "",
// description: "",
// discount_price: "",
// discount_price_percent: "",
// price: "",
// title: "",
// category: "",
// photo: "",
// status: true,
// highlight: false
