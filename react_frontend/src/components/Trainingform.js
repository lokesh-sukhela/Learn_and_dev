import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
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
import { ForkRight } from '@mui/icons-material';

const TrainingForm = ({ isEditing, editedTraining, onSave, onCancel }) => {
  const [formData, setFormData] = useState(() => {
    // Initialize with editedTraining data if editing, or with default values if not
    return isEditing
      ? editedTraining
      : {
          title: '',
          skillType: '',
          skillCategory: '',
          startDateAndTime: '',
          endDateAndTime: '',
          description: '',
          count: 0, // Add any other default values you may have
          mode: '', // Add any other default values you may have
          Link: 'Chennai', // Add any other default values you may have
        };
  });

  const [isVirtualSelected, setIsVirtualSelected] = useState(
    // Initialize isVirtualSelected based on formData.mode when editing
    isEditing && formData.mode === 'virtual'
  );

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTraining = {
      id: isEditing ? formData.id : Date.now(), // Use existing ID if editing, generate a new one if not
      ...formData,
    };
    navigate('/trainingtable');
    onSave(newTraining);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mode') {
      setIsVirtualSelected(value === 'virtual');
    }
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

  // ... rest of the component remains the same



  const handleSave = () => {
    if (isEditing) {
      // Update the existing training
      const updatedTraining = { ...editedTraining, /* update fields from form inputs */ };
      onSave(updatedTraining);
    } else {
      // Create a new training
      const newTraining = { /* create a new training object from form inputs */ };
      onSave(newTraining);
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
        {isEditing ? 'Edit Training' : 'Add New Training'}
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <form onSubmit={handleSubmit} >
          <Grid container spacing={2} >
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
                  <MenuItem value="Python">Python</MenuItem>
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
              <FormControl fullWidth required className='trainingmode'>
                <InputLabel>Mode</InputLabel>
                <Select
                  name="mode"
                  value={formData.mode}
                  onChange={(e) => {
                    handleChange(e);
                    // setIsVirtualSelected(e.target.value === 'virtual');
                  }}
                >
                  <MenuItem value="Select Mode of training"></MenuItem>
                  <MenuItem value="Physical">Physical</MenuItem>
                  <MenuItem value="virtual">Virtual</MenuItem>
                </Select>
              </FormControl>

              {isVirtualSelected && (
                <FormControl fullWidth required>

                  <TextField
                    name="meetingLink"
                    label="Meeting Link"
                    value={formData.meetingLink}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: Boolean(formData.meetingLink),
                    }}
                  />
                </FormControl>
              )}

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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className='addtrainingbutton'
            style={{
              marginTop: '16px',
              marginLeft: "71.6%"// Add some space between the form and the button
            }}
          >
            Add Training
          </Button>
        </form>
      </div>
    </Container>

  );
};

export default TrainingForm;