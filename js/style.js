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
