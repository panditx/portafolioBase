import { motion } from "framer-motion";

<motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-4xl font-bold mb-4"
>
  Hola, soy [Tu Nombre]
</motion.h1>;

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Hola, soy [Tu Nombre]</h1>
      <p className="text-lg mb-6">Desarrollador Web | React | Node.js</p>
      <a
        href="/proyectos"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Ver Proyectos
      </a>
    </section>
  );
};

export default Home;
