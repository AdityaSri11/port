import React from 'react';
import './social.css';

import ln from '../../assets/linkedinLogo.png';
import ig from '../../assets/ig.webp';
import gt from '../../assets/github-mark-white.png';
import em from '../../assets/em.png';

// import React, { useEffect, useState } from "react";


const Social = () => {

    return (

        <section className="social_section" id="social">
            <h1 className="mobcon"> Let's <br /> <span className="conn">Connect<span className="per">.</span></span></h1>
            <div className="col_con">
                <div class="column">
                    <div className="textcontainer">
                        <h1 className="connect"> <span className="lets">Let's</span> <br /> <span className="conn">Connect<span className="per">.</span></span></h1>
                    </div>
                </div>
                <div class="column">
                    <a href="https://www.linkedin.com/in/aditya-srikanth-472540117/" target="_blank">
                            <button className="s_btns ln">
                                { <img className="ln" src= {ln} alt="Button Icon"/> }
                                LinkedIn
                            </button>
                    </a>
                    <br className='breaks'/> <br className='breaks'/>
                    <a href="https://www.instagram.com/aditya.srikanth/" target="_blank">
                            <button className="s_btns ig">
                                { <img className="ig" src= {ig} alt="Button Icon"/> }
                                Instagram
                            </button>
                    </a>
                    <br className='breaks'/><br className='breaks'/>
                    <a href="https://github.com/AdityaSri11/" target="_blank">
                        <button className="s_btns git">
                            { <img className="git" src= {gt} alt="Button Icon"/> }
                            GitHub
                        </button>
                    </a>
                    <br className='breaks'/><br className='breaks'/>
                    <a href="mailto:aditya.srikanth11@gmail.com" class="email-btn">
                        <button className="s_btns email">
                        { <img className="git" src= {em} alt="Button Icon"/> }
                        Email
                        </button>
                    </a>

                </div>
            </div>
            
        </section>
        
    )
}

export default Social