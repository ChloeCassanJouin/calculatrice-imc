import React, { useState } from "react";
import "./App.css";

function App() {
// Déclare les états pour le poids, la taille, et l'IMC
const [poids, setPoids] = useState("");
const [taille, setTaille] = useState("");
const [imc, setImc] = useState(null);

// Fonction pour calculer l'IMC
const calculerImc = () => {
if (poids && taille) {
const imcCalculé = poids / (taille * taille);
setImc(imcCalculé.toFixed(2)); // Arrondir à 2 décimales
} else {
setImc(null);
}
};

return (
<div className="App">
<h1>Calculatrice IMC</h1>
<div>
<label>
Poids (kg):
<input
type="number"
value={poids}
onChange={(e) => setPoids(e.target.value)}
/>
</label>
</div>
<div>
<label>
Taille (m):
<input
type="number"
step="0.01"
value={taille}
onChange={(e) => setTaille(e.target.value)}
/>
</label>
</div>
<button onClick={calculerImc}>Calculer l'IMC</button>
{imc && (
<div>
<h2>Votre IMC est : {imc}</h2>
</div>
)}
</div>
);
}

export default App;

//code initial
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
