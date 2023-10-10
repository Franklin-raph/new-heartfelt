import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentSuuccessfullModal = ({cardId}) => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="successModalBg">
            <div
                className="sign-in-form flex-center"
                style={{ padding: "3rem 1rem", backgroundColor:"#fff" }}
            >
                <div className="header" style={{ marginBottom: "1rem" }}>
                <i
                    className="bx bxs-check-circle"
                    style={{ fontSize: "3rem", marginBottom: "1rem", color: "#299e9e" }}
                ></i>
                <h1>Payment Successful</h1>
                </div>
                <p style={{ marginBottom: "1rem", textAlign: "center" }}>
                Your payment for contribution to the group card was completed. The
                recipient will be notified of your contribution.
                </p>
                <input
                type="submit"
                value="View Card"
                className="submit-btn primary-button"
                onClick={() => navigate(`/single-card-view/${cardId}`)}
                />
            </div>
        </div>
    </div>
  )
}

export default PaymentSuuccessfullModal