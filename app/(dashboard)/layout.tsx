import Navbar from '@/components/navbar';
import React from 'react'
import Sidebar from '@/components/sidebar';

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='h-full relative'>
      {/* A sidebar that is hidden on mobile devices and visible on big screen */}
      <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900'>
        <div>
          <Sidebar />
        </div>
      </div>
      {/* The padding left 72 is to make sure that the main content won't be overlap by the sidebar*/}
      <main className='md:pl-72'>
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout