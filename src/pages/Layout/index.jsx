import { Outlet } from "react-router-dom"

const PageLayout = () => {
  return (
    <>
      <div className="container h-screen mx-auto flex flex-col gap-10 items-center justify-center">
        <Outlet />
      </div>
    </>
  )
}
export default PageLayout