import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

function App();

// function App() {
//   const [gameState, setGameState] = useState<any>(null);

//   useEffect(() => {
//     window.addEventListener("keydown", (event) => {
//       switch (event.key) {
//         case "ArrowLeft":
//           socket.emit("move", { direction: "left" });
//           break;
//         case "ArrowRight":
//           socket.emit("move", { direction: "right" });
//           break;
//       }
//     });

//     socket.on("gameState", (gameState) => {
//       setGameState(gameState);
//     });
//   }, []);

//   if (!gameState) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div
//         style={{
//           backgroundColor: gameState.currentPlayer === 0 ? "blue" : "red",
//         }}
//       >
//         Player 1 area
//       </div>
//       <div
//         style={{
//           backgroundColor: gameState.currentPlayer === 1 ? "blue" : "red",
//         }}
//       >
//         Player 2 area
//       </div>
//       <div>Bomb position: {gameState.bombPosition}</div>
//       <div>Bomb height: {gameState.bombHeight}</div>
//       {gameState.bombHeight === 0 && (
//         <div>
//           Game over! Player {gameState.currentPlayer === 0 ? 2 : 1} wins!
//         </div>
//       )}
//     </div>
//   );
// }

export default App;
