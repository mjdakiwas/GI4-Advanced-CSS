function even(i) {
    return i % 2 == 0;
}

function odd(i) {
    return i % 2 != 0;
}

/*for (let i = 1; i <= 64; i++) {
    let div = document.createElement('div');
    document.getElementById('checkerboard').appendChild(div);
    console.log("div made");

    if (even(i)) {
        div.classList.add('white');
        console.log("white tile made")
    };

    if (odd(i)){
        div.classList.add('black');
    }
}

function createDiv(j) {
    
};
if (odd(i)) {
        createDiv(1);
        console.log(`row: ${i}`);
    };
    if (even(i)) {
        createDiv(0);
        console.log(`row: ${i}`);
    };*/


let checkerboard = $('#checkerboard');
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let div = document.createElement('div');
        checkerboard.append(div);
        if (even(j+i)) {
            $(div).addClass('white');
            console.log(`white tile made: ${j}`);
        } else {
            $(div).addClass('black');
            console.log(`black tile made: ${j}`);
        }
    }
}

$(".fav").click(function () {
    console.log("fav clicked");
    let product = $(this).closest('.product');
    console.log(product);
    let favBttn = $(product).find('.fav');
    console.log(favBttn);
    if ($(favBttn).hasClass("fill")) {
        $(favBttn).removeClass("fill");
        /*console.log("unfaved");*/
    } else {
        $(favBttn).addClass("fill");
        /*console.log("faved");*/
    }
});

$('.style').click(function () {
    let product = $(this).attr('id');
    console.log(`${product} clicked`);
    let style_img = `images/${product}.avif`;
    console.log(`img src: ${style_img}`);
    let img_div_sibling = $(this).parents('div').eq(2);
    console.log(img_div_sibling);
    let img_div_a = $(img_div_sibling).siblings('a');
    let img_div = $(img_div_a).children('.product-img');
    console.log(img_div.attr('src'));
    img_div.attr('src', style_img);
})