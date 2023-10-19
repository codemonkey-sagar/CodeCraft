import { useState } from "react"
import AccordionItem from "./AccordionItem"

export default function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);

  return <div className="accordion">
    {data.map((el, index) => <AccordionItem key={el.title} num={index} title={el.title} currOpen={currOpen} onOpen={setCurrOpen}> {el.text} </AccordionItem>)}
  </div>
}