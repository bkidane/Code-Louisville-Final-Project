function myfunction(e){
    $("img").css({'transform': 'scale(1)'});
    $(e).css({'transform': 'scale('+ $(e).attr('data-scale') +')'});
};

