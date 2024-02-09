import React from 'react'
import './Navlist.css';
import {FaCss3Alt, FaHtml5, FaLinkedin} from 'react-icons/fa';
import {IoArrowRedo, IoLogoGithub} from 'react-icons/io5'
import {DiJavascript1} from 'react-icons/di';
import {GrReactjs} from 'react-icons/gr'
import {SiTailwindcss} from 'react-icons/si'
import projectOne from '../../Assets/IMG_20240130_154916.jpg';
import ProjectTwo from '../../Assets/IMG_20240130_160139.jpg'
import { IoMdMail} from 'react-icons/io'
import {FaPhoneAlt} from 'react-icons/fa'
import {FaAddressCard} from 'react-icons/fa'
import cProgram from '../../Assets/c++.jpeg'

const Navlist = () => {
  return (
    <div className='portfolio'>
        <div id='home' className='home'>
            <h1> Kaviya Thirumali </h1>
            <h2> Front-end developer </h2>
            <h3>Contact Link | 
                <p onClick={() => window.location.href = 'https://www.linkedin.com/in/kaviya-thiru-705b52219'}>
                    <FaLinkedin/>
                </p>
                <p onClick={() => window.location.href = 'https://GitHub.com/kaviyathirumali'}>
                    <IoLogoGithub/>
                </p></h3>
            <hr/>
        </div>
    <div className='full-grid'>
        <div className='half-grid'>
            <div id='about' className='about'>
                <h1>EDUCATION</h1>
                <div className='about-education'>
                    <h2>MCA.,COMPUTER APPLICATION</h2>
                    <li>Srm Arts and Science College,Chennai</li>
                    <li>Batch | 2022-2024</li>
                    <li>Percentage | 84% UPTO (2TH SEM)</li>        
                </div>
            </div>
        <div id='skills' className='skill'>
            <h1>SKILLS</h1>
                <div className='skill-list'>        
                    <p><span className='span1'><FaHtml5/></span>HTML</p>
                    <p><span className='span2'><FaCss3Alt/></span>CSS</p>
                    <p><span className='span3'><DiJavascript1/></span>JAVA SCRIPT</p>
                    <p><span className='span4'><GrReactjs/></span>REACT JS</p>
                    <p><span className='span5'><SiTailwindcss/></span>TAILWIND CSS</p>
                    <p><img src={cProgram} alt=''/>C++</p>                    
                </div>
        </div>
        <div className='tools'>
            <h1>TOOLS</h1>
            <li>Github</li>
            <li>Visual Studio Code</li>
            <li>Figma</li>
        </div>
        </div>
        <div id='project' className='project'>
            <h1>PROJECTS</h1>
            <div className='project-1'>  
              <div className='project-1-content'>
                <div className='project-1-text'>
                    <h2><IoArrowRedo/> INTEGRATED PLATFORM FOR INFORMATION ABOUT INDIAN UNIVERSITY</h2>
                    <h4>React JS</h4>
                    <li>Led the development of the project's frontend interface using React.js, Tailwind CSS, and ensured a responsive and user-friendly design.</li>
                    <li>Streamlined access to comprehensive information about Indian universities through an integrated platform, fostering informed decision-making for students and stakeholders.</li>
                    <li>Implemented dynamic data rendering, search , and interactive features, enhancing the user experience.</li>
                    <p><span>Tool:</span>vscode</p>
                </div>
                <div className='project-1-image'>
                    <div className='button'>
                        <button onClick={() => window.location.href = 'https://github.com/kaviyathirumali/Shopping_webdesignn.git'}>View Source</button>
                    </div>
                    <div className='image'>
                        <img src={projectOne} alt=''/>
                    </div>
                </div>
              </div>  
            </div>
            <hr/>
            <div className='project-2'>
            <div className='project-2-content'>  
                <div className='project-2-text'>
                    <h2><IoArrowRedo/> SHOPPING WEBSITE</h2>
                    <h4>React JS</h4>
                    <li>Led the development of the project's frontend interface using React.js, Tailwind CSS, and ensured a responsive and user-friendly design.</li>
                    <li>Streamlined access to comprehensive information about Indian universities through an integrated platform, fostering informed decision-making for students and stakeholders.</li>
                    <li>Implemented dynamic data rendering, search , and interactive features, enhancing the user experience.</li>
                    <p><span>Tool:</span>vscode</p>
                </div>
                <div className='project-2-image'>
                    <div className='button'>
                        <button onClick={() => window.location.href = 'https://github.com/kaviyathirumali/Shopping_webdesignn.git'}>View Source</button>
                        </div>
                <div className='image'>
                    <img src={ProjectTwo} alt=''/>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <hr/>
    <div className='internship-part'>
        <h1>INTERNSHIP</h1>
            <div className='intern'>
                <div className='internship'>
                    <h2>WEB DEVELOPER | <span> @Ayan tech solution</span></h2>
                    <p>Duration: 05-06-2023 to 30-06-2023</p>
                    <li>Gained practical experience in web development on front-end technologies , including HTML, CSS, JS and Bootstrap.</li>
                    <li>Collabrated effctively with the development team, ensuring the seamless integration of front-end components resulting in enhanced functionality and an improved user experience.</li>
                </div>
            </div>
            <hr/>
    </div>
        <div id='contact' className='contact'>
            <h1>CONTACT</h1>
            <div className='contact-list'>
                <p className='contact-1'><IoMdMail/>kaviyathiru007@gmail.com</p>
                <p className='contact-2'><FaPhoneAlt/>9361453087</p>
                <p className='contact-3'><FaAddressCard/>3/88A, South Street, Sikkathambur Palayam, Thuraiyur, 621008.</p>
            </div>
            <div className='resume'>
                <button onClick={() => window.location.href = 'https://www.linkedin.com/in/kaviya-thiru-705b52219'}>
                    <FaLinkedin/>
                </button>
                <button onClick={() => window.location.href = 'https://GitHub.com/kaviyathirumali'}>
                    <IoLogoGithub/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navlist;