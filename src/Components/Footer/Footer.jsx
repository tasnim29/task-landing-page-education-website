import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">EduX</h3>
          <p className="text-sm leading-relaxed">
            Empowering learners worldwide with expert-led courses, flexible
            schedules, and real-world skills.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {["Home", "Courses", "Blog", "Help Center", "Contact"].map(
              (link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white transition">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Programs</h4>
          <ul className="space-y-3 mb-6">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Data Science</li>
            <li>Digital Marketing</li>
          </ul>

          <p className="text-sm">
            📧 support@academy.com <br />
            📞 +880 1234 567890
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12" />

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-4">
          {[FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube].map(
            (Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-600 hover:text-black transition"
              >
                <Icon size={16} />
              </a>
            )
          )}
        </div>

        <p className="text-sm text-center">
          © 2025 Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
