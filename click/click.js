/**
 * Created by taber.fitzgerald on 4/16/2015.
 * This is the base template for js
 */
$(document).ready(function(){
    $('.click').on('click', function(e){
        console.log($(e.target));

        if($(e.target).hasClass('selected')){
            $(e.target).siblings('div').addClass('hide');
            if($(e.target).hasClass('one')){

            }
            if($(e.target).hasClass('two')){

            }
            if($(e.target).hasClass('three')){

            }
            else{

            }
            $(e.target).removeClass('selected');
        }
        else{
            $(e.target).siblings().removeClass('hide');
            $(e.target).addClass('selected');
        }
    })
});