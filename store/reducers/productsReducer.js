import {
    PRODUCTS_FETCH_ERROR,
    PRODUCTS_FETCH_REQUEST,
    PRODUCTS_FETCH_SUCCESS
} from '../actions/productsAction';

export const initialState = {
    state: 'initial',
    productsData: null,
    error: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_FETCH_REQUEST:
            return { ...state, state: 'loading' };
        case PRODUCTS_FETCH_SUCCESS:
            return { ...state, state: 'loaded', invoicesData: action.payload };
        case PRODUCTS_FETCH_ERROR:
            return { ...state, state: 'error', error: action.payload };
        default:
            break;
    }
    return state;
}