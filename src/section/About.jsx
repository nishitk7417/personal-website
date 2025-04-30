
const About = ({ data }) => (
    <section className="p-6 text-white bg-gray-900">
      <h1 className="text-3xl font-bold mb-2">About Me</h1>
      <img src={data.image} alt="Profile" className="w-32 rounded-full mb-4" />
      <p>{data.bio}</p>
      <a href="https://github.com/nishitk7417" target="_blank">{data.github}</a>
    </section>
  );
  
  export default About;
  