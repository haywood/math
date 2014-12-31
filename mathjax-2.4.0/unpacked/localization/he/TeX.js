/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/localization/he/TeX.js
 *
 *  Copyright (c) 2009-2014 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

MathJax.Localization.addTranslation("he","TeX",{
        version: "2.4.0",
        isLoaded: true,
        strings: {
          ExtraOpenMissingClose: "\u05E1\u05D5\u05D2\u05E8 \u05E4\u05EA\u05D9\u05D7\u05D4 \u05DE\u05D9\u05D5\u05EA\u05E8 \u05D0\u05D5 \u05E1\u05D5\u05D2\u05E8 \u05E1\u05D9\u05D5\u05DD \u05D7\u05E1\u05E8",
          ExtraCloseMissingOpen: "\u05E1\u05D5\u05D2\u05E8 \u05E1\u05D9\u05D5\u05DD \u05DE\u05D9\u05D5\u05EA\u05E8 \u05D0\u05D5 \u05E1\u05D5\u05D2\u05E8 \u05E4\u05EA\u05D9\u05D7\u05D4 \u05D7\u05E1\u05E8",
          MissingLeftExtraRight: "\u05D7\u05D5\u05E7 \u200E\\left \u05D7\u05E1\u05E8 \u05D0\u05D5 \u05D7\u05D5\u05E7 \u200E\\right \u05DE\u05D9\u05D5\u05EA\u05E8",
          MissingScript: "\u05D7\u05E1\u05E8 \u05D0\u05E8\u05D2\u05D5\u05DE\u05E0\u05D8 \u05DB\u05EA\u05D1 \u05E2\u05D9\u05DC\u05D9 \u05D0\u05D5 \u05DB\u05EA\u05D1 \u05EA\u05D7\u05EA\u05D9",
          ExtraLeftMissingRight: "\u200E\\left \u05DE\u05D9\u05D5\u05EA\u05E8 \u05D0\u05D5 \u05D7\u05D5\u05E7 \u200E\\right \u05D7\u05E1\u05E8",
          Misplaced: "%1 \u05D1\u05DE\u05E7\u05D5\u05DD \u05E9\u05D2\u05D5\u05D9",
          MissingOpenForSub: "\u05E1\u05D5\u05D2\u05E8 \u05E4\u05EA\u05D9\u05D7\u05D4 \u05D7\u05E1\u05E8 \u05DC\u05DB\u05EA\u05D1 \u05EA\u05D7\u05EA\u05D9",
          MissingOpenForSup: "\u05E1\u05D5\u05D2\u05E8 \u05E4\u05EA\u05D9\u05D7\u05D4 \u05D7\u05E1\u05E8 \u05DC\u05DB\u05EA\u05D1 \u05E2\u05D9\u05DC\u05D9",
          AmbiguousUseOf: "\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D3\u05D5\u05BE\u05DE\u05E9\u05DE\u05E2\u05D9 \u05D1\u05BE\u200E%1",
          EnvBadEnd: "\u200E\\begin{%1}\u200E \u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1\u05BE\u200E\\end{%2}\u200E",
          EnvMissingEnd: "\u200E\\end{%1}\u200E \u05D7\u05E1\u05E8",
          MissingBoxFor: "\u05D7\u05E1\u05E8\u05D4 \u05EA\u05D9\u05D1\u05D4 \u05E2\u05D1\u05D5\u05E8 %1",
          MissingCloseBrace: "\u05E1\u05D5\u05D2\u05E8 \u05E1\u05D9\u05D5\u05DD \u05D7\u05E1\u05E8",
          UndefinedControlSequence: "\u05E8\u05E6\u05E3 \u05D1\u05E7\u05E8\u05D4 \u05D1\u05DC\u05EA\u05D9\u05BE\u05DE\u05D5\u05D2\u05D3\u05E8 %1",
          DoubleExponent: "\u05DE\u05E2\u05E8\u05D9\u05DA \u05DB\u05E4\u05D5\u05DC: \u05D9\u05E9 \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05E1\u05D5\u05D2\u05E8\u05D9\u05D9\u05DD \u05DC\u05D4\u05D1\u05D4\u05E8\u05D4",
          DoubleSubscripts: "\u05DB\u05EA\u05D1 \u05EA\u05D7\u05EA\u05D9 \u05DB\u05E4\u05D5\u05DC: \u05D9\u05E9 \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05E1\u05D5\u05D2\u05E8\u05D9\u05D9\u05DD \u05DC\u05D4\u05D1\u05D4\u05E8\u05D4",
          DoubleExponentPrime: "\u05EA\u05D2 \u05D2\u05D5\u05E8\u05DD \u05DC\u05DE\u05E2\u05E8\u05D9\u05DA \u05DB\u05E4\u05D5\u05DC; \u05D9\u05E9 \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05E1\u05D5\u05D2\u05E8\u05D9\u05D9\u05DD \u05DC\u05D4\u05D1\u05D4\u05E8\u05D4",
          CantUseHash1: "\u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\"\u05EA\u05D5 \u05DE\u05E7\u05E8\u05D5 \u05E4\u05E8\u05DE\u05D8\u05E8 #\" \u05D1\u05DE\u05E6\u05D1 \u05DE\u05EA\u05DE\u05D8\u05D9\u05E7\u05D4",
          MisplacedMiddle: "\u05E2\u05DC \u200E%1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05D9\u05DF \u200E\\left \u05DC\u05BE\u200E\\right",
          MisplacedLimits: "\u05DE\u05D5\u05EA\u05E8 \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05BE\u200E%1 \u05E8\u05E7 \u05D1\u05D0\u05D5\u05E4\u05E8\u05D8\u05D5\u05E8\u05D9\u05DD",
          MisplacedMoveRoot: "\u05E2\u05DC \u200E%1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05EA\u05D5\u05DA \u05E9\u05D5\u05E8\u05E9",
          MultipleCommand: "\u05DE\u05E1\u05E4\u05E8 \u05DE\u05E8\u05D5\u05D1\u05D4 \u05E9\u05DC \u200E%1",
          IntegerArg: "\u05D4\u05D0\u05E8\u05D2\u05D5\u05DE\u05E0\u05D8 \u05DC\u05BE\u200E%1 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05E1\u05E4\u05E8 \u05E9\u05DC\u05DD",
          NotMathMLToken: "%1 \u05D0\u05D9\u05E0\u05D5 \u05D0\u05DC\u05DE\u05E0\u05D8 token \u05EA\u05E7\u05D9\u05DF",
          InvalidMathMLAttr: "\u05DE\u05D0\u05E4\u05D9\u05D9\u05DF MathML \u05D1\u05DC\u05EA\u05D9\u05BE\u05EA\u05E7\u05D9\u05DF: %1",
          UnknownAttrForElement: "\u05D4\u05DE\u05D0\u05E4\u05D9\u05D9\u05DF %1 \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D5\u05BC\u05DB\u05E8 \u05D1\u05EA\u05D5\u05E8 \u05DE\u05D0\u05E4\u05D9\u05D9\u05DF \u05E9\u05DC %2",
          MaxMacroSub1: "\u05DE\u05E1\u05E4\u05E8 \u05E8\u05D1 \u05DE\u05D3\u05D9 \u05E9\u05DC \u05D4\u05D7\u05DC\u05E4\u05D5\u05EA \u05D4\u05DE\u05E7\u05E8\u05D5 \u05D1\u05BEMathJax; \u05D4\u05D0\u05DD \u05D9\u05E9 \u05E7\u05E8\u05D9\u05D0\u05D4 \u05E8\u05E7\u05D5\u05E8\u05E1\u05D9\u05D1\u05D9\u05EA \u05DC\u05DE\u05E7\u05E8\u05D5?",
          MaxMacroSub2: "\u05DE\u05E1\u05E4\u05E8 \u05E8\u05D1 \u05DE\u05D3\u05D9 \u05E9\u05DC \u05D4\u05D4\u05D7\u05DC\u05E4\u05D5\u05EA \u05D1\u05BEMathJax; \u05D4\u05D0\u05DD \u05D9\u05E9 \u05E1\u05D1\u05D9\u05D1\u05EA LaTeX \u05E8\u05E7\u05D5\u05E8\u05E1\u05D9\u05D1\u05D9\u05EA?",
          MissingArgFor: "\u05D0\u05E8\u05D2\u05D5\u05DE\u05E0\u05D8 \u05D7\u05E1\u05E8 \u05E2\u05D1\u05D5\u05E8 \u05C2%1",
          ExtraAlignTab: "\u05D8\u05D0\u05D1 \u05D9\u05D9\u05E9\u05D5\u05E8 \u05DE\u05D9\u05D5\u05EA\u05E8 \u05D1\u05D8\u05E7\u05E1\u05D8 \u05D1\u05BE\u200E\\cases",
          BracketMustBeDimension: "\u05D0\u05E8\u05D2\u05D5\u05DE\u05E0\u05D8 \u05D1\u05E1\u05D5\u05D2\u05E8\u05D9\u05D9\u05DD \u05D1\u05BE\u200E%1 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DE\u05D3",
          InvalidEnv: "\u05E9\u05DD \u05E1\u05D1\u05D9\u05D1\u05D4 \u05D1\u05DC\u05EA\u05D9\u05BE\u05EA\u05E7\u05D9\u05DF '%1'",
          UnknownEnv: "\u05E1\u05D1\u05D9\u05D1\u05D4 \u05D1\u05DC\u05EA\u05D9\u05BE\u05D9\u05D3\u05D5\u05E2\u05D4 '%1'",
          ExtraCloseLooking: "\u05E0\u05DE\u05E6\u05D0 \u05E1\u05D5\u05D2\u05E8 \u05E1\u05D9\u05D5\u05DD \u05DE\u05D9\u05D5\u05EA\u05E8 \u05D1\u05E2\u05EA \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D0\u05D7\u05E8 %1",
          MissingCloseBracket: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0 '\u202A]\u202C' \u05DE\u05E1\u05D9\u05D9\u05DD \u05E2\u05D1\u05D5\u05E8 \u05D0\u05E8\u05D2\u05D5\u05DE\u05E0\u05D8 \u05DC\u05BE\u200E%1",
          MissingOrUnrecognizedDelim: "\u05EA\u05D5\u05D7\u05DD \u05D7\u05E1\u05E8 \u05D1\u05DC\u05EA\u05D9\u05BE\u05DE\u05D5\u05BC\u05DB\u05E8 \u05E2\u05D1\u05D5\u05E8 \u200E%1",
          MissingDimOrUnits: "\u05D7\u05E1\u05E8 \u05DE\u05DE\u05D3 \u05D0\u05D5 \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E2\u05D1\u05D5\u05E8 \u200E%1",
          TokenNotFoundForCommand: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0 %1 \u05E2\u05D1\u05D5\u05E8 %2",
          MathNotTerminated: "\u05E0\u05D5\u05E1\u05D7\u05D4 \u05DE\u05EA\u05DE\u05D8\u05D9\u05EA \u05DC\u05D0 \u05D2\u05DE\u05D5\u05E8\u05D4 \u05D1\u05EA\u05D9\u05D1\u05EA \u05D4\u05D8\u05E7\u05E1\u05D8",
          IllegalMacroParam: "\u05D4\u05E4\u05E0\u05D9\u05D4 \u05D1\u05DC\u05EA\u05D9\u05BE\u05EA\u05E7\u05D9\u05E0\u05D4 \u05DC\u05E4\u05E8\u05DE\u05D8\u05E8 \u05E9\u05DC \u05DE\u05E7\u05E8\u05D5",
          MaxBufferSize: "\u05DE\u05D0\u05D2\u05E8 MathJax \u05E4\u05E0\u05D9\u05DE\u05D9 \u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9; \u05D4\u05D0\u05DD \u05D9\u05E9 \u05DB\u05D0\u05DF \u05E7\u05E8\u05D9\u05D0\u05EA \u05DE\u05E7\u05E8\u05D5 \u05E8\u05E7\u05D5\u05E8\u05E1\u05D9\u05D1\u05D9\u05EA?",
          CommandNotAllowedInEnv: "\u200E%1 \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D5\u05E8\u05E9\u05D4 \u05D1\u05E1\u05D1\u05D9\u05D1\u05D4 %2",
          MultipleLabel: "\u05D4\u05EA\u05D5\u05D5\u05D9\u05EA '%1' \u05DE\u05D5\u05D2\u05D3\u05E8\u05EA \u05DE\u05E1\u05E4\u05E8 \u05E4\u05E2\u05DE\u05D9\u05DD",
          CommandAtTheBeginingOfLine: "\u05D4\u05DE\u05E7\u05E8\u05D5 %1 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05DB\u05EA\u05D1 \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05D4\u05E9\u05D5\u05E8\u05D4",
          IllegalAlign: "\u05D9\u05D9\u05E9\u05D5\u05E8 \u05D1\u05DC\u05EA\u05D9\u05BE\u05EA\u05E7\u05D9\u05DF \u05D4\u05D5\u05D2\u05D3\u05E8 \u05D1\u05BE\u200E%1",
          BadMathStyleFor: "\u05E1\u05D2\u05E0\u05D5\u05DF \u05E0\u05D5\u05E1\u05D7\u05D4 \u05D2\u05E8\u05D5\u05E2 \u05E2\u05D1\u05D5\u05E8 \u200E%1",
          PositiveIntegerArg: "\u05D4\u05D0\u05E8\u05D2\u05D5\u05DE\u05E0\u05D8 \u05DC\u05BE\u200E%1 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05E9\u05DC\u05DD \u05D7\u05D9\u05D5\u05D1\u05D9",
          ErroneousNestingEq: "\u05E7\u05D9\u05E0\u05D5\u05DF \u05E9\u05D2\u05D5\u05D9 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D9 \u05DE\u05E9\u05D5\u05D5\u05D0\u05D4",
          MultlineRowsOneCol: "\u05DC\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05EA\u05D5\u05DA \u05D4\u05E1\u05D1\u05D9\u05D1\u05D4 %1 \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05E8\u05E7 \u05E2\u05DE\u05D5\u05D3\u05D4 \u05D0\u05D7\u05EA",
          MultipleBBoxProperty: "\u05D4\u05DE\u05D0\u05E4\u05D9\u05D9\u05DF %1 \u05D4\u05D5\u05D2\u05D3\u05E8 \u05E4\u05E2\u05DE\u05D9\u05D9\u05DD \u05D1\u05BE\u200E%2",
          InvalidBBoxProperty: "\u05D4\u05DE\u05D0\u05E4\u05D9\u05D9\u05DF '%1' \u05D0\u05D9\u05E0\u05D5 \u05E0\u05E8\u05D0\u05D4 \u05DB\u05DE\u05D5 \u05E6\u05D1\u05E2, \u05DE\u05DE\u05D3 \u05D3\u05D9\u05E4\u05D5\u05DF \u05D0\u05D5 \u05E1\u05D2\u05E0\u05D5\u05DF",
          ExtraEndMissingBegin: "\u05E0\u05DE\u05E6\u05D0 \u200E%1 \u05DE\u05D9\u05D5\u05EA\u05E8 \u05D0\u05D5 \u200E\\begingroup \u05D7\u05E1\u05E8",
          GlobalNotFollowedBy: "\u200E%1 \u05E9\u05D0\u05D9\u05DF \u05D0\u05D7\u05E8\u05D9\u05D5 \u200E\\let\u200F, \u200E\\def \u05D0\u05D5 \u200E\\newcommand",
          UndefinedColorModel: "\u05D3\u05D2\u05DD \u05D4\u05E6\u05D1\u05E2 '%1' \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D5\u05D2\u05D3\u05E8",
          ModelArg1: "\u05E2\u05E8\u05DB\u05D9 \u05E6\u05D1\u05E2 \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D3\u05D2\u05DD %1 \u05D3\u05D5\u05E8\u05E9\u05D9\u05DD 3 \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD",
          InvalidDecimalNumber: "\u05DE\u05E1\u05E4\u05E8 \u05E2\u05E9\u05E8\u05D5\u05E0\u05D9 \u05D1\u05DC\u05EA\u05D9\u05BE\u05EA\u05E7\u05D9\u05DF",
          ModelArg2: "\u05E2\u05E8\u05DB\u05D9 \u05E6\u05D1\u05E2 \u05E2\u05D1\u05D5\u05E8 \u05D3\u05D2\u05DD %1 \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05D9\u05DF %2 \u05DC\u05D1\u05D9\u05DF %3",
          InvalidNumber: "\u05DE\u05E1\u05E4\u05E8 \u05D1\u05DC\u05EA\u05D9\u05BE\u05EA\u05E7\u05D9\u05DF",
          NewextarrowArg1: "\u05D4\u05D0\u05E8\u05D2\u05D5\u05DE\u05E0\u05D8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05DC\u05BE\u200E%1 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05E9\u05DD \u05E8\u05E6\u05E3 \u05D1\u05E7\u05E8\u05D4",
          NewextarrowArg2: "\u05D4\u05D0\u05E8\u05D2\u05D5\u05DE\u05E0\u05D8 \u05D4\u05E9\u05E0\u05D9 \u05DC\u05BE\u200E%1 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05E9\u05DC\u05DE\u05D9\u05DD \u05DE\u05D5\u05E4\u05E8\u05D3\u05D9\u05DD \u05D1\u05E4\u05E1\u05D9\u05E7",
          NewextarrowArg3: "\u05D4\u05D0\u05E8\u05D2\u05D5\u05DE\u05E0\u05D8 \u05D4\u05E9\u05DC\u05D9\u05E9\u05D9 \u05DC\u05BE\u200E%1 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05E1\u05E4\u05E8 \u05EA\u05D5 \u05D9\u05D5\u05E0\u05D9\u05E7\u05D5\u05D3",
          NoClosingChar: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0 %1 \u05DE\u05E1\u05D9\u05D9\u05DD",
          IllegalControlSequenceName: "\u05E9\u05DD \u05E8\u05E6\u05E3 \u05D1\u05E7\u05E8\u05D4 \u05D1\u05DC\u05EA\u05D9\u05BE\u05EA\u05E7\u05D9\u05DF \u05E2\u05D1\u05D5\u05E8 \u200E%1",
          IllegalParamNumber: "\u05DE\u05E1\u05E4\u05E8 \u05D1\u05DC\u05EA\u05D9\u05BE\u05EA\u05E7\u05D9\u05DF \u05E9\u05DC \u05E4\u05E8\u05DE\u05D8\u05E8\u05D9\u05DD \u05D4\u05D5\u05D2\u05D3\u05E8 \u05D1\u05BE\u200E%1",
          MissingCS: "\u05D0\u05D7\u05E8\u05D9 \u200E%1 \u05D9\u05E9 \u05DC\u05DB\u05EA\u05D5\u05D1 \u05E8\u05E6\u05E3 \u05D1\u05E7\u05E8\u05D4",
          CantUseHash2: "\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05DC\u05EA\u05D9\u05BE\u05EA\u05E7\u05D9\u05DF \u05D1\u05BE# \u05D1\u05EA\u05D1\u05E0\u05D9\u05EA \u05E2\u05D1\u05D5\u05E8 %1",
          SequentialParam: "\u05D4\u05E4\u05E8\u05DE\u05D8\u05E8\u05D9\u05DD \u05E2\u05D1\u05D5\u05E8 %1 \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DE\u05D5\u05E1\u05E4\u05E8\u05D9\u05DD \u05D1\u05E8\u05E6\u05E3",
          MissingReplacementString: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D4\u05D7\u05DC\u05E4\u05D4 \u05D7\u05E1\u05E8\u05D4 \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D4\u05D2\u05D3\u05E8\u05D4 \u05E9\u05DC \u200E%1",
          MismatchUseDef: "\u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05BE\u200E%1 \u05D0\u05D9\u05E0\u05D5 \u05EA\u05D5\u05D0\u05DD \u05DC\u05D4\u05D2\u05D3\u05E8\u05D4 \u05E9\u05DC\u05D5",
          RunawayArgument: "\u05D0\u05E8\u05D2\u05D5\u05DE\u05E0\u05D8 \u05D1\u05E8\u05D7 \u05DE\u05BE\u200E%1?",
          NoClosingDelim: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0 \u05EA\u05D5\u05D7\u05DD \u05DE\u05E1\u05D9\u05D9\u05DD \u05E2\u05D1\u05D5\u05E8 \u200E%1"
        }
});

MathJax.Ajax.loadComplete("[MathJax]/localization/he/TeX.js");
