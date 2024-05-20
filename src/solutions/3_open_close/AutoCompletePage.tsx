// import {AutocompleteEnd} from "./extend-end-1.tsx";
import {useRef} from "react";
// import {AutocompleteEnd2} from "./extend-end-2.tsx";
import {AutocompleteEnd3, AutocompleteRef} from "./extend-end-3.tsx";

export function AutoCompletePage() {
  const autoCompleteRef = useRef<AutocompleteRef>(null);

  const names = [
    "John", "Jane", "James", "Jack", "Jill", "Julia", "Jackson", "Jasmine", "Jacob", "Jared",
    "Jeff", "Jenny", "Jesse", "Jodie", "Joel", "Joey", "Johnny", "Joyce", "Jude", "Judy",
    "Julian", "Juliet", "June", "Justin", "Karl", "Kate", "Katie", "Keith", "Kelly", "Ken"
  ];

  function itemTemplate(name: string) {
    return (
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full" src={`https://i.pravatar.cc/150?u=${name}`} alt={name}/>
          <span className="ml-2">{name}</span>
        </div>
    );
  }

  return (
      <div>
        <h2>Auto Complete</h2>


        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {autoCompleteRef.current!.toggleControls()}}>Enable/Disable </button>

        <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {autoCompleteRef.current!.toggleMenu();}}>OpenCLose </button>




        <AutocompleteEnd3
            options={names}
            listItem={itemTemplate}
            ref={autoCompleteRef}/>
      </div>
  )
}
