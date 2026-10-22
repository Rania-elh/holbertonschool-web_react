import { Component } from 'react';
import { logComponentMounted, logComponentUnmounted } from '../utils/utils';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function WithLogging(WrappedComponent) {
  const name = getDisplayName(WrappedComponent);

  class WithLoggingComponent extends Component {
    componentDidMount() {
      logComponentMounted(name);
    }

    componentWillUnmount() {
      logComponentUnmounted(name);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingComponent.displayName = `WithLogging(${name})`;

  return WithLoggingComponent;
}

export default WithLogging;
