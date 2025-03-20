import React from 'react';
import '../styles/ProgressBar.css'; 

// Funktion zur Interpolation der Farbe basierend auf dem Fortschritt
const interpolateColor = (progress) => {
  const startColor = [118, 199, 192]; // Türkis
  const midColor = [33, 150, 243]; // Blau
  const endColor = [76, 175, 80]; // Grün

  let color;
  if (progress < 50) {
    // Interpolation zwischen Türkis und Blau
    const ratio = progress / 50;
    color = startColor.map((start, i) => Math.round(start + ratio * (midColor[i] - start)));
  } else {
    // Interpolation zwischen Blau und Grün
    const ratio = (progress - 50) / 50;
    color = midColor.map((mid, i) => Math.round(mid + ratio * (endColor[i] - mid)));
  }

  return `rgb(${color.join(',')})`;
};

// ProgressBar-Komponente, die den Fortschritt des Spiels anzeigt
const ProgressBar = ({ progress }) => {
  // Bestimme die Farbe basierend auf dem Fortschritt
  const progressColor = interpolateColor(Math.min(progress, 100));

  let icons = '';
  let displayProgress = Math.round(progress); 

  if (progress > 100) {
    icons = '⭐⭐⭐'; // Drei Sterne
    displayProgress = 'Nanana, es gibt nicht mehr als 100'; // Text für Überperforming
  } else if (progress >= 100) {
    icons = '⭐⭐⭐'; // Drei Sterne
    displayProgress = 100; // Zeige 100% an
  } else if (progress >= 66) {
    icons = '⭐⭐'; // Zwei Sterne
  } else if (progress >= 33) {
    icons = '⭐'; // Ein Stern
  }

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${Math.min(progress, 100)}%`, backgroundColor: progressColor }}>
        <span className="progress-text">{displayProgress}%</span>
        {icons && <span className="progress-icon">{icons}</span>}
      </div>
    </div>
  );
};

export default ProgressBar;
