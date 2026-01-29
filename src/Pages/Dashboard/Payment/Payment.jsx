import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Components/Loading/Loading';


const Payment = () => {
    const { parcelId } = useParams()
    const axiosSecure = useAxiosSecure()
    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`)
            return res.data
        }

    })
    console.log(parcel);

    if (isLoading) {
        <Loading></Loading>
    }

    const handlePayment=async()=>{
        const paymentInfo={
            cost:parcel.cost,
            parcelId:parcel._id,
            senderEmail:parcel.senderEmail,
            parcelName:parcel.parcelName
        }

        const res=await axiosSecure.post('/create-checkout-session',paymentInfo)
        console.log(res.data);
        window.location.href=res.data.url
    }
    return (
        <div className='text-center'>
            <h1>Pay For : {parcel?.cost}</h1>
            <h1>Payment Item : {parcel?.parcelName}</h1>
            <button onClick={handlePayment} className="btn bg-secondary text-black btn-sm">PAY</button>
        </div>
    );
};

export default Payment;