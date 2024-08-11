import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Image from "../Images/010.jpg"; // Ensure the correct path

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getPosts");
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        // Sort posts by date descending (newest first)
        const sortedPosts = data.posts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex items-center justify-center lg:order-2">
          <img
            src={Image}
            alt="Description"
            className="rounded-lg shadow-lg lg:w-full"
          />
        </div>
        <div className="flex flex-col justify-center lg:order-1">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            សារស្វាគមន៍របស់អគ្គាធិការ
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="5"
              className={`mt-7 text-sm ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
            >
              សូមស្វាគមន៍ចំពោះការចូលទស្សនាគេហទំព័រអគ្គាធិការដ្ឋានក្រសួងមហាផ្ទៃ!​
              អ្នកអានជាទីគោរព!​ អគ្គាធិការដ្ឋានក្រសួងមហាផ្ទៃ
              មានតួនាទីធ្វើជាសេនាធិការរបស់ក្រសួងមហាផ្ទៃក្នុង
              ត្រួតពិនិត្យ​សកម្មភាព​ការងារ
              និង​កិច្ចប្រតិបត្តិការ​របស់​មន្ត្រីរាជការ​នៅ​ថ្នាក់​ជាតិនិងថ្នាក់​ក្រោម​ជាតិក្នុង​ដែន​​សមត្ថកិច្ចរបស់​ក្រសួង​មហាផ្ទៃ​លើការអនុវត្តច្បាប់
              លិខិត​បទដ្ឋាន កម្មវិធី​នយោបាយ​នានារបស់រាជរដ្ឋាភិបាល
              និងក្រសួងមហាផ្ទៃ។
            </marquee>
          </h1>
          <Link
            to="/search"
            className={`text-base md:text-lg lg:text-xl font-semibold ${
              isDarkMode
                ? "text-teal-400 hover:text-teal-300"
                : "text-teal-600 hover:text-teal-700"
            } transition duration-300 ease-in-out transform hover:scale-105`}
          >
            ចុចអានបន្ថែម &rarr;
          </Link>
        </div>
      </div>
      <div className="mt-16">
        <CallToAction />
      </div>
      <div className="mt-16">
        <div className="h-full bg-white dark:bg-gray-900">
          <div className="h-full bg-white dark:bg-gray-900">
            <div className="h-full bg-white dark:bg-gray-900">
              <h2
                className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 py-2 border-b-4 border-t-4 animate-border ${
                  isDarkMode
                    ? "text-white border-white"
                    : "text-gray-900 border-gray-900"
                }`}
              >
                <marquee
                  behavior="scroll"
                  direction="left"
                  scrollamount="5"
                  className={`inline-block mt-5 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                  style={{ overflow: "visible", fontSize: "1.5rem" }}
                >
                  ពត៏មានប្រចាំថ្ងៃរបស់អគ្គាធិការដ្ឋាន
                </marquee>
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="transform transition duration-300 ease-in-out hover:scale-105 h-full flex"
            >
              <PostCard post={post} className="w-full" />
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/search"
            className={`text-lg md:text-xl font-semibold ${
              isDarkMode
                ? "text-teal-400 hover:text-teal-300"
                : "text-teal-600 hover:text-teal-700"
            } transition duration-300 ease-in-out transform hover:scale-105`}
          >
            ចុចទៅទំព័របន្ត &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
