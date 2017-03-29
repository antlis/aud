// Admin
(function() {
    $('.dropdown-toggle').dropdown();
    
    $('.admin-a').slick({
      dots: false,
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 8,
      slidesToScroll: 1,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
    var $uploadForm = $('.add-a-form.upload-a'),
        $targetFrom   = $('.target-user-form'),
        $adminSuccess = $('.admin-success');
    
    $('.target-users').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('.target-user-form.visible').parent().removeClass('overlay');
        $('.target-user-form.visible').removeClass('visible');
                
        $(this).parent().parent().find('.target-user-form').addClass('visible');
        $(this).parent().parent().addClass('overlay');
    });
    
    $('.add-a').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $uploadForm.addClass('visible');
        $uploadForm.fadeIn();
    });
    
    $('html').on('click', function(e) {
        var $targetFormVisible = $('.target-user-form.visible');
        
        if( $targetFormVisible ) {
            e.stopPropagation();
            e.preventDefault();
            $targetFormVisible.parent().removeClass('overlay');
            $targetFormVisible.removeClass('visible');
        }
        
        if( $uploadForm.hasClass('visible') ) {
            e.stopPropagation();
            e.preventDefault();
            $uploadForm.removeClass('visible');
            $uploadForm.fadeOut();
        } 
        
        return;
    });
    
    if($adminSuccess) {
        $adminSuccess.on('mouseover', '.success-item.filled', function(e) {
            var $that = $(this);
            e.stopPropagation();
            e.preventDefault();
            console.log(e.target);
            
            if(e.target != this) {
                return;
            }
    
            $('.success-details').fadeOut();
            $that.find('.success-details').fadeIn();
        });
    }
    
    $('.close-details').on('click', function(e) {
        $(this).parent().parent().parent().fadeOut();
    });
})();