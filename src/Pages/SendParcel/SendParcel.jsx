import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleSendParcel = (data) => {

        console.log('clicked', data);


    }

    return (
        <div className="w-full min-h-screen flex justify-center py-10 px-4">
            <div className="bg-white shadow-md rounded-2xl p-10 w-full max-w-6xl">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Send A Parcel</h1>
                <p className="text-gray-600 mb-8">Enter your parcel details</p>

                <form onSubmit={handleSubmit(handleSendParcel)}>
                    {/* Document Type */}
                    <div className="flex items-center gap-8 mb-10">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="docType" className="radio" value='document' {...register('parcelType')} />
                            <span className="text-gray-700">Document</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="docType" className="radio" value='non-document' {...register('parcelType')} />
                            <span className="text-gray-700">Not-Document</span>
                        </label>
                    </div>

                    {/* Parcel Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div>
                            <label className="label text-gray-700">Parcel Name</label>
                            <input type="text" {...register('parcelName')} placeholder="Parcel Name" className="input input-bordered w-full" />
                        </div>


                        <div>
                            <label className="label text-gray-700">Parcel Weight (KG)</label>
                            <input type='number' {...register('parcelWeight')} placeholder="Parcel Weight (KG)" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Sender */}
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Sender Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="label">Sender Name</label>
                                    <input type="text" {...register('senderName')} placeholder="Sender Name" className="input input-bordered w-full" />
                                </div>


                                <div>
                                    <label className="label">Address</label>
                                    <input type="text" {...register('senderAddress')} placeholder="Address" className="input input-bordered w-full" />
                                </div>


                                <div>
                                    <label className="label">Sender Phone No</label>
                                    <input type="text" {...register('senderPhoneNo')} placeholder="Sender Phone No" className="input input-bordered w-full" />
                                </div>


                                <div>
                                    <label className="label">Your District</label>
                                    <select className="select select-bordered w-full">
                                        <option disabled selected>Select your District</option>
                                        <option value=""></option>
                                    </select>
                                </div>


                                <div>
                                    <label className="label">Pickup Instruction</label>
                                    <textarea className="textarea textarea-bordered w-full" {...register('senderPickupInstruction')} placeholder="Pickup Instruction"></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Receiver */}
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Receiver Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="label">Receiver Name</label>
                                    <input type="text" placeholder="Sender Name" {...register('receiverName')} className="input input-bordered w-full" />
                                </div>


                                <div>
                                    <label className="label">Receiver Address</label>
                                    <input type="text" placeholder="Address" {...register('receiverAddress')} className="input input-bordered w-full" />
                                </div>


                                <div>
                                    <label className="label">Receiver Contact No</label>
                                    <input type="text" placeholder="Sender Contact No" {...register('receiverPhoneNo')} className="input input-bordered w-full" />
                                </div>


                                <div>
                                    <label className="label">Receiver District</label>
                                    <select className="select select-bordered w-full">
                                        <option disabled selected>Select your District</option>
                                    </select>
                                </div>


                                <div>
                                    <label className="label">Delivery Instruction</label>
                                    <textarea className="textarea textarea-bordered w-full" {...register('receiverDeliveryInstruction')} placeholder="Delivery Instruction"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm text-gray-600 mt-6">* Pickup Time 4pm-7pm Approx.</p>

                    <button className="btn bg-secondary hover:bg-lime-500 mt-6">Proceed to Confirm Booking</button>
                </form>
            </div >
        </div >
    );
};

export default SendParcel;