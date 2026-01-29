import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`)
            return res.data
        }
    })
    console.log(payments);
    
    return (
        <div>
            <h1>Payment History {payments.length}</h1>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Percel info</th>
                            <th>Transaction Id</th>
                            <th>Tracking Number</th>
                            <th>Payment Info</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments.map((payment, index) => 
                                <tr key={index}>
                                    <th>{index+1}</th>
                                    <td>{payment.parcelName}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.trackingId}</td>
                                    <td>{payment.amount} ({payment.paymentStatus})</td>
                                    <td> <button className='btn btn-sm'>View</button> </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;