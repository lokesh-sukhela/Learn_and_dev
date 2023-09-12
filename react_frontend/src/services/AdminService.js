import axios from 'axios'
const getAllTrainingDetails = async ()=> {

    const Tdetails = await axios.get("https://localhost:8080/TrainingDetailsadmin")
    return Tdetails.data

}

const saveDetails = async()=>{
    const Tdetails = await axios.post("https://localhost:8080/")
    return Tdetails.data
}
export default {getAllTrainingDetails,saveDetails}
