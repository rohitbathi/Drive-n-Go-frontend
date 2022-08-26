import { React } from "react";
import { useNavigate } from "react-router-dom";

export function Bookride(props) {
  const navigate = useNavigate();

  const bookHandler = (e) => {
    e.preventDefault();
    const hours = document.getElementById("noOfHours").value;
    const price = localStorage.getItem("Balance") - (15 + (hours - 1) * 5);
    localStorage.setItem("Balance", price);
    navigate("/confirm");
  };

  return (
    <form method="post" className="form-card">
      <h4>Book a Ride</h4>
      <input
        type="number"
        name="cycleId"
        id="cycleId"
        placeholder="Cycle ID [20220001]"
      />
      <input
        type="number"
        name="noOfHours"
        id="noOfHours"
        placeholder="Number of hours"
      />
      <button type="submit" onClick={bookHandler}>
        Ride Now
      </button>
    </form>
  );
}
