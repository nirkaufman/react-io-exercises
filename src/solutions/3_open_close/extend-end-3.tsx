import {ChangeEvent, useState, KeyboardEvent, ReactNode, forwardRef, useImperativeHandle, useRef} from 'react';

export interface AutocompleteRef {
  toggleControls: () => void;
  toggleMenu: () => void;
  paintInRed: () => void;
}

interface AutocompleteProps {
  options: string[];
  listItem?: (value: string) => ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AutocompleteRef(props: AutocompleteProps, ref: any) {
  const {options, listItem} = props;
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      toggleControls: () => {
        if (inputRef.current) {
          inputRef.current.readOnly = !inputRef.current.readOnly;
          if(!inputRef.current.readOnly) {
            inputRef.current.focus();
          }
        }
      },
      toggleMenu: () => {
        if (results.length > 0) {
          setResults([]);
        } else {
          setResults(options);
        }
      },
    };
  }, [options, results.length]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);

    if (event.target.value.length > 0) {
      const searchResults = options.filter((name) =>
          name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      setSelectedOption((prevSelectedOption) => Math.min(prevSelectedOption + 1, results.length - 1));
    } else if (event.key === 'ArrowUp') {
      setSelectedOption((prevSelectedOption) => Math.max(prevSelectedOption - 1, 0));
    } else if (event.key === 'Enter') {
      setSearch(results[selectedOption]);
      setResults([]);
    }
  };

  return (
      <div className="w-full max-w-xs mx-auto">
        <input
            ref={inputRef}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            type="text"
            value={search}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
        />
        {results.length > 0 && (
            <ul className="mt-1 text-gray-700">
              {results.map((name, index) => (
                  <li key={index} className={`px-3 py-1 hover:bg-gray-200 cursor-pointer ${index === selectedOption ? 'bg-gray-200' : ''}`}>
                    {listItem ? listItem(name) : name}
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
}


export const AutocompleteEnd3 = forwardRef(AutocompleteRef);
