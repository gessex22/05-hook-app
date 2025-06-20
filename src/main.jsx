import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterApp } from './01-useState.jsx/CounterApp'
import { CounterWithCustomHook } from './01-useState.jsx/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect.jsx/SimpleForm'
import { FormWithCustomHook } from './02-useEffect.jsx/FormWithCustomHook'
import { MultipleCustomHook } from './03-examples/MultipleCustomhook'
// import { HookApp } from './HooksApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HookApp /> */}


<MultipleCustomHook/>
  </StrictMode>
)
