let img = document.querySelector('img');
      let span = document.querySelectorAll('span');
      let index = 0;
      let timer;

      // 显示当前索引的图片
      function show() {
        img.src = `img/${index}.jpg`;  // 假设图片按 0.jpg, 1.jpg, 2.jpg, 3.jpg 命名
      }

      // 自动播放
      function autoPlay() {
        timer = setInterval(function() {
          index = (index + 1) % 4;  // 达到4时回到0
          show();
        }, 4000);
      }
      autoPlay();

      // 点击圆点控制轮播
      function ctrlPlay() {
        for (let i = 0; i < span.length; i++) {
          span[i].onclick = function() {
            index = i;
            show();
          }
        }
      }
      ctrlPlay();

      // 鼠标悬停暂停自动播放
      function eventList() {
        for (let i = 0; i < 4; i++) {
          span[i].addEventListener('mouseenter', function() {
            clearInterval(timer);
            index = i;
            show();
          }, false);
          span[i].addEventListener('mousemove', function() {
            clearInterval(timer);
            autoPlay();
          }, false);
        }
      }
      eventList();