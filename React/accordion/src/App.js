import Accordion from "./Accordion";
import faqs from "./data";

export default function App() {
  return <div>
    <Accordion data={faqs} />
  </div>
}