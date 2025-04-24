import React from 'react'

const PhaseContent = ({topContent, bottomContent}) => {
  return (
    <div className='p-5'>
      {topContent}
      {bottomContent}
    </div>
  )
}

export default PhaseContent