


// 121043 131527
function intFromBytes(e) {
  for (var t = 0, n = 0; n < e.length; ++n) {
    t += e[n];
    n < e.length - 1 && (t <<= 8);
  }
  return t;
};

// 122481
function decode(e) {
  var t, n, o, i, r, a, s, c = "", l = 0;
  e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  for (;l < e.length; ) {
    i = this._keyStr.indexOf(e.charAt(l++));
    r = this._keyStr.indexOf(e.charAt(l++));
    a = this._keyStr.indexOf(e.charAt(l++));
    s = this._keyStr.indexOf(e.charAt(l++));
    t = i << 2 | r >> 4;
    n = (15 & r) << 4 | a >> 2;
    o = (3 & a) << 6 | s;
    c += String.fromCharCode(t);
    64 != a && (c += String.fromCharCode(n));
    64 != s && (c += String.fromCharCode(o));
  }
  return c = this._utf8_decode(c);
};

// 123108
// BitHandler: [
//   function(e, t, n) {
//     "use strict";
//     cc._RF.push(t, "50a77Lq8yBGPIkY+osBjmH2", "BitHandler");
//     Object.defineProperty(n, "__esModule", {
//       value: !0
//     });
//     var o = function() {
//     function e() {}
//     e.reverse_bits = function(e, t) {
//       for (var n = 0, o = 0; o < t; o++) {
//         n = (n << 1) + (1 & e);
//         e >>= 1;
//       }
//       return n;
//     };
//     e.swapoddeven_32bits = function(e) {
//       return (2863311530 & e) >>> 1 | (1431655765 & e) << 1;
//     };
//     e.swapoddeven_16bits = function(e) {
//       return (43690 & e) >>> 1 | (21845 & e) << 1;
//     };
//     e.swapoddeven_8bits = function(e) {
//       return (170 & e) >>> 1 | (85 & e) << 1;
//     };
//     e.readLeftBitFromByte = function(e, t, n) {
//       return e >>> t - n;
//     };
//     e.readRightBitFromByte = function(e, t, n) {
//       var o = 255;
//       8 == t ? o = 255 : 16 == t ? o = 65535 : 32 == t && (o = 4294967295);
//       return e & o >>> t - n;
//     };
//     e.getReadMidNumFromByte = function(e, t, n, o) {
//       var i = this.readLeftBitFromByte(e, t, o);
//       return this.readRightBitFromByte(i, t, o - n);
//     };
//     e.concatBinaryNumber = function(e, t, n) {
//       return e << n | t;
//     };
//     e.RunTestFunc = function() {
//       var e = 3481132477;
//       console.log("###################current data :" + e);
//       console.log("###################current data :" + e.toString(2));
//       var t = this.readLeftBitFromByte(e, 32, 3);
//       console.log("###################current rd1 :" + t);
//       console.log("###################current rd1 :" + t.toString(2));
//       var n = this.readRightBitFromByte(e, 32, 3);
//       console.log("###################current rd2 :" + n);
//       console.log("###################current rd2 :" + n.toString(2));
//       var o = this.getReadMidNumFromByte(e, 32, 4, 15);
//       console.log("###################current rd3 :" + o);
//       console.log("###################current rd3 :" + o.toString(2));
//     };
//     return e;
//   }();
//   n.BitHandler = o;
//   cc._RF.pop();
// }, {} ],

//123824 ByteArray
function createBuffer(e) {
  e instanceof ArrayBuffer ? this.buffer = e : this.buffer = new ArrayBuffer(e);
  this.rpos = 0;
  this.wpos = 0;
};


function readLeftBitFromByte(e, t, n) {
  return e >>> t - n;
};


// 166049
this.webSocket.onmessage = function(e) {
var t = this;
if (HMFClient.autoReconObToast) {
clearTimeout(HMFClient.autoReconObToast);
HMFClient.autoReconObToast = null;
}
HMFUtils.decodeProtoMsg(e.data, function(e) {
var n = HMFUtils.objToObj(e);
if (n.newToken && n.newToken.length > 0 && CurrentUserInfo.sessionToken != n.newToken) {
CurrentUserInfo.sessionToken = n.newToken;
t.sessionToken = n.newToken;
3 === HMFAppConfig.platform && cc.vv.toast.showToast("game-接受到新token:" + CurrentUserInfo.sessionToken);
}
HMFAppConfig.platform;
s._handleReloginError(n);
HMFClient.sharedInstance()._invokeCallbackSuccessed(n.callbackId, n);
s._dispatchMessageToCC(n);
});
};

