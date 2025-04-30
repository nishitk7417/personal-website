const Academics = ({ data }) => (
  <section className="p-6 text-white bg-gray-900">
    <h1 className="text-3xl font-bold mb-4">Academic Background</h1>
    {data.map((item, i) => (
      <div key={i} className="mb-2">
        <p className="font-semibold">{item.degree}</p>
        <p>{item.institution} - {item.year}</p>
      </div>
    ))}
  </section>
);

export default Academics;
