import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="min-h-screen text-black px-4 md:px-12 py-8">
      <header className="flex justify-between items-center border-b pb-4 mb-8">
        <h1 className="text-3xl font-bold">Chris W.</h1>
        <nav className="space-x-4 text-lg">
          <a href="#filmmaker" className="hover:underline">Filmmaker</a>
          <a href="#educator" className="hover:underline">Educator</a>
          <a href="#artist" className="hover:underline">Artist</a>
        </nav>
      </header>

      <section id="filmmaker">
        <h2 className="text-2xl font-semibold mb-2">Filmmaker</h2>
        <img className="placeholder" src="https://via.placeholder.com/400x250?text=Filmmaker+Image" alt="Filmmaker Placeholder" />
        <div className="gallery">
          <img src="https://via.placeholder.com/200x150?text=Film+1" alt="" />
          <img src="https://via.placeholder.com/200x150?text=Film+2" alt="" />
          <img src="https://via.placeholder.com/200x150?text=Film+3" alt="" />
        </div>
      </section>

      <section id="educator" className="mt-12">
        <h2 className="text-2xl font-semibold mb-2">Educator</h2>
        <img className="placeholder" src="https://via.placeholder.com/400x250?text=Educator+Image" alt="Educator Placeholder" />
        <div className="gallery">
          <img src="https://via.placeholder.com/200x150?text=Teach+1" alt="" />
          <img src="https://via.placeholder.com/200x150?text=Teach+2" alt="" />
          <img src="https://via.placeholder.com/200x150?text=Teach+3" alt="" />
        </div>
      </section>

      <section id="artist" className="mt-12">
        <h2 className="text-2xl font-semibold mb-2">Artist</h2>
        <img className="placeholder" src="https://via.placeholder.com/400x250?text=Artist+Image" alt="Artist Placeholder" />
        <div className="gallery">
          <img src="https://via.placeholder.com/200x150?text=Art+1" alt="" />
          <img src="https://via.placeholder.com/200x150?text=Art+2" alt="" />
          <img src="https://via.placeholder.com/200x150?text=Art+3" alt="" />
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-600">
        <p>&copy; 2025 Chris Wooten</p>
        <p><a href="/cv.pdf" className="text-blue-600 hover:underline">Download CV</a></p>
      </footer>
    </div>
  );
};

export default App;
