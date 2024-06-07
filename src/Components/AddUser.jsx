import React from 'react'
import NavBar from './NavBar'

const AddUser = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">User Id</label>
                        <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">User Name</label>
                        <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">D.O.B</label>
                        <input type="date" name="" id="" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-6 col md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Mobile No</label>
                        <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-6 col md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Department</label>
                        <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-6 col md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Course</label>
                        <select name="" id="" className="form-control">
                            <option value="Computer Science">Computer Science</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Civil">Civil</option>
                            <option value="Mechanical">Mechanical</option>
                        </select>


                        </div>
                        <div className="col col-12 col-sm-6 col md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <button className="btn btn-success">ADD</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddUser