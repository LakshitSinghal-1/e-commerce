import React from "react";
import { Row } from 'antd';
import "./ProductCard.scss";

const ProductCard = (props) => {
    const { product } = props;
    const { searchImage, productId, brand, price, additionalInfo} = product;
    return(
        <div className="product-card-container" key={productId}>
            <div className="image-container">
                <img src={searchImage} height="250px" width="150px" />
            </div>
            <div className="text-container">
            <Row>
                {brand}
            </Row>
            <Row>
                {price}
            </Row>
            <Row>
                {additionalInfo}
            </Row>
            </div>
        </div>
    );
}

export default ProductCard;