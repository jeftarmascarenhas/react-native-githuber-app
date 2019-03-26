import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  NavigationActions,
  StackActions,
} from 'react-navigation';
import PropTypes from 'prop-types';

import api from 'services/api';

import styles from './styles';

class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
    error: false,
    loading: false,
  };

  checkAndSaveUser = async () => {
    const { username } = this.state;
    const response = await api.get(`/users/${username}`);

    if (!response.ok) throw Error();

    await AsyncStorage.setItem('@Githuber:username', username);
  }

  navigateToUser = () => {
    const { username } = this.state;
    if (username.length === 0) return;

    this.setState({ loading: true, error: false });

    this.checkAndSaveUser()
      .then(() => {
        const { navigation } = this.props;
        const resetaction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'User' }),
          ],
        });
        navigation.dispatch(resetaction);
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
  }

  render() {
    const { username, error, loading } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}> Bem Vindo </Text>
        <Text style={styles.welcomeDescription}>
          Para Continuar precisamos que você informe seu usuário do Github
        </Text>
        { error && <Text style={styles.error}>Esse usuário não existe</Text> }
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Digite seu usuário do github"
          value={username}
          onChangeText={text => this.setState({ username: text })}
        />
        <TouchableOpacity
          disabled={loading}
          style={styles.button}
          onPress={this.navigateToUser}
        >
          { loading ? <ActivityIndicator size="small" color="#FFF" /> : <Text style={styles.buttonText}>Prosseguir</Text> }
        </TouchableOpacity>
      </View>
    );
  }
}

export default Welcome;
