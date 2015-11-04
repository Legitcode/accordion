import React from 'react';

export default class AccordionItem extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    onClick: React.PropTypes.func,
    active: React.PropTypes.bool,
    children: React.PropTypes.node,
    labelHTML: React.PropTypes.object
  }

  onClick = () => {
    this.props.onClick(this.props.name);
  }

  render() {
    const { name, active, children, labelHTML } = this.props,
          linkHTML = labelHTML ? labelHTML : name

    return (
      <li className={`${active ? 'is-expanded' : null}`}>
        <a href="#" onClick={this.onClick}>{linkHTML}</a>
        <div className='content'>
          { this.props.children }
        </div>
      </li>
    )
  }
}
