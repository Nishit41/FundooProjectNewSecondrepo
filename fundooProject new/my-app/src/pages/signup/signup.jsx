import React from 'react';
import './signup.css';
import TextField from '@mui/material/TextField';
import {signupApi} from '../../services/userservices';
 const emailRegex = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$/;
 const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
 const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
 const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;




function SignUp(){

   
    const [signUpObj, setsignUpObj] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        //confirmPassword: ""
        service: "advance"
    })
    // console.log( "this is me @ Nishit"+signUpObj.firstName);

    const [rejexObj, setRejexObj] = React.useState({
        firstNameBorder: false,
        firstNameHelper: "",
        lastNameBorder: false,
        lastNameHelper: "",
        emailBorder: false,
        emailHelper: "",
        passwordBorder: false,
        passwordHelper: "",
        confirmPasswordBorder: false,
        confirmPasswordHelper: ""
    })

    const takeFirstName = (event) => {
        console.log(event.target.value);
  
        setsignUpObj(prevState => ({
            ...prevState,
            firstName: event.target.value
        }))
         console.log(signUpObj.firstName);
        let firstNameTest = firstNameRegex.test(signUpObj.firstName)
        if (firstNameTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                firstNameBorder: true,
                firstNameHelper: "Enter first name correctly"
            }))
        }
        else if (firstNameTest === true){
            setRejexObj(prevState => ({
                ...prevState,
                firstNameBorder: false,
                firstNameHelper: ""
            }))
        }
    
    
    }

    const takeLastName = (event) => {
        setsignUpObj(prevState => ({
            ...prevState,
            lastName: event.target.value
        }))
        let lastNameTest = lastNameRegex.test(signUpObj.lastName)
        if (lastNameTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                lastNameBorder: true,
                lastNameHelper: "Enter lastname properly"
            }))
        }
        else if (lastNameTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                  lastNameBorder: false,
                 lastNameHelper: ""
            }))
        }
        
    }

    const takeUsername = (event) => {
        setsignUpObj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        let emailTest = emailRegex.test(signUpObj.email)
        if (emailTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
             emailBorder : true,
                emailHelper: "Enter email properly"
            }))
        }
        else if (emailTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                  emailBorder: false,
                 emailHelper: ""
            }))
        }
        
        //console.log(event.target.value)
    }

    const takePassword = (event) => {
        setsignUpObj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        let cnfpasswordTest = passwordRegex.test(signUpObj.password)
        if (cnfpasswordTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Enter a Password"
            }))
        }
        else if (cnfpasswordTest === true) {
                setRejexObj(prevState => ({
                     ...prevState,
                     passwordBorder: false,
                     passwordHelper: ""
                 }))
             }
        
        //console.log(event.target.value)
    }

    const takeConfirmPassword = (event) => {
        setsignUpObj(prevState => ({
            ...prevState,
            confirmPassword: event.target.value
        }))
        let passwordTest = passwordRegex.test(signUpObj.password)
        if (passwordTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "enter password properly"
            }))
        }
        else if (passwordTest === true) {
                setRejexObj(prevState => ({
                     ...prevState,
                     passwordBorder: false,
                     passwordHelper: ""
                 }))
             }
        //console.log(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault();

        let firstNameTest = firstNameRegex.test(signUpObj.firstName)
        let lastNameTest = lastNameRegex.test(signUpObj.lastName)
        let emailTest = emailRegex.test(signUpObj.email)
        let passwordTest = passwordRegex.test(signUpObj.password)
        let confirmPasswordTest = passwordRegex.test(signUpObj.confirmPassword)

        if (signUpObj.firstName.length == 0) {
            setRejexObj(prevState => ({
                ...prevState,
                firstNameBorder: true,
                firstNameHelper: "Enter first name"
            }))
        }
         else if (firstNameTest === true) {
             setRejexObj(prevState => ({
                 ...prevState,
                 firstNameBorder: false,
                 firstNameHelper: ""
             }))
         }

        if (signUpObj.lastName.length == 0) {
            setRejexObj(prevState => ({
                ...prevState,
                lastNameBorder: true,
                lastNameHelper: "Enter last name"
            }))
        }
        // else if (lastNameTest === true) {
        //     setRejexObj(prevState => ({
        //         ...prevState,
        //         lastNameBorder: false,
        //         lastNameHelper: ""
        //     }))
        // }

        if (signUpObj.email.length== 0 ) {
            setRejexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Choose a gmail address"
            }))
        }
        // else if (emailTest === true) {
        //     setRejexObj(prevState => ({
        //         ...prevState,
        //         emailBorder: false,
        //         emailHelper: ""
        //     }))
        // }

        if (signUpObj.password.length == 0) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Enter a Password"
            }))
        }
        // else if (passwordTest === true) {
        //     setRejexObj(prevState => ({
        //         ...prevState,
        //         passwordBorder: false,
        //         passwordHelper: ""
        //     }))
        // }

        if (confirmPasswordTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                confirmPasswordBorder: true,
                confirmPasswordHelper: "confirm Password"
            }))
        }
         else if (confirmPasswordTest === true) {
             setRejexObj(prevState => ({
                 ...prevState,
                 confirmPasswordBorder: false,
                 confirmPasswordHelper: ""
             }))
        }

         if (emailTest === true &&
             passwordTest === true &&
             confirmPasswordTest === true &&
             firstNameTest === true &&
             lastNameTest === true) {
              console.log(signUpObj);
        
             signupApi(signUpObj).then((response) => {
                 console.log(response);
             }).catch((error) => { console.log(error) })

        //     console.log("Signup successful")

    }
}




   












    return (
        <>
            <form className="signupform">
                <div>
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" id='signuphead-img'
                        className='signupmargin-left' >


                    </img>
                </div>
                <span id='signupcreate-account-desc' className='signupmargin-left'>Create your Google Account</span>

                <div className='signupContainer-Box'>

                    <div className='signupContainer-searchbox'>


                        <div className='signuprow-1-searchBox'>

                            <TextField className='signupsearchbox' size='small' label="FirstName" variant='outlined'
                                id='signupoutlined-basic' 
                                onChange= {takeFirstName} 
                                error={rejexObj.firstNameBorder} 
                                helperText={rejexObj.firstNameHelper}
                                />

                            <TextField className='signupsearchbox' size='small' label="lastName"
                                variant='outlined'    
                                id='signupoutlined-basic2'
                                onChange ={takeLastName}
                                error={rejexObj.lastNameBorder} 
                                helperText={rejexObj.lastNameHelper}
                             />

                        </div>
                        {/* {firstNameErr ? <span className='signupfirstName-err-msg signupmargin-text-left'>Enter a correct first name</span> : ""}
                        {lasttNameErr ? <span className='signupfirstName-err-msg signupmargin-text-left'>Enter a correct  last name</span> : ""} */}


                        <TextField className='signupsearchbox-userName ' label="userName"
                         size='small' variant='outlined' 
                            id='signupoutlined-basic3'
                            onChange={takeUsername}
                            error={rejexObj.emailBorder}
                            helperText={rejexObj.emailHelper}  
                        
                        />
                        {/* {usernameErr ? <div className='UserName-err-msg margin-text-left'>Enter a correct userName</div> : ""} */}

                        <h6 id='signupdesc-username ' className='signupmargin-left'>
                            you can use letter,numbers&period</h6>
                        <h4 id='signupcreate-a-gmail' className='signupmargin-left'>Create a new gmail address</h4>



                        <div className='signuprow-3'>
                            <TextField className='signupsearchbox' size='small' label="password" 
                            variant='outlined'
                                id='signupoutlined-basic4'
                                onChange={takePassword}
                                error={rejexObj.passwordBorder} 
                                helperText={rejexObj.passwordHelper}   
                            />


                            <TextField className='signupsearchbox' size='small' label="confirm" variant='outlined'
                              id='signupoutlined-basic5' 
                               onChange={takeConfirmPassword}
                               error={rejexObj.passwordBorder} 
                               helperText={rejexObj.passwordHelper} 

                            />

                        </div>
                        {/* {passwordErr ? <span className='password-err-msg margin-text-left'>follow password norm</span> : ""} */}
                        {/* {confirmErr ? <span className='password-err-msg margin-text-left'> password not matching</span> : ""} */}
                        <h6 id='signuppas-desc' className='signupmargin-left'>Use 8 more character with mix of letter,numbers & symbols </h6>
                        <input type="checkbox" id="signupshow-password" />
                        <label htmlFor="signupshow-password"> Show Password</label>


                        <div className='signupbuton-text-link'>

                            <h4 className='signupsign-instead' >sign-in-instead</h4>

                            <button id='signupbutton-dsc' onClick={submit}>Next</button>

                        </div>

                    </div>



                    <div className='signupcontainer-images'>
                        <img src='https://ssl.gstatic.com/accounts/signup/glif/account.svg'></img>
                        <figcaption>One account. All of Google working for you.</figcaption>
                    </div>



                </div>
            </form>
        </>
    )
}

export default SignUp