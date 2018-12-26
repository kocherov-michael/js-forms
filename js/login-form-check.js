$(document).ready(function(){

	var loginFormCheck = (function(){

		var email = 'mail@mail.com';
		var password = '123';

		// Переменные модуля
		var _form = $('#login-form');
		var _loginEmail = $('#login-email');
		var _loginPassword = $('#login-password');
		var _emailErrorEmpty = $('#login-email-empty');
		var _emailErrorWrong = $('#login-email-wrong');
		var _passwordErrorEmpty = $('#login-password-empty');
		var _passwordErrorWrong = $('#login-password-wrong');

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
			_passwordErrorWrong.fadeOut(0);
		}
		// Проверяем правильность email и пароля
		var _formLogin = function (event) {
    		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    		if(pattern.test(_loginEmail.val())){
    			if (_loginPassword.val().trim() == '') {
    				_passwordErrorEmpty.fadeIn(1000);
    				event.preventDefault();
    			} else if (_loginPassword.val().trim() != password || _loginEmail.val().trim() != email){
    				_passwordErrorWrong.fadeIn(1000);
    				event.preventDefault();
    			} else {
    				console.log('correct');
    			}
    		} else if (_loginEmail.val().trim() == '') {
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
	loginFormCheck.init();

});