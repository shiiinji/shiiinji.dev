import styled from 'styled-components'

export const Line = styled.span`
  font-size: 1rem;
`

export const Pre = styled.pre`
  overflow: scroll;
  padding: 20px;
  text-align: left;

  & .token-line {
    height: 1.5em;
    line-height: 1.5em;
  }
`
