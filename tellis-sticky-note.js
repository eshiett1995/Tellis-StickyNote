

var Sticky = {

init : function init_TSN (){

    $("body").append(
        
        '<div id="postit">' 
        +
          '<span id="minimise" class="glyphicon glyphicon-minus"  style="position:absolute; left: 8px; top: -35px; font-size: 15px"></span>' 
        +
          '<span id="maximise"  class="glyphicon glyphicon-plus"  style="position:absolute; left: 8px; top: -35px; font-size: 15px; display: none"></span>'
        +
          '<span class="glyphicon glyphicon-trash" style="position:absolute; right: 8px; top: -35px; font-size: 15px"></span>'
        +      
          '<p id="postit-body"></p>'
        +
          '</div>'
    
    
    );



    
    $("#minimise").click(function(){

    $("#minimise").css('display','none')
    
    $("#maximise").css('display','block')
    
    
    $("#postit-body").animate(
            
            {  
              
              'height': '0px',         
            
            }, {"duration":500, "queue": false} );
    
            $("#postit").animate(
            
              {  
                
                'min-height': '0px',  
                
                'max-height': '0px', 
                
                padding: '0px',          
              
              },  {"duration":700, "queue": false});
        });
    

    $("#maximise").click(function(){

            $("#maximise").css('display','none')
            
            $("#minimise").css('display','block')
            
            
            $("#postit").animate(
                    
                    {  
                      'min-height': '250px',  
                      
                      'max-height': '250px', 
                    
                    }, {"duration":300, "queue": false});
            
            
            $("#postit-body").animate(
                    
                    {  
                      
                      'height': '150px',         
                    
                    }, {"duration":800, "queue": false} );
            
                });
            


    (function($) {
        $.fn.drags = function(opt) {
    
            opt = $.extend({handle:"",cursor:"move"}, opt);
    
            if(opt.handle === "") {
                var $el = this;
            } else {
                var $el = this.find(opt.handle);
            }
    
            return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
                if(opt.handle === "") {
                    var $drag = $(this).addClass('draggable');
                } else {
                    var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
                }
                var z_idx = $drag.css('z-index'),
                    drg_h = $drag.outerHeight(),
                    drg_w = $drag.outerWidth(),
                    pos_y = $drag.offset().top + drg_h - e.pageY,
                    pos_x = $drag.offset().left + drg_w - e.pageX;
                $drag.parents().on("mousemove", function(e) {
                    $('.draggable').offset({
                        top:e.pageY + pos_y - drg_h,
                        left:e.pageX + pos_x - drg_w
                    }).on("mouseup", function() {
                        $(this).removeClass('draggable').css('z-index', z_idx);
                    });
                });
                e.preventDefault(); // disable selection

            }).on("mouseup", function() {

                if(opt.handle === "") {

                    $(this).removeClass('draggable');

                } else {

                    $(this).removeClass('active-handle').parent().removeClass('draggable');
                }

            });
    
        }
    })(jQuery);
    
    $('#postit').drags();

},

write :function write(str){

    $("#postit-body").text("");

    $("#postit-body").text(str);

},

read : function(){

    return $("#postit-body").text();

}

}

function Tellis_Sticky(){

    return Sticky;
}