$(function() {
	var nav = $('.default-nav');
	nav.find('>li').each(function() {
    var $this = $(this);
    if ($this.find('ul').length) {
        $this.addClass('dropdown');
        $this.find('>a').addClass('dropdown-toggle').append('<b class="caret"></b>');
    }
  });
  nav.find('ul').addClass('dropdown-menu');
  nav.find('.dropdown-menu li').each(function() {
    var $this = $(this);
    if ($this.find('ul').length) {
        $this.addClass('dropdown-submenu');
    }
  });
});