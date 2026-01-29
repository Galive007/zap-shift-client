import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const SendParcel = () => {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors }
    } = useForm();

    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const serviceCenters = useLoaderData();

    /* -------------------- Regions & Districts -------------------- */
    const regions = [...new Set(serviceCenters.map(c => c.region))];

    const senderRegion = watch('senderRegion');
    const receiverRegion = useWatch({ control, name: 'receiverRegion' });
    const parcelType = watch('parcelType');

    const districtByRegion = region =>
        serviceCenters
            .filter(c => c.region === region)
            .map(d => d.district);

    /* -------------------- Submit Handler -------------------- */
    const handleSendParcel = data => {
        const isDocument = data.parcelType === 'document';
        const isSameDistrict =
            data.senderDistrict === data.receiverDistrict;

        let cost = 0;

        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
            delete data.parcelWeight;
        } else {
            const weight = parseFloat(data.parcelWeight);

            if (weight < 3) {
                cost = isSameDistrict ? 110 : 150;
            } else {
                const base = isSameDistrict ? 110 : 150;
                const extraWeight = weight - 3;
                const extraCharge = isSameDistrict
                    ? extraWeight * 40
                    : extraWeight * 40 + 40;

                cost = base + extraCharge;
            }
        }

        const parcelData = {
            ...data,
            cost
        };

        Swal.fire({
            title: 'Confirm Booking?',
            text: `You will be charged ${cost} BDT`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirm & Continue Payment'
        }).then(result => {
            if (result.isConfirmed) {
                axiosSecure.post('/parcels', parcelData).then(res => {
                    if (res.data.insertedId) {
                        navigate('/dashboard/my-parcels');
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Parcel created successfully. Please proceed to payment.',
                            showConfirmButton: false,
                            timer: 2500
                        });
                    }
                });
            }
        });
    };

    return (
        <div className="w-full min-h-screen flex justify-center py-10 px-4">
            <div className="shadow-md rounded-2xl p-10 w-full max-w-6xl">
                <h1 className="text-3xl font-bold mb-2">Send a Parcel</h1>
                <p className="mb-8">Enter your parcel details</p>

                <form onSubmit={handleSubmit(handleSendParcel)}>
                    {/* Parcel Type */}
                    <div className="flex gap-8 mb-6">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="document"
                                {...register('parcelType', { required: true })}
                            />
                            Document
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="non-document"
                                {...register('parcelType', { required: true })}
                            />
                            Non-Document
                        </label>
                    </div>

                    {errors.parcelType && (
                        <p className="text-red-600 mb-4">
                            Parcel type is required
                        </p>
                    )}

                    {/* Parcel Info */}
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div>
                            <label className="label font-bold">
                                Parcel Name
                            </label>
                            <input
                                {...register('parcelName', { required: true })}
                                className="input input-bordered w-full"
                                placeholder="Parcel Name"
                            />
                            {errors.parcelName && (
                                <p className="text-red-600">
                                    Parcel name is required
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="label font-bold">
                                Parcel Weight (KG)
                                {parcelType === 'non-document' && (
                                    <span className="text-red-500"> *</span>
                                )}
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                disabled={parcelType === 'document'}
                                placeholder={
                                    parcelType === 'document'
                                        ? 'Not required for documents'
                                        : 'Parcel Weight (KG)'
                                }
                                {...register('parcelWeight', {
                                    validate: value => {
                                        if (parcelType === 'document')
                                            return true;
                                        if (!value)
                                            return 'Weight is required';
                                        if (value <= 0)
                                            return 'Invalid weight';
                                        return true;
                                    }
                                })}
                                className="input input-bordered w-full"
                            />

                            {errors.parcelWeight && (
                                <p className="text-red-600">
                                    {errors.parcelWeight.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Sender & Receiver sections remain unchanged */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Sender */}
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Sender Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="label">Sender Name</label>
                                    <input
                                        type="text"
                                        {...register('senderName', { required: true })}
                                        defaultValue={user?.displayName}
                                        placeholder="Sender Name"
                                        className="input input-bordered w-full"
                                    />
                                    {errors.senderName && <p className="text-red-600">Sender name is required</p>}
                                </div>

                                <div>
                                    <label className="label">Sender Email</label>
                                    <input
                                        type="email"
                                        {...register('senderEmail', { required: true })}
                                        defaultValue={user?.email}
                                        placeholder="Sender Email"
                                        className="input input-bordered w-full"
                                    />
                                    {errors.senderEmail && <p className="text-red-600">Sender email is required</p>}
                                </div>

                                <div>
                                    <label className="label">Address</label>
                                    <input
                                        type="text"
                                        {...register('senderAddress', { required: true })}
                                        placeholder="Address"
                                        className="input input-bordered w-full"
                                    />
                                    {errors.senderAddress && <p className="text-red-600">Address is required</p>}
                                </div>

                                <div>
                                    <label className="label">Sender Phone No</label>
                                    <input
                                        type="text"
                                        {...register('senderPhoneNo', { required: true })}
                                        placeholder="Sender Phone No"
                                        className="input input-bordered w-full"
                                    />
                                    {errors.senderPhoneNo && <p className="text-red-600">Phone number is required</p>}
                                </div>

                                <div>
                                    <label className="label">Your Region</label>
                                    <select
                                        {...register('senderRegion', { required: true })}
                                        defaultValue=""
                                        className="select w-full"
                                    >
                                        <option value="" disabled>Pick a Region</option>
                                        {
                                            regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                        }


                                    </select>
                                    {errors.senderRegion && <p className="text-red-600">Region is required</p>}
                                </div>

                                <div>
                                    <label className="label">Your District</label>
                                    <select
                                        {...register('senderDistrict', { required: true })}
                                        defaultValue=""
                                        className="select select-bordered w-full"
                                    >
                                        <option value="" disabled>Select your District</option>
                                        {
                                            districtByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                        }
                                    </select>
                                    {errors.senderDistrict && <p className="text-red-600">District is required</p>}
                                </div>

                                <div>
                                    <label className="label">Pickup Instruction</label>
                                    <textarea
                                        {...register('senderPickupInstruction')}
                                        placeholder="Pickup Instruction"
                                        className="textarea textarea-bordered w-full"
                                    />
                                </div>
                            </div>
                        </div>



                        {/* Your existing sender/receiver JSX is correct */}
                        {/* Receiver */}
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Receiver Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="label">Receiver Name</label>
                                    <input
                                        type="text"
                                        {...register('receiverName', { required: true })}
                                        placeholder="Receiver Name"
                                        className="input input-bordered w-full"
                                    />
                                    {errors.receiverName && <p className="text-red-600">Receiver name is required</p>}
                                </div>

                                <div>
                                    <label className="label">Receiver Email</label>
                                    <input
                                        type="email"
                                        {...register('receiverEmail', { required: true })}
                                        placeholder="Receiver Email"
                                        className="input input-bordered w-full"
                                    />
                                    {errors.receiverEmail && <p className="text-red-600">Receiver email is required</p>}
                                </div>

                                <div>
                                    <label className="label">Receiver Address</label>
                                    <input
                                        type="text"
                                        {...register('receiverAddress', { required: true })}
                                        placeholder="Receiver Address"
                                        className="input input-bordered w-full"
                                    />
                                    {errors.receiverAddress && <p className="text-red-600">Address is required</p>}
                                </div>

                                <div>
                                    <label className="label">Receiver Contact No</label>
                                    <input
                                        type="text"
                                        {...register('receiverPhoneNo', { required: true })}
                                        placeholder="Receiver Contact No"
                                        className="input input-bordered w-full"
                                    />
                                    {errors.receiverPhoneNo && <p className="text-red-600">Phone number is required</p>}
                                </div>

                                <div>
                                    <label className="label">Receiver Region</label>
                                    <select
                                        {...register('receiverRegion', { required: true })}
                                        defaultValue=""
                                        className="select w-full"
                                    >
                                        <option value="" disabled>Pick a Region</option>
                                        {
                                            regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                        }
                                    </select>
                                    {errors.receiverRegion && <p className="text-red-600">Region is required</p>}
                                </div>

                                <div>
                                    <label className="label">Receiver District</label>
                                    <select
                                        {...register('receiverDistrict', { required: true })}
                                        defaultValue=""
                                        className="select select-bordered w-full"
                                    >
                                        <option value="" disabled>Select your District</option>
                                        {
                                            districtByRegion(receiverRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                        }
                                    </select>
                                    {errors.receiverDistrict && <p className="text-red-600">District is required</p>}
                                </div>

                                <div>
                                    <label className="label">Delivery Instruction</label>
                                    <textarea
                                        {...register('receiverDeliveryInstruction')}
                                        placeholder="Delivery Instruction"
                                        className="textarea textarea-bordered w-full"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <p className="text-sm text-gray-600 mt-6">
                        * Pickup Time: 4:00 PM – 7:00 PM (Approx.)
                    </p>

                    <button
                        type="submit"
                        className="btn bg-secondary text-primary hover:bg-lime-500 mt-6"
                    >
                        Proceed to Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SendParcel;
