export const LEVEL_LIST = {
  NORMAL: {
    label: 'Normal',
    level: 0,
  },
  HYPER: {
    label: 'Hyper',
    level: 1,
  },
  ANOTHER: {
    label: 'Another',
    level: 2,
  },
  LEGGENDARIA: {
    label: 'LEGGENDARIA',
    level: 3,
  },
} as const;

export const LABELS = {
  SITE_TITLE: 'YAKU † ZIGOQ 〜怒りの高速翻訳野郎〜',
  INPUT: '入力コア',
  SELECT: '翻訳レベル',
  LEVEL: [
    LEVEL_LIST.NORMAL.label,
    LEVEL_LIST.HYPER.label,
    LEVEL_LIST.ANOTHER.label,
    LEVEL_LIST.LEGGENDARIA.label,
  ],
} as const;
