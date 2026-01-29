import React from 'react';
import { Link, useSearchParams } from "react-router";
import { XCircle, RefreshCcw, Home } from "lucide-react";
import { motion } from "framer-motion";


// 👉 Brand color (change once, applies everywhere)


const PaymentCancelled = () => {
    const BRAND_COLOR = "#ef4444"; // ZapShift red (editable)

    const [searchParams] = useSearchParams();


    // Optional transaction details from URL
    const orderId = searchParams.get("orderId") || "N/A";
    const amount = searchParams.get("amount") || "0.00";
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-100 px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center"
            >
                {/* Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex justify-center mb-4"
                >
                    <XCircle className="w-16 h-16" style={{ color: BRAND_COLOR }} />
                </motion.div>


                {/* Title */}
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                    Payment Cancelled
                </h1>


                {/* Message */}
                <p className="text-gray-600 mb-4">
                    Your payment was cancelled. No charges were made to your account.
                </p>


                {/* Transaction Info */}
                <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 mb-6">
                    <p><span className="font-medium">Order ID:</span> {orderId}</p>
                    <p><span className="font-medium">Amount:</span> ৳{amount}</p>
                </div>


                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                        to="/checkout"
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-white font-medium transition"
                        style={{ backgroundColor: BRAND_COLOR }}
                    >
                        <RefreshCcw size={18} />
                        Retry Payment
                    </Link>


                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                </div>


                {/* Footer */}
                <p className="text-xs text-gray-400 mt-6">
                    Need help? Contact ZapShift support.
                </p>
            </motion.div>
        </div>
    );
};

export default PaymentCancelled;