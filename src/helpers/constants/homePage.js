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

export const symbols = {
  empty: [], // used for refresh purpose
  ja: [
    {
      class: 'a1',
      element: (
        <KoHira className="faded-out" firstStrokeClassName="punctuation-delay" />
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
      element: (
        <ReKata
          className="faded-out"
          firstStrokeClassName="punctuation-delay"
        />
      )
    },
    {
      class: 'a7',
      element: <MiKata className="faded-out" />
    },
    {
      class: 'a8',
      element: <DeHira className="faded-out" />
    },
    {
      class: 'a9',
      element: <SuHira className="faded-out" />
    },
    {
      class: 'b0',
      element: (
        <Watashi className="faded-out" firstStrokeClassName="punctuation-delay" />
      )
    },
    {
      class: 'b1',
      element: <NoHira className="faded-out" />
    },
    {
      class: 'b2',
      element: <PeKata className="faded-out" />
    },
    {
      class: 'b3',
      element: (
        <VertiBarreKata className="faded-out" />
      )
    },
    {
      class: 'b4',
      element: <JiKata className="faded-out" />
    },
    {
      class: 'b5',
      element: <NiHira className="faded-out" />
    },
    {
      class: 'b6',
      element: <YoHira className="faded-out" />
    },
    {
      class: 'b7',
      element: <UHira className="faded-out" />
    },
    {
      class: 'b8',
      element: <KoHira className="faded-out" />
    },
    {
      class: 'b9',
      element: <SoHira className="faded-out" />
    },
    {
      class: 'c0',
      element: (
        <Yume className="faded-out" firstStrokeClassName="punctuation-delay" />
      )
    },
    {
      class: 'c1',
      element: <Ou className="faded-out" />
    },
    {
      class: 'c2',
      element: <IHira className="faded-out" />
    },
    { class: 'c3', element: <Hito className="faded-out" /> },
    { class: 'c4', element: <DeHira className="faded-out"/> },
    {
      class: 'c5',
      element: (
        <Atarashii className="faded-out" firstStrokeClassName="punctuation-delay" />
      )
    },
    { class: 'c6', element: <ShiHira className="faded-out"/> },
    { class: 'c7', element: <IHira className="faded-out"/> },
    { class: 'c8', element: <KoHira className="faded-out"/> },
    { class: 'c9', element: <ToHira className="faded-out"/> },
    { class: 'd0', element: <NiHira className="faded-out"/> },
    { class: 'd1', element: <Idomu className="faded-out"/> },
    { class: 'd2', element: <Tatakau className="faded-out"/> },
    { class: 'd3', element: <SuHira className="faded-out"/> },
    { class: 'd4', element: <RuHira className="faded-out"/> },
    { class: 'd5', element: <KoHira className="faded-out"/> },
    { class: 'd6', element: <ToHira className="faded-out"/> },
    { class: 'd7', element: <GaHira className="faded-out"/> },
    { class: 'd8', element: <Ooki className="faded-out"/> },
    { class: 'd9', element: <Suki className="faded-out"/> },
    { class: 'e0', element: <KiHira className="faded-out"/> },
    { class: 'e1', element: <DeHira className="faded-out"/> },
    { class: 'e2', element: <SuHira className="faded-out"/> },
    {
      class: 'f0',
      element: (
        <Hitotsu className="faded-out" firstStrokeClassName="punctuation-delay" />
      )
    },
    { class: 'f1', element: <O className="faded-out"/> },
    { class: 'f2', element: <NiHira className="faded-out"/> },
    { class: 'f3', element: <Ashita className="faded-out"/> },
    { class: 'f4', element: <Hi className="faded-out"/> },
    { class: 'f5', element: <WoHira className="faded-out"/> },
    { class: 'f6', element: <Tsukuru className="faded-out"/> },
    { class: 'f7', element: <RiHira className="faded-out"/> },
    { class: 'f8', element: <MaHira className="faded-out"/> },
    { class: 'f9', element: <SeHira className="faded-out"/> },
    { class: 'g0', element: <NHira className="faded-out"/> },
    { class: 'g1', element: <KaHira className="faded-out"/> }
  ],
  en: [
    { class: 'a1', element: <SuHira className="faded-out"/> },
    { class: 'a2', element: <SuHira className="faded-out"/> }
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
