import React, { PureComponent } from "react";
import { Animate } from "react-move";
// import { easeExpOut } from "d3-ease";

const trackStyles = {
  borderRadius: 4,
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  position: "relative",
  margin: "5px 3px 10px",
  width: 250,
  height: 50,
};

class Toggle extends PureComponent {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Move it!</h1>
        <button
          className="justify-center sm-btn focus:outline-none"
          onClick={this.handleClick}
        >
          Move the square
        </button>
        <Animate
          start={() => ({
            x: 0,
          })}
          update={() => ({
            x: [this.state.open ? 200 : 0],
            timing: { duration: 750, ease: easeExpOut },
          })}
        >
          {(state) => {
            const { x } = state;

            return (
              <div style={trackStyles} className="App">
                <div
                  style={{
                    position: "absolute",
                    width: 50,
                    height: 50,
                    borderRadius: 4,
                    opacity: 0.7,
                    backgroundColor: "#ff69b4",
                    WebkitTransform: `translate3d(${x}px, 0, 0)`,
                    transform: `translate3d(${x}px, 0, 0)`,
                  }}
                />
              </div>
            );
          }}
        </Animate>
      </div>
    );
  }
}

export default Toggle;
