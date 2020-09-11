import data from './../productData.json';

const initState = {
	products: data,
	priceInfo: {
	    budget: [
            "$1-10",
            "$11-20",
            "$20-50"
        ],
        premium: [
            "$50-100",
            "$100-200",
            "$200+"
        ]
    }
}

export default function productsReducer(state = initState, action) {
    switch (action.type) {
        case 'EDIT_PRODUCT': {
            console.log("data isss ", action.data, action);
            const localProducts = state.products.map((product, index) => {
                if (index === action.product.id) {
                    return action.product
                } else {
                    return product
                }
            });

            return {
                ...state,
                products: localProducts
            }
        }
        default: return state;
    }
}
