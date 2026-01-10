import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const SendParcel = () => {
    const { register, handleSubmit, watch, control, formState: { errors }, reset } = useForm();
    const serviceCenters = useLoaderData()
    const regionsDuplicate = serviceCenters.map(c => c.region)
    const regions = [...new Set(regionsDuplicate)]
    const senderRegion = watch('senderRegion')
    const receiverRegion = useWatch({ control, name: 'receiverRegion' });
    // console.log(regions)

    const districtByRegion = region => {
        const regionDistricts = serviceCenters.filter(c => c.region === region)
        const districts = regionDistricts.map(d => d.district)
        return districts
    }

    const handleSendParcel = (data) => {
        console.log('Form Submitted:', data);
        // reset()
        const isDocument = data.parcelType === 'document';
        const isSameDistrict = data.senderDistrict === data.receiverDistrict
        const parcelWeight = parseFloat(data.parcelWeight)
        console.log(isSameDistrict);
        let cost = 0
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        }
        else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            }
            else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
                cost = minCharge + extraCharge
            }
        }
        console.log('cost', cost);

        Swal.fire({
            title: "Are you agree?",
            text: `You will be charged ${cost} BDT`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "I Agree"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }

    return (
        <div className="w-full min-h-screen flex justify-center py-10 px-4">
            <div className="bg-white shadow-md rounded-2xl p-10 w-full max-w-6xl">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Send A Parcel</h1>
                <p className="text-gray-600 mb-8">Enter your parcel details</p>

                <form onSubmit={handleSubmit(handleSendParcel)}>
                    {/* Parcel Type */}
                    <div className="flex items-center gap-8 mb-10">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" value="document" {...register('parcelType', { required: true })} />
                            <span className="text-gray-700">Document</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" value="non-document" {...register('parcelType', { required: true })} />
                            <span className="text-gray-700">Non-Document</span>
                        </label>
                    </div>
                    {errors.parcelType && <p className="text-red-600 mb-4">Parcel type is required.</p>}

                    {/* Parcel Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div>
                            <label className="label text-gray-700">Parcel Name</label>
                            <input
                                type="text"
                                {...register('parcelName', { required: true })}
                                placeholder="Parcel Name"
                                className="input input-bordered w-full"
                            />
                            {errors.parcelName && <p className="text-red-600">Parcel name is required</p>}
                        </div>

                        <div>
                            <label className="label text-gray-700">Parcel Weight (KG)</label>
                            <input
                                type="number"
                                step="0.01"
                                {...register('parcelWeight', { required: true, min: 0.01 })}
                                placeholder="Parcel Weight (KG)"
                                className="input input-bordered w-full"
                            />
                            {errors.parcelWeight && <p className="text-red-600">Parcel weight is required</p>}
                        </div>
                    </div>

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

                    <p className="text-sm text-gray-600 mt-6">* Pickup Time 4pm-7pm Approx.</p>

                    <button type="submit" className="btn bg-secondary hover:bg-lime-500 mt-6">
                        Proceed to Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SendParcel;
