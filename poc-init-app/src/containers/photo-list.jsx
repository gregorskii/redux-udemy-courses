import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ACTIONS from '../actions';

const { fetchPhotos } = ACTIONS;

class PhotoList extends Component {
  render() {
    return (
      <section className="photos-list">
        <section className="photos-list__list">
          <div className="row">
            {this.renderPhotos()}
            <button
              className="photos-list__more btn btn-primary"
              onClick={this.onLoadMoreClick.bind(this)}>Load More</button>
          </div>
        </section>
      </section>
    );
  }

  renderPhotos() {
    const { photos } = this.props;

    if (!photos.length) {
      return (
        <div>Loading...</div>
      );
    }

    return photos.slice(0, 8).map((photo) => {
      return (
        <div key={photo.id} className="card col-md-3">
          <img className="card-img-top" src={photo.thumbnailUrl} alt="Card image cap" />
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      );
    });
  }

  onLoadMoreClick() {
    this.props.fetchPhotos();
  }
}

const mapStateToProps = ({ photos }) => {
  return { photos: photos.all };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPhotos }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
