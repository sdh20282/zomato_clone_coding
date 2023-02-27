const initHeaderBoxLocationButton = () => {
    const button = document.querySelector('.headerBoxLocationButton');
    const buttonSet = document.querySelector('.headerBoxLocationSetButton');

    button.addEventListener('click', () => {
        button.classList.toggle('arrowRotate0');
        button.classList.toggle('arrowRotate180');
        buttonSet.classList.toggle('show');
    });
}

const initSection02ListButton = () => {
    const buttons = document.querySelectorAll('.sectionListButton');
    const folds = document.querySelectorAll('.listItemFold');
    const li = document.querySelector('.section02ListItem');

    buttons[0].addEventListener('click', () => {
        li.style.display = 'none';
        folds.forEach(e => e.style.display = 'block');
    });

    buttons[1].addEventListener('click', () => {
        li.style.display = 'block';
        folds.forEach(e => e.style.display = 'none');
    });
}

const initArticle01Form = () => {
    const form = document.querySelector('.article01Form');
    let checkEmail = false;
    let checkPhone = false;

    const emailradio = form.querySelector('#forEmail');
    const phoneradio = form.querySelector('#forPhone');
    const emailForm = form.querySelector('.article01FormEmail');
    const phoneForm = form.querySelector('.article01FormPhone');

    const emailLabel = form.querySelector('.emalLabel');
    const emailInput = form.querySelector('#emailLabel');
    const phoneInput = form.querySelector('#phoneLabel')
    const shareButton = form.querySelector('form > button');

    const checklabel = emailForm.querySelector('.article01FormEmail > p');
    const phoneLabel = phoneForm.querySelector('.article01FormPhone > p');

    const phoneFirstButton = phoneForm.querySelector('.article01FormPhoneButton');
    const phoneFirstList = phoneForm.querySelector('.article01FormPhoneList');
    const phoneFirstButtons = phoneFirstList.querySelectorAll('.article01FormPhoneList button');

    const arrow = phoneFirstButton.querySelector('button > i');

    phoneForm.addEventListener('click', (e) => {
        e.preventDefault();
    });

    // radio

    emailradio.addEventListener('click', () => {
        checkPhone = false;
        emailForm.classList.add('selected');
        phoneForm.classList.remove('selected');
        phoneForm.style.border = '1px solid #ccc';
        phoneLabel.style.display = 'none';
        phoneInput.value = '';
    });

    phoneradio.addEventListener('click', () => {
        checkEmail = false;
        emailForm.classList.remove('selected');
        emailLabel.classList.remove('labelMove');
        phoneForm.classList.add('selected');
        emailForm.style.border = '1px solid #ccc';
        emailLabel.style.color = '#ccc';
        checklabel.style.display = 'none';
        emailInput.value = '';
    });

    // email

    emailInput.addEventListener('input', () => {
        if (!emailInput.value) {
            emailForm.style.border = '1px solid crimson';
            emailLabel.style.color = 'crimson';
            checklabel.style.display = 'block';
            return;
        }

        if (emailInput.validity.patternMismatch) {
            emailForm.style.border = '1px solid crimson';
            emailLabel.style.color = 'crimson';
            checklabel.style.display = 'block';
        } else {
            emailForm.style.border = '1px solid lightseagreen';
            emailLabel.style.color = 'lightseagreen';
            checklabel.style.display = 'none';
        }
    });

    emailInput.addEventListener('focus', (e) => {
        if (!e.currentTarget.value) {
            if (checkEmail) {
                emailLabel.style.color = 'crimson';
            }

            emailLabel.classList.add('labelMove');
        }

        if (!checkEmail) {
            checkEmail = true;
            emailForm.style.border = '1px solid lightseagreen';
            emailLabel.style.color = 'lightseagreen';
        }

        if (emailInput.value && !emailInput.validity.patternMismatch) {
            emailForm.style.border = '1px solid lightseagreen';
            emailLabel.style.color = 'lightseagreen';
        }
    });

    emailInput.addEventListener('focusout', () => {
        if (!emailInput.value) {
            emailForm.style.border = '1px solid crimson';
            emailLabel.style.color = '#ccc';
            checklabel.style.display = 'block';

            emailLabel.classList.add('labelBack');
            setTimeout(() => {
                emailLabel.classList.remove('labelMove');
                emailLabel.classList.remove('labelBack');
            }, 200);
        }

        if (emailInput.value && !emailInput.validity.patternMismatch) {
            emailForm.style.border = '1px solid #ccc';
            emailLabel.style.color = '#ccc';
        }
    });

    // phone

    phoneInput.addEventListener('input', () => {
        if (!phoneInput.value) {
            phoneForm.style.border = '1px solid crimson';
            phoneLabel.style.display = 'block';
            return;
        }

        if (phoneInput.validity.patternMismatch) {
            phoneForm.style.border = '1px solid crimson';
            phoneLabel.style.display = 'block';
        } else {
            phoneForm.style.border = '1px solid lightseagreen';
            phoneLabel.style.display = 'none';
        }
    });

    phoneInput.addEventListener('focus', (e) => {
        if (!checkPhone) {
            checkPhone = true;
            phoneForm.style.border = '1px solid lightseagreen';
        }

        if (phoneInput.value && !phoneInput.validity.patternMismatch) {
            phoneForm.style.border = '1px solid lightseagreen';
        }
    });

    phoneInput.addEventListener('focusout', () => {
        if (!phoneInput.value) {
            phoneForm.style.border = '1px solid crimson';
            phoneLabel.style.display = 'block';
        }

        if (phoneInput.value && !phoneInput.validity.patternMismatch) {
            phoneForm.style.border = '1px solid #ccc';
        }
    });

    // share

    shareButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (!emailInput.validity.patternMismatch && emailInput.value) {
            emailLabel.classList.add('labelBack');
            emailForm.style.border = '1px solid #ccc';
            emailLabel.style.color = '#ccc';
            checklabel.style.display = 'none';
            checkEmail = false;
            emailInput.value = '';

            setTimeout(() => {
                emailLabel.classList.remove('labelMove');
                emailLabel.classList.remove('labelBack');
            }, 200);
        }

        if (!phoneInput.validity.patternMismatch && phoneInput.value) {
            phoneForm.style.border = '1px solid #ccc';
            phoneLabel.style.display = 'none';
            checkPhone = false;
            phoneInput.value = '';
        }
    });

    // phoneFirst

    phoneFirstButton.addEventListener('click', () => {
        arrow.classList.toggle('arrowRotate0');
        arrow.classList.toggle('arrowRotate180');
        phoneFirstList.classList.toggle('show');

    });

    phoneFirstButtons.forEach(el => {
        el.addEventListener('click', () => {
            phoneFirstButton.querySelector('button span').textContent = el.textContent;
            arrow.classList.remove('arrowRotate180');
            arrow.classList.add('arrowRotate0');
            phoneFirstList.classList.remove('show');
        });
    });
}

