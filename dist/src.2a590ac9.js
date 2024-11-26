(function () {function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function b(e){h(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===x(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function h(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}var C={};function D(){return C}function y(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function q(e,t){h(2,arguments);var r=b(e),$=b(t),d=r.getTime()-$.getTime();return d<0?-1:d>0?1:d}function E(e,r){h(2,arguments);var t=b(e),$=b(r);return 12*(t.getFullYear()-$.getFullYear())+(t.getMonth()-$.getMonth())}function F(e,$){return h(2,arguments),b(e).getTime()-b($).getTime()}var z={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},G="trunc";function H(t){return t?z[t]:z[G]}function I(t,e){h(2,arguments);var r,$=b(t),d=b(e),a=q($,d),o=Math.abs(E($,d));if(o<1)r=0;else{1===$.getMonth()&&$.getDate()>27&&$.setDate(30),$.setMonth($.getMonth()-a*o);var i=q($,d)===-a;J(b(t))&&1===o&&1===q(t,d)&&(i=!1),r=a*(o-Number(i))}return 0===r?0:r}function J(e){h(1,arguments);var r=b(e);return K(r).getTime()===L(r).getTime()}function K(e){h(1,arguments);var r=b(e);return r.setHours(23,59,59,999),r}function L(e){h(1,arguments);var r=b(e),t=r.getMonth();return r.setFullYear(r.getFullYear(),t+1,0),r.setHours(23,59,59,999),r}function O(e,r,$){h(2,arguments);var i=F(e,r)/1e3;return H(null==$?void 0:$.roundingMethod)(i)}var P={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Q=function(o,e,t){var n,a=P[o];return n="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=t&&t.addSuffix?t.comparison&&t.comparison>0?"in "+n:n+" ago":n};function v(t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=r.width?String(r.width):t.defaultWidth;return t.formats[e]||t.formats[t.defaultWidth]}}var R={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},S={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},T={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},U={date:v({formats:R,defaultWidth:"full"}),time:v({formats:S,defaultWidth:"full"}),dateTime:v({formats:T,defaultWidth:"full"})};var V={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},W=function(e,t,a,o){return V[e]};function j(t){return function(a,e){var l;if("formatting"===(null!=e&&e.context?String(e.context):"standalone")&&t.formattingValues){var n=t.defaultFormattingWidth||t.defaultWidth,r=null!=e&&e.width?String(e.width):n;l=t.formattingValues[r]||t.formattingValues[n]}else{var u=t.defaultWidth,i=null!=e&&e.width?String(e.width):t.defaultWidth;l=t.values[i]||t.values[u]}return l[t.argumentCallback?t.argumentCallback(a):a]}}var X={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Y={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Z={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},aa={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ba={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ca={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},da=function(n,e){var a=Number(n),r=a%100;if(r>20||r<10)switch(r%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},ea={ordinalNumber:da,era:j({values:X,defaultWidth:"wide"}),quarter:j({values:Y,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:j({values:Z,defaultWidth:"wide"}),day:j({values:aa,defaultWidth:"wide"}),dayPeriod:j({values:ba,defaultWidth:"wide",formattingValues:ca,defaultFormattingWidth:"wide"})};function k(t){return function(r){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=a.width,n=e&&t.matchPatterns[e]||t.matchPatterns[t.defaultMatchWidth],l=r.match(n);if(!l)return null;var u,$=l[0],f=e&&t.parsePatterns[e]||t.parsePatterns[t.defaultParseWidth],i=Array.isArray(f)?ga(f,function(t){return t.test($)}):fa(f,function(t){return t.test($)});return u=t.valueCallback?t.valueCallback(i):i,{value:u=a.valueCallback?a.valueCallback(u):u,rest:r.slice($.length)}}}function fa(t,r){for(var a in t)if(t.hasOwnProperty(a)&&r(t[a]))return a}function ga(t,r){for(var a=0;a<t.length;a++)if(r(t[a]))return a}function ha(a){return function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.match(a.matchPattern);if(!t)return null;var r=t[0],u=e.match(a.parsePattern);if(!u)return null;var n=a.valueCallback?a.valueCallback(u[0]):u[0];return{value:n=l.valueCallback?l.valueCallback(n):n,rest:e.slice(r.length)}}}var ia=/^(\d+)(th|st|nd|rd)?/i,ja=/\d+/i,ka={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},la={any:[/^b/i,/^(a|c)/i]},ma={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},na={any:[/1/i,/2/i,/3/i,/4/i]},oa={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},pa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},qa={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ra={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},sa={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ta={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ua={ordinalNumber:ha({matchPattern:ia,parsePattern:ja,valueCallback:function(a){return parseInt(a,10)}}),era:k({matchPatterns:ka,defaultMatchWidth:"wide",parsePatterns:la,defaultParseWidth:"any"}),quarter:k({matchPatterns:ma,defaultMatchWidth:"wide",parsePatterns:na,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:k({matchPatterns:oa,defaultMatchWidth:"wide",parsePatterns:pa,defaultParseWidth:"any"}),day:k({matchPatterns:qa,defaultMatchWidth:"wide",parsePatterns:ra,defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:sa,defaultMatchWidth:"any",parsePatterns:ta,defaultParseWidth:"any"})};var va={code:"en-US",formatDistance:Q,formatLong:U,formatRelative:W,localize:ea,match:ua,options:{weekStartsOn:0,firstWeekContainsDate:1}};function wa($){return A({},$)}function A(r,e){if(null==r)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r}var B=1440,xa=2520,w=43200,ya=86400;function za(e,r,s){var a,t;h(2,arguments);var i=D(),n=null!==(a=null!==(t=null==s?void 0:s.locale)&&void 0!==t?t:i.locale)&&void 0!==a?a:va;if(!n.formatDistance)throw new RangeError("locale must contain formatDistance property");var $=q(e,r);if(isNaN($))throw new RangeError("Invalid time value");var o,N,l=A(wa(s),{addSuffix:Boolean(null==s?void 0:s.addSuffix),comparison:$});$>0?(o=b(r),N=b(e)):(o=b(e),N=b(r));var c,f=O(N,o),u=(y(N)-y(o))/1e3,g=Math.round((f-u)/60);if(g<2)return null!=s&&s.includeSeconds?f<5?n.formatDistance("lessThanXSeconds",5,l):f<10?n.formatDistance("lessThanXSeconds",10,l):f<20?n.formatDistance("lessThanXSeconds",20,l):f<40?n.formatDistance("halfAMinute",0,l):f<60?n.formatDistance("lessThanXMinutes",1,l):n.formatDistance("xMinutes",1,l):0===g?n.formatDistance("lessThanXMinutes",1,l):n.formatDistance("xMinutes",g,l);if(g<45)return n.formatDistance("xMinutes",g,l);if(g<90)return n.formatDistance("aboutXHours",1,l);if(g<B){var d=Math.round(g/60);return n.formatDistance("aboutXHours",d,l)}if(g<xa)return n.formatDistance("xDays",1,l);if(g<w){var m=Math.round(g/B);return n.formatDistance("xDays",m,l)}if(g<ya)return c=Math.round(g/w),n.formatDistance("aboutXMonths",c,l);if((c=I(N,o))<12){var M=Math.round(g/w);return n.formatDistance("xMonths",M,l)}var p=c%12,_=Math.floor(c/12);return p<3?n.formatDistance("aboutXYears",_,l):p<9?n.formatDistance("overXYears",_,l):n.formatDistance("almostXYears",_+1,l)}function Aa(e,r){return h(1,arguments),za(e,Date.now(),r)}function Ba(e,t){return Ba=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ba(e,t)}function Ca(t){return Ca=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ca(t)}var Da="2003-11-07 10:00:00";document.body.textContent="".concat(Aa(new Date(Da))," ago");})();