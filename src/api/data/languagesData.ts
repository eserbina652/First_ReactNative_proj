export const languages: ILanguages[] = [
  {
    id: 1,
    translateKey: 'en',
    langName: 'English',
    isChecked: false,
    img: '🇺🇸',
  },
  {
    id: 2,
    translateKey: 'uk',
    langName: 'Ukrainian',
    isChecked: false,
    img: '🇺🇦',
  },
  {
    id: 3,
    translateKey: 'pl',
    langName: 'Polish',
    isChecked: false,
    img: '🇵🇱',
  },
];

export interface ILanguages {
  id: number;
  translateKey: string;
  langName: string;
  isChecked: boolean;
  img: string;
}
