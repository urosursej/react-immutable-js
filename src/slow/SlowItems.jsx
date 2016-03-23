const React = require('react/addons');

import {SlowItem} from './SlowItem.jsx';
import {randomColor} from '../Helpers';

export class SlowItems extends React.Component {

  constructor(props) {
    super();

    this.state = {
      items: props.items
    };

    this.onChangeItemColor = this.onChangeItemColor.bind(this);
  }

  render() {
    return (
      <div className="left">
        {this.state.items.map((item, index) => {
          return <SlowItem
            key={index}
            item={item}
            onClick={this.onChangeItemColor} />
        })}
      </div>
    );
  }

  // This is apparently weird and dirty implementation
  onChangeItemColor(index) {
    this.state.items[index].color = randomColor();

    this.setState({
      items: this.state.items
    });
  }
};