
let topBtn = document.getElementsByClassName('top-btn')[0];

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    topBtn.classList.add('on');
  }else if (window.scrollY == 0) {
    topBtn.classList.remove('on');
  }
})

topBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({top: 0,  behavior: 'smooth'});
})

// 탑버튼


let header = document.getElementsByClassName('header')[0];
let gnbBtn = document.getElementsByClassName('gnb-btn')[0];
let menu = document.getElementById('navi');
let sns = document.getElementsByClassName('sns-wrap')[0];
let pcMenu = document.getElementsByClassName('pc-menu')[0];
let body = document.getElementsByTagName('body')[0];

gnbBtn.addEventListener("click", () => {
  header.classList.toggle('active');
  gnbBtn.classList.toggle('active');
  menu.classList.toggle('active');
  sns.classList.toggle('active');
  pcMenu.classList.toggle('active');
  topBtn.classList.toggle('active');
  body.classList.toggle('active');
})

// 메뉴 (햄버거 버튼 작동시 이벤트)


let bg = document.getElementsByClassName('main-bg')[0];

window.addEventListener('scroll', () => {
  console.log(window.scrollY)
  //100 ~ 400

  if (matchMedia("screen and (max-width: 600px)").matches) {
    if (window.scrollY > 100) {
      bg.style.scale = "1.2";
    } else if (window.scrollY < 120) {
      bg.style.scale = "1";
      bg.style.margin = "30px";
      bg.style.transition = ".1s ease-in-out";
    }
  }
  else if(matchMedia("screen and (max-width: 1400px)").matches){
    if (window.scrollY > 280) {
      bg.style.scale = "1.2";
    } else if (window.scrollY < 200) {
      bg.style.scale = "1";
      bg.style.margin = "30px";
      bg.style.transition = ".1s ease-in-out";
    }  
  }
  else {
    if (window.scrollY > 250) {
      bg.style.scale = "1.2";
    } else if (window.scrollY < 200) {
      bg.style.scale = "1";
      bg.style.margin = "30px";
      bg.style.transition = ".1s ease-in-out";
    }
  }
});

// 메인 비쥬얼 스크롤시 scale 확대 


let scrollText = document.getElementsByClassName('scroll-txt');

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (matchMedia("screen and (min-width: 600px)").matches) {
    //이상에서 사용할 스크립트

    if (window.scrollY > 1100) {
      scrollText[1].style.cssText = (`transform: translateX(${window.scrollY - 1100}px);`)
      // console.log(`transform: translateX(-${parseInt(window.scrollY)});`);

    }
    if (window.scrollY > 580) {
      scrollText[0].style.cssText = (`transform: translateX(-${window.scrollY - 580}px);`)
      console.log(`transform: translateX(-${parseInt(window.scrollY)});`);
    }

  } else {
    //미만에서 사용할 스크립트
    if (window.scrollY > 800) {
      scrollText[1].style.cssText = (`transform: translateX(${window.scrollY - 800}px);`)
      // console.log(`transform: translateX(-${parseInt(window.scrollY)});`);

    }
    if (window.scrollY > 600) {
      scrollText[0].style.cssText = (`transform: translateX(-${window.scrollY - 600}px);`)
      console.log(`transform: translateX(-${parseInt(window.scrollY)});`);
    }
  }
})
// flow text


let bgWrap = document.getElementsByClassName('bg-wrap')[0];
let item = document.getElementsByClassName('item-6')[0];
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (matchMedia("screen and (max-width: 533px)").matches) {

    window.addEventListener('scroll', function () {
      console.log(window.scrollY)
      //100 ~ 400
      if (window.scrollY > 1850) {
        bgWrap.style.scale = "1.2";
        bgWrap.style.padding = "50px 0 0 0";
        item.style.backgroundPosition = "top 0 left 60%";
        item.style.transition = ".3s ease-in-out";

      } else if (window.scrollY < 1715) {
        bgWrap.style.scale = "1";
        item.style.backgroundPosition = "top 0 left 48%";
      }
    });
  }
  else if (matchMedia("screen and (min-width: 533px)").matches) {
    //미만에서 사용할 스크립트
    window.addEventListener('scroll', function () {
      console.log(window.scrollY)
      //100 ~ 400
      if (window.scrollY > 2800) {
        bgWrap.style.scale = "1.2";
        bgWrap.style.padding = "50px 0 0 0";
        item.style.backgroundPosition = "top 0 left 60%";
        item.style.transition = ".3s ease-in-out";

      } else if (window.scrollY < 2500) {
        bgWrap.style.scale = "1";
        item.style.backgroundPosition = "top 0 left 48%";
      }
    });
  }
  
})
//brand slide


let mapContainer = document.getElementById('map'),
  mapOption = {
    center: new kakao.maps.LatLng(37.5446456, 127.0537993), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = '/wonderplace/imgs/map/marker.png',
  imageSize = new kakao.maps.Size(54, 88),
  imageOption = { offset: new kakao.maps.Point(27, 90) };
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
  markerPosition = new kakao.maps.LatLng(37.5446456, 127.0537993);

var marker = new kakao.maps.Marker({
  position: markerPosition,
  image: markerImage
});

marker.setMap(map);
//map

