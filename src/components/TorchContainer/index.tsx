import React, { useState } from 'react'
import styled from 'styled-components'

interface IProps {
  className: string
  style: object
  children: JSX.Element
  torchSize: number
  bg: string
  fg: string
  torchColor: string
}

export const TorchContainer = ({
  torchSize = 7,
  bg = 'black',
  fg = 'white',
  torchColor = 'rgba(0, 0, 0, 0.2) 0%',
  children
}: IProps) => {
  const [cursorX, setCursorX] = useState('50%')
  const [cursorY, setCursorY] = useState('50%')

  const handleMouseMove = (e: any) => {
    setCursorX(e.clientX + 'px')
    setCursorY(e.clientY + 'px')
  }
  return (
    // @ts-ignore
    <StyledTorchContainer
      onMouseMove={handleMouseMove}
      cursorX={cursorX}
      cursorY={cursorY}
      torchSize={torchSize}
      torchColor={torchColor}
      bg={bg}
      fg={fg}
    >
      {children}
    </StyledTorchContainer>
  )
}

const StyledTorchContainer = styled.div<{
  torchSize: number
  torchColor: string
  cursorX: string
  cursorY: string
  bg: string
  fg: string
}>`
  color: ${(props) => props.fg};
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
      ${(props) => props.bg} 100%
    );
    z-index: 11;
  }
`
