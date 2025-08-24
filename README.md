# 야채부락리 계란쿵야와 함께하는 삶은계란 타이머

<img src="https://github.com/user-attachments/assets/9bccb21f-87b5-4d9e-b115-e55cc3efa521" width="306" height="486">
<br><br>
- 배포 URL : <a href="https://yunjeongmi1004.github.io/mingo-egg-timer" target="_blank">https://yunjeongmi1004.github.io/mingo-egg-timer</a>

<br>

## 프로젝트 소개

- 완전반숙, 반숙, 완숙 계란삶기 타이머
- 추억의 야채부락리 쿵야를 활용하여 재미요소 추가, 야채부락리를 여전히 그리워하는 유저들이 좋아할것으로 예상

<br>

## 1. 개발 환경

- Front : HTML, React, Styled-components, Zustand
- 버전 및 이슈관리 : Github

<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, styled-component

- React

  - 컴포넌트화를 통한 유지보수와 재사용성 고려

- styled-component
  - props를 활용한 조건부 스타일링
  - S-dot 네이밍을 통해 일반 컴포넌트와 스타일드 컴포넌트 구분

### Zustand

- 전역으로 관리되는 State, 불필요한 props 구조 단순한 로직으로 관리

### Fsd Pattern

- Component의 상위 하위 개념을 폴더 구조로 표현
- 폴더 구조를 통해 비즈니스 로직 정리

<br>

## 3. 프로젝트 구조

```
┌── public
│    └── favicon.ico
└── src
     ├── main.jsx
     ├── app
     │     ├── index.jsx
     │     └── style
     ├── page
     │     ├── Done
     │     │   ├── index.jsx
     │     │   └── style.jsx
     │     ├── Timer
     │     │   ├── model
     │     │   │   ├── useInterval.jsx
     │     │   │   ├── useModal.jsx
     │     │   │   ├── useSwiper.jsx
     │     │   │   └── useTimer.jsx
     │     │   ├── index.jsx
     │     │   └── style.jsx
     ├── shared
     │     ├── model
     │     │    └── eggSettingStore.jsx
     └── widget
           └── layout
                └── Egg
                     ├── index.jsx
                     └── style.jsx
```

<br>

## 4. 기능

### [Timer]

- useInterval 사용한 타이머 구현 (setInterval을 더 안전하고 유연하게 사용하기 위한 커스텀 훅)

<br>

### [Ui]

- swiper 플러그인을 사용하여 반응형 캐러셀 구현
- css만으로 계란쿵야 UI를 구현하여 눈동자와 몸의 움직임 표현

<br>
