import axios from 'axios'
const getAllTrainingDetails = async ()=> {

    const Tdetails = await axios.get(`https://localhost:'${process.env.MAIN_PORT}'/users/TrainingDetailsadmin`)
    return Tdetails.data

}



const saveDetails = async(data)=>{
  
    const Tdetails = await axios.post(`http://localhost:8080/users`,data)
    return Tdetails
}
export default {getAllTrainingDetails,saveDetails}

