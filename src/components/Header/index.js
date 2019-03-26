import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, AsyncStorage,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from 'theme';
import styles from './styles';

class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  static defaultProps = {};

  state = {};

  logout = () => {
    const { navigation } = this.props;
    AsyncStorage.removeItem('@Githuber:username')
      .then(() => {
        const resetaction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Welcome' }),
          ],
        });
        navigation.dispatch(resetaction);
        console.tron.log('Entrou no Then');
      })
      .catch((error) => {
        console.tron.log('Error logout: ', error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Githuber</Text>
        <TouchableOpacity onPress={this.logout}>
          <Icon name="exchange" size={14} color={colors.primary} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
