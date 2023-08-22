import {StyleSheet, Text, View} from 'react-native';
import BackBtn from '../buttons/BackBtn';
import {LeftArrowSVG} from '../../assets/image';
import {useTranslation} from 'react-i18next';
import BurgerMenuBtn from '../buttons/menus/BurgerMenu/BurgerMenuBtn';
import FilterBtn from '../buttons/menus/FilterMenu/FilterBtn';

interface NavbarProps {
  title: string;
  withIcon?: boolean;
  burgerMenu?: boolean;
  filterMenu?: boolean;
  withDrawer?: boolean;
}
export default ({
  title,
  withIcon = false,
  burgerMenu = true,
  filterMenu = true,
}: NavbarProps) => {
  const {t} = useTranslation();
  return (
    <View
      style={[
        withIcon
          ? {justifyContent: 'flex-start', gap: 110}
          : {justifyContent: 'center'},
        styles.container,
      ]}>
      {withIcon && <BackBtn component={<LeftArrowSVG />} />}
      {burgerMenu && <BurgerMenuBtn />}
      <Text style={styles.title}>{t(title)}</Text>
      {filterMenu && <FilterBtn />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    textAlign: 'center',
    height: 70,
    backgroundColor: '#1D2226',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
});
