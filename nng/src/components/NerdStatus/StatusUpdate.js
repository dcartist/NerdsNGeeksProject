// import React, { Component } from 'react'
// import { useWindowSize } from 'react-use'
// import Confetti from 'react-confetti'
// import {Modal, Button} from "react-bootstrap";


// class StatusUpdate extends Component {
//     render() {
//         return (
//             <div>
// CONGRATS
// <Modal.Dialog>
//   <Modal.Header closeButton>
//     <Modal.Title>Modal title</Modal.Title>
//   </Modal.Header>

//   <Modal.Body>
//     <p>Modal body text goes here.</p>
//   </Modal.Body>

//   <Modal.Footer>
//     <Button variant="secondary">Close</Button>
//     <Button variant="primary">Save changes</Button>
//   </Modal.Footer>
// </Modal.Dialog>
                
//             </div>
//         );
//     }
// }

// // export default StatusUpdate;
// export default () => {
//     const { width, height } = useWindowSize()
//     return (
//       <Confetti
//         width={width}
//         height={height}
//       />
//     )
//   }
  
  
import './style.css'
import React, { Component } from 'react'
import ConfettiCanvas from 'react-confetti-canvas';

export default class componentName extends Component {
    render() {
        return (
            <div className="fullBody">
                {/* <ConfettiCanvas
      ribbonParticleCount={30} /> */}
<ConfettiCanvas />
<p className="aboveLink">Congrats
You got 
</p> 
                
            </div>
        )
    }
}
