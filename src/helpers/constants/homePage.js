import React from 'react'

import {
  ChiHira,
  DeHira,
  GaHira,
  HaHira,
  KoHira,
  IHira,
  KaHira,
  KiHira,
  MaHira,
  NHira,
  NiHira,
  NoHira,
  RiHira,
  RuHira,
  SeHira,
  ShiHira,
  SoHira,
  SuHira,
  ToHira,
  YoHira,
  UHira,
  WoHira
} from 'assets/svg/calligraphy/japanese/hiragana'
import {
  Ashita,
  Atarashii,
  Hi,
  Hito,
  Hitotsu,
  Idomu,
  O,
  Ooki,
  Ou,
  Tatakau,
  Watashi,
  Suki,
  Tsukuru,
  Yume
} from 'assets/svg/calligraphy/japanese/kanji'
import {
  JiKata,
  MiKata,
  PeKata,
  ReKata,
  VertiBarreKata
} from 'assets/svg/calligraphy/japanese/katakana'
import {
  Maru,
  QuestionMark,
  Ten
} from 'assets/svg/calligraphy/japanese/punctuation'

import {
  AEn,
  AlwaysEn,
  AmEn,
  AndEn,
  ChaserEn,
  DreamEn,
  ExclamationEn,
  HiWithCommaEn,
  IEn,
  IsEn,
  LoveEn,
  MyEn,
  PageWithPointEn,
  RemyEn,
  ThisEn,
  ToEn,
  WelcomeEn
} from 'assets/svg/calligraphy/english'

