# Sealed Jeju (실드제주)

> 제주에서의 하루를 작은 봉투 속에 담아 보내는 느낌 — 수제 실링왁스 감성 카드 브랜드 랜딩 페이지

푸른 바다, 감귤 밭, 비밀스러운 숲의 순간을 실링왁스 편지에 담아 전하는
브랜드 **Sealed Jeju**의 원페이지 웹사이트입니다.

## 구성

| 영역 | 내용 |
| --- | --- |
| Hero | 브랜드 슬로건과 컬렉션 진입 CTA |
| Section 1 | 제주의 순간들 — 아치형 카드 컬렉션 |
| Section 2 | 실링왁스 제작 이야기 — 썸네일 탭메뉴 |
| Section 3 | 전국 배송 배너 |
| Section 4 | 브랜드 에센스 |
| Footer | 브랜드 태그라인 · 메뉴 · 사업자 정보 |

## 기술

- 시맨틱 HTML + 순수 CSS (글래스 톤·반응형)
- 스크롤 인터랙션: **GSAP · ScrollTrigger · Lenis**
- 접근성: 키보드 내비게이션, ARIA 탭메뉴, `IntersectionObserver` 리빌

## 폴더 구조

```
.
├─ index.html      # 마크업
├─ css/style.css   # 스타일
├─ script/action.js# 인터랙션 (헤더 메뉴, 탭메뉴)
└─ img/            # 이미지 에셋
```

## 실행

별도 빌드 없이 `index.html`을 브라우저로 열면 됩니다.
로컬 서버 권장:

```bash
npx serve .
```
