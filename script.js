document.addEventListener('DOMContentLoaded', function () {
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
});
