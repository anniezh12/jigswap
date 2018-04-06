import React from 'react';

const Puzzle = ({match, puzzles}) => {
    var puzzle = puzzles.find(p => p.id === parseInt(match.params.puzzleId, 10));
    var puzzleData;

    if (puzzle) {
        puzzleData = 
            <div>
                <h2>{puzzle.name}</h2>
                <p>Pieces: {puzzle.pieces}</p>
                <p>Missing pieces: {puzzle.missing_pieces}</p>
                {/* <p>Contact owner: {puzzle.user.email}</p> */}
            </div>
    }
    return (
        <div>
            {puzzleData}
        </div>
    )

}

export default Puzzle;