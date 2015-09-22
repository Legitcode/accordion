import React from 'react';

export default class Accordion extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  constructor(props) {
    super(props);

    this.state = {
      active: props.active || null
    }
  }

  expand = (name) => {
    if (this.state.active === name) {
      this.setState({ active: null });
    } else {
      this.setState({ active: name });
    }
  }

  render() {
    let children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        onClick: this.expand,
        active: this.state.active === child.props.name ? true : false
      });
    });

    return (
      <ul className="accordion">
        { children }
      </ul>
    )
  }
}
