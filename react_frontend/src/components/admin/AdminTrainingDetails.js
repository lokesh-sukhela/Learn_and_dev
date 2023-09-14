import React from 'react';
import { Container, Row, Col, ListGroup, Table, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Form } from 'react-bootstrap';
import {
  TextField,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Sidebar = () => {
  const listItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
  ];

  // Replace this with your table data
  const [tableData, setTableData] = useState([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Bob Johnson', age: 35 },
    // Add more rows as needed
  ]);

  const [showModal, setShowModal] = useState(false);
  const [training, setTraining] = useState('');
  const [skill, setskill] = useState('');
  const [skillcat, setskillcat] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [formData, setFormData] = useState({
    startDateAndTime: '',
    endDateAndTime: '',
  });

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
  

  const trainings = [
    {
      trainingname: 'python',
      value: 'py',
      skillcategory: ['Critical Thinking', 'Problem Solving', 'Design'],
      skilltitle: ['pandas', 'numpy', 'app development', 'DataScience'],
    },
    {
      trainingname: 'java',
      value: 'java',
      skillcategory: ['Problem Solving', 'Development'],
      skilltitle: ['Enterprise application', 'mobile app', 'games', 'website development'],
    },
  ];

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleDeleteRow = (id) => {
    // Find the index of the row with the given ID
    const rowIndex = tableData.findIndex((row) => row.id === id);

    if (rowIndex !== -1) {
      // Create a copy of the tableData array without the deleted row
      const updatedTableData = [...tableData];
      updatedTableData.splice(rowIndex, 1); // Remove the row at rowIndex

      // Update the tableData state with the updated array
      setTableData(updatedTableData);
    }
  };

  return (
    <Container fluid>
      <Row className=''>
        <Col md={2} className=''>
          <div id='list-div'>
            <ListGroup id='list'>
              <Link to='/'>Dashboard</Link>
              <br></br>
              <Link to='/'>TimeSheet</Link>
              <br></br>
              <Link to='/'>Projects</Link>
              <br></br>
              <Link to='/'>Leave</Link>
              <br></br>
              <Link to='/'>Work From Home</Link>
              <br></br>
              <Link to='/'>Approvals</Link>
              <br></br>
              <Link to='/'>Survey</Link>
              <br></br>
              <Link to='/'>Service Desk</Link>
              <br></br>
              <Link to='/'>Forms</Link>
              <br></br>
              <Link to='/'>Travel</Link>
              <br></br>
              <Link to='/'>Expenses</Link>
              <br></br>
              <Link to='/'>Settings</Link>
              <br></br>
              <Link to='/'>Control Panel</Link>
              <br></br>
              <Link to='/'>Resourcing</Link>
              <br></br>
              <Link to='/'>Access Control</Link>
              <br></br>
              <Link to='/'>L&D</Link>
            </ListGroup>
          </div>
        </Col>
        <Col>
          <h2 class='page-title'>Learning and Development</h2>
          <div class='filter-and-create-training-container'>
            <div className='filter'>
              <select id='filter-dropdown'>
                <option>a</option>
                <option>b</option>
                <option>c</option>
              </select>
              <div class='filter-button'>
                <button>Apply Filter</button>
              </div>{' '}
              &nbsp;
              <div class='remove-filter-button'>
                <button>Remove Filter</button>
              </div>
              <div className='search-container'>
                <SearchIcon className='search-icon'/> {/* Search icon */}
                <input type='search' className='search-in-table' placeholder='Search for Trainings' />
              </div>
            </div>
            <div class='training-creation-button-container'>
              <Button variant='primary' onClick={handleOpenModal} className='create-training-button'>
                <span>+</span> Add Training
              </Button>
            </div>
          </div>
          {showModal && (
            <>
              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Training Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Select
                      aria-label='Default select example'
                      value={training}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setTraining(e.target.value);
                      }}
                    >
                      {trainings.map((item, index) => {
                        return <option value={index}>{item.trainingname}</option>;
                      })}
                    </Form.Select>
                    <br></br>
                    <Form.Select
                      aria-label='Default select example'
                      value={skill}
                      onChange={(e) => {
                        setskill(e.target.value);
                      }}
                    >
                      {training !== '' &&
                        trainings[training].skilltitle.map((item, index) => {
                          return <option value={index}>{item}</option>;
                        })}
                    </Form.Select>
                    <br></br>

                    <Form.Select
                      aria-label='Default select example'
                      value={skillcat}
                      onChange={(e) => {
                        setskillcat(e.target.value);
                      }}
                    >
                      {training !== '' &&
                        trainings[training].skillcategory.map((item, index) => {
                          return <option value={index}>{item}</option>;
                        })}
                    </Form.Select>
                    <br></br>
                  </Form>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label='Start Date and Time'
                      type='datetime-local'
                      name='startDateAndTime'
                      value={formData.startDateAndTime}
                      onChange={handleChangestartdate}
                      required
                    />
                  </Grid>
                  <br></br>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label='End Date and Time'
                      type='datetime-local'
                      name='endDateAndTime'
                      value={formData.endDateAndTime}
                      onChange={handleChangeenddate}
                      required
                      InputProps={{ placeholder: '' }}
                    />
                  </Grid>
                  <br></br>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label='Description'
                      multiline
                      rows={4}
                      name='description'
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />
                  </Grid>

                  <Button type='submit' variant='primary'>
                    Add Training
                  </Button>
                </Modal.Body>
              </Modal>
            </>
          )}
          <Table responsive className='training-table'>
            <thead className='table-header'>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td className='training-manipulation'>
                    <button className='training-edit-button'>Edit</button>
                    <button className='training-delete-button' onClick={() => handleDeleteRow(row.id)}>Delete</button>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
