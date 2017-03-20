// Admin
(function() {
    var $uploadForm = $('.add-a-form.upload-a'),
    $adminSuccess = $('.admin-success');
    
    $('.add-a').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $uploadForm.addClass('visible');
        $uploadForm.fadeIn();
    });
    
    $('html').on('click', function(e) {
        if( $uploadForm.hasClass('visible') ) {
            e.stopPropagation();
            e.preventDefault();
            $uploadForm.removeClass('visible');
            $uploadForm.fadeOut();
        } 
        
        return;
    });
    
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
    
    $('.close-details').on('click', function(e) {
        $(this).parent().parent().parent().fadeOut();
    });
})();