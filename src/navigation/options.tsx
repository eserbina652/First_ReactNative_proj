import {StyleSheet, Text, View} from 'react-native';
import {ScreensName} from '../constants';
import {ForecastSVG, FinanceSVG, FavoritesSVG} from '../assets/image';
import i18n from 'i18next';
import {RouteProp, ParamListBase} from '@react-navigation/native';

interface TabBarIconProps {
  focused: boolean;
}
const tabBarOptions = (route: RouteProp<ParamListBase, string>) => ({
  tabBarShowLabel: false,
  tabBarStyle: styles.tabBarStyles,

  tabBarIcon: ({focused}: TabBarIconProps) => {
    let Icon;
    let isText = false;
    let color = focused ? 'pink' : 'black';
    if (route.name === ScreensName.FORECAST) {
      Icon = <ForecastSVG color={color} />;
      isText = true;
    }
    if (route.name === ScreensName.FINANCE) {
      Icon = <FinanceSVG color={color} />;
      isText = true;
    }
    if (route.name === ScreensName.FAVOURITES) {
      Icon = <FavoritesSVG color={color} />;
      isText = true;
    }
    const screenName = route.name.toLowerCase().split('_').join(' ');
    return (
      <View style={styles.iconContainer}>
        {Icon}
        {isText && (
          <Text style={[styles.iconStyle, {color: color}]}>
            {i18n.t(screenName)}
          </Text>
        )}
      </View>
    );
  },
});

export default tabBarOptions;
const styles = StyleSheet.create({
  tabBarStyles: {
    backgroundColor: 'white',
    padding: 5,
    elevation: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    minHeight: 100,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconStyle: {
    fontSize: 14,
  },
});
