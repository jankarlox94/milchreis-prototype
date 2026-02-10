import React, { useState } from "react";

// Custom Colors based on your palette
const colors = {
  navbar: "bg-[#C88147]",
  cream: "bg-[#FAF9F3]",
  gold: "text-[#d4af37]",
  terracotta: "bg-[#C88147]",
  peach: "bg-[#F2C8B5]",
};

const MilchreisStore = () => {
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState("catalog"); // catalog, cart, checkout, confirmation
  const [orderDetail, setOrderDetail] = useState(null);

  const products = [
    {
      id: 1,
      name: "Original 1600s Recipe",
      price: 6.5,
      description: "The authentic European classic.",
    },
    {
      id: 2,
      name: "Cinnamon Dust Milchreis",
      price: 7.0,
      description: "Topped with premium Ceylon cinnamon.",
    },
    {
      id: 3,
      name: "Fresh Berry Compote",
      price: 8.5,
      description: "Summer berries meet creamy rice.",
    },
  ];

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleCheckout = async () => {
    const orderData = {
      order_number: Math.random().toString(36).substring(7).toUpperCase(),
      items: cart,
      total_price: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
      status: "pending",
      customer_name: "test1",
    };

    // Logic to connect to your NestJS/Supabase API
    try {
      const response = await fetch("http://[::1]:3000/orders", {
        method: "POST",
        body: orderData, // Do NOT set headers; the browser will set multipart/form-data automatically
      });

      if (response.ok) {
        // setStatus("success");
        setOrderDetail(orderData);
        setCart([]);
        setStep("confirmation");
      } else {
        // setStatus("error");
      }
    } catch (error) {
      debugger;
      console.log("Error:", error);
      //   setStatus("error");
    }
    // await fetch('your-nestjs-api/orders', { method: 'POST', body: JSON.stringify(orderData) });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F3] font-sans">
      {/* Navbar */}
      <nav
        className={`${colors.navbar} p-4 text-white flex justify-between items-center shadow-lg`}
      >
        <h1 className="text-2xl font-bold tracking-tight">Orders platform</h1>
        <button onClick={() => setStep("cart")} className="relative p-2">
          🛒{" "}
          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full text-xs px-1">
            {cart.length}
          </span>
        </button>
      </nav>

      <main className="max-w-4xl mx-auto p-6">
        {/* Product Catalog */}
        {step === "catalog" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border-2 border-[#F2C8B5] p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-[#C88147]">
                    {product.name}
                  </h3>
                  <span className="font-mono font-bold text-[#d4af37]">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 my-4 text-sm">
                  {product.description}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className={`${colors.terracotta} w-full text-white py-2 rounded-lg font-bold hover:opacity-90 transition`}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Shopping Cart & Preview */}
        {step === "cart" && (
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#F2C8B5]">
            <h2 className="text-2xl font-bold mb-6 text-[#C88147]">
              Your Selection
            </h2>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-xs text-gray-400">Qty: {item.qty}</p>
                </div>
                <p className="font-bold text-[#d4af37]">
                  ${(item.price * item.qty).toFixed(2)}
                </p>
              </div>
            ))}
            <div className="mt-8">
              <div className="flex justify-between text-xl font-bold border-t-2 pt-4">
                <span>Total Due:</span>
                <span>
                  ${cart.reduce((s, i) => s + i.price * i.qty, 0).toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => setStep("checkout")}
                className="w-full mt-6 bg-[#d4af37] text-white py-4 rounded-xl font-bold text-lg"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        )}

        {/*  */}
        {step === "checkout" && (
          <form onSubmit={handleCheckout()} className="space-y-4">
            {/* Contact Section */}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200 shadow-md"
            >
              Submit Payment
            </button>
          </form>
        )}
        {/*  */}

        {/* Checkout & Confirmation */}
        {step === "confirmation" && orderDetail && (
          <div className="text-center bg-white p-12 rounded-3xl border-4 border-[#C88147] shadow-2xl">
            <div className="text-6xl mb-4">🥣</div>
            <h2 className="text-3xl font-black text-[#C88147] mb-2">
              ORDER CONFIRMED!
            </h2>
            <p className="text-gray-500 mb-6">
              We are preparing your fresh Milchreis now.
            </p>

            <div className="bg-[#F2C8B5] p-6 rounded-2xl mb-6">
              <p className="text-xs uppercase tracking-widest font-bold">
                Your Pickup Number
              </p>
              <p className="text-5xl font-mono font-black text-[#C88147]">
                {orderDetail.orderNumber}
              </p>
            </div>

            <div className="text-left text-sm text-gray-600 space-y-2 border-t pt-4">
              <p>
                <strong>Pickup Stand:</strong> MilchReis Pudding OKC
              </p>
              <p>
                <strong>Estimated Ready:</strong> 15-20 mins
              </p>
            </div>

            <button
              onClick={() => setStep("catalog")}
              className="mt-8 text-[#C88147] font-bold underline"
            >
              Back to Store
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default MilchreisStore;
