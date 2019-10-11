import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, POST_START, POST_SUCCESS, POST_FAILURE } from '../actions/index.js'

const initialState = {
    smurfs: [],
    loading: false,
    error: ''

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                loading: true,
                error: ''

            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                smurfs: action.payload
            }

        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }


        case POST_START:
            return {
                ...state,
                loading: true,
                error: ''
            }

        case POST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                smurfs: [...state.smurfs, action.payload]
            }

        case POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }



        default:
            return state;
    }


}

export default reducer;