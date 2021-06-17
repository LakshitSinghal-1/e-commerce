import { GET_DATA } from "../actionTypes"; 
import { transformFilter } from "./transformations";

const initialState ={
    data: {},
    products:[],
    sortOptions: [],
    filterOptions: ['Brand', 'Category', 'Gender' ],
    brandFilter: [],
    categoryFilter: [],
    genderFilter: []
}


export default function (state =initialState,action){
    switch (action.type){   
        case GET_DATA:
                return {
                    ...state,
                    data: {...action.payload},
                    products: action.payload.products,
                    sortOptions: action.payload.sortOptions,
                    brandFilter: transformFilter(action.payload.products, 'brand'),
                    categoryFilter: transformFilter(action.payload.products, 'category'),
                    genderFilter: transformFilter(action.payload.products, 'gender'),
                    
                }
        default:
            return state;
    }
};