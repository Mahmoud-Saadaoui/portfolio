import React from 'react'

function ContactCard({cardTitle,  cardContact, cardData, cardIcon}) {
  return (
    <div className="contact_card">
        <i className={`${cardIcon}  contact_card-icon`}></i>
        <h3 className="contact_card-title">{cardTitle}</h3>
        <a href={cardContact} className="contact_button" target='_blanck'>
            Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i>
        </a>
    </div>
  )
}

export default ContactCard
