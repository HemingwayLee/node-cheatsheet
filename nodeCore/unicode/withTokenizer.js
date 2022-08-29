const Kuroshiro = require("kuroshiro");
const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");
var kuromoji = require("kuromoji");
const punycode = require('punycode');

const kuroshiro = new Kuroshiro();

(async () => {
  await kuroshiro.init(new KuromojiAnalyzer({dictPath: './dict/'}));
})();

var regexSymbolWithCombiningMarks = /(\P{Mark})(\p{Mark}+)/gu;
function countSymbolsIgnoringCombiningMarks(string) {
  var stripped = string.replace(regexSymbolWithCombiningMarks, function($0, symbol, combiningMarks) {
	  console.log(`${symbol}, ${combiningMarks}`)
    return symbol;
  });
  
  return stripped;
}



kuromoji.builder({ dicPath: "./dict/" }).build(function (err, tokenizer) {
  var pathOri = tokenizer.tokenize(
    "禰󠄀豆子に襲われかけた炭治郎を救ったのは冨岡義勇と名乗る剣士だった。"
  );
  console.log(pathOri.map(x => x.surface_form));  
  
  var pathNew = tokenizer.tokenize(
    countSymbolsIgnoringCombiningMarks("禰󠄀豆子に襲われかけた炭治郎を救ったのは冨岡義勇と名乗る剣士だった。")
  );
  console.log(pathNew.map(x => x.surface_form)); 
  
  (async () => {
    const seeOld = pathOri.map(async t => {
      const res = await kuroshiro.convert(t.surface_form, {
        mode: "furigana", 
        to: "hiragana"
      })
      return res;
    });

    console.log(await Promise.all(seeOld));

    const seeNew = pathNew.map(async t => {
      const res = await kuroshiro.convert(t.surface_form, {
        mode: "furigana", 
        to: "hiragana"
      })
      return res;
    });

    console.log(await Promise.all(seeNew));
  })();

});
