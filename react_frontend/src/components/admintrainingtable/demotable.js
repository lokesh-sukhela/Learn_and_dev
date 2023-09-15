import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import AdminService from '../../services/AdminService';


const Table=()=>{

    const[gettingAll,setGettingall]=useState([]);


    useEffect(() => {
        // const storedTrainings = JSON.parse(localStorage.getItem('trainings')) || [];
        // setTrainings(storedTrainings);
        getAllDetails();
      }, []);
    
    
    const getAllDetails=()=>{
    
      AdminService.getAllTrainingDetails().then((data)=>{
        console.log(data.data.alldata);
        setGettingall(data.data.alldata);
        
      }).catch(err=>{
        console.log(err)
      })
    }
    return (
        <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Dashboard</Nav.Link>
              <Nav.Link href="#">Settings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <div>
    
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
            {gettingAll.map((training)=>{
             return (
                <tr key={training.id}>
                <td>{training.TrainingTitle}</td>
                <td>Data 1</td>
                <td>Data 2</td>
                <button>Click</button>
              </tr>
             )
            })}
          
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </div>

        </>
      );
    }


export default Table;