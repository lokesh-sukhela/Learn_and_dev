import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Paper, IconButton } from '@mui/material';
import { PersonAdd as PersonAddIcon } from '@mui/icons-material';
import './UserTrainingTable.css';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import SideNav from '../side_nav/side_nav';
import MenuIcon from '@mui/icons-material/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactPaginate from 'react-paginate';
import AdminService from '../../services/AdminService';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { saveTrainingDetails } from '../../services/userService';

const UserTrainingTable = () => {
  const [trainings, setTrainings] = useState([]);
  const [isTableOpen, setTableOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const [selectedRow, setSelectedRow] = useState(null);
  const [ getAllTrainingsData,setGetAllTrainingsData]= useState([])
  const[buttondisable,setButtonDisabled]=useState(false);
  const gettingAll = trainings; // Replace this with your actual data source

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedTrainings = getAllTrainingsData.slice(startIndex, endIndex);

  const pageCount = Math.ceil(getAllTrainingsData.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    setSelectedRow(null);
  };
   useEffect(()=>{
        GetAllDetails()
    },[])

    const GetAllDetails = ()=>{
        AdminService.getAllTrainingDetails().
        then((d)=>{
            console.log(d.data.alldata)
            setGetAllTrainingsData(d.data.alldata)
        }).catch(err=>{
            console.log(err)
          })
    }


    const cookies = new Cookies()
    const Email=cookies.get("Email");
    console.log(Email);


    const TrainingRegistration= (Id,Email)=>{
      saveTrainingDetails(Id,Email).then((data)=>{
        if(data.data.message === "Training Registered"){
            toast.success(data.data.message)
            if(data.data.button === true){
                console.log("Button is Disabled Or not: ",data.data.button )
                setButtonDisabled(true)
            }
        }
        }).catch(err=>{
            console.log(err)
        })
       
        
    }

    const filteredTrainings = trainings.filter((training) => {
        if (filterCategory === 'All') {
            return true;
        }
        return training.skillCategory.toLowerCase() === filterCategory.toLowerCase();
    });

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };



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
          <MenuIcon style={{ fontSize: '2rem' }} />
        </IconButton>
      </div>

      {isSideNavOpen && (
        <div className="side-nav">
          <SideNav />
        </div>
      )}

      <h1 className="lbheading"><strong>Learning and Development</strong></h1>
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
              <InputLabel id="categoryFilterLabel">Category Filter</InputLabel>
              <Select
                labelId="categoryFilterLabel"
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
                    <TableCell className="tf">Mode</TableCell>
                    <TableCell className="tf">Location/Meeting Link</TableCell>
                    <TableCell className="tf">Register</TableCell>
                  </TableRow>
                </TableHead>
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
                  <td className="td">{training.Description}</td>
                  <td className="td">{training.TrainingMode}</td>
                  <td className="td">{training.MeetingLink}</td>
                      <td>
                        <Button
                          id='register_button_user'
                          startIcon={<PersonAddIcon />}
                          variant="outlined"
                          onClick={()=>{TrainingRegistration(training.TrainingId,Email)}}
                        >
                          Register
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
      )}
    </Grid>
  );
};

export default UserTrainingTable;