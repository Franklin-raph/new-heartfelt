import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../assets/images/YouTube_loading_symbol_3_(transparent).gif'

const AccountVerification = ({baseUrl}) => {
    const user_info = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate()
    const [pageLoader, setPageLoader] = useState(false)
    const {token} = useParams()
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    useEffect(() => {
      verifyAccount()
      console.log(token)
    }, []);

    async function verifyAccount(){
      setPageLoader(true)
      const response = await fetch(`${baseUrl}/verify/${token}`)
      const data = await response.json()
      if(response) setPageLoader(false)
      if(response.ok) setSuccess('Your Account has being verified successfully, please proceed to login using the button below')
      if(!response.ok) setError('invalid verification link, please check the link again or proceed to login using the button below')
      console.log(response, data)
    }

    async function resendVerificationEmail(){
      const response = await fetch(`${baseUrl}/regen-confirm-email`,{
        body: JSON.stringify({email:localStorage.getItem("userEmail")}),
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        }
      })
      const data = await response.json()
      if(response.ok){
        setSuccess(data.message)
      }

      if(!response.ok){
        setError(data.message)
      }
      console.log(data)
    }
  
  return (
    <div>
      {pageLoader && 
        <div className='loader-bg'>
          <div className="loader">
            <img src={Loader} alt=""/>
          </div>
        </div>
      }
      <div className="sign-in-form flex-center" style={{ padding:"3rem 1rem" }}>
        <div className="header" style={{ marginBottom:"1rem" }}>
          {success && <i class='bx bxs-check-circle' style={{ fontSize:"3rem", marginBottom:"1rem", color:"#299e9e" }}></i>}
          {/* <i class='' style='color:#ffffff' ></i> */}
          {error && <i class='bx bxs-x-circle' style={{ fontSize:"3rem", marginBottom:"1rem", color:"#E20809" }}></i>}
          {success && <h1>Account Verification Successful</h1>}
          {error && <h1>Account Verification Un-Successful</h1>}
        </div>
        {success && <p style={{ marginBottom:"1rem", textAlign:"center" }}>{success}</p>}
        {error && <p style={{ marginBottom:"1rem", textAlign:"center" }}>{error}</p>}
        <input
          type="submit"
          value="Ok"
          className="submit-btn primary-button"
          onClick={() => navigate("/sign-in")}
        />
        <p className="resendVerificationEmailText" onClick={() => resendVerificationEmail()}>Click to resend verification email</p>
      </div>
    </div>
  )
}

export default AccountVerification