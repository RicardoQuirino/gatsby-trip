import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import {
     FooterContainer,
     SocialIcon,
     SocialIconLink,
     SocialIcons,
     SocialLogo,
     SocialMedia,
     SocialMediaWrap,
     WebsiteRights} 
     from './FooterElements'   

const Footer = () => {
    return(
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        TRIP
                    </SocialLogo>
                    <WebsiteRights>TRIP @ {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" arial-label="Instagram ">
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href="//www.youtube.com/channel/
                        UCcKsymTY_4BYR-wytLjex7A?view_as=subscriber"
                         target="_blank" arial-label="Youtube" rel="noopener noreferrer">
                            <FaYoutube/>
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" arial-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer