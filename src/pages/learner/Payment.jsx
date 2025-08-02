import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Smartphone, 
  CreditCard, 
  Shield, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  ArrowRight,
  Phone,
  DollarSign
} from "lucide-react";

// Enhanced Zod schema with better validation
const paymentSchema = z.object({
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(13, "Phone number too long")
    .regex(/^(\+254|254|0)[17]\d{8}$/, "Enter a valid Safaricom number"),
  amount: z.string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 1, "Amount must be at least KES 1")
    .refine((val) => Number(val) <= 70000, "Maximum amount is KES 70,000"),
});

export default function ModernMpesaPayment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // 'success', 'error', null
  
  const form = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      phone: "",
      amount: "",
    },
  });

  const { watch } = form;
  const watchedAmount = watch("amount");
  const watchedPhone = watch("phone");

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    setPaymentStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success/error randomly for demo
      if (Math.random() > 0.3) {
        setPaymentStatus('success');
      } else {
        throw new Error('Payment failed');
      }
    } catch (error) {
      setPaymentStatus('error');
      console.error("Payment error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhoneNumber = (phone) => {
    if (!phone) return "";
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.startsWith("254")) {
      return `+${cleaned}`;
    } else if (cleaned.startsWith("0")) {
      return `+254${cleaned.slice(1)}`;
    }
    return phone;
  };

  const formatAmount = (amount) => {
    if (!amount) return "";
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(Number(amount));
  };

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 p-4 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center border border-green-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">
              Your M-Pesa payment of {formatAmount(watchedAmount)} has been initiated. 
              Please check your phone to complete the transaction.
            </p>
            <button 
              onClick={() => {
                setPaymentStatus(null);
                form.reset();
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              Make Another Payment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Smartphone className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">M-Pesa Payment</h1>
          <p className="text-gray-600">Fast, secure, and convenient payments</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Security Badge */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
            <div className="flex items-center justify-center text-white">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Secured by M-Pesa</span>
            </div>
          </div>

          <div className="p-8 space-y-6">
            {/* Phone Number Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center">
                <Phone className="w-4 h-4 mr-2 text-green-600" />
                Phone Number
              </label>
              <div className="relative">
                <input
                  {...form.register("phone")}
                  type="tel"
                  placeholder="0712345678"
                  className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-xl transition-all duration-200 focus:bg-white focus:border-green-500 focus:outline-none ${
                    form.formState.errors.phone ? 'border-red-300' : 'border-gray-200'
                  }`}
                />
                {watchedPhone && !form.formState.errors.phone && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                )}
              </div>
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {form.formState.errors.phone.message}
                </p>
              )}
              {watchedPhone && !form.formState.errors.phone && (
                <p className="text-green-600 text-sm">
                  ✓ {formatPhoneNumber(watchedPhone)}
                </p>
              )}
            </div>

            {/* Amount Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center">
                <DollarSign className="w-4 h-4 mr-2 text-green-600" />
                Amount (KES)
              </label>
              <div className="relative">
                <input
                  {...form.register("amount")}
                  type="number"
                  placeholder="100"
                  min="1"
                  max="70000"
                  className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-xl transition-all duration-200 focus:bg-white focus:border-green-500 focus:outline-none ${
                    form.formState.errors.amount ? 'border-red-300' : 'border-gray-200'
                  }`}
                />
                {watchedAmount && !form.formState.errors.amount && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                )}
              </div>
              {form.formState.errors.amount && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {form.formState.errors.amount.message}
                </p>
              )}
              {watchedAmount && !form.formState.errors.amount && (
                <p className="text-green-600 text-sm font-medium">
                  ✓ {formatAmount(watchedAmount)}
                </p>
              )}
            </div>

            {/* Payment Summary */}
            {watchedPhone && watchedAmount && !form.formState.errors.phone && !form.formState.errors.amount && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                <h3 className="font-semibold text-gray-800 mb-2">Payment Summary</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">To:</span>
                    <span className="font-medium">{formatPhoneNumber(watchedPhone)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-bold text-green-600">{formatAmount(watchedAmount)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Error Status */}
            {paymentStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-center text-red-700">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Payment failed. Please try again.</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={form.handleSubmit(onSubmit)}
              disabled={isSubmitting || !form.formState.isValid}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                isSubmitting || !form.formState.isValid
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing Payment...</span>
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  <span>Pay with M-Pesa</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-4 text-center">
            <p className="text-xs text-gray-500">
              Your payment is secured with 256-bit SSL encryption
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-2">Trusted by thousands of users</p>
          <div className="flex justify-center space-x-4 text-xs text-gray-400">
            <span>• Instant Processing</span>
            <span>• 24/7 Support</span>
            <span>• Bank-level Security</span>
          </div>
        </div>
      </div>
    </div>
  );
}