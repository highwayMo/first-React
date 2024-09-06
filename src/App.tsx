import { Button } from '@chakra-ui/react'
import './App.css'
import { Title } from './Title'

function App() {
  return (
      <div>
        <Title />
        <Title />
        <Title />
        <Button background='red' color='balck'>Hello</Button>
      </div>
  )
}

export default App
