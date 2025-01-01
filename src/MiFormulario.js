import React, { useState } from 'react';

function MiFormulario() {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [resultado, setResultado] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías realizar los cálculos necesarios con los valores del formulario
    // Por ahora, simplemente mostraremos un mensaje
    setResultado({setSelectedOption, setInputValue1, setInputValue2});

  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">Selecciona una opción</option>
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
      </select>
      <input type="text" value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} />
      <input type="text" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
      <button type="submit">Calcular</button>
      {resultado && <p>{resultado}</p>}
    </form>
  );
}

export default MiFormulario;