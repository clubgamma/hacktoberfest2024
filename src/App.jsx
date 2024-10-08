import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import '@/App.css'
import Global from '@/Global'
import Home from '@/Pages/Home'
import LeaderBoard from '@/Pages/LeaderBoard'
import Profile from '@/Pages/Profile'
import Navbar from '@/components/Navbar'
import 'ldrs/infinity'

function App() {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    (async () => {
      try {
        Global.user = await Global.getUser();
        setLoaded(true);
      } catch (err) {
        console.error(err);
        setLoaded(true);
      }
    })()
  }, [])

  if (!loaded) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#1e1e1e] to-[#4e3535]">
          <l-infinity
              size="80"
              stroke="4"
              stroke-length="0.15"
              bg-opacity="0.1"
              speed="1.3"
              color="white"
          ></l-infinity>
        </div>
    )
  }

  return (
      <>
        <Routes>
          <Route path="/" element={
            <Navbar
                onContactClick={() => handleNavigation('contact')}
                onQandAClick={() => handleNavigation('q&a')}
                onStatusClick={() => handleNavigation('stat')}
                onProjectsClick={() => handleNavigation('project')}
            />
          }>
            <Route path="" element={<Home />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/profile/:username" element={<Profile />} />
          </Route>
        </Routes>
      </>
  )
}
export default App;
