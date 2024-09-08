import React, { useState } from "react";
import { useLanguage } from "../LanguageSource";
import useEnterKeyListener from "../utils/useEnterKeyListener";

const FinancialTracker = () => {
  const { currentLanguage, translations } = useLanguage();

  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (description && amount) {
      const newExpense = { description, amount: parseFloat(amount) };
      setExpenses([...expenses, newExpense]);
      setDescription("");
      setAmount("");
    }
  };

  useEnterKeyListener(addExpense, description && amount);

  const deleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const resetExpenses = () => {
    setExpenses([]);
  };

  const getTotalExpenses = () => {
    return expenses
      .reduce((total, expense) => total + expense.amount, 0)
      .toLocaleString("pt-PT", {
        minimumFractionDigits: 2,
      });
  };

  return (
    <div className="container mx-auto p-4 max-w-md font-fira">
      <h1 className="text-4xl font-bold mb-4 text-center pt-20">
        {translations[currentLanguage].financialTracker}
      </h1>

      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">
            {translations[currentLanguage].expenseDescription}
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 block w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-mainBlue"
            placeholder={translations[currentLanguage].nameDescription}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">
            {translations[currentLanguage].amount}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 p-2 block w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:outline-mainBlue"
            placeholder={translations[currentLanguage].enterAmount}
          />
        </div>
        <button
          onClick={addExpense}
          className="w-full bg-mainBlue hover:bg-[#00728A] text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-secondaryBlue"
        >
          {translations[currentLanguage].addExpense}
        </button>
        <button
          onClick={resetExpenses}
          className="w-full mt-4 bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-mainBlue"
        >
          {translations[currentLanguage].clear}
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">
          {translations[currentLanguage].expenses}
        </h2>
        <ul>
          {expenses.map((expense, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-2 border-b"
            >
              <div className="grid-flow-row flex">
                <p>{expense.description}</p>
                <p>
                  &nbsp;= €
                  {expense.amount.toLocaleString("pt-PT", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
              <button
                onClick={() => deleteExpense(index)}
                className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-1 px-2 rounded transition duration-300"
              >
                {translations[currentLanguage].del}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between text-xl font-semibold">
          <p>Total</p>
          <p>€{getTotalExpenses()}</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialTracker;
