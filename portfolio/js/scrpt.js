document.addEventListener('DOMContentLoaded', function () {
  let navLinks = document.querySelectorAll('.nav-wrap nav a');
  let gnbBtn = document.querySelector('.gnb-btn');
  let navWrap = document.querySelector('.nav-wrap');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // 네비게이션 메뉴가 열려있는 상태라면
      if (navWrap.classList.contains('open')) {
        // 네비게이션 메뉴를 닫음
        navWrap.classList.remove('open');
        // gnb 버튼 상태 변경
        gnbBtn.classList.remove('active');
        document.querySelector('#go-top').classList.remove('active');
      }

    });
  });

  gnbBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    navWrap.classList.toggle('open');

    document.querySelector('#go-top').classList.add('active');

  });
});
// nav 

let header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    header.classList.add("active");
  }
  else if (window.scrollY < 100) {
    header.classList.remove("active");
  }
});
// nav bg

(() => {
  const cursor = document.querySelector('.cursor');

  const innerCursor = document.querySelector('.inner-cursor');

  const followCursor = e => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

    innerCursor.style.left = x + 'px';
    innerCursor.style.top = y + 'px';
  }

  window.addEventListener('mousemove', followCursor);
})();

// cursor


let backToTop = () => {
  // Scroll | button show/hide
  window.addEventListener('scroll', () => {
    if (document.querySelector('html').scrollTop > 100) {
      document.getElementById('go-top').style.display = "block";
    } else {
      document.getElementById('go-top').style.display = "none";
    }
  });
  // back to top
  document.getElementById('go-top').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  })
};
backToTop();
// top


const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const accordionItem = e.currentTarget.parentNode;

    // 현재 클릭된 아이템만 열리도록 처리
    if (accordionItem.classList.contains('open')) {
      accordionItem.classList.remove('open');
    } else {
      toggleButtons.forEach((otherBtn) => {
        otherBtn.parentNode.classList.remove('open');
      });
      accordionItem.classList.add('open');
    }
  });
});
//accordion


let links = document.querySelectorAll('.link');
links.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    let target = document.querySelector(link.getAttribute('href'));
    if (target) {
      let targetOffsetTop = target.getBoundingClientRect().top + window.scrollY;
      animateScroll(targetOffsetTop, 500);
    }
  });
});

// 퀵 메뉴


// let links = document.querySelectorAll('.quick_menu li a');
links.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    links.forEach(function (quickLink) {
      quickLink.parentElement.classList.remove('on');
    });
    link.parentElement.classList.add('on');
  });
});
// 페이지 스크롤 감지


let sections = document.querySelectorAll('.page');
let nav = document.querySelector('.quick_menu');
let navHeight = nav.offsetHeight;

window.addEventListener('scroll', function () {
  let curPos = window.scrollY;

  sections.forEach(function (section) {
    let sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight;
    let sectionBottom = sectionTop + section.offsetHeight;

    if (curPos >= sectionTop && curPos <= sectionBottom) {
      links.forEach(function (quickLink) {
        quickLink.parentElement.classList.remove('on');
      });
      sections.forEach(function (sec) {
        sec.classList.remove('active');
      });

      section.parentElement.classList.add('on');
      let id = section.getAttribute('id');
      let correspondingLink = nav.querySelector('a[href="#' + id + '"]');
      if (correspondingLink) {
        correspondingLink.parentElement.classList.add('on');
      }
    }
  });
});

// 스크롤 애니메이션 함수


function animateScroll(targetPosition, duration) {
  let startPosition = window.scrollY;
  let startTime = performance.now();

  function scrollStep(timestamp) {
    let currentTime = timestamp - startTime;
    let progress = Math.min(currentTime / duration, 1);
    window.scrollTo(0, startPosition + (targetPosition - startPosition) * progress);

    if (currentTime < duration) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}
