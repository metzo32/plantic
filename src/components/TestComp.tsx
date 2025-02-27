import { worker } from "../mock/browsers"

// 브라우저 환경에서 MSW 활성화
if (typeof window !== "undefined") {
  worker.start();
}

// TestComp 컴포넌트
export default function TestComp() {
  async function fetchData() {
    const response = await fetch("https://example.com/user");
    const user = await response.json();
    console.log(user);
  }

  // 데이터 요청 실행
  fetchData();

  return <div>Check the console for user data</div>;
}
