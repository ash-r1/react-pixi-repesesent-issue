import { useState } from 'react'
import * as PIXI from 'pixi.js'
import { Stage, Container } from '@inlet/react-pixi'
import Image from "./Image"

const url = "https://i.picsum.photos/id/523/1920/1080.jpg?hmac=sy_3fHrsxYu8cmYYWmQ2yWzPMfGNI42qloxWKF97ISk"

const App = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = async () => {
    console.log("clicked")
    setClicked(true);
  };

  return (
    <Stage width={1920} height={1080}>
      <Container 
        width={1920}
        height={1080}
        pointerdown={handleClick}
        interactive
        hitArea={new PIXI.Rectangle(0, 0, 1920, 1080)}
      >
      {
        (()=>{
          if( clicked ){
            return <Image url={url} />
          }
        })()
      }
      
      </Container>
    </Stage>
  )
}
export default App;
