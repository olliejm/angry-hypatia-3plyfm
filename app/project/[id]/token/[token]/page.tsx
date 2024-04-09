import Link from "next/link";

export default async function ProjectTokenModal({ params: { id, token } }) {
  return (
    <>
      <div>Non-intercepted</div>
      <div>Id: {id}</div>
      <div>Token: {token}</div>
    </>
  );
}
