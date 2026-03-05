import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
             <img src={assets.logo} alt="" />
             <p>Welcome to Loki Food World, your trusted online food ordering destination. Discover top restaurants, explore delicious menus, and enjoy fast and reliable delivery right to your doorstep.</p>
             <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="Facebook" />
                <img src={assets.twitter_icon} alt="twitter" />
                <img src={assets.linkedin_icon} alt="linkedin" />
                </div>
             
            </div>
              <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 8838315437</li>
                    <li>lokeshdeveloper2004@gmail.com</li>
                </ul>

            </div>
          
        </div>
        <hr />
         <p className="footer-copyright">Copyright 2025 ©️ LokiFoods.com- All Right Reservesd.</p>

      
    </div>
  )
}

export default Footer
