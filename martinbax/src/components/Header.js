import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1><strong>Marin Bax</strong></h1>
        <p>Korean-English interpreter/translator</p>
    </div>
    <Footer />
  </header>
)

export default Header
