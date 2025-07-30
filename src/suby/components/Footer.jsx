import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <p className='f-p1'>
            © 2025 <strong className="f-logo">Food Fantasy</strong> | Made with ❤️ by <a className='f-name' href="https://www.linkedin.com/in/kandyula-akhil-72737a2a5" >Kandyula Akhil</a> & <a className='f-name' href="https://www.linkedin.com/in/yerram-srilekha-787773372">Yerram Sri Lekha</a>
        </p>
        <p className='f-p2'>
            <a className='linkedin' href="https://www.linkedin.com/in/kandyula-akhil-72737a2a5" >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                <p>LinkedIn</p> 
            </a>
            <a className='linkedin' href="mailto:akhilkandayala@gmail.com" >
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
                <p>Email</p>
            </a>
        </p>
    </div>
  )
}

export default Footer
