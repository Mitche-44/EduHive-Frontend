import React, { useState } from "react";
import { 
  Smartphone, 
  CreditCard, 
  Shield, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  ArrowRight,
  Phone,
  DollarSign,
  Clock,
  Receipt,
  Star
} from "lucide-react";

// Simplified validation functions (replacing Zod)
const validatePhone = (phone) => {
  if (!phone) return "Phone number is required";
  if (phone.length < 10) return "Phone number must be at least 10 digits";
  if (phone.length > 13) return "Phone number too long";
  if (!/^(\+254|254|0)[17]\d{8}$/.test(phone)) return "Enter a valid Safaricom number";
  return null;
};

const validateAmount = (amount) => {
  if (!amount) return "Amount is required";
  const num = Number(amount);
  if (isNaN(num)) return "Amount must be a number";
  if (num < 1) return "Amount must be at least KES 1";
  if (num > 70000) return "Maximum amount is KES 70,000";
  return null;
};

// API service functions for Flask backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const apiService = {
  initiatePayment: async (paymentData) => {
    const response = await fetch(`${API_BASE_URL}/mpesa/stk-push`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Payment initiation failed');
    }
    
    return data;
  },

  checkPaymentStatus: async (checkoutRequestId) => {
    const response = await fetch(`${API_BASE_URL}/mpesa/status/${checkoutRequestId}`);
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to check payment status');
    }
    
    return data;
  }
};

