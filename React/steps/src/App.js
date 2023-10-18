import { useState } from "react";
import messages from "./data";
import Button from "./Button";
import StepMessage from "./StepMessage";

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step => step - 1)
  };

  function handleNext() {
    if (step < 3) setStep(step => step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(isOpen => !isOpen)}>&times;</button>
      {
        isOpen && (
          <div>
            <div className="steps">
              <div className="numbers">
                <div className={step >= 1 ? "active" : ""}>1</div>
                <div className={step >= 2 ? "active" : ""}>2</div>
                <div className={step >= 3 ? "active" : ""}>3</div>
              </div >

              <StepMessage step={step}>
                {messages[step - 1]}
              </StepMessage>

              <div className="buttons">
                <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handlePrevious}>
                  <span>👈</span>Previous
                </Button>
                <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handleNext}>
                  <span>👉</span>Next
                </Button>
              </div>
            </div >
          </div >
        )
      }
    </>
  )
}