
import Header from './assets/components/Header';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';
import Myskill from './assets/components/Myskill';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Apply the template's structure for the gradient */}
      <div className="relative h-full w-full min-h-screen bg-black overflow-hidden">
        {/* Gradient lines background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Radial gradient background */}
        <div className="absolute left-1/2 top-[-20%] lg:top-[-10%] h-[500px] w-[500px] md:h-[800px] md:w-[800px] lg:h-[1000px] lg:w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

        {/* Main app content */}
        <div className="relative z-10">
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Home />
            <About />
            <Myskill/>
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