// 222059
function onmessage(e) {
  var t = new i.ByteArray();
  t.createBuffer(e.data);
  t.wpos = e.data.byteLength;
  var n = t.readUint32(), o = t.readUint32();
  this._xorValue = o;
  var r = parsePolicyData(t, n, o);
  if (r.length < 1)
    console.log("Error: onmessage retHeaderArray is null.");
  else {
    var c = r[0], l = r[1], u = r[2], d = r[3], p = r[4], h = r[5], f = r[6];
    cc.log("收包:  u16Msgid:" + d + "  U32serverid:" + l + "  U32serverType:" + c + "  u16PackLen:" + u + "  u32seq:" + p + "  U32playerid:" + h + "  U32roomid:" + f);
    var _, g = t.getbuffer(), m = this.isEncrypt(l);
    if (m) {
      _ = s.aesHandler.DecryptBytes(g);
      console.log(_);
    } else
      console.log(g);
    a.default.roomManager.checkGameIsZoom(l) ? l = a.default.Enum.GameId.Texas : l !== a.default.Enum.GameId.Bet && l !== a.default.Enum.GameId.StarSeat && l !== a.default.Enum.GameId.Plo || (l = a.default.Enum.GameId.Texas);
    var y = this.handlers.get(l);
    if (y) {
      var b = y.get(d);
      if ("function" == typeof b)
      {
        if (1 == a.default.config.GET_DEBUG_MODE())
          b(m ? _ : g, d);
        else try {
          b(m ? _ : g, d);
        } catch (e) {
          console.error("onmessage err:" + e);
          return;
        }
        a.default.LoadingView.removeWebSocketMsg(l, d);
      } else console.log("未注册消息id = " + d);
    } else console.log("未注册游戏id = " + l);
  }
};

// 222114
function isEncrypt(e) {
  var t = a.default.dataHandler.getUserData().isEncrypt, n = a.default.StringTools.getArrayLength(t);
  if (a.default.roomManager.checkGameIsZoom(e)) {
    for (var o = a.default.Enum.GameId.ZoomTexas; o <= a.default.Enum.GameId.ZoomTexasMax; o++) for (var i = 0; i < n; i++) if (o == t[i]) return !0;
  } else
  for (o = 0; o < n; o++)
    if (e == t[o]) return !0;
  return !1;
};


// 269956 aesHandler
function DecryptBytes(e) {
  e = new Int8Array(e);
  for (var t = o.enc.Utf8.parse(i.default.dataHandler.getUserData().secretKey), n = this.Int8parse(e), r = o.enc.Base64.stringify(n), a = o.AES.decrypt(r, t, {
  mode: o.mode.ECB,
  padding: o.pad.Pkcs7
  }), s = [], c = a.words.length, l = 0; l < c; l++) {
  var u = this.intTobytes(a.words[l]);
  if (!(a.sigBytes / 4 >= l + 1)) {
  var d = a.sigBytes % 4;
  for (p = 0; p < d; p++) s.push(u[p]);
  break;
  }
  for (var p = 0; p < 4; p++) s.push(u[p]);
  if (a.sigBytes / 4 == l + 1) break;
  }
  return new Int8Array(s);
};


function parsePolicyData(e, t, n) {
  var o = 0, i = [], r = new c.HashMap(), a = t, s = readLeftBitFromByte(a, 32, 8);
  o += 8;
  if (140 != s && 122 != s) {
    console.log("Error: parsePolicyData error. unknow msgHeaderFlag:" + s);
    return i;
  }
  if (122 == s) {
    var u = e.readUint16();
    i[0] = u;
    var d = e.readUint16();
    i[1] = d;
    var p = e.readUint16();
    i[2] = p;
    var h = e.readUint16();
    i[3] = h;
    var f = e.readUint32();
    i[4] = f;
    var _ = e.readUint32();
    i[5] = _;
    var g = e.readUint32();
    i[6] = g;
    return i;
  }
  var m = l.BitHandler.getReadMidNumFromByte(a, 32, o, o + 4);
  o += 4;
  for (var y = 0; y < 7; y++) {
    var b = 0, v = 0;
    if (32 - o < m) {
      var S = l.BitHandler.readRightBitFromByte(a, 32, 32 - o);
      a = n;
      var T = m - (32 - o), C = l.BitHandler.readLeftBitFromByte(a, 32, T);
      b = l.BitHandler.concatBinaryNumber(S, C, T);
      o = T;
    } else {
      b = l.BitHandler.getReadMidNumFromByte(a, 32, o, o + m);
      o += m;
    }
    if (32 - o < 2) {
      S = l.BitHandler.readRightBitFromByte(a, 32, 32 - o);
      a = n;
      T = 2 - (32 - o), C = l.BitHandler.readLeftBitFromByte(a, 32, T);
      v = l.BitHandler.concatBinaryNumber(S, C, T);
      o = T;
    } else {
      v = l.BitHandler.getReadMidNumFromByte(a, 32, o, o + 2);
      o += 2;
    }
    if (o >= 32) {
      a = n;
      o = 0;
    }
    r.add(b, v);
  }
  var w = l.BitHandler.readRightBitFromByte(a, 32, 3);
  for (y = 0; y < w; y++)
    e.readUint8();
  r.forEach(function(t, n, o) {
    switch (t) {
      case 0:
      var r = e.readUint16();
      i[0] = this.getValueByOp(n, 16, r);
      break;

      case 1:
      var a = e.readUint16();
      i[1] = this.getValueByOp(n, 16, a);
      break;

      case 2:
      var s = e.readUint16();
      i[2] = this.getValueByOp(n, 16, s);
      break;

      case 3:
      var c = e.readUint16();
      i[3] = this.getValueByOp(n, 16, c);
      break;

      case 4:
      var l = e.readUint32();
      i[4] = this.getValueByOp(n, 32, l);
      break;

      case 5:
      var u = e.readUint32();
      i[5] = this.getValueByOp(n, 32, u);
      break;

      case 6:
      var d = e.readUint32();
      i[6] = this.getValueByOp(n, 32, d);
    }
  }.bind(this));
  return i;
};

