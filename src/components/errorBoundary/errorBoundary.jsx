import React, { Component } from "react";
import {
  ErrorBoundaryWrapper,
  ErrorBoundaryTitle,
  ErrorBoundarySpan
} from "components/errorBoundary/errorBoundary.styled";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null, errorInfo: null };

  static getDerivedStateFromError = () => {
    return { hasError: true };
  };

  componentDidCatch = (error, errorInfo) => {
    this.setState({ error, errorInfo });
  };

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children } = this.props;

    return hasError ? (
      <ErrorBoundaryWrapper>
        <ErrorBoundaryTitle>Oops! Something went wrong.</ErrorBoundaryTitle>
        {errorInfo && (
          <>
            <ErrorBoundarySpan>Details:</ErrorBoundarySpan>
            {error && <ErrorBoundarySpan>{error?.toString()}</ErrorBoundarySpan>}
            {errorInfo.componentStack && <ErrorBoundarySpan>{errorInfo.componentStack}</ErrorBoundarySpan>}
          </>
        )}
      </ErrorBoundaryWrapper>
    ) : (
      children
    );
  }
}

export { ErrorBoundary };
