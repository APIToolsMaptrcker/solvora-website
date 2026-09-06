const { query } = require('./db');

const ORDERS_TABLE = `
  CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    order_number VARCHAR(20) UNIQUE NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    alternate_phone VARCHAR(20),
    address TEXT NOT NULL,
    district VARCHAR(100) NOT NULL,
    upazila VARCHAR(100) NOT NULL,
    product VARCHAR(255) NOT NULL DEFAULT '5-Panel Foldable Solar Charger',
    color VARCHAR(50) NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    unit_price INTEGER NOT NULL,
    subtotal INTEGER NOT NULL,
    delivery_charge INTEGER NOT NULL DEFAULT 100,
    total_amount INTEGER NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    payment_status VARCHAR(50) NOT NULL DEFAULT 'UNPAID',
    transaction_id VARCHAR(100),
    payment_screenshot TEXT,
    order_status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

const PAYMENT_VERIFICATIONS_TABLE = `
  CREATE TABLE IF NOT EXISTS payment_verifications (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES orders(id),
    verification_status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    verified_by VARCHAR(255),
    verification_date TIMESTAMP,
    rejection_reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

const ADMIN_USERS_TABLE = `
  CREATE TABLE IF NOT EXISTS admin_users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'admin',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

const INDEXES = `
  CREATE INDEX IF NOT EXISTS idx_orders_order_number ON orders(order_number);
  CREATE INDEX IF NOT EXISTS idx_orders_phone ON orders(phone);
  CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON orders(payment_status);
  CREATE INDEX IF NOT EXISTS idx_orders_order_status ON orders(order_status);
  CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);
  CREATE INDEX IF NOT EXISTS idx_payment_verifications_order_id ON payment_verifications(order_id);
`;

async function initializeDatabase() {
  try {
    console.log('Initializing database schema...');
    
    await query(ORDERS_TABLE);
    console.log('✅ Orders table created');
    
    await query(PAYMENT_VERIFICATIONS_TABLE);
    console.log('✅ Payment verifications table created');
    
    await query(ADMIN_USERS_TABLE);
    console.log('✅ Admin users table created');
    
    await query(INDEXES);
    console.log('✅ Indexes created');
    
    console.log('✅ Database initialization complete');
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
  }
}

if (require.main === module) {
  initializeDatabase().then(() => {
    process.exit(0);
  }).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { initializeDatabase };
