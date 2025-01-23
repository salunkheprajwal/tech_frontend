import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Import React Icons

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#EBEBEB]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Product Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Changelog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Docs</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Community</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Help Center</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Partners</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Status</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Privacy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Terms</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Security</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Cookies</Link></li>
            </ul>
          </div>

          {/* Connect with Us Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect with Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:contact@yourcompany.com" className="text-gray-400 hover:text-white flex items-center">
                  <FaEnvelope className="mr-2" /> Email Us
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com" className="text-gray-400 hover:text-white flex items-center" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="mr-2" /> Facebook
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="text-gray-400 hover:text-white flex items-center" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="mr-2" /> Twitter
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="text-gray-400 hover:text-white flex items-center" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="mr-2" /> Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8">
          <p className="text-center text-gray-400">&copy; 2024 Index. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
