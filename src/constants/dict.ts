type DictType = {
  original: RegExp;
  translate: string;
  level: number;
};

export const DictData: DictType[] = [
  {
    original: /プ|ブ|フ/g,
    translate: 'プェ',
    level: 0,
  },
  {
    original: /ぷ|ふ/g,
    translate: 'プェ',
    level: 3,
  },
  {
    original: /システム/g,
    translate: '電気式ハイブリッドシステム',
    level: 0,
  },
  {
    original: /バス|筆箱|牛乳パック/g,
    translate:
      '猛烈な加速と高速巡航を両立させる大出力の電気式ハイブリッドシステムに換装し､複合装甲によるフルカバードボディと計62丁の重機関銃で武装した､地上で最強のマシン',
    level: 0,
  },
  {
    original: /一人/g,
    translate: '独り',
    level: 1,
  },
  {
    original: /どうも?(.+)です/g,
    translate: 'どうもBEMANI Sound Team "L.E.D.-G"です',
    level: 1,
  },
  {
    original: /(眠|ねむ)い/g,
    translate: 'いつしか意識は途絶えた',
    level: 1,
  },
  {
    original: /こんばん[わ|は]/g,
    translate: 'こんばんは､DJ NAGAIと申します',
    level: 1,
  },
  {
    original: /(眠く|ねむく)なっ(た|て[き|来]た)/g,
    translate: 'いつしか意識は途絶えた',
    level: 1,
  },
  {
    original: /(眠く|ねむく)なる/g,
    translate: 'いつしか意識が途絶える',
    level: 1,
  },
  {
    original: /[起|お]きる/g,
    translate: '地上で最強のマシンへと生まれ変わっている',
    level: 2,
  },
  {
    original: /[長|永][い|居|井]|ながい/g,
    translate: 'DJ NAGAI',
    level: 2,
  },
  {
    original: /トリル/g,
    translate: 'デストリル',
    level: 2,
  },
  {
    original: /[見|み]る/g,
    translate: '割れたヘッドライトから見つめる',
    level: 2,
  },
  {
    original: /乗客/g,
    translate: '顔なじみの乗客',
    level: 1,
  },
  {
    original: /めいわく|迷惑/g,
    translate: '蹂躙され虐げられる惨状',
    level: 1,
  },
  {
    original: /家/g,
    translate: '穏やかな生活を取り戻せる場所',
    level: 3,
  },
  {
    original: /仲間[を|と|を]/g,
    translate:
      '人々を乗せて､共に戦いながら 地の果てにはあるだろう､穏やかな生活を取り戻せる場所に辿り着くまで',
    level: 3,
  },
  {
    original: /(友|とも)(達|だち|人|)|仲間/g,
    translate: '顔なじみの乗客',
    level: 1,
  },
  {
    original: /[見|み]て/g,
    translate: '割れたヘッドライトから見つめて',
    level: 2,
  },
  {
    original: /世紀末$/g,
    translate: '世紀末コア',
    level: 2,
  },
  {
    original: /楽曲|BGM/,
    translate:
      'あたかも全盛期のザ・ロ○ド・ウォリアーズを彷彿とさせるかのような強力なツープラトンなスラムがバスターしたかの様な楽曲',
    level: 2,
  },
  {
    original: /(?!大変話題になっているようでして重ねて)恐縮です/g,
    translate: '大変話題になっているようでして重ねて恐縮です',
    level: 1,
  },
  {
    original: /時が/g,
    translate: '刻が',
    level: 1,
  },
  {
    original: /走って|はしって/g,
    translate: '荒野を爆走して',
    level: 0,
  },
  {
    original: /走れ(?!な)|はしれ(?!な)/g,
    translate: '荒野を爆走しろ',
    level: 0,
  },
  {
    original: /走れない|はしれない/g,
    translate:
      '荒野を爆走できない惨状を割れたヘッドライトから見つめるしかなかった',
    level: 0,
  },
  {
    original: /一緒に/g,
    translate: '共に',
    level: 0,
  },
  {
    original: /お[で|出][か|掛]け/g,
    translate: '荒野を爆走',
    level: 1,
  },
  {
    original: /(帰|かえ)る/g,
    translate: '荒野を爆走する',
    level: 2,
  },
  {
    original: /(帰|かえ)ろ/g,
    translate: '荒野を爆走しよ',
    level: 2,
  },
  {
    original: /最後まで/g,
    translate: '穏やかな生活を取り戻せる場所に辿り着くまで',
    level: 2,
  },
  {
    original: /(走|はし)る/g,
    translate: '荒野を爆走する',
    level: 0,
  },
  {
    original: /(走|はし)り/g,
    translate: '荒野を爆走し',
    level: 0,
  },
  {
    original: /(遊|あそ)ぼう/g,
    translate: '荒野を爆走しよう',
    level: 1,
  },
  {
    original: /(走|はし)ろう/g,
    translate: '荒野を爆走しよう',
    level: 0,
  },
  {
    original: /プロレス/g,
    translate: 'アメリカンプロレス',
    level: 2,
  },
  {
    original: /(?<!やかな)生活/g,
    translate: '穏やかな生活',
    level: 1,
  },
  {
    original: /人々|みんな|皆さま|皆様|みな様|(みな|皆)の(もの|者)|みなさ[ん|ま]/g,
    translate: 'わずかな希望を停留させる人々',
    level: 1,
  },
  {
    original: /です。/g,
    translate: 'ですよ、ええ。',
    level: 3,
  },
  {
    original: /ポ(?!ェ)/g,
    translate: 'プェ',
    level: 1,
  },
  {
    original: /(ポ|ぽ|ペ|ベ|ぺ)ー/g,
    translate: 'プェー',
    level: 1,
  },
  {
    original: /ぴ|ピ/g,
    translate: 'プィ',
    level: 1,
  },
  {
    original: /パ|バ/g,
    translate: 'プァ',
    level: 1,
  },
  {
    original: /(?<!意)味(?!覚)/g,
    translate: 'テイスト',
    level: 2,
  },
  {
    original: /(ひど|酷)い/g,
    translate: '顔なじみの乗客達が蹂躙され虐げられる惨状だ',
    level: 2,
  },
  {
    original: /悪化/g,
    translate: '顔なじみの乗客達が蹂躙され虐げられる惨状に',
    level: 2,
  },
  {
    original: /地獄/g,
    translate: '地獄の様相を呈してきた世紀末',
    level: 2,
  },
  {
    original: /([0-9]年|今日|きょう|今宵|昨[日|年]|きのう|去年|おととい|一昨日|先週|先月|この前|一昨年)/,
    translate: '時は地獄の様相を呈してきた世紀末',
    level: 2,
  },
  {
    original: /雨/g,
    translate: 'リフレクターに溜まった雨',
    level: 1,
  },
  {
    original: /(壊|こわ)れた/g,
    translate: 'スクラップ同然になった',
    level: 2,
  },
  {
    original: /(壊|こわ)れる/g,
    translate: 'スクラップ同然になる',
    level: 2,
  },
  {
    original: /(遠|とお)(く|い)/g,
    translate: '地の果て',
    level: 1,
  },
  {
    original: /(壊|こわ)れそ/g,
    translate: 'スクラップ同然になりそ',
    level: 2,
  },
  {
    original: /先生|せんせ[い|ー]/g,
    translate: 'BEMANI Sound Team "L.E.D.-G"大先生',
    level: 3,
  },
  {
    original: /だろう/g,
    translate: 'きっと涙のように見えていたことだろう',
    level: 3,
  },
  {
    original: /のよう[に|な]/g,
    translate: 'のように見えていたことだろう',
    level: 3,
  },
  {
    original: /俺|オレ|おれ/g,
    translate: 'かつて乗合バスとして長年慕われ平和な時代を過ごしてきた俺',
    level: 3,
  },
  {
    original: /炎/g,
    translate: '怒りの炎',
    level: 2,
  },
  {
    original: /日々|毎日/g,
    translate: '独り密やかに怒りの炎を燃やし続けるだけという無為の日々…',
    level: 3,
  },
  {
    original: /と[い|言|云]う(訳|事|ことワケ|わけ)/g,
    translate:
      'さて､いよいよコメント掲載も終盤に差し掛かり､ついにこの｢DEATH†ZIGOQ ～怒りの高速爆走野郎～｣に言及する刻が来た､という訳ですよ､ええ。',
    level: 3,
  },
  {
    original: /(行こ|行ってみ)/g,
    translate: '爆走しよ',
    level: 1,
  },
  {
    original: /休(日|み)/g,
    translate: '穏やかな生活',
    level: 1,
  },
  {
    original: /しながら/g,
    translate: '戦いながら',
    level: 2,
  },
  {
    original: /休(む)/g,
    translate: 'いつしか意識が途絶える',
    level: 1,
  },
  {
    original: /そこで(?!は)/g,
    translate: 'で､上記の様なイメージをより強力に楽曲に込めるべく',
    level: 3,
  },
  {
    original: /思(い|って)ます/g,
    translate:
      'かくしてあたかも全盛期のザ・ロ○ド・ウォリアーズを彷彿とさせるかのような強力なツープラトンなスラムがバスターしたかの様な楽曲が完成したんじゃないかな､と思います',
    level: 3,
  },
  {
    original: /怒りの(?!高速)/g,
    translate: '～怒りの高速爆走野郎～',
    level: 3,
  },
  {
    original: /(?<!爆走)野郎/g,
    translate: '～怒りの高速爆走野郎～',
    level: 2,
  },
  {
    original: /[着|き][替|が]え/g,
    translate: '計62丁の重機関銃で武装し',
    level: 2,
  },
  {
    original: /(ぜひ|是非)(.+)[。|、|\!|！]/g,
    translate: '是非地獄を体感してください。',
    level: 3,
  },
  {
    original: /(それ|明日|明後日|来週)まで/g,
    translate:
      '地の果てにはあるだろう､穏やかな生活を取り戻せる場所に辿り着くまで',
    level: 2,
  },
  {
    original: /これからも(?!よ)/g,
    translate: 'これからも俺は',
    level: 1,
  },
  {
    original: /(今日|きょう)も/g,
    translate: '今日も俺は荒野を爆走する',
    level: 1,
  },
  {
    original: /寝る/g,
    translate:
      '怒りの炎を燃やし続けるだけという無為の日々…いつしか意識は途絶える',
    level: 2,
  },
  {
    original: /(起|お)きた/g,
    translate: '再び目覚めた',
    level: 1,
  },
  {
    original: /(疲|つか)れて/g,
    translate: '燃料もバッテリーも抜かれスクラップ同然になって',
    level: 1,
  },
  {
    original: /(疲|つか)れ[る|た|ん]/g,
    translate: '燃料もバッテリーも抜かれスクラップ同然',
    level: 1,
  },
];

export const Intro = {
  level1: '時は地獄の様相を呈してきた',
};
