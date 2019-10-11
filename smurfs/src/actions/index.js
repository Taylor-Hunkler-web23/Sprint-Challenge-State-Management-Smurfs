import axios from 'axios'

export const START_FETCHING = "START_FETCHING"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"

export const fetchSmurf = () => {
    return dispatch => {
        dispatch({ type: START_FETCHING });

        axios
            .get('http://localhost:3333/smurfs')
            // .then(response => console.log (response, "From API"))
        .then (response => dispatch({ type: FETCH_SUCCESS, payload: response.data}))
        .catch(error=> dispatch({ type: FETCH_FAILURE, payload: error.response}))

    };
};