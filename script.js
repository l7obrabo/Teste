document.addEventListener('DOMContentLoaded', function () {
	// ==========================
	// Imagens locais (legado)
	// - Mantém compatibilidade com elementos que usam data-local
	// ==========================
	var images = document.querySelectorAll('img[data-local]');
	images.forEach(function (img) {
		var localSrc = img.getAttribute('data-local');
		if (!localSrc) return;

		var testImage = new Image();
		testImage.onload = function () {
			img.src = localSrc;
		};
		testImage.onerror = function () {
			// Mantém o placeholder se a imagem local não existir
		};
		testImage.src = localSrc;
	});

	// ==========================
	// Cadastro (tela inicial)
	// - Captura os dados do formulário
	// - Exibe no console (simulando envio)
	// - Alterna para o conteúdo do site
	// ==========================
	var form = document.getElementById('register-form');
	var registerScreen = document.getElementById('register-screen');
	var siteContent = document.getElementById('site-content');

	if (form && registerScreen && siteContent) {
		form.addEventListener('submit', function (event) {
			event.preventDefault();

			// Coleta dos campos
			var nameInput = document.getElementById('name');
			var emailInput = document.getElementById('email');
			var passwordInput = document.getElementById('password');

			var payload = {
				nome: nameInput ? nameInput.value.trim() : '',
				email: emailInput ? emailInput.value.trim() : '',
				senha: passwordInput ? passwordInput.value : ''
			};

			// Log no console (simulando envio ao servidor)
			console.log('[Cadastro] Dados enviados:', payload);

			// (Opcional) Persistir localmente para depuração rápida
			try {
				localStorage.setItem('ge:cadastro', JSON.stringify(payload));
			} catch (err) {
				// Ignora falhas de armazenamento
			}

			// Alterna a visibilidade das telas
			registerScreen.style.display = 'none';
			siteContent.style.display = '';
		});
	}
});
