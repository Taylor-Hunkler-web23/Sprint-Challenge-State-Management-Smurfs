import React, {useState} from 'react';

const Form = props => {
const [newSmurf, setNewSmurf] = useState ()


const handleChange = event => {
    setNewSmurf({
        [event.target.name]: event.target.value
    })
}

    return(
        <form>
            <input 
            name='name'
            placeholder='Name'
            onChange={handleChange}
            
            />
             <input 
            name='age'
            placeholder='Age'
            onChange={handleChange}
            
            />
 <input 
            name='height'
            placeholder='Height'
            onChange={handleChange}
            
            />

        </form>


    )
}


export default Form;