// import {AccordionEnd1} from "./accordion-end-1.tsx";
import {Accordion, AccordionContent, AccordionItem, AccordionTitle} from "./accordion-end-2.tsx";

const items = [
  {
    id: 1,
    title: 'What is React?',
    content: 'React is a front end JavaScript framework'
  },
  {
    id: 2,
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    id: 3,
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];


// function renderTitle(title: string){
//   return <h3>{title}</h3>
// }
//
// function renderContent(content: string){
//   return <p>{content}</p>
// }


export function AccordionPage() {
  return (
      // <AccordionEnd1 items={items} renderTitle={renderTitle} renderContent={renderContent}/>
      <Accordion>
        {items.map((item) => (
            <AccordionItem item={item} >

              <AccordionTitle>
                <h3>{item.title}</h3>
              </AccordionTitle>

              <AccordionContent>
                <p>{item.content}</p>
              </AccordionContent>

            </AccordionItem>
        ))}

      </Accordion>
  )
}
