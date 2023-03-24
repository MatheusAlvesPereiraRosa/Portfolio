import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { image } from '../assets'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div className='flex xl:flex-row md:flex-row sm:flex-col sm:items-center'>
        <motion.div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introdução</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Sou um desenvolvedor de software, e tenho experiência em desenvolvimento
            com javascript (tanto no front como no back) utilizando frameworks como React, Vue, Node.js e recentemente React Native
            (devido ao meu TCC que propôs o desenvolvimento de um APP).
            Gosto de aprender, tenho bastante empenho no meu trabalho e já tenho experiência atuando
            na área. Vamos trabalhar juntos e trazer as ideias para o mundo real!
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='w-[350px] rounded-[50%] h-auto object-contain ml-12 sm:mt-12'
        >
          <img
            src={image}
            alt="Matheus Alves"
            className='w-[350px] rounded-[50%] h-auto object-contain'
          />
        </motion.div>
      </motion.div>

      <div className='mt-20 flex justify-center flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")