import Link from 'next/link'

export default function Pf() {
  return (
    <div className="text-blue-500">
      <div className="flex gap-2">
        <Link href="/">홈</Link>
        <Link href="/about">어바웃</Link>
        <Link href="/pf">포트폴리오</Link>
      </div>

      <hr />

      <h1>포트폴리오</h1>
    </div>
  );
}
