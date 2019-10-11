import axios from 'axios'

export const START_FETCHING = "START_FETCHING"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"
export const POST_START = "FETCH_START"
export const POST_SUCCESS = "FETCH_SUCCESS"
export const POST_FAILURE = "FETCH_FAILURE"

export const fetchSmurf = () => {
    return dispatch => {
        dispatch({ type: START_FETCHING });

        axios
            .get('http://localhost:3333/smurfs')
            // .then(response => console.log (response, "From API"))
            .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data }))
            .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }))

    };
};



export const addSmurf = (smurf) => {
    return dispatch => {
        dispatch({ type: POST_START });

        axios
            .post('http://localhost:3333/smurfs', smurf)
            // .then(response => console.log (response, "From API POST"))
            .then(response => dispatch({ type: POST_SUCCESS, payload: response.data }))
            .catch(error => dispatch({ type: POST_FAILURE, payload: error.response }))

    };
};