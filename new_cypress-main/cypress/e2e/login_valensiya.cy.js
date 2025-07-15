describe('Форма авторизации', function () {

     it('Валидная авторизация', function () {
        cy.visit('https://login.qa.studio/');             //Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru');       //Вводим логин
        cy.get('#pass').type('iLoveqastudio1');           //Вводим пароль
        cy.get('#loginButton').click();                   //Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');     //Проверка текста после авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');       //Проверка крестика
    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');   //Зашли на сайт
        cy.get('#forgotEmailButton').click();   //Нажать забыли пароль
        cy.get('#mailForgot').type('d.davydov7@mail.ru'); // Ввели эмейл
        cy.get('#restoreEmailButton').click();  //Нажать отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');   //Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Проверка крестика
    })

    it('Не валидный пароль', function () {
        cy.visit('https://login.qa.studio/');             //Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru');       //Вводим логин
        cy.get('#pass').type('iLoveqastudio17');           //Вводим неверный пароль
        cy.get('#loginButton').click();                   //Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');     //Проверка текста после авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');       //Проверка крестика
    })

    it('Не валидный логин', function () {
        cy.visit('https://login.qa.studio/');             //Зашли на сайт
        cy.get('#mail').type('german@dolnikovv.ru');       //Вводим неверный логин
        cy.get('#pass').type('iLoveqastudio1');           //Вводим пароль
        cy.get('#loginButton').click();                   //Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');     //Проверка текста после авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');       //Проверка крестика
    })

    it('Не валидный логин без @', function () {
        cy.visit('https://login.qa.studio/');             //Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru');       //Вводим логин без @
        cy.get('#pass').type('iLoveqastudio1');           //Вводим пароль
        cy.get('#loginButton').click();                   //Нажать войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');     //Проверка текста после авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');       //Проверка крестика
    })

    it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');             //Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru');       //Вводим логин
        cy.get('#pass').type('iLoveqastudio1');           //Вводим пароль
        cy.get('#loginButton').click();                   //Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');     //Проверка текста после авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');       //Проверка крестика
    })

 });