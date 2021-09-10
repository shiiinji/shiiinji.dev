import React from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

const ErrorFallback = ({ error }: { error: Error }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre style={{ color: 'red' }}>{error.message}</pre>
  </div>
)

export const ErrorBoundary: React.FC = (props) => (
  <ReactErrorBoundary FallbackComponent={ErrorFallback}>
    {props.children}
  </ReactErrorBoundary>
)
