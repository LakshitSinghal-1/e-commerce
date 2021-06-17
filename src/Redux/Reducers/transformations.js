export const transformFilter = (products, filterType) => {
    let filterArray = [];
    for(let i = 0; i< products.length; i++){
        let product = products[i];
        let filterCategory =   product[filterType];
        if(!filterArray.includes(filterCategory)){
            filterArray.push(filterCategory);
        }
    };

    return filterArray.slice(0,3);
}