(function($, window, document) {

    // Listen for the jQuery ready event on the document
    $(function() {

    	/* Common variables */
    	var $body = $('body');
    	var $cart = $('.jq-cart');
		var $cartInner = $('.jq-cart-inner');
		var $cartOverlay = $('.jq-cart .overlay');

    	/* Window Resize Functions */
    	$(window).resize(function() {

    		var windowHeight = $(window).height();
    		var headerHeight = $('.jq-header').height();
    		var footerHeight = $('footer').height();

			/* Cart Product List height */
	    	var $cart = $('.jq-cart'),
	    	$cartInner = $cart.find('.jq-cart-inner'),
	    	$cartHeader = $cart.find('.jq-cart-header'),
	    	$cartFooter = $cart.find('.jq-cart-footer'),
	    	$cartContent = $cart.find('.jq-cart-product-list');
	    	var cartInnerHeight = windowHeight;
	    	var cartHeaderHeight = $cartHeader.outerHeight();
	    	var cartFooterHeight = $cartFooter.outerHeight();
	    	var cartContentHeight = cartInnerHeight - cartHeaderHeight - cartFooterHeight;

	    	$cartContent.height(cartContentHeight);
		});

		$(window).trigger('resize');

		/* Shopping Cart */
		$('.cart-checkout').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);

			$body.addClass('cart-open').css('overflow','hidden');
			$cart.css('visibility','visible');
			$cart.css('opacity','1');
			$cart.fadeIn('fast');
			$cartInner.removeClass('sidebarAnimationExit').addClass('sidebarAnimation');
			$cartOverlay.removeClass('cartOverlayExit').addClass('cartOverlayEnter');
		});

		$('.jq-cart').on('click', '.overlay, .jq-cart-header .icon-close, .jq-add-products', function(event) {
			event.preventDefault();
			$cartInner.removeClass('sidebarAnimation').addClass('sidebarAnimationExit');
			$cartOverlay.removeClass('cartOverlayEnter').addClass('cartOverlayExit');
			$cart.fadeOut();
			$body.removeClass('cart-open').css('overflow','auto');
		});

		$(document).keyup(function(e) {
	        if (e.keyCode == 27) {
	            if ($cartInner.hasClass('sidebarAnimation')) {
	                $cartInner.removeClass('sidebarAnimation').addClass('sidebarAnimationExit');
					$cartOverlay.removeClass('cartOverlayEnter').addClass('cartOverlayExit');
					$cart.fadeOut();
					$body.removeClass('cart-open').css('overflow','auto');
	            }            
	        }
	    });
    });

    $(window).scroll(function () {
	    var sc = $(window).scrollTop()
	    if (sc > 100) {
	        $(".jq-header").addClass("fixed-header")
	    } else {
	        $(".jq-header").removeClass("fixed-header")
	    }
	});

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter