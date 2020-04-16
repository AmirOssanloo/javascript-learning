import React, { useEffect } from 'react';
import { useAppContext } from './AppContext';
import { Game, initialGameState } from '../../game'

const App = () => {
  const { game, setGame } = useAppContext();

  useEffect(() => {
    const game = new Game(initialGameState);
    setGame(game);
  }, []);

  console.log(game);

  return (
    <div>
      <h1>Hello</h1>
      <table>
         <tbody>
         {game ? game.state.map((row, x) => (
           <tr key={`row-${x}`}>
             {row.map((cell, y) => (
               <td key={`col-${y}`}>x</td>
             ))}
           </tr>
         )) : null}
        </tbody>
      </table>
    </div>
  );
};

export default App;



// import React, { useState } from 'react';
// import { render } from 'react-dom';
// import styled from 'styled-components';
// import { Game, CellState } from './game';

// const game = new Game();

// const StyledCell = styled.td`
//   width: 50px;
//   height: 50px;
//   background-color: ${props => props.state ? '#f00' : '#00f'};
// `;

// const App = () => {
//   const [gameState, setGameState] = useState(game.state);



//   const nextState = () => {
//     const state = game.getNextState();
//     game.state = state;

//     setGameState(state);
//   };

//   return (
//     <div>
//       <h1>Conway's Game of Life</h1>
//       <table>
//         <tbody>
//           {gameState.map((row, x) => (
//             <tr key={`row-${x}`}>
//               {row.map((cell, y) => (
//                 <StyledCell
//                   key={`col-${y}`}
//                   state={cell.state}
//                 />
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={() => { nextState(); } } >NEXT</button>
//     </div>
//   );
// };

// render(<App />, document.querySelector('#app-root'));
