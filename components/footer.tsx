import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Import React Icons

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#EBEBEB]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid-cols-2 md:grid-cols-5 gap-40 flex justify-center">
          {/* Product Section */}
          <div>
            <h3 className="font-semibold hover:text-[#62a2bd] text-[#2D2D2D] mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">Features</Link></li>
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">Changelog</Link></li>
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">Docs</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold hover:text-[#62a2bd] text-[#2D2D2D] mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">About</Link></li>
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">Blog</Link></li>
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">Careers</Link></li>
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">Contact</Link></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold hover:text-[#62a2bd] text-[#2D2D2D] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">Community</Link></li>
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">Help Center</Link></li>
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">Partners</Link></li>
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">Status</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold hover:text-[#62a2bd] text-[#2D2D2D] mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">Privacy</Link></li>
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">Terms</Link></li>
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">Security</Link></li>
              <li><Link href="#" className="text-[#6E6E6E] hover:text-[#FF5D5D]">Cookies</Link></li>
            </ul>
          </div>

          {/* Connect with Us Section */}
          <div>
            <h3 className="font-semibold hover:text-[#62a2bd] text-[#2D2D2D] mb-4">Connect with Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:contact@yourcompany.com" className="text-[#6E6E6E] hover:text-[#FF5D5D] flex items-center">
                  <FaEnvelope className="mr-2" /> Email Us
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com" className="text-[#6E6E6E] hover:text-[#FF5D5D] flex items-center" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="mr-2" /> Facebook
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="text-[#6E6E6E] hover:text-[#FF5D5D] flex items-center" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="mr-2" /> Twitter
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="text-[#6E6E6E] hover:text-[#FF5D5D] flex items-center" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="mr-2" /> Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8">
          <p className="text-center text-[#6E6E6E]">&copy; 2024 Index. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
