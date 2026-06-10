/* 주식회사 예네 — 공통 스크립트 (placeholder)
   헤더 인터랙션 등 추가 시 이곳에 작성하세요. */
(function () {
  "use strict";
  // 헤더 메뉴 키보드 접근성: aria-expanded 토글
  document.querySelectorAll('.gnb > li > a').forEach(function (a) {
    var li = a.parentElement;
    li.addEventListener('mouseenter', function () { a.setAttribute('aria-expanded', 'true'); });
    li.addEventListener('mouseleave', function () { a.setAttribute('aria-expanded', 'false'); });
  });

  // Section2 썸네일 탭메뉴: 클릭 시 활성 전환 + 대표 이미지 교체
  (function () {
    var thumbs = Array.prototype.slice.call(document.querySelectorAll('#section2 .thumb_item'));
    var mainImg = document.querySelector('#section2 .right_box .frame img');
    if (!thumbs.length || !mainImg) return;

    function activate(item) {
      var img = item.querySelector('img');
      if (!img) return;
      thumbs.forEach(function (t) {
        var on = t === item;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.setAttribute('tabindex', on ? '0' : '-1');
      });
      // 부드러운 페이드 교체
      mainImg.style.transition = 'opacity 0.35s ease';
      mainImg.style.opacity = '0';
      setTimeout(function () {
        mainImg.src = img.getAttribute('src');
        mainImg.alt = img.getAttribute('alt') || mainImg.alt;
        mainImg.style.opacity = '1';
      }, 200);
    }

    thumbs.forEach(function (item) {
      item.setAttribute('role', 'tab');
      item.setAttribute('aria-selected', item.classList.contains('active') ? 'true' : 'false');
      item.setAttribute('tabindex', item.classList.contains('active') ? '0' : '-1');
      item.addEventListener('click', function () { activate(item); });
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(item); }
      });
    });

    var list = document.querySelector('#section2 .thumbs');
    if (list) list.setAttribute('role', 'tablist');
  })();
})();
