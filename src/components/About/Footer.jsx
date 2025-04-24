import { FaEnvelope, FaSearch } from "react-icons/fa";
import { FaLinkedin, FaYoutube, FaXTwitter } from "react-icons/fa6";
import footerimg1 from "/assets/About/footer/footerimg1.png";
import footerimg2 from "/assets/About/footer/footerimg2.png";
import maqimg2 from "/assets/About/mostasked/maqimg2.png";
import maqimg1 from "/assets/About/mostasked/maqimg1.png";
import maqimg4 from "/assets/About/mostasked/maqimg4.png";
import footerprivacyimg1 from "/assets/About/footer/footerprivacyimg1.png";
import footerprivacyimg2 from "/assets/About/footer/footerprivacyimg2.png";
import footerprivacyimg3 from "/assets/About/footer/footerprivacyimg3.png";

const Footer = () => {
  return (
    <div className="bg-[#F3F3F3] w-full mx-auto pt-10 rounded-xl px-6 font-inter">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-gray-800">
        {/* Features */}
        <div>
          <h3 className="font-semibold mb-3">Features</h3>
          <ul className="text-sm text-[#404040] space-y-1">
            <li>Task Management</li>
            <li>Task Automation</li>
            <li>Time Tracking</li>
            <li>Team Collaboration</li>
            <li>Charts and Reports</li>
            <li>Issue Tracking</li>
            <li>Gantt charts</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="text-sm space-y-1 text-[#404040]">
            <li>Analyst Speak</li>
            <li>Quick Start Guide</li>
            <li>Knowledge Base (FAQ)</li>
            <li>The Productivity Compass</li>
            <li>What’s New</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="text-sm space-y-1 text-[#404040]">
            <li>Project Tracker</li>
            <li>What is project management?</li>
            <li>Free Project Management</li>
            <li>Project management tools</li>
            <li>Enterprise project management</li>
            <li>What is task management?</li>
            <li>How to create a Gantt chart in Excel</li>
            <li>Project collaboration</li>
          </ul>
        </div>

        {/* Compare With */}
        <div>
          <h3 className="font-semibold mb-3">Compare with</h3>
          <ul className="text-sm space-y-1 text-[#404040]">
            <li>Jira</li>
            <li>Monday.com</li>
            <li>ClickUp</li>
            <li>Microsoft Project</li>
            <li>Wrike</li>
            <li>Asana</li>
            <li>Smartsheet</li>
            <li>All competitors</li>
          </ul>
        </div>

        {/* Customers */}
        <div>
          <h3 className="font-semibold mb-3">From our customers</h3>
          <ul className="text-sm space-y-1 text-[#404040]">
            <li>Customer Stories</li>
            <li>Tweets</li>
            <li>Buzz</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 text-sm">
        {/* Support Email */}
        <div className="flex items-center space-x-2 text-red-500 font-semibold">
          <FaEnvelope />
          <span>support@nexachain.com</span>
        </div>

        {/* App Store & Play Store */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <img src={footerimg1} alt="App Store" className="w-32" />
          <img src={footerimg2} alt="Google Play" className="w-32" />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0 text-gray-700">
          <FaXTwitter className="text-xl text-black cursor-pointer" />
          <FaLinkedin className="text-xl text-blue-600 cursor-pointer" />
          <FaYoutube className="text-xl text-red-500 cursor-pointer" />
        </div>
      </div>

      <div className="py-10 px-6 text-black">
        {/* Awards & Privacy Section */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10">
          {/* Awards */}
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Awards</h1>
            <div className="flex">
              <img src={maqimg2} alt="Award" className="w-20 h-auto" />
              <img src={maqimg1} alt="Award" className="w-20 h-auto" />
              <img src={maqimg4} alt="Award" className="w-20 h-auto" />
            </div>
          </div>

          {/* Privacy Certifications */}
          <div className="text-center mt-4 md:mt-0">
            <h3 className="font-semibold lg:text-start text-center">
              Choose Privacy. Choose Nexachain.ai
            </h3>
            <div className="flex lg:flex-row flex-wrap items-center space-x-4 justify-center mt-2">
              <img src={footerprivacyimg1} alt="Privacy" className="lg:w-28 w-14" />
              <img src={footerprivacyimg1} alt="Privacy" className="lg:w-28 w-14" />
              <img src={footerprivacyimg1} alt="Privacy" className="lg:w-28 w-14" />
              <img src={footerprivacyimg1} alt="Privacy" className="lg:w-28 w-14" />
              <img src={footerprivacyimg2} alt="Privacy" className="lg:w-16 w-14" />
              <img src={footerprivacyimg3} alt="Privacy" className="lg:w-16 w-14" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex max-w-7xl gap-3 w-full mt-10 justify-center items-center">
        <div className="flex items-center max-w-2xl w-full border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for product overviews, FAQs, and more..."
            className="flex-grow px-4 py-2 outline-none"
          />
          <button className="px-4 py-3 bg-[#C4C4C4]">
            <FaSearch />
          </button>
        </div>
        <div>
        <select className="px-3 py-3 border-l border-gray-300 rounded-lg bg-[#C4C4C4] outline-none">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        </div>

        {/* Legal Links */}
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 text-xs text-black mt-6">
          <span>Zoho Home</span>
          <span>Contact Us</span>
          <span>Security</span>
          <span>Compliance</span>
          <span>PR Complaints</span>
          <span>Anti-spam Policy</span>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>GDPR Compliance</span>
          <span>Abuse Policy</span>
        </div>

        {/* Copyright */}
        <div className="text-center text-black text-sm mt-6">
          © 2025, Nexachain.ai Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
