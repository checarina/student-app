import { useState, useEffect } from 'react';

function Testy() {

  
//   const [pieceOfState, setPieceOfState] = useState(0);
//   useEffect(() => {
//     console.log(`count: ${pieceOfState}`);
//     console.log('This will be called whenever an instance of this component mounts');
//     console.log('or whenever pieceOfState is updated');
//   }, [pieceOfState]); //why are these being printed to console twice on loading the page?

// return (
//     <div>
//     <button onClick={() => setPieceOfState(pieceOfState + 1)}>Click Me to Update pieceOfState!</button>
//     </div>
// );
// }

    const [apples, setApples] = useState(0);
    const [oranges, setOranges] = useState(0);

    useEffect(() => {
        console.log('I\'m in useEffect!');
        console.log('This is called when oranges updates,');
        console.log('NOT when apples updates');
    }, [oranges]);

    return (
        <div>
          <p>Apples: {apples}</p>
          <button onClick={() => setApples(apples + 1)}>Click Me to Update apples!</button>
          <p>Oranges: {oranges}</p>
          <button onClick={() => setOranges(oranges + 1)}>Click Me to Update oranges!</button>
        </div>
      );
    }

export default Testy;