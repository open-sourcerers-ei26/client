import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './RequiresLogin';
import HeaderBar from './HeaderBar';
import NewGame  from './NewGame';
import SideBar from './SideBar';
import GameDashboard  from './GameDashboard';
import FindGame from './FindGame';
import Profile from './Profile';
import './Dashboard.css';
import {fetchAllGames} from '../actions/game'

export class Dashboard extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchAllGames());
    }

    render() {

        return (
            <div className="dashboard">
                <HeaderBar />
                <div className="full-display">
                    <SideBar />	
                    <section className="display-area">
                        {this.props.showProfile && <Profile/>}
                        {this.props.showFindGame && <FindGame/>}
                        {this.props.showNewGame && <NewGame/>}
                        {this.props.showOneGame && <GameDashboard/>}
                        {/* {this.props.showAllPosts && <Timeline/>} */}
                    </section>	
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
//   console.log(state)
    return {
        showProfile: state.sideBar.showProfile,
        showFindGame: state.sideBar.showFindGame,
        showNewGame: state.sideBar.showNewGame,
        showOneGame: state.sideBar.showOneGame,
        showAllPosts: state.sideBar.showAllPosts,
        userId: state.auth.currentUser.id
   	};
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
