import React, { Component } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  AsyncStorage,
  ActivityIndicator,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from 'services/api';
import styles from './styles';
import Repository from './components/Repository';

class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    ),
  };

  state = {
    repositories: [],
    loading: false,
    refresing: false,
  };

  componentWillMount() {
    this.setState({ loading: true });
    this.loadRepositories()
      .then(() => {
        this.setState({ loading: false });
      });
  }

  loadRepositories = async () => {
    this.setState({ refresing: true });

    const username = await AsyncStorage.getItem('@Githuber:username');
    const respose = await api.get(`/users/${username}/repos`);

    this.setState({ repositories: respose.data, refresing: false });
  }

  renderList = () => {
    const { repositories } = this.state;
    return (
      repositories.length
        ? this.renderRepositories()
        : <Text>Nenhum repositório encontrado</Text>
    );
  }

  renderRepositories = () => {
    const { repositories, refresing } = this.state;
    return (
      <FlatList
        refreshControl={(
          <RefreshControl
            refreshing={refresing}
            onRefresh={this.loadRepositories()}
          />
        )}
        data={repositories}
        keyExtractor={repository => Number(repository.id).toString()}
        renderItem={({ item }) => <Repository repository={item} />}
      />
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        { loading ? <ActivityIndicator style={styles.loading} size="small" color="#999" />
          : this.renderList()
        }
      </View>
    );
  }
}

export default Repositories;
