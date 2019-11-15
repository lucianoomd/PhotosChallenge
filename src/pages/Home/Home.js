import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import styles from './HomeStyle';
import Header from '../../components/Header/Header';
import PhotosList from '../../components/PhotosList/PhotosList';
import { API } from '../../Constants';

export default class Home extends Component {
  state = {
    loading: true,
    photos: []
  };

  componentDidMount() {
    this.updateList();
  }

  updateList = () => {
    this.setState({ loading: true }, () => {
      axios.get(`${API.BASE_PATH}${API.ENDPOINT_PHOTOS}`).then((result) => {
        this.setState({ photos: result.data, loading: false });
      });
    });
  }

  render() {
    const { loading, photos } = this.state;

    return (
      <View style={styles.container}>
          <Header text='PhotosChallenge' />
          { loading ? 
            <ActivityIndicator size="large" />
            : <PhotosList photos={photos} loading={loading} updateList={this.updateList} />
          }
      </View>
    );
  }
}
