// Admin
(function() {
    
    var $uploadForm = $('.add-ad-form'),
        $adminSuccess = $('.admin-success');
    
    $('.add-ad').on('click', function(e) {
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
        } else {
            return;
        }
    });
    
    $adminSuccess.on('click', '.success-item', function(e) {
        var $that = $(this);
        if( $that.hasClass('filled') ) {
            $(this).addClass('details-visible');
            $('.success-details').fadeOut();
            $(this).find('.success-details').fadeIn();
        }
        return
    });
    
    $('.close-details').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).parent().parent().parent().fadeOut();
    });
    
})();





// Masonry gal
$('#grid2 img').each(function() {
    var $this = $(this);
    $this.wrap('<div class="item"><a></a></div>');
    $('a').removeAttr('href');
});
$('#grid2').addClass('effect-2');

$(window).on('load', function() {
    var $container = $('.grid');
    // initialize
    $container.masonry({
        //columnWidth: 200,
        itemSelector: '.item'
    })
    $('.item > a').removeAttr('href')
})

// Scroll gal
$(function() {
    var ele = $('#scroll');
    var speed = 60,
        scroll = 1,
        $grid = $('#grid'),
        scrolling,
        Top = 0;

    $(document).ready(function(e) {
        // Scroll the element down
        scrolling = window.setInterval(function() {
            if( ele && ele.is(':hover') ) {
                return;
            } else {
                ele.scrollTop(ele.scrollTop() + scroll);
                // ele.stop().animate({scrollTop: 40}, 400, 'swing', function(e) {
                //     console.log( $(this) );
                //     $(this).scrollTop(0).find('.grid-row:last').after($('.grid-row:first', this));
                // });
                
                if(ele.scrollTop() % 200 === 0) {
                    var heightArr = [];
                    $('.grid-row:first-child').find('.item').each(function(e) {
                        heightArr.push($(this).height());
                    });
                    console.log(heightArr);
                    var maxHeight = Math.max.apply(this, heightArr);
                    console.log(maxHeight);
                    $('#grid').find('.grid-row:first-child').appendTo('#grid');
                }
            }
        }, speed);
    });
    
    setInterval(function(){
    $('#list').stop().animate({scrollTop:40},400,'swing',function(){
        $(this).scrollTop(0).find('span:last').after($('span:first', this));
      });
    }, 1000);

    // $('#scroll-up').mouseenter(function() {
    //     // Scroll the element up
    //     scrolling = window.setInterval(function() {
    //         ele.scrollTop(ele.scrollTop() - scroll);
    //     }, speed);
    // });

    // $('#scroll-down').mouseenter(function() {
    //     // Scroll the element down
    //     scrolling = window.setInterval(function() {
    //         ele.scrollTop(ele.scrollTop() + scroll);
    //     }, speed);
    // });

    // $('#scroll-up, #scroll-down').bind({
    //     click: function(e) {
    //         // Prevent the default click action
    //         e.preventDefault();
    //     },
    //     mouseleave: function() {
    //         if (scrolling) {
    //             window.clearInterval(scrolling);
    //             scrolling = false;
    //         }
    //     }
    // });
});

// Google search submit
$('.google-search-from').on('click', function(e) {
    e.preventDefault();
    $('.google').removeClass('hidden');
});

// $(document).ready(function(e) {
//     var iframe = document.getElementsByTagName('iframe')[0];
//     var url = iframe.src;
//     var getData = function(data) {
//         if (data && data.query && data.query.results && data.query.results.resources && data.query.results.resources.content && data.query.results.resources.status == 200) loadHTML(data.query.results.resources.content);
//         else if (data && data.error && data.error.description) loadHTML(data.error.description);
//         else loadHTML('Error: Cannot load ' + url);
//     };
//     var loadURL = function(src) {
//         url = src;
//         var script = document.createElement('script');
//         script.src = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20data.headers%20where%20url%3D%22' + encodeURIComponent(url) + '%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=getData';
//         document.body.appendChild(script);
//     };
//     var loadHTML = function(html) {
//         iframe.src = 'about:blank';
//         iframe.contentWindow.document.open();
//         iframe.contentWindow.document.write(html.replace(/<head>/i, '<head><base href="' + url + '"><scr' + 'ipt>document.addEventListener("click", function(e) { if(e.target && e.target.nodeName == "A") { e.preventDefault(); parent.loadURL(e.target.href); } });</scr' + 'ipt>'));
//         iframe.contentWindow.document.close();
//     }

//     loadURL(iframe.src);
// });


// Old code 
var searchCaller = document.querySelector('#search-caller')
var header = document.querySelector('.top_panel')
var searchPanel = document.querySelector('#search-panel')
var aborter = document.querySelector('#search-abort')
var imagesStore = document.querySelector('#imagesStore')
var imagesSeek = document.querySelector('#imagesSeek')
var tutorClose = document.querySelector('.youtube-close')
var tutorOpen = document.querySelector('.top_tutor')
var tutorOpenMobile = document.querySelector('.top_tutor-mobile')
var tutor = document.querySelector('.youtube')



searchCaller.addEventListener('click', function() {
//   header.classList.add('hidden')
//   searchPanel.classList.add('panel-visible')
//   imagesStore.classList.add('hidden')
//   imagesSeek.classList.remove('hidden')

//   aborter.addEventListener('click', function() {
//     searchPanel.classList.remove('panel-visible')
//     header.classList.remove('hidden')
//     imagesStore.classList.remove('hidden')
//     imagesSeek.classList.add('hidden')
//   })
    $('#search-panel').slideDown();
})

aborter.addEventListener('click', function(e) {
   $('#search-panel').slideUp(); 
})

tutorOpen.addEventListener('click', function() {
  // tutor.classList.remove('hidden')
  $('.youtube')
    .css('display', 'none')
    .removeClass('hidden')
    .slideDown();

  tutorClose.addEventListener('click', function() {
    // tutor.classList.add('hidden')
    $('.youtube').slideUp();
  })
})

// tutorOpenMobile.addEventListener('click', function() {
//   tutor.classList.remove('hidden')

//   tutorClose.addEventListener('click', function() {
//     tutor.classList.add('hidden')
//   })
// })