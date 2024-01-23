import React, { useRef, useState } from 'react';
import './team.scss';



export default function Team() {
  return (
    <>
    <div className="can">
      <div className="wrapper">

<div className="title">
    <h4>Organizing Committee</h4>
</div>

<div className="card_Container">

  

    <div className="card">

        <div className="imbBx">
            <img src="Director pic.png" alt=""/>
        </div>

        <div className="content">
            <div className="contentBx">
                <h3>Dr. Pankaj Rai <br/><span>Director, BIT SINDRI <br /><b style={{fontWeight:"bold"}}>Patron INNOVATHON'24</b> </span></h3>
            </div>
            <ul className="sci">
                <li>
                    <a href="director@bitsindri.ac.in"><i className="fa-solid fa-envelope"></i></a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/prof-pankaj-rai-2390038/"><i className="fa-brands fa-linkedin-in"></i></a>
                </li>
            </ul>
        </div>

    </div>

    <div className="card">

        <div className="imbBx">
            <img src="HOD pic.png" alt=""/>
        </div>

        <div className="content">
            <div className="contentBx">
                <h3>Dr. Prakash Kumar <br/><span>Head of Department <br />Production and Industrial Enigneering <br /><b style={{fontWeight:"bold"}}>Convenor INNOVATHON'24</b> </span></h3>
            </div>
            <ul className="sci">
                <li>
                <a href="prakashkr.prod@bitsindri.ac.in"><i className="fa-solid fa-envelope"></i></a>
                </li>
                
                <li>
                    <a href="https://www.linkedin.com/in/dr-prakash-kumar-231b86125/"><i className="fa-brands fa-linkedin-in"></i></a>
                </li>
            </ul>
        </div>

    </div>

    <div className="card">

        <div className="imbBx">
            <img src="sumanto.png" alt=""/>
        </div>

        <div className="content">
            <div className="contentBx">
                <h3>Dr. Sumanto Mukherjee <br/><span>Proffessor Incharge <br />Production and Industrial Enigneering </span></h3>
            </div>
            <ul className="sci">
                <li>
                <a href="sumanta.prod@bitsindri.ac.in"><i className="fa-solid fa-envelope"></i></a>
                </li>
                
            </ul>
        </div>

    </div>
</div>

</div>
</div>

    </>
  );
}
