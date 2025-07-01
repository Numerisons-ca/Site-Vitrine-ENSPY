import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function GenieCivil() {

  const specialisations = [
    {
      titre: "Première année de Spécialisation",
      description: "Les étudiants du premier cycle ou admis sur titre sont initiés aux sciences appliquées spécifiques et essentielles par l’enseignement des mathématiques appliquées et de l’informatique mécanique appliquée, des matériaux et de la géologie. Aux technologies et aux techniques pour les leçons de topographie. Dessin, architecture, technologies du bâtiment, etc.",
      matieres: [
      
      ]
    },
    {
      titre: "Deuxième année de Spécialisation",
      description: "De plus en plus d’enseignements de caractère professionnels s’organisent autour de :",
      matieres: [
        ". Techniques de conception pour les travaux en GC",
        ". Techniques de construction",
        ". Stages professionnels"
      ]
    },
    {
      titre: "Dernier semestre & stage de 6 mois",
      description: "Les leçons sont principalement des projets pour lesquels les objectifs sont de donner un pôle professionnel aux futurs ingénieurs (génie urbain. Bâtiments, Travaux publics). Quelques enseignements théoriques à ce niveau sont fournis afin de permettre aux futurs ingénieurs de passer au troisième cycle pour ceux qui le souhaitent.",
      matieres: [
      
      ]
    }
  ];

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
    

<div className="relative">
  {/* Section d'arrière-plan avec image */}
  <div className="relative h-[400px] lg:h-[500px]  from-blue-600 to-orange-400 overflow-hidden"
    style={{ 
          backgroundImage: "url('https://i.pinimg.com/736x/cc/90/98/cc909805bfbabaed195b358126ff6daa.jpg')", 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
          }}>
    {/* Overlay d'image */}
    <div className="absolute inset-0  flex items-center justify-center"
        
    >
      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/30 transition">
        
      </div>
    </div>
  </div>

  {/* Conteneur de texte à cheval */}
  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
    <div className="bg-white p-6 lg:p-8 rounded-xl shadow-xl border border-gray-100">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
        Génie civil & Urbain
      </h1>
      <p>
                        La pratique de la profession de génie civil au Cameroun connaît de profonds changements au cours des dernières décennies.
                        L’ordinateur a remplacé la calculatrice ainsi que la table à dessin. Le boulier traditionnel a été détrôné par des assortiments variés, constamment mis à jour, de logiciels haute performance et de plus en plus sophistiqués.
                      </p>
                      <p>
                        Les technologies de l’information et de la communication ont pris pied dans le génie civil, comme ailleurs dans tous les secteurs clés de l’économie. Les programmes de formation d’aujourd’hui et de demain doivent intégrer ces facteurs. Ils doivent être renforcés en mathématiques et en informatique afin de permettre à l’étudiant ingénieur :
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>Construire ses algorithmes et les implémenter par ordinateur</li>
                        <li>Faire de la recherche documentaire en ligne</li>
                        <li>Pratiquer dans les laboratoires et les chantiers virtuels entièrement disponibles sur internet</li>
                      </ul>
                      <p>
                        Dans un environnement socio-économique qui ne se prête guère à l’investissement dans la formation post-universitaire, le jeune diplômé doit être suffisamment équipé pour :
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>Travailler dans des bureaux d’études</li>
                        <li>Gérer un site de la programmation à l’exécution</li>
                        <li>Répondre aux appels d’offres</li>
                        <li>Produire un dossier d’exécution</li>
                        <li>Réaliser un montage de projet de financement</li>
                      </ul>
                      <p>
                        Les programmes de génie civil que nous proposons intègrent toutes ces préoccupations et permettent aux futurs ingénieurs que nous formons d’exercer non seulement dans le domaine des BTP, mais aussi dans les domaines des banques, des assurances, de l’environnement et au sein des collectivités locales.
                      </p>
                      <p>
                        Les ingénieurs de génie civil sont destinés à la conception et à la réalisation d’ouvrages, d’infrastructures et bâtiments, à l’innovation et au développement de nouveaux matériaux et de nouvelles techniques de construction, à la gestion de grands projets de construction. Plusieurs masters et masters spécialisés leur sont rattachés.
                      </p>
    </div>
  </div>

  {/* Section vide pour l'espace du texte (ajustez la hauteur selon besoin) */}
  <div className="h-85"></div>
</div>

      {/* Video Section Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <Button variant="ghost" className="w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-700">
            <Play className="w-8 h-8 text-white ml-1" />
          </Button>
        </div>
      </div>

      {/* Specialisations Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialisations.map((spec, index) => (
            <Card key={index} className="bg-purple-100 border-0">
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
          ))}
        </div>
      </div>

      {/* Chef de département Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Chef de département
          </h2>
          
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900">Pr MANJIA MARCELINE BLANCHE</h3>
            
            <p className="text-sm text-gray-500">Maitre de Conférences</p>
          </div>

          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
           Le département de Génie Civil forme des ingénieurs polyvalents capables de répondre aux défis de construction moderne tout en intégrant les innovations technologiques et les enjeux environnementaux.
          </p>
        </div>

       
      </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-30">
        <ProfessorCard name="MANJIA Marcelline Blanche" grade="MC" specialty="Génie Civil" email="marcelline.zang@univ-yaounde1.cm" />
          <ProfessorCard name="Chrispin PETTANG" grade="PR" specialty="Génie Civil" email="chrispin.pettang@univ-yaounde1.cm" />
          <ProfessorCard name="Thomas TAMO TATIETSE" grade="PR" specialty="Génie Civil" email="thom2t@yahoo.fr" />
          <ProfessorCard name="AYINA OHANDJA M" grade="PR" specialty="Génie Civil" email="louis.ayina@univ-yaounde1.cm" />
          <ProfessorCard name="MAMBA MPELE D" grade="PR" specialty="Génie Civil" email="mpele.mamba@univ-yaounde1.cm" />
          <ProfessorCard name="MADJADOUMBAYE J" grade="MC" specialty="Génie Civil" email="jeremie.doumbaye@univ-yaounde1.cm" />
          <ProfessorCard name="MBESSA M" grade="MC" specialty="Génie Civil" email="michel.mbessa@univ-yaounde1.cm" />
          <ProfessorCard name="MESSI Alfred" grade="MC" specialty="Génie Civil" email="alfred.messi@univ-yaounde1.cm" />
          <ProfessorCard name="NGNIKAM E" grade="MC" specialty="Génie Civil" email="emmanuel.ngnikam@univ-yaounde1.cm" />
          <ProfessorCard name="NJANKOUO" grade="MC" specialty="Génie Civil" email="njankouo@gmail.com" />
          <ProfessorCard name="LEZIN SEBA M" grade="MC" specialty="Génie Civil" email="seba.lezin@univ-yaounde1.cm" />
          <ProfessorCard name="NTAMACK D" grade="MC" specialty="Génie Civil" email="denis.ntamack@univ-yaounde1.cm" />
          <ProfessorCard name="Deodonne KUNWUFINE" grade="CC" specialty="Génie Civil" email="kunwufine.deodonne@univ-yaounde1.cm" />
          <ProfessorCard name="NIMPA Giscard Desting" grade="CC" specialty="Génie Civil" email="Non disponible" />
          <ProfessorCard name="MINANE Jacques Rémy" grade="CC" specialty="Génie Civil" email="Non disponible" />
          <ProfessorCard name="OKPWE MBARGA Richard P." grade="CC" specialty="Génie Civil" email="richard.okpwe@univ-yaounde1.cm" />
          <ProfessorCard name="PETTANG NANA Ursula Joyce M." grade="CC" specialty="Génie Civil" email="merveilles.pettang@univ-yaounde1.cm" />
          <ProfessorCard name="MBALLA ELOUMOU L" grade="Ass" specialty="Génie Civil" email="Non disponible" />
          <ProfessorCard name="BOCK HYENG C" grade="Ass" specialty="Génie Civil" email="christian.bock@univ-yaounde1.cm" />
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