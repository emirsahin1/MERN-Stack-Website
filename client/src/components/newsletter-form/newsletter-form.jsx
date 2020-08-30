import React, { Component } from 'react'
import { SubmitButton } from "../button/button-style"
import { EmailText } from "../text-block/text-container-style"
import { ErrorMessage, ErrorContainer, FlexBox } from "../utility-styles/utility-styles"
import { TextInput } from "../input/input-style"

export default class NewsLetterForm extends Component {

    constructor(props) {
        super(props)
        this.emailInput = React.createRef();
    }

    render() {
        return (
            <FlexBox direction="column" horizontal="center" styles="margin: 10px auto 40px; max-width:680px; ">
                <EmailText styles="margin:0; height:80px;"><p>Join our email newsletter!</p></EmailText>
                    {/* <div style={{width:"min-content"}}> */}
                <FlexBox direction="row" horizontal="center" styles=" width:680px;">
                    <TextInput placeholder="Email Address" type="email" ref={this.emailInput}></TextInput>
                    <SubmitButton to="/" onClick={this.subscribeEmail.bind(this)}>Submit</SubmitButton>
                </FlexBox>
                <ErrorContainer>
                    <ErrorMessage>ERROR MUST BE EMAIL</ErrorMessage>
                </ErrorContainer>
                {/* </div> */}
            </FlexBox>
        )
    }
    //TODO FIX THIS 

    /**Post request to add user email to db */
    subscribeEmail() {

        if (this.validateEmail(this.emailInput.current.value)) {
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify({ email: this.emailInput.current.value }),
                headers: { 'Content-Type': 'application/json' }
            };
            fetch('/api/subscribe', requestOptions).then(() => window.location = "/");
        }
        else {
            console.log("failed");
        }
    }

    /**Checks to see if email fits pattern email.adc.abc*/
    validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}
