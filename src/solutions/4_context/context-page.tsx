import {useState} from "react";
import {Switch} from "./switch-solution.tsx";

export function ContextPage() {
  const [value, setValue] = useState<number>(0)

  function increment() {
    setValue(value + 1)
  }

  return (
      <div>
        <h2>Switch case</h2>
        <button className='bg-blue-300' onClick={increment}>Increment</button>
        <Switch value={value}>

          <Switch.Case value={0}>
            <div>Value is 0</div>
          </Switch.Case>

          <Switch.Case value={1}>
            <div>Value is 1</div>
          </Switch.Case>

          <Switch.Case value={2}>
            <div>Value is 2</div>
          </Switch.Case>

          <Switch.Default>
            <div>Value is not 0, 1 or 2</div>
          </Switch.Default>

        </Switch>
      </div>
  )
}
