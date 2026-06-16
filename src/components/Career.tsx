import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Engineering</h4>
                <h5>Jaypee Institute of Information and Technology (JIIT)</h5>
              </div>
              <h3>2024 - 2027</h3>
            </div>
            <p>
              Acquiring specialized knowledge in computer engineering, algorithms, database systems, and AI/ML foundations, maintaining a cumulative CGPA of 6.2.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Developer Intern</h4>
                <h5>Aroma IQ</h5>
              </div>
              <h3>Nov 2024 - Dec 2025</h3>
            </div>
            <p>
              Developed responsive web applications with React, designed secure RESTful APIs, integrated backend servers, and optimized database queries using MySQL and MongoDB.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Volunteer</h4>
                <h5>The Robotics Hub, JIIT</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Assisted in organizing robotics workshops, guided participants in automation-based projects, managed event logistics, and coordinated technical competitions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
