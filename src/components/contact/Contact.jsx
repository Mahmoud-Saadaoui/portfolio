import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from '../section-title/SectionTitle'
import './contact.css'
import ContactCard from './ContactCard'
import ContactTitile from './ContactTitile'
import ContactForm from './ContactForm'
import Button from './Button'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_fkwbhhd', 
            'template_3qbcjpe', 
            form.current, 
            '1J4LinV20cqicFHGR'
        )
        
        e.target.reset()
    };
  return (
    <section className='contact section' id='contact'>
      <SectionTitle
        title = 'Get In Touch'
        subtitle = 'Contact Me'
      />

      <div className="contact_container container grid">
        <div className="contact_content">

            <ContactTitile
                title = 'Talk to me'
            />

            <div className="contact_info">
                <ContactCard
                    cardTitle = 'Email'
                    cardContact = 'contact@forkan.me'
                    cardIcon = 'bx bx-mail-send'
                />
                <ContactCard
                    cardTitle = 'Whatsapp'
                    cardContact = "https://wa.me/21627987081"
                    cardIcon = 'bx bxl-whatsapp'
                />
                <ContactCard
                    cardTitle = 'Messenger'
                    cardContact = 'https://www.facebook.com/mhd.saadaoui/'
                    cardIcon = 'bx bxl-messenger'
                />
            </div>
        </div>

        <div className="contact_content">

            <ContactTitile
                title = 'Write me your project'
            />

            <form ref={form} onSubmit={sendEmail} className="contact_form">
                
                <ContactForm 
                    label = 'Name'
                    type = 'text'
                    name = 'name'
                    placeholder = 'Insert Your Name'
                />
                <ContactForm 
                    label = 'Email'
                    type = 'email'
                    name = 'email'
                    placeholder = 'Insert Your Email'
                />

                <div className="contact_form-div contact_form-area">
                    <label className="contact_form-tag">Project</label>
                    <textarea 
                        name='project' 
                        placeholder='Insert Your Project' 
                        className="contact_form-input" 
                        cols='30'
                        rows='10'
                    />
                </div>

                <Button/>

            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
