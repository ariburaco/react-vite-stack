import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <img src="vite.svg" width={120} height={120} alt="keep" />
      </div>
      <div className="prose prose-lg">
        <h1>Vite + React + TailwindCSS/DaisyUI</h1>
        <div className="card">
          <button className='btn btn-primary  rounded-full' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>

      <div>
        <ul className="flex flex-row gap-4">
          <li><Link to="/about" className="link link-secondary">About</Link></li>
        </ul>
      </div>
    </>

  )
}

export default HomePage;