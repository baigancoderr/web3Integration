import React from 'react';
import { lazy, useEffect, useState } from 'react'
import { Suspense } from 'react'
import PropTypes from 'prop-types';

import './App.css'
import "../src/Styles/Loader.css"
import Loader from './Components/Loader';
const Dashboard = lazy(() => import('./Pages/Dashboard'))
const BuyNowPage = lazy(() => import('./Pages/BuyNowPage'))
const ReferralPage = lazy(() => import('./Pages/ReferralPage'))
const ProfilePage = lazy(() => import('./Pages/ProfilePage'))
const MyTransaction = lazy(() => import('./Pages/MyTransaction'))
const LiveTransactions = lazy(() => import('./Pages/LiveTransactions'))
const MoxLogin = lazy(() => import('./Pages/MoxLogin'))

import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SideNav from './Components/SideNav';
import { ToastContainer } from 'react-toastify';
 
 
 






class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          gap: '1rem'
        }}>
          <h1>Oops! Something went wrong.</h1>
          <p>{"We're"} sorry for the inconvenience. Please try refreshing the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout = ({ children, onLogout }) => (
  <div className='flex flex-col mx-auto min-w-screen max-w-[1600px]'>
    <Suspense fallback={<Loader />}>

      <SideNav onLogout={onLogout} />

      <div className=" Gregular p-4  h-fit mt-24 ml-64 tablet:ml-0 ">
        <div className="px-8    tablet:p-0      rounded-lg   ">
          <div className="  gap-4 mb-4">

            {children}

          </div>
        </div>
      </div>


    </Suspense>
  </div>
);
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  onLogout: PropTypes.func.isRequired,
};

function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("mgx_token");
    if (!token) {
      setShowLoginPopup(true);
    } else {
      setShowLoginPopup(false);
    }
  }, []);

  const handleLogout = () => {
    setShowLoginPopup(true);
  };

  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <ScrollToTop />
          <ToastContainer />
          
          {/* MoxLogin Popup Overlay */}
          {showLoginPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
              <Suspense fallback={<Loader />}>
                <MoxLogin onSuccess={() => setShowLoginPopup(false)} />
              </Suspense>
            </div>
          )}
          
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<MainLayout onLogout={handleLogout}> <Dashboard />  </MainLayout>} />
            <Route path="/buytoken" element={<MainLayout onLogout={handleLogout}> <BuyNowPage />  </MainLayout>} />
            <Route path="/referral" element={<MainLayout onLogout={handleLogout}> <ReferralPage />  </MainLayout>} />
            <Route path="/profile" element={<MainLayout onLogout={handleLogout}> <ProfilePage />  </MainLayout>} />
            <Route path="/mytransactions" element={<MainLayout onLogout={handleLogout}> <MyTransaction />  </MainLayout>} />
            <Route path="/livetransactions" element={<MainLayout onLogout={handleLogout}> <LiveTransactions />  </MainLayout>} />


            <Route path="/l" element={<MainLayout onLogout={handleLogout}>  <Loader />  </MainLayout>} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>

    </>
  )
}

export default App
