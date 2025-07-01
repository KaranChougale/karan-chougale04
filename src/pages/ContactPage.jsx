import Header from "../components/Header/Header";


const ContactPage = () => {
    return(
        <div>
            <Header/>
        <div id="container" class="scroll-bar">
            <h1 class="first">Contact Us</h1>
            <br />
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            <h2>General Enquiries</h2>
            <hr />
            <h3>Vivekanand College Main Campus</h3>
            <p>[Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071] <br />India</p>
            <p>Phone: <b>+91 12345 67890</b></p>
            <p>Email: <b>info@vivekanandcollege.edu</b></p>
            <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
            <h2>Admissions Office</h2>
            <hr />
            <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: admissions@vivekanandcollege.edu</p>
            <h2>Student Support Services</h2>
            <hr />
            <p>For current student support, academic advising, or general assistance:</p>
            <p>Phone: +91 87654 32109</p>
            <p>Email: studentsupport@vivekanandcollege.edu</p>
            <h2>Find Us on the Map</h2>
            <hr />
            <br />
            <p><a href="https://www.google.com/maps/search/Vivekanand+College/@16.7081422,74.0740193,10z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D">View on Google Maps</a></p>
            <h2>Send Us a Message</h2>
            <hr />
            <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
        </div>
        </div>
    )
}

export default ContactPage;