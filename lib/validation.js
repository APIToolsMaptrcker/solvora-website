// Bangladesh phone number validation
export function validatePhoneNumber(phone) {
  if (!phone) return false;
  
  // Remove spaces and dashes
  const cleaned = phone.replace(/[\s-]/g, '');
  
  // Bangladesh phone numbers: 11 digits starting with 01
  if (!/^01\d{9}$/.test(cleaned)) return false;
  
  return true;
}

// Validate email
export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validate order form data
export function validateOrderData(data) {
  const errors = {};
  
  if (!data.customer_name || data.customer_name.trim().length < 2) {
    errors.customer_name = 'প্রকৃত নাম প্রয়োজন';
  }
  
  if (!validatePhoneNumber(data.phone)) {
    errors.phone = 'বৈধ বাংলাদেশ ফোন নম্বর প্রয়োজন';
  }
  
  if (data.alternate_phone && !validatePhoneNumber(data.alternate_phone)) {
    errors.alternate_phone = 'বৈধ বাংলাদেশ ফোন নম্বর প্রয়োজন';
  }
  
  if (!data.address || data.address.trim().length < 5) {
    errors.address = 'সম্পূর্ণ ঠিকানা প্রয়োজন';
  }
  
  if (!data.district || data.district.trim().length < 2) {
    errors.district = 'জেলা নির্বাচন করুন';
  }
  
  if (!data.upazila || data.upazila.trim().length < 2) {
    errors.upazila = 'উপজেলা নির্বাচন করুন';
  }
  
  if (!data.color || !['Black', 'Camouflage Green', 'Navy Blue'].includes(data.color)) {
    errors.color = 'রঙ নির্বাচন করুন';
  }
  
  const quantity = parseInt(data.quantity);
  if (!quantity || quantity < 1 || quantity > 100) {
    errors.quantity = 'পরিমাণ 1-100 এর মধ্যে হতে হবে';
  }
  
  if (!data.payment_method || !['bKash', 'Nagad', 'COD'].includes(data.payment_method)) {
    errors.payment_method = 'পেমেন্ট পদ্ধতি নির্বাচন করুন';
  }
  
  if (data.payment_method !== 'COD' && !data.transaction_id) {
    errors.transaction_id = 'লেনদেন নম্বর প্রয়োজন';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// Generate order number
export function generateOrderNumber() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `SOLVORA-${timestamp}${random}`.slice(0, 20);
}

// Format price
export function formatPrice(price) {
  return new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
  }).format(price);
}

// Sanitize input
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input
    .replace(/[<>]/g, '')
    .trim()
    .substring(0, 1000);
}

// Clean phone number
export function cleanPhoneNumber(phone) {
  return phone.replace(/[\s-]/g, '').trim();
}
