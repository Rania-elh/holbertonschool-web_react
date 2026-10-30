import { Component } from 'react';
import './BodySectionWithMarginBottom.css';
import BodySection from '../BodySection/BodySection';

class BodySectionWithMarginBottom extends Component {
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
