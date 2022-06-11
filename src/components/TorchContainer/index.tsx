import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'

interface IProps {
  torchSize?: number
  bgColor?: string
  fgColor?: string
  torchColor?: string
  children: ReactNode
}

export const TorchContainer = ({
  torchSize = 4,
  bgColor = 'black',
  fgColor = 'white',
  torchColor = 'rgba(0, 0, 0, 0.2)',
  ...props
}: IProps) => {
  const [cursorX, setCursorX] = useState('50%')
  const [cursorY, setCursorY] = useState('50%')

  const handleMouseMove = (e: any) => {
    setCursorX(e.clientX + 'px')
    setCursorY(e.clientY + 'px')
  }
  return (
    <StyledTorchContainer
      cursorX={cursorX}
      cursorY={cursorY}
      torchSize={torchSize}
      torchColor={torchColor}
      bgColor={bgColor}
      fgColor={fgColor}
      {...props}
      onMouseMove={handleMouseMove}
    >
      {props.children}
    </StyledTorchContainer>
  )
}

const StyledTorchContainer = styled.div<{
  torchSize: number
  torchColor: string
  cursorX: string
  cursorY: string
  bgColor: string
  fgColor: string
}>`
  color: ${(props) => props.fgColor};
  cursor: none;
  position: relative;
  background-color: black;
  &::before {
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: radial-gradient(
      circle ${(props) => props.torchSize}rem at ${(props) => props.cursorX}
        ${(props) => props.cursorY},
      ${(props) => props.torchColor} 0%,
      ${(props) => props.bgColor} 100%
    );
    z-index: 11;
  }
`
