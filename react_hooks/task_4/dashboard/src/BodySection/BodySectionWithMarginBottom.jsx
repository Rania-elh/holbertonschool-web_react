import React from 'react';
import './BodySectionWithMarginBottom.css';
import BodySection from './BodySection';

class BodySectionWithMarginBottom extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="bodySectionWithMargin">
        <BodySection title={title}>{children}</BodySection>
      </div>
    );
  }
}

export default BodySectionWithMarginBottom;
