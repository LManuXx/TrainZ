// Ejercicio.jsx
import React, { useState } from 'react';
import '../Estilos/ExerciseCard.css';

export const Ejercicio = ({ ejercicio}) => {
  const { id, name, description, reps, series } = ejercicio;
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    
  };

  return (
    <div className={`ejercicio-card ${isSelected ? 'selected' : ''}`} onDoubleClick={handleSelect}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Repeticiones: {reps}</p>
      <p>Series: {series}</p>
    </div>
  );
};
