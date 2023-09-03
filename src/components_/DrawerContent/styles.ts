import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 35,
    justifyContent: 'space-around',
    flex: 1,
  },
  screenText: {
    fontSize: 18,
    color: 'black',
  },
  header: {
    gap: 20,
    flexDirection: 'row',
  },
  imageWrap: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  menuItem: {
    paddingBottom: 14,
    flexDirection: 'row',
    borderBottomColor: '#F3F3F3',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    alignSelf: 'center',
  },
  itemElements: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  menuItemWrap: {
    gap: 30,
  },
});
