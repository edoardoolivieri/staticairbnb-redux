import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import Flat from '../components/flat';

import { setFlats } from '../actions';

class FlatList extends Component {
  // TEMPORARY CODE TO INTEGRATE HTML
  // static defaultProps = {
  //   flats: [{
  //     "name": "Charm at the Steps of Montmartre",
  //     "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  //     "price": 164,
  //     "priceCurrency": "GBP"
  //   }]
  // }

  componentWillMount() {
    // TODO: dispatch an action to update the Redux State Tree
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat, index) => {
          return <Flat flat={flat} key={flat.name} tabIndex={index} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFlats }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
