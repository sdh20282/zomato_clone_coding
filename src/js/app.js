const showDropDownMenu = (button, list) => {
    const rotate = button.querySelector('button > i');

    rotate.classList.toggle('arrowRotate0');
    rotate.classList.toggle('arrowRotate180');
    list.classList.toggle('show');
}

const inputInvalid = (form, label) => {
    form.style.border = '1px solid crimson';
    label.style.color = 'crimson';
}

const inputValid = (form, label) => {
    form.style.border = '1px solid lightseagreen';
    label.style.color = 'lightseagreen';
}


const initHeaderBoxLocationButton = () => {
    const header = document.querySelector('.pageHeader');
    const container = header.querySelector('.headerBox');
    const button = container.querySelector('.headerBoxLocationButton');
    const buttonSet = container.querySelector('.headerBoxLocationSetButton');
    const input = container.querySelector('#locationInput');
    const rotate = button.querySelector('button > i');

    button.addEventListener('click', (e) => {
        e.preventDefault();

        showDropDownMenu(button, buttonSet);
    });

    input.addEventListener('focus', (e) => {
        rotate.classList.remove('arrowRotate0');
        rotate.classList.add('arrowRotate180');
        buttonSet.classList.add('show');
    });

    input.addEventListener('focusout', () => {
        rotate.classList.add('arrowRotate0');
        rotate.classList.remove('arrowRotate180');
        buttonSet.classList.remove('show');
    });
}

const initSection02ListButton = () => {
    const buttons = document.querySelectorAll('.sectionListButton');
    const folds = document.querySelectorAll('.listItemFold');
    const li = document.querySelector('.section02ListItem');

    buttons[0].addEventListener('click', () => {
        li.style.display = 'none';
        folds.forEach(e => e.classList.toggle('show'));
    });

    buttons[1].addEventListener('click', () => {
        li.style.display = 'block';
        folds.forEach(e => e.classList.toggle('show'));
    });
}

