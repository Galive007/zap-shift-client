import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams]=useSearchParams()
    const [paymentInfo,setPaymentInfo]=useState({})
    const sessionId=searchParams.get('session_id')
    const axiosSecure=useAxiosSecure()

    console.log(sessionId);

    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res=>{
                console.log(res.data);
                setPaymentInfo({
                    trackingId:res.data.trackingId,
                    transactionId:res.data.transactionId
                })
            })
        }
    },[axiosSecure, sessionId])
    
    return (
        <div>
            <h1 className='text-2xl text-green-600'>payment-successfully</h1>
            <p>Your TransactionId: {paymentInfo?.transactionId}</p>
            <p>Your TrackingId: {paymentInfo?.trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;