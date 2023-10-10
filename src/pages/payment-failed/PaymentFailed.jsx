import React from 'react'

const PaymentFailed = () => {
  return (
    <div>
        <div className="sign-in-form flex-center" style={{ padding:"3rem 1rem" }}>
            <div className="header" style={{ marginBottom:"1rem" }}>
                <i className='bx bx-x' style={{ fontSize:"3rem", marginBottom:"1rem", color:"#fff", borderRadius:"50px", backgroundColor:"#CC1515" }}></i>
                <h1>Payment Failed</h1>
            </div>
            <p style={{ marginBottom:"1rem", textAlign:"center" }}>
            Unfortunately, there was an error in your transaction. Kindly try again to complete the contribute to the group card.
            </p>
            <input
            type="submit"
            value="Try Again"
            className="submit-btn primary-button"
            />
      </div>
    </div>
  )
}

export default PaymentFailed