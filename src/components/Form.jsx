import React from 'react'

const Form = () => {
  return (
    <>
    <form className='border border-dark mt-5'>
        <h1 className='mt-3'>Enter Records</h1>
        <div className="form-outline mb-4 mt-5">
  <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder='Username' />

</div>

<div className="form-outline mb-4">
  <input type="title" id="form3Example3cg" className="form-control form-control-lg" placeholder='Task Title' />
</div>

<div className="form-outline mb-4">
  <input type="description" id="form3Example4cg" className="form-control form-control-lg" placeholder='Description' />
</div>

<div className="form-outline mb-4">
  <input type="date" id="form3Example4cdg" className="form-control form-control-lg" placeholder='Date' />
  </div>
<div className="form-outline mb-4">
  <input type="time" id="form3Example4cdg" className="form-control form-control-lg" placeholder='Time' />
  </div>


<div className="d-flex justify-content-center">
  <button type="button"
    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body mb-4">Save</button>
</div>


</form>

    </>
  )
}

export default Form