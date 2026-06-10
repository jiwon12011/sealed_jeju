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
})();
