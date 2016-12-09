var THUMBNAIL_IMAGE =document.querySelectorAll(".thumbnail-image");
var DETAIL_IMAGE = document.querySelector(".detail-image");
var DETAIL_TITLE = document.querySelector(".detail-image-title");
var THUMBNAIL_SRC_ARRAY = [];
var THUMBNAIL_IMAGE_ARRAY = [];


//convert thumbnail image nodelist into an array
//get the src for each image into an array
for (var i = 0; i < THUMBNAIL_IMAGE.length; i++) {
  var arrayItem = THUMBNAIL_IMAGE[i];
  THUMBNAIL_IMAGE_ARRAY.push(arrayItem);

  var arraySrc = THUMBNAIL_IMAGE[i].src;
  THUMBNAIL_SRC_ARRAY.push(arraySrc);
}

/*
this does not work why oh why..but the code below works!
adding event listener for each thumbnail image
for (var i = 0; i < THUMBNAIL_IMAGE_ARRAY; i++) {
  THUMBNAIL_IMAGE_ARRAY[0].addEventListener("click", function() {
    DETAIL_IMAGE.src = THUMBNAIL_SRC_ARRAY[0];
  });
}
*/

function addClickHandler(image, i) {
    image.addEventListener("click", function() {
        DETAIL_IMAGE.src = THUMBNAIL_SRC_ARRAY[i];
    });
}

for (var i = 0; i < THUMBNAIL_IMAGE_ARRAY.length; i++) {
  addClickHandler(THUMBNAIL_IMAGE_ARRAY[i], i);
}
