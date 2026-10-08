import { useState } from "react";
import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // State for completed practice sessions
  const [practiceCount, setPracticeCount] = useState(0);

  // State for showing/hiding the profile
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="app">
      <Header />

      <main>
        {showProfile && (
          <StudentProfile
            name="Anu"
            department="CSE"
            year="3rd Year"
            practiceCount={practiceCount}
          />
        )}

        <div className="buttons">
          <button onClick={() => setPracticeCount(practiceCount + 1)}>
            Complete Practice
          </button>

          <button onClick={() => setPracticeCount(0)}>
            Reset
          </button>

          <button onClick={() => setShowProfile(!showProfile)}>
            {showProfile ? "Hide Profile" : "Show Profile"}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;