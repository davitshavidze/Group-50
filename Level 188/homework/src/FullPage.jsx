import { Outlet } from "react-router"
function FullPage() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}
export default FullPage