BitHandler: [
  function(e, t, n) {
    "use strict";
    cc._RF.push(t, "50a77Lq8yBGPIkY+osBjmH2", "BitHandler");
    Object.defineProperty(n, "__esModule", {
    value: !0
    });
    var o = function() {
    function e() {}
    e.reverse_bits = function(e, t) {
    for (var n = 0, o = 0; o < t; o++) {
    n = (n << 1) + (1 & e);
    e >>= 1;
    }
    return n;
    };
    e.swapoddeven_32bits = function(e) {
    return (2863311530 & e) >>> 1 | (1431655765 & e) << 1;
    };
    e.swapoddeven_16bits = function(e) {
    return (43690 & e) >>> 1 | (21845 & e) << 1;
    };
    e.swapoddeven_8bits = function(e) {
    return (170 & e) >>> 1 | (85 & e) << 1;
    };
    e.readLeftBitFromByte = function(e, t, n) {
    return e >>> t - n;
    };
    e.readRightBitFromByte = function(e, t, n) {
    var o = 255;
    8 == t ? o = 255 : 16 == t ? o = 65535 : 32 == t && (o = 4294967295);
    return e & o >>> t - n;
    };
    e.getReadMidNumFromByte = function(e, t, n, o) {
    var i = this.readLeftBitFromByte(e, t, o);
    return this.readRightBitFromByte(i, t, o - n);
    };
    e.concatBinaryNumber = function(e, t, n) {
    return e << n | t;
    };
    e.RunTestFunc = function() {
    var e = 3481132477;
    console.log("###################current data :" + e);
    console.log("###################current data :" + e.toString(2));
    var t = this.readLeftBitFromByte(e, 32, 3);
    console.log("###################current rd1 :" + t);
    console.log("###################current rd1 :" + t.toString(2));
    var n = this.readRightBitFromByte(e, 32, 3);
    console.log("###################current rd2 :" + n);
    console.log("###################current rd2 :" + n.toString(2));
    var o = this.getReadMidNumFromByte(e, 32, 4, 15);
    console.log("###################current rd3 :" + o);
    console.log("###################current rd3 :" + o.toString(2));
    };
    return e;
    }();
    n.BitHandler = o;
    cc._RF.pop();
}, {} ],
PokerCardDefine: [
  function(e, t, n) {
    "use strict";
    cc._RF.push(t, "30846RqZaJGc6DNTa9gsY4o", "PokerCardDefine");
    Object.defineProperty(n, "__esModule", {
    value: !0
    });
    var o, i;
    (function(e) {
      e[e.POKER_NUMBER_MASK = 15] = "POKER_NUMBER_MASK";
      e[e.POKER_SUIT_DIAMOND_MASK = 16] = "POKER_SUIT_DIAMOND_MASK";
      e[e.POKER_SUIT_CLUB_MASK = 32] = "POKER_SUIT_CLUB_MASK";
      e[e.POKER_SUIT_HEART_MASK = 64] = "POKER_SUIT_HEART_MASK";
      e[e.POKER_SUIT_SPADE_MASK = 128] = "POKER_SUIT_SPADE_MASK";
      e[e.POKER_LITTLE_JOKER_MASK = 1] = "POKER_LITTLE_JOKER_MASK";
      e[e.POKER_BIG_JOKER_MASK = 15] = "POKER_BIG_JOKER_MASK";
    })(o = n.POKER_MASK || (n.POKER_MASK = {}));
    (function(e) {
      e[e.NONE = 0] = "NONE";
      e[e.DIAMOND = 1] = "DIAMOND";
      e[e.CLUB = 2] = "CLUB";
      e[e.HEART = 3] = "HEART";
      e[e.SPADE = 4] = "SPADE";
      e[e.JOKER = 5] = "JOKER";
    })(i = n.CardSuit || (n.CardSuit = {}));
    var r = function() {
    function e() {}
      e.getCardSuit = function(e) {
      var t = i.NONE;
      e & o.POKER_SUIT_DIAMOND_MASK ? t = i.DIAMOND : e & o.POKER_SUIT_CLUB_MASK ? t = i.CLUB : e & o.POKER_SUIT_HEART_MASK ? t = i.HEART : e & o.POKER_SUIT_SPADE_MASK ? t = i.SPADE : e & o.POKER_LITTLE_JOKER_MASK ? t = i.JOKER : e & o.POKER_BIG_JOKER_MASK && (t = i.JOKER);
      return t;
      };
      e.getCardNumber = function(e) {
      return e & o.POKER_NUMBER_MASK;
      };
      e.getCardId = function(e, t) {
      return (1 << e.valueOf() + 3) + t;
      };
      return e;
    }();
    n.PokerCardDefine = r;
    cc._RF.pop();
}, {} ],
PokerData: [
  function(e, t, n) {
  "use strict";
  cc._RF.push(t, "f3ce47K34hCeYHy9VQRtUSc", "PokerData");
  Object.defineProperty(n, "__esModule", {
  value: !0
  });
  var o, i, r, a = e("../../../lobby/cv"), s = e("../../../../common/tools/Enum");
  (function(e) {
  e[e.POKER_TYPE_SINGLE = 0] = "POKER_TYPE_SINGLE";
  e[e.POKER_TYPE_PAIR = 1] = "POKER_TYPE_PAIR";
  e[e.POKER_TYPE_TWO_PAIR = 2] = "POKER_TYPE_TWO_PAIR";
  e[e.POKER_TYPE_THREE = 3] = "POKER_TYPE_THREE";
  e[e.POKER_TYPE_STRAIGHT = 4] = "POKER_TYPE_STRAIGHT";
  e[e.POKER_TYPE_FLUSH = 5] = "POKER_TYPE_FLUSH";
  e[e.POKER_TYPE_FULL_HOUSE = 6] = "POKER_TYPE_FULL_HOUSE";
  e[e.POKER_TYPE_FOUR = 7] = "POKER_TYPE_FOUR";
  e[e.POKER_TYPE_STRAIGHT_FLUSH = 8] = "POKER_TYPE_STRAIGHT_FLUSH";
  e[e.POKER_TYPE_STRAIGHT_KING = 9] = "POKER_TYPE_STRAIGHT_KING";
  })(o = n.PokerType || (n.PokerType = {}));
  (function(e) {
  e[e.POKER_VALUE_A = 0] = "POKER_VALUE_A";
  e[e.POKER_VALUE_2 = 1] = "POKER_VALUE_2";
  e[e.POKER_VALUE_3 = 2] = "POKER_VALUE_3";
  e[e.POKER_VALUE_4 = 3] = "POKER_VALUE_4";
  e[e.POKER_VALUE_5 = 4] = "POKER_VALUE_5";
  e[e.POKER_VALUE_6 = 5] = "POKER_VALUE_6";
  e[e.POKER_VALUE_7 = 6] = "POKER_VALUE_7";
  e[e.POKER_VALUE_8 = 7] = "POKER_VALUE_8";
  e[e.POKER_VALUE_9 = 8] = "POKER_VALUE_9";
  e[e.POKER_VALUE_10 = 9] = "POKER_VALUE_10";
  e[e.POKER_VALUE_J = 10] = "POKER_VALUE_J";
  e[e.POKER_VALUE_Q = 11] = "POKER_VALUE_Q";
  e[e.POKER_VALUE_K = 12] = "POKER_VALUE_K";
  e[e.POKER_VALUE_COUNT = 13] = "POKER_VALUE_COUNT";
  e[e.POKER_VALUE_BACK = 52] = "POKER_VALUE_BACK";
  e[e.POKER_VALUE_EMPTY = 53] = "POKER_VALUE_EMPTY";
  })(i = n.PokerValue || (n.PokerValue = {}));
  (function(e) {
  e[e.SHORT_POKER_VALUE_A = 0] = "SHORT_POKER_VALUE_A";
  e[e.SHORT_POKER_VALUE_6 = 1] = "SHORT_POKER_VALUE_6";
  e[e.SHORT_POKER_VALUE_7 = 2] = "SHORT_POKER_VALUE_7";
  e[e.SHORT_POKER_VALUE_8 = 3] = "SHORT_POKER_VALUE_8";
  e[e.SHORT_POKER_VALUE_9 = 4] = "SHORT_POKER_VALUE_9";
  e[e.SHORT_POKER_VALUE_10 = 5] = "SHORT_POKER_VALUE_10";
  e[e.SHORT_POKER_VALUE_J = 6] = "SHORT_POKER_VALUE_J";
  e[e.SHORT_POKER_VALUE_Q = 7] = "SHORT_POKER_VALUE_Q";
  e[e.SHORT_POKER_VALUE_K = 8] = "SHORT_POKER_VALUE_K";
  e[e.SHORT_POKER_VALUE_COUNT = 9] = "SHORT_POKER_VALUE_COUNT";
  e[e.SHORT_POKER_VALUE_BACK = 36] = "SHORT_POKER_VALUE_BACK";
  e[e.SHORT_POKER_VALUE_EMPTY = 37] = "SHORT_POKER_VALUE_EMPTY";
  })(r = n.ShortPokerValue || (n.ShortPokerValue = {}));
  var c = function() {
  function e(e) {
  this.value = 0;
  this.color = s.CardSuit.CARD_SPADE;
  this.mode = s.CreateGameMode.CreateGame_Mode_None;
  this.faceValue = 0;
  this.mode = e;
  switch (this.mode) {
  case s.CreateGameMode.CreateGame_Mode_Short:
  this.value = r.SHORT_POKER_VALUE_BACK;
  this.faceValue = r.SHORT_POKER_VALUE_EMPTY;
  this.color = 0;
  break;

  default:
  this.value = i.POKER_VALUE_BACK;
  this.faceValue = i.POKER_VALUE_EMPTY;
  this.color = 0;
  }
  }
  e.prototype.initWhitValue = function(e, t, n) {
  this.value = e;
  this.color = t;
  n && (this.mode = n);
  switch (n) {
  case s.CreateGameMode.CreateGame_Mode_Short:
  this.faceValue = (e + r.SHORT_POKER_VALUE_COUNT - 1) % r.SHORT_POKER_VALUE_COUNT;
  break;

  default:
  this.faceValue = (e + i.POKER_VALUE_COUNT - 1) % i.POKER_VALUE_COUNT;
  }
  };
  e.prototype.initWithNumber = function(e, t) {
  t && (this.mode = t);
  switch (this.mode) {
  case s.CreateGameMode.CreateGame_Mode_Short:
  this.value = e % r.SHORT_POKER_VALUE_COUNT;
  this.faceValue = (e + r.SHORT_POKER_VALUE_COUNT - 1) % r.SHORT_POKER_VALUE_COUNT;
  this.color = Math.floor(e / r.SHORT_POKER_VALUE_COUNT);
  break;

  default:
  this.value = e % i.POKER_VALUE_COUNT;
  this.faceValue = (e + i.POKER_VALUE_COUNT - 1) % i.POKER_VALUE_COUNT;
  this.color = Math.floor(e / i.POKER_VALUE_COUNT);
  }
  };
  e.prototype.getNumber = function(e) {
  var t = 0;
  switch (e) {
  case s.CreateGameMode.CreateGame_Mode_Short:
  t = this.color * r.SHORT_POKER_VALUE_COUNT + this.value;
  break;

  default:
  t = this.color * i.POKER_VALUE_COUNT + this.value;
  }
  return t;
  };
  e.getLocalValue = function(e, t) {
  var n = i.POKER_VALUE_2;
  switch (t) {
  case s.CreateGameMode.CreateGame_Mode_Short:
  switch (e) {
  case s.CardNum.CARD_6:
  n = r.SHORT_POKER_VALUE_6;
  break;

  case s.CardNum.CARD_7:
  n = r.SHORT_POKER_VALUE_7;
  break;

  case s.CardNum.CARD_8:
  n = r.SHORT_POKER_VALUE_8;
  break;

  case s.CardNum.CARD_9:
  n = r.SHORT_POKER_VALUE_9;
  break;

  case s.CardNum.CARD_10:
  n = r.SHORT_POKER_VALUE_10;
  break;

  case s.CardNum.CARD_J:
  n = r.SHORT_POKER_VALUE_J;
  break;

  case s.CardNum.CARD_Q:
  n = r.SHORT_POKER_VALUE_Q;
  break;

  case s.CardNum.CARD_K:
  n = r.SHORT_POKER_VALUE_K;
  break;

  case s.CardNum.CARD_A:
  n = r.SHORT_POKER_VALUE_A;
  break;

  default:
  n = r.SHORT_POKER_VALUE_6;
  }
  break;

  default:
  switch (e) {
  case s.CardNum.CARD_2:
  n = i.POKER_VALUE_2;
  break;

  case s.CardNum.CARD_3:
  n = i.POKER_VALUE_3;
  break;

  case s.CardNum.CARD_4:
  n = i.POKER_VALUE_4;
  break;

  case s.CardNum.CARD_5:
  n = i.POKER_VALUE_5;
  break;

  case s.CardNum.CARD_6:
  n = i.POKER_VALUE_6;
  break;

  case s.CardNum.CARD_7:
  n = i.POKER_VALUE_7;
  break;

  case s.CardNum.CARD_8:
  n = i.POKER_VALUE_8;
  break;

  case s.CardNum.CARD_9:
  n = i.POKER_VALUE_9;
  break;

  case s.CardNum.CARD_10:
  n = i.POKER_VALUE_10;
  break;

  case s.CardNum.CARD_J:
  n = i.POKER_VALUE_J;
  break;

  case s.CardNum.CARD_Q:
  n = i.POKER_VALUE_Q;
  break;

  case s.CardNum.CARD_K:
  n = i.POKER_VALUE_K;
  break;

  case s.CardNum.CARD_A:
  n = i.POKER_VALUE_A;
  break;

  default:
  n = i.POKER_VALUE_2;
  }
  }
  return n;
  };
  e.getPokerTypeString = function(t, n, i, r, s, c, l) {
    var u = "unknow";
    switch (e.getPokerType(t, n, i, r, s, c, l)) {
      case o.POKER_TYPE_SINGLE:
      u = a.default.config.getStringData("UITitle113");
      break;

      case o.POKER_TYPE_PAIR:
      u = a.default.config.getStringData("UITitle114");
      break;

      case o.POKER_TYPE_TWO_PAIR:
      u = a.default.config.getStringData("UITitle115");
      break;

      case o.POKER_TYPE_THREE:
      u = a.default.config.getStringData("UITitle116");
      break;

      case o.POKER_TYPE_STRAIGHT:
      u = a.default.config.getStringData("UITitle117");
      break;

      case o.POKER_TYPE_FLUSH:
      u = a.default.config.getStringData("UITitle118");
      break;

      case o.POKER_TYPE_FULL_HOUSE:
      u = a.default.config.getStringData("UITitle119");
      break;

      case o.POKER_TYPE_FOUR:
      u = a.default.config.getStringData("UITitle120");
      break;

      case o.POKER_TYPE_STRAIGHT_FLUSH:
      u = a.default.config.getStringData("UITitle121");
      break;

      case o.POKER_TYPE_STRAIGHT_KING:
      u = a.default.config.getStringData("UITitle122");
      }
      return u;
    };
    e.getPokerType =
    function(t, n, i, r, a, s, c) {
      var l = o.POKER_TYPE_SINGLE;
      if (null === r || "undefined" == typeof r) {
      var u = t.concat(n);
      l = e._getPokerType(u, i, []);
      } else l = e._getCombPokerType(t, n, i, r, a, s, c);
      return l;
    };
    e._getStraightValue = function(t, n) {
      for (var o = -1, s = 0, c = a.default.StringTools.arrayMemsetNew(i.POKER_VALUE_COUNT, 0), l = 0; l < a.default.StringTools.getArrayLength(t); ++l) {
        var u = new e(n);
        u.initWithNumber(t[l]);
        u.value >= 0 && u.value < i.POKER_VALUE_COUNT && ++c[u.value];
      }
      switch (n) {
        case a.default.Enum.CreateGameMode.CreateGame_Mode_Short:
          for (l = 0; l < r.SHORT_POKER_VALUE_COUNT; ++l) {
          c[l] > 0 ? ++s : s = 0;
          s >= 5 && (o = l);
          s >= 4 && l === r.SHORT_POKER_VALUE_K && c[r.SHORT_POKER_VALUE_A] > 0 && (o = r.SHORT_POKER_VALUE_A);
          }
        break;

        default:
          for (l = 0; l < i.POKER_VALUE_COUNT; ++l) {
          c[l] > 0 ? ++s : s = 0;
          s >= 5 && (o = l);
          s >= 4 && l === i.POKER_VALUE_K && c[i.POKER_VALUE_A] > 0 && (o = i.POKER_VALUE_A);
        }
      }
      return o;
    };
  e._comparePoker = function(t, n) {
  return e._compareValue(t.value, n.value);
  };
  e._comparePokerShort = function(t, n) {
  return e._compareValueShort(t.value, n.value);
  };
  e._compareValue = function(e, t) {
  var n;
  n = (e + i.POKER_VALUE_COUNT - 1) % i.POKER_VALUE_COUNT;
  return (t + i.POKER_VALUE_COUNT - 1) % i.POKER_VALUE_COUNT - n;
  };
  e._compareValueShort = function(e, t) {
  var n;
  n = (e + r.SHORT_POKER_VALUE_COUNT - 1) % r.SHORT_POKER_VALUE_COUNT;
  return (t + r.SHORT_POKER_VALUE_COUNT - 1) % r.SHORT_POKER_VALUE_COUNT - n;
  };
  e._findPokersWithValue = function(e, t, n, o, i) {
  o = a.default.Number(o);
  for (var r = 0, s = [], c = 0; c < a.default.StringTools.getArrayLength(e); ++c) if (e[c].value === n) {
  s.push(e[c].getNumber(t));
  if (o > 0 && ++r >= o) break;
  }
  i && i.push.apply(i, s);
  };
  e._findStraightPokers = function(e, t, n, o) {
  var s = [];
  switch (t) {
  case a.default.Enum.CreateGameMode.CreateGame_Mode_Short:
  for (var c = 0; c < 5; ++c) for (var l = 0; l < a.default.StringTools.getArrayLength(e); ++l) if (e[l].value === (n + r.SHORT_POKER_VALUE_COUNT - c) % r.SHORT_POKER_VALUE_COUNT) {
  s.push(e[l].getNumber(t));
  break;
  }
  break;

  default:
  for (c = 0; c < 5; ++c) for (l = 0; l < a.default.StringTools.getArrayLength(e); ++l) if (e[l].value === (n + i.POKER_VALUE_COUNT - c) % i.POKER_VALUE_COUNT) {
  s.push(e[l].getNumber(t));
  break;
  }
  }
  o && o.push.apply(o, s);
  };
  e._findStraightFlushPokers = function(e, t, n, o, s) {
  var c = [];
  switch (t) {
  case a.default.Enum.CreateGameMode.CreateGame_Mode_Short:
  for (var l = 0; l < 5; ++l) for (var u = 0; u < a.default.StringTools.getArrayLength(e); ++u) if (e[u].value === (n + r.SHORT_POKER_VALUE_COUNT - l) % r.SHORT_POKER_VALUE_COUNT && e[u].color === o) {
  c.push(e[u].getNumber(t));
  break;
  }
  break;

  default:
  for (l = 0; l < 5; ++l) for (u = 0; u < a.default.StringTools.getArrayLength(e); ++u) if (e[u].value === (n + i.POKER_VALUE_COUNT - l) % i.POKER_VALUE_COUNT && e[u].color === o) {
  c.push(e[u].getNumber(t));
  break;
  }
  }
  s && s.push.apply(s, c);
  };
  e._findBigPokers = function(t, n, o, i) {
  var r = [];
  switch (n) {
  case a.default.Enum.CreateGameMode.CreateGame_Mode_Short:
  t.sort(e._comparePokerShort);
  break;

  default:
  t.sort(e._comparePoker);
  }
  for (var s = 0; s < o; ++s) s >= 0 && s < a.default.StringTools.getArrayLength(t) && r.push(t[s].getNumber(n));
  i && i.push.apply(i, r);
  };
  e._findPokersWithColor = function(t, n, o, i) {
  var r = [];
  switch (n) {
  case a.default.Enum.CreateGameMode.CreateGame_Mode_Short:
  t.sort(e._comparePokerShort);
  break;

  default:
  t.sort(e._comparePoker);
  }
  for (var s = 0, c = 0; c < a.default.StringTools.getArrayLength(t); ++c) {
  if (t[c].color === o) {
  r.push(t[c].getNumber(n));
  ++s;
  }
  if (s >= 5) break;
  }
  i && i.push.apply(i, r);
  };
  e._getCombPokerType = function(t, n, i, r, a, s, c) {
  var l = function(e, t) {
  var n = [], o = function(e, i) {
  if (e.length === t) n.push(e); else for (var r = 0, a = i.length - t + e.length; r <= a; ++r) o(e.concat(i[r]), i.slice(r + 1));
  };
  o([], e);
  return n;
  };
  r = Math.min(r, t.length);
  a = Math.min(a, n.length);
  for (var u = l(t, r), d = l(n, a), p = 0, h = 0, f = -1, _ = [], g = new e(i), m = new e(i), y = 0; y < u.length; ++y) for (var b = 0; b < d.length; ++b) {
  var v = !1, S = [], T = u[y].concat(d[b]), C = this._getPokerType(T, i, S);
  if (C > f) v = !0; else if (C === f) switch (C) {
  case o.POKER_TYPE_SINGLE:
  for (var w = 0; w < S.length; ++w) {
  g.initWithNumber(S[w]);
  m.initWithNumber(_[w]);
  if (g.faceValue > m.faceValue) {
  v = !0;
  break;
  }
  if (g.faceValue !== m.faceValue) break;
  }
  break;

  case o.POKER_TYPE_PAIR:
  g.initWithNumber(S[0]);
  m.initWithNumber(_[0]);
  if (g.faceValue > m.faceValue) v = !0; else if (g.faceValue === m.faceValue) for (w = 2; w < S.length; ++w) {
  g.initWithNumber(S[w]);
  m.initWithNumber(_[w]);
  if (g.faceValue > m.faceValue) {
  v = !0;
  break;
  }
  if (g.faceValue !== m.faceValue) break;
  }
  break;

  case o.POKER_TYPE_TWO_PAIR:
  g.initWithNumber(S[0]);
  m.initWithNumber(_[0]);
  if (g.faceValue > m.faceValue) v = !0; else if (g.faceValue === m.faceValue) {
  g.initWithNumber(S[2]);
  m.initWithNumber(_[2]);
  if (g.faceValue > m.faceValue) v = !0; else if (g.faceValue === m.faceValue) for (w = 4; w < S.length; ++w) {
  g.initWithNumber(S[w]);
  m.initWithNumber(_[w]);
  if (g.faceValue > m.faceValue) {
  v = !0;
  break;
  }
  if (g.faceValue !== m.faceValue) break;
  }
  }
  break;

  case o.POKER_TYPE_THREE:
  g.initWithNumber(S[0]);
  m.initWithNumber(_[0]);
  if (g.faceValue > m.faceValue) v = !0; else if (g.faceValue === m.faceValue) for (w = 3; w < S.length; ++w) {
  g.initWithNumber(S[w]);
  m.initWithNumber(_[w]);
  if (g.faceValue > m.faceValue) {
  v = !0;
  break;
  }
  if (g.faceValue !== m.faceValue) break;
  }
  break;

  case o.POKER_TYPE_STRAIGHT:
  case o.POKER_TYPE_STRAIGHT_FLUSH:
  g.initWithNumber(S[0]);
  m.initWithNumber(_[0]);
  g.faceValue > m.faceValue && (v = !0);
  break;

  case o.POKER_TYPE_FLUSH:
  for (w = 0; w < S.length; ++w) {
  g.initWithNumber(S[w]);
  m.initWithNumber(_[w]);
  if (g.faceValue > m.faceValue) {
  v = !0;
  break;
  }
  if (g.faceValue !== m.faceValue) break;
  }
  break;

  case o.POKER_TYPE_FULL_HOUSE:
  g.initWithNumber(S[0]);
  m.initWithNumber(_[0]);
  if (g.faceValue > m.faceValue) v = !0; else if (g.faceValue === m.faceValue) {
  g.initWithNumber(S[3]);
  m.initWithNumber(_[3]);
  g.faceValue > m.faceValue && (v = !0);
  }
  break;

  case o.POKER_TYPE_FOUR:
  g.initWithNumber(S[0]);
  m.initWithNumber(_[0]);
  if (g.faceValue > m.faceValue) v = !0; else if (g.faceValue === m.faceValue) for (w = 4; w < S.length; ++w) {
  g.initWithNumber(S[w]);
  m.initWithNumber(_[w]);
  if (g.faceValue > m.faceValue) {
  v = !0;
  break;
  }
  if (g.faceValue !== m.faceValue) break;
  }
  break;

  case o.POKER_TYPE_STRAIGHT_KING:
  }
  if (v) {
  p = y;
  h = b;
  f = C;
  _ = S;
  }
  }
  s && s.push.apply(s, u[p]);
  c && c.push.apply(c, d[h]);
  return f;
  };
  e._getPokerType = function(t, n, c) {
  var l = o.POKER_TYPE_SINGLE, u = 0, d = 0, p = s.CardSuit.CARD_DIAMOND, h = s.CardSuit.CardSuit_MAX, f = null;
  switch (n) {
  case a.default.Enum.CreateGameMode.CreateGame_Mode_Short:
  u = r.SHORT_POKER_VALUE_A;
  d = r.SHORT_POKER_VALUE_COUNT;
  f = e._compareValueShort;
  break;

  case a.default.Enum.CreateGameMode.CreateGame_Mode_Normal:
  u = i.POKER_VALUE_A;
  d = i.POKER_VALUE_COUNT;
  f = e._compareValue;
  }
  for (var _ = a.default.StringTools.arrayMemsetNew(d, 0), g = a.default.StringTools.arrayMemsetNew(h, 0), m = [], y = 0; y < a.default.StringTools.getArrayLength(t); ++y) {
  var b = new e(n);
  b.initWithNumber(t[y], n);
  m.push(b);
  b.value >= 0 && b.value < d && ++_[b.value];
  b.color >= 0 && b.color < h && ++g[b.color];
  }
  var v = !1, S = !1, T = 0, C = 0, w = 0, P = a.default.StringTools.arrayMemsetNew(3, -1);
  for (y = u; y < d; ++y) {
  if (_[y] >= 4) {
  C = y;
  v = !0;
  }
  if (3 === _[y]) if (S) {
  var k = (w + d - 1) % d, I = (y + d - 1) % d, O = k > I ? y : w;
  w = k > I ? w : y;
  P[T] = O;
  ++T;
  } else {
  w = y;
  S = !0;
  }
  if (2 === _[y]) {
  P[T] = y;
  ++T;
  }
  }
  for (y = 0; y < P.length; ++y) P[y] < 0 && P.splice(y--, 1);
  P.length > 0 && P.sort(f);
  var D = !1, A = 0;
  for (y = p; y < h; ++y) if (g[y] >= 5) {
  D = !0;
  A = y;
  break;
  }
  var R = e._getStraightValue(t, n), N = R >= 0, L = !1, E = 0, M = [];
  if (D && N) {
  for (y = 0; y < a.default.StringTools.getArrayLength(m); ++y) m[y].color === A && M.push(t[y]);
  L = (E = e._getStraightValue(M, n)) >= 0;
  }
  if (L) {
  e._findStraightFlushPokers(m, n, R, A, c);
  l = E === u ? o.POKER_TYPE_STRAIGHT_KING : o.POKER_TYPE_STRAIGHT_FLUSH;
  } else if (v) {
  var B = [];
  for (y = 0; y < m.length; ++y) m[y].value !== C && B.push(m[y]);
  e._findPokersWithValue(m, n, C, 4, c);
  e._findBigPokers(B, n, 1, c);
  l = o.POKER_TYPE_FOUR;
  } else if (D) {
  e._findPokersWithColor(m, n, A, c);
  l = o.POKER_TYPE_FLUSH;
  } else if (S && T > 0) {
  e._findPokersWithValue(m, n, w, 3, c);
  e._findPokersWithValue(m, n, P[0], 2, c);
  l = o.POKER_TYPE_FULL_HOUSE;
  } else if (N) {
  e._findStraightPokers(m, n, R, c);
  l = o.POKER_TYPE_STRAIGHT;
  } else if (S) {
  for (B = [], y = 0; y < m.length; ++y) m[y].value !== w && B.push(m[y]);
  e._findPokersWithValue(m, n, w, 3, c);
  e._findBigPokers(B, n, 2, c);
  l = o.POKER_TYPE_THREE;
  } else if (T >= 2) {
  for (B = [], y = 0; y < m.length; ++y) m[y].value !== P[0] && m[y].value !== P[1] && B.push(m[y]);
  e._findPokersWithValue(m, n, P[0], 2, c);
  e._findPokersWithValue(m, n, P[1], 2, c);
  e._findBigPokers(B, n, 1, c);
  l = o.POKER_TYPE_TWO_PAIR;
  } else if (1 === T) {
  for (B = [], y = 0; y < m.length; ++y) m[y].value !== P[0] && B.push(m[y]);
  e._findPokersWithValue(m, n, P[0], 2, c);
  e._findBigPokers(B, n, 3, c);
  l = o.POKER_TYPE_PAIR;
  } else {
  e._findBigPokers(m, n, 5, c);
  l = o.POKER_TYPE_SINGLE;
  }
  return l;
  };
  return e;
  }();
  n.PokerData = c;
  cc._RF.pop();
}, {
"../../../../common/tools/Enum": "Enum",
"../../../lobby/cv": "cv"
} ],
