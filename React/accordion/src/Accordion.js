import AccordionItem from "./AccordionItem"

export default function Accordion({ data }) {
  return <div className="accordion">
    {data.map((el, index) => <AccordionItem key={el.title} num={index} title={el.title} text={el.text} />)}
  </div>
}