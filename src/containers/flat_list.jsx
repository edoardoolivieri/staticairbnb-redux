import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';


import Flat from '../components/flat';


class FlatList extends Component {

   // TEMPORARY CODE TO INTEGRATE HTML


  componentWillMount() {
  // TODO: dispatch an action to load flats!
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(FlatList);
