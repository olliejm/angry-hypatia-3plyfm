export default async function ProjectTokenModal({
  params: { id, token },
}) {
  return (
    <>
      <div>Intercepted</div>
      <div>Id: {id}</div>
      <div>Token: {token}</div>
    </>
  )
}
