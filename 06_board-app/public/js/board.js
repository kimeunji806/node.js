// formatNow 함수 정의
// 매개변수 dateStr(날짜 문자열)을 받아서
// "YYYY-MM-DD HH:MM:SS" 형식의 문자열로 변환해 반환하는 함수
function formatNow(dateStr) {
  // 전달받은 dateStr을 기반으로 Date 객체 생성
  // 예: "2026-02-27T08:00:00" 같은 문자열을 날짜 객체로 변환
  const now = new Date(dateStr);

  // 연도 가져오기 (예: 2026)
  const year = now.getFullYear();

  // 월 가져오기
  // getMonth()는 0부터 시작함 (0=1월, 1=2월, ..., 11=12월)
  // 그래서 실제 월을 맞추기 위해 +1 해줌
  // padStart(2, "0") → 한 자리면 앞에 0 붙여서 두 자리로 맞춤 (예: 3 → 03)
  const month = String(now.getMonth() + 1).padStart(2, "0");

  // 일(day) 가져오기
  // padStart로 항상 두 자리 유지 (예: 7 → 07)
  const day = String(now.getDate()).padStart(2, "0");

  // 시간(hour) 가져오기 (0~23)
  // 두 자리로 맞춤
  const hours = String(now.getHours()).padStart(2, "0");

  // 분(minute) 가져오기
  // 두 자리로 맞춤
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // 초(second) 가져오기
  // 두 자리로 맞춤
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // 최종적으로 "YYYY-MM-DD HH:MM:SS" 형식으로 문자열 반환
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
