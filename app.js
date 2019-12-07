var obj = {
  adjTimeplace: [
    'Mirko ',
    'Toma ',
    'Mama ',
		'Baka kod sebe doma ',
    'Tata ',
		'Mate '
  ],
  timeplace: [
    'pere',
    'usisava',
    'posprema',
    'pomaže tati oprati',
		'pomaže mami pospremiti',
		'slaže'
  ],
  adjective: [
    ' suđe',
    ' igračke',
    ' sve tepihe',
		' samog sebe',
		' cijeli stan',
		' svoju sobu'
		],
	noun: [
		' i za nagradu',
		' i za kaznu',
		' i pritom veselo',
		' i punih 30 minuta',
		' i dva puta',
		' i bez riječi'
	],
	noun2: [
		' pijeva',
		' pojede slatkiš',
		' obriše prašinu',
		' pojede nešto zeleno',
		' mami izmasira ramena',
		' da po dve puse braći'
		],
	verb: [
		' i posloži',
		' i pročita',
		' i odpijeva',
		' i pogleda',
		' i posudi svakome u obitelji',
		' i nacrta'
	],
	abstract:[
		' svoju odjeću.',
		' priču.',
		' nešto ljepo.',
		' svoj najdraži predmet.',
		' nešto plavo.',
		' najdražu pijesmu.'
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