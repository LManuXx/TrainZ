// TrainExerciseList.jsx
import { useState, useEffect } from "react";
import { getExercises } from '../Service/exerciseService';
import { Ejercicio } from './Ejercicio';

export const TrainExerciseList = () => {
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(() => {
    const exercises = getExercises();
    setExerciseList(exercises);
  }, []);

  return (
    <>
      <div>
        <h1>Lista de Ejercicios Disponibles</h1>

        {exerciseList.map((ejercicio) => (
          <Ejercicio key={ejercicio.id} ejercicio={ejercicio} />
        ))}

        <div className="myButton-container">
          <button className="myButton">Confirmar</button>
        </div>
      </div>


    </>
  );
};
