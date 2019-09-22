var ul = $(".warpUl");
var ulW = parseInt(ul.css("width"));
var ulH = parseInt(ul.css("height"));
var liW = ulW / 5;
var liH = ulH / 5;


createDom();

function createDom() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            $("<li><div class='box'><img src=''></div></li>")
                .css({
                    'width': liW + 'px',
                    "height": liH + 'px',
                    "left": j * liW,
                    "top": i * liH,
                    "transform": 'scale(0.9) rotate(' + (Math.random() * 40 - 20) + 'deg) '
                        + 'translateX(' + (30 * i - 60) + 'px)'
                        + 'translateY(' + (30 * j - 60) + 'px)'
                        + 'translateZ(-' + Math.random() * 500 + 'px)'
                })
                .find("img").attr("src", './img/' + (5 * i + j + 1) + '.jpg')
                .end()
                .appendTo(ul);
        }

    }
    bindEvent();
}

function bindEvent() {
    // console.log(this);
    var change = true;
    var bgLeft = 0;
    var bgTop = 0;
    ul.find("li").on('click', function () {
        bgTop=0;
        if (change) {
            var bgImg = $(this).find("img").attr('src');
            console.log(bgImg);
            $('li').each(function (index) {
                // console.log(index);
                var $this = $(this);

                // console.log($this);
                $(this).delay(10 * index).animate({'opacity': 0}, 200, function () {
                    $this.css({
                        "transform": 'rotate(0deg) '
                            + 'translateX(0px)'
                            + 'translateY(0px)'
                            + 'translateZ(0px)'
                    });
                    $this.find(".box").css(
                        {
                            'transform': 'scale(1)'
                        }
                    );
                    $this.find("img").attr('src', bgImg).css({
                        'position': 'absolute',
                        'width': ulW + 'px',
                        'height': ulH + 'px',
                        'left': -bgLeft,
                        'top': -bgTop,

                    });

                    bgLeft += liW;
                    if (bgLeft >= ulW) {
                        bgTop += liH;
                        bgLeft = 0;
                    }
                    $this.animate({'opacity': 1}, 300);
                });
                change = false;
            })
        } else {
            change = true;
            $('li').each(function (index) {
                var j = index % 5;
                var i = Math.floor(index / 5);
                $(this).animate({'opacity': 0}, 0, function () {
                    $(this).find('img').css({
                        'width': '100%',
                        'height': '100%',
                        'left': 0,
                        'top': 0,
                    })
                });
                $(this).find("img").attr('src', './img/' + (index + 1) + '.jpg');
                $(this).find('li').css({
                    'position': 'absolute',
                    'background-color': 'white',
                    'transform-style': 'preserve-3d',
                });
                $(".box").css({
                    // 'animation':0,
                    "transform": 'scale(0.9)'
                });
                $(this).css({
                    'animation':0,
                    "transform": 'scale(0.9) rotate(' + (Math.random() * 40 - 20) + 'deg) '
                        + 'translateX(' + (30 * i - 60) + 'px)'
                        + 'translateY(' + (30 * j - 60) + 'px)'
                        + 'translateZ(-' + Math.random() * 500 + 'px)'
                });
                $(this).animate({'opacity': 1}, 300);
            })
        }

    })
}
