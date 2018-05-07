# 用之前先看我
======================

## 说明
  本组件是pc和移动平台都能使用。

## git源码
  `官网：http://photoswipe.com/`
  `git：https://github.com/dimsemenov/photoswipe`

## 应用过的场景
  vue多页面开发项目，其应用步骤：
    1、在html中引用photoswipe.css、default-skin.css、photoswipe.min.js、photoswipe-ui-default.min.js等4个文件

    2、在vue中template部分复制以下代码
    ```
    ```javascript
      <!-- Root element of PhotoSwipe. Must have class pswp. -->
      <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="pswp__bg"></div>
        <div class="pswp__scroll-wrap">
          <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
          </div>

          <!-- 滑动区域顶部的默认（PopyWiPiui默认）接口。可以改变。 -->
          <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar">

              <!--  控件是self-explanatory的。秩序可以改变。 -->

              <div class="pswp__counter"></div>

              <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

              <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

              <!-- 元素将得到类PSWPJY预加载器——当预加载器运行时激活 -->
              <div class="pswp__preloader">
                  <div class="pswp__preloader__icn">
                    <div class="pswp__preloader__cut">
                      <div class="pswp__preloader__donut"></div>
                    </div>
                  </div>
              </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div class="pswp__share-tooltip"></div> 
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div class="pswp__caption">
              <div class="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- <button id="btn" @click="openPhotoSwipe">Open PhotoSwipe</button> -->
    ```

    3、在method中创建openPhotoSwipe方法函数
    ```javascript
      openPhotoSwipe(index) {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        var items = this.imgList; //配置图片数据
        // define options (if needed)
        var options = {
            // history & focus options are disabled on CodePen        
            history: false,
            focus: false,
            index: index,       // 设置初始显示图片index
            showAnimationDuration: 0,
            hideAnimationDuration: 0

        };
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
      }
    ```
      图片数据格式：imgList = [
        {
          src: '图片地址，目前指只试过oss地址',
          w: '图片实际宽度、点开后要显示的宽度',
          h: '图片实际高度、点开后要显示的高度'
        }
      ]
    

  
## 出现过的问题
  1、组件文件存放在statis文件目录下，在vue进行webpack打包时候，绝对路径不可用、相对路径可用但存在一些问题。相关路径与webpack配置文件中的配置项有关系。
