"use client";

import { logout } from "@/services/auth.service";

export default function Home() {
  return (
    <>
      <div className="font-bold">Main</div>
      <a href="/protected-test">protected test</a>
      <button onClick={() => logout()}>로그아웃</button>
    </>
  );
}
