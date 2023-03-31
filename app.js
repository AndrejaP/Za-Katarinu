var obj = {
  adjTimeplace: [
    'Broccoli ',
    'Kale ',
    'Swiss Chard ',
	'Spinach ',
    'Cauliflower ',
	'Asparagus '
  ],
  timeplace: [
    'with guacamole.',
    'and a salad.',
    'and a salad.',
    'in a smoothie.',
	'in a smoothie.',
	'in a wok.'
  ],
  adjective: [
    '  Lettuce, carrots,',
    ' Avocado, tomato,',
    ' Olives, spring onions,',
    ' Sprouts, onions,',
    ' Rocket, peppers,',
    ' Lettuce, basil,'
	],
noun: [
	' potato salad,',
	' pumpkin, mushrooms,',
	' garlic, chick peas,',
	' beans, ',
	' lentils,',
	' integral rice and peas, '
],
noun2: [
	' apples and strawberries.',
	' pineapple and plums.',
	' pear and blueberries.',
	' orange and pomagranate.',
	' grapes and grapefruit.',
	' sweet potatoes and sauerkraut.'
	],
verb: [
	' For dessert',
	' And finally, ',
	' And if I feel like it,',
	' At the end a little bit of',
	' To finish the meal,',
	' And as a cherry on the cake,'
],
abstract:[
	' oats with blueberries and wallnuts.',
	' a bit of peanut butter.',
	' sex.',
	' yoga.',
	' meditation.',
	' zumba.'
]
}

function randomizeText(part) {
	//I cannot use .part here because it is dynamic value, []can always be used
  var text = obj[part][Math.floor(Math.random() * obj[part].length)];
	//concatinating two strings with a plus. This should work too: `.haiku__${part}`
  document.querySelector('.haiku__' + part).innerHTML = text;
};

function createHaiku() {
  var generateAdjTimeplace = setInterval(function() { randomizeText('adjTimeplace') }, 100);
  setTimeout(function() {
    clearInterval(generateAdjTimeplace);
    var generateTimeplace = setInterval(function() { randomizeText('timeplace') }, 100);
    setTimeout(function() {
      clearInterval(generateTimeplace);
      var generateAdjective = setInterval(function() { randomizeText('adjective') }, 100);
      setTimeout(function() {
        clearInterval(generateAdjective);
				var generateNoun = setInterval(function() { randomizeText('noun') }, 100);
        setTimeout(function() {
          clearInterval(generateNoun);
					var generateNoun2 = setInterval(function() { randomizeText('noun2') }, 100);
          setTimeout(function() {
            clearInterval(generateNoun2);
						var generateVerb = setInterval(function() { randomizeText('verb') }, 100);
            setTimeout(function() {
              clearInterval(generateVerb);
							var generateAbstract = setInterval(function() { randomizeText('abstract') }, 100);
              setTimeout(function() {
                clearInterval(generateAbstract);
							}, 400);
						}, 400);
					}, 400);
				}, 400);
      }, 400);
    }, 400);
  }, 400);
};

createHaiku();
