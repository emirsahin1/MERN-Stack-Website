import React, { Component } from 'react'
import { SubmitButton } from "../button/button-style"
import { EmailText } from "../text-block/text-container-style"
import { AlertMessage, ErrorContainer, FlexBox } from "../utility-styles/utility-styles"
import { TextInput } from "../input/input-style"

export default class NewsLetterForm extends Component {

    constructor(props) {
        super(props)
        this.emailInput = React.createRef();

        this.state ={
            displayAlert: "false",
            messageContent: "Please enter a valid email address!",
            emailValid:false
        }
    }

    render() {
        return (
            <FlexBox direction="column" horizontal="center" styles="margin: 10px auto 40px; width:85vw; min-width:240px; max-width:680px;">
                <EmailText styles="margin:0; height:80px;"><p>Join our email newsletter!</p></EmailText>
                <FlexBox direction="row" horizontal="center" styles="margin: 10px 40px 40px; width:85vw; max-width:680px;">
                    <TextInput placeholder="Email Address" type="email" ref={this.emailInput}></TextInput>
                    <SubmitButton to="/" onClick={this.subscribeEmail.bind(this)}>Submit</SubmitButton>
                </FlexBox>
                    <AlertMessage display={this.state.displayAlert} emailValid={this.state.emailValid}>{this.state.messageContent}</AlertMessage>
            </FlexBox>
        )
    }

    /**Post request to add user email to db.  */
    subscribeEmail() {

        if (this.validateEmail(this.emailInput.current.value)) {
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify({ email: this.emailInput.current.value }),
                headers: { 'Content-Type': 'application/json' }
            };
            //Displays an alery after succesfull subscription
            fetch('/api/subscribe', requestOptions).then(() => this.setState({displayAlert:"true", messageContent: "You have subscribed to our newsletter!", emailValid:true}));

        }
        else {
            this.setState({displayAlert:"true"})
        }
    }

    /**Checks to see if email fits pattern email.adc.abc*/
    validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}
