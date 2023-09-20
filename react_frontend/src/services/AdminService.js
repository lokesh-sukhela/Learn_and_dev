import axios from 'axios'


const getAllTrainingDetails = async ()=> {
    const Tdetails = await axios.get(`${process.env.REACT_APP_PORTSERVER}/admin`)
    return Tdetails
}


const trainingDetails = async (data) => {
    console.log("called api")
    const training = await axios.post(`${process.env.REACT_APP_PORTSERVER}/admin/TrainingDetailsAdmin`,data);
    return training;
}

const updateDetails=async(id)=>{
    console.log("called api")
    const training = await axios.patch(`${process.env.REACT_APP_PORTSERVER}/admin/EditTrainingDetailsAdmin/${id}`);
    return training;
}

const deletedetails=async(id)=>{
    const training = await axios.delete(`${process.env.REACT_APP_PORTSERVER}/admin/DeleteTrainingDetailsAdmin/${id}`);
    return training;
}






export default {getAllTrainingDetails,trainingDetails,updateDetails,deletedetails}

