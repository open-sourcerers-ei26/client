import React from 'react';
import {connect} from 'react-redux';
import GameRulesList from './gameRulesList';

export class GameRules extends React.Component {
    componentDidMount() {
    }    

    render() {

    let testSelectedGame = {
            rules:[{description:'this is a rule...'},{description:'this is a another rule...'},{description:'this is yet another rule...'},{description:'this is, yes, another awesome rule...'}],
          };  

      return (
        <div className="gameRules">
        <h3>Game Rules!</h3>
        <GameRulesList selectedGameRules={testSelectedGame}/>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        games: state.auth.currentUser.games//<--in progress...
    };
};

export default connect(mapStateToProps)(GameRules);