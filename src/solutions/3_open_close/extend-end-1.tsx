import {ChangeEvent, useState, KeyboardEvent, ReactNode} from 'react';

interface AutocompleteProps {
  options: string[];
  listItem?: (value: string) => ReactNode;
}

export function AutocompleteEnd({options, listItem}: AutocompleteProps) {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<number>(0);

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
