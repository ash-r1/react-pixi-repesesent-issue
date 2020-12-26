import React from "react"
import { Sprite } from '@inlet/react-pixi'

interface Props {
    url: string;
}

const Image: React.FC<Props> = ({url}) => {
    console.log("render image")
    return <Sprite image={url} x={10} y={10} />
}
export default Image;