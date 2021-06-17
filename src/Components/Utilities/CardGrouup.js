import React from "react";
import ProductCard from "./ProductCard";
import { Row, Col } from "antd";
import "./CardGroup.scss";

const CardGroup = (props) => {
    const { products } = props;
    return(
    <div className="card-group-container">
       <Row>
        {products.map(product => (<Col span={8}><ProductCard product={product}/></Col>)) }
       </Row>
    </div>)
};

export default CardGroup;