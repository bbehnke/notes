import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import { notes } from './actions';

class App extends React.Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  render() {
    return (
      <div>setup</div>
    );
  }
}

App.propTypes = {
  init: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(notes.initializeNotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
