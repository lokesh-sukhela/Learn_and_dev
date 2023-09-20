import axios from 'axios';

// for SignUp
const saveDetails = async(data)=>{
    console.log("it's coming in saveDetails",data);
    const Tdetails = await axios.post(`${process.env.REACT_APP_PORTSERVER}/`,data)
    console.log(Tdetails)
    return Tdetails
}


// for Login 
const checkDetails = async(data)=>{
    const Tdetails = await axios.post(`${process.env.REACT_APP_PORTSERVER}/loginDetails`,data)
    return Tdetails
}


export default {saveDetails,checkDetails}




