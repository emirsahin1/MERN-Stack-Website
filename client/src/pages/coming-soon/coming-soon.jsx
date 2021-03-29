import React, { Component } from 'react'
import { TextContainer, LightTextContainer, DownloadText, EmailText } from "../../components/text-block/text-container-style"
import NewsLetterForm from "../../components/newsletter-form/newsletter-form"

export default class comingSoon extends Component {
    render() {
        return (
            <div>
                <LightTextContainer>
                    <h>Coming Soon</h>
                </LightTextContainer>
                <NewsLetterForm />
            </div>
        )
    }
}
