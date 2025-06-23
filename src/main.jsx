import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHook } from './03-examples/MultipleCustomhook'
import { FoscusScreen } from './04-useRef/FoscusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
// import { HookApp } from './HooksApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HookApp /> */}


<Layout/>
  </StrictMode>
)
