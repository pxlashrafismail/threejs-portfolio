import React from 'react'
import {SocialMedia} from "../components/Funcs.jsx";

const Footer = () => {
    return (
        <section
            className="c-space pt-7 pb-3 border-t border-black-300
            flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p></p>
                <p>Privacy policy</p>
            </div>
            <div className="flex gap-3">
                <SocialMedia imgSrc="/assets/github.svg" imgAlt="github"/>
                <SocialMedia imgSrc="/assets/twitter.svg" imgAlt="twitter"/>
                <SocialMedia imgSrc="/assets/instagram.svg" imgAlt="instagram"/>
            </div>
            <p className="text-white-500">
                © {new Date().getFullYear()} Ashraf Ismail. All rights reserved.
            </p>
        </section>
    )
}
export default Footer
