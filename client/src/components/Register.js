import React,{Fragment,useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAlert} from '../actions/alert';
import PropTypes from 'prop-types';

const Register = ({setAlert})=>{
    const [formData,setFormData] =useState({
        fname:'',
        lname:'',
        age:'',
        salary:''
    });

    const {fname,lname,age,salary}=formData;

    const onChange = e => setFormData({...formData,[e.target.name]: e.target.value});
    const onSubmit = async e =>{
      e.preventDefault();
        
        const newUser = {
          fname,
          lname,
          age,
          salary
        }

        try {
          const config = {
            headers : {
              'Content-Type':'application/json'
            }
          }

          const body = JSON.stringify(newUser);
          const res = await axios.post('http://localhost:5000/users',body,config);       
          if(res.data === 'User Registered'){
          setAlert(res.data,'success');
          }
          else{
            setAlert(res.data,'danger');
          }
        } catch (err) {
          console.error(err.response.data);
        }
      }    
    

    return <Fragment>
      <div className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Enter Your Details</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="First Name" name="fname" value={fname} onChange={e => onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Last Name" name="lname" value={lname} onChange={e => onChange(e)} required />
         
        </div>
        <div className="form-group">
          <label>Choose Your Age:</label>

          <select name ="age" value={age} onChange={e => onChange(e)}>
            
            
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            
          </select>
        </div>
        
        <div className="form-group">
        <input
            type="text"
            placeholder="Salary"
            name="salary"
            value={salary} 
            onChange={e => onChange(e)} 
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
     </div> 
    </Fragment>
};

Register.propTypes= {
  setAlert: PropTypes.func.isRequired
};

export default connect(null,{setAlert})(Register);
