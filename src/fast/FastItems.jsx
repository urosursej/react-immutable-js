const React = require('react');

import {FastItem} from './FastItem.jsx';
import {randomColor} from '../Helpers';

export class FastItems extends React.Component {

  constructor(props) {
    super();

    this.state = {
      items: props.items
    };

    this.onChangeItemColor = this.onChangeItemColor.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.items !== this.state.items;
  }

  render() {
    return (
      <div className="right">
        {this.state.items.map((item, index) => {
          return <FastItem
            key={index}
            item={item}
            onClick={this.onChangeItemColor}
            />
        })}
      </div>
    );
  }

  // This obviously makes much better sense than implementation in SlowItems.jsx
  onChangeItemColor(index) {
    const newImmutableItems = this.state.items.set(index,
      this.state.items.get(index).set('color', randomColor())
    );

    this.setState({
      items: newImmutableItems
    });
  }
};