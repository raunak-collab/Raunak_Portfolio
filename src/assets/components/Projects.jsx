import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: '📖 Islamic Knowledge Hub',
      description:
        'Islamic Knowledge Hub is a comprehensive platform designed to provide authentic Islamic resources, including Hadith, Islamic laws, and guidance on Family Law, Business Law, Criminal Law, and Worship. Our goal is to make Islamic knowledge accessible and beneficial for everyone.',
      link: 'https://github.com/raunak-collab/Islamic-Knowledge-Hub/tree/my-new-branch',
      view: 'https://islamicknowledgehub.netlify.app/',
    },
    {
      title: '✅ iTask',
      description:
        'iTask is a simple and efficient to-do list website designed to help you stay organized and productive. Easily create, manage, and track your tasks with a clean and intuitive interface. Plan your day, prioritize your goals, and achieve more with iTask!.',
      link: 'https://github.com/raunak-collab/Todo-list-/tree/my-new-branch',
      view: 'https://tastki.netlify.app/',
    },
    {
      title: '🔐 PassOP',
      description:
        'PassOP is a reliable and user-friendly password manager designed to safeguard your digital identity. Manage and store all your passwords in one place with advanced encryption and seamless access.',
      link: 'https://github.com/raunak-collab/passop-mongodb/tree/my-new-branch',
      view: 'https://passopp.netlify.app/',
    },
    {
      title: '🎥 Netflix Clone',
      description:
        'Netflix Clone is a feature-rich streaming platform replica, offering a sleek and responsive interface to browse, search, and watch your favorite movies and TV shows. Experience the essence of Netflix.',
      link: 'https://github.com/raunak-collab/Netflix-clone/tree/my-new-branch',
      view: 'https://clonedindianetfli.netlify.app/',
    },
    {
      title: '🎵 Spotify Clone',
      description:
        'Spotify Clone is a music streaming platform, allowing users to browse, search, and play their favorite songs and albums. Enjoy features like playlist creation, playback controls, and a sleek, responsive design.',
      link: 'https://github.com/raunak-collab/Spotify-Clone/tree/my-new-branch',
      view: 'https://justspotify.netlify.app',
    },
    {
      title: '🐦 Twitter Clone',
      description:
        "A responsive Twitter clone built using only HTML and Tailwind CSS, showcasing a sleek and minimal design inspired by Twitter's interface.",
      link: 'https://github.com/raunak-collab/Spotify-Clone/tree/my-new-branch',
      view: 'https://xtwitterclone.netlify.app/',
    },
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-black">
        <div className="container mx-auto text-center text-[#f316b0]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <div className='bg-[#f316b0] h-1 w-10 mx-auto mb-12'></div>
          <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-5">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-950 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <h2 className="text-lg md:text-xl mb-3 font-bold">{project.title}</h2>
                <p className="mb-4 text-white text-balance">{project.description}</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="hover:underline text-[#ff6f61] transition-colors duration-300"
                >
                  View Project on github
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.view}
                  className="hover:underline text-[#a39f8f] transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="block relative bottom-0 bg-[#f316b0] w-full h-[2px]"></div>
    </>
  );
};

export default Projects;
