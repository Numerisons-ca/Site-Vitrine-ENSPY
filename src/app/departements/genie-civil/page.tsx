"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const ProfessorCard = ({ name, grade, specialty, email }) => {
    return (
    
        <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg mb-2"> <strong>{name}</strong></h3>
                <p className="text-orange-500 font-medium mb-3">     Grade: {grade}</p>
                <p className="text-sm text-gray-600 mb-4">
                 Spécialité: {specialty} <br/>
                         Adresse email: <a href="mailto" className="text-blue-500 underline">{email || "Non disponible"} </a>
                </p>
    
              </CardContent>
            </Card>
    );
};

export default function GenieCivil() {
    return (
        <div className="container mx-auto p-4">
            <div className=" bg-white bg-opacity-90 p-6 rounded-lg dark:greeb-50" style={{ backgroundImage: "url('https://i.pinimg.com/736x/ea/ed/a6/eaeda6ffb5f47e58cd29993527a7ac3d.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <Card className=" m-14 p-10  bg-pink-50">
                    <CardHeader>
                        <h1 className="text-center text-3xl font-bold text-black">Génie civil & urbain</h1>
                    </CardHeader>
                    <CardContent>
                        <p className="mt-2 text-black">
                            La pratique de la profession de génie civil au Cameroun connaît de profonds changements au cours des dernières décennies.
                            L’ordinateur a remplacé la calculatrice ainsi que la table à dessin. Le boulier traditionnel a été détrôné par des assortiments variés, constamment mis à jour, de logiciels haute performance et de plus en plus sophistiqués.
                            Les technologies de l’information et de la communication ont pris pied dans le génie civil, comme ailleurs dans tous les secteurs clés de l’économie. Les programmes de formation d’aujourd’hui et de demain doivent intégrer ces facteurs. Ils doivent être renforcés en mathématiques et en informatique afin de permettre à l’étudiant ingénieur :
                            <ul className="list-disc list-inside mt-2">
                                <li>Construire ses algorithmes et les implémenter par ordinateur</li>
                                <li>Faire de la recherche documentaire en ligne</li>
                                <li>Pratiquer dans les laboratoires et les chantiers virtuels entièrement disponibles sur internet</li>
                            </ul>
                            Dans un environnement socio-économique qui ne se prête guère à l’investissement dans la formation post-universitaire, le jeune diplômé doit être suffisamment équipé pour :
                            <ul className="list-disc list-inside mt-2">
                                <li>Travailler dans des bureaux d’études</li>
                                <li>Gérer un site de la programmation à l’exécution</li>
                                <li>Répondre aux appels d’offres</li>
                                <li>Produire un dossier d’exécution</li>
                                <li>Réaliser un montage de projet de financement</li>
                            </ul>
                            Les programmes de génie civil que nous proposons intègrent toutes ces préoccupations et permettent aux futurs ingénieurs que nous formons d’exercer non seulement dans le domaine des BTP, mais aussi dans les domaines des banques, des assurances, de l’environnement et au sein des collectivités locales.
                            Les ingénieurs de génie civil sont destinés à la conception et à la réalisation d’ouvrages, d’infrastructures et bâtiments, à l’innovation et au développement de nouveaux matériaux et de nouvelles techniques de construction, à la gestion de grands projets de construction. Plusieurs masters et masters spécialisés leur sont rattachés.
                        </p>
                    </CardContent>
                </Card>
                <div className="mt-4 w-2/3 h-64 bg-gray-200 flex items-center justify-center mx-auto">
                    <span className="text-gray-500">Video Placeholder</span>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 ">
                <Card className="bg-yellow-300">
                    <CardHeader>
                        <h2 className="font-semibold text-black">Première année de Spécialisation</h2>
                    </CardHeader>
                    <CardContent>
                        <p className="text-black">Les ­étudiants du premier cycle ou admis sur titre sont initiés aux sciences appliquées ­spécifiques et essentielles par l’enseignement des mathématiques appliquées et de l’informatique mécanique appliquée, des matériaux et de la géologie. Aux technologies et aux techniques pour les leçons de topographie. Dessin, architecture, technologies du bâtiment, etc.</p>
                    </CardContent>
                </Card>
                <Card className="bg-yellow-200">
                    <CardHeader>
                        <h2 className="font-semibold text-black">Deuxième année de Spécialisation</h2>
                    </CardHeader>
                    <CardContent>
                        <p className="text-black">De plus en plus d’enseignements de caractère professionnels s’organisent autour de :
                            <ul className="list-disc list-inside mt-2">
                                <li> Techniques de conception pour les travaux en GC ;</li>
                                <li> Techniques de construction ;</li>
                                <li> Stages ;</li>
                            </ul>
                            </p>
                    </CardContent>
                </Card>
                <Card className="bg-yellow-100">
                    <CardHeader>
                        <h2 className="font-semibold text-black">Dernier semestre & stage de 6 mois</h2>
                    </CardHeader>
                    <CardContent>
                        <p className="text-black">Les leçons sont principalement des projets pour lesquels les objectifs sont de donner un ­pôle professionnel aux futurs ingénieurs (génie urbain. Bâtiments, Travaux publics). Quelques enseignements théoriques à ce niveau sont fournis afin de permettre aux futurs ingénieurs de passer au troisième cycle pour ceux qui le souhaitent.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="mt-8 bg-yellow-100 p-6 rounded-lg">
                <h2 className=" text-center text-xl font-semibold text-black">Chef de département</h2>
                <div className="w-1/2 mx-auto">

         <Card className="bg-green-50">
                <CardHeader>
                    <strong>MANJIA Marcelline Blanche</strong>
                </CardHeader>
                <CardContent>
                    <p>
                        Grade: MC 
                    </p>
                </CardContent>
        </Card>
                </div>
                <p className="mt-2 text-black">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                <ProfessorCard name="MANJIA Marcelline Blanche" grade="MC" specialty="Génie Civil" email="marcelline.zang@univ-yaounde1.cm"  />
                <ProfessorCard name="Chrispin PETTANG" grade="PR" specialty="Génie Civil" email="chrispin.pettang@univ-yaounde1.cm"  />
                <ProfessorCard name="Thomas TAMO TATIETSE" grade="PR" specialty="Génie Civil" email="thom2t@yahoo.fr"  />
                <ProfessorCard name="AYINA OHANDJA M" grade="PR" specialty="Génie Civil" email="louis.ayina@univ-yaounde1.cm"  />
                <ProfessorCard name="MAMBA MPELE D" grade="PR" specialty="Génie Civil" email="mpele.mamba@univ-yaounde1.cm"  />
                <ProfessorCard name="MADJADOUMBAYE J" grade="MC" specialty="Génie Civil" email="jeremie.doumbaye@univ-yaounde1.cm"  />
                <ProfessorCard name="MBESSA M" grade="MC" specialty="Génie Civil" email="michel.mbessa@univ-yaounde1.cm"  />
                <ProfessorCard name="MESSI Alfred" grade="MC" specialty="Génie Civil" email="alfred.messi@univ-yaounde1.cm"  />
                <ProfessorCard name="NGNIKAM E" grade="MC" specialty="Génie Civil" email="emmanuel.ngnikam@univ-yaounde1.cm"  />
                <ProfessorCard name="NJANKOUO" grade="MC" specialty="Génie Civil" email="njankouo@gmail.com"  />
                <ProfessorCard name="LEZIN SEBA M" grade="MC" specialty="Génie Civil" email="seba.lezin@univ-yaounde1.cm"  />
                <ProfessorCard name="NTAMACK D" grade="MC" specialty="Génie Civil" email="denis.ntamack@univ-yaounde1.cm"  />
                <ProfessorCard name="Deodonne KUNWUFINE" grade="CC" specialty="Génie Civil" email="kunwufine.deodonne@univ-yaounde1.cm"  />
                <ProfessorCard name="NIMPA Giscard Desting" grade="CC" specialty="Génie Civil" email="Non disponible"  />
                <ProfessorCard name="MINANE Jacques Rémy" grade="CC" specialty="Génie Civil" email="Non disponible"  />
                <ProfessorCard name="OKPWE MBARGA Richard P." grade="CC" specialty="Génie Civil" email="richard.okpwe@univ-yaounde1.cm"  />
                <ProfessorCard name="PETTANG NANA Ursula Joyce M." grade="CC" specialty="Génie Civil" email="merveilles.pettang@univ-yaounde1.cm"  />
                <ProfessorCard name="MBALLA ELOUMOU L" grade="Ass" specialty="Génie Civil" email="Non disponible"  />
                <ProfessorCard name="BOCK HYENG C" grade="Ass" specialty="Génie Civil" email="christian.bock@univ-yaounde1.cm"  />
            </div>
        </div>
    );
}