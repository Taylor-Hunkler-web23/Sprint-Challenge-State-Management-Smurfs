import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import {fetchSmurf} from '../actions/index.js'
import Smurf from './Smurf.js'
import Form from './Form.js'

const SmurfList = (props) => {
console.log(props,"p")
    useEffect (() => {
        props.fetchSmurf();
    }, [])

    if (props.loading) {
        return <h1>Loading...</h1>
    }

    return(
    
           <div>
            {props.error && <p>{props.error}</p>}
      
            {props.smurfs.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
               
    ))}
            <Form/>

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