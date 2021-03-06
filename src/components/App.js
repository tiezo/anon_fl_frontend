import React from "react";
import ModalContainer from "../containers/ModalContainer";
import NavbarContainer from "../containers/NavbarContainer";
import ReduxToastr from 'react-redux-toastr'
import {appLoaded} from '../actions/CommonActions';
import 'react-redux-toastr/src/styles/index.scss'
import "../stylesheets/main.scss";
import {connect} from "react-redux";


const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(appLoaded());
  }

  render() {
    return (
      <div>
        <ReduxToastr
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          timeout="2000"
        />
        <ModalContainer/>
        <NavbarContainer/>
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
export { App as App };
