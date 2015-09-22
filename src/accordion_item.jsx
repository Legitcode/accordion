import React from 'react';

export default class AccordionItem extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    onClick: React.PropTypes.func,
    active: React.PropTypes.bool,
    children: React.PropTypes.node
  }

  onClick = () => {
    this.props.onClick(this.props.name);
  }

  render() {
    return (
      <li className={`${this.props.active ? 'is-expanded' : null}`}>
        <a href="#" onClick={this.onClick}>{this.props.name}</a>
        <div className='content'>
          { this.props.children }
        </div>
      </li>
    )
  }
}
