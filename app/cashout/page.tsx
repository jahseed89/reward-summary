"use client";


import InputElement from "@/components/InputElement";
import MainLayout from "@/components/main-layout/MainLayout";
import React, { useState } from "react";

const Cashout: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [status, setStatus] = useState("");

  const handleCashOut = (amount: string, promoCode: string) => {
    const numericAmount = parseFloat(amount);

    // Validate amount
    if (!numericAmount || numericAmount <= 0) {
      return { message: "Please enter a valid amount." };
    }

    // Check if the amount is less than 10,000
    if (numericAmount < 10000) {
      return { message: "Cash out failed...!" };
    }

    // Apply promo code or direct cash-out logic
    if (promoCode) {
      // Simulate promo code application logic
      if (promoCode === "DISCOUNT50") {
        return { message: "Promo code applied! Cash out successful with discount." };
      } else {
        return { message: "Invalid promo code. Cash out failed." };
      }
    } else {
      // Direct cash-out logic
      return { message: "Cash out successful!" };
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const result = handleCashOut(amount, promoCode);
    setStatus(result.message);
  };

  return (
    <MainLayout>
      <div className="w-[80%] lg:w-[30%] mx-auto">
        <h2 className="text-3xl">Cash Out Rewards</h2>
        <form
          onSubmit={handleSubmit}
          className="border-blue-500 rounded-lg flex flex-col"
        >
          <InputElement
            type="number"
            value={amount}
            handleChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            required
          />
          <InputElement
            type="text"
            value={promoCode}
            handleChange={(e) => setPromoCode(e.target.value)}
            placeholder="Promo Code (optional)"
            required={false}
          />
          <button
            type="submit"
            className="text-white-100 bg-blue-100 disabled:bg-blue-50 rounded text-sm py-3 md:py-4 lg:py-2 w-[100%]"
          >
            Cash Out
          </button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </MainLayout>
  );
};

export default Cashout;
