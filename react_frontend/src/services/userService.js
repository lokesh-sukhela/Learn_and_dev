import axios from 'axios'

const saveDetails = async(data)=>{
    const RegDetails = await axios.post(`http://localhost:8080/users`,data)
    return RegDetails
}

export default {saveDetails}