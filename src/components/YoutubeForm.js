import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

// to validate input fields
const validationSchema = Yup.object({
  name:Yup.string().required('Required*'),
  email: Yup.string().email('Invalid email format').required('Required*'),
  channel: Yup.string().required('Required*')
})

function YoutubeForm() {

  const formik =  useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: ''
    },
    onSubmit: values => {
      console.log('Formdata: ', values)
    },
    // validate: values  =>{

    //   let errors = {}

    //   if(!values.name){
    //     errors.name = 'Required*'
    //   }

    //   if(!values.email){
    //     errors.email = 'Required*'
    //   }

    //   if(!values.channel){
    //     errors.channel = 'Required*'
    //   }

    //   return errors
    
    
    // },
    validationSchema
  })

  console.log('Form field: ', formik.touched)

  return (
    <div>
        
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name' >Name</label>
            <input 
            type='text' 
            id='name' 
            name='name' 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            value={formik.values.name}  />

            {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div>:null}

            <label htmlFor='email' >E-mail</label>
            <input 
            type='email' 
            id='email' 
            name='email' 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            value={formik.values.email}  />

            {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div>:null}

            <label htmlFor='channel' >channel</label>
            <input type='text' 
            id='channel' 
            name='channel'  
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            value={formik.values.channel}  />

            {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div>:null}

            <button className='button' type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default YoutubeForm