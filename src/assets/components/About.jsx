import React from 'react';

const About = () => {
  return (
    <>
      <section id="about" className="py-20 text-[#f316b0] ">
        <div className="container w-[90%] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className='bg-[#f316b0] h-1 w-10 mx-auto'></div>
          <div className='flex justify-center md:items-start items-center  md:flex-row flex-col mx-6 mt-6 w-full'>
            {/* Left section */}
            <div className='left-section w-1/2 flex flex-col md:justify-normal justify-center items-center right-24 relative top-24 md:top-5 md:right-44'>
            <div className='bg-[#f316b0] h-[6px] w-[38px] md:w-[50px] relative top-[27px] md:ml-0 ml-6 md:top-[32px] right-16 rotate-90'></div>
              <div className='text-purple-300 md:text-lg text-sm relative right-2'>Hi There,</div>
              <div className='font-semibold md:text-4xl text-xl relative right-[10px] text-[#ef1eb0ce]'>I am</div>
              <div className='md:text-6xl text-xl  font-bold md:relative md:left-[134px] '>Raunak Raza</div>
            </div>
            {/* Right section */}
            <div className='md:w-[80%] w-[95%] relative mt-[161px]'>
              <div className='flex items-center gap-2'>
                <div className='bg-[#f316b0] h-[3px] w-24 '></div>
                <h2 className='font-bold  text-[#f316b0]'> WHO AM I</h2>
              </div>

              <p className='text-start w-[94%] text-purple-200'>Hi! I'm Raunak, a passionate web developer currently pursuing a Bachelor of Computer Applications (BCA). I specialize in building responsive, modern websites and applications using the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS. My journey as a developer is fueled by a love for creating intuitive user interfaces and solving problems with clean, efficient code.
                <br/><br />
                In addition to my expertise in web development, I'm also dedicated to improving my skills in React and enhancing my GitHub profile with meaningful projects. I'm currently working on an exciting crowdfunding platform called GetMeACHAI, and I enjoy experimenting with tools like Framer Motion to bring smooth animations to life.
                <br/><br />
                When I'm not coding, you might find me designing an Islamic website that focuses on Hadith and Islamic law. Balancing creativity and functionality is something I truly value in all my projects, and I aim to make a meaningful impact through my work.</p>

              <div className="mt-8 relative md:right-0 right-6">
                <a target='_blank'
                  href="/RaunakResume.pdf"
                  className="bg-purple-600 relative md:right-8  rounded-3xl text-white font-semibold px-5 py-3  text-sm sm:text-base " // Added width classes for responsiveness
                >
                  Download resume
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) and (max-width: 1024px) {
          .left-section {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default About;
