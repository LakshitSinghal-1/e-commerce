import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Layout } from "antd";
import { getData } from "../../Redux/Actions/actions";
import CardGroup from "../Utilities/CardGrouup";
import CardFilters from "../Utilities/CardFilters";

const { Header, Footer, Sider, Content } = Layout;
const AppLayout = (props) => {
    const {getProductsData, products,  
        brandFilter,
        categoryFilter,
        genderFilter,
        loader,
        filterOptions } = props;
useEffect(()=>{
    getProductsData();
},[])

const filterProducts = (checkedValues, filterType) => {
    let tempProducts = [];
    for(let i=0; i< products.length; i++){
        let tempProduct = products[i];
        for(let j=0; j <checkedValues.length; j++){
            let checkedValue = checkedValues[j];
            if(tempProduct[filterType] === checkedValue ){
                tempProducts.push(tempProduct);
            }
        }     
    }
    setFilteredProducts(tempProducts);
};

const [filteredProducts, setFilteredProducts ] = useState([]);

return(
    <div>
    <Layout>
      <Header style={{ backgroundColor: "#dcdcdc"}}> E-Commerce </Header>
      <Layout>
        <Sider style={{ backgroundColor: "whitesmoke"}}>
            <CardFilters 
                title={'Brand'} 
                filterTypeArray={brandFilter}
                filterProducts={filterProducts}
            />
                  <CardFilters 
                title={'Category'} 
                filterTypeArray={categoryFilter}
                filterProducts={filterProducts}
            />
                  <CardFilters 
                title={'Gender'} 
                filterTypeArray={genderFilter}
                filterProducts={filterProducts}
            />
        </Sider>
        <Content style={{minHeight: '90vh'}}>
            {loader && <div style={{display: "flex", justifyContent:"center", alignItems:"center", height: '100vh'}}>
                <Loader
                    type="Puff"
                    color="#dcdcdc"
                    height={100}
                    width={100}
                    visible={loader}
                />
            </div>}
            {products.length && <CardGroup products={filteredProducts.length ===0 ? products : filteredProducts}/> }
            </Content>
      </Layout>
    </Layout>
    </div>
)

};

const mapStateToProps = (state) => {
   const { products, filterOptions, brandFilter, categoryFilter, genderFilter, loader  } = state.projectReducer;
    return {
        products,
        brandFilter,
        categoryFilter,
        genderFilter,
        filterOptions,
        loader,
    }
}; 

const mapDispatchToProps = {
    getProductsData: getData
}

export default connect (mapStateToProps, mapDispatchToProps)(AppLayout);