export const symbols = {
  empty: [], // used for refresh purpose
  ja: [
    {
      class: 'a1',
      element: (
        <KoHira
          className="faded-out with-absolute"
          firstStrokeClassName="punctuation-delay"
        />
      )
    },
    {
      class: 'a2',
      element: <NHira className="faded-out with-absolute" />
    },
    {
      class: 'a3',
      element: <NiHira className="faded-out with-absolute" />
    },
    {
      class: 'a4',
      element: <ChiHira className="faded-out with-absolute" />
    },
    {
      class: 'a5',
      element: <HaHira className="faded-out with-absolute" />
    },
    {
      class: 'a6',
      element: <Ten className="faded-out with-absolute" />
    },
    {
      class: 'a7',
      element: (
        <ReKata
          className="faded-out with-absolute"
          firstStrokeClassName="punctuation-delay"
        />
      )
    },
    {
      class: 'a8',
      element: <MiKata className="faded-out with-absolute" />
    },
    {
      class: 'a9',
      element: <DeHira className="faded-out with-absolute" />
    },
    {
      class: 'a10',
      element: <SuHira className="faded-out with-absolute" />
    },
    {
      class: 'a11',
      element: <Maru className="faded-out with-absolute" />
    },
    {
      class: 'b1',
      element: (
        <Watashi
          className="faded-out with-absolute"
          firstStrokeClassName="punctuation-delay"
        />
      )
    },
    {
      class: 'b2',
      element: <NoHira className="faded-out with-absolute" />
    },
    {
      class: 'b3',
      element: <PeKata className="faded-out with-absolute" />
    },
    {
      class: 'b4',
      element: (
        <VertiBarreKata className="faded-out with-absolute " />
      )
    },
    {
      class: 'b5',
      element: <JiKata className="faded-out with-absolute" />
    },
    {
      class: 'b6',
      element: <NiHira className="faded-out with-absolute" />
    },
    {
      class: 'b7',
      element: <YoHira className="faded-out with-absolute" />
    },
    {
      class: 'b8',
      element: <UHira className="faded-out with-absolute" />
    },
    {
      class: 'b9',
      element: <KoHira className="faded-out with-absolute" />
    },
    {
      class: 'b10',
      element: <SoHira className="faded-out with-absolute" />
    },
    {
      class: 'b11',
      element: <Maru className="faded-out with-absolute" />
    },
    {
      class: 'c1',
      element: (
        <Yume
          className="faded-out with-absolute"
          firstStrokeClassName="punctuation-delay"
        />
      )
    },
    {
      class: 'c2',
      element: <Ou className="faded-out with-absolute" />
    },
    {
      class: 'c3',
      element: <IHira className="faded-out with-absolute" />
    },
    {
      class: 'c4',
      element: <Hito className="faded-out with-absolute" />
    },
    {
      class: 'c5',
      element: <DeHira className="faded-out with-absolute" />
    },
    {
      class: 'c6',
      element: <Ten className="faded-out with-absolute" />
    },
    {
      class: 'c7',
      element: (
        <Atarashii
          className="faded-out with-absolute"
          firstStrokeClassName="punctuation-delay"
        />
      )
    },
    {
      class: 'c8',
      element: <ShiHira className="faded-out with-absolute" />
    },
    {
      class: 'c9',
      element: <IHira className="faded-out with-absolute" />
    },
    {
      class: 'c10',
      element: <KoHira className="faded-out with-absolute" />
    },
    {
      class: 'c11',
      element: <ToHira className="faded-out with-absolute" />
    },
    {
      class: 'd0',
      element: <NiHira className="faded-out with-absolute" />
    },
    {
      class: 'd1',
      element: <Idomu className="faded-out with-absolute" />
    },
    {
      class: 'd2',
      element: <Tatakau className="faded-out with-absolute" />
    },
    {
      class: 'd3',
      element: <SuHira className="faded-out with-absolute" />
    },
    {
      class: 'd4',
      element: <RuHira className="faded-out with-absolute" />
    },
    {
      class: 'd5',
      element: <KoHira className="faded-out with-absolute" />
    },
    {
      class: 'd6',
      element: <ToHira className="faded-out with-absolute" />
    },
    {
      class: 'd7',
      element: <GaHira className="faded-out with-absolute" />
    },
    {
      class: 'd8',
      element: <Ooki className="faded-out with-absolute" />
    },
    {
      class: 'd9',
      element: <Suki className="faded-out with-absolute" />
    },
    {
      class: 'd10',
      element: <KiHira className="faded-out with-absolute" />
    },
    {
      class: 'd11',
      element: <DeHira className="faded-out with-absolute" />
    },
    {
      class: 'e0',
      element: <SuHira className="faded-out with-absolute" />
    },
    {
      class: 'e1',
      element: <Maru className="faded-out with-absolute" />
    },
    {
      class: 'f1',
      element: (
        <Hitotsu
          className="faded-out with-absolute"
          firstStrokeClassName="punctuation-delay"
        />
      )
    },
    {
      class: 'f2',
      element: <O className="faded-out with-absolute" />
    },
    {
      class: 'f3',
      element: <NiHira className="faded-out with-absolute" />
    },
    {
      class: 'f4',
      element: <Ashita className="faded-out with-absolute" />
    },
    {
      class: 'f5',
      element: <Hi className="faded-out with-absolute" />
    },
    {
      class: 'f6',
      element: <WoHira className="faded-out with-absolute" />
    },
    {
      class: 'f7',
      element: <Tsukuru className="faded-out with-absolute" />
    },
    {
      class: 'f8',
      element: <RiHira className="faded-out with-absolute" />
    },
    {
      class: 'f9',
      element: <MaHira className="faded-out with-absolute" />
    },
    {
      class: 'f10',
      element: <SeHira className="faded-out with-absolute" />
    },
    {
      class: 'f11',
      element: <NHira className="faded-out with-absolute" />
    },
    {
      class: 'g0',
      element: <KaHira className="faded-out with-absolute" />
    },
    {
      class: 'g1',
      element: (
        <QuestionMark className="faded-out with-absolute" />
      )
    }
  ],

  /**
   *  ENGLISH CALLIGRAPHY SETTINGS 
   */
  en: [
    {
      class: 'A',
      weight: 2,
      element: (
        <HiWithCommaEn className="faded-out" />
      )
    },
    { class: 'A', weight: 0.5, element: '' },
    {
      class: 'A',
      weight: 3,
      element: <ThisEn className="faded-out" />
    },
    { class: 'A', weight: 0.5, element: '' },
    {
      class: 'A',
      weight: 1.25,
      element: <IsEn className="faded-out" />
    },
    { class: 'A', weight: 0.5, element: '' },
    {
      class: 'A',
      weight: 4.5,
      element: <RemyEn className="faded-out" />
    },
    {
      class: 'A',
      weight: 0.75,
      element: (
        <ExclamationEn className="faded-out" />
      )
    },
    {
      class: 'B',
      weight: 7.5,
      element: <WelcomeEn className="faded-out" />
    },
    { class: 'B', weight: 0.5, element: '' },
    {
      class: 'B',
      weight: 1.75,
      element: <ToEn className="faded-out" />
    },
    { class: 'B', weight: 0.5, element: '' },
    {
      class: 'B',
      weight: 3,
      element: <MyEn className="faded-out" />
    },
    { class: 'B', weight: 0.5, element: '' },
    {
      class: 'B',
      weight: 4.25,
      element: (
        <PageWithPointEn className="faded-out" />
      )
    },
    {
      class: 'C',
      weight: 0.75,
      element: (
        <IEn className="faded-out" />
      )
    },
    {
      class: 'C',
      weight: 3,
      element: (
        <AmEn className="faded-out" />
      )
    },
    { class: 'C', weight: 0.5, element: '' },
    {
      class: 'C',
      weight: 1,
      element: <AEn className="faded-out" />
    },
    { class: 'C', weight: 0.5, element: '' },
    {
      class: 'C',
      weight: 5.5,
      element: <DreamEn className="faded-out" />
    },
    { class: 'C', weight: 0.5, element: '' },
    {
      class: 'C',
      weight: 5.5,
      element: <ChaserEn className="faded-out" />
    },
    { class: 'C', weight: 0.5, element: '' },
    {
      class: 'C',
      weight: 3.25,
      element: (
        <AndEn className="faded-out" />
      )
    },
    { class: 'C', weight: 0.5, element: '' },,
    {
      class: 'C',
      weight: 3.25,
      element: (
        <LoveEn className="faded-out" />
      )
    },
    { class: 'C', weight: 0.5, element: '' },,
    {
      class: 'C',
      weight: 6,
      element: (
        <AlwaysEn className="faded-out" />
      )
    }
  ]
}


//UNUSED FOR NOW

// We add an additional clqss .faded-out to all the element of the array
// for them to be invisible by default
// const idiomClassName = { className: 'faded-out' }

// export const callygraphySymbols = {
//   ...symbols,
//   ja: symbols.ja.map(obj =>
//     Object.assign(obj, {
//       element: React.cloneElement(obj.element, {
//         class: `${obj.element.props.className} ${idiomClassName}`
//       })
//     })
//   )
// }