const initArticle01Form = () => {
    const form = document.querySelector('.article01 .articleForm');
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
            inputInvalid(emailForm, emailLabel);
            checklabel.style.display = 'block';
            return;
        }

        console.log(emailInput.validity);

        if (emailInput.validity.patternMismatch) {
            inputInvalid(emailForm, emailLabel);
            checklabel.style.display = 'block';
        } else {
            inputValid(emailForm, emailLabel);
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
            inputValid(emailForm, emailLabel);
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
    const phoneInvalid = () => {
        phoneForm.style.border = '1px solid crimson';
        phoneLabel.style.display = 'block';
    }

    phoneInput.addEventListener('input', () => {
        if (!phoneInput.value) {
            phoneInvalid();
            return;
        }

        if (phoneInput.validity.patternMismatch) {
            phoneInvalid();
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
            phoneInvalid();
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
        showDropDownMenu(phoneFirstButton, phoneFirstList);
    });

    phoneFirstButtons.forEach(el => {
        el.addEventListener('click', () => {
            phoneFirstButton.querySelector('button span').textContent = el.textContent;
            showDropDownMenu(phoneFirstButton, phoneFirstList);
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

const initAppear = () => {
    const links = document.querySelectorAll('.applink > a');
    const images = document.querySelectorAll('.section01ListItemBox > img');
    const images2 = document.querySelectorAll('.list01Box > img');

    document.addEventListener('scroll', () => {
        links.forEach(e => {
            const now = e.getBoundingClientRect();

            if (now.y - window.innerHeight < 0 && now.bottom > 0) {
                if (window.getComputedStyle(e).animation.startsWith('none')) {
                    e.style.animation = 'appear 10s';
                }
            }
        });

        images.forEach(e => {
            const now = e.getBoundingClientRect();

            if (now.y - window.innerHeight < 0 && now.bottom > 0) {
                if (window.getComputedStyle(e).animation.startsWith('none')) {
                    e.style.animation = 'appear 10s';
                }
            }
        });

        images2.forEach(e => {
            const now = e.getBoundingClientRect();

            if (now.y - window.innerHeight < 0 && now.bottom > 0) {
                if (window.getComputedStyle(e).animation.startsWith('none')) {
                    e.style.animation = 'appear 0.5s';
                }
            }
        });
    });

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
}

const initSignupArticle = () => {
    const wrapper = document.querySelector('.pageHeader .signupWrapper');
    const article = wrapper.querySelector('.articleSignup');
    const form = article.querySelector('.articleSignup .articleForm');

    const emailForm = form.querySelector('.emailField');
    const emailInput = emailForm.querySelector('#signupEmail');
    const emailLabel = emailForm.querySelector('.signupEmail');
    const emailCheck = emailForm.querySelector('fieldset > p');
    let checkEmail = false;

    const nameForm = form.querySelector('.nameField');
    const nameInput = nameForm.querySelector('#signupName');
    const nameLabel = nameForm.querySelector('.signupName');
    const nameCheck = nameForm.querySelector('fieldset > p');
    let checkName = false;

    wrapper.addEventListener('click', () => {
        wrapper.style.display = 'none';
        window.onscroll = () => { }
    });

    article.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    article.querySelector('.closeButton').addEventListener('click', () => {
        wrapper.style.display = 'none';
        window.onscroll = () => { }
    });

    emailInput.addEventListener('input', () => {
        if (!emailInput.value) {
            inputInvalid(emailForm, emailLabel);
            emailCheck.style.display = 'block';
            return;
        }

        if (emailInput.validity.patternMismatch) {
            inputInvalid(emailForm, emailLabel);
            emailCheck.style.display = 'block';
        } else {
            inputValid(emailForm, emailLabel);
            emailCheck.style.display = 'none';
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
            inputValid(emailForm, emailLabel);
        }

        if (emailInput.value && !emailInput.validity.patternMismatch) {
            inputValid(emailForm, emailLabel);
        }
    });

    emailInput.addEventListener('focusout', () => {
        if (!emailInput.value) {
            emailForm.style.border = '1px solid crimson';
            emailLabel.style.color = '#ccc';
            emailCheck.style.display = 'block';

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

    nameInput.addEventListener('input', () => {
        if (!nameInput.value) {
            inputInvalid(nameForm, nameLabel);
            nameCheck.style.display = 'block';
            return;
        }

        if (nameInput.validity.patternMismatch) {
            inputInvalid(nameForm, nameLabel);
            nameCheck.style.display = 'block';
        } else {
            inputValid(nameForm, nameLabel);
            nameCheck.style.display = 'none';
        }
    });

    nameInput.addEventListener('focus', (e) => {
        if (!e.currentTarget.value) {
            if (checkName) {
                nameLabel.style.color = 'crimson';
            }

            nameLabel.classList.add('labelMove');
        }

        if (!checkName) {
            checkName = true;
            inputValid(nameForm, nameLabel);
        }

        if (nameInput.value && !nameInput.validity.patternMismatch) {
            inputValid(nameForm, nameLabel);
        }
    });

    nameInput.addEventListener('focusout', () => {
        if (!nameInput.value) {
            nameForm.style.border = '1px solid crimson';
            nameLabel.style.color = '#ccc';
            nameCheck.style.display = 'block';

            nameLabel.classList.add('labelBack');
            setTimeout(() => {
                nameLabel.classList.remove('labelMove');
                nameLabel.classList.remove('labelBack');
            }, 200);
        }

        if (nameInput.value && !nameInput.validity.patternMismatch) {
            nameForm.style.border = '1px solid #ccc';
            nameLabel.style.color = '#ccc';
        }
    });

    form.querySelector('.buttonCreateAccount').addEventListener('click', (e) => {
        e.preventDefault();
    });
}

const initLoginArticle = () => {
    const wrapper = document.querySelector('.pageHeader .loginWrapper');
    const article = wrapper.querySelector('.articleLogin');
    const form = article.querySelector('article > form');
    const loginField = form.querySelector('.loginFieldSetPhone');

    const phoneSelect = loginField.querySelector('.selectPhone');
    const phoneList = loginField.querySelector('.countryList');

    const phoneInput = loginField.querySelector('#articleLoginPhone');

    wrapper.addEventListener('click', () => {
        wrapper.style.display = 'none';
        window.onscroll = () => { }
    });

    article.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    article.querySelector('.closeButton').addEventListener('click', () => {
        wrapper.style.display = 'none';
        window.onscroll = () => { }
    });

    form.querySelector('.buttonSendOneTimePassword').addEventListener('click', (e) => {
        e.preventDefault();
    });

    phoneSelect.addEventListener('click', (e) => {
        e.preventDefault();
        showDropDownMenu(phoneSelect, phoneList);
    });

    phoneList.querySelectorAll('button').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            showDropDownMenu(phoneSelect, phoneList);

            phoneSelect.querySelector('img').setAttribute('src', element.querySelector('img').src);
            phoneSelect.querySelector('span').textContent = element.querySelectorAll('span')[1].textContent;
        });
    });

    phoneInput.addEventListener('focus', (e) => {
        loginField.style.border = '1px solid lightseagreen';
    });

    phoneInput.addEventListener('focusout', (e) => {
        loginField.style.border = '1px solid #ccc';
    });
}

const initNavBar = () => {
    const header = document.querySelector('.pageHeader');
    const signupButton = header.querySelectorAll('.pageHeader > .headerNav > .headerNavList > li')[3].querySelector('button');
    const signupField = header.querySelector('.signupWrapper');

    const loginButton = header.querySelectorAll('.pageHeader > .headerNav > .headerNavList > li')[2].querySelector('button');
    const loginField = header.querySelector('.loginWrapper');

    signupButton.addEventListener('click', () => {
        signupField.style.display = 'block';
        window.onscroll = () => {
            window.scrollTo(0, 0);
        }
    });

    loginButton.addEventListener('click', () => {
        loginField.style.display = 'block';
        window.onscroll = () => {
            window.scrollTo(0, 0);
        }
    });
}

const init = () => {
    initHeaderBoxLocationButton();
    initSection02ListButton();
    initArticle01Form();
    initLanguage();
    initCountry();
    initPopular();
    initAppear();
    initSignupArticle();
    initLoginArticle();
    initNavBar();
}

window.onload = () => {
    init();
}