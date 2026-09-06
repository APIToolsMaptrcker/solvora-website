# SOLVORA - 5-প্যানেল ফোল্ডেবল সোলার চার্জার

একটি আধুনিক ই-কমার্স প্ল্যাটফর্ম যা SOLVORA সোলার চার্জার পণ্য বিক্রয়ের জন্য ডিজাইন করা হয়েছে।

## বৈশিষ্ট্য

✨ **ফ্রন্টএন্ড:**
- React + Next.js ভিত্তিক আধুনিক ইউজার ইন্টারফেস
- Tailwind CSS দিয়ে সম্পূর্ণ রেসপন্সিভ ডিজাইন
- বাংলা ভাষা সমর্থন সহ সম্পূর্ণ লোকালাইজেশন
- মোবাইল-ফার্স্ট অ্যাপ্রোচ

📊 **ব্যাকএন্ড:**
- Node.js + Next.js API Routes
- PostgreSQL ডাটাবেস
- শক্তিশালী ডাটা ভ্যালিডেশন
- প্রোডাক্ট ম্যানেজমেন্ট সিস্টেম

💳 **পেমেন্ট:**
- bKash সাপোর্ট
- Nagad সাপোর্ট
- ক্যাশ অন ডেলিভারি (COD)
- ট্রানজেকশন ট্র্যাকিং

🛠️ **অর্ডার ম্যানেজমেন্ট:**
- অর্ডার ট্র্যাকিং সিস্টেম
- অর্ডার নম্বর জেনারেশন
- ডেলিভারি এড্রেস ম্যানেজমেন্ট

## প্রযুক্তি স্ট্যাক

- **Frontend:** React 18, Next.js 14, Tailwind CSS
- **Backend:** Node.js, Next.js API Routes
- **Database:** PostgreSQL
- **Language:** JavaScript (ES6+)
- **UI Components:** Custom React Components

## প্রজেক্ট স্ট্রাকচার

```
solvora-website/
├── pages/
│   ├── index.js              # হোম পেজ
│   ├── _app.js              # Next.js অ্যাপ কনফিগারেশন
│   └── api/
│       ├── health.js        # স্বাস্থ্য পরীক্ষা এন্ডপয়েন্ট
│       ├── orders.js        # অর্ডার তৈরির API
│       └── admin/
│           └── dashboard.js # অ্যাডমিন ড্যাশবোর্ড
├── lib/
│   ├── db.js               # ডাটাবেস কানেকশন
│   ├── schema.js           # ডাটাবেস স্কিমা
│   └── validation.js       # ভ্যালিডেশন ফাংশন
├── styles/
│   └── globals.css         # গ্লোবাল স্টাইল
├── tailwind.config.js      # Tailwind কনফিগারেশন
├── postcss.config.js       # PostCSS কনফিগারেশন
└── .env.example            # পরিবেশ ভ্যারিয়েবল টেমপ্লেট
```

## ইনস্টলেশন

### প্রয়োজনীয় সফটওয়্যার
- Node.js (v16 বা উপরে)
- PostgreSQL (v12 বা উপরে)
- npm বা yarn

### ধাপে ধাপে ইনস্টলেশন

1. **রিপোজিটরি ক্লোন করুন:**
```bash
git clone https://github.com/APIToolsMaptrcker/solvora-website.git
cd solvora-website
```

2. **নির্ভরতা ইনস্টল করুন:**
```bash
npm install
```

3. **পরিবেশ ভ্যারিয়েবল কনফিগার করুন:**
```bash
cp .env.example .env.local
```

4. **`.env.local` এ আপনার ডাটাবেস এবং পেমেন্ট তথ্য যোগ করুন:**
```dotenv
DATABASE_URL=postgresql://user:password@localhost:5432/solvora
NEXT_PUBLIC_BKASH_NUMBER=আপনার_বকাশ_নম্বর
NEXT_PUBLIC_NAGAD_NUMBER=আপনার_নগদ_নম্বর
```

