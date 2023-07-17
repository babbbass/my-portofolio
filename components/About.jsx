import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

export default function About() {
  return (
    <div id='about' className='w-full  flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            A propos
          </p>
          <h2 className='py-4'>Qui je suis</h2>
          <p className='py-2 text-gray-600'>
           {`En tant que développeur PHP/Symfony avec plus de 10 ans d'expérience.
              J'ai travaillé avec des startups  ainsi que des grandes entreprises, me donnant une vision complète de l'industrie.
              J'ai développé de nombreux sites Web tout au long de ma carrière, en utilisant principalement PHP et Symfony comme technologies clés.
              
              Au fil des années, j'ai également élargi mon champ de compétences en me familiarisant avec des technologies complémentaires. Je suis à l'aise avec l'utilisation de Typescript, ReactJs et le framework NextJs, qui me permettent de créer des interfaces utilisateur interactives et conviviales.
              Je possède également de solides compétences en bases de données SQL, ce qui me permet de concevoir
              et de gérer efficacement les systèmes de stockage de données pour les sites et les applications. J'ai une bonne compréhension des concepts clés de la modélisation de bases de données relationnelles et je peux optimiser les requêtes pour des performances optimales.`}
          </p>
          <p className='py-2 text-gray-600'>
          {`Enfin, j'ai une expérience approfondie des intégrations continues, ce qui me permet d'automatiser les processus de déploiement et de tests. Grâce à cette approche, je peux garantir une livraison continue et une qualité de code supérieure.

Avec mon expérience diversifiée et mes compétences techniques solides, je suis capable de relever les défis liés au développement web, que ce soit pour des projets de petite ou de grande envergure. Je suis passionné par mon travail, toujours à l'affût des dernières tendances et technologies, et je suis prêt à apporter ma contribution à des équipes de développement dynamiques et innovantes.`}
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Mes derniers projets.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
}
