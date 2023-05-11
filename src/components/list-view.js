import React, { useEffect, useState } from "react";
import logo from '../assets/images/logo.png';
import trash from '../assets/images/trash.png';
import edit from '../assets/images/edit.png';
import close from '../assets/images/close.png';
import Steps from "./steps";
import EditUser from "./editUser";
import { Link } from "react-router-dom";
import { AccessAPI } from "../services/AccessAPI";
import Modal from 'react-modal';
import TestDemo from "./TestDemo";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
var userids=0;
let ListView = () =>{
  let subtitle;
  const [modalIsOpen, setIsOpen,] = useState(false);
  const [modalIsEditOpen, setIsEditOpen,] = useState(false);
const[editdataid,setEditDataId]=useState(0);
  function openModal() {
    setIsOpen(true);
  }
  function openModals(ids) {
    setIsEditOpen(true);
    setEditDataId(ids);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';

  }
  function afterOpenModals() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';

  }

  function closeModal() {
    setIsOpen(false);
  }
  function closeModals() {
    setIsEditOpen(false);
  }
  let [state, setState] = useState(
    {
    users : [],
    errorMessage : ''
    }
  );
  useEffect(() => {
    document.body.classList.remove('steps');
    document.body.classList.add('list-view');
    async function fetchData() {
        
      try{
      const response = await AccessAPI.getAll();
      setState({
        ...state,
        users: response.data,
      });
      }
      catch(error) {
        setState({
            ...state,
            errorMessage: error.message
        })
      }
    }
    fetchData();        
}, []);

function deleteUser(id){
  debugger
  var userid = parseInt(id)
  fetch(`https://6451419aa3221969115f2e5e.mockapi.io/api/v1/users/${userid}`, {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with deleted task
  window.location.replace("/")
}).catch(error => {
  // handle error
  console.log(errorMessage)
})
}
let {users, errorMessage}= state;
    return (
      <>
        <article className="list-view-main bg-gray-100 container">
        {
            users.length > 0 &&
            users.map(user =>{
                return(
            <aside className="list-view-item px-6 py-4" key={user.id}>
              <div className="action-icon">
                <img src={edit} alt="edit" title="Edit User" className='img-edit' value={user.id} onClick={ () => openModals(user.id)} />  
                <img src={trash} alt="trash"  title="Delete User" className='img-trash' onClick={ () => deleteUser(user.id)} value={user.id} />
              </div>
                <div className='inner-list-view'>
                <div className='list-view-item-left'>
                  <img src={logo} alt="logo" className='img-logo' />                  
                </div>
                <div className='list-view-item-right' value={user.id}>
                  <h3 className='title'>{user.job_title}</h3>
                  <p className='company'>{user.company_name} - {user.industry}</p>
                  <p className='location'>{user.location} ({user.remote_type})</p>
                  <p className='timining'>Part-Time (9:00 am - 5:00 pm IST)</p>
                  <p className='experience'>Experience ({user.experience_min} - {user.experience_max} years)</p>
                  <p className='salary'>INR (₹) {user.salary_min} - {user.salery_max} / Month</p>
                  <p className='emp'>{user.total_emp} employees</p>
                  <div className="btn-group-list">
                    <Link onClick={openModal} className="btn-primary">Apply Now</Link>
                    <Link onClick={openModal} className="btn-primary-outline">External Apply</Link>
                  </div>
                </div>
                </div>  
            </aside> 
            )
            })
        } 
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        portalClassName="main-popup"
      >
        
        <div>
        <button onClick={closeModal} className="close"><img src={close} alt="edit" title="Edit User" className='img-close'  /> </button>
        <Steps />
        </div>
      </Modal>
      <Modal
        isOpen={modalIsEditOpen}
        onAfterOpen={afterOpenModals}
        onRequestClose={closeModals}
        style={customStyles}
        contentLabel="Example Modal"
        portalClassName="main-popup main-popup-edit"
      >
        
        <div>
        <button onClick={closeModals} className="close"><img src={close} alt="edit" title="Edit User" className='img-close' /> </button>
        {/* <EditUser  /> */}
        <TestDemo editdata={editdataid} />
        </div>
      </Modal>
      
        </article>
      </>
    );
  }
  export default ListView