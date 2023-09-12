import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
const TrainingForm = ({ addTraining }) => {
  const [formData, setFormData] = useState({
    title: '',
    skillType: '',
    skillCategory: '',
    startDateAndTime: '',
    endDateAndTime: '',
    description: '',
  });
 

  const [trainings, setTrainings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTrainings = JSON.parse(localStorage.getItem('trainings')) || [];
    setTrainings(storedTrainings);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTraining = {
      id: Date.now(),
      ...formData,
    };
    navigate('/trainingtable');
    const updatedTrainings = [...trainings, newTraining];
    setTrainings(updatedTrainings);
    localStorage.setItem('trainings', JSON.stringify(updatedTrainings));
    setFormData({
      title: '',
      skillType: '',
      skillCategory: '',
      startDateAndTime: '',
      endDateAndTime: '',
      description: '',
    });
    function addTraining (newTraining) {
        
        const updatedTrainings = [...trainings, newTraining];
        setTrainings(updatedTrainings);
        localStorage.setItem('trainings', JSON.stringify(updatedTrainings));
        
      };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeenddate = (event) => {
    const { name, value } = event.target;

    // Check if the input is for start date or end date
    if (name === 'startDateAndTime') {
      // Update the start date value
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (name === 'endDateAndTime') {
      // Update the end date value
      setFormData({
        ...formData,
        [name]: value,
      });

      // Check if the end date is greater than the start date
      const startDate = new Date(formData.startDateAndTime);
      const endDate = new Date(value);

      if (endDate <= startDate) {
        // Handle the validation error here (e.g., display an error message)
        alert('End date must be greater than the start date.');
      }
    }
  };
  const handleChangestartdate = (event) => {
    const { name, value } = event.target;
    
    // Check if the entered date is at least 7 days from the current date
    const currentDate = new Date();
    const selectedDate = new Date(value);

    // Calculate the minimum allowed date (7 days from now)
    const minDate = new Date();
    minDate.setDate(currentDate.getDate() + 7);

    if (selectedDate < minDate) {
      // Handle the validation error here (e.g., display an error message)
      alert('Start date must be at least 7 days from now.');
    } else {
      // Update the form data if the validation passes
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  return (
    <Container maxWidth="md">
    <Typography variant="h4" gutterBottom>
      Add New Training
    </Typography>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel>Skill Type</InputLabel>
            <Select
              name="skillType"
              value={formData.skillType}
              onChange={handleChange}
            >
              <MenuItem value="">Select Skill Type</MenuItem>
              <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
              <MenuItem value="Data Engineer">Data Engineer</MenuItem>
              <MenuItem value="Cloud Manager">Cloud Manager</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel>Skill Category</InputLabel>
            <Select 
              name="skillCategory"
              value={formData.skillCategory}
              onChange={handleChange}
            >
              <MenuItem value="">Select Skill category</MenuItem>
              <MenuItem value="Physical">Physical</MenuItem>
              <MenuItem value="virtual">virtual</MenuItem>
              <MenuItem value="Azure">Azure </MenuItem>
              <MenuItem value="Frontend">Frontend</MenuItem>
              <MenuItem value="Backend">Backend</MenuItem>

            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           fullWidth
           label="Start Date and Time"
           type="datetime-local"
           name="startDateAndTime"
           value={formData.startDateAndTime}
           onChange={handleChangestartdate}
           required
           InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="End Date and Time"
            type="datetime-local"
            name="endDateAndTime"
            value={formData.endDateAndTime}
            onChange={handleChangeenddate}
            required
            InputProps={{ placeholder: '' }}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Max count of registrations"
            type="number"
            name="count"
            value={formData.count}
            onChange={handleChange}
            required
            // disabled
            InputProps={{ placeholder: '' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth required>
            <InputLabel>Mode</InputLabel>
            <Select 
              name="mode"
              value={formData.mode}
              onChange={handleChange}
            >
              <MenuItem value="">Select Model of training</MenuItem>
              <MenuItem value="Python">Physical</MenuItem>
              <MenuItem value="virtual">virtual</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="primary">
        Add Training
      </Button>
    </form>
  </Container>
    
  );
};

export default TrainingForm;