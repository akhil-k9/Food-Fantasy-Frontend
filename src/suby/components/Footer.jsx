import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <p className='f-p1'>
            © 2025 <strong className="f-logo">Food Fantasy</strong> | Made with ❤️ by <a className='f-name' href="https://www.linkedin.com/in/kandyula-akhil-72737a2a5" >Kandyula Akhil</a> & <a className='f-name' href="#">#</a>
        </p>
        <p className='f-p2'>
            <p className="f-logo">Contact us</p>
            <a className='linkedin' href="https://www.linkedin.com/in/kandyula-akhil-72737a2a5" >
                🔗 LinkedIn
            </a>
            <a className='linkedin' href="mailto:akhilkandayala@gmail.com" >
                ✉️ Email
            </a>
        </p>
    </div>
  )
}

export default Footer
