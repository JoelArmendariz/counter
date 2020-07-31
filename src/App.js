import React, { useState } from 'react';
import './App.css';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div className="count">{count}</div>
        <div className="btn">
          <Fab
            className="btn"
            disableRipple
            onClick={() => setCount(count + 1)}
            color="primary"
            aria-label="add">
            <AddIcon />
          </Fab>
        </div>
        <div className="btn">
          <Fab
            disableRipple
            onClick={() => (count > 0 ? setCount(count - 1) : null)}
            color="primary"
            aria-label="remove">
            <RemoveIcon />
          </Fab>
        </div>
        <div className="reset-button" onClick={() => setCount(0)}>
          Reset
        </div>
      </header>
    </div>
  );
};

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     this.handleIncrement = this.handleIncrement.bind(this);
//     this.handleDecrement = this.handleDecrement.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//   }
//   handleIncrement() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   handleDecrement() {
//     if (this.state.count > 0) {
//       this.setState({ count: this.state.count - 1 });
//     }
//   }

//   handleReset() {
//     this.setState({ count: 0 });
//   }

//   render() {
//     const { count } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div className="count">{count}</div>
//           <div className="btn">
//             <Fab
//               className="btn"
//               disableRipple
//               onClick={this.handleIncrement}
//               color="primary"
//               aria-label="add">
//               <AddIcon />
//             </Fab>
//           </div>
//           <div className="btn">
//             <Fab disableRipple onClick={this.handleDecrement} color="primary" aria-label="remove">
//               <RemoveIcon />
//             </Fab>
//           </div>
//           <div className="reset-button" onClick={this.handleReset}>
//             Reset
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
