import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function GenieMecaniquePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as main page */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PY</span>
                </div>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                  Accueil
                </Link>
                <Link href="#" className="text-orange-500 px-3 py-2 text-sm font-medium">
                  Départements
                </Link>
                <Link href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                  Vie étudiante
                </Link>
                <Link href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                  Accréditations
                </Link>
                <Link href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                  Partenariats
                </Link>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Contactez-nous
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-orange-500">
                  Accueil
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500">
                    Départements
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm font-medium text-gray-500">Génie Mécanique</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.pinimg.com/736x/6b/53/c7/6b53c7d74eeb16a7a8234fa34342e745.jpg'')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Département de Génie Mécanique
            </h1>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
              Formation d'ingénieurs dans les domaines de la conception, de la fabrication 
              et de la maintenance des systèmes mécaniques
            </p>
          </div>
        </div>
      </section>

      {/* Nouveau Laboratoire Feature */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-500 text-white mb-4">Nouveauté</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Le génie mécanique se dote d'un nouveau laboratoire
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Notre nouveau laboratoire de pointe équipé des dernières technologies permet 
                à nos étudiants de se former sur des équipements industriels modernes et 
                de développer leurs compétences pratiques.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Équipements de fabrication assistée par ordinateur (FAO)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Systèmes de mesure et de contrôle qualité
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Bancs d'essais pour moteurs et systèmes mécaniques
                </li>
              </ul>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Découvrir le laboratoire
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Spécialités du département</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Mécanique des Fluides</h4>
                  <p className="text-sm opacity-90">Hydraulique, pneumatique, turbomachines</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Thermodynamique</h4>
                  <p className="text-sm opacity-90">Systèmes énergétiques, climatisation</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Mécanique des Solides</h4>
                  <p className="text-sm opacity-90">Résistance des matériaux, structures</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Conception Mécanique</h4>
                  <p className="text-sm opacity-90">CAO, simulation, prototypage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Programmes de Formation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-orange-500">Cycle Ingénieur</CardTitle>
                <Badge variant="outline">5 ans</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Formation complète d'ingénieur en génie mécanique avec spécialisations 
                  en conception, fabrication et maintenance.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Mathématiques et sciences de l'ingénieur</li>
                  <li>• Mécanique appliquée</li>
                  <li>• Automatisme et robotique</li>
                  <li>• Gestion de projets industriels</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-orange-500">Master Recherche</CardTitle>
                <Badge variant="outline">2 ans</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Formation approfondie en recherche et développement dans les 
                  technologies mécaniques avancées.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Mécanique numérique</li>
                  <li>• Matériaux avancés</li>
                  <li>• Énergies renouvelables</li>
                  <li>• Modélisation et simulation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-orange-500">Formation Continue</CardTitle>
                <Badge variant="outline">Modulaire</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Programmes de perfectionnement professionnel pour ingénieurs 
                  et techniciens en activité.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Maintenance industrielle</li>
                  <li>• Soudage et assemblage</li>
                  <li>• Contrôle qualité</li>
                  <li>• Management technique</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Laboratoires et Équipements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Laboratoires et Équipements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 h-48 relative">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Laboratoire de Fabrication</h3>
                  <p className="text-sm opacity-90">Machines-outils CNC, imprimantes 3D, équipements de métrologie</p>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Tours et fraiseuses à commande numérique</li>
                  <li>• Centre d'usinage 5 axes</li>
                  <li>• Équipements de prototypage rapide</li>
                  <li>• Bancs de mesure dimensionnelle</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 h-48 relative">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Laboratoire Thermique</h3>
                  <p className="text-sm opacity-90">Bancs d'essais moteurs, systèmes de climatisation</p>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Banc d'essai moteurs thermiques</li>
                  <li>• Systèmes de pompes à chaleur</li>
                  <li>• Équipements de combustion</li>
                  <li>• Instruments de mesure thermique</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 h-48 relative">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Laboratoire Matériaux</h3>
                  <p className="text-sm opacity-90">Tests de résistance, analyse microstructurale</p>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Machine d'essais universelle</li>
                  <li>• Microscopes optiques et électroniques</li>
                  <li>• Équipements de traitements thermiques</li>
                  <li>• Duromètres et analyseurs de composition</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 h-48 relative">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Laboratoire Hydraulique</h3>
                  <p className="text-sm opacity-90">Systèmes hydrauliques et pneumatiques</p>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Bancs d'essais pompes et compresseurs</li>
                  <li>• Circuits hydrauliques didactiques</li>
                  <li>• Systèmes pneumatiques industriels</li>
                  <li>• Équipements de mesure de débit</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corps Professoral */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Corps Professoral
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"
                  style={{
            backgroundImage: "url('https://i.pinimg.com/736x/6b/53/c7/6b53c7d74eeb16a7a8234fa34342e745.jpg'')"
          }}
                ></div>
                <h3 className="font-bold text-lg mb-2">Prof. Dr Ing Ngohe Ekam</h3>
                <p className="text-orange-500 font-medium mb-3">Chef de Département</p>
                <p className="text-sm text-gray-600 mb-4">
                  Spécialiste en mécanique des fluides et énergétique. 
                  20 ans d'expérience dans l'industrie.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">Thermodynamique</Badge>
                  <Badge variant="secondary" className="text-xs">Turbomachines</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg mb-2">Dr. Marie ESSONO</h3>
                <p className="text-orange-500 font-medium mb-3">Professeure</p>
                <p className="text-sm text-gray-600 mb-4">
                  Experte en conception mécanique et CAO. 
                  Formatrice certifiée SolidWorks et AutoCAD.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">CAO</Badge>
                  <Badge variant="secondary" className="text-xs">Conception</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg mb-2">Ing. Paul NKOMO</h3>
                <p className="text-orange-500 font-medium mb-3">Maître de Conférences</p>
                <p className="text-sm text-gray-600 mb-4">
                  Spécialiste en maintenance industrielle et automatisation. 
                  Consultant en industrie pétrolière.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">Maintenance</Badge>
                  <Badge variant="secondary" className="text-xs">Automatisme</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projets et Partenariats */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Projets et Partenariats
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Projets de Recherche</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Énergies Renouvelables</h4>
                  <p className="text-gray-600 text-sm">
                    Développement de systèmes solaires thermiques adaptés au contexte tropical.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Matériaux Locaux</h4>
                  <p className="text-gray-600 text-sm">
                    Caractérisation et valorisation des matériaux locaux pour la construction mécanique.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Maintenance Prédictive</h4>
                  <p className="text-gray-600 text-sm">
                    Solutions IoT pour la surveillance et maintenance des équipements industriels.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Partenaires Industriels</h3>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center hover:shadow-md transition-shadow">
                  <div className="h-16 bg-gray-200 rounded mb-3"></div>
                  <p className="font-medium text-sm">ALUCAM</p>
                  <p className="text-xs text-gray-500">Aluminium du Cameroun</p>
                </Card>
                <Card className="p-4 text-center hover:shadow-md transition-shadow">
                  <div className="h-16 bg-gray-200 rounded mb-3"></div>
                  <p className="font-medium text-sm">SONARA</p>
                  <p className="text-xs text-gray-500">Société Nationale de Raffinage</p>
                </Card>
                <Card className="p-4 text-center hover:shadow-md transition-shadow">
                  <div className="h-16 bg-gray-200 rounded mb-3"></div>
                  <p className="font-medium text-sm">CIMENCAM</p>
                  <p className="text-xs text-gray-500">Cimenteries du Cameroun</p>
                </Card>
                <Card className="p-4 text-center hover:shadow-md transition-shadow">
                  <div className="h-16 bg-gray-200 rounded mb-3"></div>
                  <p className="font-medium text-sm">ENEO</p>
                  <p className="text-xs text-gray-500">Energy of Cameroon</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Intéressé par le Génie Mécanique ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Découvrez nos programmes de formation et rejoignez notre communauté d'ingénieurs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-500 hover:bg-gray-100">
              Candidater maintenant
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
              Télécharger la brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Same as main page */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">PY</span>
                </div>
                <span className="font-bold text-lg">Polytechnique Yaoundé</span>
              </div>
              <p className="text-gray-400 text-sm">
                Excellence académique et innovation technologique au service du développement.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Formation</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">1er Cycle</Link></li>
                <li><Link href="#" className="hover:text-white">2e Cycle</Link></li>
                <li><Link href="#" className="hover:text-white">Doctorat</Link></li>
                <li><Link href="#" className="hover:text-white">Formation continue</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Départements</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">Génie Civil</Link></li>
                <li><Link href="#" className="hover:text-white">Informatique</Link></li>
                <li><Link href="#" className="hover:text-white">Génie Mécanique</Link></li>
                <li><Link href="#" className="hover:text-white">Électronique</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>École Polytechnique de Yaoundé</li>
                <li>BP 8390, Yaoundé, Cameroun</li>
                <li>Tél: +237 222 223 406</li>
                <li>info@polytechnique-yde.cm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 École Polytechnique de Yaoundé. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}