import { query } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get statistics
    const totalOrders = await query('SELECT COUNT(*) as count FROM orders');
    const totalRevenue = await query('SELECT SUM(total_amount) as total FROM orders WHERE payment_status = $1', ['PAID']);
    const pendingOrders = await query('SELECT COUNT(*) as count FROM orders WHERE order_status = $1', ['PENDING']);
    const unpaidOrders = await query('SELECT COUNT(*) as count FROM orders WHERE payment_status = $1', ['UNPAID']);

    // Get recent orders
    const recentOrders = await query(
      `SELECT id, order_number, customer_name, phone, total_amount, payment_status, order_status, created_at 
       FROM orders ORDER BY created_at DESC LIMIT 10`
    );

    res.status(200).json({
      statistics: {
        total_orders: totalOrders.rows[0].count,
        total_revenue: totalRevenue.rows[0].total || 0,
        pending_orders: pendingOrders.rows[0].count,
        unpaid_orders: unpaidOrders.rows[0].count,
      },
      recent_orders: recentOrders.rows,
    });
  } catch (error) {
    console.error('Admin dashboard error:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
}
