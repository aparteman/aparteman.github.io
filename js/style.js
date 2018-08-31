 $('#datepicker1').datepicker({
 	uiLibrary: 'bootstrap4'
 });

 $('#datepicker2').datepicker({
 	uiLibrary: 'bootstrap4'
 });

 /*About Video Embeed*/
 var players = document.querySelectorAll('.youtube-player')

 var loadPlayer = function (event) {
 	var target = event.currentTarget
 	var iframe = document.createElement('iframe')

 	iframe.height = target.clientHeight
 	iframe.width = target.clientWidth
 	iframe.src = 'https://www.youtube.com/embed/' + target.dataset.videoId + '?autoplay=1'
 	iframe.setAttribute('frameborder', 0)

 	target.classList.remove('pristine')

 	if (target.children.length) {
 		target.replaceChild(iframe, target.firstElementChild)
 	} else {
 		target.appendChild(iframe)
 	}
 }

 var config = {
 	once: true
 }

 Array.from(players).forEach(function (player) {
 	player.addEventListener('click', loadPlayer, config)
 });

 /*Keep dropdown signin*/
 $('#myDropdown .dropdown-menu').on({
 	"click": function (e) {
 		e.stopPropagation();
 	}
 });

 $(document).ready(function () {

 	$('ul.tabs li').click(function () {
 		var tab_id = $(this).attr('data-tab');

 		$('ul.tabs li').removeClass('current');
 		$('.tab-content').removeClass('current');

 		$(this).addClass('current');
 		$("#" + tab_id).addClass('current');
 	})

 });
 $('#register').click(function () {
 	$('.dropdown-custom').css('min-width', '40rem');
 });

 $('#login').click(function () {
 	$('.dropdown-custom').css('min-width', '22rem');
 });

 /*==========Price Range========*/

 /*==========Detail Page========*/
 /*========== Dashboard ===========*/
 $(document).ready(function () {
 	document.getElementById('pro-image').addEventListener('change', readImage, false);

 	$(".preview-images-zone").sortable();

 	$(document).on('click', '.image-cancel', function () {
 		let no = $(this).data('no');
 		$(".preview-image.preview-show-" + no).remove();
 	});
 });



 var num = 4;

 function readImage() {
 	if (window.File && window.FileList && window.FileReader) {
 		var files = event.target.files; //FileList object
 		var output = $(".preview-images-zone");

 		for (let i = 0; i < files.length; i++) {
 			var file = files[i];
 			if (!file.type.match('image')) continue;

 			var picReader = new FileReader();

 			picReader.addEventListener('load', function (event) {
 				var picFile = event.target;
 				var html = '<div class="preview-image preview-show-' + num + '">' +
 					'<div class="image-cancel" data-no="' + num + '">x</div>' +
 					'<div class="image-zone"><img id="pro-img-' + num + '" src="' + picFile.result + '"></div>' +
 					'<div class="tools-edit-image"><a href="javascript:void(0)" data-no="' + num + '" class="btn btn-light btn-edit-image">edit</a></div>' +
 					'</div>';

 				output.append(html);
 				num = num + 1;
 			});

 			picReader.readAsDataURL(file);
 		}
 		$("#pro-image").val('');
 	} else {
 		console.log('Browser not support');
 	}
 }