import Calc from "./components/Calc"
import Navbar from "./components/Navbar"
import Router from "./Router"

const App = () => {
  return (
    <div>
      <Navbar />
      <Router/>
     
      <footer className="bg-gray-800 text-gray-300 py-8 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h2 className="text-xl font-semibold mb-2">Aditya Beura</h2>
        <p className="text-sm text-gray-400">
          Student developer crafting responsive web apps with React & Tailwind CSS. Passionate about clean design and scalable code.
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold mb-2">Explore</h3>
        <ul className="space-y-1 text-gray-400">
          <li><a href="#project" className="hover:text-white">Projects</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Connect</h3>
        <ul className="space-y-1 text-gray-400">
          <li><a href="mailto:adityabeura08@gmail.com" className="hover:text-white">Email</a></li>
          <li><a href="https://github.com/Adiii08" className="hover:text-white">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/adityabeura/" className="hover:text-white">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-8 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Aditya Beura. Built with ❤️ and Tailwind CSS.
    </div>
  </footer>
    </div>
  )
}

export default App