const initLanguage = () => {
    const article = document.querySelector('.footer01 > article:nth-child(2)');
    const button = article.querySelector('article > button');
    const list = article.querySelector('.languageList');
    const buttons = list.querySelectorAll('button');
    let selected = list.querySelector('button');

    button.addEventListener('click', (e) => {
        e.stopPropagation();

        list.classList.toggle('show');
        selected.classList.add('buttonSelected');
    });

    list.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    buttons.forEach((el) => {
        el.addEventListener('click', () => {
            button.querySelector('span').textContent = el.textContent;
            list.classList.toggle('show');
            selected.classList.remove('buttonSelected');
            selected = el;
        });
    });

    document.body.addEventListener('click', (e) => {
        list.classList.remove('show');
    });
}

const initCountry = () => {
    const article = document.querySelector('.footer01 > article:nth-child(3)');
    const button = article.querySelector('article > button');
    const list = article.querySelector('.countryList');
    const buttons = list.querySelectorAll('button');
    let selected = list.querySelector('button');

    button.addEventListener('click', (e) => {
        e.stopPropagation();

        list.classList.toggle('showGrid');
        selected.classList.add('buttonSelected');
    });

    list.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    buttons.forEach((el) => {
        el.addEventListener('click', () => {
            button.querySelector('span').textContent = el.textContent;
            button.querySelector('img').setAttribute('src', el.querySelector('img').src);
            list.classList.toggle('showGrid');
            selected.classList.remove('buttonSelected');
            selected = el;
        });
    });

    document.body.addEventListener('click', (e) => {
        list.classList.remove('showGrid');
    })
}

const initPopular = () => {
    const section = document.querySelector('.section03');
    const buttons = section.querySelectorAll('ul > li > button');
    const lists = section.querySelectorAll('ul > li > ul');

    buttons.forEach((e, index) => {
        e.addEventListener('click', e => {
            if (index < 2) {
                lists[index].classList.toggle('show');
            } else {
                lists[index].classList.toggle('showGrid');
            }
            e.currentTarget.classList.toggle('selected');
        });
    });
}

const init = () => {
    initHeaderBoxLocationButton();
    initSection02ListButton();
    initArticle01Form();
    initLanguage();
    initCountry();
    initPopular();
}

window.onload = () => {
    init();
}