import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PY</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                  Accueil
                </Link>
                <Link href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium">
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.pinimg.com/736x/6b/53/c7/6b53c7d74eeb16a7a8234fa34342e745.jpg')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Le génie mécanique<br />
                se dote d'un<br />
                nouveau laboratoire
              </h1>
            </div>
            <div className="bg-orange-500 p-8 rounded-lg">
              <p className="text-white text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-teal-600 mb-4">
              Polytechnique de Yaoundé c'est :
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          {/* Main Stats */}
          <div className="bg-teal-600 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">5605</div>
                <div className="text-white text-lg">Étudiants</div>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">3605</div>
                <div className="text-white text-lg">Ingénieurs formés</div>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">45</div>
                <div className="text-white text-lg">
                  Enseignants &<br />
                  Experts
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">03</div>
              <div className="text-gray-600 text-sm">
                Accréditations<br />
                internationales
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">08</div>
              <div className="text-gray-600 text-sm">
                Laboratoires<br />
                équipés
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">15</div>
              <div className="text-gray-600 text-sm">
                Filières &<br />
                spécialités
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">02</div>
              <div className="text-gray-600 text-sm">
                Cycles de<br />
                formation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nos départements & laboratoires
          </h2>
          
          <div className="text-center mb-8">
            <div className="inline-flex space-x-8 text-sm text-gray-600">
              <span>1er Cycle</span>
              <span>2e Cycle</span>
              <span>Doctorat</span>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <div className="inline-flex space-x-8 text-sm font-medium">
              <span className="text-orange-500">Physique Maths</span>
              <span className="text-gray-600">Maths SVT</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="bg-teal-600 h-48 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 opacity-90"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-bold mb-2">Informatique</h3>
                    <p className="text-white text-sm opacity-90">
                      Software engineering, industry. Lorem ipsum<br />
                      has been the industry.
                    </p>
                    <Link href="departements/genie-mecanique" className="text-white hover:text-orange-600 font-medium">
                      <details></details>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="bg-yellow-500 h-48 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-90"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-bold mb-2">Civil</h3>
                    <p className="text-white text-sm opacity-90">
                      Building and construction industry. Lorem ipsum<br />
                      has been the industry.
                    </p>
                    
                    <Link href="departements/genie-mecanique" className="text-white hover:text-orange-600 font-medium">
                      <details></details>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="departements/genie-electrique" className="text-orange-500 hover:text-orange-600 font-medium">
              Voir les autres départements →
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            La vie au campus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 h-48 rounded-t-lg relative overflow-hidden">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-bold">Associations</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-amber-600 to-orange-700 h-48 rounded-t-lg relative overflow-hidden">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-bold">Clubs</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-48 rounded-t-lg relative overflow-hidden">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-bold">
                      Compétitions<br />
                      sportives
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Abonnez-vous à la newsletter
          </h2>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              type="email" 
              placeholder="Votre adresse email"
              className="bg-white"
            />
            <Button className="bg-white text-orange-500 hover:bg-gray-100 whitespace-nowrap">
              En savoir plus
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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