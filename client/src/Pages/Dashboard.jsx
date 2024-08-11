import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import MessageList from './MessgaeList';
import DashPost from '../components/DashPost';
import DashUsers from '../components/DashUsers'
import DashboardComp from '../components/DashboardComp';
function Dashboard() {

  const location = useLocation();
  const [tab, setTab] = useState('')
  useEffect(() =>{
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl){
      setTab(tabFromUrl);
    }

  }, [location.search])

  return (
    <div className=' min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
       <DashSidebar/>
      </div>

      <div className=''>
      {tab === 'profile' && <DashProfile/>}
      </div>

      {
        tab === 'posts' && <DashPost/>
      }
     
     {
        tab === 'users' && <DashUsers/>
      }

      {
        tab === 'notification' && <MessageList/>
      }

    {
        tab === 'dash' && <DashboardComp/>
      }
     
         
    </div>
  )
}

export default Dashboard