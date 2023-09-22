import React, { useState } from 'react'

import { useEffect } from 'react';

import AdminService from '../../services/AdminService';
import "./Edittraining.css"
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-toastify';
 

function EditTraining() {

    const { id } = useParams();

    const [iddata,setIdData]=useState([]);

    const [title,setTitle]=useState("");

    const [skilltitle,setskilltitle]=useState("");

    const [skillcategory,setskillcategory]=useState("");

 

    const [Description,setDescription]=useState("");

    const [startdate,setstartdate]=useState("");


    const [enddate,setenddate]=useState("");
    const [limit,setlimit]=useState("");
    const [mode,setMode]=useState("");
    const [LinkOrLocation,setLinkOrLocation] = useState("")
    const navigate=useNavigate();

  useEffect(()=>{

    getById();

  },[])

 

  const getById=()=>{

   

AdminService.getTrainingById(id).then((data)=>{

    console.log(data.data.iddata);

    setIdData(data.data.iddata)

   setTitle(data.data.iddata.TrainingTitle)
setskilltitle(data.data.iddata.SkillTitle);
setskillcategory(data.data.iddata.SkillCategory)
setstartdate(data.data.iddata.StartDate)
setenddate(data.data.iddata.EndDate)
setlimit(data.data.iddata.ParticipationLimit)
setDescription(data.data.iddata.Description)
setMode(data.data.iddata.TrainingMode)


    }).catch(err=>{

      console.log("error");

    })

 }

 const handlenewtraining=()=>{
    navigate("/adminTrainingTable")
 }

 const UpdateDetails=(id)=>{
    const updatedData = {
        TrainingTitle: title,
        SkillTitle: skilltitle,
        SkillCategory: skillcategory,
        StartDate: startdate,
        EndDate: enddate,
        ParticipationLimit: limit,
        Description: Description,
        TrainingMode: mode,
       
      };
    AdminService.updateDetails(id,updatedData).then((data)=>{
        console.log(data);
        toast.success("Training Updated",{autoClose:500})
        setTimeout(() => {
            navigate("/adminTrainingTable"); 
          }, 500);
    }).catch(err=>{
        console.log(err)
    })
 }

    return (









<>

<Container className='box'>
    
      <Form>
      <h4>UPDATE TRAINING DETAILS</h4>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label id="label">Training Title</Form.Label>
              <Form.Control
              id="color"
                type="text"
                placeholder="Training Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </Form.Group>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="title2">
              <Form.Label id="label">Skill Title</Form.Label>
              <Form.Control
              id="color"
                type="text"
                placeholder="Skill Title"
                value={skilltitle}
                onChange={(e)=>setskilltitle(e.target.value)}
            
              />
            </Form.Group>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="title2">
              <Form.Label id="label">Skill category</Form.Label>
              <Form.Control
              id="color"
                type="text"
                placeholder="Skill Category"
                value={skillcategory}
                onChange={(e)=>setskillcategory(e.target.value)}
            
              />
            </Form.Group>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="title2">
              <Form.Label id="label">StartDate</Form.Label>
              <Form.Control
              id="color"
                type="datetime-local"
                placeholder="startdate"
                value={startdate}
                onChange={(e)=>setstartdate(e.target.value)}
            
              />
            </Form.Group>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group >
              <Form.Label id="label">EndDate</Form.Label>
              <Form.Control
              id="color"
                type="datetime-local"
                placeholder="Description"
                value={enddate}
                onChange={(e)=>setenddate(e.target.value)}
            
              />
            </Form.Group>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="title2">
              <Form.Label id="label">Participation Limit</Form.Label>
              <Form.Control
              id="color"
                type="number"
                placeholder="Participation Limit"
                value={limit}
                onChange={(e)=>setlimit(e.target.value)}
            
              />
            </Form.Group>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="title2">
              <Form.Label id="label">Description About Project</Form.Label>
              <Form.Control
              id="color"
              as="textarea" // Change this line to use a textarea
              rows={3}  
                placeholder="Description"
                value={Description}
                onChange={(e)=>setDescription(e.target.value)}
            
              />
            </Form.Group>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="title2">
              <Form.Label id="label">Training Mode</Form.Label>
              <Form.Control
              id="color"
                type="text"
                placeholder="Training Mode"
                value={mode}
                onChange={(e)=>setMode(e.target.value)}        
              />
            </Form.Group>

          </Col>
        </Row>

        {/* Add more rows for additional fields if needed */}
        <br></br>
        <Row>
          <Col>
            <Button id="button" onClick={()=>UpdateDetails(id)}>
              Update
            </Button>
          </Col>
          <Col>
            <Button id="createbutton" onClick={handlenewtraining}>
              <AddIcon/>
            </Button>
          </Col>
        </Row>
        <br></br>
      </Form>
    </Container>
    </>
     

    );

  }

 

export default EditTraining