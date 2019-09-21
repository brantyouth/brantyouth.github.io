/**
 * 
 * @param {*} dom 容器
 * @param {*} urls 图片的URL地址
 * @param {*} width  每个图片的宽度
 */

function createWaterFall(Ddom,urls,imgWidth) {
    //函数区

    createImgDom();
    setImgPosition();
/**
 * 注册窗口发生改变事件
 */
var timer=null;
    window.onresize =function(){
        if(timer){
            clearInterval(timer);
        }
        timer = setTimeout(() => {
            setImgPosition();
        }, 500);
    }
/**
 * 计算列数
 */
    var lieshu = null;
    var kongxi = null;
    function jisuan(){
        var domWidth = parseInt(Ddom.clientWidth);
        
        //列数
        lieshu = Math.floor(domWidth / imgWidth);
        
        //每列之间的间隙
        kongxi = (domWidth-lieshu*imgWidth)/(lieshu+1);
    }
    /*
    * 创建图片对象
    *
    * */
   
    function createImgDom (){
        for(var i =1; i<urls.length; i++){
            var url = urls[i];
            var img =document.createElement("img");
            img.src=url;
            img.style.width = imgWidth + "px";
            img.onload=function(){
                setImgPosition ()
            }
            img.style.position = "absolute"
            Ddom.appendChild(img);


        }
    }
   
    /**
     * 设置图片的定位坐标
     */
    function setImgPosition (){
        jisuan();
        // var colY =[];
        var colY = new Array(lieshu); //存放的是每一列的Y坐标
        //为数组的每一项创建固定值
        colY.fill(0);
        
        for(var i =0;i<Ddom.children.length;i++){
            var img  = Ddom.children[i];
            var minY = Math.min(...colY);//求每一列Y坐标的最小值
            //当前的列
            var nowLie = colY.indexOf(minY);
            //x的宽度
            var x = nowLie*imgWidth+kongxi*(nowLie+1);
            img.style.left = x+'px';
            img.style.top = minY +'px';

            //更新数组
            colY[nowLie] += parseInt(img.height)+kongxi;


            //手动设置div的高度
            Ddom.style.height =Math.max(...colY)+"px" ;
            
        }
    }
    
}