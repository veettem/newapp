import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle,
  CardText,
} from "reactstrap";
import Description from "./description";

const ProductItem = ({
  productImg,
  productTitle,
  productDescription,
  productBtnHandler,
  productPrice,
}) => {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src={productImg} />
      <CardBody>
        <CardTitle tag="h5">{productTitle}</CardTitle>
        <CardText>
          <Description description={productDescription} />
        </CardText>
        <CardSubtitle>{productPrice}</CardSubtitle>
        <Button onClick={productBtnHandler}>Add</Button>
      </CardBody>
    </Card>
  );
};

export default ProductItem;
