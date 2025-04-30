import { Routes, Route } from "react-router-dom";
import content from "../data/content.json";

import About from "../section/About";
import Skill from "../section/Skill";
import Hobbies from "../section/Hobbies";
import Passion from "../section/Passion";
import Academic from "../section/Academic";

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<About data={content.about} />} />
    <Route path="/skill" element={<Skill data={content.skills} />} />
    <Route path="/hobbies" element={<Hobbies data={content.hobbies} />} />
    <Route path="/passion" element={<Passion data={content.passions} />} />
    <Route path="/academic" element={<Academic data={content.academics} />} />
  </Routes>
);

export default RoutesComponent;
