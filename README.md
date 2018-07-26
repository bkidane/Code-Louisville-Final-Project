
# Code-Louisville-Final-Project

Description
This is a website for a friend's photography business

The main page is a simple photo so I utilized custom media queries in the photo pages
I created html and css pages for every page on the webpage in case I wanted to style them differently down the road

Custom CSS Classes
The class(es) I created are:

.img-fluid {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
} 
.logo {
  position: relative;
  z-index: 2;
  display: block;
  margin-left: auto;
  width: 25%;
  height: 25%;
}
body {
  margin: 0;
  padding: 0;
}

.main-footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  text-align: center;
  z-index: 2;
}

Custom JavaScript Functions
The javascript functions I created are:

function myfunction(e){
    $("img").css({'transform': 'scale(1)'});
    $(e).css({'transform': 'scale('+ $(e).attr('data-scale') +')'});
};

This function allows me the photo to get bigger when it's clicked on, and it scales down to 1 when another picture is clicked on.

