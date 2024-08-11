import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CallToAction from '../components/CallToAction';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from 'flowbite-react';
import Imagelogo1 from '../Images/photo_2024-06-12_13-19-31.jpg';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

const departments = [
  { id: 1, name: 'នាយកដ្ឋាន អធិការកិច្ច កិច្ចការនគរបាល រដ្ឋបាលសរុប', description: 'គ្រប់គ្រងឯកសារ រដ្ឋបាលទូទៅរបស់អគ្គាធិការដ្ឋាន', imageUrl: Imagelogo1 },
  { id: 2, name: 'នាយកដ្ឋាន អធិការកិច្ច កិច្ចការនគរបាល ថ្នាក់កណ្តាល', description: 'អង្កេតស្រាវជ្រាវ ការងារនគរបាលថ្នាក់កណ្តាល', imageUrl: Imagelogo1 },
  { id: 3, name: 'នាយកដ្ឋាន អធិការកិច្ច កិច្ចការនគរបាល រាជធានីខេត្ត', description: ' អង្កេតស្រាវជ្រាវ ការងារនគរបាលថ្នាក់រាជធានី', imageUrl: Imagelogo1 },
  { id: 4, name: 'នាយកដ្ឋាន អធិការកិច្ច កិច្ចការនគរបាល រដ្ធបាល', description: 'អង្កេតស្រាវជ្រាវ ការងារនគរបាលថ្នាក់រាជធានី', imageUrl:Imagelogo1 },
  { id: 5, name: 'នាយកដ្ឋាន អធិការកិច្ច កិច្ចការនគរបាល ថ្នាក់កណ្តាល', description: 'អង្កេតស្រាវជ្រាវ ការងារនគរបាលថ្នាក់រាជធានី', imageUrl: Imagelogo1 },
  { id: 6, name: 'នាយកដ្ឋាន អធិការកិច្ច កិច្ចការនគរបាល ថ្នាក់កណ្តាល', description: 'អង្កេតស្រាវជ្រាវ ការងារនគរបាលថ្នាក់រាជធានី', imageUrl: Imagelogo1 },
];

// Custom Previous Arrow component
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: '-30px', zIndex: '1', cursor: 'pointer', color: 'blue' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

// Custom Next Arrow component
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, right: '-30px', zIndex: '1', cursor: 'pointer', color: 'blue' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export default function Projects() {
  const [posts, setPosts] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/getPosts');
        if (!res.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await res.json();
        // Sort posts by date descending (newest first)
        const sortedPosts = data.posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(sortedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='min-h-screen max-w-7xl mx-auto flex flex-col gap-12 p-6'>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2">
          <p className='text-lg text-gray-500 text-center mb-4'>
            អគ្គាធិការដ្ឋានមាននាយកដ្ឋានចំណុះចំនួន៦ ដោយបែងចែកជាក្របខ័ណ្ឌ​{' '}
            <span className='font-semibold'>មន្រ្តីនគរបាលជាតិ</span> និង{' '}
            <span className='font-semibold'>ក្របខ័ណ្ឌមន្រ្តីរាជការស៊ីវិល</span>
          </p>
          <Slider {...settings}>
            {departments.map((dept) => (
              <div key={dept.id} className='p-4'>
                <Card className="shadow-lg">
                  <img src={dept.imageUrl} alt={dept.name} className='w-full h-64 object-cover' />
                  <div className='p-4'>
                    <h2 className='text-sm font-bold mb-2'>{dept.name}</h2>
                    <p className='text-gray-600'>{dept.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
        <div className="lg:col-span-1">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 py-2 border-b-4 border-t-4 animate-border ${isDarkMode ? 'text-white border-white' : 'text-gray-900 border-gray-900'}`}>
            <marquee behavior="scroll" direction="left" scrollamount="5" className={`inline-block mt-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ overflow: 'visible', fontSize: '1.5rem' }}>
              ពត៏មានប្រចាំថ្ងៃរបស់អគ្គាធិការដ្ឋាន
            </marquee>
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {posts.map((post) => (
              <div key={post._id} className="transform transition duration-300 ease-in-out hover:scale-105 h-full flex">
                <PostCard post={post} className="w-full" />
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/search"
              className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'} transition duration-300 ease-in-out transform hover:scale-105`}
            >
              ចុចទៅទំព័របន្ត &rarr;
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CallToAction />
      </div>
    </div>
  );
}
