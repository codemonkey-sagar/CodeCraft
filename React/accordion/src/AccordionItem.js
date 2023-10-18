import { useState } from "react"

export default function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(isOpen => !isOpen);
  }

  return <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
    <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
    <p className="text">{title}</p>
    <p className="icon">{isOpen ? "-" : "+"}</p>

    {isOpen && <div className="content-box">{text}</div>}

  </div>
}