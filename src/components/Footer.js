import React from 'react'
import FooterAd from './FooterAd.js'

function Footer() {
  return (
    <footer>
      
      <FooterAd />
      
      <section
        className='bg-gray-200'
      >
        
        <div id="flex flex-col items-center">

          <div id="1 row of react-social-icons">

          </div>

          <div
            className='
              flex flex-col items-center
              text-gray-600 font-bold text-sm
              space-y-1 py-12
              '>
            <h1>Privacy policy • Terms & conditions</h1>
            <h1>@2024 video</h1>
          </div>

        </div>


      </section>
    
    </footer>
  );
}

export default Footer;
