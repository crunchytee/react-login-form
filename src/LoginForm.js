import "./LoginForm.css";
import { useEffect, useState } from "react";

const LoginForm = () => {
    // Static Variables
    const EMAIL_MATCH = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
    const MINIMUM_NAME_LENGTH = 2;
    const MINIMUM_PASSWORD_LENGTH = 8;
    
    // State for input parameters and validation tags
    const validInput = {
        color: "black"
    };
    const invalidInput = {
        color: "red"
    };
    const [firstName, setFirstName] = useState({"first-name": "", "valid": false, "style": validInput});
    const [lastName, setLastName] = useState({"last-name": "", "valid": false, "style": validInput});
    const [emailAddress, setEmailAddress] = useState({"email-address": "", "valid": false, "style": validInput});
    const [password, setPassword] = useState({"password": "", "valid": false, "style": validInput});
    const [confirmPassword, setConfirmPassword] = useState({"confirm-password": "", "valid": true, "style": validInput});
    const [submit, setSubmit] = useState({"empty": true, "valid": false});

    // Cheesy useEffect to make the password confirm update when you update the password
    useEffect(() => {
        vConfirmPassword("");
    }, [password]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        submitForm();
    }, [firstName,lastName,emailAddress,password,confirmPassword]); // eslint-disable-line react-hooks/exhaustive-deps

    const isEmpty = (input) => {
        const field = String(input);
        if (field === "") {
            return true;
        }
        else {
            return false;
        };
    };

    // Validation methods
    // Validate First Name if value is greater than two characters
    const vFirstName = (e) => {
        // e.preventDefault();
        const thisFirstName = String(e);
        // console.log(`First Name passed to vFirstName = "${thisFirstName}"`);

        // If valid, set first name, otherwise update styling
        if (thisFirstName.length >= MINIMUM_NAME_LENGTH) {
            setFirstName({"first-name": thisFirstName, "valid": true, "style": validInput});
            // console.log(`First Name "${thisFirstName}" is valid`);
        }
        else {
            setFirstName({"first-name": thisFirstName, "valid": false, "style": invalidInput});
            // console.log(`First Name "${thisFirstName}" is not valid`);
        };
    };

    // Validate Last Name if value is greater than two characters
    const vLastName = (e) => {
        // e.preventDefault();
        const thisLastName = String(e);
        // console.log(`Last Name passed to vLastName = "${thisLastName}"`);

        // If valid, set last name, otherwise update styling
        if (thisLastName.length >= MINIMUM_NAME_LENGTH) {
            setLastName({"last-name": thisLastName, "valid": true, "style": validInput});
            // console.log(`Last Name "${thisLastName}" is valid`);
        }
        else {
            setLastName({"last-name": thisLastName, "valid": false, "style":invalidInput});
            // console.log(`Last Name "${thisLastName}" is not valid`);
        };
    };

    // Validate Email Address if value is a valid email address (ex: xxx@xxx.xxx)
    const vEmailAddress = (e) => {
        // e.preventDefault();
        const thisEmailAddress = String(e);
        // console.log(`Email Address passed to vEmailAddress = "${thisEmailAddress}"`);

        // If valid, set email address, otherwise update styling
        if (EMAIL_MATCH.test(thisEmailAddress)) {
            setEmailAddress({"email-address": thisEmailAddress, "valid": true, "style": validInput});
            // console.log(`Email Address "${thisEmailAddress}" is valid`);
        }
        else {
            setEmailAddress({"email-address": thisEmailAddress, "valid": false, "style": invalidInput});
            // console.log(`Email Address "${thisEmailAddress}" is not valid`);
        };
    };

    // Validate Password if length is at least 8 characters
    const vPassword = (e) => {
        // e.preventDefault();
        const thisPassword = String(e);
        // console.log(`Password passed to vPassword = "${thisPassword}"`);

        // If valid, set password, otherwise update styling
        if (thisPassword.length >= MINIMUM_PASSWORD_LENGTH) {
            setPassword({"password": thisPassword, "valid": true, "style": validInput});
            // console.log(`Password "${thisPassword}" is valid`);
        }
        else {
            setPassword({"password": thisPassword, "valid": false, "style": invalidInput});
            // console.log(`Password "${thisPassword}" is not valid`);
        };
    };

    // Validate Confirm Password if it's the same as password
    const vConfirmPassword = (e) => {
        // e.preventDefault();
        const thisConfirmPassword = String(e);
        // console.log(`ConfirmPassword passed to vConfirmPassword = "${thisConfirmPassword}"`);

        // If valid, set Confirm Password, otherwise update styling
        if (thisConfirmPassword === password.password) {
            setConfirmPassword({"confirm-password": thisConfirmPassword, "valid": true, "style": validInput});
            // console.log(`ConfirmPassword "${thisConfirmPassword}" is valid`);
        }
        else {
            setConfirmPassword({"confirm-password": thisConfirmPassword, "valid": false, "style": invalidInput});
            // console.log(`ConfirmPassword "${thisConfirmPassword}" is not valid`);
        };
    };

    //Check if all fields are valid and then redirect to some page
    const submitForm = () => {
        if ((firstName["first-name"] || lastName["last-name"] || emailAddress["email-address"] || password.password || confirmPassword["confirm-password"]) === "") {
            setSubmit({"empty": true, valid: false})
            console.log("all fields empty")
        }
        else if (firstName.valid && lastName.valid && emailAddress.valid && password.valid && confirmPassword.valid) {
            //TODO: redirect to some AMAZING page
        }
        else {
            //TODO: make it fix the fields and display something that says to fix the fields
        }
    }
    return (
        <div className="login-form">
            <form>
                <label htmlFor="first-name" className="first-name" style={firstName.style}>
                    <p hidden={firstName.valid}>First Name must be at least 2 characters long</p>
                    First Name
                    <input 
                        id="first-name"
                        value={firstName["first-name"]}
                        placeholder="First Name"
                        onChange={(e) => vFirstName(e.target.value)}
                        style={firstName.style}
                        required
                    />
                </label>
                <label htmlFor="last-name" style={lastName.style}>
                    <p hidden={lastName.valid}>Last Name must be at least 2 characters long</p>   
                    Last Name
                    <input 
                        id="last-name"
                        value={lastName["last-name"]}
                        placeholder="Last Name"
                        onChange={(e) => vLastName(e.target.value)}
                        style={lastName.style}
                        required
                    />
                </label>
                <label htmlFor="email-address" style={emailAddress.style}>
                    <p hidden={emailAddress.valid}>Please enter a valid email address</p>  
                    Email Address
                    <input 
                        id="email-address"
                        value={emailAddress["email-address"]}
                        placeholder="Email Address"
                        onChange={(e) => vEmailAddress(e.target.value)}
                        style={emailAddress.style}
                        required
                    />
                </label>
                <label htmlFor="password" style={password.style}>
                    <p hidden={password.valid}>Password must be at least 8 characters in length</p>  
                    Password
                    <input 
                        id="password"
                        value={password["password"]}
                        placeholder="Password"
                        onChange={(e) => vPassword(e.target.value)}
                        style={password.style}
                        required
                    />
                </label>
                <label htmlFor="confirm-password" style={confirmPassword.style}>
                    <p hidden={confirmPassword.valid}>Passwords must match</p>  
                    Confirm Password
                    <input 
                        id="confirmPassword"
                        value={confirmPassword["confirmPassword"]}
                        placeholder="Confirm Password"
                        onChange={(e) => vConfirmPassword(e.target.value)}
                        style={confirmPassword.style}
                        required
                    />
                </label>
                <div>
                    <p hidden={submit.valid}>Please fix the errors above</p>
                    <p hidden={!submit.empty}>Please fill out all fields</p>
                    <button type="submit" onClick={submitForm}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;