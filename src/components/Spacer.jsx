import React from 'react'

const Spacer = ({ pad }) => {
    const styles = {
          padding: pad+ " 0"
    }
  return (
    <div className='spacer' style={styles} ></div>
  )
}

export default Spacer