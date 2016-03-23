const React = require('react');

export class SlowItem extends React.Component {
  constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.item.item);
  }

  render() {
    const style = {
      color: this.props.item.color
    };

    return <div style={style} onClick={this.onClick}>{this.props.item.item}</div>
  }
}