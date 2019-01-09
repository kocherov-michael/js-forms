$(document).ready(function(){

	var registrationFormCheck = (function(){

		var email = 'mail@mail.com';

		// Переменные модуля
		var _form = $('#registration-form');
		var _registrationEmail = $('#registration-email');
		var _registrationPassword = $('#registration-password');
		var _emailErrorEmpty = $('<div class="notify mb-20 notify--error">Введите email</div>');
		var _emailErrorWrong = $('<div class="notify notify--error mb-20 notify-hide">Неверный формат email</div>');
		var _passwordErrorEmpty = $('<div class="notify notify--error mb-20 notify-hide">Введите пароль</div>');
		var _emailErrorExist = $('<div class="notify no-paddings"><div class="notify no-radius-bottom notify--error">Данный email уже занят</div><div class="notify no-radius-top"><p>Используйте другой email чтобы создать новый аккаунт.</p><p> Или воспользуйтесь<a href="#!">восстановлением пароля </a>, чтобы войти на сайт.</p></div></div>');
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

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
    		if (_registrationEmail.val().trim() == '' && _registrationPassword.val().trim() == '') {
    			_passwordErrorEmpty.prependTo('#registration-form').fadeIn(1000);
    			_emailErrorEmpty.prependTo('#registration-form').fadeIn(1000);
    			event.preventDefault();
    		}else if(pattern.test(_registrationEmail.val())) {
    			if (_registrationPassword.val().trim() == '') {
    				_passwordErrorEmpty.prependTo('#registration-form').fadeIn(1000);
    				event.preventDefault();
    			} else if (_registrationEmail.val().trim() == email) {
    				_emailErrorExist.prependTo('#registration-form').fadeIn(1000);
    				event.preventDefault();
    			} else {
    				console.log('correct');
    			}
    		} else if (_registrationPassword.val().trim() == '') {
    			_passwordErrorEmpty.prependTo('#registration-form').fadeIn(1000);
    			_emailErrorWrong.prependTo('#registration-form').fadeIn(1000);
    			event.preventDefault();
    		} else if (_registrationEmail.val().trim() == '') {
    			_emailErrorEmpty.prependTo('#registration-form').fadeIn(1000);
    			event.preventDefault();
    		}else {
    			_emailErrorWrong.prependTo('#registration-form').fadeIn(1000);
    			event.preventDefault();
    		}
    		// Убираем ошибки при клике
    		_registrationEmail.on('focus', _removeError);
    		_registrationPassword.on('focus', _removeError);
		}

		// Возвращаем публичные медоты, которые будут доступны снаружи
		return {
			init
		}
	
	}());
  
	// Запускаем модуль
	registrationFormCheck.init();

});