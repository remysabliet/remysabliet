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
          className="faded-out"
          firstStrokeClassName="punctuation-delay"
        />
      )
    },
    {
      class: 'a2',
      element: <NHira className="faded-out" />
    },
    {
      class: 'a3',
      element: <NiHira className="faded-out" />
    },
    {
      class: 'a4',
      element: <ChiHira className="faded-out" />
    },
    {
      class: 'a5',
      element: <HaHira className="faded-out" />
    },
    {
      class: 'a6',
      element: <Ten className="faded-out" />
    },
    {
      class: 'a7',
      element: (
        <ReKata
          className="faded-out"
          firstStrokeClassName="punctuation-delay"
        />
      )
    },
    {
      class: 'a8',
      element: <MiKata className="faded-out" />
    },
    {
      class: 'a9',
      element: <DeHira className="faded-out" />
    },
    {
      class: 'a10',
      element: <SuHira className="faded-out" />
    },
    {
      class: 'a11',
      element: <Maru className="faded-out" />
    },
    {
      class: 'b1',
      element: (
        <Watashi
          className="faded-out"
          firstStrokeClassName="punctuation-delay"
        />
      )
    },
    {
      class: 'b2',
      element: <NoHira className="faded-out" />
    },
    {
      class: 'b3',
      element: <PeKata className="faded-out" />
    },
    {
      class: 'b4',
      element: (
        <VertiBarreKata className="faded-out" />
      )
    },
    {
      class: 'b5',
      element: <JiKata className="faded-out" />
    },
    {
      class: 'b6',
      element: <NiHira className="faded-out" />
    },
    {
      class: 'b7',
      element: <YoHira className="faded-out" />
    },
    {
      class: 'b8',
      element: <UHira className="faded-out" />
    },
    {
      class: 'b9',
      element: <KoHira className="faded-out" />
    },
    {
      class: 'b10',
      element: <SoHira className="faded-out" />
    },
    {
      class: 'b11',
      element: <Maru className="faded-out" />
    },
    {
      class: 'c1',
      element: (
        <Yume
          className="faded-out"
          firstStrokeClassName="punctuation-delay"
        />
      )
    },
    {
      class: 'c2',
      element: <Ou className="faded-out" />
    },
    {
      class: 'c3',
      element: <IHira className="faded-out" />
    },
    {
      class: 'c4',
      element: <Hito className="faded-out" />
    },
    {
      class: 'c5',
      element: <DeHira className="faded-out" />
    },
    {
      class: 'c6',
      element: <Ten className="faded-out" />
    },
    {
      class: 'c7',
      element: (
        <Atarashii
          className="faded-out"
          firstStrokeClassName="punctuation-delay"
        />
      )
    },
    {
      class: 'c8',
      element: <ShiHira className="faded-out" />
    },
    {
      class: 'c9',
      element: <IHira className="faded-out" />
    },
    {
      class: 'c10',
      element: <KoHira className="faded-out" />
    },
    {
      class: 'c11',
      element: <ToHira className="faded-out" />
    },
    {
      class: 'd0',
      element: <NiHira className="faded-out" />
    },
    {
      class: 'd1',
      element: <Idomu className="faded-out" />
    },
    {
      class: 'd2',
      element: <Tatakau className="faded-out" />
    },
    {
      class: 'd3',
      element: <SuHira className="faded-out" />
    },
    {
      class: 'd4',
      element: <RuHira className="faded-out" />
    },
    {
      class: 'd5',
      element: <KoHira className="faded-out" />
    },
    {
      class: 'd6',
      element: <ToHira className="faded-out" />
    },
    {
      class: 'd7',
      element: <GaHira className="faded-out" />
    },
    {
      class: 'd8',
      element: <Ooki className="faded-out" />
    },
    {
      class: 'd9',
      element: <Suki className="faded-out" />
    },
    {
      class: 'd10',
      element: <KiHira className="faded-out" />
    },
    {
      class: 'd11',
      element: <DeHira className="faded-out" />
    },
    {
      class: 'e0',
      element: <SuHira className="faded-out" />
    },
    {
      class: 'e1',
      element: <Maru className="faded-out" />
    },
    {
      class: 'f1',
      element: (
        <Hitotsu
          className="faded-out"
          firstStrokeClassName="punctuation-delay"
        />
      )
    },
    {
      class: 'f2',
      element: <O className="faded-out" />
    },
    {
      class: 'f3',
      element: <NiHira className="faded-out" />
    },
    {
      class: 'f4',
      element: <Ashita className="faded-out" />
    },
    {
      class: 'f5',
      element: <Hi className="faded-out" />
    },
    {
      class: 'f6',
      element: <WoHira className="faded-out" />
    },
    {
      class: 'f7',
      element: <Tsukuru className="faded-out" />
    },
    {
      class: 'f8',
      element: <RiHira className="faded-out" />
    },
    {
      class: 'f9',
      element: <MaHira className="faded-out" />
    },
    {
      class: 'f10',
      element: <SeHira className="faded-out" />
    },
    {
      class: 'f11',
      element: <NHira className="faded-out" />
    },
    {
      class: 'g0',
      element: <KaHira className="faded-out" />
    },
    {
      class: 'g1',
      element: (
        <QuestionMark className="faded-out" />
      )
    }
  ],
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

// We add an additional className property to all the element of the array
const idiomClassName = { className: 'faded-out' }

export const callygraphySymbols = {
  ...symbols,
  ja: symbols.ja.map(obj =>
    Object.assign(obj, {
      element: React.cloneElement(obj.element, {
        class: `${obj.element.props.className} ${idiomClassName}`
      })
    })
  )
}
