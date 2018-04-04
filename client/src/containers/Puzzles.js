import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPuzzles } from '../actions/puzzleActions';
import Puzzle from '../components/Puzzle'

class Puzzles extends Component {

    componentDidMount() {
        this.props.fetchPuzzles();
    }

    render () {
        const puzzleLinks = this.props.puzzleState.puzzles.map(puz => 
            <Link className="puzzle-list-item" key={puz.id} to={`/puzzles/${puz.id}`}>{puz.name} - {puz.pieces} pieces</Link>
        )
        return (
            <div id="puzzle-list">
                <Route exact path={`${this.props.match.url}/:puzzleId`} component={Puzzle}/>
                {puzzleLinks}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        puzzleState: state.puzzles
    }
}

export default Puzzles = connect(mapStateToProps, {fetchPuzzles})(Puzzles);