import { Routes, Route } from 'react-router-dom';
import Signinform from './_auth/forms/SigninForm';
import { Home, } from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import './globals.css';



function App() {
    return (
       <main className="flex h-screen">

        <Routes>
          {/* Public Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/Sign-in" element={<Signinform />} />
            <Route path="/Sign-up" element={<SignupForm />} />
          </Route>
          


          {/* Private Routes */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
       

        </Routes>
       </main>
    
    );
}

export default App