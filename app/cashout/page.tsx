"use client";

import InputElement from "@/components/InputElement";
import MainLayout from "@/components/main-layout/MainLayout";
import React, { useState } from "react";

type CashOutResult = {
  message: string;
};

type CashOutFunction = (
  amount: string,
  promoCode: string
) => Promise<CashOutResult>;

interface CashoutProps {
  onCashOut: CashOutFunction;
}
const Cashout: React.FC<CashoutProps> = ({ onCashOut }) => {
  const [amount, setAmount] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      // Call the parent function to handle cash out
      const result = await onCashOut(amount, promoCode);
      setStatus(result.message);
    } catch (error) {
      setStatus("Cash out failed");
    }
  };
  return (
    <MainLayout>
      <div className="w-[80%] lg:w-[30%] mx-auto">
        <h2 className="text-3xl">Cash Out Rewards</h2>
        <form
          onSubmit={handleSubmit}
          className=" border-blue-500 rounded-lg flex flex-col"
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
          <button type="submit" className="text-white-100 bg-blue-100 disabled:bg-blue-50 rounded text-sm py-3 md:py-4 lg:py-2 w-[100%]">Cash Out</button>
          
        </form>
        {status && <p>{status}</p>}
      </div>
    </MainLayout>
  );
};

export default Cashout;
