import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Paper, IconButton} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
// import TrainingForm from './Trainingform';
import { Link } from 'react-router-dom';
import './AdminTrainingTable.css';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import SideNav from '../side_nav/side_nav'
import Container from '@mui/material/Container'; 
import MenuIcon from '@mui/icons-material/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const TrainingTable = () => {
  const [trainings, setTrainings] = useState([]);

  const [isTableOpen, setTableOpen] = useState(true);
  const toggleTable = () => {
    setTableOpen(!isTableOpen);
  };

  useEffect(() => {
    const storedTrainings = JSON.parse(localStorage.getItem('trainings')) || [];
    setTrainings(storedTrainings);
  }, []);

  function addTraining(newTraining) {
    const updatedTrainings = [...trainings, newTraining];
    setTrainings(updatedTrainings);
    localStorage.setItem('trainings', JSON.stringify(updatedTrainings));
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleEdit = (id) => {
    // Find the training with the given id
    const trainingToEdit = trainings.find((training) => training.id === id);
  
    // Set the selected training for editing
    setSelectedTraining(trainingToEdit);
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
  
  

  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log(`Delete training with ID ${id}`);
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

  return (
    

    <Grid container spacing={3}>
      {/* Large screen navigation */}
      <div className="large-screen-nav">
        <SideNav />
      </div>

      {/* Hamburger menu for small screens */}
      <div className="small-screen-nav">
        <IconButton
          color="inherit"
          aria-label="menu"
          className="hamburger-icon"
          onClick={toggleSideNav}
        >
          <MenuIcon style={{ fontSize: '2rem' }} />
        </IconButton>
      </div>

      {isSideNavOpen && (
        <div className="side-nav">
          <SideNav /> {/* Place your SideNav component here */}
        </div>
      )}

      <h1 className="lbheading">LEARNING AND DEVELOPMENT</h1>
      <Grid item xs={12} className="headers">
        <Paper className="paper-container">
          <div className="paper-content">
            <Link to="/TrainingForm">
              <Button
                variant="outlined"
                id="register_button_admin"
                className="responsive-button"
              >
                Add New Training
              </Button>
            </Link>
          </div>
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
              <InputLabel htmlFor="categoryFilter" className="label-filter">
                Filter by Category:
              </InputLabel>
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
        </Paper>
      </Grid>
      
       {isTableOpen && (
      <Grid item xs={12}>
        <Paper className="content">
          <div className="table-responsive">
            <Table className="table-responsive-sm">
              <TableHead>
                <TableRow>
                  <TableCell className="tf">Training Title</TableCell>
                  <TableCell className="tf">Skill Type</TableCell>
                  <TableCell className="tf">Skill Category</TableCell>
                  <TableCell className="tf">Start Date and Time</TableCell>
                  <TableCell className="tf">End Date and Time</TableCell>
                  <TableCell className="tf">Description</TableCell>
                  <TableCell className="tf">Maximum Registration count</TableCell>
                  <TableCell className="tf">Mode</TableCell>
                  <TableCell className="tf"></TableCell>
                  <TableCell className="tf"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {filteredTrainingsWithSearch.map((training) => (
                <TableRow key={training.id}>
                  <TableCell className='td'>{training.title}</TableCell>
                  <TableCell className='td'>{training.skillType}</TableCell>
                  <TableCell className='td'>{training.skillCategory}</TableCell>
                  <TableCell className='td'>{training.startDateAndTime}</TableCell>
                  <TableCell className='td'>{training.endDateAndTime}</TableCell>
                  <TableCell className='td'>{training.description}</TableCell>
                  <TableCell className='td'>{training.count}</TableCell>
                  <TableCell className='td'>{training.Mode}</TableCell>
                  <TableCell>
                    
                    <Button
                      id="button12"
                      variant="outlined"
                      startIcon={<EditIcon />}
                      onClick={() => handleEdit(training.id)}
                    >
                      Edit
                    </Button>
                    
                  </TableCell>
                   <TableCell>
                    <Button
                      id='delete_button_admin'
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(training.id)}
                    >
                      Delete
                    </Button>
                    
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>
          </div>
        </Paper>
      </Grid>
       )}
      {/*{selectedTraining && (
  <TrainingForm
    training={selectedTraining}
    onSave={(editedTraining) => handleSaveTraining(editedTraining)}
    onCancel={() => setSelectedTraining(null)}
  />
  
      )}*/}
    </Grid>
  );
};

 
export default TrainingTable;