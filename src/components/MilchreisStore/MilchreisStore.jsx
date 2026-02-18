import React, { useState } from "react";
import { ShoppingBag, ShoppingCart, ArrowRight, Info } from "lucide-react";
import BowlsPlain from "../../assets/ricepudding-thumbnail-plain.png";
import Bowls1 from "../../assets/ricepudding-thumbnail-1.png";
import Bowls2 from "../../assets/ricepudding-thumbnail-2.png";
import BowlsFruits from "../../assets/ricepudding-thumbnail-fruits.png";

// Custom Colors based on your palette
const colors = {
  navbar: "bg-[#C88147]",
  cream: "bg-[#FAF9F3]",
  gold: "text-[#d4af37]",
  terracotta: "bg-[#C88147]",
  peach: "bg-[#F2C8B5]",
};

const sizes = [
  { id: "small", label: "Small (8oz)", basePrice: 6.0 },
  { id: "medium", label: "Medium (12oz)", basePrice: 9.0 },
  { id: "large", label: "Large (16oz)", basePrice: 12.0 },
];

const MilchreisStore = () => {
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState("catalog"); // catalog, cart, checkout, confirmation
  const [orderDetail, setOrderDetail] = useState(null);
  const [selectedSize, setSelectedSize] = useState(sizes[1]); // Default to Medium

  const products = [
    {
      id: 1,
      name: "The Purist",
      description:
        "Our signature creamy rice pudding, slow-cooked to perfection. Pure, unadulterated comfort.",
      markupPercentage: 0,
      image: BowlsPlain,
      tag: "Classic",
    },
    {
      id: 2,
      name: "Cinnamon Dust",
      description:
        "Warm and aromatic. The classic base dusted generously with premium Ceylon cinnamon.",
      markupPercentage: 0.08,
      image: Bowls1,
      tag: "Popular",
    },
    {
      id: 3,
      name: "Royal Pistachio",
      description:
        "A crunchy delight featuring crushed roasted pistachios and chew dried apricots.",
      markupPercentage: 0.17,
      image: Bowls2,
      tag: "Premium",
    },
    {
      id: 4,
      name: "Berry Bliss",
      description:
        "Fresh seasonal strawberries, blueberries, and raspberries for a tart, refreshing contrast.",
      markupPercentage: 0.25,
      image: BowlsFruits,
      tag: "Seasonal",
    },
  ];

  // Helper to calculate price based on size + markup
  const calculatePrice = (markup) => {
    const price = selectedSize.basePrice * (1 + markup);
    return price.toFixed(2);
  };

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
      items: cart,
      total_price: cart.reduce(
        (sum, item) => sum + calculatePrice(item.markupPercentage) * item.qty,
        0,
      ),
      status: "pending",
      customer_name: "test1",
      additional_instructions: "add instr.",
    };

    // Logic to connect to your NestJS/Supabase API
    debugger;
    try {
      const response = await fetch("http://[::1]:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // <--- THIS IS CRITICAL
        },
        body: JSON.stringify(orderData), // Do NOT set headers; the browser will set multipart/form-data automatically
      });

      if (response.ok) {
        // setStatus("success");
        debugger;
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

      <main className=" mx-auto p-6">
        {/* Product Catalog */}
        {step === "catalog" && (
          <div>
            <button
              onClick={() => setStep("cart")}
              className="fixed bottom-6 right-6 z-50 flex items-center justify-center 
                 w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg 
                 hover:bg-blue-700 active:scale-95 transition-all duration-200
                 md:bottom-10 md:right-10"
              aria-label="View Shopping Cart"
            >
              {/* Shopping Cart Icon */}
              <ShoppingCart size={28} />

              {/* Item Count Badge */}
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center 
                         rounded-full bg-red-500 text-xs font-bold text-white border-2 border-white"
                >
                  {cart.length}
                </span>
              )}
            </button>
            <div className="py-16 md:py-24 px-4 text-center">
              <h2 className="text-4xl md:text-6xl font-serif text-[#C88147] mb-4">
                Simple. Sweet. Sublime.
              </h2>
              <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10">
                Handcrafted all-natural rice pudding. Choose your size, pick
                your topping, and taste the nostalgia.
              </p>

              {/* --- Size Selector --- */}
              <div className="inline-flex bg-white p-1 rounded-full shadow-lg border border-[#F2C8B5]">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                      selectedSize.id === size.id
                        ? "bg-[#C88147] text-white shadow-md"
                        : "text-stone-500 hover:text-[#C88147]"
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* PRoducts sect new  */}
            <div className="max-w-7xl mx-auto px-4 pb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-[#F2C8B5] flex flex-col"
                  >
                    {/* Image Area */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#F2C8B5]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Floating Tag */}
                      <div className="absolute top-4 right-4 bg-[#FAF9F3] text-[#C88147] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {product.tag}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-serif font-bold text-[#C88147]">
                          {product.name}
                        </h3>
                        <span className="text-lg font-bold text-[#d4af37]">
                          ${calculatePrice(product.markupPercentage)}
                        </span>
                      </div>

                      <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">
                        {product.description}
                      </p>

                      {/* Actions */}
                      <div className="space-y-3">
                        <button
                          onClick={() => addToCart(product)}
                          className="w-full py-3 bg-[#C88147] text-[#FAF9F3] font-medium rounded-xl hover:bg-[#d4af37] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                        >
                          Order Now
                          <ArrowRight size={16} />
                        </button>

                        <button className="w-full py-2 text-[#C88147] text-sm font-medium hover:text-[#d4af37] transition-colors flex items-center justify-center gap-1 opacity-80 hover:opacity-100 group/link">
                          Know more
                          <Info
                            size={14}
                            className="group-hover/link:translate-x-0.5 transition-transform"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* end new secion */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      ${calculatePrice(product.markupPercentage)}
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
            </div> */}
          </div>
        )}

        {/* Shopping Cart & Preview */}
        {step === "cart" && (
          <form onSubmit={handleCheckout()} className="space-y-4">
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
                    $
                    {(calculatePrice(item.markupPercentage) * item.qty).toFixed(
                      2,
                    )}
                  </p>
                </div>
              ))}
              <div className="mt-8">
                <div className="flex justify-between text-xl font-bold border-t-2 pt-4">
                  <span>Total Due:</span>
                  <span>
                    $
                    {cart
                      .reduce(
                        (s, i) =>
                          s + calculatePrice(i.markupPercentage) * i.qty,
                        0,
                      )
                      .toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => setStep("confirmation")}
                  className="w-full mt-6 bg-[#d4af37] text-white py-4 rounded-xl font-bold text-lg"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </form>
        )}

        {/* */}
        {/* {step === "checkout" && (
          <form onSubmit={handleCheckout()} className="space-y-4"> */}
        {/* Contact Section */}

        {/* <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200 shadow-md"
            >
              Submit Payment
            </button>
          </form> */}
        {/* )} */}
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
