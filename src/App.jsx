import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import ContactPage from "./pages/ContactPage"
import AdmissionPage from "./pages/AdmissionPage"
import NotFoundPage from "./pages/NotFoundPage"
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import DeveloperinfoPopup from "./components/Devoloperinfo/DeveloperInfoPopup"


const App = () => {



  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };



    return(
      <>
      <div>
        {/* Your main application content */}
        <DeveloperinfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Karan Krishnat Chougale"
          studentPhotoUrl="Images/Karan.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
          <div>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/home" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/courses" element={<CoursesPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/apply" element={<AdmissionPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
              </Routes>
            </Router> 
            <ChatbotComponent/>
            <Footer />
        </div>
      </>
    );
}


export default App