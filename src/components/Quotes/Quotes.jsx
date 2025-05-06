import React, { useEffect, useState } from "react";
import "./Quotes.css"; // Keep your styles here

const QuoteBox = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        const freshQuote = `${data.quote} — ${data.author}`;
        setQuote(freshQuote);
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
