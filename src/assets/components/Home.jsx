import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa6";
import myimg from '/img/myimg.png';

const Home = () => {
  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Slide in effect
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.5 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 },
    },
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }
    return (
      <>
        <section
          id="home"
          className="h-screen relative flex md:flex-row flex-col gap-8 items-center justify-center px-4" // Added padding for small screens
        >
          {/* Overlay for better text visibility */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-30" // Reduced opacity for the overlay
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 1.5 }} // Transition for background overlay
          />
          <motion.div
            className="text-center text-[#f316b0]" // Ensuring text is always colored
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 1 }}
          >
            <motion.h2
              className="text-3xl relative sm:text-4xl md:text-5xl font-bold" // Adjusted sizes for responsiveness
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              Welcome to My Portfolio
            </motion.h2>
            <motion.p
              className="mt-4 relative text-base sm:text-lg" // Responsive text size
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.3 }} // Delayed entry for better effect
            >
              I'm a passionate full-stack developer.
            </motion.p>

            {/* Responsive button container */}
            <div onClick={() => scrollToSection('projects')} className="mt-6">
              <motion.a
                className="relative inline-flex justify-center items-center w-2/4 sm:w-3/5 md:w-2/5 bg-[#f316b0] rounded-3xl text-white font-semibold px-4 py-2  gap-2 text-sm sm:text-base md:text-lg" // Added width classes for responsiveness
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ scale: 1 }} // Ensuring button starts at normal size
                animate={{ transition: { duration: 0.3 } }} // Smooth transition for button
              >
                View My Work <span><FaArrowRight /></span>
              </motion.a>
            </div>
          </motion.div>
          <div className='ml-4 bg-[#f316b0]  w-[31%] rounded-[50%]'>
            <img width={470} className='relative' src={myimg} alt="" />
          </div>
        </section>
        <div className='block relative bottom-0 bg-[#f316b0] w-full  h-[2px]'></div>
      </>

    );
  };

  export default Home
