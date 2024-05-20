import {Children, createContext, ReactNode, useState, cloneElement, useContext, ReactElement} from 'react';

type AccordionType = ReactNode & {type: {name: string}};

type AccordionItem = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  children: ReactNode;
};

type AccordionItemProps = {
  children: ReactNode
  item?: AccordionItem
}

type AccordionContextType = {
  activeItem: number | null;
  setActiveItem: (itemId: number) => void;
}

export const AccordionContext = createContext<AccordionContextType>({} as AccordionContextType);

export function Accordion({children}: AccordionProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
      <AccordionContext.Provider value={{activeItem, setActiveItem}}>
        <div>{children}</div>
      </AccordionContext.Provider>
  );
}

export function AccordionItem({children, item }: AccordionItemProps) {
  return (
      <div className="border-b border-gray-200">
        {Children.map(children as AccordionType[], (child: AccordionType) => {
          if (child?.type.name === 'AccordionTitle' || child?.type.name === 'AccordionContent') {
            return cloneElement(child as ReactElement, {item});
          }
        })}
      </div>
  )
}

export function AccordionTitle({children, item}: AccordionItemProps) {
  const { setActiveItem } = useContext(AccordionContext);

  return (
      <button
          className="w-full text-left py-3 px-4 bg-blue-300 hover:bg-blue-400 focus:outline-none"
          onClick={() => setActiveItem(item!.id)}>
        <div style={{maxHeight: '50px', overflow: 'auto'}}>
          {children}
        </div>
      </button>
  )
}

export function AccordionContent({children, item}: AccordionItemProps) {
  const { activeItem } = useContext(AccordionContext);

  return item?.id === activeItem && (
      <div
          className={`overflow-hidden transition-all duration-500 ease-in-out`}>
        <div className="py-3 px-4 bg-white overflow-auto" style={{maxHeight: '200px'}}>
          {children}
        </div>
      </div>
  );
}
