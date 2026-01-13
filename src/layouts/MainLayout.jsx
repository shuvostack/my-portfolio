import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer'; 

const MainLayout = () => {
    return (
        <div className="bg-slate-900 min-h-screen text-slate-100 font-sans">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;