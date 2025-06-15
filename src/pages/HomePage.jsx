import Header from "../components/Header/Header";

const HomePage = () => {
    return(
        <div>
            <header class="main-header"> <div class="college-name"><a href="/" data-discover="true"><h1>Vivekanand College</h1></a> </div><nav class="navbar desktop-nav"><a class="nav-item" href="/" data-discover="true">Home</a><a class="nav-item" href="/about" data-discover="true">About</a><a class="nav-item" href="/courses" data-discover="true">Courses</a><a class="nav-item" href="/contact" data-discover="true">Contact</a><a class="nav-item btn primary-btn" href="/admissions" data-discover="true">Apply Now!</a> </nav><button class="hamburger-menu"><span class="hamburger-icon"></span><span class="hamburger-icon"></span><span class="hamburger-icon"></span></button></header>
            <h1>Vck OJT</h1>
            <p>This is my first project</p>
        </div>
    )
}

export default HomePage;