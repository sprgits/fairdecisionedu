# FairDecisionEDU

학교폭력 결정 공정성 판단 시스템 (FairDecisionEDU)은 과거 학교폭력 사건 데이터를 기반으로, 유사 사건과 비교하여 조치의 일관성 및 공정성을 분석·제시하는 플랫폼입니다.

## 주요 기능

- 유사 사건 추천 엔진
- 규칙 기반 권고 엔진
- 통계 및 대시보드
- 공정성 평가 리포트
- 권한 기반 인터페이스

## 기술 스택

- Frontend: React, Tailwind CSS
- Charts: Chart.js
- Routing: React Router
- HTTP Client: Axios

## 설치 및 실행

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm start
```

3. 프로덕션 빌드:
```bash
npm run build
```

## 프로젝트 구조

```
src/
  ├── components/     # 재사용 가능한 컴포넌트
  ├── pages/         # 페이지 컴포넌트
  ├── App.js         # 메인 애플리케이션 컴포넌트
  └── index.js       # 진입점
```

## 라이센스

MIT 