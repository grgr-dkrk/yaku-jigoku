export const LAYOUT_SIZE = {
  sidebar: 250,
  mainAreaMargin: 60,
  innerWidthPc: 860,
  footer: 80,
  footerSP: 40,
} as const;

export function mq(bp: number, type: string) {
  if (type === 'minMax') {
    return `@media screen and (min-width: ${bp + 1}px) and (max-width: ${
      LAYOUT_SIZE.innerWidthPc
    }px)`;
  }
  const fix = type === 'min' ? 1 : 0;
  return `@media screen and (${type}-width: ${bp + fix}px)`;
}

export const BREAKPOINT = {
  SMALL: mq(340, 'max'),
  SMALL_MIN: mq(340, 'min'),
  MID: mq(768, 'max'),
  MID_MIN: mq(768, 'min'),
  MD_MIN_MAX: mq(768, 'minMax'),
} as const;

export const SITE_COLOR = {
  BUTTON_NORMAL: '#000',
  BORDER_COLOR: '#ccc',
  HEADER_COLOR: '#456D93',
} as const;
