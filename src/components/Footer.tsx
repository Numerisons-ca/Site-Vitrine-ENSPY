import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white">
      {/* Section principale du footer */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Section Logo et École */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-20 h-20">
                <Image
                  src="/logos/enspy.png"
                  alt="Logo ENSP"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">École Nationale Supérieure</h3>
                <p className="text-sm text-gray-300">Polytechnique de Yaoundé</p>
              </div>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            {/* Toggle Dark Mode */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-300">Mode :</span>
              <ModeToggle />
            </div>
          </div>

          {/* Section Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-400">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  • Accueil
                </Link>
              </li>
              <li>
                <Link href="/departement" className="text-gray-300 hover:text-orange-400 transition-colors">
                  • Département
                </Link>
              </li>
              <li>
                <Link href="/recherche" className="text-gray-300 hover:text-orange-400 transition-colors">
                  • Recherche
                </Link>
              </li>
              <li>
                <Link href="/personnels" className="text-gray-300 hover:text-orange-400 transition-colors">
                  • Personnels
                </Link>
              </li>
              <li>
                <Link href="/accreditations" className="text-gray-300 hover:text-orange-400 transition-colors">
                  • Accréditations ENSP
                </Link>
              </li>
              <li>
                <Link href="/concours" className="text-gray-300 hover:text-orange-400 transition-colors">
                  • Sénorite ou concours
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-400">Nous-Contacter</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  B.P. 8390 Yaoundé-Cameroun
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a 
                  href="mailto:infos@enspy-uy1.org" 
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  infos@enspy-uy1.org
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a 
                  href="tel:+237222224547" 
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  +237 222 22 45 47
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  diplomes@enspy-uy1.cm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section logos partenaires */}
      <div className="bg-orange-500 dark:bg-orange-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Logo CTI */}
            <div className="bg-white rounded p-3 h-16 flex items-center">
              <Image
                src="/logos/CTI.png"
                alt="Logo CTI"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
            
            {/* Logo avec étoiles (logo partenaire) */}
            <div className="bg-white rounded p-3 h-16 flex items-center">
              <Image
                src="/logos/partner-logo.png"
                alt="Logo Partenaire"
                width={60}
                height={40}
                className="object-contain"
              />
            </div>
            
            {/* Logo REA */}
            <div className="bg-white rounded p-3 h-16 flex items-center">
              <Image
                src="/images/logos/rea-logo.png"
                alt="Logo REA"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 dark:bg-black py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 École Nationale Supérieure Polytechnique de Yaoundé. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;