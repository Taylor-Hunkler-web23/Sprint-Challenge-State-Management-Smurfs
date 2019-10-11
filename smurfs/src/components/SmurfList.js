import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import {fetchSmurf} from '../actions/index.js'

const SmurfList = (props) => {

    useEffect (() => {
        props.fetchSmurf();
    }, [])

    if (props.loading) {
        return <h1>Loading...</h1>
    }

    return(
        <div>
            <h1>List</h1>

        </div>
    )
}



const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        loading: state.loading,
        error: state.error
    }
}


export default connect(mapStateToProps, {fetchSmurf})(SmurfList);