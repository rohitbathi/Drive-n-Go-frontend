import { React, useState } from "react";

export function Wallet(props) {
  const [balance, setBalance] = useState(100);

  const addMoneyHandler = (e) => {
    e.preventDefault();
    const addAmount = document.getElementById("addMoney").value;
    setBalance(parseInt(balance) + parseInt(addAmount));
    localStorage.setItem("Balance", parseInt(balance) + parseInt(addAmount));
  };

  return (
    <div className="form-card">
      <h4>Remaining Balance</h4>
      <p id="userBalance">{localStorage.getItem("Balance")}</p>
      <input
        type="number"
        name="addMoney"
        id="addMoney"
        placeholder="Enter money to add"
      />
      <br />
      <button type="submit" onClick={addMoneyHandler}>
        Add
      </button>
    </div>
  );
}
