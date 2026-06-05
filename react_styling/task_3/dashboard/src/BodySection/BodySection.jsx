import { Component } from 'react';

class BodySection extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="bodySection px-8">
        <h2 className="text-2xl text-(--main-color)">{title}</h2>
        {children}
      </div>
    );
  }
}

export default BodySection;
