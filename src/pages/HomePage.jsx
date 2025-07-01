// import { href } from "react-router-dom";
import Header from "../components/Header/Header";

const HomePage = () => {
    return (
        <div>
            <Header />
            <div id="container" className="scroll-bar">
                <div className="banner">
                    <img src="/Images/college-banner-Cz0xylpt.png" alt="banner" class="img-pro" />
                    <div class="first-H">
                        <h1>Welcome to Vivekanand College!</h1>
                        <p id="sub-title">Your journey to excellence starts here.</p>
                        {/* <button data-discover="true" class="btn"><Link to="/apply" className='nav' data-discover="true">Apply Now!</Link></button> */}
                        <a href="/apply" data-discover="true" class="btn">Apply Now</a>
                    </div>
                </div>

                <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
                <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                <h2>Why Choose Vivekanand College?</h2><hr />
                <ul>
                    <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
                    <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
                    <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
                    <li><b>Strong Placements:</b>Excellent career opportunities with leading companies.</li>
                </ul>
                <h2>Campus Life & Facilities</h2>
                <img src="/Images/campus-life.jpg" alt="Home" style={{ width: "410px", height: "300px" }} /><img src="/Images/students-studying.jpeg" alt="Home" style={{ width: "410px", height: "300px" }} /><br />

                <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>

                <div className="call-to-action">
                    <p>Ready to explore our courses?</p>
                    <a href="/apply" data-discover="true" class="btn">Explore Courses</a>
                     {/* <Link to="/courses" class="btn">Explore Courses</Link> */}
                </div>
            </div>
        </div>
    )
}

export default HomePage;