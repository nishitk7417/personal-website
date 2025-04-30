const Hobbies = ({ data }) => (
  <section className="p-6 text-white bg-gray-700">
    <h1 className="text-3xl font-bold mb-4">Hobbies</h1>
    <ul className="list-disc pl-6">
      {data.map((hobby, i) => <li key={i}>{hobby}</li>)}
    </ul>
  </section>
);

export default Hobbies;
