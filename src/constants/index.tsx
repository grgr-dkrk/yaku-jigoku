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

export const CONSTANTS = {
  NUM_MAX_TEXT: 500,
};

export const LABELS = {
  SITE_TITLE: 'YAKU † ZIGOQ 〜怒りの高速翻訳野郎〜',
  INPUT: '入力コア',
  SELECT: 'Level',
  RESET: 'テキストを削除する',
  PLACEHOLDER: 'テキストを入力してください',
  LEVEL: [
    LEVEL_LIST.NORMAL.label,
    LEVEL_LIST.HYPER.label,
    LEVEL_LIST.ANOTHER.label,
    LEVEL_LIST.LEGGENDARIA.label,
  ],
} as const;
