import { Link } from "react-router-dom";
import { FaFacebook, FaTelegram } from 'react-icons/fa';

const stripHtmlTags = (content) => {
  return content.replace(/<\/?p>/g, ''); // Remove opening and closing <p> tags
};

const truncateContent = (content, wordLimit) => {
  const strippedContent = stripHtmlTags(content);
  const words = strippedContent.split(/\s+/);
  if (words.length <= wordLimit) {
    return strippedContent;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const PostCard = ({ post }) => {
  const truncatedContent = truncateContent(post.content, 15);
  const formattedDate = formatDate(post.createdAt);

  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-lg">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover rounded-t-md"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h3>
        <p className="text-gray-700 mb-4">{truncatedContent}</p>
        <div className="flex items-center justify-between text-gray-500 mb-2">
          <div className=" items-center">
            <p className="text-sm">{formattedDate}</p> 
            <p className="text-sm">{post.category}</p>
            
          </div>
          <div className="flex items-center">
            <Link to={`/post/${post.slug}`} className="text-teal-500 hover:underline mr-4">
              អានបន្ត
            </Link>
            <FaFacebook className="text-blue-500 cursor-pointer hover:text-blue-700" />
            <FaTelegram className="text-blue-500 cursor-pointer hover:text-blue-700 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
