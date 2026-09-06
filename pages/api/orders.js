import { query } from '../../lib/db';
import { validateOrderData, generateOrderNumber, cleanPhoneNumber, sanitizeInput } from '../../lib/validation';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate input
    const validation = validateOrderData(req.body);
    if (!validation.isValid) {
      return res.status(400).json({ 
        success: false, 
        errors: validation.errors 
      });
    }

    const {
      customer_name,
      phone,
      alternate_phone,
      address,
      district,
      upazila,
      color,
      quantity,
      payment_method,
      transaction_id,
      payment_screenshot,
      notes,
    } = req.body;

    // Calculate prices
    const unitPrice = parseInt(process.env.PRODUCT_PRICE_OFFER || 2350);
    const deliveryCharge = parseInt(process.env.PRODUCT_DELIVERY_CHARGE || 100);
    const subtotal = unitPrice * parseInt(quantity);
    const totalAmount = subtotal + deliveryCharge;

    // Generate order number
    const orderNumber = generateOrderNumber();

    // Insert order
    const result = await query(
      `INSERT INTO orders (
        order_number, customer_name, phone, alternate_phone, address,
        district, upazila, color, quantity, unit_price, subtotal,
        delivery_charge, total_amount, payment_method, transaction_id,
        payment_screenshot, notes, payment_status, order_status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
      RETURNING *`,
      [
        orderNumber,
        sanitizeInput(customer_name),
        cleanPhoneNumber(phone),
        alternate_phone ? cleanPhoneNumber(alternate_phone) : null,
        sanitizeInput(address),
        sanitizeInput(district),
        sanitizeInput(upazila),
        color,
        parseInt(quantity),
        unitPrice,
        subtotal,
        deliveryCharge,
        totalAmount,
        payment_method,
        sanitizeInput(transaction_id || ''),
        payment_screenshot || null,
        sanitizeInput(notes || ''),
        payment_method === 'COD' ? 'PENDING' : 'UNPAID',
        'PENDING',
      ]
    );

    const order = result.rows[0];

    res.status(201).json({
      success: true,
      message: 'অর্ডার সফলভাবে তৈরি হয়েছে',
      order: {
        id: order.id,
        order_number: order.order_number,
        total_amount: order.total_amount,
        payment_method: order.payment_method,
        status: order.order_status,
      },
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({
      success: false,
      error: 'অর্ডার তৈরিতে ত্রুটি হয়েছে',
    });
  }
}
