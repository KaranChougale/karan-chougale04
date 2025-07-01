import Header from "../components/Header/Header";

const AdmissionPage = () => {
    return (
        <div>
            <Header />
            <div id="container" class="scroll-bar">
                <h1 class="first">Admissions at Vivekanand College</h1>
                <br />
                <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p>
                <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>
                <h2>Eligibility Criteria for Undergraduate Programs</h2>
                <hr />
                <table class="admission-table" border="1px">
                    <thead>
                        <tr>
                            <th scope="col">Program</th>
                            <th scope="col">Minimum Qualification</th>
                            <th scope="col">Required Subjects</th>
                            <th scope="col">Minimum Marks (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="row">
                            <td scope="row">B.Sc. Computer Science</td>
                            <td scope="row">10+2 (or equivalent)</td>
                            <td scope="row">Physics, Chemistry, Maths</td>
                            <td scope="row">50%</td>
                        </tr>
                        <tr>
                            <td scope="row">B.Com. Accounting & Finance</td>
                            <td scope="row">10+2 (or equivalent)</td>
                            <td scope="row">Commerce Stream</td>
                            <td scope="row">45%</td>
                        </tr>
                        <tr class="row">
                            <td scope="row">B.A. English Literature</td>
                            <td scope="row">10+2 (or equivalent)</td>
                            <td scope="row">Any Stream</td>
                            <td scope="row">40%</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Application Process</h2>
                <hr />
                <ol>
                    <li><b>Online Application:</b> Fill out the application form available on our portal.</li>
                    <li><b>Document Submission: </b>Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
                    <li><b>Entrance Exam (if applicable):</b>Appear for the college's entrance examination.</li>
                    <li><b>Merit List & Interview:</b> Check the merit list and attend the interview if shortlisted.</li>
                    <li><b>Fee Payment:</b> Complete the admission by paying the required fees.</li>
                </ol>
                <p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our <a href="http://localhost:5173/courses">Courses page</a> or <a href="http://localhost:5173/contact">Contact us</a> directly.</p>
            </div>
        </div>
    )
}

export default AdmissionPage;