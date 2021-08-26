import React       from 'react';
// import SlotMachine from 'react-slot-machine-gen'; // or '../dist/react-slot-machine-gen';

// const reels = [
//   {
//     imageSrc: 'path/to/image.png',
//     symbols: [
//       {
//         title: 'cherry',
//         position: 100,
//         weight: 2
//       },
//       {
//         title: 'plum',
//         position: 300,
//         weight: 6
//       },
//       {
//         title: 'orange',
//         position: 500,
//         weight: 5
//       },
//       {
//         title: 'bell',
//         position: 700,
//         weight: 1
//       },
//       {
//         title: 'cherry',
//         position: 900,
//         weight: 3
//       },
//       {
//         title: 'plum',
//         position: 1100,
//         weight: 5
//       }
//     ]
//   }

//   // add more reels ...
// ]

// export default class Spinner extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       play: false
//     };
//   }

//   playEvent() {
//     this.setState({
//       play: !this.state.play
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <SlotMachine reels={reels} play={this.state.play} />

//         <button id="play-button" onClick={() => this.playEvent()}>Play</button>
//       </React.Fragment>
//     );
//   }
// };