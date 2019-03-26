import { StyleSheet } from 'react-native';

import { colors, fonts } from 'theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  welcomeTitle: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  welcomeDescription: {
    color: colors.white,
    fontSize: fonts.regular,
    marginHorizontal: 20,
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 21,
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    height: 44,
    borderRadius: 3,
    marginTop: 10,
    fontSize: fonts.small,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: colors.secoundary,
    alignSelf: 'stretch',
    height: 44,
    borderRadius: 3,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: fonts.small,
    color: colors.white,
    fontWeight: 'bold',
  },
  error: {
    color: colors.error,
    fontSize: fonts.small,
    marginTop: 10,
    textAlign: 'center',
  },
});
