//tabs
(function($){
$.fn.tabs = function(){
	var $tabHeader = $('.tabHeaders li a');

	$tabHeader.click(function(){
		var	$activeHeader = $(this).parent().parent().find('.activeHeader'),
			$tab = $(this).closest('.tabs').find('.tab'),
			$activeTab = $(this).closest('.tabs').find('.activeTab'),
			$pos = $(this).parent().index();

			if ($(this).hasClass('activeHeader')) {
				return false;
			}

			$activeHeader.removeClass('activeHeader');
			$(this).addClass('activeHeader');

			$activeTab.hide().removeClass('activeTab');
			$tab.eq($pos).fadeIn().addClass('activeTab');
			return false;
	});

	
};
})(jQuery);


//gallery-switch
(function($){
$.fn.gallerySwitch = function(){
	var $galleryMini = $('.galleryMini'),
		$showList = $('.showList'),
		$showBlocks = $('.showBlocks'),
		$galleryList = $('.galleryList');

	$showList.click(function(){
		$galleryMini.hide();
		$(this).addClass('active');
		$showBlocks.removeClass('active')
		$galleryMini.addClass('galleryList');
		$galleryMini.fadeIn();
	});

	$showBlocks.click(function(){
		$galleryList.hide();
		$(this).addClass('active');
		$showList.removeClass('active');
		$galleryMini.removeClass('galleryList');
		$galleryMini.fadeIn();
	})

};
})(jQuery);

//menu-sliding
(function($){
$.fn.menuSlide = function(){
    $(this).each(function() {
	    var $root = $(this),
		    $list = $('ul', $root),
		    $link = $('ul li a', $root),
		    $activeSpan = $('.activeHeader span', $root),
		    $spans = $('ul a span', $root),
		    $slide = $('ul .slide', $root),
		    linkWidth = $link.width(),
		    leftPos;

	    $activeSpan.show();
	    $slide.css({
		    'width': linkWidth
	    });

	    $link.click(function(){
		    var $activeLink = $(this),
			    $f = $(this).parent(),
			    $span = $(this).find('span'),
			    leftPos = $activeLink.parent().position();
			
		    //animation for groups page
		    if ($span.length) {
			    $spans.hide();

			    $slide.animate({
				    left: leftPos.left,
				    width: $activeLink.width() - 2 // -2px slide borders
			    }, 300, function(){
				    $span.show();
			    });
			    return false;
		    };
		
		    $slide.animate({
			    left: leftPos.left,
			    width: $activeLink.width() + 1 // +1px for webkit browsers
		    }, 300);
	    });
    });
};
})(jQuery);

//paddingBot
(function($){
$.fn.paddingBot = function(){
	var $root = $(this),
		leftPad = $('.leftPlayers').height(),
		rightPad = $('.rightPlayers').height(),
		pad;

	if (leftPad > rightPad) {
		pad = leftPad;
	} else {
		pad = rightPad;
	}
	$root.css({
		'padding-bottom':pad + 35
	})
};
})(jQuery);

//teams-dropdown
(function($){
$.fn.teamsDropdown = function(){
	var $root = $(this),
		$header = $('.teamDropdownHeader', $root),
		$list = $('.listWrap', $root);

	$list.hide();
	$list.css('visibility', 'visible');

	$header.click(function(){
		if ($(this).hasClass('activeList')) {
			$list.hide();
			$(this).removeClass('activeList');
			$list.removeClass('active');
			return false;
		};
		$(this).addClass('activeList')
		$list.fadeIn('fast');
		$list.addClass('active');

	});
	$root.mouseleave(function(){
		$list.hide();
		$list.removeClass('active');
		$header.removeClass('activeList');
	});
};
})(jQuery);

//registration
(function($){
$.fn.registration = function(){
	var  $root = $(this),
		 $regLink = $('.register', $root),
		 $enterLink = $('.enter', $root),
		 $regBlock = $('.regContainer'),
		 $enterBlock = $('.enterContainer'),
		 $closeButton = $('.closePopup'),
		 $wrap = $('.popupwrap'),
		 $popUpcontainer = $('.popUpcontainer'),
		 docHeight = $('body').outerHeight();

	$regLink.click(function(){
		$regBlock.show();

		$wrap.css({
			'height': docHeight
		});
	});
	$enterLink.click(function(){
		$enterBlock.show();

		$wrap.css({
			'height': docHeight
		});
	});
	$closeButton.click(function(){
		$popUpcontainer.hide();

	});
	$wrap.click(function(){
		$popUpcontainer.hide();

	});
	$(document).keyup(function(e) {
  		if (e.keyCode == 27) { 
  			$popUpcontainer.hide();
  		};
	});
};
})(jQuery);

//football banner
(function($){
$.fn.footballBanner = function(){
	var $root = $(this),
		$link = $('.footballLink', $root);

	$root.hover(function(){
		$root.stop();
		$root.animate({
			width: 134
		}, 200)
		$link.addClass('active')
	});
	$root.mouseleave(function(){
		$root.animate({
			width: 29
		}, 200, function(){
			$link.removeClass('active')
		});
	$root.stop();
	});
};
})(jQuery);

//matches tile
(function ($) {
$.fn.matchTile = function(){
    $(this).each(function() {
	    var $root = $(this),
		    $tabHeader = $('.tabHeaders li a', $root),
            $tab = $('.tab', $root);

	    $tabHeader.click(function(){
		    matchTile($(this));
		    return false;
	    });

        if ($root.is(":visible"))
            matchTile($tabHeader.filter('.activeHeader'));

	    function matchTile($link) {
		    var	$pos = $link.parent().index();

		    if ($link.hasClass('masonryInit')) {
			    return;
		    }

		    $tab.eq($pos).find('.matchTile').masonry( { itemSelector: '.matchBlock' } );
		    $link.addClass('masonryInit');
	    }
    });
};
})(jQuery);



// results tab
(function ($) {
    $.fn.resultsTab = function () {
        $(this).each(function () {
            var $root = $(this),
		    $tabHeader = $('.infoTabHeaders li a', $root),
            $tab = $('.tableWrap', $root);

            $tabHeader.click(function () {
		        var	$this = $(this),
			        $pos = $this.parent().index();

			    if ($this.hasClass('activeHeader'))
				    return false;

			    $tabHeader.removeClass('activeHeader');
			    $tab.hide();

			    $this.addClass('activeHeader');
			    $tab.eq($pos).fadeIn();

			    return false;
            });
        });
    };
})(jQuery);


$(function(){
	$('.gallery').gallerySwitch();
	$('.tabs').tabs();
	$('.menuSlide').menuSlide();
	$('.historyMatch').paddingBot();
	$('.teamDropdown').teamsDropdown();
	$('.registerArea').registration();
	$('.footballBanner').footballBanner();
	$('.tournamentBlock').matchTile();
    $('.matchesBlock').resultsTab();
});