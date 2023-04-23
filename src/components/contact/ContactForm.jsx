import React from 'react'

function ContactForm({label, type, placeholder, name, cols, rows, bb, aa, formClass }) {
    // console.log(input_)
  return (
    <div className='contact_form-div'>
        <label className="contact_form-tag">{label}</label>
        <input 
            type = {type} 
            name = {name} 
            placeholder = {placeholder} 
            className="contact_form-input" 
        />
    </div>
  )
}

export default ContactForm
