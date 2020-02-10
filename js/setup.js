'use strict';

document.querySelector('.setup').classList.remove('hidden');

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SUR_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb (241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getWizardFullName = function (names, surnames) {
  var wizardName = Math.floor(Math.random() * names.length);
  var wizardSurname = Math.floor(Math.random() * surnames.length);
  return names[wizardName] + ' ' + surnames[wizardSurname];
};

var getRandomColor = function (colors) {
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

var wizards = [
  {
    name: getWizardFullName(FIRST_NAMES, SUR_NAMES),
    coatColor: getRandomColor(COAT_COLORS),
    eyesColor: getRandomColor(EYES_COLORS)
  },
  {
    name: getWizardFullName(FIRST_NAMES, SUR_NAMES),
    coatColor: getRandomColor(COAT_COLORS),
    eyesColor: getRandomColor(EYES_COLORS)
  },
  {
    name: getWizardFullName(FIRST_NAMES, SUR_NAMES),
    coatColor: getRandomColor(COAT_COLORS),
    eyesColor: getRandomColor(EYES_COLORS)
  },
  {
    name: getWizardFullName(FIRST_NAMES, SUR_NAMES),
    coatColor: getRandomColor(COAT_COLORS),
    eyesColor: getRandomColor(EYES_COLORS)
  }
];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
