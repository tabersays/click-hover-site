/**
 * Created by taber.fitzgerald on 4/16/2015.
 * This is the base template for js
 */
var time;
var start;
var end;
function redirect() {
    end = new Date();
    var count = Cookies.get('count');
    Cookies.set('time' + count, end.getTime() - start.getTime());
    Cookies.set('count', parseInt(Cookies.get('count'), 10) + 1);


}
function reset(){
    $('.zero').addClass('hide');
    $('.one').addClass('hide');
    $('.two').addClass('hide');
    $('.c0')
    $('.c1')
    $('.c2')
}

$(document).ready(function () {
    start = new Date();
    if (!Cookies.get('count'))
        Cookies.set('count', 0);
    $('.click').hover(function(e){
        if ($(e.target).hasClass('c1')) {
            $('.one').addClass('hide').removeClass('selected');
            $('.two').addClass('hide');
            $('.c1').children().siblings().removeClass('selected');
            $('.c2').children().siblings().removeClass('selected');
        }
        else if ($(e.target).hasClass('c2')) {
            $('.two').addClass('hide').removeClass('selected');
            $('.c2').children().siblings().removeClass('selected');
        }
        else {
            $('.zero').addClass('hide').removeClass('selected');
            $('.one').addClass('hide').removeClass('selected');
            $('.two').addClass('hide').removeClass('selected');
            $('.c0').children().siblings().removeClass('selected');
            $('.c1').children().siblings().removeClass('selected');
            $('.c2').children().siblings().removeClass('selected');
        }
        $(e.target).children().siblings().removeClass('selected');
        $(e.target).children().siblings().removeClass('hide');
        $(e.target).children().first().addClass('selected');
    },function (e) {
            $(e.target).children().siblings('div').addClass('hide');
            if ($(e.target).hasClass('c1')) {
                $('.one').addClass('hide').removeClass('selected');
                $('.two').addClass('hide');
                $('.c1').children().siblings().removeClass('selected');
                $('.c2').children().siblings().removeClass('selected');
            }
            else if ($(e.target).hasClass('c2')) {
                $('.two').addClass('hide').removeClass('selected');
                $('.c2').children().siblings().removeClass('selected');
            }
            else/*if ($(e.target).hasClass('c0')*/ {
                $('.zero').addClass('hide').removeClass('selected');
                $('.one').addClass('hide').removeClass('selected');
                $('.two').addClass('hide').removeClass('selected');
                $('.c0').children().siblings().removeClass('selected');
                $('.c1').children().siblings().removeClass('selected');
                $('.c2').children().siblings().removeClass('selected');
            }
            $(e.target).children().siblings().removeClass('selected');
            $(e.target).children().first().removeClass('selected');
    })
});