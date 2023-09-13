import React from "react";
import AdminService from "../../services/AdminService";
import { toast } from 'react-toastify';

function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    console.log(state);
    let data= AdminService.saveDetails(state).then((d)=>{
<<<<<<< HEAD
      console.log("Frontend",d)
=======
      
 
>>>>>>> 497f7052bac790eb399a063d90a0f2578b38cd8d
      if (d.data.message==="User added"){
        toast.success(d.data.message);
      }
      if (d.data.message=== "User already exists!"){
        toast.error(d.data.message);
      }
      if (d.data.message=== "All fields are mandatory ; Please fill it."){
        toast.warning(d.data.message);
      }
<<<<<<< HEAD
      // alert(d.data.message)
=======

>>>>>>> 497f7052bac790eb399a063d90a0f2578b38cd8d
    })
    .catch(err=>{
      toast.error("User already Existed!")
    })




    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="title">Create Account</h1>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
          className="name-input-feild"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          className="email-input-feild"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          className="password-input-feild"
        />
        <button type = 'submit' className = 'sign-up-button'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
