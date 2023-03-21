import React from "react";

const ClockToggle = (props) => {
  return (
    <button 
      type="button"
      className="clock-toggle" 
      onClick={props.toggleClock}
    >
      Toggle Clock
    </button>
  )
}

export default ClockToggle;

// export class ClockToggle extends React.Component {
//   render () {
//     return (
//       <button 
//         type="button"
//         className="clock-toggle" 
//         onClick={this.props.toggleClock}
//       >
//         Toggle Clock
//       </button>
//     )
//   }
// } 
