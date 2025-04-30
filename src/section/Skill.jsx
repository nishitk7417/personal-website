const Skill = ({ data }) => (
  <section className="p-6 text-white bg-gray-800">
    <h1 className="text-3xl font-bold mb-4">Skills</h1>
    <ul className="list-disc pl-6">
      {data.map((skill, i) => <li key={i}>{skill}</li>)}
    </ul>
  </section>
);

export default Skill;
