import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode; // Accepts children components to wrap
}

interface State {
  hasError: boolean; // Tracks if an error occurred
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Initialize the state with no error
    this.state = { hasError: false };
  }

  // Update state if an error occurs during rendering
  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  // Log the error for debugging purposes
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  // Render fallback UI if an error occurred
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>; // Fallback message
    }

    // Render children if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;

