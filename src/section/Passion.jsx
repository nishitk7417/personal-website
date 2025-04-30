const Passions = ({ data }) => (
  <section className="p-6 text-white bg-gray-800">
    <h1 className="text-3xl font-bold mb-4">Passions</h1>
    <ul className="list-disc pl-6">
      {data.map((passion, i) => <li key={i}>{passion}</li>)}
    </ul>
  </section>
);

export default Passions;
