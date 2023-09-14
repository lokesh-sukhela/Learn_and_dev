import axios from 'axios'


const getAllTrainingDetails = async ()=> {
    const Tdetails = await axios.get(`https://localhost:8080/admin`)
    return Tdetails.data
}


const saveDetails = async(data)=>{
    const Tdetails = await axios.post(`http://localhost:8080/`,data)
    return Tdetails
}



const trainingDetails = async (data) => {
    console.log("called api")
    const training = await axios.post('https://localhost:8080/admin/TrainingDetailsAdmin',data);
    return training;
}

const updateDetails=async(id)=>{
    console.log("called api")
    const training = await axios.put(`https://localhost:8080/admin/EditTrainingDetailsAdmin/${id}`,data);
    return training;
}
export default {getAllTrainingDetails,saveDetails,trainingDetails}

