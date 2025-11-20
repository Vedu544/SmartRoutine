import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md px-6">
        <div className="flex-1">
          <a className="text-2xl font-bold text-primary">SmartRoutine</a>
        </div>
        <div className="flex-none gap-4">
          <button className="btn btn-ghost">Home</button>
          <button className="btn btn-ghost">Community</button>
          <button className="btn btn-ghost">AI Routine Maker</button>
          <button className="btn btn-outline btn-primary">Login</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">
              Build Your <span className="text-primary">Perfect Routine</span>
            </h1>
            <p className="py-6 text-lg">
              Share and explore routines like skincare, diet, workout, morning rituals, night habits, and more.  
              Let AI build routines tailored to your lifestyle.
            </p>
            <button className="btn btn-primary btn-wide">Get Started</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-10 grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-primary">Share Routines</h2>
            <p>Create & explore routines for skincare, diet, work, fitness, sleep, and more!</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-primary">Community Groups</h2>
            <p>Join communities and share your routine with others.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-primary">AI Routine Maker</h2>
            <p>AI builds the best routine based on your lifestyle, body, and schedule.</p>
          </div>
        </div>
      </div>

      {/* Notion Save Section */}
      <div className="px-6 pb-10">
        <div className="card bg-primary text-primary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Save To Notion</h2>
            <p>Export any routine to your Notion workspace instantly.</p>
            <button className="btn">Coming Soon</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>© 2025 SmartRoutine — All Rights Reserved</p>
        </aside>
      </footer>
    </div>
  )
}

export default App
