$(document).ready(function(){

	var registrationFormCheck = (function(){

		var email = 'mail@mail.com';
		// var password = '123';

		// Переменные модуля
		var _form = $('#registration-form');
		var _registrationEmail = $('#registration-email');
		var _registrationPassword = $('#registration-password');
		var _emailErrorEmpty = $('#registration-email-empty');
		var _emailErrorWrong = $('#registration-email-wrong');
		var _passwordErrorEmpty = $('#registration-password-empty');
		var _emailErrorExist = $('#registration-email-exist');

		// Метод инициализации (запуска) модуля
		var init = function(){
			_setUpListeners(); // Запускаем прослушку событий
		}

		// Метод прослушки событий
		// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
		var _setUpListeners = function(){
			_form.on('submit', function(event){
				_removeError();
				_formLogin(event);
			});
		}
		// Убираем уведомления об ошибках
		var _removeError = function(){
			_emailErrorEmpty.fadeOut(0);
			_emailErrorWrong.fadeOut(0);
			_passwordErrorEmpty.fadeOut(0);
			_emailErrorExist.fadeOut(0);
		}
		// Проверяем вводимые данные
		var _formLogin = function (event) {
    		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    		if(pattern.test(_registrationEmail.val())) {
    			if (_registrationEmail.val().trim() == email) {
    				_emailErrorExist.fadeIn(1000);
    				event.preventDefault();
    			} else if (_registrationPassword.val().trim() == '') {
    				_passwordErrorEmpty.fadeIn(1000);
    				event.preventDefault();
    			} else {
    				console.log('correct');
    			}
    		} else if (_registrationEmail.val().trim() == '') {
    			_emailErrorEmpty.fadeIn(1000);
    			event.preventDefault();
    		}else {
    			_emailErrorWrong.fadeIn(1000);
    			event.preventDefault();
    		}
		}

		// Возвращаем публичные медоты, которые будут доступны снаружи
		return {
			init
		}
	
	}());
  
	// Запускаем модуль
	registrationFormCheck.init();

});