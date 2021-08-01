import { useState } from "react"

const LoginForm = () => {
    // Static Variables
    const EMAIL_MATCH = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
    
    // State for input parameters and validation tags
    const [firstName, setFirstName] = useState({"first-name": "", "valid": false});
    const [lastName, setLastName] = useState({"last-name": "", "valid": false});
    const [emailAddress, setEmailAddress] = useState({"email-address": "", "valid": false});
    const [password, setPassword] = useState({"password": "", "valid": false});
    const [confirmPassword, setConfirmPassword] = useState({"confirm-password": "", "valid": false});

    //TODO: use useEffect() to update the page depending on whether each state's valid key is true or false

    // Validation methods
    // Validate First Name if value is greater than two characters
    const vFirstName = (e) => {
        // e.preventDefault();
        const firstName = String(e);
        // console.log(`First Name passed to vFirstName = "${firstName}"`);

        // If valid, set first name, otherwise update styling
        if (firstName.length > 2) {
            setFirstName({"first-name": firstName, "valid": true});
            // console.log(`First Name "${firstName}" is valid`);
        }
        else {
            setFirstName({"first-name": firstName, "valid": false});
            // console.log(`First Name "${firstName}" is not valid`);
        };
    };

    // Validate Last Name if value is greater than two characters
    const vLastName = (e) => {
        // e.preventDefault();
        const lastName = String(e);
        // console.log(`Last Name passed to vLastName = "${lastName}"`);

        // If valid, set last name, otherwise update styling
        if (lastName.length > 2) {
            setLastName({"last-name": lastName, "valid": true});
            // console.log(`Last Name "${lastName}" is valid`);
        }
        else {
            setLastName({"last-name": lastName, "valid": false});
            // console.log(`Last Name "${lastName}" is not valid`);
        };
    };

    // Validate Email Address if value is a valid email address (ex: xxx@xxx.xxx)
    const vEmailAddress = (e) => {
        // e.preventDefault();
        const emailAddress = String(e);
        // console.log(`Email Address passed to vEmailAddress = "${emailAddress}"`);

        // If valid, set email address, otherwise update styling
        if (EMAIL_MATCH.test(emailAddress)) {
            setEmailAddress({"email-address": emailAddress, "valid": true});
            // console.log(`Email Address "${emailAddress}" is valid`);
        }
        else {
            setEmailAddress({"email-address": emailAddress, "valid": false});
            // console.log(`Email Address "${emailAddress}" is not valid`);
        };
    };
    return (
        <div className="login-form">
            <form>
                <label htmlFor="first-name">
                    First Name
                    <input 
                        id="first-name"
                        value={firstName["first-name"]}
                        placeholder="First Name"
                        onChange={(e) => vFirstName(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="last-name">
                    Last Name
                    <input 
                        id="last-name"
                        value={lastName["last-name"]}
                        placeholder="Last Name"
                        onChange={(e) => vLastName(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="email-address">
                    Email Address
                    <input 
                        id="email-address"
                        value={emailAddress["email-address"]}
                        placeholder="Email Address"
                        onChange={(e) => vEmailAddress(e.target.value)}
                        required
                    />
                </label>
            </form>
        </div>
    )
}

export default LoginForm;