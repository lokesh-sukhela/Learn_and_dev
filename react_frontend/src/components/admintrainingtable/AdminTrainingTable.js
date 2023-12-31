import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Paper, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import TrainingForm from './Trainingforms';
import { Link } from 'react-router-dom';
import './AdminTrainingTable.css';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import SideNav from '../side_nav/side_nav'
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AdminService from '../../services/AdminService';
import ReactPaginate from 'react-paginate';


const TrainingTable = () => {
  const [trainings, setTrainings] = useState([]);
  // const [training, setTraining] = useState('');
  const [isTrainingFormOpen, setTrainingFormOpen] = useState(false);
  const [isTableOpen, setTableOpen] = useState(true);
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // Pagination
  const itemsPerPage = 5; // Pagination
  const [selectedRow, setSelectedRow] = useState(null);

  const[secondform,Setsecondform]=useState(false)

// const navigate=useNavigate();


  const[gettingAll,setGettingall]=useState([]);

  // const [training, setTraining] = useState('');
  // const [skill, setskill] = useState('');
  // const [skillcat, setskillcat] = useState('');
  const handleCloseTrainingForm = () => {
    setTrainingFormOpen(false);
  };




  const handleSubmitTrainingForm = (newTraining) => {
    // Handle form submission here, e.g., add the new training to the list
    // and close the modal
    addTraining(newTraining);
    handleCloseTrainingForm(newTraining);
  };
  const toggleTable = () => {
    setTableOpen(!isTableOpen);
  };

  useEffect(() => {
   
    getAllDetails()
  }, []);


  const getAllDetails=()=>{
    
    AdminService.getAllTrainingDetails()
    .then((data)=>{
      console.log(data.data.alldata);
      setGettingall(data.data.alldata);
      
    }).catch(err=>{
      console.log(err)
    })
  }

const editUser=(user)=>{
 console.log(user)
  AdminService.updateDetails(user).then((data)=>{

  })
  setIsEditing(false); // Set isEditing to false
  setIsAddingNewTraining(true); // Set isAddingNewTraining to true
  setTrainingFormOpen(true); 

  
}
const deleteUser=(id)=>{

  AdminService.deletedetails(id).then((data)=>{
    getAllDetails();
  }).catch(err=>{
alert("Not deleted",err);
  })
}


  function addTraining(newTraining) {
    const updatedTrainings = [...trainings, newTraining];
    setTrainings(updatedTrainings);
    localStorage.setItem('trainings', JSON.stringify(updatedTrainings));
  };

  const [searchTerm, setSearchTerm] = useState(''); //search
  const [filterCategory, setFilterCategory] = useState('All'); //filtering
  const [isAddingNewTraining, setIsAddingNewTraining] = useState(false); //new pop will come
  const [isEditing, setIsEditing] = useState(false); // when we click edit new pop form opens
  const [editedTraining, setEditedTraining] = useState(null); //saving the details after editing

  const [isSideNavOpen, setIsSideNavOpen] = useState(false); //responsive navbar






  const handleOpenTrainingForm = () => {
    setIsEditing(false); // Set isEditing to false
    setIsAddingNewTraining(true); // Set isAddingNewTraining to true
    setTrainingFormOpen(true); // Open the popup form
  };

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleEdit = (id) => {
    // Find the training with the given id
    const trainingToEdit = trainings.find((training) => training.id === id);

    // Set the selected training for editing
    setSelectedTraining(trainingToEdit);

    // Open the popup form and pass the editing props
    setTrainingFormOpen(true);
    setIsEditing(true);
    setEditedTraining(trainingToEdit);
  };

  const handleSaveTraining = (editedTraining) => {
    // Find the index of the edited training in the trainings array
    const index = trainings.findIndex((training) => training.id === editedTraining.id);

    // Create a new array with the edited training
    const updatedTrainings = [...trainings];
    updatedTrainings[index] = editedTraining;

    // Update the state and local storage
    setTrainings(updatedTrainings);
    localStorage.setItem('trainings', JSON.stringify(updatedTrainings));

    // Clear the selected training
    setSelectedTraining(null);
  };


  //From Delete Button
  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log(`Delete training with ID ${id}`);

    AdminService.deletedetails(id).then(AdminService.getAllTrainingDetails()).catch(err => {
      console.log(err);
    })

    const updatedTrainings = trainings.filter((training) => training.id !== id);
    setTrainings(updatedTrainings);
  };

  const filteredTrainings = trainings.filter((training) => {
    if (filterCategory === 'All') {
      return true;
    }
    return training.skillCategory.toLowerCase() === filterCategory.toLowerCase();
  });

  const filteredTrainingsWithSearch = filteredTrainings.filter((training) => {
    const searchFields = [
      training.title,
      training.skillType,
      training.skillCategory,
      training.description,
    ];

    return searchFields.some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  // const[gettingAll,setGettingall]=useState([]);


    

    
  // Pagination
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedTrainings = gettingAll.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const pageCount = Math.ceil(gettingAll.length / itemsPerPage);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    setSelectedRow(null); // Reset selected row when changing pages
  };

  // Function to select the next row
  const selectNextRow = () => {
    const currentIndex = displayedTrainings.findIndex(
      (training) => training.id === selectedRow
    );
    if (currentIndex < itemsPerPage - 1) {
      setSelectedRow(displayedTrainings[currentIndex + 1].id);
    }
      
};

return (
  <Grid container spacing={3}>
    <div className="large-screen-nav">
      <SideNav />
    </div>
    <div className="small-screen-nav">
      <IconButton
        color="inherit"
        aria-label="menu"
        className="hamburger-icon"
        onClick={toggleSideNav}
      >
        <MenuIcon />
      </IconButton>
    </div>

      {isSideNavOpen && (
        <div className="side-nav">
          <SideNav /> {/* Place your SideNav component here */}
        </div>
      )}

    <h1 className="lbheading">
      <strong>Learning and Development</strong>
    </h1>
    <Grid item xs={12} className="headers">
      <Paper className="paper-container">
        <div className="paper-content">
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            className="responsive-search"
          />
        </div>
        <div className="paper-content">
          <FormControl className="form-control responsive-select">
            <Select
              id="categoryFilter"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="pandas">pandas</MenuItem>
              <MenuItem value="azure">azure</MenuItem>
              <MenuItem value="sql">sql</MenuItem>
              <MenuItem value="html">html</MenuItem>
              <MenuItem value="css">css</MenuItem>
              <MenuItem value="synapse">synapse</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="paper-content">
          <Button
            variant="outlined"
            id="register_button_admin"
            className="responsive-button"
            startIcon={<AddIcon />}
            onClick={handleOpenTrainingForm}
          >
            Add New Training
          </Button>
        </div>
      </Paper>
    </Grid>

    <Grid item xs={12}>
      <Paper className="content">
        <div className="table-responsive">
          <Table className="table-responsive-sm">
            <thead className="tableheadings">
              <tr>
                <td className="tf">Training Title</td>
                <td className="tf">Skill Type</td>
                <td className="tf">Skill Category</td>
                <td className="tf">Start Date and Time</td>
                <td className="tf">End Date and Time</td>
                <td className="tf">Participation limit</td>
                <td className="tf">Number of Registrations</td>
                <td className="tf">Mode</td>
                <td className="tf">Location/Meeting Link</td>
                <td className="tf">Description</td>
                <td className="tf">Edit</td>
                <td className="tf">Delete</td>
              </tr>
            </thead>
            <tbody>
              {displayedTrainings.map((training) => (
                <tr
                key={training.id}
                className={selectedRow === training.id ? 'selected-row' : ''}
                onClick={() => setSelectedRow(training.id)}
              >
                  <td className="td">{training.TrainingTitle}</td>
                  <td className="td">{training.SkillTitle}</td>
                  <td className="td">{training.SkillCategory}</td>
                  <td className="td">{training.StartDate}</td>
                  <td className="td">{training.EndDate}</td>
                  <td className="td">{training.ParticipationLimit}</td>
                  <td className="td">{training.PeopleRegistered}</td>
                  <td className="td">{training.TrainingMode}</td>
                  <td className="td">{training.MeetingLink}</td>
                  <td className="td">{training.Description}</td>
                  
                  <td>
                    <Button
                      id="button12"
                      variant="outlined"
                      startIcon={<EditIcon />}
                      onClick={() => handleEdit(training.id)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      id="delete_button_admin"
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(training.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          
        </div>
        <Grid item xs={12}>
        <div className="pagination-container">
          <ReactPaginate
            previousLabel={<span className="previous"><b>&lt;</b></span>}
            nextLabel={<span className="next"><b>&gt;</b></span>}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </Grid>
      </Paper>
      
    </Grid>
    

    <Dialog open={isTrainingFormOpen} onClose={handleCloseTrainingForm}>
      <Button onClick={handleCloseTrainingForm} style={{ color: 'red' }} className="closebuttonpop">
        X
      </Button>

        <DialogContent>
          {/* Render the TrainingForm component with isEditing and editedTraining props */}
          <TrainingForm
            isEditing={isEditing}
            editedTraining={editedTraining}
            isAddingNewTraining={isAddingNewTraining} // Pass isAddingNewTraining as a prop
            onSave={gettingAll} //=> {
            //   // Handle form submission here, e.g., add the new training to the list
            //   // or update the edited training, and close the modal
             
            //     addTraining(training);
              
            //   handleCloseTrainingForm();
            // }}
            onCancel={handleCloseTrainingForm}


          />
        </DialogContent>
        <DialogActions>


        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default TrainingTable;