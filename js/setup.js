'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SUR_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb (241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var usernameInput = setup.querySelector('.setup-user-name');
var setupForm = setup.querySelector('.setup-wizard-form');
var submitButton = setupForm.querySelector('.setup-submit');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizarFireball = document.querySelector('.setup-fireball-wrap');

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var submitForm = function () {
  setupForm.submit();
};

var wizardCoatColorChange = function () {
  var currentColor = getRandomColor(COAT_COLORS);
  wizardCoat.style.fill = currentColor;
  document.querySelector('input[name=coat-color]').value = currentColor;
};

var wizardEyesColorChange = function () {
  var currentColor = getRandomColor(EYES_COLORS);
  wizardEyes.style.fill = currentColor;
  document.querySelector('input[name=eyes-color]').value = currentColor;
};

var wizardFireballColorChange = function () {
  var currentColor = getRandomColor(FIREBALL_COLORS);
  wizarFireball.style.backgroundColor = currentColor;
  document.querySelector('input[name=fireball-color]').value = currentColor;
};

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    if (usernameInput != document.activeElement) {
      closePopup();
    }
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

submitButton.addEventListener('click', function () {
  submitForm();
});

submitButton.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    submitForm();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoatColorChange();
});

wizardEyes.addEventListener('click', function () {
  wizardEyesColorChange();
});

wizarFireball.addEventListener('click', function () {
  wizardFireballColorChange();
});
