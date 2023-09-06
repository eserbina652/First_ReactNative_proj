import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  previewContainer: {
    gap: 15,
    alignItems: 'center',
  },
  imgContainer: {
    width: 66,
    height: 66,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  descriptionContainer: {
    alignItems: 'flex-end',
  },
  musicName: {
    fontWeight: '700',
    color: 'black',
  },
  countryName: {
    color: 'black',
  },
  gap: {
    gap: 5,
  },
});
