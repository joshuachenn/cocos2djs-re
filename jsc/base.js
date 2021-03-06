(function(global, undefined) {
"use strict";
(function(e, t, r) {
var n = global.protobuf = function r(n) {
var i = t[n];
i || e[n][0].call(i = t[n] = {
exports: {}
}, r, i, i.exports);
return i.exports;
}(r[0]);
"function" == typeof define && define.amd && define([ "long" ], function(e) {
if (e && e.isLong) {
n.util.Long = e;
n.configure();
}
return n;
});
"object" == typeof module && module && module.exports && (module.exports = n);
})({
1: [ function(e, t, r) {
t.exports = function(e, t) {
var r = new Array(arguments.length - 1), n = 0, i = 2, o = !0;
for (;i < arguments.length; ) r[n++] = arguments[i++];
return new Promise(function(i, s) {
r[n] = function(e) {
if (o) {
o = !1;
if (e) s(e); else {
for (var t = new Array(arguments.length - 1), r = 0; r < t.length; ) t[r++] = arguments[r];
i.apply(null, t);
}
}
};
try {
e.apply(t || null, r);
} catch (e) {
if (o) {
o = !1;
s(e);
}
}
});
};
}, {} ],
2: [ function(e, t, r) {
var n = r;
n.length = function(e) {
var t = e.length;
if (!t) return 0;
for (var r = 0; --t % 4 > 1 && "=" === e.charAt(t); ) ++r;
return Math.ceil(3 * e.length) / 4 - r;
};
for (var i = new Array(64), o = new Array(123), s = 0; s < 64; ) o[i[s] = s < 26 ? s + 65 : s < 52 ? s + 71 : s < 62 ? s - 4 : s - 59 | 43] = s++;
n.encode = function(e, t, r) {
for (var n, o = null, s = [], f = 0, a = 0; t < r; ) {
var u = e[t++];
switch (a) {
case 0:
s[f++] = i[u >> 2];
n = (3 & u) << 4;
a = 1;
break;

case 1:
s[f++] = i[n | u >> 4];
n = (15 & u) << 2;
a = 2;
break;

case 2:
s[f++] = i[n | u >> 6];
s[f++] = i[63 & u];
a = 0;
}
if (f > 8191) {
(o || (o = [])).push(String.fromCharCode.apply(String, s));
f = 0;
}
}
if (a) {
s[f++] = i[n];
s[f++] = 61;
1 === a && (s[f++] = 61);
}
if (o) {
f && o.push(String.fromCharCode.apply(String, s.slice(0, f)));
return o.join("");
}
return String.fromCharCode.apply(String, s.slice(0, f));
};
n.decode = function(e, t, r) {
for (var n, i = r, s = 0, f = 0; f < e.length; ) {
var a = e.charCodeAt(f++);
if (61 === a && s > 1) break;
if ((a = o[a]) === undefined) throw Error("invalid encoding");
switch (s) {
case 0:
n = a;
s = 1;
break;

case 1:
t[r++] = n << 2 | (48 & a) >> 4;
n = a;
s = 2;
break;

case 2:
t[r++] = (15 & n) << 4 | (60 & a) >> 2;
n = a;
s = 3;
break;

case 3:
t[r++] = (3 & n) << 6 | a;
s = 0;
}
}
if (1 === s) throw Error("invalid encoding");
return r - i;
};
n.test = function(e) {
return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
};
}, {} ],
3: [ function(e, t, r) {
t.exports = n;
function n(e, t) {
if ("string" == typeof e) {
t = e;
e = undefined;
}
var r = [];
function i(e) {
if ("string" != typeof e) {
var t = o();
n.verbose && console.log("codegen: " + t);
t = "return " + t;
if (e) {
for (var s = Object.keys(e), f = new Array(s.length + 1), a = new Array(s.length), u = 0; u < s.length; ) {
f[u] = s[u];
a[u] = e[s[u++]];
}
f[u] = t;
return Function.apply(null, f).apply(null, a);
}
return Function(t)();
}
for (var l = new Array(arguments.length - 1), c = 0; c < l.length; ) l[c] = arguments[++c];
c = 0;
e = e.replace(/%([%dfijs])/g, function(e, t) {
var r = l[c++];
switch (t) {
case "d":
case "f":
return String(Number(r));

case "i":
return String(Math.floor(r));

case "j":
return JSON.stringify(r);

case "s":
return String(r);
}
return "%";
});
if (c !== l.length) throw Error("parameter count mismatch");
r.push(e);
return i;
}
function o(n) {
return "function " + (n || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + r.join("\n  ") + "\n}";
}
i.toString = o;
return i;
}
n.verbose = !1;
}, {} ],
4: [ function(e, t, r) {
t.exports = n;
function n() {
this._listeners = {};
}
n.prototype.on = function(e, t, r) {
(this._listeners[e] || (this._listeners[e] = [])).push({
fn: t,
ctx: r || this
});
return this;
};
n.prototype.off = function(e, t) {
if (e === undefined) this._listeners = {}; else if (t === undefined) this._listeners[e] = []; else for (var r = this._listeners[e], n = 0; n < r.length; ) r[n].fn === t ? r.splice(n, 1) : ++n;
return this;
};
n.prototype.emit = function(e) {
var t = this._listeners[e];
if (t) {
for (var r = [], n = 1; n < arguments.length; ) r.push(arguments[n++]);
for (n = 0; n < t.length; ) t[n].fn.apply(t[n++].ctx, r);
}
return this;
};
}, {} ],
5: [ function(e, t, r) {
t.exports = o;
var n = e(1), i = e(7)("fs");
function o(e, t, r) {
if ("function" == typeof t) {
r = t;
t = {};
} else t || (t = {});
if (!r) return n(o, this, e, t);
if ("undefined" == typeof cc) return !t.xhr && i && i.readFile ? i.readFile(e, function(n, i) {
return n && "undefined" != typeof XMLHttpRequest ? o.xhr(e, t, r) : n ? r(n) : r(null, t.binary ? i : i.toString("utf8"));
}) : o.xhr(e, t, r);
cc.loader.loadRes(e, cc.TextAsset, function(e, t) {
e ? r(Error("status " + e)) : r(null, t.text);
});
}
o.xhr = function(e, t, r) {
var n = new XMLHttpRequest();
n.onreadystatechange = function() {
if (4 !== n.readyState) return undefined;
if (0 !== n.status && 200 !== n.status) return r(Error("status " + n.status));
if (t.binary) {
var e = n.response;
if (!e) {
e = [];
for (var i = 0; i < n.responseText.length; ++i) e.push(255 & n.responseText.charCodeAt(i));
}
return r(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e);
}
return r(null, n.responseText);
};
if (t.binary) {
"overrideMimeType" in n && n.overrideMimeType("text/plain; charset=x-user-defined");
n.responseType = "arraybuffer";
}
n.open("GET", e);
n.send();
};
}, {
1: 1,
7: 7
} ],
6: [ function(e, t, r) {
t.exports = n(n);
function n(e) {
"undefined" != typeof Float32Array ? function() {
var t = new Float32Array([ -0 ]), r = new Uint8Array(t.buffer), n = 128 === r[3];
function i(e, n, i) {
t[0] = e;
n[i] = r[0];
n[i + 1] = r[1];
n[i + 2] = r[2];
n[i + 3] = r[3];
}
function o(e, n, i) {
t[0] = e;
n[i] = r[3];
n[i + 1] = r[2];
n[i + 2] = r[1];
n[i + 3] = r[0];
}
e.writeFloatLE = n ? i : o;
e.writeFloatBE = n ? o : i;
function s(e, n) {
r[0] = e[n];
r[1] = e[n + 1];
r[2] = e[n + 2];
r[3] = e[n + 3];
return t[0];
}
function f(e, n) {
r[3] = e[n];
r[2] = e[n + 1];
r[1] = e[n + 2];
r[0] = e[n + 3];
return t[0];
}
e.readFloatLE = n ? s : f;
e.readFloatBE = n ? f : s;
}() : function() {
function t(e, t, r, n) {
var i = t < 0 ? 1 : 0;
i && (t = -t);
if (0 === t) e(1 / t > 0 ? 0 : 2147483648, r, n); else if (isNaN(t)) e(2143289344, r, n); else if (t > 3.4028234663852886e38) e((i << 31 | 2139095040) >>> 0, r, n); else if (t < 1.1754943508222875e-38) e((i << 31 | Math.round(t / 1.401298464324817e-45)) >>> 0, r, n); else {
var o = Math.floor(Math.log(t) / Math.LN2);
e((i << 31 | o + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -o) * 8388608)) >>> 0, r, n);
}
}
e.writeFloatLE = t.bind(null, i);
e.writeFloatBE = t.bind(null, o);
function r(e, t, r) {
var n = e(t, r), i = 2 * (n >> 31) + 1, o = n >>> 23 & 255, s = 8388607 & n;
return 255 === o ? s ? NaN : Infinity * i : 0 === o ? 1.401298464324817e-45 * i * s : i * Math.pow(2, o - 150) * (s + 8388608);
}
e.readFloatLE = r.bind(null, s);
e.readFloatBE = r.bind(null, f);
}();
"undefined" != typeof Float64Array ? function() {
var t = new Float64Array([ -0 ]), r = new Uint8Array(t.buffer), n = 128 === r[7];
function i(e, n, i) {
t[0] = e;
n[i] = r[0];
n[i + 1] = r[1];
n[i + 2] = r[2];
n[i + 3] = r[3];
n[i + 4] = r[4];
n[i + 5] = r[5];
n[i + 6] = r[6];
n[i + 7] = r[7];
}
function o(e, n, i) {
t[0] = e;
n[i] = r[7];
n[i + 1] = r[6];
n[i + 2] = r[5];
n[i + 3] = r[4];
n[i + 4] = r[3];
n[i + 5] = r[2];
n[i + 6] = r[1];
n[i + 7] = r[0];
}
e.writeDoubleLE = n ? i : o;
e.writeDoubleBE = n ? o : i;
function s(e, n) {
r[0] = e[n];
r[1] = e[n + 1];
r[2] = e[n + 2];
r[3] = e[n + 3];
r[4] = e[n + 4];
r[5] = e[n + 5];
r[6] = e[n + 6];
r[7] = e[n + 7];
return t[0];
}
function f(e, n) {
r[7] = e[n];
r[6] = e[n + 1];
r[5] = e[n + 2];
r[4] = e[n + 3];
r[3] = e[n + 4];
r[2] = e[n + 5];
r[1] = e[n + 6];
r[0] = e[n + 7];
return t[0];
}
e.readDoubleLE = n ? s : f;
e.readDoubleBE = n ? f : s;
}() : function() {
function t(e, t, r, n, i, o) {
var s = n < 0 ? 1 : 0;
s && (n = -n);
if (0 === n) {
e(0, i, o + t);
e(1 / n > 0 ? 0 : 2147483648, i, o + r);
} else if (isNaN(n)) {
e(0, i, o + t);
e(2146959360, i, o + r);
} else if (n > 1.7976931348623157e308) {
e(0, i, o + t);
e((s << 31 | 2146435072) >>> 0, i, o + r);
} else {
var f;
if (n < 2.2250738585072014e-308) {
e((f = n / 5e-324) >>> 0, i, o + t);
e((s << 31 | f / 4294967296) >>> 0, i, o + r);
} else {
var a = Math.floor(Math.log(n) / Math.LN2);
1024 === a && (a = 1023);
e(4503599627370496 * (f = n * Math.pow(2, -a)) >>> 0, i, o + t);
e((s << 31 | a + 1023 << 20 | 1048576 * f & 1048575) >>> 0, i, o + r);
}
}
}
e.writeDoubleLE = t.bind(null, i, 0, 4);
e.writeDoubleBE = t.bind(null, o, 4, 0);
function r(e, t, r, n, i) {
var o = e(n, i + t), s = e(n, i + r), f = 2 * (s >> 31) + 1, a = s >>> 20 & 2047, u = 4294967296 * (1048575 & s) + o;
return 2047 === a ? u ? NaN : Infinity * f : 0 === a ? 5e-324 * f * u : f * Math.pow(2, a - 1075) * (u + 4503599627370496);
}
e.readDoubleLE = r.bind(null, s, 0, 4);
e.readDoubleBE = r.bind(null, f, 4, 0);
}();
return e;
}
function i(e, t, r) {
t[r] = 255 & e;
t[r + 1] = e >>> 8 & 255;
t[r + 2] = e >>> 16 & 255;
t[r + 3] = e >>> 24;
}
function o(e, t, r) {
t[r] = e >>> 24;
t[r + 1] = e >>> 16 & 255;
t[r + 2] = e >>> 8 & 255;
t[r + 3] = 255 & e;
}
function s(e, t) {
return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
}
function f(e, t) {
return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
}, {} ],
7: [ function(require, module, exports) {
module.exports = inquire;
function inquire(moduleName) {
try {
var mod = eval("quire".replace(/^/, "re"))(moduleName);
if (mod && (mod.length || Object.keys(mod).length)) return mod;
} catch (e) {}
return null;
}
}, {} ],
8: [ function(e, t, r) {
var n = r, i = n.isAbsolute = function(e) {
return /^(?:\/|\w+:)/.test(e);
}, o = n.normalize = function(e) {
var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), r = i(e), n = "";
r && (n = t.shift() + "/");
for (var o = 0; o < t.length; ) ".." === t[o] ? o > 0 && ".." !== t[o - 1] ? t.splice(--o, 2) : r ? t.splice(o, 1) : ++o : "." === t[o] ? t.splice(o, 1) : ++o;
return n + t.join("/");
};
n.resolve = function(e, t, r) {
r || (t = o(t));
if (i(t)) return t;
r || (e = o(e));
return (e = e.replace(/(?:\/|^)[^/]+$/, "")).length ? o(e + "/" + t) : t;
};
}, {} ],
9: [ function(e, t, r) {
t.exports = function(e, t, r) {
var n = r || 8192, i = n >>> 1, o = null, s = n;
return function(r) {
if (r < 1 || r > i) return e(r);
if (s + r > n) {
o = e(n);
s = 0;
}
var f = t.call(o, s, s += r);
7 & s && (s = 1 + (7 | s));
return f;
};
};
}, {} ],
10: [ function(e, t, r) {
var n = r;
n.length = function(e) {
for (var t = 0, r = 0, n = 0; n < e.length; ++n) if ((r = e.charCodeAt(n)) < 128) t += 1; else if (r < 2048) t += 2; else if (55296 == (64512 & r) && 56320 == (64512 & e.charCodeAt(n + 1))) {
++n;
t += 4;
} else t += 3;
return t;
};
n.read = function(e, t, r) {
if (r - t < 1) return "";
for (var n, i = null, o = [], s = 0; t < r; ) {
if ((n = e[t++]) < 128) o[s++] = n; else if (n > 191 && n < 224) o[s++] = (31 & n) << 6 | 63 & e[t++]; else if (n > 239 && n < 365) {
n = ((7 & n) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536;
o[s++] = 55296 + (n >> 10);
o[s++] = 56320 + (1023 & n);
} else o[s++] = (15 & n) << 12 | (63 & e[t++]) << 6 | 63 & e[t++];
if (s > 8191) {
(i || (i = [])).push(String.fromCharCode.apply(String, o));
s = 0;
}
}
if (i) {
s && i.push(String.fromCharCode.apply(String, o.slice(0, s)));
return i.join("");
}
return String.fromCharCode.apply(String, o.slice(0, s));
};
n.write = function(e, t, r) {
for (var n, i, o = r, s = 0; s < e.length; ++s) if ((n = e.charCodeAt(s)) < 128) t[r++] = n; else if (n < 2048) {
t[r++] = n >> 6 | 192;
t[r++] = 63 & n | 128;
} else if (55296 == (64512 & n) && 56320 == (64512 & (i = e.charCodeAt(s + 1)))) {
n = 65536 + ((1023 & n) << 10) + (1023 & i);
++s;
t[r++] = n >> 18 | 240;
t[r++] = n >> 12 & 63 | 128;
t[r++] = n >> 6 & 63 | 128;
t[r++] = 63 & n | 128;
} else {
t[r++] = n >> 12 | 224;
t[r++] = n >> 6 & 63 | 128;
t[r++] = 63 & n | 128;
}
return r - o;
};
}, {} ],
11: [ function(e, t, r) {
t.exports = o;
var n, i = /\/|\./;
function o(e, t) {
if (!i.test(e)) {
e = "google/protobuf/" + e + ".proto";
t = {
nested: {
google: {
nested: {
protobuf: {
nested: t
}
}
}
}
};
}
o[e] = t;
}
o("any", {
Any: {
fields: {
type_url: {
type: "string",
id: 1
},
value: {
type: "bytes",
id: 2
}
}
}
});
o("duration", {
Duration: n = {
fields: {
seconds: {
type: "int64",
id: 1
},
nanos: {
type: "int32",
id: 2
}
}
}
});
o("timestamp", {
Timestamp: n
});
o("empty", {
Empty: {
fields: {}
}
});
o("struct", {
Struct: {
fields: {
fields: {
keyType: "string",
type: "Value",
id: 1
}
}
},
Value: {
oneofs: {
kind: {
oneof: [ "nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue" ]
}
},
fields: {
nullValue: {
type: "NullValue",
id: 1
},
numberValue: {
type: "double",
id: 2
},
stringValue: {
type: "string",
id: 3
},
boolValue: {
type: "bool",
id: 4
},
structValue: {
type: "Struct",
id: 5
},
listValue: {
type: "ListValue",
id: 6
}
}
},
NullValue: {
values: {
NULL_VALUE: 0
}
},
ListValue: {
fields: {
values: {
rule: "repeated",
type: "Value",
id: 1
}
}
}
});
o("wrappers", {
DoubleValue: {
fields: {
value: {
type: "double",
id: 1
}
}
},
FloatValue: {
fields: {
value: {
type: "float",
id: 1
}
}
},
Int64Value: {
fields: {
value: {
type: "int64",
id: 1
}
}
},
UInt64Value: {
fields: {
value: {
type: "uint64",
id: 1
}
}
},
Int32Value: {
fields: {
value: {
type: "int32",
id: 1
}
}
},
UInt32Value: {
fields: {
value: {
type: "uint32",
id: 1
}
}
},
BoolValue: {
fields: {
value: {
type: "bool",
id: 1
}
}
},
StringValue: {
fields: {
value: {
type: "string",
id: 1
}
}
},
BytesValue: {
fields: {
value: {
type: "bytes",
id: 1
}
}
}
});
o("field_mask", {
FieldMask: {
fields: {
paths: {
rule: "repeated",
type: "string",
id: 1
}
}
}
});
o.get = function(e) {
return o[e] || null;
};
}, {} ],
12: [ function(e, t, r) {
var n = r, i = e(15), o = e(37);
function s(e, t, r, n) {
if (t.resolvedType) if (t.resolvedType instanceof i) {
e("switch(d%s){", n);
for (var o = t.resolvedType.values, s = Object.keys(o), f = 0; f < s.length; ++f) {
t.repeated && o[s[f]] === t.typeDefault && e("default:");
e("case%j:", s[f])("case %i:", o[s[f]])("m%s=%j", n, o[s[f]])("break");
}
e("}");
} else e('if(typeof d%s!=="object")', n)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", n, r, n); else {
var a = !1;
switch (t.type) {
case "double":
case "float":
e("m%s=Number(d%s)", n, n);
break;

case "uint32":
case "fixed32":
e("m%s=d%s>>>0", n, n);
break;

case "int32":
case "sint32":
case "sfixed32":
e("m%s=d%s|0", n, n);
break;

case "uint64":
a = !0;

case "int64":
case "sint64":
case "fixed64":
case "sfixed64":
e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", n, n, a)('else if(typeof d%s==="string")', n)("m%s=parseInt(d%s,10)", n, n)('else if(typeof d%s==="number")', n)("m%s=d%s", n, n)('else if(typeof d%s==="object")', n)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", n, n, n, a ? "true" : "");
break;

case "bytes":
e('if(typeof d%s==="string")', n)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", n, n, n)("else if(d%s.length)", n)("m%s=d%s", n, n);
break;

case "string":
e("m%s=String(d%s)", n, n);
break;

case "bool":
e("m%s=Boolean(d%s)", n, n);
}
}
return e;
}
n.fromObject = function(e) {
var t = e.fieldsArray, r = o.codegen([ "d" ], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
if (!t.length) return r("return new this.ctor");
r("var m=new this.ctor");
for (var n = 0; n < t.length; ++n) {
var f = t[n].resolve(), a = o.safeProp(f.name);
if (f.map) {
r("if(d%s){", a)('if(typeof d%s!=="object")', a)("throw TypeError(%j)", f.fullName + ": object expected")("m%s={}", a)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", a);
s(r, f, n, a + "[ks[i]]")("}")("}");
} else if (f.repeated) {
r("if(d%s){", a)("if(!Array.isArray(d%s))", a)("throw TypeError(%j)", f.fullName + ": array expected")("m%s=[]", a)("for(var i=0;i<d%s.length;++i){", a);
s(r, f, n, a + "[i]")("}")("}");
} else {
f.resolvedType instanceof i || r("if(d%s!=null){", a);
s(r, f, n, a);
f.resolvedType instanceof i || r("}");
}
}
return r("return m");
};
function f(e, t, r, n) {
if (t.resolvedType) t.resolvedType instanceof i ? e("d%s=o.enums===String?types[%i].values[m%s]:m%s", n, r, n, n) : e("d%s=types[%i].toObject(m%s,o)", n, r, n); else {
var o = !1;
switch (t.type) {
case "double":
case "float":
e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
break;

case "uint64":
o = !0;

case "int64":
case "sint64":
case "fixed64":
case "sfixed64":
e('if(typeof m%s==="number")', n)("d%s=o.longs===String?String(m%s):m%s", n, n, n)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", n, n, n, n, o ? "true" : "", n);
break;

case "bytes":
e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", n, n, n, n, n);
break;

default:
e("d%s=m%s", n, n);
}
}
return e;
}
n.toObject = function(e) {
var t = e.fieldsArray.slice().sort(o.compareFieldsById);
if (!t.length) return o.codegen()("return {}");
for (var r = o.codegen([ "m", "o" ], e.name + "$toObject")("if(!o)")("o={}")("var d={}"), n = [], s = [], a = [], u = 0; u < t.length; ++u) t[u].partOf || (t[u].resolve().repeated ? n : t[u].map ? s : a).push(t[u]);
if (n.length) {
r("if(o.arrays||o.defaults){");
for (u = 0; u < n.length; ++u) r("d%s=[]", o.safeProp(n[u].name));
r("}");
}
if (s.length) {
r("if(o.objects||o.defaults){");
for (u = 0; u < s.length; ++u) r("d%s={}", o.safeProp(s[u].name));
r("}");
}
if (a.length) {
r("if(o.defaults){");
for (u = 0; u < a.length; ++u) {
var l = a[u], c = o.safeProp(l.name);
l.resolvedType instanceof i ? r("d%s=o.enums===String?%j:%j", c, l.resolvedType.valuesById[l.typeDefault], l.typeDefault) : l.long ? r("if(util.Long){")("var n=new util.Long(%i,%i,%j)", l.typeDefault.low, l.typeDefault.high, l.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", c)("}else")("d%s=o.longs===String?%j:%i", c, l.typeDefault.toString(), l.typeDefault.toNumber()) : l.bytes ? r("d%s=o.bytes===String?%j:%s", c, String.fromCharCode.apply(String, l.typeDefault), "[" + Array.prototype.slice.call(l.typeDefault).join(",") + "]") : r("d%s=%j", c, l.typeDefault);
}
r("}");
}
var p = !1;
for (u = 0; u < t.length; ++u) {
l = t[u];
var h = e._fieldsArray.indexOf(l);
c = o.safeProp(l.name);
if (l.map) {
if (!p) {
p = !0;
r("var ks2");
}
r("if(m%s&&(ks2=Object.keys(m%s)).length){", c, c)("d%s={}", c)("for(var j=0;j<ks2.length;++j){");
f(r, l, h, c + "[ks2[j]]")("}");
} else if (l.repeated) {
r("if(m%s&&m%s.length){", c, c)("d%s=[]", c)("for(var j=0;j<m%s.length;++j){", c);
f(r, l, h, c + "[j]")("}");
} else {
r("if(m%s!=null&&m.hasOwnProperty(%j)){", c, l.name);
f(r, l, h, c);
l.partOf && r("if(o.oneofs)")("d%s=%j", o.safeProp(l.partOf.name), l.name);
}
r("}");
}
return r("return d");
};
}, {
15: 15,
37: 37
} ],
13: [ function(e, t, r) {
t.exports = function(e) {
var t = o.codegen([ "r", "l" ], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter(function(e) {
return e.map;
}).length ? ",k" : ""))("while(r.pos<c){")("var t=r.uint32()");
e.group && t("if((t&7)===4)")("break");
t("switch(t>>>3){");
for (var r = 0; r < e.fieldsArray.length; ++r) {
var f = e._fieldsArray[r].resolve(), a = f.resolvedType instanceof n ? "int32" : f.type, u = "m" + o.safeProp(f.name);
t("case %i:", f.id);
if (f.map) {
t("r.skip().pos++")("if(%s===util.emptyObject)", u)("%s={}", u)("k=r.%s()", f.keyType)("r.pos++");
i.long[f.keyType] !== undefined ? i.basic[a] === undefined ? t('%s[typeof k==="object"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())', u, r) : t('%s[typeof k==="object"?util.longToHash(k):k]=r.%s()', u, a) : i.basic[a] === undefined ? t("%s[k]=types[%i].decode(r,r.uint32())", u, r) : t("%s[k]=r.%s()", u, a);
} else if (f.repeated) {
t("if(!(%s&&%s.length))", u, u)("%s=[]", u);
i.packed[a] !== undefined && t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", u, a)("}else");
i.basic[a] === undefined ? t(f.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", u, r) : t("%s.push(r.%s())", u, a);
} else i.basic[a] === undefined ? t(f.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", u, r) : t("%s=r.%s()", u, a);
t("break");
}
t("default:")("r.skipType(t&7)")("break")("}")("}");
for (r = 0; r < e._fieldsArray.length; ++r) {
var l = e._fieldsArray[r];
l.required && t("if(!m.hasOwnProperty(%j))", l.name)("throw util.ProtocolError(%j,{instance:m})", s(l));
}
return t("return m");
};
var n = e(15), i = e(36), o = e(37);
function s(e) {
return "missing required '" + e.name + "'";
}
}, {
15: 15,
36: 36,
37: 37
} ],
14: [ function(e, t, r) {
t.exports = function(e) {
for (var t, r = o.codegen([ "m", "w" ], e.name + "$encode")("if(!w)")("w=Writer.create()"), f = e.fieldsArray.slice().sort(o.compareFieldsById), a = 0; a < f.length; ++a) {
var u = f[a].resolve(), l = e._fieldsArray.indexOf(u), c = u.resolvedType instanceof n ? "int32" : u.type, p = i.basic[c];
t = "m" + o.safeProp(u.name);
if (u.map) {
r("if(%s!=null&&m.hasOwnProperty(%j)){", t, u.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (u.id << 3 | 2) >>> 0, 8 | i.mapKey[u.keyType], u.keyType);
p === undefined ? r("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", l, t) : r(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | p, c, t);
r("}")("}");
} else if (u.repeated) {
r("if(%s!=null&&%s.length){", t, t);
if (u.packed && i.packed[c] !== undefined) r("w.uint32(%i).fork()", (u.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", c, t)("w.ldelim()"); else {
r("for(var i=0;i<%s.length;++i)", t);
p === undefined ? s(r, u, l, t + "[i]") : r("w.uint32(%i).%s(%s[i])", (u.id << 3 | p) >>> 0, c, t);
}
r("}");
} else {
u.optional && r("if(%s!=null&&m.hasOwnProperty(%j))", t, u.name);
p === undefined ? s(r, u, l, t) : r("w.uint32(%i).%s(%s)", (u.id << 3 | p) >>> 0, c, t);
}
}
return r("return w");
};
var n = e(15), i = e(36), o = e(37);
function s(e, t, r, n) {
return t.resolvedType.group ? e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", r, n, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0) : e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", r, n, (t.id << 3 | 2) >>> 0);
}
}, {
15: 15,
36: 36,
37: 37
} ],
15: [ function(e, t, r) {
t.exports = s;
var n = e(24);
((s.prototype = Object.create(n.prototype)).constructor = s).className = "Enum";
var i = e(23), o = e(37);
function s(e, t, r, i, o) {
n.call(this, e, r);
if (t && "object" != typeof t) throw TypeError("values must be an object");
this.valuesById = {};
this.values = Object.create(this.valuesById);
this.comment = i;
this.comments = o || {};
this.reserved = undefined;
if (t) for (var s = Object.keys(t), f = 0; f < s.length; ++f) "number" == typeof t[s[f]] && (this.valuesById[this.values[s[f]] = t[s[f]]] = s[f]);
}
s.fromJSON = function(e, t) {
var r = new s(e, t.values, t.options, t.comment, t.comments);
r.reserved = t.reserved;
return r;
};
s.prototype.toJSON = function(e) {
var t = !!e && Boolean(e.keepComments);
return o.toObject([ "options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", t ? this.comment : undefined, "comments", t ? this.comments : undefined ]);
};
s.prototype.add = function(e, t, r) {
if (!o.isString(e)) throw TypeError("name must be a string");
if (!o.isInteger(t)) throw TypeError("id must be an integer");
if (this.values[e] !== undefined) throw Error("duplicate name '" + e + "' in " + this);
if (this.isReservedId(t)) throw Error("id " + t + " is reserved in " + this);
if (this.isReservedName(e)) throw Error("name '" + e + "' is reserved in " + this);
if (this.valuesById[t] !== undefined) {
if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + t + " in " + this);
this.values[e] = t;
} else this.valuesById[this.values[e] = t] = e;
this.comments[e] = r || null;
return this;
};
s.prototype.remove = function(e) {
if (!o.isString(e)) throw TypeError("name must be a string");
var t = this.values[e];
if (null == t) throw Error("name '" + e + "' does not exist in " + this);
delete this.valuesById[t];
delete this.values[e];
delete this.comments[e];
return this;
};
s.prototype.isReservedId = function(e) {
return i.isReservedId(this.reserved, e);
};
s.prototype.isReservedName = function(e) {
return i.isReservedName(this.reserved, e);
};
}, {
23: 23,
24: 24,
37: 37
} ],
16: [ function(e, t, r) {
t.exports = u;
var n = e(24);
((u.prototype = Object.create(n.prototype)).constructor = u).className = "Field";
var i, o = e(15), s = e(36), f = e(37), a = /^required|optional|repeated$/;
u.fromJSON = function(e, t) {
return new u(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
};
function u(e, t, r, i, o, u, l) {
if (f.isObject(i)) {
l = o;
u = i;
i = o = undefined;
} else if (f.isObject(o)) {
l = u;
u = o;
o = undefined;
}
n.call(this, e, u);
if (!f.isInteger(t) || t < 0) throw TypeError("id must be a non-negative integer");
if (!f.isString(r)) throw TypeError("type must be a string");
if (i !== undefined && !a.test(i = i.toString().toLowerCase())) throw TypeError("rule must be a string rule");
if (o !== undefined && !f.isString(o)) throw TypeError("extend must be a string");
this.rule = i && "optional" !== i ? i : undefined;
this.type = r;
this.id = t;
this.extend = o || undefined;
this.required = "required" === i;
this.optional = !this.required;
this.repeated = "repeated" === i;
this.map = !1;
this.message = null;
this.partOf = null;
this.typeDefault = null;
this.defaultValue = null;
this.long = !!f.Long && s.long[r] !== undefined;
this.bytes = "bytes" === r;
this.resolvedType = null;
this.extensionField = null;
this.declaringField = null;
this._packed = null;
this.comment = l;
}
Object.defineProperty(u.prototype, "packed", {
get: function() {
null === this._packed && (this._packed = !1 !== this.getOption("packed"));
return this._packed;
}
});
u.prototype.setOption = function(e, t, r) {
"packed" === e && (this._packed = null);
return n.prototype.setOption.call(this, e, t, r);
};
u.prototype.toJSON = function(e) {
var t = !!e && Boolean(e.keepComments);
return f.toObject([ "rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined ]);
};
u.prototype.resolve = function() {
if (this.resolved) return this;
if ((this.typeDefault = s.defaults[this.type]) === undefined) {
this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
this.resolvedType instanceof i ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
}
if (this.options && null != this.options.default) {
this.typeDefault = this.options.default;
this.resolvedType instanceof o && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault]);
}
if (this.options) {
!0 !== this.options.packed && (this.options.packed === undefined || !this.resolvedType || this.resolvedType instanceof o) || delete this.options.packed;
Object.keys(this.options).length || (this.options = undefined);
}
if (this.long) {
this.typeDefault = f.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0));
Object.freeze && Object.freeze(this.typeDefault);
} else if (this.bytes && "string" == typeof this.typeDefault) {
var e;
f.base64.test(this.typeDefault) ? f.base64.decode(this.typeDefault, e = f.newBuffer(f.base64.length(this.typeDefault)), 0) : f.utf8.write(this.typeDefault, e = f.newBuffer(f.utf8.length(this.typeDefault)), 0);
this.typeDefault = e;
}
this.map ? this.defaultValue = f.emptyObject : this.repeated ? this.defaultValue = f.emptyArray : this.defaultValue = this.typeDefault;
this.parent instanceof i && (this.parent.ctor.prototype[this.name] = this.defaultValue);
return n.prototype.resolve.call(this);
};
u.d = function(e, t, r, n) {
"function" == typeof t ? t = f.decorateType(t).name : t && "object" == typeof t && (t = f.decorateEnum(t).name);
return function(i, o) {
f.decorateType(i.constructor).add(new u(o, e, t, r, {
default: n
}));
};
};
u._configure = function(e) {
i = e;
};
}, {
15: 15,
24: 24,
36: 36,
37: 37
} ],
17: [ function(e, t, r) {
var n = t.exports = e(18);
n.build = "light";
n.load = function(e, t, r) {
if ("function" == typeof t) {
r = t;
t = new n.Root();
} else t || (t = new n.Root());
return t.load(e, r);
};
n.loadSync = function(e, t) {
t || (t = new n.Root());
return t.loadSync(e);
};
n.encoder = e(14);
n.decoder = e(13);
n.verifier = e(40);
n.converter = e(12);
n.ReflectionObject = e(24);
n.Namespace = e(23);
n.Root = e(29);
n.Enum = e(15);
n.Type = e(35);
n.Field = e(16);
n.OneOf = e(25);
n.MapField = e(20);
n.Service = e(33);
n.Method = e(22);
n.Message = e(21);
n.wrappers = e(41);
n.types = e(36);
n.util = e(37);
n.ReflectionObject._configure(n.Root);
n.Namespace._configure(n.Type, n.Service);
n.Root._configure(n.Type);
n.Field._configure(n.Type);
}, {
12: 12,
13: 13,
14: 14,
15: 15,
16: 16,
18: 18,
20: 20,
21: 21,
22: 22,
23: 23,
24: 24,
25: 25,
29: 29,
33: 33,
35: 35,
36: 36,
37: 37,
40: 40,
41: 41
} ],
18: [ function(e, t, r) {
var n = r;
n.build = "minimal";
n.Writer = e(42);
n.BufferWriter = e(43);
n.Reader = e(27);
n.BufferReader = e(28);
n.util = e(39);
n.rpc = e(31);
n.roots = e(30);
n.configure = i;
function i() {
n.Reader._configure(n.BufferReader);
n.util._configure();
}
n.Writer._configure(n.BufferWriter);
i();
}, {
27: 27,
28: 28,
30: 30,
31: 31,
39: 39,
42: 42,
43: 43
} ],
19: [ function(e, t, r) {
var n = t.exports = e(17);
n.build = "full";
n.tokenize = e(34);
n.parse = e(26);
n.common = e(11);
n.Root._configure(n.Type, n.parse, n.common);
}, {
11: 11,
17: 17,
26: 26,
34: 34
} ],
20: [ function(e, t, r) {
t.exports = s;
var n = e(16);
((s.prototype = Object.create(n.prototype)).constructor = s).className = "MapField";
var i = e(36), o = e(37);
function s(e, t, r, i, s, f) {
n.call(this, e, t, i, undefined, undefined, s, f);
if (!o.isString(r)) throw TypeError("keyType must be a string");
this.keyType = r;
this.resolvedKeyType = null;
this.map = !0;
}
s.fromJSON = function(e, t) {
return new s(e, t.id, t.keyType, t.type, t.options, t.comment);
};
s.prototype.toJSON = function(e) {
var t = !!e && Boolean(e.keepComments);
return o.toObject([ "keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined ]);
};
s.prototype.resolve = function() {
if (this.resolved) return this;
if (i.mapKey[this.keyType] === undefined) throw Error("invalid key type: " + this.keyType);
return n.prototype.resolve.call(this);
};
s.d = function(e, t, r) {
"function" == typeof r ? r = o.decorateType(r).name : r && "object" == typeof r && (r = o.decorateEnum(r).name);
return function(n, i) {
o.decorateType(n.constructor).add(new s(i, e, t, r));
};
};
}, {
16: 16,
36: 36,
37: 37
} ],
21: [ function(e, t, r) {
t.exports = i;
var n = e(39);
function i(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) this[t[r]] = e[t[r]];
}
i.create = function(e) {
return this.$type.create(e);
};
i.encode = function(e, t) {
return this.$type.encode(e, t);
};
i.encodeDelimited = function(e, t) {
return this.$type.encodeDelimited(e, t);
};
i.decode = function(e) {
return this.$type.decode(e);
};
i.decodeDelimited = function(e) {
return this.$type.decodeDelimited(e);
};
i.verify = function(e) {
return this.$type.verify(e);
};
i.fromObject = function(e) {
return this.$type.fromObject(e);
};
i.toObject = function(e, t) {
return this.$type.toObject(e, t);
};
i.prototype.toJSON = function() {
return this.$type.toObject(this, n.toJSONOptions);
};
}, {
39: 39
} ],
22: [ function(e, t, r) {
t.exports = o;
var n = e(24);
((o.prototype = Object.create(n.prototype)).constructor = o).className = "Method";
var i = e(37);
function o(e, t, r, o, s, f, a, u) {
if (i.isObject(s)) {
a = s;
s = f = undefined;
} else if (i.isObject(f)) {
a = f;
f = undefined;
}
if (t !== undefined && !i.isString(t)) throw TypeError("type must be a string");
if (!i.isString(r)) throw TypeError("requestType must be a string");
if (!i.isString(o)) throw TypeError("responseType must be a string");
n.call(this, e, a);
this.type = t || "rpc";
this.requestType = r;
this.requestStream = !!s || undefined;
this.responseType = o;
this.responseStream = !!f || undefined;
this.resolvedRequestType = null;
this.resolvedResponseType = null;
this.comment = u;
}
o.fromJSON = function(e, t) {
return new o(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment);
};
o.prototype.toJSON = function(e) {
var t = !!e && Boolean(e.keepComments);
return i.toObject([ "type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : undefined ]);
};
o.prototype.resolve = function() {
if (this.resolved) return this;
this.resolvedRequestType = this.parent.lookupType(this.requestType);
this.resolvedResponseType = this.parent.lookupType(this.responseType);
return n.prototype.resolve.call(this);
};
}, {
24: 24,
37: 37
} ],
23: [ function(e, t, r) {
t.exports = l;
var n = e(24);
((l.prototype = Object.create(n.prototype)).constructor = l).className = "Namespace";
var i, o, s = e(15), f = e(16), a = e(37);
l.fromJSON = function(e, t) {
return new l(e, t.options).addJSON(t.nested);
};
function u(e, t) {
if (!e || !e.length) return undefined;
for (var r = {}, n = 0; n < e.length; ++n) r[e[n].name] = e[n].toJSON(t);
return r;
}
l.arrayToJSON = u;
l.isReservedId = function(e, t) {
if (e) for (var r = 0; r < e.length; ++r) if ("string" != typeof e[r] && e[r][0] <= t && e[r][1] >= t) return !0;
return !1;
};
l.isReservedName = function(e, t) {
if (e) for (var r = 0; r < e.length; ++r) if (e[r] === t) return !0;
return !1;
};
function l(e, t) {
n.call(this, e, t);
this.nested = undefined;
this._nestedArray = null;
}
function c(e) {
e._nestedArray = null;
return e;
}
Object.defineProperty(l.prototype, "nestedArray", {
get: function() {
return this._nestedArray || (this._nestedArray = a.toArray(this.nested));
}
});
l.prototype.toJSON = function(e) {
return a.toObject([ "options", this.options, "nested", u(this.nestedArray, e) ]);
};
l.prototype.addJSON = function(e) {
if (e) for (var t, r = Object.keys(e), n = 0; n < r.length; ++n) {
t = e[r[n]];
this.add((t.fields !== undefined ? i.fromJSON : t.values !== undefined ? s.fromJSON : t.methods !== undefined ? o.fromJSON : t.id !== undefined ? f.fromJSON : l.fromJSON)(r[n], t));
}
return this;
};
l.prototype.get = function(e) {
return this.nested && this.nested[e] || null;
};
l.prototype.getEnum = function(e) {
if (this.nested && this.nested[e] instanceof s) return this.nested[e].values;
throw Error("no such enum: " + e);
};
l.prototype.add = function(e) {
if (!(e instanceof f && e.extend !== undefined || e instanceof i || e instanceof s || e instanceof o || e instanceof l)) throw TypeError("object must be a valid nested object");
if (this.nested) {
var t = this.get(e.name);
if (t) {
if (!(t instanceof l && e instanceof l) || t instanceof i || t instanceof o) throw Error("duplicate name '" + e.name + "' in " + this);
for (var r = t.nestedArray, n = 0; n < r.length; ++n) e.add(r[n]);
this.remove(t);
this.nested || (this.nested = {});
e.setOptions(t.options, !0);
}
} else this.nested = {};
this.nested[e.name] = e;
e.onAdd(this);
return c(this);
};
l.prototype.remove = function(e) {
if (!(e instanceof n)) throw TypeError("object must be a ReflectionObject");
if (e.parent !== this) throw Error(e + " is not a member of " + this);
delete this.nested[e.name];
Object.keys(this.nested).length || (this.nested = undefined);
e.onRemove(this);
return c(this);
};
l.prototype.define = function(e, t) {
if (a.isString(e)) e = e.split("."); else if (!Array.isArray(e)) throw TypeError("illegal path");
if (e && e.length && "" === e[0]) throw Error("path must be relative");
for (var r = this; e.length > 0; ) {
var n = e.shift();
if (r.nested && r.nested[n]) {
if (!((r = r.nested[n]) instanceof l)) throw Error("path conflicts with non-namespace objects");
} else r.add(r = new l(n));
}
t && r.addJSON(t);
return r;
};
l.prototype.resolveAll = function() {
for (var e = this.nestedArray, t = 0; t < e.length; ) e[t] instanceof l ? e[t++].resolveAll() : e[t++].resolve();
return this.resolve();
};
l.prototype.lookup = function(e, t, r) {
if ("boolean" == typeof t) {
r = t;
t = undefined;
} else t && !Array.isArray(t) && (t = [ t ]);
if (a.isString(e) && e.length) {
if ("." === e) return this.root;
e = e.split(".");
} else if (!e.length) return this;
if ("" === e[0]) return this.root.lookup(e.slice(1), t);
var n = this.get(e[0]);
if (n) {
if (1 === e.length) {
if (!t || t.indexOf(n.constructor) > -1) return n;
} else if (n instanceof l && (n = n.lookup(e.slice(1), t, !0))) return n;
} else for (var i = 0; i < this.nestedArray.length; ++i) if (this._nestedArray[i] instanceof l && (n = this._nestedArray[i].lookup(e, t, !0))) return n;
return null === this.parent || r ? null : this.parent.lookup(e, t);
};
l.prototype.lookupType = function(e) {
var t = this.lookup(e, [ i ]);
if (!t) throw Error("no such type: " + e);
return t;
};
l.prototype.lookupEnum = function(e) {
var t = this.lookup(e, [ s ]);
if (!t) throw Error("no such Enum '" + e + "' in " + this);
return t;
};
l.prototype.lookupTypeOrEnum = function(e) {
var t = this.lookup(e, [ i, s ]);
if (!t) throw Error("no such Type or Enum '" + e + "' in " + this);
return t;
};
l.prototype.lookupService = function(e) {
var t = this.lookup(e, [ o ]);
if (!t) throw Error("no such Service '" + e + "' in " + this);
return t;
};
l._configure = function(e, t) {
i = e;
o = t;
};
}, {
15: 15,
16: 16,
24: 24,
37: 37
} ],
24: [ function(e, t, r) {
t.exports = o;
o.className = "ReflectionObject";
var n, i = e(37);
function o(e, t) {
if (!i.isString(e)) throw TypeError("name must be a string");
if (t && !i.isObject(t)) throw TypeError("options must be an object");
this.options = t;
this.name = e;
this.parent = null;
this.resolved = !1;
this.comment = null;
this.filename = null;
}
Object.defineProperties(o.prototype, {
root: {
get: function() {
for (var e = this; null !== e.parent; ) e = e.parent;
return e;
}
},
fullName: {
get: function() {
for (var e = [ this.name ], t = this.parent; t; ) {
e.unshift(t.name);
t = t.parent;
}
return e.join(".");
}
}
});
o.prototype.toJSON = function() {
throw Error();
};
o.prototype.onAdd = function(e) {
this.parent && this.parent !== e && this.parent.remove(this);
this.parent = e;
this.resolved = !1;
var t = e.root;
t instanceof n && t._handleAdd(this);
};
o.prototype.onRemove = function(e) {
var t = e.root;
t instanceof n && t._handleRemove(this);
this.parent = null;
this.resolved = !1;
};
o.prototype.resolve = function() {
if (this.resolved) return this;
this.root instanceof n && (this.resolved = !0);
return this;
};
o.prototype.getOption = function(e) {
return this.options ? this.options[e] : undefined;
};
o.prototype.setOption = function(e, t, r) {
r && this.options && this.options[e] !== undefined || ((this.options || (this.options = {}))[e] = t);
return this;
};
o.prototype.setOptions = function(e, t) {
if (e) for (var r = Object.keys(e), n = 0; n < r.length; ++n) this.setOption(r[n], e[r[n]], t);
return this;
};
o.prototype.toString = function() {
var e = this.constructor.className, t = this.fullName;
return t.length ? e + " " + t : e;
};
o._configure = function(e) {
n = e;
};
}, {
37: 37
} ],
25: [ function(e, t, r) {
t.exports = s;
var n = e(24);
((s.prototype = Object.create(n.prototype)).constructor = s).className = "OneOf";
var i = e(16), o = e(37);
function s(e, t, r, i) {
if (!Array.isArray(t)) {
r = t;
t = undefined;
}
n.call(this, e, r);
if (t !== undefined && !Array.isArray(t)) throw TypeError("fieldNames must be an Array");
this.oneof = t || [];
this.fieldsArray = [];
this.comment = i;
}
s.fromJSON = function(e, t) {
return new s(e, t.oneof, t.options, t.comment);
};
s.prototype.toJSON = function(e) {
var t = !!e && Boolean(e.keepComments);
return o.toObject([ "options", this.options, "oneof", this.oneof, "comment", t ? this.comment : undefined ]);
};
function f(e) {
if (e.parent) for (var t = 0; t < e.fieldsArray.length; ++t) e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t]);
}
s.prototype.add = function(e) {
if (!(e instanceof i)) throw TypeError("field must be a Field");
e.parent && e.parent !== this.parent && e.parent.remove(e);
this.oneof.push(e.name);
this.fieldsArray.push(e);
e.partOf = this;
f(this);
return this;
};
s.prototype.remove = function(e) {
if (!(e instanceof i)) throw TypeError("field must be a Field");
var t = this.fieldsArray.indexOf(e);
if (t < 0) throw Error(e + " is not a member of " + this);
this.fieldsArray.splice(t, 1);
(t = this.oneof.indexOf(e.name)) > -1 && this.oneof.splice(t, 1);
e.partOf = null;
return this;
};
s.prototype.onAdd = function(e) {
n.prototype.onAdd.call(this, e);
for (var t = 0; t < this.oneof.length; ++t) {
var r = e.get(this.oneof[t]);
if (r && !r.partOf) {
r.partOf = this;
this.fieldsArray.push(r);
}
}
f(this);
};
s.prototype.onRemove = function(e) {
for (var t, r = 0; r < this.fieldsArray.length; ++r) (t = this.fieldsArray[r]).parent && t.parent.remove(t);
n.prototype.onRemove.call(this, e);
};
s.d = function() {
for (var e = new Array(arguments.length), t = 0; t < arguments.length; ) e[t] = arguments[t++];
return function(t, r) {
o.decorateType(t.constructor).add(new s(r, e));
Object.defineProperty(t, r, {
get: o.oneOfGetter(e),
set: o.oneOfSetter(e)
});
};
};
}, {
16: 16,
24: 24,
37: 37
} ],
26: [ function(e, t, r) {
t.exports = A;
A.filename = null;
A.defaults = {
keepCase: !1
};
var n = e(34), i = e(29), o = e(35), s = e(16), f = e(20), a = e(25), u = e(15), l = e(33), c = e(22), p = e(36), h = e(37), d = /^[1-9][0-9]*$/, y = /^-?[1-9][0-9]*$/, m = /^0[x][0-9a-fA-F]+$/, v = /^-?0[x][0-9a-fA-F]+$/, g = /^0[0-7]+$/, b = /^-?0[0-7]+$/, w = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, O = /^[a-zA-Z_][a-zA-Z_0-9]*$/, k = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/, j = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
function A(e, t, r) {
if (!(t instanceof i)) {
r = t;
t = new i();
}
r || (r = A.defaults);
var x, S, _, T, N, E = n(e, r.alternateCommentMode || !1), B = E.next, I = E.push, R = E.peek, D = E.skip, F = E.cmnt, L = !0, J = !1, $ = t, P = r.keepCase ? function(e) {
return e;
} : h.camelCase;
function C(e, t, r) {
var n = A.filename;
r || (A.filename = null);
return Error("illegal " + (t || "token") + " '" + e + "' (" + (n ? n + ", " : "") + "line " + E.line + ")");
}
function q() {
var e, t = [];
do {
if ('"' !== (e = B()) && "'" !== e) throw C(e);
t.push(B());
D(e);
e = R();
} while ('"' === e || "'" === e);
return t.join("");
}
function z(e) {
var t = B();
switch (t) {
case "'":
case '"':
I(t);
return q();

case "true":
case "TRUE":
return !0;

case "false":
case "FALSE":
return !1;
}
try {
return M(t, !0);
} catch (r) {
if (e && k.test(t)) return t;
throw C(t, "value");
}
}
function V(e, t) {
var r, n;
do {
!t || '"' !== (r = R()) && "'" !== r ? e.push([ n = U(B()), D("to", !0) ? U(B()) : n ]) : e.push(q());
} while (D(",", !0));
D(";");
}
function M(e, t) {
var r = 1;
if ("-" === e.charAt(0)) {
r = -1;
e = e.substring(1);
}
switch (e) {
case "inf":
case "INF":
case "Inf":
return Infinity * r;

case "nan":
case "NAN":
case "Nan":
case "NaN":
return NaN;

case "0":
return 0;
}
if (d.test(e)) return r * parseInt(e, 10);
if (m.test(e)) return r * parseInt(e, 16);
if (g.test(e)) return r * parseInt(e, 8);
if (w.test(e)) return r * parseFloat(e);
throw C(e, "number", t);
}
function U(e, t) {
switch (e) {
case "max":
case "MAX":
case "Max":
return 536870911;

case "0":
return 0;
}
if (!t && "-" === e.charAt(0)) throw C(e, "id");
if (y.test(e)) return parseInt(e, 10);
if (v.test(e)) return parseInt(e, 16);
if (b.test(e)) return parseInt(e, 8);
throw C(e, "id");
}
function H() {
if (x !== undefined) throw C("package");
x = B();
if (!k.test(x)) throw C(x, "name");
$ = $.define(x);
D(";");
}
function Z() {
var e, t = R();
switch (t) {
case "weak":
e = _ || (_ = []);
B();
break;

case "public":
B();

default:
e = S || (S = []);
}
t = q();
D(";");
e.push(t);
}
function W() {
D("=");
T = q();
if (!(J = "proto3" === T) && "proto2" !== T) throw C(T, "syntax");
D(";");
}
function K(e, t) {
switch (t) {
case "option":
ie(e, t);
D(";");
return !0;

case "message":
X(e, t);
return !0;

case "enum":
re(e, t);
return !0;

case "service":
ae(e, t);
return !0;

case "extend":
le(e, t);
return !0;
}
return !1;
}
function G(e, t, r) {
var n = E.line;
if (e) {
e.comment = F();
e.filename = A.filename;
}
if (D("{", !0)) {
for (var i; "}" !== (i = B()); ) t(i);
D(";", !0);
} else {
r && r();
D(";");
e && "string" != typeof e.comment && (e.comment = F(n));
}
}
function X(e, t) {
if (!O.test(t = B())) throw C(t, "type name");
var r = new o(t);
G(r, function(e) {
if (!K(r, e)) switch (e) {
case "map":
ee(r);
break;

case "required":
case "optional":
case "repeated":
Q(r, e);
break;

case "oneof":
te(r, e);
break;

case "extensions":
V(r.extensions || (r.extensions = []));
break;

case "reserved":
V(r.reserved || (r.reserved = []), !0);
break;

default:
if (!J || !k.test(e)) throw C(e);
I(e);
Q(r, "optional");
}
});
e.add(r);
}
function Q(e, t, r) {
var n = B();
if ("group" !== n) {
if (!k.test(n)) throw C(n, "type");
var i = B();
if (!O.test(i)) throw C(i, "name");
i = P(i);
D("=");
var o = new s(i, U(B()), n, t, r);
G(o, function(e) {
if ("option" !== e) throw C(e);
ie(o, e);
D(";");
}, function() {
fe(o);
});
e.add(o);
J || !o.repeated || p.packed[n] === undefined && p.basic[n] !== undefined || o.setOption("packed", !1, !0);
} else Y(e, t);
}
function Y(e, t) {
var r = B();
if (!O.test(r)) throw C(r, "name");
var n = h.lcFirst(r);
r === n && (r = h.ucFirst(r));
D("=");
var i = U(B()), f = new o(r);
f.group = !0;
var a = new s(n, i, r, t);
a.filename = A.filename;
G(f, function(e) {
switch (e) {
case "option":
ie(f, e);
D(";");
break;

case "required":
case "optional":
case "repeated":
Q(f, e);
break;

default:
throw C(e);
}
});
e.add(f).add(a);
}
function ee(e) {
D("<");
var t = B();
if (p.mapKey[t] === undefined) throw C(t, "type");
D(",");
var r = B();
if (!k.test(r)) throw C(r, "type");
D(">");
var n = B();
if (!O.test(n)) throw C(n, "name");
D("=");
var i = new f(P(n), U(B()), t, r);
G(i, function(e) {
if ("option" !== e) throw C(e);
ie(i, e);
D(";");
}, function() {
fe(i);
});
e.add(i);
}
function te(e, t) {
if (!O.test(t = B())) throw C(t, "name");
var r = new a(P(t));
G(r, function(e) {
if ("option" === e) {
ie(r, e);
D(";");
} else {
I(e);
Q(r, "optional");
}
});
e.add(r);
}
function re(e, t) {
if (!O.test(t = B())) throw C(t, "name");
var r = new u(t);
G(r, function(e) {
switch (e) {
case "option":
ie(r, e);
D(";");
break;

case "reserved":
V(r.reserved || (r.reserved = []), !0);
break;

default:
ne(r, e);
}
});
e.add(r);
}
function ne(e, t) {
if (!O.test(t)) throw C(t, "name");
D("=");
var r = U(B(), !0), n = {};
G(n, function(e) {
if ("option" !== e) throw C(e);
ie(n, e);
D(";");
}, function() {
fe(n);
});
e.add(t, r, n.comment);
}
function ie(e, t) {
var r = D("(", !0);
if (!k.test(t = B())) throw C(t, "name");
var n = t;
if (r) {
D(")");
n = "(" + n + ")";
t = R();
if (j.test(t)) {
n += t;
B();
}
}
D("=");
oe(e, n);
}
function oe(e, t) {
if (D("{", !0)) do {
if (!O.test(N = B())) throw C(N, "name");
if ("{" === R()) oe(e, t + "." + N); else {
D(":");
"{" === R() ? oe(e, t + "." + N) : se(e, t + "." + N, z(!0));
}
} while (!D("}", !0)); else se(e, t, z(!0));
}
function se(e, t, r) {
e.setOption && e.setOption(t, r);
}
function fe(e) {
if (D("[", !0)) {
do {
ie(e, "option");
} while (D(",", !0));
D("]");
}
return e;
}
function ae(e, t) {
if (!O.test(t = B())) throw C(t, "service name");
var r = new l(t);
G(r, function(e) {
if (!K(r, e)) {
if ("rpc" !== e) throw C(e);
ue(r, e);
}
});
e.add(r);
}
function ue(e, t) {
var r = t;
if (!O.test(t = B())) throw C(t, "name");
var n, i, o, s, f = t;
D("(");
D("stream", !0) && (i = !0);
if (!k.test(t = B())) throw C(t);
n = t;
D(")");
D("returns");
D("(");
D("stream", !0) && (s = !0);
if (!k.test(t = B())) throw C(t);
o = t;
D(")");
var a = new c(f, r, n, o, i, s);
G(a, function(e) {
if ("option" !== e) throw C(e);
ie(a, e);
D(";");
});
e.add(a);
}
function le(e, t) {
if (!k.test(t = B())) throw C(t, "reference");
var r = t;
G(null, function(t) {
switch (t) {
case "required":
case "repeated":
case "optional":
Q(e, t, r);
break;

default:
if (!J || !k.test(t)) throw C(t);
I(t);
Q(e, "optional", r);
}
});
}
for (;null !== (N = B()); ) switch (N) {
case "package":
if (!L) throw C(N);
H();
break;

case "import":
if (!L) throw C(N);
Z();
break;

case "syntax":
if (!L) throw C(N);
W();
break;

case "option":
if (!L) throw C(N);
ie($, N);
D(";");
break;

default:
if (K($, N)) {
L = !1;
continue;
}
throw C(N);
}
A.filename = null;
return {
package: x,
imports: S,
weakImports: _,
syntax: T,
root: t
};
}
}, {
15: 15,
16: 16,
20: 20,
22: 22,
25: 25,
29: 29,
33: 33,
34: 34,
35: 35,
36: 36,
37: 37
} ],
27: [ function(e, t, r) {
t.exports = a;
var n, i = e(39), o = i.LongBits, s = i.utf8;
function f(e, t) {
return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len);
}
function a(e) {
this.buf = e;
this.pos = 0;
this.len = e.length;
}
var u = "undefined" != typeof Uint8Array ? function(e) {
if (e instanceof Uint8Array || Array.isArray(e)) return new a(e);
throw Error("illegal buffer");
} : function(e) {
if (Array.isArray(e)) return new a(e);
throw Error("illegal buffer");
};
a.create = i.Buffer ? function(e) {
return (a.create = function(e) {
return i.Buffer.isBuffer(e) ? new n(e) : u(e);
})(e);
} : u;
a.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice;
a.prototype.uint32 = function() {
var e = 4294967295;
return function() {
e = (127 & this.buf[this.pos]) >>> 0;
if (this.buf[this.pos++] < 128) return e;
e = (e | (127 & this.buf[this.pos]) << 7) >>> 0;
if (this.buf[this.pos++] < 128) return e;
e = (e | (127 & this.buf[this.pos]) << 14) >>> 0;
if (this.buf[this.pos++] < 128) return e;
e = (e | (127 & this.buf[this.pos]) << 21) >>> 0;
if (this.buf[this.pos++] < 128) return e;
e = (e | (15 & this.buf[this.pos]) << 28) >>> 0;
if (this.buf[this.pos++] < 128) return e;
if ((this.pos += 5) > this.len) {
this.pos = this.len;
throw f(this, 10);
}
return e;
};
}();
a.prototype.int32 = function() {
return 0 | this.uint32();
};
a.prototype.sint32 = function() {
var e = this.uint32();
return e >>> 1 ^ -(1 & e) | 0;
};
function l() {
var e = new o(0, 0), t = 0;
if (!(this.len - this.pos > 4)) {
for (;t < 3; ++t) {
if (this.pos >= this.len) throw f(this);
e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0;
if (this.buf[this.pos++] < 128) return e;
}
e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0;
return e;
}
for (;t < 4; ++t) {
e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0;
if (this.buf[this.pos++] < 128) return e;
}
e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0;
e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0;
if (this.buf[this.pos++] < 128) return e;
t = 0;
if (this.len - this.pos > 4) for (;t < 5; ++t) {
e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0;
if (this.buf[this.pos++] < 128) return e;
} else for (;t < 5; ++t) {
if (this.pos >= this.len) throw f(this);
e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0;
if (this.buf[this.pos++] < 128) return e;
}
throw Error("invalid varint encoding");
}
a.prototype.bool = function() {
return 0 !== this.uint32();
};
function c(e, t) {
return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
}
a.prototype.fixed32 = function() {
if (this.pos + 4 > this.len) throw f(this, 4);
return c(this.buf, this.pos += 4);
};
a.prototype.sfixed32 = function() {
if (this.pos + 4 > this.len) throw f(this, 4);
return 0 | c(this.buf, this.pos += 4);
};
function p() {
if (this.pos + 8 > this.len) throw f(this, 8);
return new o(c(this.buf, this.pos += 4), c(this.buf, this.pos += 4));
}
a.prototype.float = function() {
if (this.pos + 4 > this.len) throw f(this, 4);
var e = i.float.readFloatLE(this.buf, this.pos);
this.pos += 4;
return e;
};
a.prototype.double = function() {
if (this.pos + 8 > this.len) throw f(this, 4);
var e = i.float.readDoubleLE(this.buf, this.pos);
this.pos += 8;
return e;
};
a.prototype.bytes = function() {
var e = this.uint32(), t = this.pos, r = this.pos + e;
if (r > this.len) throw f(this, e);
this.pos += e;
return Array.isArray(this.buf) ? this.buf.slice(t, r) : t === r ? new this.buf.constructor(0) : this._slice.call(this.buf, t, r);
};
a.prototype.string = function() {
var e = this.bytes();
return s.read(e, 0, e.length);
};
a.prototype.skip = function(e) {
if ("number" == typeof e) {
if (this.pos + e > this.len) throw f(this, e);
this.pos += e;
} else do {
if (this.pos >= this.len) throw f(this);
} while (128 & this.buf[this.pos++]);
return this;
};
a.prototype.skipType = function(e) {
switch (e) {
case 0:
this.skip();
break;

case 1:
this.skip(8);
break;

case 2:
this.skip(this.uint32());
break;

case 3:
for (;;) {
if (4 == (e = 7 & this.uint32())) break;
this.skipType(e);
}
break;

case 5:
this.skip(4);
break;

default:
throw Error("invalid wire type " + e + " at offset " + this.pos);
}
return this;
};
a._configure = function(e) {
n = e;
var t = i.Long ? "toLong" : "toNumber";
i.merge(a.prototype, {
int64: function() {
return l.call(this)[t](!1);
},
uint64: function() {
return l.call(this)[t](!0);
},
sint64: function() {
return l.call(this).zzDecode()[t](!1);
},
fixed64: function() {
return p.call(this)[t](!0);
},
sfixed64: function() {
return p.call(this)[t](!1);
}
});
};
}, {
39: 39
} ],
28: [ function(e, t, r) {
t.exports = o;
var n = e(27);
(o.prototype = Object.create(n.prototype)).constructor = o;
var i = e(39);
function o(e) {
n.call(this, e);
}
i.Buffer && (o.prototype._slice = i.Buffer.prototype.slice);
o.prototype.string = function() {
var e = this.uint32();
return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len));
};
}, {
27: 27,
39: 39
} ],
29: [ function(e, t, r) {
t.exports = c;
var n = e(23);
((c.prototype = Object.create(n.prototype)).constructor = c).className = "Root";
var i, o, s, f = e(16), a = e(15), u = e(25), l = e(37);
function c(e) {
n.call(this, "", e);
this.deferred = [];
this.files = [];
}
c.fromJSON = function(e, t) {
t || (t = new c());
e.options && t.setOptions(e.options);
return t.addJSON(e.nested);
};
c.prototype.resolvePath = l.path.resolve;
function p() {}
c.prototype.load = function e(t, r, n) {
if ("function" == typeof r) {
n = r;
r = undefined;
}
var i = this;
if (!n) return l.asPromise(e, i, t, r);
var f = n === p;
function a(e, t) {
if (n) {
var r = n;
n = null;
if (f) throw e;
r(e, t);
}
}
function u(e, t) {
try {
l.isString(t) && "{" === t.charAt(0) && (t = JSON.parse(t));
if (l.isString(t)) {
o.filename = e;
var n, s = o(t, i, r), u = 0;
if (s.imports) for (;u < s.imports.length; ++u) (n = i.resolvePath(e, s.imports[u])) && c(n);
if (s.weakImports) for (u = 0; u < s.weakImports.length; ++u) (n = i.resolvePath(e, s.weakImports[u])) && c(n, !0);
} else i.setOptions(t.options).addJSON(t.nested);
} catch (e) {
a(e);
}
f || h || a(null, i);
}
function c(e, t) {
var r = e.lastIndexOf("google/protobuf/");
if (r > -1) {
var o = e.substring(r);
o in s && (e = o);
}
if (!(i.files.indexOf(e) > -1)) {
i.files.push(e);
if (e in s) if (f) u(e, s[e]); else {
++h;
setTimeout(function() {
--h;
u(e, s[e]);
});
} else if (f) {
var c;
try {
c = l.fs.readFileSync(e).toString("utf8");
} catch (e) {
t || a(e);
return;
}
u(e, c);
} else {
++h;
l.fetch(e, function(r, o) {
--h;
n && (r ? t ? h || a(null, i) : a(r) : u(e, o));
});
}
}
}
var h = 0;
l.isString(t) && (t = [ t ]);
for (var d, y = 0; y < t.length; ++y) (d = i.resolvePath("", t[y])) && c(d);
if (f) return i;
h || a(null, i);
return undefined;
};
c.prototype.loadSync = function(e, t) {
if (!l.isNode) throw Error("not supported");
return this.load(e, t, p);
};
c.prototype.resolveAll = function() {
if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function(e) {
return "'extend " + e.extend + "' in " + e.parent.fullName;
}).join(", "));
return n.prototype.resolveAll.call(this);
};
var h = /^[A-Z]/;
function d(e, t) {
var r = t.parent.lookup(t.extend);
if (r) {
var n = new f(t.fullName, t.id, t.type, t.rule, undefined, t.options);
n.declaringField = t;
t.extensionField = n;
r.add(n);
return !0;
}
return !1;
}
c.prototype._handleAdd = function(e) {
if (e instanceof f) e.extend === undefined || e.extensionField || d(0, e) || this.deferred.push(e); else if (e instanceof a) h.test(e.name) && (e.parent[e.name] = e.values); else if (!(e instanceof u)) {
if (e instanceof i) for (var t = 0; t < this.deferred.length; ) d(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
for (var r = 0; r < e.nestedArray.length; ++r) this._handleAdd(e._nestedArray[r]);
h.test(e.name) && (e.parent[e.name] = e);
}
};
c.prototype._handleRemove = function(e) {
if (e instanceof f) {
if (e.extend !== undefined) if (e.extensionField) {
e.extensionField.parent.remove(e.extensionField);
e.extensionField = null;
} else {
var t = this.deferred.indexOf(e);
t > -1 && this.deferred.splice(t, 1);
}
} else if (e instanceof a) h.test(e.name) && delete e.parent[e.name]; else if (e instanceof n) {
for (var r = 0; r < e.nestedArray.length; ++r) this._handleRemove(e._nestedArray[r]);
h.test(e.name) && delete e.parent[e.name];
}
};
c._configure = function(e, t, r) {
i = e;
o = t;
s = r;
};
}, {
15: 15,
16: 16,
23: 23,
25: 25,
37: 37
} ],
30: [ function(e, t, r) {
t.exports = {};
}, {} ],
31: [ function(e, t, r) {
r.Service = e(32);
}, {
32: 32
} ],
32: [ function(e, t, r) {
t.exports = i;
var n = e(39);
(i.prototype = Object.create(n.EventEmitter.prototype)).constructor = i;
function i(e, t, r) {
if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
n.EventEmitter.call(this);
this.rpcImpl = e;
this.requestDelimited = Boolean(t);
this.responseDelimited = Boolean(r);
}
i.prototype.rpcCall = function e(t, r, i, o, s) {
if (!o) throw TypeError("request must be specified");
var f = this;
if (!s) return n.asPromise(e, f, t, r, i, o);
if (!f.rpcImpl) {
setTimeout(function() {
s(Error("already ended"));
}, 0);
return undefined;
}
try {
return f.rpcImpl(t, r[f.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), function(e, r) {
if (e) {
f.emit("error", e, t);
return s(e);
}
if (null === r) {
f.end(!0);
return undefined;
}
if (!(r instanceof i)) try {
r = i[f.responseDelimited ? "decodeDelimited" : "decode"](r);
} catch (e) {
f.emit("error", e, t);
return s(e);
}
f.emit("data", r, t);
return s(null, r);
});
} catch (e) {
f.emit("error", e, t);
setTimeout(function() {
s(e);
}, 0);
return undefined;
}
};
i.prototype.end = function(e) {
if (this.rpcImpl) {
e || this.rpcImpl(null, null, null);
this.rpcImpl = null;
this.emit("end").off();
}
return this;
};
}, {
39: 39
} ],
33: [ function(e, t, r) {
t.exports = f;
var n = e(23);
((f.prototype = Object.create(n.prototype)).constructor = f).className = "Service";
var i = e(22), o = e(37), s = e(31);
function f(e, t) {
n.call(this, e, t);
this.methods = {};
this._methodsArray = null;
}
f.fromJSON = function(e, t) {
var r = new f(e, t.options);
if (t.methods) for (var n = Object.keys(t.methods), o = 0; o < n.length; ++o) r.add(i.fromJSON(n[o], t.methods[n[o]]));
t.nested && r.addJSON(t.nested);
r.comment = t.comment;
return r;
};
f.prototype.toJSON = function(e) {
var t = n.prototype.toJSON.call(this, e), r = !!e && Boolean(e.keepComments);
return o.toObject([ "options", t && t.options || undefined, "methods", n.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || undefined, "comment", r ? this.comment : undefined ]);
};
Object.defineProperty(f.prototype, "methodsArray", {
get: function() {
return this._methodsArray || (this._methodsArray = o.toArray(this.methods));
}
});
function a(e) {
e._methodsArray = null;
return e;
}
f.prototype.get = function(e) {
return this.methods[e] || n.prototype.get.call(this, e);
};
f.prototype.resolveAll = function() {
for (var e = this.methodsArray, t = 0; t < e.length; ++t) e[t].resolve();
return n.prototype.resolve.call(this);
};
f.prototype.add = function(e) {
if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
if (e instanceof i) {
this.methods[e.name] = e;
e.parent = this;
return a(this);
}
return n.prototype.add.call(this, e);
};
f.prototype.remove = function(e) {
if (e instanceof i) {
if (this.methods[e.name] !== e) throw Error(e + " is not a member of " + this);
delete this.methods[e.name];
e.parent = null;
return a(this);
}
return n.prototype.remove.call(this, e);
};
f.prototype.create = function(e, t, r) {
for (var n, i = new s.Service(e, t, r), f = 0; f < this.methodsArray.length; ++f) {
var a = o.lcFirst((n = this._methodsArray[f]).resolve().name).replace(/[^$\w_]/g, "");
i[a] = o.codegen([ "r", "c" ], o.isReserved(a) ? a + "_" : a)("return this.rpcCall(m,q,s,r,c)")({
m: n,
q: n.resolvedRequestType.ctor,
s: n.resolvedResponseType.ctor
});
}
return i;
};
}, {
22: 22,
23: 23,
31: 31,
37: 37
} ],
34: [ function(e, t, r) {
t.exports = h;
var n = /[\s{}=;:[\],'"()<>]/g, i = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, o = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, s = /^ *[*/]+ */, f = /^\s*\*?\/*/, a = /\n/g, u = /\s/, l = /\\(.?)/g, c = {
0: "\0",
r: "\r",
n: "\n",
t: "\t"
};
function p(e) {
return e.replace(l, function(e, t) {
switch (t) {
case "\\":
case "":
return t;

default:
return c[t] || "";
}
});
}
h.unescape = p;
function h(e, t) {
var r = 0, l = (e = e.toString()).length, c = 1, h = null, d = null, y = 0, m = !1, v = [], g = null;
function b(e) {
return Error("illegal " + e + " (line " + c + ")");
}
function w() {
var t = "'" === g ? o : i;
t.lastIndex = r - 1;
var n = t.exec(e);
if (!n) throw b("string");
r = t.lastIndex;
S(g);
g = null;
return p(n[1]);
}
function O(t) {
return e.charAt(t);
}
function k(r, n) {
h = e.charAt(r++);
y = c;
m = !1;
var i, o = r - (t ? 2 : 3);
do {
if (--o < 0 || "\n" === (i = e.charAt(o))) {
m = !0;
break;
}
} while (" " === i || "\t" === i);
for (var u = e.substring(r, n).split(a), l = 0; l < u.length; ++l) u[l] = u[l].replace(t ? f : s, "").trim();
d = u.join("\n").trim();
}
function j(t) {
var r = A(t), n = e.substring(t, r);
return /^\s*\/{1,2}/.test(n);
}
function A(e) {
for (var t = e; t < l && "\n" !== O(t); ) t++;
return t;
}
function x() {
if (v.length > 0) return v.shift();
if (g) return w();
var i, o, s, f, a;
do {
if (r === l) return null;
i = !1;
for (;u.test(s = O(r)); ) {
"\n" === s && ++c;
if (++r === l) return null;
}
if ("/" === O(r)) {
if (++r === l) throw b("comment");
if ("/" === O(r)) if (t) {
f = r;
a = !1;
if (j(r)) {
a = !0;
do {
if ((r = A(r)) === l) break;
r++;
} while (j(r));
} else r = Math.min(l, A(r) + 1);
a && k(f, r);
c++;
i = !0;
} else {
a = "/" === O(f = r + 1);
for (;"\n" !== O(++r); ) if (r === l) return null;
++r;
a && k(f, r - 1);
++c;
i = !0;
} else {
if ("*" !== (s = O(r))) return "/";
f = r + 1;
a = t || "*" === O(f);
do {
"\n" === s && ++c;
if (++r === l) throw b("comment");
o = s;
s = O(r);
} while ("*" !== o || "/" !== s);
++r;
a && k(f, r - 2);
i = !0;
}
}
} while (i);
var p = r;
n.lastIndex = 0;
if (!n.test(O(p++))) for (;p < l && !n.test(O(p)); ) ++p;
var h = e.substring(r, r = p);
'"' !== h && "'" !== h || (g = h);
return h;
}
function S(e) {
v.push(e);
}
function _() {
if (!v.length) {
var e = x();
if (null === e) return null;
S(e);
}
return v[0];
}
return Object.defineProperty({
next: x,
peek: _,
push: S,
skip: function(e, t) {
var r = _();
if (r === e) {
x();
return !0;
}
if (!t) throw b("token '" + r + "', '" + e + "' expected");
return !1;
},
cmnt: function(e) {
var r = null;
if (e === undefined) y === c - 1 && (t || "*" === h || m) && (r = d); else {
y < e && _();
y !== e || m || !t && "/" !== h || (r = d);
}
return r;
}
}, "line", {
get: function() {
return c;
}
});
}
}, {} ],
35: [ function(e, t, r) {
t.exports = g;
var n = e(23);
((g.prototype = Object.create(n.prototype)).constructor = g).className = "Type";
var i = e(15), o = e(25), s = e(16), f = e(20), a = e(33), u = e(21), l = e(27), c = e(42), p = e(37), h = e(14), d = e(13), y = e(40), m = e(12), v = e(41);
function g(e, t) {
n.call(this, e, t);
this.fields = {};
this.oneofs = undefined;
this.extensions = undefined;
this.reserved = undefined;
this.group = undefined;
this._fieldsById = null;
this._fieldsArray = null;
this._oneofsArray = null;
this._ctor = null;
}
Object.defineProperties(g.prototype, {
fieldsById: {
get: function() {
if (this._fieldsById) return this._fieldsById;
this._fieldsById = {};
for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
var r = this.fields[e[t]], n = r.id;
if (this._fieldsById[n]) throw Error("duplicate id " + n + " in " + this);
this._fieldsById[n] = r;
}
return this._fieldsById;
}
},
fieldsArray: {
get: function() {
return this._fieldsArray || (this._fieldsArray = p.toArray(this.fields));
}
},
oneofsArray: {
get: function() {
return this._oneofsArray || (this._oneofsArray = p.toArray(this.oneofs));
}
},
ctor: {
get: function() {
return this._ctor || (this.ctor = g.generateConstructor(this)());
},
set: function(e) {
var t = e.prototype;
if (!(t instanceof u)) {
(e.prototype = new u()).constructor = e;
p.merge(e.prototype, t);
}
e.$type = e.prototype.$type = this;
p.merge(e, u, !0);
this._ctor = e;
for (var r = 0; r < this.fieldsArray.length; ++r) this._fieldsArray[r].resolve();
var n = {};
for (r = 0; r < this.oneofsArray.length; ++r) n[this._oneofsArray[r].resolve().name] = {
get: p.oneOfGetter(this._oneofsArray[r].oneof),
set: p.oneOfSetter(this._oneofsArray[r].oneof)
};
r && Object.defineProperties(e.prototype, n);
}
}
});
g.generateConstructor = function(e) {
for (var t, r = p.codegen([ "p" ], e.name), n = 0; n < e.fieldsArray.length; ++n) (t = e._fieldsArray[n]).map ? r("this%s={}", p.safeProp(t.name)) : t.repeated && r("this%s=[]", p.safeProp(t.name));
return r("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
};
function b(e) {
e._fieldsById = e._fieldsArray = e._oneofsArray = null;
delete e.encode;
delete e.decode;
delete e.verify;
return e;
}
g.fromJSON = function(e, t) {
var r = new g(e, t.options);
r.extensions = t.extensions;
r.reserved = t.reserved;
for (var u = Object.keys(t.fields), l = 0; l < u.length; ++l) r.add(("undefined" != typeof t.fields[u[l]].keyType ? f.fromJSON : s.fromJSON)(u[l], t.fields[u[l]]));
if (t.oneofs) for (u = Object.keys(t.oneofs), l = 0; l < u.length; ++l) r.add(o.fromJSON(u[l], t.oneofs[u[l]]));
if (t.nested) for (u = Object.keys(t.nested), l = 0; l < u.length; ++l) {
var c = t.nested[u[l]];
r.add((c.id !== undefined ? s.fromJSON : c.fields !== undefined ? g.fromJSON : c.values !== undefined ? i.fromJSON : c.methods !== undefined ? a.fromJSON : n.fromJSON)(u[l], c));
}
t.extensions && t.extensions.length && (r.extensions = t.extensions);
t.reserved && t.reserved.length && (r.reserved = t.reserved);
t.group && (r.group = !0);
t.comment && (r.comment = t.comment);
return r;
};
g.prototype.toJSON = function(e) {
var t = n.prototype.toJSON.call(this, e), r = !!e && Boolean(e.keepComments);
return p.toObject([ "options", t && t.options || undefined, "oneofs", n.arrayToJSON(this.oneofsArray, e), "fields", n.arrayToJSON(this.fieldsArray.filter(function(e) {
return !e.declaringField;
}), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", t && t.nested || undefined, "comment", r ? this.comment : undefined ]);
};
g.prototype.resolveAll = function() {
for (var e = this.fieldsArray, t = 0; t < e.length; ) e[t++].resolve();
var r = this.oneofsArray;
t = 0;
for (;t < r.length; ) r[t++].resolve();
return n.prototype.resolveAll.call(this);
};
g.prototype.get = function(e) {
return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null;
};
g.prototype.add = function(e) {
if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
if (e instanceof s && e.extend === undefined) {
if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id]) throw Error("duplicate id " + e.id + " in " + this);
if (this.isReservedId(e.id)) throw Error("id " + e.id + " is reserved in " + this);
if (this.isReservedName(e.name)) throw Error("name '" + e.name + "' is reserved in " + this);
e.parent && e.parent.remove(e);
this.fields[e.name] = e;
e.message = this;
e.onAdd(this);
return b(this);
}
if (e instanceof o) {
this.oneofs || (this.oneofs = {});
this.oneofs[e.name] = e;
e.onAdd(this);
return b(this);
}
return n.prototype.add.call(this, e);
};
g.prototype.remove = function(e) {
if (e instanceof s && e.extend === undefined) {
if (!this.fields || this.fields[e.name] !== e) throw Error(e + " is not a member of " + this);
delete this.fields[e.name];
e.parent = null;
e.onRemove(this);
return b(this);
}
if (e instanceof o) {
if (!this.oneofs || this.oneofs[e.name] !== e) throw Error(e + " is not a member of " + this);
delete this.oneofs[e.name];
e.parent = null;
e.onRemove(this);
return b(this);
}
return n.prototype.remove.call(this, e);
};
g.prototype.isReservedId = function(e) {
return n.isReservedId(this.reserved, e);
};
g.prototype.isReservedName = function(e) {
return n.isReservedName(this.reserved, e);
};
g.prototype.create = function(e) {
return new this.ctor(e);
};
g.prototype.setup = function() {
for (var e = this.fullName, t = [], r = 0; r < this.fieldsArray.length; ++r) t.push(this._fieldsArray[r].resolve().resolvedType);
this.encode = h(this)({
Writer: c,
types: t,
util: p
});
this.decode = d(this)({
Reader: l,
types: t,
util: p
});
this.verify = y(this)({
types: t,
util: p
});
this.fromObject = m.fromObject(this)({
types: t,
util: p
});
this.toObject = m.toObject(this)({
types: t,
util: p
});
var n = v[e];
if (n) {
var i = Object.create(this);
i.fromObject = this.fromObject;
this.fromObject = n.fromObject.bind(i);
i.toObject = this.toObject;
this.toObject = n.toObject.bind(i);
}
return this;
};
g.prototype.encode = function(e, t) {
return this.setup().encode(e, t);
};
g.prototype.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
g.prototype.decode = function(e, t) {
return this.setup().decode(e, t);
};
g.prototype.decodeDelimited = function(e) {
e instanceof l || (e = l.create(e));
return this.decode(e, e.uint32());
};
g.prototype.verify = function(e) {
return this.setup().verify(e);
};
g.prototype.fromObject = function(e) {
return this.setup().fromObject(e);
};
g.prototype.toObject = function(e, t) {
return this.setup().toObject(e, t);
};
g.d = function(e) {
return function(t) {
p.decorateType(t, e);
};
};
}, {
12: 12,
13: 13,
14: 14,
15: 15,
16: 16,
20: 20,
21: 21,
23: 23,
25: 25,
27: 27,
33: 33,
37: 37,
40: 40,
41: 41,
42: 42
} ],
36: [ function(e, t, r) {
var n = r, i = e(37), o = [ "double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes" ];
function s(e, t) {
var r = 0, n = {};
t |= 0;
for (;r < e.length; ) n[o[r + t]] = e[r++];
return n;
}
n.basic = s([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2 ]);
n.defaults = s([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", i.emptyArray, null ]);
n.long = s([ 0, 0, 0, 1, 1 ], 7);
n.mapKey = s([ 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2 ], 2);
n.packed = s([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0 ]);
}, {
37: 37
} ],
37: [ function(e, t, r) {
var n, i, o = t.exports = e(39), s = e(30);
o.codegen = e(3);
o.fetch = e(5);
o.path = e(8);
o.fs = o.inquire("fs");
o.toArray = function(e) {
if (e) {
for (var t = Object.keys(e), r = new Array(t.length), n = 0; n < t.length; ) r[n] = e[t[n++]];
return r;
}
return [];
};
o.toObject = function(e) {
for (var t = {}, r = 0; r < e.length; ) {
var n = e[r++], i = e[r++];
i !== undefined && (t[n] = i);
}
return t;
};
var f = /\\/g, a = /"/g;
o.isReserved = function(e) {
return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e);
};
o.safeProp = function(e) {
return !/^[$\w_]+$/.test(e) || o.isReserved(e) ? '["' + e.replace(f, "\\\\").replace(a, '\\"') + '"]' : "." + e;
};
o.ucFirst = function(e) {
return e.charAt(0).toUpperCase() + e.substring(1);
};
var u = /_([a-z])/g;
o.camelCase = function(e) {
return e.substring(0, 1) + e.substring(1).replace(u, function(e, t) {
return t.toUpperCase();
});
};
o.compareFieldsById = function(e, t) {
return e.id - t.id;
};
o.decorateType = function(t, r) {
if (t.$type) {
if (r && t.$type.name !== r) {
o.decorateRoot.remove(t.$type);
t.$type.name = r;
o.decorateRoot.add(t.$type);
}
return t.$type;
}
n || (n = e(35));
var i = new n(r || t.name);
o.decorateRoot.add(i);
i.ctor = t;
Object.defineProperty(t, "$type", {
value: i,
enumerable: !1
});
Object.defineProperty(t.prototype, "$type", {
value: i,
enumerable: !1
});
return i;
};
var l = 0;
o.decorateEnum = function(t) {
if (t.$type) return t.$type;
i || (i = e(15));
var r = new i("Enum" + l++, t);
o.decorateRoot.add(r);
Object.defineProperty(t, "$type", {
value: r,
enumerable: !1
});
return r;
};
Object.defineProperty(o, "decorateRoot", {
get: function() {
return s.decorated || (s.decorated = new (e(29))());
}
});
}, {
15: 15,
29: 29,
3: 3,
30: 30,
35: 35,
39: 39,
5: 5,
8: 8
} ],
38: [ function(e, t, r) {
t.exports = i;
var n = e(39);
function i(e, t) {
this.lo = e >>> 0;
this.hi = t >>> 0;
}
var o = i.zero = new i(0, 0);
o.toNumber = function() {
return 0;
};
o.zzEncode = o.zzDecode = function() {
return this;
};
o.length = function() {
return 1;
};
var s = i.zeroHash = "\0\0\0\0\0\0\0\0";
i.fromNumber = function(e) {
if (0 === e) return o;
var t = e < 0;
t && (e = -e);
var r = e >>> 0, n = (e - r) / 4294967296 >>> 0;
if (t) {
n = ~n >>> 0;
r = ~r >>> 0;
if (++r > 4294967295) {
r = 0;
++n > 4294967295 && (n = 0);
}
}
return new i(r, n);
};
i.from = function(e) {
if ("number" == typeof e) return i.fromNumber(e);
if (n.isString(e)) {
if (!n.Long) return i.fromNumber(parseInt(e, 10));
e = n.Long.fromString(e);
}
return e.low || e.high ? new i(e.low >>> 0, e.high >>> 0) : o;
};
i.prototype.toNumber = function(e) {
if (!e && this.hi >>> 31) {
var t = 1 + ~this.lo >>> 0, r = ~this.hi >>> 0;
t || (r = r + 1 >>> 0);
return -(t + 4294967296 * r);
}
return this.lo + 4294967296 * this.hi;
};
i.prototype.toLong = function(e) {
return n.Long ? new n.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : {
low: 0 | this.lo,
high: 0 | this.hi,
unsigned: Boolean(e)
};
};
var f = String.prototype.charCodeAt;
i.fromHash = function(e) {
return e === s ? o : new i((f.call(e, 0) | f.call(e, 1) << 8 | f.call(e, 2) << 16 | f.call(e, 3) << 24) >>> 0, (f.call(e, 4) | f.call(e, 5) << 8 | f.call(e, 6) << 16 | f.call(e, 7) << 24) >>> 0);
};
i.prototype.toHash = function() {
return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
};
i.prototype.zzEncode = function() {
var e = this.hi >> 31;
this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0;
this.lo = (this.lo << 1 ^ e) >>> 0;
return this;
};
i.prototype.zzDecode = function() {
var e = -(1 & this.lo);
this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0;
this.hi = (this.hi >>> 1 ^ e) >>> 0;
return this;
};
i.prototype.length = function() {
var e = this.lo, t = (this.lo >>> 28 | this.hi << 4) >>> 0, r = this.hi >>> 24;
return 0 === r ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : r < 128 ? 9 : 10;
};
}, {
39: 39
} ],
39: [ function(e, t, r) {
var n = r;
n.asPromise = e(1);
n.base64 = e(2);
n.EventEmitter = e(4);
n.float = e(6);
n.inquire = e(7);
n.utf8 = e(10);
n.pool = e(9);
n.LongBits = e(38);
n.emptyArray = Object.freeze ? Object.freeze([]) : [];
n.emptyObject = Object.freeze ? Object.freeze({}) : {};
n.isNode = Boolean(global.process && global.process.versions && global.process.versions.node);
n.isInteger = Number.isInteger || function(e) {
return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
};
n.isString = function(e) {
return "string" == typeof e || e instanceof String;
};
n.isObject = function(e) {
return e && "object" == typeof e;
};
n.isset = n.isSet = function(e, t) {
var r = e[t];
return !(null == r || !e.hasOwnProperty(t)) && ("object" != typeof r || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0);
};
n.Buffer = function() {
try {
var e = n.inquire("buffer").Buffer;
return e.prototype.utf8Write ? e : null;
} catch (e) {
return null;
}
}();
n._Buffer_from = null;
n._Buffer_allocUnsafe = null;
n.newBuffer = function(e) {
return "number" == typeof e ? n.Buffer ? n._Buffer_allocUnsafe(e) : new n.Array(e) : n.Buffer ? n._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e);
};
n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
n.Long = global.dcodeIO && global.dcodeIO.Long || n.inquire("long");
n.key2Re = /^true|false|0|1$/;
n.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
n.longToHash = function(e) {
return e ? n.LongBits.from(e).toHash() : n.LongBits.zeroHash;
};
n.longFromHash = function(e, t) {
var r = n.LongBits.fromHash(e);
return n.Long ? n.Long.fromBits(r.lo, r.hi, t) : r.toNumber(Boolean(t));
};
function i(e, t, r) {
for (var n = Object.keys(t), i = 0; i < n.length; ++i) e[n[i]] !== undefined && r || (e[n[i]] = t[n[i]]);
return e;
}
n.merge = i;
n.lcFirst = function(e) {
return e.charAt(0).toLowerCase() + e.substring(1);
};
function o(e) {
function t(e, r) {
if (!(this instanceof t)) return new t(e, r);
Object.defineProperty(this, "message", {
get: function() {
return e;
}
});
Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
value: new Error().stack || ""
});
r && i(this, r);
}
(t.prototype = Object.create(Error.prototype)).constructor = t;
Object.defineProperty(t.prototype, "name", {
get: function() {
return e;
}
});
t.prototype.toString = function() {
return this.name + ": " + this.message;
};
return t;
}
n.newError = o;
n.ProtocolError = o("ProtocolError");
n.oneOfGetter = function(e) {
for (var t = {}, r = 0; r < e.length; ++r) t[e[r]] = 1;
return function() {
for (var e = Object.keys(this), r = e.length - 1; r > -1; --r) if (1 === t[e[r]] && this[e[r]] !== undefined && null !== this[e[r]]) return e[r];
};
};
n.oneOfSetter = function(e) {
return function(t) {
for (var r = 0; r < e.length; ++r) e[r] !== t && delete this[e[r]];
};
};
n.toJSONOptions = {
longs: String,
enums: String,
bytes: String,
json: !0
};
n._configure = function() {
var e = n.Buffer;
if (e) {
n._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, r) {
return new e(t, r);
};
n._Buffer_allocUnsafe = e.allocUnsafe || function(t) {
return new e(t);
};
} else n._Buffer_from = n._Buffer_allocUnsafe = null;
};
}, {
1: 1,
10: 10,
2: 2,
38: 38,
4: 4,
6: 6,
7: 7,
9: 9
} ],
40: [ function(e, t, r) {
t.exports = function(e) {
var t = i.codegen([ "m" ], e.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"), r = {};
e.oneofsArray.length && t("var p={}");
for (var n = 0; n < e.fieldsArray.length; ++n) {
var a = e._fieldsArray[n].resolve(), u = "m" + i.safeProp(a.name);
a.optional && t("if(%s!=null&&m.hasOwnProperty(%j)){", u, a.name);
if (a.map) {
t("if(!util.isObject(%s))", u)("return%j", o(a, "object"))("var k=Object.keys(%s)", u)("for(var i=0;i<k.length;++i){");
f(t, a, "k[i]");
s(t, a, n, u + "[k[i]]")("}");
} else if (a.repeated) {
t("if(!Array.isArray(%s))", u)("return%j", o(a, "array"))("for(var i=0;i<%s.length;++i){", u);
s(t, a, n, u + "[i]")("}");
} else {
if (a.partOf) {
var l = i.safeProp(a.partOf.name);
1 === r[a.partOf.name] && t("if(p%s===1)", l)("return%j", a.partOf.name + ": multiple values");
r[a.partOf.name] = 1;
t("p%s=1", l);
}
s(t, a, n, u);
}
a.optional && t("}");
}
return t("return null");
};
var n = e(15), i = e(37);
function o(e, t) {
return e.name + ": " + t + (e.repeated && "array" !== t ? "[]" : e.map && "object" !== t ? "{k:" + e.keyType + "}" : "") + " expected";
}
function s(e, t, r, i) {
if (t.resolvedType) if (t.resolvedType instanceof n) {
e("switch(%s){", i)("default:")("return%j", o(t, "enum value"));
for (var s = Object.keys(t.resolvedType.values), f = 0; f < s.length; ++f) e("case %i:", t.resolvedType.values[s[f]]);
e("break")("}");
} else e("{")("var e=types[%i].verify(%s);", r, i)("if(e)")("return%j+e", t.name + ".")("}"); else switch (t.type) {
case "int32":
case "uint32":
case "sint32":
case "fixed32":
case "sfixed32":
e("if(!util.isInteger(%s))", i)("return%j", o(t, "integer"));
break;

case "int64":
case "uint64":
case "sint64":
case "fixed64":
case "sfixed64":
e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", i, i, i, i)("return%j", o(t, "integer|Long"));
break;

case "float":
case "double":
e('if(typeof %s!=="number")', i)("return%j", o(t, "number"));
break;

case "bool":
e('if(typeof %s!=="boolean")', i)("return%j", o(t, "boolean"));
break;

case "string":
e("if(!util.isString(%s))", i)("return%j", o(t, "string"));
break;

case "bytes":
e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', i, i, i)("return%j", o(t, "buffer"));
}
return e;
}
function f(e, t, r) {
switch (t.keyType) {
case "int32":
case "uint32":
case "sint32":
case "fixed32":
case "sfixed32":
e("if(!util.key32Re.test(%s))", r)("return%j", o(t, "integer key"));
break;

case "int64":
case "uint64":
case "sint64":
case "fixed64":
case "sfixed64":
e("if(!util.key64Re.test(%s))", r)("return%j", o(t, "integer|Long key"));
break;

case "bool":
e("if(!util.key2Re.test(%s))", r)("return%j", o(t, "boolean key"));
}
return e;
}
}, {
15: 15,
37: 37
} ],
41: [ function(e, t, r) {
var n = r, i = e(21);
n[".google.protobuf.Any"] = {
fromObject: function(e) {
if (e && e["@type"]) {
var t = this.lookup(e["@type"]);
if (t) {
var r = "." === e["@type"].charAt(0) ? e["@type"].substr(1) : e["@type"];
return this.create({
type_url: "/" + r,
value: t.encode(t.fromObject(e)).finish()
});
}
}
return this.fromObject(e);
},
toObject: function(e, t) {
if (t && t.json && e.type_url && e.value) {
var r = e.type_url.substring(e.type_url.lastIndexOf("/") + 1), n = this.lookup(r);
n && (e = n.decode(e.value));
}
if (!(e instanceof this.ctor) && e instanceof i) {
var o = e.$type.toObject(e, t);
o["@type"] = e.$type.fullName;
return o;
}
return this.toObject(e, t);
}
};
}, {
21: 21
} ],
42: [ function(e, t, r) {
t.exports = c;
var n, i = e(39), o = i.LongBits, s = i.base64, f = i.utf8;
function a(e, t, r) {
this.fn = e;
this.len = t;
this.next = undefined;
this.val = r;
}
function u() {}
function l(e) {
this.head = e.head;
this.tail = e.tail;
this.len = e.len;
this.next = e.states;
}
function c() {
this.len = 0;
this.head = new a(u, 0, 0);
this.tail = this.head;
this.states = null;
}
c.create = i.Buffer ? function() {
return (c.create = function() {
return new n();
})();
} : function() {
return new c();
};
c.alloc = function(e) {
return new i.Array(e);
};
i.Array !== Array && (c.alloc = i.pool(c.alloc, i.Array.prototype.subarray));
c.prototype._push = function(e, t, r) {
this.tail = this.tail.next = new a(e, t, r);
this.len += t;
return this;
};
function p(e, t, r) {
t[r] = 255 & e;
}
function h(e, t) {
this.len = e;
this.next = undefined;
this.val = t;
}
h.prototype = Object.create(a.prototype);
h.prototype.fn = function(e, t, r) {
for (;e > 127; ) {
t[r++] = 127 & e | 128;
e >>>= 7;
}
t[r] = e;
};
c.prototype.uint32 = function(e) {
this.len += (this.tail = this.tail.next = new h((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len;
return this;
};
c.prototype.int32 = function(e) {
return e < 0 ? this._push(d, 10, o.fromNumber(e)) : this.uint32(e);
};
c.prototype.sint32 = function(e) {
return this.uint32((e << 1 ^ e >> 31) >>> 0);
};
function d(e, t, r) {
for (;e.hi; ) {
t[r++] = 127 & e.lo | 128;
e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0;
e.hi >>>= 7;
}
for (;e.lo > 127; ) {
t[r++] = 127 & e.lo | 128;
e.lo = e.lo >>> 7;
}
t[r++] = e.lo;
}
c.prototype.uint64 = function(e) {
var t = o.from(e);
return this._push(d, t.length(), t);
};
c.prototype.int64 = c.prototype.uint64;
c.prototype.sint64 = function(e) {
var t = o.from(e).zzEncode();
return this._push(d, t.length(), t);
};
c.prototype.bool = function(e) {
return this._push(p, 1, e ? 1 : 0);
};
function y(e, t, r) {
t[r] = 255 & e;
t[r + 1] = e >>> 8 & 255;
t[r + 2] = e >>> 16 & 255;
t[r + 3] = e >>> 24;
}
c.prototype.fixed32 = function(e) {
return this._push(y, 4, e >>> 0);
};
c.prototype.sfixed32 = c.prototype.fixed32;
c.prototype.fixed64 = function(e) {
var t = o.from(e);
return this._push(y, 4, t.lo)._push(y, 4, t.hi);
};
c.prototype.sfixed64 = c.prototype.fixed64;
c.prototype.float = function(e) {
return this._push(i.float.writeFloatLE, 4, e);
};
c.prototype.double = function(e) {
return this._push(i.float.writeDoubleLE, 8, e);
};
var m = i.Array.prototype.set ? function(e, t, r) {
t.set(e, r);
} : function(e, t, r) {
for (var n = 0; n < e.length; ++n) t[r + n] = e[n];
};
c.prototype.bytes = function(e) {
var t = e.length >>> 0;
if (!t) return this._push(p, 1, 0);
if (i.isString(e)) {
var r = c.alloc(t = s.length(e));
s.decode(e, r, 0);
e = r;
}
return this.uint32(t)._push(m, t, e);
};
c.prototype.string = function(e) {
var t = f.length(e);
return t ? this.uint32(t)._push(f.write, t, e) : this._push(p, 1, 0);
};
c.prototype.fork = function() {
this.states = new l(this);
this.head = this.tail = new a(u, 0, 0);
this.len = 0;
return this;
};
c.prototype.reset = function() {
if (this.states) {
this.head = this.states.head;
this.tail = this.states.tail;
this.len = this.states.len;
this.states = this.states.next;
} else {
this.head = this.tail = new a(u, 0, 0);
this.len = 0;
}
return this;
};
c.prototype.ldelim = function() {
var e = this.head, t = this.tail, r = this.len;
this.reset().uint32(r);
if (r) {
this.tail.next = e.next;
this.tail = t;
this.len += r;
}
return this;
};
c.prototype.finish = function() {
for (var e = this.head.next, t = this.constructor.alloc(this.len), r = 0; e; ) {
e.fn(e.val, t, r);
r += e.len;
e = e.next;
}
return t;
};
c._configure = function(e) {
n = e;
};
}, {
39: 39
} ],
43: [ function(e, t, r) {
t.exports = s;
var n = e(42);
(s.prototype = Object.create(n.prototype)).constructor = s;
var i = e(39), o = i.Buffer;
function s() {
n.call(this);
}
s.alloc = function(e) {
return (s.alloc = i._Buffer_allocUnsafe)(e);
};
var f = o && o.prototype instanceof Uint8Array && "set" === o.prototype.set.name ? function(e, t, r) {
t.set(e, r);
} : function(e, t, r) {
if (e.copy) e.copy(t, r, 0, e.length); else for (var n = 0; n < e.length; ) t[r++] = e[n++];
};
s.prototype.bytes = function(e) {
i.isString(e) && (e = i._Buffer_from(e, "base64"));
var t = e.length >>> 0;
this.uint32(t);
t && this._push(f, t, e);
return this;
};
function a(e, t, r) {
e.length < 40 ? i.utf8.write(e, t, r) : t.utf8Write(e, r);
}
s.prototype.string = function(e) {
var t = o.byteLength(e);
this.uint32(t);
t && this._push(a, t, e);
return this;
};
}, {
39: 39,
42: 42
} ]
}, {}, [ 19 ]);
})("object" == typeof window && window || "object" == typeof self && self || this);