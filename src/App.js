import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  function handleDigit(digit) {
    setDisplay((valorAtual) => {
      if (valorAtual === "0") {
        return digit;
      }
      return valorAtual + digit;
    });
  }

  function handleClear() {
    setDisplay("0");
  }

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">{display}</div>

        <div className="keys">
          <button className="key key-wide" type="button" onClick={handleClear}>
            C
          </button>

          <button type="button" onClick={() => handleDigit("7")}>
            7
          </button>
          <button type="button" onClick={() => handleDigit("8")}>
            8
          </button>
          <button type="button" onClick={() => handleDigit("9")}>
            9
          </button>
          <button type="button" onClick={() => handleDigit("4")}>
            4
          </button>
          <button type="button" onClick={() => handleDigit("5")}>
            5
          </button>
          <button type="button" onClick={() => handleDigit("6")}>
            6
          </button>
          <button type="button" onClick={() => handleDigit("1")}>
            1
          </button>
          <button type="button" onClick={() => handleDigit("2")}>
            2
          </button>
          <button type="button" onClick={() => handleDigit("3")}>
            3
          </button>
          <button className="key-wide" type="button" onClick={() => handleDigit("0")}>
            0
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
