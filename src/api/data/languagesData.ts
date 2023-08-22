export const languages: ILanguages[] = [
  {
    id: 1,
    translateKey: 'en',
    langName: 'en',
    isChecked: false,
    img: '🇺🇸',
  },
  {
    id: 2,
    translateKey: 'uk',
    langName: 'uk',
    isChecked: false,
    img: '🇺🇦',
  },
  {
    id: 3,
    translateKey: 'pl',
    langName: 'pl',
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
