import { useState } from 'react';

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function AccordionStart({items}: AccordionProps ) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
      <div>
        {items.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                  className="w-full text-left py-3 px-4 bg-blue-300 hover:bg-blue-400 focus:outline-none"
                  onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              >
                <div style={{maxHeight: '50px', overflow: 'auto'}}>
                  {item.title}
                </div>
              </button>
              <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="py-3 px-4 bg-white overflow-auto" style={{maxHeight: '200px'}}>
                  {item.content}
                </div>
              </div>
            </div>
        ))}
      </div>
  );
}