export default function ModernMpesaPayment() {
  const [formData, setFormData] = useState({ phone: "", amount: "" });
  const [errors, setErrors] = useState({ phone: null, amount: null });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // 'success', 'error', 'pending', null
  const [checkoutRequestId, setCheckoutRequestId] = useState(null);
  const [paymentId, setPaymentId] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const phoneError = validatePhone(formData.phone);
    const amountError = validateAmount(formData.amount);
    
    setErrors({ phone: phoneError, amount: amountError });
    
    return !phoneError && !amountError;
  };

  const checkPaymentStatus = async (requestId) => {
    try {
      setIsCheckingStatus(true);
      const response = await apiService.checkPaymentStatus(requestId);
      
      if (response.success) {
        const { status, result_desc, mpesa_receipt_number } = response.data;
        
        if (status === 'completed') {
          setPaymentStatus('success');
          setTransactionDetails({
            receiptNumber: mpesa_receipt_number || 'N/A',
            amount: formData.amount,
            phone: formData.phone,
            timestamp: new Date().toLocaleString()
          });
          setStatusMessage('Transaction Complete');
        } else if (status === 'failed' || status === 'cancelled') {
          setPaymentStatus('error');
          setStatusMessage(result_desc || 'Payment was not completed');
        } else if (status === 'timeout') {
          setPaymentStatus('error');
          setStatusMessage('Payment request timed out. Please try again.');
        } else {
          setStatusMessage('Payment is still processing...');
          // Continue checking after 3 seconds
          setTimeout(() => checkPaymentStatus(requestId), 3000);
        }
      }
    } catch (error) {
      console.error('Status check error:', error);
      setStatusMessage('Could not verify payment status');
    } finally {
      setIsCheckingStatus(false);
    }
  };

  const onSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setPaymentStatus(null);
    setStatusMessage('');
    
    try {
      const paymentData = {
        phoneNumber: formData.phone,
        amount: formData.amount,
        accountReference: 'EduHive Payment',
        transactionDesc: 'Payment for EduHive services'
      };

      const response = await apiService.initiatePayment(paymentData);
      
      if (response.success) {
        setCheckoutRequestId(response.data.checkout_request_id);
        setPaymentId(response.data.payment_id);
        setPaymentStatus('pending');
        setStatusMessage(response.data.customer_message || 'Please check your phone to complete the payment');
        
        // Start checking payment status after 5 seconds
        setTimeout(() => checkPaymentStatus(response.data.checkout_request_id), 5000);
      } else {
        throw new Error(response.message || 'Payment initiation failed');
      }
    } catch (error) {
      setPaymentStatus('error');
      setStatusMessage(error.message || 'Payment failed. Please try again.');
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

  const resetForm = () => {
    setPaymentStatus(null);
    setCheckoutRequestId(null);
    setPaymentId(null);
    setStatusMessage('');
    setTransactionDetails(null);
    setFormData({ phone: "", amount: "" });
    setErrors({ phone: null, amount: null });
  };

  const isFormValid = !errors.phone && !errors.amount && formData.phone && formData.amount;

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 p-4 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center border border-green-100">
            {/* Success Animation */}
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg animate-pulse">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Success Messages */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Transaction Complete</h2>
            <p className="text-lg font-semibold text-green-600 mb-4">
              Payment Completed Successfully!
            </p>
            
            {/* Transaction Details Card */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border border-green-200">
              <div className="flex items-center justify-center mb-4">
                <Receipt className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Transaction Receipt</h3>
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex justify-between items-center py-2 border-b border-green-200">
                  <span className="text-gray-600 font-medium">Amount:</span>
                  <span className="font-bold text-green-700 text-lg">{formatAmount(transactionDetails?.amount)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-green-200">
                  <span className="text-gray-600 font-medium">Phone:</span>
                  <span className="font-semibold text-gray-800">{formatPhoneNumber(transactionDetails?.phone)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-green-200">
                  <span className="text-gray-600 font-medium">Receipt No:</span>
                  <span className="font-semibold text-gray-800 text-sm">{transactionDetails?.receiptNumber}</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 font-medium">Date & Time:</span>
                  <span className="font-semibold text-gray-800 text-sm">{transactionDetails?.timestamp}</span>
                </div>
              </div>
            </div>

            {/* Success Features */}
            <div className="mb-6">
              <div className="flex justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                  <span>Instant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                  <span>Verified</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button 
              onClick={resetForm}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <ArrowRight className="w-5 h-5" />
              <span>Make Another Payment</span>
            </button>

            {/* Confirmation Message */}
            <p className="text-sm text-gray-500 mt-4">
              Thank you for using our secure payment system!
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'pending') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center border border-blue-100">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              {isCheckingStatus ? (
                <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
              ) : (
                <Clock className="w-10 h-10 text-blue-600" />
              )}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Pending</h2>
            <p className="text-gray-600 mb-4">
              {statusMessage}
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Please complete the payment on your phone. We're checking the status automatically.
            </p>
            
            {checkoutRequestId && (
              <p className="text-xs text-gray-400 mb-4">
                Transaction ID: {checkoutRequestId.slice(-8)}...
              </p>
            )}
            
            <div className="space-y-3 mb-6">
              <button 
                onClick={() => checkPaymentStatus(checkoutRequestId)}
                disabled={isCheckingStatus}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {isCheckingStatus ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Checking Status...</span>
                  </>
                ) : (
                  <>
                    <ArrowRight className="w-5 h-5" />
                    <span>Check Status</span>
                  </>
                )}
              </button>
              
              <button 
                onClick={resetForm}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200"
              >
                Cancel & Go Back
              </button>
            </div>
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
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="0712345678"
                  className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-xl transition-all duration-200 focus:bg-white focus:border-green-500 focus:outline-none ${
                    errors.phone ? 'border-red-300' : 'border-gray-200'
                  }`}
                />
                {formData.phone && !errors.phone && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                )}
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.phone}
                </p>
              )}
              {formData.phone && !errors.phone && (
                <p className="text-green-600 text-sm">
                  ✓ {formatPhoneNumber(formData.phone)}
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
                  type="number"
                  value={formData.amount}
                  onChange={(e) => handleInputChange('amount', e.target.value)}
                  placeholder="100"
                  min="1"
                  max="70000"
                  className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-xl transition-all duration-200 focus:bg-white focus:border-green-500 focus:outline-none ${
                    errors.amount ? 'border-red-300' : 'border-gray-200'
                  }`}
                />
                {formData.amount && !errors.amount && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                )}
              </div>
              {errors.amount && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.amount}
                </p>
              )}
              {formData.amount && !errors.amount && (
                <p className="text-green-600 text-sm font-medium">
                  ✓ {formatAmount(formData.amount)}
                </p>
              )}
            </div>

            {/* Payment Summary */}
            {formData.phone && formData.amount && !errors.phone && !errors.amount && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                <h3 className="font-semibold text-gray-800 mb-2">Payment Summary</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">To:</span>
                    <span className="font-medium">{formatPhoneNumber(formData.phone)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-bold text-green-600">{formatAmount(formData.amount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">EduHive Payment</span>
                  </div>
                </div>
              </div>
            )}

            {/* Error Status */}
            {paymentStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-center text-red-700">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">{statusMessage || 'Payment failed. Please try again.'}</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={onSubmit}
              disabled={isSubmitting || !isFormValid}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                isSubmitting || !isFormValid
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Initiating Payment...</span>
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