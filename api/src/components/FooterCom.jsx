import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import Logo from "../Images/images-removebg-preview.png"; // Ensure the correct path

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500  text-black">
      <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Logo and Title */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="" />
              <div className="ml-3">
                <span className=" mr-10 block text-4xl font-semibold">
                  អគ្គាធិការដ្ឋាន 
                </span>
                <span className="block text-4xl font-semibold">
                   ក្រសួងមហាផ្ទៃ
                </span>
              </div>
            </Link>
          </div>
          {/* Right Section - About and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* About Section */}
            <div>
              <Footer.Title title="អំពីអគ្គាធិការដ្ឋាន" />
              <Footer.LinkGroup>
                <Footer.Link
                  href="https://www.facebook.com/GeneralDepartmentofInspection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-black hover:text-gray"
                >
                  អគ្គាធិការដ្ឋាន មានតួនាទីធ្វើ​ជាសេនាធិការរបស់ក្រសួងមហាផ្ទៃក្នុង ការត្រួតពិនិត្យ​សកម្មភាព​ការងារ និង​កិច្ចប្រតិបត្តិការ​របស់​មន្ត្រីរាជការ​នៅ​ថ្នាក់​ជាតិនិងថ្នាក់​ក្រោម​ជាតិក្នុង​ដែន​​សមត្ថកិច្ចរបស់​ក្រសួង​មហាផ្ទៃ​​ លើការអនុវត្តច្បាប់ លិខិត​បទដ្ឋាន កម្មវិធី​នយោបាយ​នានារបស់រាជរដ្ឋាភិបាលនិងក្រសួងមហាផ្ទៃ។
                </Footer.Link>
                <Footer.Link
                  href="https://www.facebook.com/GeneralDepartmentofInspection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray mt-5"
                >
                  អគ្គាធិការដ្ឋាន ក្រសួងមហាផ្ទៃ
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* Contact Section */}
            <div>
              <Footer.Title title="ទំនាក់ទំនង" />
              <Footer.LinkGroup>
                <Footer.Link
                  href="mailto:cambodia@interior.gov.kh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-900"
                >
                  អាស័យដ្ឋាន: #275 ​ផ្លូវព្រះនរោត្តម, ក្រុងភ្នំពេញ
                </Footer.Link>
                <Footer.Link
                  href="mailto:cambodia@interior.gov.kh"
                  className="text-blackhover:text-gray"
                >
                  cambodia@interior.gov.kh
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        {/* Bottom Section - Copyright and Social Icons */}
        <Footer.Divider className="my-6 border-gray-600" />
        <div className="flex items-center justify-between">
          <Footer.Copyright
            href="#"
            by="រក្សាសិទ្ធដោយ​ អនុសេនីយ៏ត្រី ញ៉េប ម៉ានិត"
            year={new Date().getFullYear()}
            className="text-black"
          />
          <div className="flex gap-6">
            <Footer.Icon href="#" icon={BsFacebook} className="text-black hover:text-white" />
            <Footer.Icon href="#" icon={BsInstagram} className=" text-black hover:text-white" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-black hover:text-white" />
      
          </div>
        </div>
      </div>
    </Footer>
  );
}
