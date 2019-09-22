$(function () {
    var k = $(window).height();
    $('#fullpage').fullpage({
            navigation: true,//导航显示
            loopBottom: true,//是否循环

            afterLoad: function (anchorLink, index) {
                if (index == 2) {
                    $(".search").show().animate({"right": 370}, 1500, function () {
                        $(".search01").animate({"opacity": 1}, 500, function () {
                            $(".search").hide();
                            $(".search-02-1").show().animate({"height": 30, "right": 250, "top": 20}, 1000);
                            $(".goods").show().animate({'height': 218}, 1000, function () {
                            });
                            $(".word-01").hide();
                            $(".word-02").animate({"opacity": 1}, 1000);
                        })
                    });
                }
            }
            ,
            onLeave: function (index, nextIndex, direction) {
                //第二屏到第三屏
                if (index == 2 && nextIndex == 3) {
                    $(".shirt02").show().animate({"bottom": -(k - 250), "width": 207, "left": 255}, 2000, function () {
                        $(".img-02").animate({"opacity": 1}, 500, function () {

                            $(".btn-02").animate({"opacity": 1}, 500);
                        });

                    });
                    $(".box").show();
                }
                //第三屏到第四屏
                if (index == 3 && nextIndex == 4) {
                    $(".shirt02").hide();
                    $(".t1f").show().animate({"bottom": -((k - 260) + 50), "left": 250}, 500, function () {
                        $(this).hide();
                        $(".t1f04").show();
                        $(".car-box").animate({"left": 2000}, 3000, "easeInElastic", function () {
                            $(".word-04-a").animate({"opacity": 1});
                            $(".t1f-box").animate({"opacity": 1})
                        })
                    });
                }
                //第四到五屏
                if (index == 4 && nextIndex == 5) {
                    //手
                    $(".hard-05").animate({"bottom": 0}, 2000, function () {
                        //鼠标显示
                        $(".mouse-a").animate({"opacity": 1}, 500);
                        //沙发落下
                        $(".t1f-05").show().animate({"bottom": 70}, 1000, function () {
                            //卡片
                            $(".order-05").animate({"bottom": 380}, 1000, function () {
                                //文字
                                $(".word-05").addClass("word-05-a").animate({"opacity": 1});
                            });

                        })

                    })
                }
                //第五到六屏
                // if(index == 5 && nextIndex == 6){
                //     $(".t1f-05").show().animate({"left":"28%","bottom":-((k-500)),"height":60},1000,function () {
                //         $(this).hide();
                //         $(".shirt-box").animate({"left":"38%","bottom":20},1000)
                //     });
                //     $(".shirt-box").animate({"left":"25%"},function () {
                //         $(".page6").animate({"backgroundPositionX":"100%"});
                //         $(".adress").show();
                //
                //     });
                // }
                if (index == 5 && nextIndex == 6) {
                    // 沙发的距离 当前屏幕的高度 减去  box 的 bottom  500
                    $(".t1f-05").animate({"left": "40%", "bottom": -((k - 500)), "height": 60}, 1500, function () {
                        $(".t1f-05").hide();
                    });

                    $(".shirt-box").animate({"left": "38%"}, 1500, function () {

                        $(this).animate({"bottom": 20}, 500, function () {
                            $(this).hide();
                            $(".adress").show();
                            // 行走的过程就是 背景移动的过程
                            // 背景jqury 里面改变比较麻烦  backgroundPositionX  x坐标
                            $(".page6").animate({"backgroundPositionX": "100%"}, 4000, function () {
                                // 当背景动画执行完毕  boy 大小复原
                                $(".go-to01").animate({"opacity": 1, "left": "50%"}, 1000);
                                $(".boys").show().animate({"height": 305, "bottom": 116}, 1000, function () {
                                    $(this).animate({"right": 500}, 500, function () {
                                        // 门显示出来 模拟打开门的效果
                                        $(".door").animate({"opacity": 1}, 200, function () {
                                            // 之后girl 显示出来
                                            $(".girl").show().animate({"right": 350, "height": 306}, 500, function () {
                                                $(".pop-07").show();
                                                $(".next").fadeIn();
                                            })
                                        });
                                    });
                                });
                            });
                            // 光的速度
                            $(".go-to02").show().animate({"left": "50%"}, 2000, "easeOutElastic", function () {
                                // $(this).hide();
                            });
                        });

                    });

                }

                //第六到七屏
                if (index == 6 && nextIndex == 7) {
                    setTimeout(function () {
                        $(".star").animate({"width": 120}, 500, function () {
                            $(".good-07").animate({"opacity": 1}, 500);
                        });
                    }, 2000)
                }
                //第七到八屏
                if (index == 7 && nextIndex == 8) {
                    $(".btn-08").hover(function () {
                        $(".btn-08-a").toggle();
                    });
                    $(document).mousemove(function (event) {
                        var x = event.pageX - $(".hard-08").width() / 2;
                        var y = event.pageY + 10;
                        var minY = k - 449;
                        if (y < minY) {
                            y = minY;
                        }
                        $(".hard-08").css({"left": x, "top": y});
                    })
                    $(".again").click(function (event) {
                        $.fn.fullpage.moveTo(1);
                        $("img,.move").attr("style","");
                    })
                }
            }
        }
    )
    ;
});
