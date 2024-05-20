import {createContext, ReactNode, useContext} from 'react';

type SwitchContextType = string | number;

interface SwitchgrassesProps {
  value: string | number;
  children: ReactNode;
}

interface DefaultProps {
  children: ReactNode;
}

const SwitchContext = createContext<SwitchContextType | null>(null);


export const Switch = ({ value, children }: SwitchgrassesProps) => {
  return (
      <SwitchContext.Provider value={value}>
        {children}
      </SwitchContext.Provider>
  );
};

const Case = ({ value, children }: SwitchgrassesProps) => {
  const currentValue = useContext(SwitchContext);

  if (currentValue === null) {
    throw new Error('Switch.Case must be used inside a Switch component');
  }

  console.log('Case render');
  return value === currentValue ? children : null;

};


const Default = ({ children }: DefaultProps) => {
  const currentValue = useContext(SwitchContext);

  return currentValue === null ? children : null;
};


Switch.Case = Case;
Switch.Default = Default;


