import React, { useState, useEffect } from "react";
import { getProducts } from "../services/productServices";
import Header from "../components/header";
import ProductItem from "../components/productItem";
import { Container, Row, Col } from "reactstrap";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    getProducts()
      .then((res) => {
        setProducts(res?.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(products);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <div className="flex justify-between flex-wrap">
            {products?.map((item) => (
              <>
                <div key={item?._id}>
                  <ProductItem
                    productImg={item?.productImage}
                    productTitle={item?.title}
                    productDescription={item?.description}
                    productPrice={item?.price}
                  />
                </div>
                ;
              </>
            ))}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Products;
