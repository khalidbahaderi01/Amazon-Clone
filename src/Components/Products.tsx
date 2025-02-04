import React from "react";

interface ProductsProp {
    image: string;
    name: string;
}

const Products: React.FC<ProductsProp> = ({ image, name }) => {
    return <>
        <h1>Product details</h1>
        <img src={image} alt="" />
        <h5>Name: {name}</h5>
    </>
}

export default Products;