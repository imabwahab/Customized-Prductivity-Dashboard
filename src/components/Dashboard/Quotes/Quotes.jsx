import React, { useEffect, useState } from "react";
import "./Quotes.css"; 
const QuoteBox = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://zenquotes.io/api/today")
      .then((res) => res.json())
      .then((data) => {
        const dailyQuote = `${data[0].q} — ${data[0].a}`;
        setQuote(dailyQuote);
      })
      .catch((err) => {
        console.error("Error fetching quote:", err);
        setQuote("Push yourself, because no one else is going to do it for you.");
      });
  }, []);

  return (
    <div className="quote-box">
      <p style={{ fontStyle: "italic", lineHeight: "1.6" }}>
        "{quote}"
      </p>
    </div>
  );
};

export default QuoteBox;
