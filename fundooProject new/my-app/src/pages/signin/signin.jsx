import React from 'react';
import './signin.css';
import TextField from '@mui/material/TextField';
import { signinApi } from '../../services/userservices'


const emailRegex = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function SignIn() {
  const [signInObj, setsignInObj] = React.useState({ email: "", password: "" })
  const [rejexObj, setRejexObj] = React.useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })

  const takeUsername = (event) => {


    console.log(event.target.value);
    setsignInObj(prevState => ({
      ...prevState,
      email: event.target.value,
    }))

    console.log(signInObj);

    if (!signInObj.email.match(emailRegex)) {
      setRejexObj(prevState => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "Enter correct email"
      }))
    }
    else if (signInObj.email.match(emailRegex)) {
      setRejexObj(prevState => ({
        ...prevState,
        emailBorder: false,
        emailHelper: ""
      }))
    }
  }

  const takePassword = (event) => {

    setsignInObj(prevState => ({
      ...prevState,
      password: event.target.value
    }))
    if (signInObj.password.match(passwordRegex)) {
      console.log("take password is ok");
      setRejexObj(prevState => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: ""
      }))
    }
    else if (!signInObj.password.match(passwordRegex)) {
      console.log("take password");
      setRejexObj(prevState => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "follow password norm"
      }))
    }

  }

  const submit = (e) => {
    let emailTest = emailRegex.test(signInObj.email)
    let passwordTest = passwordRegex.test(signInObj.password)

    e.preventDefault();
    if (signInObj.email.length == 0) {
      setRejexObj(prevState => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "email is required"
      }))
    }


    if (signInObj.password.length == 0) {
      setRejexObj(prevState => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "password is required"
      }))
    }


    if (emailTest === true && passwordTest === true) {

      console.log(signInObj);
      signinApi(signInObj).then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.id)
        // navigate('/dashboard')
      }).catch((error) => { console.log(error) })


    }


  }












  return (
    <div>

      <form className="signinform" >
        <div>
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            className='signinmargin-text-left'></img>
        </div>
        <span className='signinhead-text'>Sign in</span>
        <h4 className='signinmargin-text-left'>Use your Gooogle Account</h4>


        <TextField className='signinsearchbox signinmargin-text-left' id="outlined-colored" size='small'

          label="Enter Email Or PhoneNumber"
          error={rejexObj.emailBorder}
          helperText={rejexObj.emailHelper}
          variant='outlined'
          onChange={takeUsername}


        />








        <h4 id='signintext-forgotemail' className='signintext-color signinmargin-text-left'>Forget email? </h4>
        <p className='signinmargin-text-left'>Not your computer? Use a Private Window to sign in <span id="signintext-LearnMore" className='text-color margin-text-left'>LearnMore</span></p>


        <TextField className='signinsearchbox   signinmargin-text-left' id="outlined-colored1" size='small'
          label="Enter Password" variant='outlined'
          onChange={takePassword}
          error={rejexObj.passwordBorder}
          helperText={rejexObj.passwordHelper}
        />


        <h4 id='signintext-forgotemail' className='signintext-color  signinmargin-text-left'>Forget password? </h4>


        <div className='signinbutton '>
          <button className='signinbtn-crt-acnt signintext-color'
            id='signinbtn1-details'  >Create account</button>
          <button className='signinbtn-crt-acnt' id='signinbtn2-color'
            onClick={submit} > Next</button>
        </div>

      </form>
    </div>
  )
}
export default SignIn;