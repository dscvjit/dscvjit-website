export const PRODUCTS_FETCH_REQUEST = 'PRODUCTS_FETCH_REQUEST';
export const PRODUCTS_FETCH_SUCCESS = 'PRODUCTS_FETCH_SUCCESS';
export const PRODUCTS_FETCH_ERROR = 'PRODUCTS_FETCH_ERROR';

export const productsFetchRequest = () => {
    return {
        type: PRODUCTS_FETCH_REQUEST
    };
};

export const productsFetchSuccess = response => {
    return {
        type: PRODUCTS_FETCH_SUCCESS,
        payload: response
    };
};

export const productsFetchError = error => {
    return {
        type: PRODUCTS_FETCH_ERROR,
        payload: error
    };
};