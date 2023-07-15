import React from 'react';
import footballImg from '@/public/assets/projects/football.png';
import figaroImg from '@/public/assets/projects/figaro.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projets
        </p>
        <h2 className='py-4'>{`Ce que j'ai fais`}</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Premier League Info'
            backgroundImg={footballImg}
            projectUrl='/football'
            tech='Next Js'
          />
           <ProjectItem
            title='Figaro Sport24'
            backgroundImg={figaroImg}
            projectUrl='/figaro'
            tech='Php / React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;