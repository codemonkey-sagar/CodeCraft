import { useState } from "react";
import questions from "./data";

export default function FlashCard() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return <div className="flashcards">
    {questions.map(question =>
      <div key={question.id} onClick={() => handleClick(question.id)} className={selectedId === question.id ? "selected" : ""}>
        <p>{selectedId === question.id ? question.answer : question.question}</p>
      </div>)}
  </div>
}