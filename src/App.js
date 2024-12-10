import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/button";

import { Container, Content, Row } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => (prev === "0" ? `${num}` : `${prev}${num}`));
  };

  const handleSetOperation = (op) => {
    if (firstNumber !== "0") {
      handleEquals();
    }
    setOperation(op);
    setFirstNumber(currentNumber); 
    setCurrentNumber("0"); 
  };

  const handleSumNumbers = () => {
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(String(sum));
    setFirstNumber("0");

    
    setOperation("");
  };

  const handleMinusNumbers = () => {
    const difference = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(String(difference));
    setFirstNumber("0");
    setOperation("");
  };

  const handleMultiplicationNumbers = () => {
    const multiply = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String(multiply));
    setFirstNumber("0");
    setOperation("");
  };

  const handleDivisionNumbers = () => {
    const divisor = Number(currentNumber);
    if (divisor === 0) {
      setCurrentNumber("Error"); 
    } else {
      const division = Number(firstNumber) / divisor;
      setCurrentNumber(String(division));
    }
    setFirstNumber("0");
    setOperation("");
  };

  const handlePercentageNumbers = () => {
    const Percentage = Number(firstNumber) *  Number(currentNumber) / 100;
    setCurrentNumber(String(Percentage));
    setFirstNumber("0");
    setOperation("");
  };

  const handleEquals = () => {
    switch (operation) {
      case '+':
        handleSumNumbers();
        break;
      case '-':
        handleMinusNumbers();
        break;
      case 'X':
        handleMultiplicationNumbers();
        break;
      case '/':
        handleDivisionNumbers();
        break;
        case '%':
          handlePercentageNumbers();
          break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label="X" onClick={() => handleSetOperation("X")} />
          <Button label="/" onClick={() => handleSetOperation("/")} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="%" onClick={() => handleSetOperation("%")} />
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={() => handleSetOperation("-")} />
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => handleSetOperation("+")} />
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
