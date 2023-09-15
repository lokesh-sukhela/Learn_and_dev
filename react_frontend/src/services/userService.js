import axios from 'axios'

// Register Button Functionality
const saveTrainingDetails = async(data)=>{
    const RegDetails = await axios.post(`http://localhost:8080/users`,data)
    return RegDetails
}

export default {saveTrainingDetails}




