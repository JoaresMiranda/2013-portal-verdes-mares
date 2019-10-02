/**
 * PlaceHolder IE - Script para corrigir a n‹o compatibilidade do atributo
 * placeholder do HTML5 no IE
 * 
 * @author : Anderson Andrade <andersonandrade@verdesmares.com.br>
 * @since : 10/12/2012
 */
if ($.browser.msie) {
	var dataPlaceholder = 'text-placeholder';
	$('[placeholder]').each(function() {
		$(this).data(dataPlaceholder, $(this).attr('placeholder'));
		$(this).val($(this).attr('placeholder'));
	});

	$('[placeholder]').focusin(function() {

		var valuePlace = $(this).data(dataPlaceholder);
		var value = $(this).val();

		if (value == valuePlace)
			$(this).val('');
	});

	$('[placeholder]').blur(function() {

		var valuePlace = $(this).data(dataPlaceholder);
		var value = $(this).val();

		if (value == '' || empty(value))
			$(this).val(valuePlace);
	});
}