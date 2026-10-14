import { useState } from "react";
import "./App.css";

function calcular(primeiro, operador, segundo) {
  switch (operador) {
    case "+":
      return primeiro + segundo;
    case "-":
      return primeiro - segundo;
    case "*":
      return primeiro * segundo;
    case "/":
      if (segundo === 0) {
        return null;
      }
      return primeiro / segundo;
    default:
      return segundo;
  }
}

function App() {
  const [display, setDisplay] = useState("0");
  const [valorGuardado, setValorGuardado] = useState(null);
  const [operador, setOperador] = useState(null);
  const [esperandoNovoNumero, setEsperandoNovoNumero] = useState(false);

  function handleDigit(digit) {
    if (esperandoNovoNumero) {
      setDisplay(digit);
      setEsperandoNovoNumero(false);
      return;
    }

    setDisplay((valorAtual) => {
      if (valorAtual === "0" || valorAtual === "Erro") {
        return digit;
      }
      return valorAtual + digit;
    });
  }

  function handleOperator(proximoOperador) {
    if (display === "Erro") {
      return;
    }

    const atual = Number(display);

    if (valorGuardado === null || operador === null || esperandoNovoNumero) {
      setValorGuardado(atual);
    } else {
      const resultado = calcular(valorGuardado, operador, atual);
      if (resultado === null) {
        setDisplay("Erro");
        setValorGuardado(null);
        setOperador(null);
        setEsperandoNovoNumero(false);
        return;
      }
      setDisplay(String(resultado));
      setValorGuardado(resultado);
    }

    setOperador(proximoOperador);
    setEsperandoNovoNumero(true);
  }

  function handleEquals() {
    if (operador === null || valorGuardado === null || esperandoNovoNumero) {
      return;
    }

    const resultado = calcular(valorGuardado, operador, Number(display));
    if (resultado === null) {
      setDisplay("Erro");
    } else {
      setDisplay(String(resultado));
    }

    setValorGuardado(null);
    setOperador(null);
    setEsperandoNovoNumero(true);
  }

  function handleClear() {
    setDisplay("0");
    setValorGuardado(null);
    setOperador(null);
    setEsperandoNovoNumero(false);
  }

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">{display}</div>

        <div className="keys">
          <button className="key-wide" type="button" onClick={handleClear}>
            C
          </button>
          <button className="key-op" type="button" onClick={() => handleOperator("/")}>
            ÷
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
          <button className="key-op" type="button" onClick={() => handleOperator("*")}>
            ×
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
          <button className="key-op" type="button" onClick={() => handleOperator("-")}>
            −
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
          <button className="key-op" type="button" onClick={() => handleOperator("+")}>
            +
          </button>

          <button className="key-zero" type="button" onClick={() => handleDigit("0")}>
            0
          </button>
          <button className="key-eq" type="button" onClick={handleEquals}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
