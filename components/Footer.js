// components/Footer.js
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}
