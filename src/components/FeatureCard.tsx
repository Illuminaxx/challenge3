import  {motion, useScroll, useTransform} from 'framer-motion';

import analyticsIcon from '../assets/Icon wrapper.png';
import codeSnippetImg from '../assets/ImagecodeCollab.png';
import collaborationIcon from '../assets/Icon Imagecode.png';
import tokensIcon from '../assets/Icon Image.png';
import { useRef } from 'react';

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 }
};

const FeatureSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <div className="py-12 text-white mt-9" id='features'>
      <div  className="flex flex-col items-center justify-center max-w-sm mx-auto">
        <h2 className="font-montserrat text-48 leading-57.6 tracking-o font-medium spacing text-center">Features that work for your future.</h2>
        <p className="font-montserrat font-normal text-18 leading-28.8 text-center w-470 h-58 mt-34">Check out our amazing features and experience the power of Vaultflow for yourself.</p>
      </div>
      <div className="container mx-auto px-4 mt-80">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 justify-center items-center">
            <motion.div variants={cardVariants} initial="rest" whileHover="hover" transition={{ duration: 0.3, ease: "easeInOut" }} className="bg-violet rounded-20 p-6 custom-shadow hover:shadow-2xl transition w-578 h-372">
              <div className="flex justify-start">
                <img src={analyticsIcon} alt="Analytics Dashboard" className="h-12 mb-4" />
              </div>
              <h3 className="font-medium text-32 font-montserrat leading-41.6 mb-3 text-left">Analytics Dashboard</h3>
              <p className="text-left">Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.</p>
              <a href="#" className="inline-block text-sm font-medium leading-6 mt-26 font-montserrat text-16 underline">
                  View dashboard
                </a>
            </motion.div>


            <motion.div variants={cardVariants} initial="rest" whileHover="hover" transition={{ duration: 0.3, ease: "easeInOut" }} className="bg-violet backdrop-filter backdrop-blur-lg rounded-20 p-6 custom-shadow hover:shadow-2xl transition w-578 h-372">
              <div className="flex justify-start">
                <img src={tokensIcon} alt="Digital Credit Tokens" className="h-12 mb-4" />
              </div>
              <h3 className="font-medium text-32 font-montserrat leading-41.6 mb-3 text-left">Digital Credit Tokens</h3>
              <p className="text-left">Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.</p>
              <a href="#" className="inline-block text-sm font-medium leading-6 mt-26 font-montserrat text-16 underline">
                  View tokens
                </a>
            </motion.div>
          </div>


          {/* Card 3 */}
          <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress}} className="md:col-span-2 bg-violet rounded-20 p-6 custom-shadow hover:shadow-2xl transition w-1180 mt-80 mb-60">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <img src={collaborationIcon} alt="Code Collaboration" className="h-12 mb-4" />
                <h3 className="font-bold text-xl mb-3 text-white">Code Collaboration</h3>
                <p className="font-montserrat font-normal text-14 leading-21">Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.</p>
                <a href="#" className="inline-block text-sm font-medium leading-6 mt-26 font-montserrat text-16 underline">
                  View code collaboration
                </a>
              </div>
              <div className="flex-none ml-4">
                <img src={codeSnippetImg} alt="Code Snippet" className="w-auto h-auto rounded-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
