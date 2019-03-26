import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from 'theme';

export default StyleSheet.create({
  container: {
    height: 54 + metrics.statusBarHeight,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    color: colors.primary,
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },
});
