'use client';

import { Play } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotionDiv , MotionNav, MotionH2, MotionTable} from "@/components/animation/MotionDiv";
import {useInView} from "react-intersection-observer";
import { useState, useEffect } from "react";


interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

const images = [
  "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
];

// Composant animé
const AnimatedSection = ({ children, delay = 0 }:AnimatedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </MotionDiv>
  );
};

export default function GenieElectriquePage() {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);
  const professeurs = [
  {
    name: "MANJIA Marcelline Blanche",
    grade: "MC",
    specialty: "Génie Civil",
    email: "marcelline.zang@univ-yaounde1.cm"
  },
  {
    name: "Chrispin PETTANG",
    grade: "PR",
    specialty: "Génie Civil",
    email: "chrispin.pettang@univ-yaounde1.cm"
  },
  {
    name: "Thomas TAMO TATIETSE",
    grade: "PR",
    specialty: "Génie Civil",
    email: "thom2t@yahoo.fr"
  },
  {
    name: "AYINA OHANDJA M",
    grade: "PR",
    specialty: "Génie Civil",
    email: "louis.ayina@univ-yaounde1.cm"
  },
  {
    name: "MAMBA MPELE D",
    grade: "PR",
    specialty: "Génie Civil",
    email: "mpele.mamba@univ-yaounde1.cm"
  },
  {
    name: "MADJADOUMBAYE J",
    grade: "MC",
    specialty: "Génie Civil",
    email: "jeremie.doumbaye@univ-yaounde1.cm"
  },
  {
    name: "MBESSA M",
    grade: "MC",
    specialty: "Génie Civil",
    email: "michel.mbessa@univ-yaounde1.cm"
  },
  {
    name: "MESSI Alfred",
    grade: "MC",
    specialty: "Génie Civil",
    email: "alfred.messi@univ-yaounde1.cm"
  },
  {
    name: "NGNIKAM E",
    grade: "MC",
    specialty: "Génie Civil",
    email: "emmanuel.ngnikam@univ-yaounde1.cm"
  },
  {
    name: "NJANKOUO",
    grade: "MC",
    specialty: "Génie Civil",
    email: "njankouo@gmail.com"
  },
  {
    name: "LEZIN SEBA M",
    grade: "MC",
    specialty: "Génie Civil",
    email: "seba.lezin@univ-yaounde1.cm"
  },
  {
    name: "NTAMACK D",
    grade: "MC",
    specialty: "Génie Civil",
    email: "denis.ntamack@univ-yaounde1.cm"
  },
  {
    name: "Deodonne KUNWUFINE",
    grade: "CC",
    specialty: "Génie Civil",
    email: "kunwufine.deodonne@univ-yaounde1.cm"
  },
  {
    name: "NIMPA Giscard Desting",
    grade: "CC",
    specialty: "Génie Civil",
    email: "Non disponible"
  },
  {
    name: "MINANE Jacques Rémy",
    grade: "CC",
    specialty: "Génie Civil",
    email: "Non disponible"
  },
  {
    name: "OKPWE MBARGA Richard P.",
    grade: "CC",
    specialty: "Génie Civil",
    email: "richard.okpwe@univ-yaounde1.cm"
  },
  {
    name: "PETTANG NANA Ursula Joyce M.",
    grade: "CC",
    specialty: "Génie Civil",
    email: "merveilles.pettang@univ-yaounde1.cm"
  },
  {
    name: "MBALLA ELOUMOU L",
    grade: "Ass",
    specialty: "Génie Civil",
    email: "Non disponible"
  },
  {
    name: "BOCK HYENG C",
    grade: "Ass",
    specialty: "Génie Civil",
    email: "christian.bock@univ-yaounde1.cm"
  }
];


  const specialisations = [
    {
      titre: "Première année de Spécialisation",
      description: "Les étudiants du premier cycle ou admis sur titre sont initiés aux sciences appliquées spécifiques et essentielles par l'enseignement des mathématiques appliquées et de l'informatique mécanique appliquée, des matériaux et de la géologie. Aux technologies et aux techniques pour les leçons de topographie. Dessin, architecture, technologies du bâtiment, etc.",
      matieres: []
    },
    {
      titre: "Deuxième année de Spécialisation",
      description: "De plus en plus d'enseignements de caractère professionnels s'organisent autour de :",
      matieres: [
        ". Techniques de conception pour les travaux en GC",
        ". Techniques de construction",
        ". Stages professionnels"
      ]
    },
    {
      titre: "Dernier semestre & stage de 6 mois",
      description: "Les leçons sont principalement des projets pour lesquels les objectifs sont de donner un pôle professionnel aux futurs ingénieurs (génie urbain. Bâtiments, Travaux publics). Quelques enseignements théoriques à ce niveau sont fournis afin de permettre aux futurs ingénieurs de passer au troisième cycle pour ceux qui le souhaitent.",
      matieres: []
    }
  ];

  const tablesMatieres = {
    niveau3: [
      { code: "GC301", intitule: "Mathématiques Appliquées III", credits: 4 },
      { code: "GC302", intitule: "Mécanique des Solides", credits: 3 },
      { code: "GC303", intitule: "Topographie Appliquée", credits: 4 },
      { code: "GC304", intitule: "Technologie des Matériaux", credits: 3 },
      { code: "GC305", intitule: "Dessin Technique Assisté par Ordinateur", credits: 3 }
    ],
    niveau4: [
      { code: "GC401", intitule: "Mécanique des Fluides", credits: 4 },
      { code: "GC402", intitule: "Résistance des Matériaux", credits: 4 },
      { code: "GC403", intitule: "Géotechnique I", credits: 3 },
      { code: "GC404", intitule: "Béton Armé I", credits: 3 },
      { code: "GC405", intitule: "Métrologie et Contrôle Qualité", credits: 3 }
    ],
    niveau5: [
      { code: "GC501", intitule: "Génie Urbain", credits: 4 },
      { code: "GC502", intitule: "Ouvrages d'Art", credits: 4 },
      { code: "GC503", intitule: "Gestion de Chantier", credits: 3 },
      { code: "GC504", intitule: "Environnement et Développement Durable", credits: 3 },
      { code: "GC505", intitule: "Projet de Fin d'Études", credits: 6 }
    ]
  };

  type ProfessorCardProps = {
    name: string;
    grade: string;
    specialty: string;
    email: string;
  };

  const ProfessorCard = ({ name, grade, specialty, email }: ProfessorCardProps) => {
    return (
      <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-yellow-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardContent className="p-4 md:p-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-3 md:mb-4"></div>
          <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 dark:text-white">
            <strong>{name}</strong>
          </h3>
          <p className="text-orange-500 dark:text-orange-400 font-medium mb-2 md:mb-3">
            Grade: {grade}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 md:mb-4">
            Spécialité: {specialty} <br />
            Email:{" "}
            <a 
              href={`mailto:${email}`} 
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              {email || "Non disponible"}
            </a>
          </p>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-orange-50">
      {/* Navigation */}
      <MotionNav
        className="bg-white shadow-sm border-b"
        initial={{ y : -100}}
        animate={{ y :0}}
        transition={{ duration:0.5}}
        >


          <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ENSPY</span>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <a href="\" className="text-gray-600 hover:text-gray-900">Accueil</a>
                <a href="#" className="text-orange-500 font-medium">Départements</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">E-learning</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Accréditations</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Personnels</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Contactez-nous</a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
        </MotionNav>

      {/* Hero Section */}
     
      <div className="relative">


         <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
      {/* Carrousel d'images avec transitions */}
      {images.map((img, index) => (
        <MotionDiv
          key={img}
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-orange-400/20"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentImage ? 1 : 0,
            scale: index === currentImage ? 1 : 1.05
          }}
          transition={{
            duration: 1.5,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
        />
      ))}

      {/* Overlay et éléments décoratifs */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/30 transition">
          <Play className="w-8 h-8 text-white ml-1" />
        </div>
      </div>

      {/* Gradient et éléments décoratifs en bas */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900/60 to-transparent">
        <div className="absolute bottom-6 left-6">
          <MotionDiv 
            className="w-8 h-20 bg-orange-300/60 rounded-sm"
            animate={{
              height: ["20px", "60px", "20px"],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>

                    
        

        <AnimatedSection delay={0.3}>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
            <MotionDiv 
              className="bg-[rgba(255,255,255,0.3)] backdrop-blur-sm p-6 lg:p-8 rounded-xl shadow-xl border border-gray-100"
              whileHover={{ scale: 1.01 }}
            >
              {/* ... votre contenu hero existant ... */}
              

                   
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
                          Génie civil & Urbain
                        </h1>
                        <p className="text-gray-700">
                          La pratique de la profession de génie civil au Cameroun connaît de profonds changements au cours des dernières décennies.
                          L'ordinateur a remplacé la calculatrice ainsi que la table à dessin. Le boulier traditionnel a été détrôné par des assortiments variés, constamment mis à jour, de logiciels haute performance et de plus en plus sophistiqués.
                        </p>
                        <p className="text-gray-700 mt-4">
                          Les technologies de l'information et de la communication ont pris pied dans le génie civil, comme ailleurs dans tous les secteurs clés de l'économie. Les programmes de formation d'aujourd'hui et de demain doivent intégrer ces facteurs.
                        </p>
                    
                    <div className="h-22 lg:h-20"></div>
            </MotionDiv>
          </div>
        </AnimatedSection>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
        

        <AnimatedSection delay={1.4}>
          
            {/* ... votre description existante ... */}
            {/* Detailed Description */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Description du Département</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Ils doivent être renforcés en mathématiques et en informatique afin de permettre à l'étudiant ingénieur :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Construire ses algorithmes et les implémenter par ordinateur</li>
              <li>Faire de la recherche documentaire en ligne</li>
              <li>Pratiquer dans les laboratoires et les chantiers virtuels entièrement disponibles sur internet</li>
            </ul>
            <p>
              Dans un environnement socio-économique qui ne se prête guère à l'investissement dans la formation post-universitaire, le jeune diplômé doit être suffisamment équipé pour :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Travailler dans des bureaux d'études</li>
              <li>Gérer un site de la programmation à l'exécution</li>
              <li>Répondre aux appels d'offres</li>
              <li>Produire un dossier d'exécution</li>
              <li>Réaliser un montage de projet de financement</li>
            </ul>
            <p>
              Les programmes de génie civil que nous proposons intègrent toutes ces préoccupations et permettent aux futurs ingénieurs que nous formons d'exercer non seulement dans le domaine des BTP, mais aussi dans les domaines des banques, des assurances, de l'environnement et au sein des collectivités locales.
            </p>
            <p>
              Les ingénieurs de génie civil sont destinés à la conception et à la réalisation d'ouvrages, d'infrastructures et bâtiments, à l'innovation et au développement de nouveaux matériaux et de nouvelles techniques de construction, à la gestion de grands projets de construction. Plusieurs masters et masters spécialisés leur sont rattachés.
            </p>
          </div>
        </div>
          
        </AnimatedSection>

        {/* Video Section */}
        <AnimatedSection delay={0.5}>
          <MotionDiv 
            className="mb-12 rounded-xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="aspect-w-9 aspect-h-16">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/kSTLC4bDj64"
                title="Présentation Génie Civil"
                allowFullScreen
              />
            </div>
          </MotionDiv>
        </AnimatedSection>

        {/* Specialisations Section */}
        <AnimatedSection delay={0.5}>
          <div className="mb-12">

          <MotionH2 
              className="text-2xl font-bold text-gray-800 mb-6 text-center"
              whileInView={{ scale: [0.95, 1], opacity: [0.8, 1] }}
              transition={{ duration: 0.5 }}
            >
              Parcours de Spécialisation
          </MotionH2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialisations.map((spec, index) => (
              <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-purple-100 border-0 hover:shadow-lg transition-all">
                    {/* ... votre contenu de spécialisation ... */}
                    <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {spec.titre}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {spec.description}
                  </p>
                  <div className="space-y-2">
                    {spec.matieres.map((matiere, idx) => (
                      <div key={idx} className="text-xs text-gray-700 font-medium">
                        {matiere}
                      </div>
                    ))}
                  </div>
                </CardContent>
                  </Card>
              </MotionDiv>
             
            ))}
          </div>
        </div>
        </AnimatedSection>

        {/* Tables des Matières */}
        <AnimatedSection delay={1.6}>
            <div className="mb-12">
              <MotionH2
              className="text-2xl font-bold text-gray-800 mb-6 text-center"
              whileInView={{ x: [-20, 0], opacity: [1.8, 2] }}
              transition={{ duration: 1 }}
            >
              Tables des Matières par Niveau
            </MotionH2>
              
              {/* Niveau 3 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Niveau 3 (Première Année de Spécialisation)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Intitulé</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crédits</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {tablesMatieres.niveau3.map((matiere, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{matiere.code}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{matiere.intitule}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{matiere.credits}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
          
          
          {/* Niveau 4 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Niveau 4 (Deuxième Année de Spécialisation)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Intitulé</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crédits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tablesMatieres.niveau4.map((matiere, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{matiere.code}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{matiere.intitule}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{matiere.credits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Niveau 5 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Niveau 5 (Dernière Année)</h3>
            
          </div>
          <MotionTable
              className="min-w-full bg-white border border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
            >
              {/* ... contenu du tableau ... */}
              
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Intitulé</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crédits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tablesMatieres.niveau5.map((matiere, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{matiere.code}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{matiere.intitule}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{matiere.credits}</td>
                    </tr>
                  ))}
                </tbody>
              
            </MotionTable>
        </div>
        </AnimatedSection>

        {/* Grille de Compétences */}
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Grille de Compétences</h2>
          <p className="text-gray-700 mb-6">
            À la fin de la formation, les étudiants acquièrent un ensemble de compétences techniques et professionnelles. Téléchargez la grille complète des compétences pour voir en détail ce que vous maîtriserez à l'issue du programme.
          </p>
          <a
              href="/documents/grille-competences.pdf" // chemin vers ton fichier PDF
              download
            >
            <Button className="bg-orange-500 hover:bg-orange-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Télécharger la Grille de Compétences (PDF)
            </Button>
            </a>
        </div>

        {/* Chef de département Section */}
       

        <AnimatedSection delay={0.8}>
          <div className="mb-12 text-center">
            <MotionDiv
              className="flex flex-col items-center mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <MotionDiv 
                className="w-24 h-24 bg-gray-200 rounded-full mb-4"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 5 
                }}
              />
              {/* ... votre contenu chef de département ... */}
              <h3 className="text-xl font-semibold text-gray-900">Pr MANJIA MARCELINE BLANCHE</h3>
            <p className="text-sm text-gray-500">Maitre de Conférences</p>

            </MotionDiv>

            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Le département de Génie Civil forme des ingénieurs polyvalents capables de répondre aux défis de construction moderne tout en intégrant les innovations technologiques et les enjeux environnementaux.
          </p>
          </div>
        </AnimatedSection>

        {/* Professeurs Grid */}
       

        <AnimatedSection delay={0.9}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Notre Équipe Pédagogique
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {professeurs.map((prof, index) => (
                <MotionDiv
                  key={index}
                  
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <ProfessorCard {...prof} />
                </MotionDiv>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6">
        <Button className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 shadow-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4-8 9-8s9 3.582 9 8z" />
          </svg>
        </Button>
      </div>
    </div>
  );
}