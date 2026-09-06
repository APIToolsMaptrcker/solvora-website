import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  return (
    <>
      <Head>
        <title>SOLVORA - 5-প্যানেল ফোল্ডেবল সোলার চার্জার</title>
        <meta name="description" content="সর্বোচ্চ মানের সৌর চার্জার - ৫৫% ছাড়ে পাওয়া যাচ্ছে" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="SOLVORA - 5-প্যানেল ফোল্ডেবল সোলার চার্জার" />
        <meta property="og:description" content="সর্বোচ্চ মানের সৌর চার্জার" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-solvora-dark text-solvora-text">
        {/* Navigation */}
        <nav className="bg-solvora-gray border-b border-solvora-green">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-solvora-green">SOLVORA</div>
            <button
              onClick={() => setIsOrderFormOpen(true)}
              className="bg-solvora-green hover:bg-solvora-green-light text-solvora-dark px-6 py-2 rounded font-bold"
            >
              অর্ডার করুন
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-solvora-gray to-solvora-dark py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-4 text-solvora-green">
                  ৫-প্যানেল ফোল্ডেবল সোলার চার্জার
                </h1>
                <p className="text-xl mb-6 text-gray-300">
                  শক্তিশালী, টেকসই এবং পরিবেশবান্ধব সমাধান
                </p>
                <button
                  onClick={() => setIsOrderFormOpen(true)}
                  className="bg-solvora-green hover:bg-solvora-green-light text-solvora-dark px-8 py-3 rounded-lg font-bold text-lg"
                >
                  এখনই অর্ডার করুন
                </button>
              </div>
              <div className="bg-solvora-green-light/10 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">☀️</div>
                  <p className="text-gray-400">পণ্য ছবি এখানে আসবে</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-solvora-dark">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-solvora-green">মূল্য নির্ধারণ</h2>
            <div className="bg-solvora-gray p-8 rounded-lg max-w-md mx-auto">
              <div className="mb-6">
                <p className="text-gray-400 line-through text-lg">আসল মূল্য: ৳ ৪,৫০০</p>
                <p className="text-solvora-green text-4xl font-bold">অফার: ৳ ২,৩৫০</p>
                <p className="text-solvora-green-light text-lg font-bold mt-2">৫৫% ছাড়!</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>ডেলিভারি চার্জ:</span>
                  <span>৳ ১০০</span>
                </div>
                <hr className="border-solvora-green" />
                <div className="flex justify-between font-bold text-lg">
                  <span>মোট:</span>
                  <span>৳ ২,৪৫০</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-solvora-gray">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-solvora-green">বৈশিষ্ট্য</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '⚡', title: 'উচ্চ শক্তি', desc: 'দ্রুত চার্জিং' },
                { icon: '📦', title: 'বহনযোগ্য', desc: 'সহজ বহনযোগ্য' },
                { icon: '♻️', title: 'পরিবেশ বান্ধব', desc: 'পুনর্নবীকরণযোগ্য শক্তি' },
                { icon: '🛡️', title: 'টেকসই', desc: '৫ বছরের ওয়ারেন্টি' },
              ].map((feature, idx) => (
                <div key={idx} className="bg-solvora-dark p-6 rounded-lg text-center hover:bg-solvora-green/10 transition">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-solvora-green">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods Section */}
        <section className="py-16 px-4 bg-solvora-dark">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-solvora-green">পেমেন্ট পদ্ধতি</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { method: 'bKash', number: process.env.NEXT_PUBLIC_BKASH_NUMBER || '01700000000' },
                { method: 'Nagad', number: process.env.NEXT_PUBLIC_NAGAD_NUMBER || '01600000000' },
                { method: 'ডেলিভারি এ পরিশোধ (COD)', number: 'অর্ডার নিশ্চিতকরণের পর' },
              ].map((payment, idx) => (
                <div key={idx} className="bg-solvora-gray p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-bold text-solvora-green mb-3">{payment.method}</h3>
                  <p className="text-gray-300 font-mono">{payment.number}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Order Form Modal */}
        {isOrderFormOpen && (
          <OrderFormModal onClose={() => setIsOrderFormOpen(false)} />
        )}

        {/* Footer */}
        <footer className="bg-solvora-gray py-8 px-4 border-t border-solvora-green">
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <p>© ২০২৪ SOLVORA। সকল অধিকার সংরক্ষিত।</p>
            <p className="mt-2">সহায়তা: {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8801700000000'}</p>
          </div>
        </footer>
      </main>
    </>
  );
}

function OrderFormModal({ onClose }) {
  const [formData, setFormData] = useState({
    customer_name: '',
    phone: '',
    alternate_phone: '',
    address: '',
    district: '',
    upazila: '',
    color: 'Black',
    quantity: '1',
    payment_method: 'bKash',
    transaction_id: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setMessage('✅ ' + data.message);
        setTimeout(() => {
          onClose();
          alert(`আপনার অর্ডার নম্বর: ${data.order.order_number}`);
        }, 1500);
      } else {
        setMessage('❌ ' + Object.values(data.errors || { error: 'ত্রুটি' })[0]);
      }
    } catch (error) {
      setMessage('❌ নেটওয়ার্ক ত্রুটি');
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-solvora-gray rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-solvora-green">অর্ডার ফর্ম</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="customer_name"
            placeholder="আপনার নাম *"
            value={formData.customer_name}
            onChange={handleChange}
            required
            className="w-full bg-solvora-dark text-white p-3 rounded border border-solvora-green focus:outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="ফোন নম্বর (01....) *"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-solvora-dark text-white p-3 rounded border border-solvora-green focus:outline-none"
          />
          <input
            type="text"
            name="alternate_phone"
            placeholder="বিকল্প ফোন নম্বর"
            value={formData.alternate_phone}
            onChange={handleChange}
            className="w-full bg-solvora-dark text-white p-3 rounded border border-solvora-green focus:outline-none"
          />
          <textarea
            name="address"
            placeholder="সম্পূর্ণ ঠিকানা *"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full bg-solvora-dark text-white p-3 rounded border border-solvora-green focus:outline-none"
            rows="3"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="district"
              placeholder="জেলা *"
              value={formData.district}
              onChange={handleChange}
              required
              className="bg-solvora-dark text-white p-3 rounded border border-solvora-green focus:outline-none"
            />
            <input
              type="text"
              name="upazila"
              placeholder="উপজেলা *"
              value={formData.upazila}
              onChange={handleChange}
              required
              className="bg-solvora-dark text-white p-3 rounded border border-solvora-green focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <select
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="bg-solvora-dark text-white p-3 rounded border border-solvora-green focus:outline-none"
            >
              <option>Black</option>
              <option>Camouflage Green</option>
              <option>Navy Blue</option>
            </select>
            <input
              type="number"
              name="quantity"
              placeholder="পরিমাণ"
              min="1"
              max="100"
              value={formData.quantity}
              onChange={handleChange}
              className="bg-solvora-dark text-white p-3 rounded border border-solvora-green focus:outline-none"
            />
          </div>
          <select
            name="payment_method"
            value={formData.payment_method}
            onChange={handleChange}
            className="w-full bg-solvora-dark text-white p-3 rounded border border-solvora-green focus:outline-none"
          >
            <option>bKash</option>
            <option>Nagad</option>
            <option>COD</option>
          </select>
          {formData.payment_method !== 'COD' && (
            <input
              type="text"
              name="transaction_id"
              placeholder="লেনদেন নম্বর (Txn ID) *"
              value={formData.transaction_id}
              onChange={handleChange}
              required={formData.payment_method !== 'COD'}
              className="w-full bg-solvora-dark text-white p-3 rounded border border-solvora-green focus:outline-none"
            />
          )}
          <textarea
            name="notes"
            placeholder="অতিরিক্ত মন্তব্য"
            value={formData.notes}
            onChange={handleChange}
            className="w-full bg-solvora-dark text-white p-3 rounded border border-solvora-green focus:outline-none"
            rows="2"
          />

          {message && (
            <div className={`p-3 rounded text-center ${message.startsWith('✅') ? 'bg-green-900 text-green-100' : 'bg-red-900 text-red-100'}`}>
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-solvora-green hover:bg-solvora-green-light text-solvora-dark p-3 rounded font-bold text-lg disabled:opacity-50"
          >
            {loading ? 'অপেক্ষা করুন...' : 'অর্ডার জমা দিন'}
          </button>
        </form>
      </div>
    </div>
  );
}
