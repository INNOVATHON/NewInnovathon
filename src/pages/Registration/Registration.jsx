import React from 'react'
import "../Registration/registration.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {
   const notify = () => toast.success('Registered Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

    //   const [file, setFile] = useState()
//   const upload = () => {
//     const formData = new FormData()
//     formData.append('file', file)
//     axios.post('',formData )
//     .then( res => {})
//     .catch(er => console.log(er))
//     const notify = () => toast.success('Registered Successfully!', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         });
//         notify()
//   }
  return (
    <>
    <div className='indic'>
     <input type="checkbox" id="one"/>
    <input type="checkbox" id="two"/>
    <input type="checkbox" id="three"/>
  <div className="container_1">
    <h1><img height={220} width={250} style={{marginTop:"-70px"}} src="innova.png" alt="" /></h1>
    <div className="indicator">
        <div className="step step1">
            <div>1</div>
            <span>STEP 1</span>
        </div>
        <div className="line line1"></div>
        <div className="step step2">
            <div>2</div>
            <span>STEP 2</span>
        </div>
        <div className="line line2"></div>
        <div className="step step3">
            <div>3</div>
            <span>STEP 3</span>
        </div>
        <div className="line line3"></div>
        <div className="step step4">
            <div>4</div>
            <span>STEP 4</span>
        </div>

    </div>

    <div className="panel">
        <div className="page1">
            <form action="#" className="form">
                <h2>Team Leader Details</h2>
                <div className="form-group">
                    
                    <input type="text" required/>
                    <label for="">Team Name</label>
                </div>
                <div className="form-group">
                    <input type="text" required/>
                    <label for="">Team Leader Name</label>
                </div>
               
                <div className="form-group">
                    <input type="email" required/>
                    <label for="">Email ID</label>
                </div>
                <div className="form-group">
                    <input type="number" required />
                    <label for="">Phone Number</label>
                </div>
                <div className="btn-group">
                    <label for="one" className="btn btn-f">Next</label>
                </div>
            </form>
        </div>

        <div className="page2">
            <form action="#" className="form">
                <h2>Member  1  </h2>
                <div className="form-group">
                    <input type="text" required/>
                    <label for="">Name</label>
                </div>
                <div className="form-group">
                    <input type="text" required/>
                    <label for="">Branch</label>
                </div>
                <div className="form-group">
                    <input type="email" required/>
                    <label for="">Email Address</label>
                </div>
                <div className="form-group">
                    <input type="number" required />
                    <label for="">Phone Number</label>
                </div>
                <div className="btn-group">
                    <label for="one" className="btn">Previous</label>
                    <label for="two" className="btn">Next</label>
                </div>
            </form>
        </div>

        <div className="page3">
            <form action="#" className="form">
                <h2>Member 2</h2>
                <div className="form-group">
                    <input type="text" required/>
                    <label for="">Name</label>
                </div>
                <div className="form-group">
                    <input type="text" required/>
                    <label for="">Branch</label>
                </div>
                <div className="form-group">
                    <input type="email" required/>
                    <label for="">Email Address</label>
                </div>
                <div className="form-group">
                    <input type="number" required />
                    <label for="">Phone Number</label>
                </div>
                <div className="btn-group">
                    <label for="two" className="btn">Previous</label>
                    <label for="three" className="btn">Next</label>
                </div>
            </form>
        </div>

        <div className="page4">
            <form action="#" className="form">
                <h2>Upload PPT & Abstract</h2>
                <div className="form-group">
                    <input type="file" required />
                    
                </div>
                <div className="form-group">
                    <input type="file" required />
                    
                </div>
                
                <div className="btn-group">
                    <label for="three" className="btn">Previous</label>
                    <button type="submit" className="btn" onClick={notify}>Submit</button>
                    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
                </div>
            </form>
        </div>

        
    </div>
  </div>   
  </div>  
 </>
  )
}

export default Registration
