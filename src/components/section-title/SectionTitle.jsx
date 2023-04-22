import React from 'react'

function SectionTitle({title, subtitle}) {
  return (
    <>
      <h2 className="section_title">{title}</h2>
    <span className="section_subtitle">{subtitle}</span>
    </>
  )
}

export default SectionTitle
