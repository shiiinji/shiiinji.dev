import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'
import { Line, Pre } from './CodeStyles'

type Props = {
  children: string
}

export const CodeBlock = (props: Props) => (
  <Highlight
    {...defaultProps}
    code={props.children}
    language="tsx"
    theme={theme}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={{ ...style }}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <Line key={key} {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Pre>
    )}
  </Highlight>
)
