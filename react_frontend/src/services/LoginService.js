import axios from 'axios';

const checkDetails = async(data)=>{
  
    const Tdetails = await axios.post(`http://localhost:8080/loginDetails`,data)
    return Tdetails
}
export default {checkDetails}