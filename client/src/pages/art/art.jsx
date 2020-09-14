import React, { Component } from 'react'
import { LightPageTextContainer, TextBackground, PageTextBlock } from "../../components/page-styles/page-styles"
import {FlexBox} from "../../components/utility-styles/utility-styles"
import NewsLetterForm from "../../components/newsletter-form/newsletter-form"


export default class ArtPage extends Component {
    render() {
        return (
            <div>
                <PageTextBlock horizontal="center;" vertical="center;" styles="width:85%; margin:0 auto; height:auto; align-items: stretch;">
                <LightPageTextContainer>
                    <h3>Art</h3>
                    <p>Education is great. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat esse, libero sit exercitationem quod beatae iusto illum aliquam quo, 
                        consequatur nostrum quas cupiditate cum itaque ipsam modi asperiores doloremque in!Education is great. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat esse, libero sit exercitationem quod beatae iusto illum aliquam quo, 
                        consequatur nostrum quas cupiditate cum itaque ipsam modi asperiores doloremque in!Education is great. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat esse, libero sit exercitationem quod beatae iusto illum aliquam quo, 
                        consequatur nostrum quas cupiditate cum itaque ipsam modi asperiores doloremque in!Education is great. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat esse, libero sit exercitationem quod beatae iusto illum aliquam quo, 
                        consequatur nostrum quas cupiditate cum itaque ipsam modi asperiores doloremque in!</p>
                </LightPageTextContainer>
                <FlexBox styles="height:auto; background-color:#2e2e2e;"> 
                <TextBackground>
                    <p>&#8226; Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <p>&#8226; Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <p>&#8226; Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <p>&#8226; Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </TextBackground>
                </FlexBox>
                </PageTextBlock>
                <PageTextBlock horizontal="center;" vertical="center;" styles="width:85%; margin:0 auto; height:auto; align-items: stretch;">
                <LightPageTextContainer>
                    <p>Education is great. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat esse, libero sit exercitationem quod beatae iusto illum aliquam quo, 
                        consequatur nostrum quas cupiditate cum itaque ipsam modi asperiores doloremque in!Education is great. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat esse, libero sit exercitationem quod beatae iusto illum aliquam quo, 
                        consequatur nostrum quas cupiditate cum itaque ipsam modi asperiores doloremque in!Education is great. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat esse, libero sit exercitationem quod beatae iusto illum aliquam quo, 
                        consequatur nostrum quas cupiditate cum itaque ipsam modi asperiores doloremque in!Education is great. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat esse, libero sit exercitationem quod beatae iusto illum aliquam quo, 
                        consequatur nostrum quas cupiditate cum itaque ipsam modi asperiores doloremque in!</p>
                </LightPageTextContainer>
                </PageTextBlock>

                <PageTextBlock horizontal="center;" vertical="center;" styles="width:85%; margin:0 auto; height:auto; align-items: stretch;">
                <FlexBox styles="height:auto; background-color:#2e2e2e;"> 
                <TextBackground>
                    <p>&#8226; Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <p>&#8226; Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <p>&#8226; Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <p>&#8226; Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </TextBackground>
                </FlexBox>
                <LightPageTextContainer>
                    <p>Education is great. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat esse, libero sit exercitationem quod beatae iusto illum aliquam quo, 
                        consequatur nostrum quas cupiditate cum itaque ipsam modi asperiores doloremque in!Education is great. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat esse, libero sit exercitationem quod beatae iusto illum aliquam quo, 
                        consequatur nostrum quas cupiditate cum itaque ipsam modi asperiores doloremque in!Education is great. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat esse, libero sit exercitationem quod beatae iusto illum aliquam quo, 
                        consequatur nostrum quas cupiditate cum itaque ipsam modi asperiores doloremque in!Education is great. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat esse, libero sit exercitationem quod beatae iusto illum aliquam quo, 
                        consequatur nostrum quas cupiditate cum itaque ipsam modi asperiores doloremque in!</p>
                </LightPageTextContainer>
                </PageTextBlock>
                <NewsLetterForm></NewsLetterForm>
            </div>
        )
    }
}
