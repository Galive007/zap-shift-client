import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { MdOutlinePageview } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data
        }
    })

    const handleDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

    const handlePayment = async (parcel) => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }
        const res = await axiosSecure.post('/payment-checkout-session', paymentInfo)
        console.log(res.data.url);
        window.location.assign(res.data.url)
        // window.location.href=res.data.url
    }

    return (
        <div>
            <h1>ALL My Parcels:{parcels.length}</h1>
            {/* TABLE – visible on tablet & desktop */}
            <div className=" overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Parcel Name</th>
                            <th>Weight</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Delivery Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {parcels.map((parcel, index) => (
                            <tr key={parcel._id} className="hover">
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.parcelWeight} kg</td>
                                <td>{parcel.cost} BDT</td>
                                <td>{
                                    parcel.paymentStatus === 'paid' ?
                                        <span className='bg-green-400 p-2 rounded-lg text-black font-bold'>Paid</span>
                                        :
                                        <button onClick={() => handlePayment(parcel)} className="btn bg-secondary btn-sm text-black">PAY</button>
                                    //    <Link to={`/dashboard/Payment/${parcel._id}`}>
                                    //     <button className="btn bg-secondary btn-sm text-black">PAY</button>
                                    //    </Link>

                                }
                                </td>
                                <td>
                                    <span className="badge badge-info">{parcel.deliveryStatus}</span>
                                </td>
                                <td className="space-x-2">
                                    <button className="btn btn-square text-2xl"><MdOutlinePageview /></button>

                                    <button className="btn btn-square text-2xl"><FaEdit /></button>

                                    <button
                                        onClick={() => handleDelete(parcel._id)}
                                        className="btn btn-square text-2xl"><RiDeleteBin6Fill /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyParcels;