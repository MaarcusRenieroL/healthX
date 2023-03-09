import React from "react";

import {Routes, Route} from "react-router-dom";

import {WelcomePage} from "./pages/WelcomePage";
import {SignInPage} from "./pages/SignInPage";
import {SignUpPage} from "./pages/SignUpPage";

import {PatientDashboard} from "./users/patient/dashboard/PatientDashboard";
import {PatientFamily} from "./users/patient/family/PatientFamily";
import {PatientDocuments} from "./users/patient/documents/PatientDocuments";
import {PatientHistory} from "./users/patient/history/PatientHistory";
import {PatientTasks} from "./users/patient/tasks/PatientTasks";
import {PatientFAQ} from "./users/patient/faq/PatientFAQ";
import {PatientInsurance} from "./users/patient/insurance/PatientInsurance";
import {PatientShop} from "./users/patient/shop/PatientShop";
import {ShoppingCart} from "./users/patient/shop/ShoppingCart";

import {DoctorDashboard} from "./users/doctor/dashboard/DoctorDashboard";
import {DoctorPatients} from "./users/doctor/patients/DoctorPatients";
import {DoctorAppointments} from "./users/doctor/appointments/DoctorAppointments";
import {DoctorActivity} from "./users/doctor/activity/DoctorActivity";

import {TechnicianDashboard} from "./users/technician/dashboard/TechnicianDashboard";

import {AdminDashboard} from "./users/admin/dashboard/AdminDashboard";
import {AdminEmployees} from "./users/admin/employees/AdminEmployees";
import {AdminPatients} from "./users/admin/patients/AdminPatients";
import {AdminAnalytics} from "./users/admin/analytics/AdminAnalytics";
import {ErrorPage} from "./components/ErrorPage";


export const AppRoutes = () => {
    return <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            
            <Route path="/signin" element={<SignInPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            
            <Route path="/patient" element={<PatientDashboard/>}/>
            <Route path="/patient/family" element={<PatientFamily/>}/>
            <Route path="/patient/documents" element={<PatientDocuments/>}/>
            <Route path="/patient/history" element={<PatientHistory/>}/>
            <Route path="/patient/tasks" element={<PatientTasks/>}/>
            <Route path="/patient/faq" element={<PatientFAQ/>}/>
            <Route path="/patient/insurance" element={<PatientInsurance/>}/>
            <Route path="/patient/shop" element={<PatientShop/>}/>
            <Route path="/patient/shop/cart" element={<ShoppingCart/>}/>
            
            <Route path="/doctor" element={<DoctorDashboard/>}/>
            <Route path="/doctor/appointments" element={<DoctorAppointments/>}/>
            <Route path="/doctor/patients" element={<DoctorPatients/>}/>
            <Route path="/doctor/activity" element={<DoctorActivity/>}/>
            
            <Route path="/technician" element={<TechnicianDashboard/>}/>
            
            <Route path="/admin" element={<AdminDashboard/>}/>
            <Route path="/admin/patients" element={<AdminPatients/>}/>
            <Route path="/admin/employees" element={<AdminEmployees/>}/>
            <Route path="/admin/analytics" element={<AdminAnalytics/>}/>
            
            <Route path="*" element={<ErrorPage/>}/>
        
        </Routes>
}