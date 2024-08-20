"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const quantityParam = searchParams.get('quantity');
    if (quantityParam) {
      const parsedQuantity = parseInt(quantityParam, 10);
      if (!isNaN(parsedQuantity)) {
        setQuantity(parsedQuantity);
      }
    }
  }, [searchParams]);

  const handleCheckout = async () => {
    const userId = 'REPLACE_WITH_ACTUAL_USER_ID'; // Fetch or set dynamically
    const productId = 'REPLACE_WITH_ACTUAL_PRODUCT_ID'; // Fetch or set dynamically
  
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        items: [{ productId, quantity }],
        totalAmount: 120 * quantity,
      }),
    });
  
    if (res.ok) {
      console.log('Checkout successful');
    } else {
      console.error('Checkout failed');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 m-10 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="px-4 py-6 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">
            Quantity: {quantity}
          </p>
          <p>Total Payment: {120 * quantity}</p>
          <div className="mt-8">
            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
