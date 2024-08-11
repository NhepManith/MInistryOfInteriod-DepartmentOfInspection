import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import SignIn from './Pages/SignIn';
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects';
import SignUp from './Pages/SignUp';
import Header from './components/Header';
import Footer from './components/FooterCom';
import PrivateRoute from './components/PrivateRoutes';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './Pages/CreatePost';
import UpdatePost from './Pages/UpdatePost';
import PostPage from './Pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './Pages/Search';
import MessageForm from './Pages/MessageForm'; // Correct the path if necessary

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path='/projects' element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
        <Route path='/message-form' element={<MessageForm/>} /> {/* Ensure path casing is consistent */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
