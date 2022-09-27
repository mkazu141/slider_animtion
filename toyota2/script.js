// リアルタイムに取得
let range = document.querySelector(`input[name='range']`);
var morphing_img = new Array("images/img1.png","images/img2.png", "img3.jpeg");
let animation_img = new Array("left", "center", "right")

// for (i=0; i<image_num; i++) {

// }

range.addEventListener(`input`, function () {
	document.querySelector(`#output`).innerHTML = `Value : ${range.value}`;

    let left = document.querySelector('#img'+(`${range.value}`-1));
    let center = document.querySelector('#img'+`${range.value}`);
    let right = document.querySelector('#img'+(`${range.value}`+1));

    left.classList.add(animatoin_img[0]);
    left.classList.remove(animation_img[1]);
    left.classList.remove(animation_img[2]);

    center.classList.add(animatoin_img[1]);
    left.classList.remove(animation_img[0]);
    left.classList.remove(animation_img[2]);

    right.classList.add(animation_img[2]);
    left.classList.remove(animation_img[1]);
    left.classList.remove(animation_img[0]);
});

