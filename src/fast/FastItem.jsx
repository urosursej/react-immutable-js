const React = require('react');

export class FastItem extends React.Component {

  constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // Yes, we can do this as the pointer changes,
    // unfortunatelly this can't be done in SlowItem.jsx
    return nextProps.item !== this.props.item;
  }

  onClick() {
    this.props.onClick(this.props.item.get('item'));
  }

  render() {
    const style = {
      color: this.props.item.get('color')
    };

    return <div style={style} onClick={this.onClick}>{this.props.item.get('item')}</div>
  }
}