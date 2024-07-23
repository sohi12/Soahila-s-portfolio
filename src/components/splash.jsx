import { motion } from 'framer-motion';
const Splash = ()=> {
  return (
    <div id="home" className=" items-center h-full  p-10 m-5 justify-center text-center  gap-1 flex flex-col sm:flex-row overflow-hidden  ">
  
   
        <motion.div
          initial={{ scale: 4, opacity: 0, rotate: 20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{
            ease: 'easeInOut',
            type: 'spring',
            duration: 2.2,
            delay: 1.5,
          }}
          className="flex h-full w-full items-center justify-center "
        >
          <img src="/pic1.png" alt="" className=" w-[600px]" />
        </motion.div>
 
      <div className=" h-full w-full">
        
        <div className="flex p-5 flex-col h-full items-center justify-center ">
          <motion.div
            initial={{ x: -700, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              type: 'spring',
              duration: 2,
              delay: 1.5,
            }}
            className=" text-6xl t mb-9  text-center items-center font-black italic tracking-widest text-t"
          >
           Hi I'm <span className='text-t text-7xl '>Sohaila</span> 
          </motion.div>
        
       
          <motion.div
            initial={{ opacity: 0, x: 700 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeInOut',
              type: 'spring',
              duration: 2,
              delay: 1.5,
            }}
            className=" text-4xl ml-0 font-black italic sm:ml-[70px] tracking-widest text-white"
          >
         <span id="element"> Front End Developer</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 700 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeInOut',
              type: 'spring',
              duration: 2,
              delay: 1.5,
            }}
            className=" text-lg  ml-0 italic mt-9  sm:ml-11  text-white"
          >
            

            My name is Soheila, and I am an enthusiastic and ambitious Front-End Developer with a strong passion for designing and
             developing innovative and efficient user interfaces. I have experience with HTML, CSS, and JavaScript, 
             as well as libraries and frameworks like React and Vue.js. I enjoy transforming creative ideas into interactive
              and user-friendly websites and applications. I am always eager to continue learning and developing my skills to stay up-to-date with the latest trends and technologies in web development.

         
          </motion.div>
      
        </div>

      </div>
      
     </div>

  );
}

export default Splash;