$(function(){
   var $menu = $('#sections-menu'),
   $sectionMenu = $('.sections-button');

   $sectionMenu.click(function() {
      $sectionMenu.toggleClass('active');
      $menu.toggleClass('active');
      return false;
   });
});