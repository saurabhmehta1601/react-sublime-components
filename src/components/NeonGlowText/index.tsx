import React from 'react'
import styled, { keyframes } from 'styled-components'

interface IProps {
  children: React.ReactNode
  fontSize: string
}

export const NeonGlowText = ({ fontSize = '3rem', ...props }: IProps) => {
  return (
    <StyledText {...props} fontSize={fontSize}>
      {props.children}
    </StyledText>
  )
}

const neonGlow = keyframes`
    from {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
        0 0 20px rgba(255, 255, 255, 0.8), 0 0 22px rgba(255, 255, 255, 0.8),
        0 0 40px rgba(66, 220, 219, 0.8), 0 0 60px rgba(66, 220, 219, 0.8),
        0 0 80px rgba(66, 220, 219, 0.5), 0 0 100px rgba(66, 220, 219, 0.5),
        0 0 140px rgba(66, 220, 219, 0.5), 0 0 200px rgba(66, 220, 219, 0.5);
    }
    to {
      text-shadow: 0 0 2px rgba(255, 255, 255, 0.8),
        0 0 8px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.8),
        0 0 20px rgba(66, 220, 219, 0.8), 0 0 30px rgba(66, 220, 219, 0.8),
        0 0 40px rgba(66, 220, 219, 0.8), 0 0 50px rgba(66, 220, 219, 0.5),
        0 0 80px rgba(66, 220, 219, 0.5);
    }
`

const StyledText = styled.p<{ fontSize: string }>`
  $easeInOutQuad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-transform: uppercase;
  color: white;
  font-size: ${(props) => props.fontSize};
  text-align: center;
  animation-name: ${neonGlow};
  animation-duration: 1.3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: $easeInOutQuad;
`
