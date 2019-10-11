import React, {useEffect} from 'react'
import { connect } from 'react-redux';

const SmurfList = (props) => {


    return(
        <div>
            <h1>List</h1>

        </div>
    )
}



const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
     
    }
}


export default connect(mapStateToProps, {})(SmurfList);