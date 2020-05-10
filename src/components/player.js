import React from 'react'

import Card from './card'

export default class Player extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if(this.props.isCurrentPlayer) {
            return (
                <div className="currentPlayer">
                    <input name="playerName" value={this.props.name} />
                    <button onClick={this.props.handleAddPlayer}>Add Player</button>
                </div>
            );
        } else {
            return (
                <div className="player">
                    <p>{this.props.name}</p>
                    <div className="deck">
                        {this.renderCards(this.props.playedCards)}
                    </div>
                </div>
            );
        }
    }

    renderCards(cards) {
        let carditems = [];

        for(const card of cards) {
            console.log(card);
            carditems.push(<Card playable={false} number={card.number} key={card.id}></Card>);
        }

        return carditems;
    }
}