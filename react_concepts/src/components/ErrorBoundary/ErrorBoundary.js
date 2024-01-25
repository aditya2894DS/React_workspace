/**
 * What is error boundary? = It's a wrapper React component which is used to catch error, display fallback UI and log error information in case any error occurs in the child components. It uses lifecycle functions getDerivedStateFromError to display fallback UI and componentDidCatch to log error information. Only class components can be error boundary.
 */

import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    return error, info;
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <p>Error occured.</p>
        </>
      );
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;