5. **ডাটাবেস সেটআপ করুন:**
```bash
node -e "const schema = require('./lib/schema'); schema.initDatabase();"
```

6. **ডেভেলপমেন্ট সার্ভার চালু করুন:**
```bash
npm run dev
```

7. **ব্রাউজারে খুলুন:**
```
http://localhost:3000
```

## API এন্ডপয়েন্ট

### 1. হেলথ চেক
```
GET /api/health
Response: { status: 'ok', timestamp: '...' }
```

### 2. অর্ডার তৈরি করুন
```
POST /api/orders
Body: {
  customer_name: string (required),
  phone: string (required),
  alternate_phone: string,
  address: string (required),
  district: string (required),
  upazila: string (required),
  color: string,
  quantity: number,
  payment_method: 'bKash' | 'Nagad' | 'COD',
  transaction_id: string (if payment_method !== 'COD'),
  notes: string
}
Response: { success: true, order: {...} }
```

### 3. অ্যাডমিন ড্যাশবোর্ড
```
GET /api/admin/dashboard
Response: {
  totalOrders: number,
  totalRevenue: number,
  pendingOrders: number,
  completedOrders: number
}
```

## পণ্য কনফিগারেশন

`.env.local` ফাইলে পণ্য মূল্য এবং তথ্য পরিবর্তন করুন:

```dotenv
PRODUCT_PRICE_ORIGINAL=4500      # আসল মূল্য
PRODUCT_PRICE_OFFER=2350         # অফার মূল্য
PRODUCT_DELIVERY_CHARGE=100       # ডেলিভারি চার্জ
```

## পেমেন্ট পদ্ধতি

### bKash Personal Account
```dotenv
NEXT_PUBLIC_BKASH_NUMBER=01700000000
```

### Nagad Personal Account
```dotenv
NEXT_PUBLIC_NAGAD_NUMBER=01600000000
```

### ক্যাশ অন ডেলিভারি (COD)
কোনো কনফিগারেশনের প্রয়োজন নেই।

## ডাটাবেস স্কিমা

### orders টেবিল
```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  order_number VARCHAR(50) UNIQUE NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  alternate_phone VARCHAR(20),
  address TEXT NOT NULL,
  district VARCHAR(100) NOT NULL,
  upazila VARCHAR(100) NOT NULL,
  color VARCHAR(50),
  quantity INTEGER DEFAULT 1,
  price DECIMAL(10, 2) NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  transaction_id VARCHAR(100),
  payment_status VARCHAR(50) DEFAULT 'pending',
  delivery_status VARCHAR(50) DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## উন্নয়ন গাইড

### নতুন পেজ যোগ করুন
```javascript
// pages/new-page.js
export default function NewPage() {
  return (
    <div className="min-h-screen bg-solvora-dark text-solvora-text">
      {/* আপনার কন্টেন্ট এখানে */}
    </div>
  );
}
```

### নতুন API এন্ডপয়েন্ট যোগ করুন
```javascript
// pages/api/new-endpoint.js
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // আপনার লজিক এখানে
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
```

## ডেপ্লয়মেন্ট

### Vercel এ ডেপ্লয় করুন

1. Vercel এ আপনার অ্যাকাউন্ট তৈরি করুন (vercel.com)
2. আপনার GitHub রিপোজিটরি সংযুক্ত করুন
3. পরিবেশ ভ্যারিয়েবল সেট করুন
4. ডিপ্লয় বোতাম ক্লিক করুন

## সাপোর্ট এবং যোগাযোগ

- **ফোন:** +880 1700000000
- **WhatsApp:** 880 1700000000
- **Email:** support@solvora.com

## লাইসেন্স

এই প্রজেক্ট প্রাইভেট এবং শুধুমাত্র SOLVORA ব্যবসার জন্য ব্যবহার করা যায়।

## অবদানকারী

- APIToolsMaptrcker (প্রধান ডেভেলপার)

---

**সংস্করণ:** 1.0.0  
**সর্বশেষ আপডেট:** ২০২৬ সেপ্টেম্বর
