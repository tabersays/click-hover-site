/**
 * Created by taber.fitzgerald on 4/16/2015.
 * This is the base template for js
 */
function shopAll(e) {
    if ($("#shopAll").hasClass("selected")) {
        $("#shopAll").removeClass("selected");
        $("#shop").addClass("hide");
    }
    else {
        $("#shopAll").addClass("selected");
        $("#shop").removeClass("hide");
    }
}
function shopCell(e) {
    if ($("#shopCell").hasClass("selected")) {
        $("#shopCell").removeClass("selected");
        $("#cellphones").addClass("hide");
    }
    else {
        $("#shopCell").addClass("selected");
        $("#cellphones").removeClass("hide");
    }
}

function shopComp(e) {
    if ($("#shopComp").hasClass("selected")) {
        $("#shopComp").removeClass("selected");
        $("#computers").addClass("hide");
    }
    else {
        $("#shopComp").addClass("selected");
        $("#computers").removeClass("hide");
    }
}
function afunct3(e) {
    if ($("#men3").hasClass("selected")) {
        $("#men3").toggleClass("red").toggleClass("selected");
        $("#blk3").toggleClass("hide");
    }
    else {
        $("#men1").removeClass("selected").addClass("red");
        $("#men2").removeClass("selected").addClass("red");
        $("#men3").removeClass("selected").addClass("red");
        $("#men4").removeClass("selected").addClass("red");
        $("#men5").removeClass("selected").addClass("red");
        $("#blk1").addClass("hide");
        $("#blk2").addClass("hide");
        $("#blk3").addClass("hide");
        $("#blk4").addClass("hide");
        $("#blk5").addClass("hide");
        $("#men3").removeClass("red").addClass("selected");
        $("#blk3").removeClass("hide");
    }
}
function afunct4(e) {
    if ($("#men4").hasClass("selected")) {
        $("#men4").toggleClass("red").toggleClass("selected");
        $("#blk4").toggleClass("hide");
    }
    else {
        $("#men1").removeClass("selected").addClass("red");
        $("#men2").removeClass("selected").addClass("red");
        $("#men3").removeClass("selected").addClass("red");
        $("#men4").removeClass("selected").addClass("red");
        $("#men5").removeClass("selected").addClass("red");
        $("#blk1").addClass("hide");
        $("#blk2").addClass("hide");
        $("#blk3").addClass("hide");
        $("#blk4").addClass("hide");
        $("#blk5").addClass("hide");
        $("#men4").removeClass("red").addClass("selected");
        $("#blk4").removeClass("hide");
    }
}
function afunct5(e) {
    if ($("#men5").hasClass("selected")) {
        $("#men5").toggleClass("red").toggleClass("selected");
        $("#blk5").toggleClass("hide");
    }
    else {
        $("#men1").removeClass("selected").addClass("red");
        $("#men2").removeClass("selected").addClass("red");
        $("#men3").removeClass("selected").addClass("red");
        $("#men4").removeClass("selected").addClass("red");
        $("#men5").removeClass("selected").addClass("red");
        $("#blk1").addClass("hide");
        $("#blk2").addClass("hide");
        $("#blk3").addClass("hide");
        $("#blk4").addClass("hide");
        $("#blk5").addClass("hide");
        $("#men5").removeClass("red").addClass("selected");
        $("#blk5").removeClass("hide");
    }
}
$(document).ready(function(){
});