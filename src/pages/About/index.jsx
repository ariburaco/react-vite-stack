import { useNavigate } from "react-router-dom"

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="prose prose-lg">
        <h1>About</h1>
        <p>
          This is a simple React app with a tailwindcss/daisyui layout.
        </p>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </>
  )
}
export default AboutPage