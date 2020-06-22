import React from 'react';
import Navbar from './Navbar'
import { useForm } from 'react-hook-form'

function PatientRegistrtation() {
    const { register, handleSubmit , errors} = useForm()
    const onSubmit = (data) =>{
        console.log(data)
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-7">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label for="userName">
                                    <b>Name</b>
                                </label>
                                <input type="text" name="name" ref={register({required : true})} className="form-control" id="userName" aria-describedby="emailHelp" placeholder="Enter name"></input>
                                {errors.name && <p style={{color : "red"}}>Please mention your Name</p>}
                            </div>
                            <div class="form-group">
                                <label for="gender1">
                                    <b>Gender</b>
                                </label>
                                <select class="form-control" name="gender" ref={register({required : true})}  id="gender1">
                                    <option value="" disabled selected>Please Select</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                                {errors.gender && <p style={{color : "red"}}>Please select your gender</p>}
                            </div>
                            <div className="form-group">
                                <label for="age1">
                                    <b> Age</b>
                                </label>
                                <input type="text" name="age" className="form-control" ref={register({ required : true})} id="age1" placeholder="Enter Age"></input>
                                {errors.age && <p style={{color : "red"}}>Please enter your age</p>}
                            </div>
                            <button type="submit" className="btn btn-warning">
                                <b>Submit</b>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default PatientRegistrtation