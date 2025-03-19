import React, { useState, useEffect } from 'react';
import "../styles/Countdown.css"; // Importiere die CSS-Datei für den Countdown

// Countdown-Komponente, die einen Countdown-Timer anzeigt
const Countdown = ({ onCountdownEnd }) => {
  // Setze den Countdown-Wert direkt auf 3 Sekunden
  const [countdown, setCountdown] = useState(3); // Countdown auf 3 Sekunden setzen

  // useEffect-Hook, um den Countdown zu starten und zu verwalten
  useEffect(() => {
    if (countdown > 0) {
      // Intervall, das jede Sekunde den Countdown-Wert um 1 reduziert
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      // Aufräumfunktion, um das Intervall zu löschen, wenn der Effekt neu ausgeführt wird oder die Komponente unmontiert wird
      return () => clearInterval(countdownInterval);
    } else {
      // Callback-Funktion aufrufen, wenn der Countdown endet
      onCountdownEnd();
    }
  }, [countdown, onCountdownEnd]);

  // Berechne den Blur-Wert basierend auf dem Countdown-Wert
  const blurValue = (countdown / 3) * 10; // Für 3 Sekunden
  const opacityValue = countdown / 3; // Für 3 Sekunden

  return (
    <div className="countdown-container">
      <div className="countdown-background" style={{ backdropFilter: `blur(${blurValue}px)` }}></div>
      <div className="countdown-card" style={{ opacity: opacityValue }}>
        <div className="countdown">Countdown: {countdown}</div>
      </div>
    </div>
  );
};

export default Countdown;
