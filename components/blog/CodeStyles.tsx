import styled from 'styled-components'

export const Line = styled.span`
  font-size: 1rem;
`

export const Pre = styled.pre`
  padding: 20px;
  text-align: left;
  overflow: scroll;

  & .token-line {
    height: 1.5em;
    line-height: 1.5em;
  }
`
