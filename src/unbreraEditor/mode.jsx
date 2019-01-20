import React from 'react';
import ModeSelect from './modeSelect';

export default class Mode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontColor: '#444',
      click: false,
      clickX: 0,
      clickY: 0
    };
  }
  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }
  handleClick = e => {
    const clickX = e.nativeEvent.x;
    const clickY = e.nativeEvent.y;
    this.setState({
      click: true,
      clickX: clickX,
      clickY: clickY
    });
  };
  handleDocumentClick = e => {
    if (e.target.id !== 'mode') {
      this.setState({
        click: false
      });
    }
  };
  handleMouseEnter = () => {
    this.setState({
      fontColor: ' #e38'
    });
  };
  handleMouseLeave = () => {
    this.setState({
      fontColor: '#444'
    });
  };
  render() {
    return (
      <React.Fragment>
        <button
          touch-action="auto"
          id="mode"
          style={{
            color: this.state.fontColor
          }}
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleMouseEnter}
          onClick={this.handleClick}
        >
          mode
        </button>
        {(() => {
          if (this.state.click) {
            return (
              <ModeSelect
                style={{
                  x: this.state.clickX,
                  y: this.state.clickY
                }}
              />
            );
          }
        })()}
      </React.Fragment>
    );
  }
}
