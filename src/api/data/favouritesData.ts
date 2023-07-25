import {
  MusicIconFirstPNG,
  MusicIconSecondPNG,
  MusicIconThirdPNG,
} from '../../assets/image';

interface FavouritesDescription {
  country: string;
  flag: string;
  vp: string;
  star: boolean;
}
export interface FavouritesData {
  mainIcon: HTMLImageElement;
  name: string;
  author: string;
  id: number;
  description: FavouritesDescription;
}
export const favourites: FavouritesData[] = [
  {
    mainIcon: MusicIconFirstPNG,
    name: 'Paris In The Rain',
    author: 'Lauv',
    id: 1,
    description: {
      country: 'USA',
      flag: '🇺🇸',
      vp: 'VP 12355',
      star: false,
    },
  },
  {
    mainIcon: MusicIconSecondPNG,
    name: 'Hellcat Story',
    author: 'Maruv',
    id: 2,
    description: {
      country: 'USA',
      flag: '🇺🇸',
      vp: 'VP 12355',
      star: false,
    },
  },
  {
    mainIcon: MusicIconThirdPNG,
    name: 'Hello',
    author: 'Adelle',
    id: 3,
    description: {
      country: 'Ukraine',
      flag: '🇺🇦',
      vp: 'VP 12355',
      star: true,
    },
  },
];
