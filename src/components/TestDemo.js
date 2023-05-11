import React, { useEffect, useState } from "react";
import axios from "axios";
import { AccessAPI } from "../services/AccessAPI";
import $ from 'jquery';
const serverURL = `https://6451419aa3221969115f2e5e.mockapi.io/api/v1/users/`;
const TestDemo = (props) => {
  const [userdata, setUserData] = useState([]);
  let [count, setUsersData] = useState(1);
  const [state, setState] = useState({
    // user:{
      job_title:  '',
      company_name: '',
      industry: '', 
      location: '', 
      remote_type: '', 
      experience_min: '', 
      experience_max: '', 
      salary_min: '', 
      salery_max: '', 
      total_emp: '', 
      apply_type: '', 
    // }
  })
  let handleSubmit = () =>{
    console.log("Ok")
  }
  const { editdata } = props;
  
  const getdata = (editdata) => {
    axios.get(serverURL + editdata).then((resp) => {
      console.log(resp.data);
      let user = resp.data;
      setState({
        job_title: user.job_title,
        company_name: user.company_name,
        industry : user.industry,
        location : user.location,
        remote_type : user.remote_type,
        experience_min : user.experience_min,
        experience_max : user.experience_max,
        salary_min : user.salary_min,
        salery_max : user.salery_max,
        total_emp : user.total_emp,
        apply_type : user.apply_type,
      });
      if(user.apply_type>1){
        $(".radio_0").prop('checked', true);
      }else{
        $(".radio_0").prop('checked', true);
      }
      setUserData(resp.data);
      nextButton(resp.data);
    });
  };
  useEffect(()=>{
    document.body.classList.remove('list-view');
    document.body.classList.add('steps');
    getdata(editdata);

  },[]);
  console.log("User Edit Id is", userdata);
  let handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })  
    
  }
  let _next = () => {
    debugger
    let currentStep = count
    currentStep = currentStep >= 2? 2: currentStep + 1
    setUsersData({
      count: currentStep
    })
  } 
  const nextButton = () =>{
    let currentStep = count;  
    if(currentStep <=2) {
      if(currentStep == 1) {
        return (        
          <article className="container step-one-main">
          <aside className="step-one  p-8">            
            <div className="form-header">
              <div className="form-header-title">
              Edit a job
              </div>
              <div className="form-header-step">
              Step 1
              </div>
            </div>
            <div className="pb-6">
              <label className="form-label" for="title">Job title<span className="text-error">*</span></label>
              <input type="text" name="job_title" value={state.job_title} onChange={handleChange} placeholder="ex. UX UI Designer" className="input-form" />
            </div>
            <div className="pb-6">
              <label className="form-label" for="Company">Company name<span className="text-error">*</span></label>
              <input type="text" name="company_name" value={state.company_name} onChange={handleChange} placeholder="ex. Google" className="input-form" />
            </div>
            <div className="pb-6">
              <label className="form-label" for="industry">Industry<span className="text-error">*</span></label>
              <input type="text" name="industry" value={state.industry} onChange={handleChange} placeholder="ex. Information Technology" className="input-form" />
            </div>
            <div className="form-row pb-24">
              <div className="location-form">
                
                <label className="form-label" for="location">Location<span className="text-error">*</span></label>
                <input type="text" name="location" value={state.location} placeholder="ex. Chennai" className="input-form" onChange={handleChange} />
              </div>
              <div className="location-form">
                <label className="form-label" for="remote_type">Remote type<span className="text-error">*</span></label>
                <input type="text" name="remote_type"  value={state.remote_type} onChange={handleChange} placeholder="ex. In-office" className="input-form" />
              </div>
            </div>
            <div className="text-right button-footer">
          <button className="btn-primary"  type="button" onClick={_next}>
          Next
          </button>  
            </div>
          </aside>
          </article>  
        )
      }
      else if(currentStep >2){
        return ( 
      <article className="container step-one-main">
            <aside className="step-one  p-8">            
              <div className="form-header">
                <div className="form-header-title">
                Create a job
                </div>
                <div className="form-header-step">
                Step 2
                </div>
              </div> 
                  <label className="form-label" for="">Experience</label>
              <div className="form-row pb-6">
                <div className="location-form">
                  <input type="text" name="experience_min" onChange={handleChange} value={state.experience_min} placeholder="Minimum" className="input-form" />
                </div>
                <div className="location-form">
                  <input type="text" name="experience_max" onChange={handleChange} value={state.experience_max} placeholder="Maximum" className="input-form" />
                </div>
              </div>
              <label className="form-label" for="">Salary</label>
              <div className="form-row pb-6">
                <div className="location-form">
                  <input type="text" name="salary_min" onChange={handleChange} value={state.salary_min} placeholder="Minimum" className="input-form" />
               </div>
               <div className="location-form">
                 <input type="text" name="salery_max" onChange={handleChange} value={state.salery_max} placeholder="Maximum" className="input-form" />
               </div>
             </div>
             <div className="pb-6">
             <label className="form-label" for="title">Total employee</label>
               <input type="text" name="total_emp" onChange={handleChange} value={state.total_emp} placeholder="ex. 100" className="input-form" />
           </div>
           <label className="form-label" for="">Apply type</label>
           <div className="form-row-radio pb-24 justify-start">
             <div className="radio-form">
             
               <input type="radio" name="apply_type" onChange={handleChange} value="0" id="radio_0" placeholder="Quick apply" className="input-form-radio radio_0" /><span className="label-radio">Quick apply</span>
                </div>
                <div className="radio-form">
                  <input type="radio" name="apply_type" onChange={handleChange} value="1" id="radio_1" placeholder="External apply" className="input-form-radio radio_1" /><span className="label-radio">External apply</span>
                 </div>
               </div>
               <div className="text-right button-footer">
               <button type="button" className="btn-primary" onClick={handleSubmit} >Save</button>
               </div>
             </aside>
      </article>
        )
      }
    }
    return null;
    //count +=;    
  } 
  //return <div>{editdata}</div>;
  return ( 
    <React.Fragment>
      <form onSubmit={handleSubmit}>        
        {nextButton(userdata)}
      </form>
    </React.Fragment>
  )
};

export default TestDemo;
