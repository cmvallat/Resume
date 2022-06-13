import './App.css';

function App() {
  return (
  <div class="resume">
    <div class="base">
    <div class="profile">
      <div class="photo">
        <i class="fas fa-rocket"></i>
      </div>
      <div class="info">
        <h1 class="name">Nicholas Georgiou</h1>
        <h2 class="job">Software Developer</h2>
      </div>
    </div>
    <div class="about">
      <h3>About Me</h3>I'm currently a web development team lead at Prometheus Group in Raleigh, NC. 
    </div>
    <div class="contact">
      <h3>Contact Me</h3>
      <div class="email"><a href="mailto:nicholasgeorgiou11@gmail.com"><i class="fas fa-envelope"></i><span>Email</span></a></div>
      <div class="website"><a href="https://github.com/ach1lles11"> <i class="fas fa-home"></i><span>GitHub</span></a></div>
      <div class="website"><a href="https://www.linkedin.com/in/nicholas-georgiou-45b8151b5/"><i class="fas fa-envelope"></i><span>LinkedIn</span></a></div>
    </div>
    <div class="contact">
      <h3>Projects</h3>
      <div class="website"><a href="https://ach1lles11.github.io/BeInformedNC/"> <i class="fas fa-home"></i><span>BeInformedNC</span></a></div>
    </div>
    {/* <div class="follow">
      <h3>Follow Me</h3>
      <div class="box">
        <a href="https://www.linkedin.com/in/nicholas-georgiou-45b8151b5/" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/astronaomical/" target="_blank"><i class="fab fa-instagram "></i></a>
        <a href="https://www.pinterest.com/astronaomical/" target="_blank"><i class="fab fa-pinterest"></i></a>
        <a href="https://www.linkedin.com/in/naomi-weatherford-758385112/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://codepen.io/astronaomical/" target="_blank"><i class="fab fa-codepen"></i></a>
        <a href="https://www.behance.net/astronaomical" target="_blank"><i class="fab fa-behance"></i></a>
      </div>
    </div> */}
  </div>
  <div class="func">
    <div class="work">
      <h3><i class="fa fa-briefcase"></i>Work Experience</h3>
      <ul>
        <li><span>Web Development Team Lead</span><small>Prometheus Group</small><small>July 2021 - Present</small></li>
        <li><span>Krackle Consulting Group- Web Developer</span><small>University of North Carolina at Chapel Hill</small><small>June 2020 - May 2021</small></li>        
      </ul>
    </div>
    <div class="edu">
      <h3><i class="fa fa-graduation-cap"></i>Education</h3>
      <ul>
        <li><span>Bachelor of Science Computer Science</span><small>University of North Carolina at Chapel Hill</small><small>2017 - 2021</small></li>
        <li><span>Couchell Scholarship for Academic Excellence</span><small>Recipient</small></li>
      </ul>
    </div>
    <div class="skills-prog">
      <h3><i class="fas fa-code"></i>Programming Skills</h3>
      <ul>
        <li><span>TypeScript</span>
          <div class="skills-bar">
            <div class="bar" style={{width:'90%'}}></div>
          </div>
        </li>
        <li><span>Java</span>
          <div class="skills-bar">
            <div class="bar" style={{width:'80%'}}></div>
          </div>
        </li>
        <li><span>JavaScript</span>
          <div class="skills-bar">
            <div class="bar" style={{width:'75%'}}></div>
          </div>
        </li>
        <li><span>Python</span>
          <div class="skills-bar">
            <div class="bar" style={{width:'50%'}}></div>
          </div>
        </li>
        <li><span>MatLab</span>
          <div class="skills-bar">
            <div class="bar" style={{width:'45%'}}></div>
          </div>
        </li>
        <li><span>C++</span>
          <div class="skills-bar">
            <div class="bar" style={{width:'30%'}}></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="skills-soft">
      <h3><i class="fas fa-bezier-curve"></i>Databases</h3>
      <ul>
        <li data-percent="90">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45" style={{width:'50%'}}></circle>
            <circle class="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>SQL</span><small></small>
        </li>
        <li data-percent="75">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle class="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Oracle</span><small></small>
        </li>
        <li data-percent="85">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle class="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Firebase (NoSQL)</span><small></small>
        </li>
      </ul>
    </div>
    <div class="interests">
      <h3><i class="fas fa-star"></i>Tools</h3>
      <div class="interests-items">
        <div class="art"><i class="fas fa-palette"></i><span>MS Office</span></div>
        <div class="art"><i class="fas fa-book"></i><span>Eclipse</span></div>
        <div class="movies"><i class="fas fa-film"></i><span>Slack</span></div>
        <div class="music"><i class="fas fa-headphones"></i><span>VS Code</span></div>
        <div class="games"><i class="fas fa-gamepad"></i><span>Anaconda Suite</span></div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;

