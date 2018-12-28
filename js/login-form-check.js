$(document).ready(function(){

	var loginFormCheck = (function(){

		var email = 'mail@mail.com';
		var password = '123';

		// Переменные модуля
		var _form = $('#login-form');
		var _loginEmail = $('#login-email');
		var _loginPassword = $('#login-password');
		var _emailErrorEmpty = $('<div id="login-email-empty" class="notify notify--error mb-20 notify-hide">Введите email</div>');
		var _emailErrorWrong = $('<div id="login-email-wrong" class="notify notify--error mb-20 notify-hide">Неверный формат email</div>');
		var _passwordErrorEmpty = $('<div id="login-password-empty" class="notify notify--error mb-20 notify-hide">Введите пароль</div>');
		var _passwordErrorWrong = $('<div id="login-password-wrong" class="notify no-paddings notify-hide"><div class="notify no-radius-bottom notify--error">Неверный email или пароль</div><div class="notify no-radius-top"><p>Введите верные данные для входа или воспользуйтесь<a href="#!">восстановлением пароля </a>, чтобы войти на сайт.</p></div></div>');

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
    				_passwordErrorEmpty.prependTo('#login-form').fadeIn(1000);
    				event.preventDefault();
    			} else if (_loginPassword.val().trim() != password || _loginEmail.val().trim() != email){
    				_passwordErrorWrong.prependTo('#login-form').fadeIn(1000);
    				event.preventDefault();
    			} else {
    				console.log('correct');
    			}
    		} else if (_loginEmail.val().trim() == '') {
    			_emailErrorEmpty.prependTo('#login-form').fadeIn(1000);
    			event.preventDefault();
    		}else {
    			_emailErrorWrong.prependTo('#login-form').fadeIn(1000);
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