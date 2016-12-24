import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class Hamburger extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render () {
    const togglerStyles = {
      position: 'absolute',
      top: `0px`,
      width: `${this.props.size || 120}px`,
      height: `${this.props.size || 120}px`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      zIndex: 999,
    };

    const barStyles = {
      display: 'block',
      background: '#f5f7f9',
      height: '2px',
      margin: '6px 4px',
      transition: 'background 300ms ease-in-out',
      webkitBackfaceVisibility: 'hidden',
      webkitPerspective: 1000,
    };

    const behavior = this.state.isOpen ?
      { stiffness: 220, damping: 32 } :
      { stiffness: 220, damping: 26 };

    return (
      <div styles={togglerStyles} onClick={this.handleClick.bind(this)}>
        <div style={{ width: `${this.props.width || 40}px` }}>

          <Motion style={{
            opacity: spring(this.state.isOpen ? 0 : 1, behavior),
            offsetY: spring(this.state.isOpen ? -10 : 0, behavior)
          }}>
            {({ opacity, offsetY }) =>
              <span
                style={{
                  ...barStyles,
                  transform: `translate3d(0px, ${offsetY}px, 0px)`,
                  opacity: (Math.round(opacity * 10) / 10),
                  willChange: 'transform, opacity'
                }}
              />
            }
          </Motion>


          <Motion style={{
            rotate: spring(this.state.isOpen ? -315 : 0, behavior)}}>
            {({ rotate }) =>
              <span
                style={{
                  ...barStyles,
                  transform: `rotate(${rotate}deg)`,
                  willChange: 'transform'
                }}
              />
            }
          </Motion>


          <Motion style={{
            rotate: spring(this.state.isOpen ? -45 : 0, behavior),
            offsetX: spring(this.state.isOpen ? 6 : 0, behavior),
            offsetY: spring(this.state.isOpen ? -6 : 0, behavior)
          }}>
            {({ rotate, offsetX, offsetY }) =>
              <span
                style={{
                  ...barStyles,
                  transform: `rotate(${rotate}deg) translate3d(${offsetX}px, ${offsetY}px, 0px)`,
                  willChange: 'transform'
                }}
              />
            }
          </Motion>


        </div>
      </div>
    );
  }
}

export default Hamburger;
