import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {mix} from 'react-native-redash';

type CardId = number;

interface Card {
  id: CardId;
  source: number;
}

export const cards: Card[] = [
  {
    id: 0,
    source: require('../../../assets/examples/card1.png'),
  },
  {
    id: 1,
    source: require('../../../assets/examples/card2.png'),
  },
  {
    id: 2,
    source: require('../../../assets/examples/card3.png'),
  },
];
export interface CardProps {
  card: Card;
}

export const Card = ({card}: CardProps) => {
  return <Image style={styles.container} source={card.source} />;
};
const {width} = Dimensions.get('window');
const CARD_ASPECT_RATIO = 1324 / 863;
const CARD_WIDTH = width - 8 * 8;
const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO;
const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 18,
  },
  flexibleContainer: {
    flex: 1,
    maxWidth: '100%',
    aspectRatio: CARD_ASPECT_RATIO,
    margin: 8,
    borderRadius: 18,
    resizeMode: 'contain',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8 * 4,
  },
});
export const FlexibleCard = ({card, style}) => (
  <Animated.Image
    style={[styles.flexibleContainer, style]}
    source={card.source}
  />
);
const origin = -(width / 2 - 8 * 2);

export const AnimatedCard = ({transition, card, index}) => {
  const style = useAnimatedStyle(() => {
    const rotate = mix(transition.value, 0, ((index - 1) * Math.PI) / 6);
    return {
      transform: [
        {translateX: origin},
        {rotate: `${rotate}rad`},
        {translateX: -origin},
      ],
    };
  });
  return (
    <Animated.View style={[styles.overlay, style]}>
      <Card card={card} />
    </Animated.View>
  );
};
