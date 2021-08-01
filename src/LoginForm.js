import "./LoginForm.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
    // Static Variables
    const EMAIL_MATCH = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
    const PHONENUMBER_MATCH = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm;
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
    const [confirmPassword, setConfirmPassword] = useState({"confirm-password": "", "valid": false, "style": validInput});
    const [phoneNumber, setPhoneNumber] = useState({"phone-number": "", "valid": false, "style": validInput});
    const [submit, setSubmit] = useState({"valid": false});
    const [data, setData] = useState({}); // eslint-disable-line no-unused-vars
    const history = useHistory();

    // Cheesy useEffect to make the password confirm update when you update the password
    useEffect(() => {
        vConfirmPassword(confirmPassword["confirm-password"]);
    }, [password]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        isValid();
    }, [firstName,lastName,emailAddress,password,confirmPassword]); // eslint-disable-line react-hooks/exhaustive-deps

    // Check to see if all fields are valid, and if so, set submit valid param to be valid
    const isValid = () => {
        if (firstName.valid && lastName.valid && emailAddress.valid && password.valid && confirmPassword.valid) {
            setSubmit({...submit, "valid": true});
        }
        else {
            setSubmit({...submit, "valid": false});
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

    // Validate Phone Number 
    const vPhoneNumber = (e) => {
        // e.preventDefault();
        const thisPhoneNumber = String(e);
        // console.log(`PhoneNumber passed to vPhoneNumber = "${thisPhoneNumber}"`);

        // If valid, set Confirm Phone Number, otherwise update styling
        if (PHONENUMBER_MATCH.test(thisPhoneNumber)) {
            setPhoneNumber({"phone-number": thisPhoneNumber, "valid": true, "style": validInput});
            // console.log(`PhoneNumber "${thisPhoneNumber}" is valid`);
        }
        else {
            setPhoneNumber({"phone-number": thisPhoneNumber, "valid": false, "style": invalidInput});
            // console.log(`PhoneNumber "${thisPhoneNumber}" is not valid`);
        };
    };

    //Check if all fields are valid and then redirect to some page
    const submitForm = () => {
        setData({
            "firstName": firstName["first-name"],
            "lastName": lastName["last-name"],
            "emailAddress": emailAddress["email-address"],
            "password": password.password
        });
        history.push("/success");
        //TODO: make it fix the fields and display something that says to fix the fields
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
                <label htmlFor="phone-number" style={phoneNumber.style}>
                    <p hidden={phoneNumber.valid}>Please enter a valid phone number</p>  
                    Phone Number (Optional)
                    <input 
                        id="phoneNumber"
                        value={phoneNumber["phoneNumber"]}
                        placeholder="Phone Number"
                        onChange={(e) => vPhoneNumber(e.target.value)}
                        style={phoneNumber.style}
                    />
                </label>
                <div>
                    <p hidden={submit.valid} style={invalidInput}>Please fix the errors above</p>
                    <button type="button" onClick={submitForm} disabled={!submit.valid}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;