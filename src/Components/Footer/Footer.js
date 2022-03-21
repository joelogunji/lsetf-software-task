import React from 'react'
import {FooterContain, FooterLeft, FooterRight} from "./Footer.Element"

function Footer() {
  return (
    <FooterContain>
        <FooterLeft>
            Footer
        </FooterLeft>
        <FooterRight>
            <div>About</div>
            <div>Donate</div>
        </FooterRight>
    </FooterContain>
  )
}

export default Footer