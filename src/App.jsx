import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Cards } from './pages/cards/cards';
import { Main } from './pages/main/main';
import { Rules } from './pages/rules/rules';
import { Team } from './pages/team/team';
import { Vacancies } from './pages/vacancies/vacancies';
import { Timetable } from './pages/timetable/timetable';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/index.html" element={<Main />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/team" element={<Team />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
