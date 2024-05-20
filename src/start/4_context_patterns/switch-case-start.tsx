// TODO: This is the final results. make it work!

import {Switch} from "../../solutions/4_context/switch-solution.tsx";
import {useState} from "react";

export function TheSwitchCase() {
  const [value, setValue] = useState<number>(0)

  function increment() {
    setValue((cValue: number) => cValue + 1)
  }

  return (
      <div>
        <h2>Switch case</h2>
        <button className='bg-blue-300'
                onClick={increment}>Increment</button>



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

        </Switch>
      </div>
  )
}
