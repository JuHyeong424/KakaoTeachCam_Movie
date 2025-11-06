<h1>깃허브 배포 페이지</h1>
<p>https://juhyeong424.github.io/KakaoTeachCam_Movie/</p>

<h1>영화 검색</h1>
<p>카카오테크 캠퍼스 1단계로 영화 검색 프로젝트를 하였습니다.</p>

<h2>실행</h2>
`npm install` 후에 `npm run dev`로 실행하면 됩니다.

<h2>기능</h2>
<h3>메인 페이지</h3>
<img src="./img.png>
<h3>한국어 검색</h3>
<img src="./img_1.png>
<h3>영어 검색</h3>
<img src="./img_2.png>
<h3>영화 상세 보기</h3>
<img src="./img_3.png>
<h3>페이지 검색</h3>
<img src="./img_4.png>
<p>
영화 검색을 하면 제목에 해당 검색어가 포함되어 있는 모든 제목을 보여줍니다.<br>
영화 정보 제공이 영어로 되어 있지만 한글로 검색해도 해당 영화가 검색됩니다.<br>
영화를 클릭하면 해당 영화 정보를 제공합니다.<br>
페이지를 검색하면 해당 페이지로 이동합니다.
</p>

<h2>문제 해결 및 성장 과정</h2>
<p><strong>트러블 슈팅 로그</strong>: https://www.notion.so/teamsparta/1-T-I-L-1c92dc3ef514802f85b7eeb46784afdd?p=1e82dc3ef51480babe4cf61abca7751d&pm=s</p>
<h4>성능 최적화: 10초를 1초로 단축시킨 사용자 경험 개선기</h4>
<ul>
  <li><strong>문제</strong>: 기능은 정상이나, 10초 이상의 검색 속도로 사용성이 매우 낮은 상태</li>
  <li><strong>분석</strong>: 개발자도구를 통해 네트워크 병목과 비효율적인 데이터 처리 방식 확인</li>
  <li><strong>해결</strong>:
    <ul>
      <li>클라이언트 중심 → 서버 중심 데이터 처리 구조로 변경</li>
      <li>TMDB 검색 API 활용하여 필요한 데이터만 요청</li>
      <li>페이지네이션 구현으로 불필요한 데이터 요청 제거</li>
    </ul>
  </li>
  <li><strong>결과</strong>: 평균 응답 속도 <strong>10초 → 1초 미만</strong>으로 대폭 개선</li>
</ul>

<h4>2️기본의 재발견: 모든 문제의 답은 공식 문서에 있었다</h4>
<ul>
  <li><strong>문제</strong>: 404, 501 등의 오류로 개발이 반복적으로 지연</li>
  <li><strong>원인</strong>: Bootstrap 필수 속성 누락, API 사용 규칙 미확인 등 기본 문서 미준수</li>
  <li><strong>변화</strong>:
    <ul>
      <li>무작정 코딩 대신 <strong>공식 문서 → 계획 → 구현</strong> 흐름 확립</li>
      <li>기본과 원칙을 우선하는 개발 습관 형성</li>
    </ul>
  </li>
</ul>

<h2>무엇을 배웠는가</h2>
<ul>
  <li><strong>성능은 선택이 아닌 필수</strong> — 사용자의 시간은 소중하다</li>
  <li><strong>측정 → 분석 → 개선</strong> — 감이 아닌 데이터 기반 문제 해결</li>
  <li><strong>공식 문서가 최고의 답</strong> — 가장 빠르고 정확한 길</li>
</ul>

