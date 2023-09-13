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
      console.log("Fronednd",d)
 
      if (d.data.message==="User added"){

        toast.success(d.data.message);
      }
      if (d.data.message=== "User already exists!"){
        toast.error(d.data.message);
      }
      if (d.data.message=== "All fields are mandatory ; Please fill it."){
        toast.warning(d.data.message);
      }
      // alert(d.data.message)


    })
    .catch(err=>{
      console.log("Errorror");
      // alert("User Existed")
      toast.error("User already Existed!")
    })
    // .
    // then(data=>{
    //   console.log(data);
    // })
console.log(data)
    // const { name, email, password } = state;
    // alert(
    //   `You are sign up with name: ${name} email: ${email} and password: ${password}`
    // );

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
