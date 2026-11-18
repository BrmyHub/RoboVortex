import { useState } from "react";
import { team, mentor } from "./team";
import "./App.css";

const timeline = [
  {
    phase: "01",
    title: "Research & Strategy",
    description: "Understanding the challenge, studying the game and planning our approach.",
  },
  {
    phase: "02",
    title: "Design & CAD",
    description: "Developing the robot concept, mechanisms and engineering designs.",
  },
  {
    phase: "03",
    title: "Build & Assembly",
    description: "Turning our designs into a working robot through testing and iteration.",
  },
  {
    phase: "04",
    title: "Programming & Testing",
    description: "Developing autonomous routines, refining controls and testing performance.",
  },
  {
    phase: "05",
    title: "Competition",
    description: "Bringing our engineering, strategy and teamwork to the competition field.",
  },
];

const gallery = [
  { title: "ROBOT BUILD", image: "/images/build.png" },
  { title: "CAD & DESIGN", image: "/images/cad.png" },
  { title: "TESTING", image: "/images/testing.png" },
  { title: "TEAM WORK", image: "/images/team.png" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: "Team", id: "team" },
    { label: "Robot", id: "robot" },
    { label: "Engineering", id: "engineering" },
    { label: "Testing", id: "testing" },
    { label: "Journey", id: "journey" },
    { label: "Gallery", id: "gallery" },
    { label: "Impact", id: "impact" },
    { label: "Sponsors", id: "sponsors" },
    { label: "Competition", id: "competition" },
  ];

  return (
    <div className="site-shell">
      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src="/images/robovortex-logo.png" alt="RoboVortex logo" />
          <span>ROBO<span className="red">VORTEX</span></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            CONTACT
          </a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">NRL HYPERDRIVE 2026 · TEAM PROFILE</p>

            <h1>
              BUILT TO
              <br />
              <span>BREAK</span> LIMITS.
            </h1>

            <p className="hero-description">
              We are RoboVortex — six students from PNC Cognitio School
              combining programming, mechanical engineering and electronics
              to turn bold ideas into real-world robotics.
            </p>

            <div className="hero-actions">
              <a href="#robot" className="primary-btn">
                EXPLORE OUR ROBOT ↗
              </a>
              <a href="#team" className="secondary-btn">
                MEET THE TEAM
              </a>
            </div>

            <div className="hero-meta">
              <span>TEAM #210</span>
              <span>PNC COGNITIO SCHOOL</span>
              <span>NRL / 2026</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-logo-frame">
              <img
                src="/images/robovortex-logo.png"
                alt="RoboVortex team emblem"
              />
            </div>

            <div className="visual-caption">
              <span>OFFICIAL TEAM IDENTIFICATION · #210</span>
              <strong>ROBO<span className="red">VORTEX</span></strong>
              <span>PNC COGNITIO SCHOOL</span>
            </div>

            <div className="visual-index">RV / 2026</div>
          </div>

          <div className="hero-bottom-line">
            ENGINEERED FOR THE CHALLENGE.
          </div>
        </section>

        {/* STATS */}
        <section className="stats-strip">
          <div><strong>210</strong><span>NRL TEAM NUMBER</span></div>
          <div><strong>06</strong><span>STUDENT MEMBERS</span></div>
          <div><strong>01</strong><span>TEAM MENTOR</span></div>
          <div><strong>01</strong><span>COMPETITION ROBOT</span></div>
        </section>

        {/* TEAM */}
        <section className="section" id="team">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE PEOPLE BEHIND THE ROBOT</p>
              <h2>MEET THE <span>TEAM.</span></h2>
            </div>
            <p>
              Six minds. Three engineering disciplines.
              One shared mission.
            </p>
          </div>

          <p className="eyebrow">PNC COGNITIO SCHOOL · NRL TEAM #210</p>

          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.id}>
                <div className="member-visual">
                  <span className="member-number">
                    RV / {String(member.id).padStart(2, "0")}
                  </span>
                  <span className="member-initials">{member.initials}</span>
                  <span className="member-mark">+</span>
                </div>

                <div className="member-info">
                  <p>TEAM MEMBER {String(member.id).padStart(2, "0")}</p>
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              </article>
            ))}
          </div>

          {/* MENTOR */}
          <article className="mentor-card">
            <div className="mentor-avatar">{mentor.initials}</div>
            <div>
              <p className="eyebrow">BEHIND THE TEAM</p>
              <h3>{mentor.name}</h3>
              <span>{mentor.role}</span>
              <p className="mentor-description">
                Guiding our team through engineering, innovation and competition.
              </p>
            </div>
          </article>
        </section>

        {/* ROBOT */}
        <section className="robot-section" id="robot">
          <div className="robot-image">
            <img
              src="/images/robot.png"
              alt="RoboVortex Hyperdrive robot"
            />
          </div>

          <div className="robot-copy">
            <p className="eyebrow">OUR COMPETITION MACHINE · TEAM #210</p>

            <h2>
              MEET THE
              <br />
              <span>HYPERDRIVE</span>
              <br />
              ROBOT.
            </h2>

            <p>
              Designed, built and programmed by RoboVortex of
              PNC Cognitio School for the NRL Hyperdrive challenge.
              This is where our ideas become engineering.
            </p>

            <a href="#engineering" className="primary-btn">
              EXPLORE THE BUILD ↗
            </a>
          </div>
        </section>

        {/* ENGINEERING */}
        <section className="section engineering-section" id="engineering">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FROM CONCEPT TO CREATION</p>
              <h2>ENGINEERING <span>IN ACTION.</span></h2>
            </div>
            <p>
              Every mechanism, circuit and line of code has a purpose.
            </p>
          </div>

          <div className="engineering-grid">
            <article className="engineering-card">
              <span>01 / MECHANICAL</span>
              <div className="engineering-icon">⚙</div>
              <h3>MECHANICAL DESIGN</h3>
              <p>
                Robot structure, mechanisms, CAD and physical construction.
              </p>
            </article>

            <article className="engineering-card">
              <span>02 / ELECTRICAL</span>
              <div className="engineering-icon">⌁</div>
              <h3>ELECTRONICS</h3>
              <p>
                Circuits, wiring, sensors, motors and system integration.
              </p>
            </article>

            <article className="engineering-card">
              <span>03 / SOFTWARE</span>
              <div className="engineering-icon">⌘</div>
              <h3>PROGRAMMING</h3>
              <p>
                Robot logic, autonomous routines, control and debugging.
              </p>
            </article>
          </div>
        </section>

        {/* TESTING */}
        <section className="testing-section" id="testing">
          <div className="testing-copy">
            <p className="eyebrow">REAL-WORLD PERFORMANCE</p>
            <h2>TESTING<span>.</span></h2>
            <p>
              Every test helps us learn, improve and refine our robot.
              Watch RoboVortex put its work into practice.
            </p>
          </div>

          <div className="testing-video">
            <iframe
              src="https://www.youtube.com/embed/G84vUcnwlbs"
              title="RoboVortex robot testing"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="section journey-section" id="journey">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE ROAD TO COMPETITION</p>
              <h2>OUR <span>JOURNEY.</span></h2>
            </div>
            <p>
              Progress built through research, experimentation and teamwork.
            </p>
          </div>

          <div className="timeline">
            {timeline.map((step) => (
              <article className="timeline-item" key={step.phase}>
                <div className="timeline-marker">{step.phase}</div>
                <div>
                  <p className="eyebrow">PHASE {step.phase}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="section gallery-section" id="gallery">
          <div className="section-heading">
            <div>
              <p className="eyebrow">INSIDE THE WORKSHOP</p>
              <h2>THE <span>GALLERY.</span></h2>
            </div>
            <p>
              Build sessions, prototypes, tests and competition moments.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <article className="gallery-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div>
                  <span>0{index + 1} / ROBO VORTEX</span>
                  <strong>{item.title}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* OUTREACH & IMPACT */}
        <section className="section impact-section" id="impact">
          <div className="section-heading">
            <div>
              <p className="eyebrow">BEYOND THE COMPETITION FIELD</p>
              <h2>OUTREACH & <span>IMPACT.</span></h2>
            </div>
            <p>
              We want our work to reach beyond the competition field —
              sharing practical learning, documenting our process and
              encouraging curiosity about robotics and STEM.
            </p>
          </div>

          <div className="engineering-grid">
            <article className="engineering-card">
              <span>01 / LEARN</span>
              <div className="engineering-icon">◎</div>
              <h3>STEM LEARNING</h3>
              <p>
                Making robotics easier to understand by explaining the ideas,
                tools and problem-solving behind our build.
              </p>
            </article>

            <article className="engineering-card">
              <span>02 / SHARE</span>
              <div className="engineering-icon">↗</div>
              <h3>KNOWLEDGE SHARING</h3>
              <p>
                Sharing our design process, experiments and lessons so other
                students can follow how ideas become working systems.
              </p>
            </article>

            <article className="engineering-card">
              <span>03 / INSPIRE</span>
              <div className="engineering-icon">✳</div>
              <h3>COMMUNITY</h3>
              <p>
                Encouraging curiosity, collaboration and hands-on problem
                solving through our team journey.
              </p>
            </article>
          </div>
          <p className="eyebrow" style={{ marginTop: "24px" }}>
            Project and event updates will be added as activities take place.
          </p>
        </section>

        {/* SPONSORS */}
        <section className="section sponsors-section" id="sponsors">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE PEOPLE WHO SUPPORT OUR BUILD</p>
              <h2>SPONSORS & <span>SUPPORT.</span></h2>
            </div>
            <p>
RoboVortex is grateful for the guidance, learning environment and
              encouragement that help our team take on this challenge.
            </p>
          </div>

          <div className="engineering-grid">
            <article className="engineering-card">
              <span>EDUCATION PARTNER</span>
              <div className="engineering-icon">＋</div>
              <h3>PNC COGNITIO SCHOOL</h3>
              <p>
                PNC Cognitio School is our education partner and the home
                base for our NRL Hyperdrive 2026 team.
              </p>
            </article>

            <article className="engineering-card">
              <span>MENTORSHIP</span>
              <div className="engineering-icon">◎</div>
              <h3>TEAM MENTOR</h3>
              <p>
                We value the guidance and feedback that help us plan,
                troubleshoot and improve throughout the project.
              </p>
            </article>

            <article className="engineering-card">
              <span>COMMUNITY SUPPORT</span>
              <div className="engineering-icon">✳</div>
              <h3>OUR SUPPORTERS</h3>
              <p>
                We are thankful to everyone who encourages our work.
                Confirmed sponsor names and logos will be featured here
                when partnerships are officially approved.
              </p>
            </article>
          </div>
        </section>

        {/* COMPETITION */}
        <section className="results-section" id="competition">
          <p className="eyebrow">NRL HYPERDRIVE 2026 · OFFICIAL TEAM #210</p>
          <h2>
            THE
            <br />
            <span>COMPETITION.</span>
          </h2>
          <p>
            Follow the RoboVortex journey at NRL Hyperdrive 2026.
            Match updates, highlights and verified results will be added here.
          </p>
          <div className="result-placeholder">ROBO VORTEX · TEAM 210</div>
          <p className="eyebrow" style={{ marginTop: "24px" }}>
            PNC COGNITIO SCHOOL
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-brand">
          <img src="/images/robovortex-logo.png" alt="RoboVortex logo" />
          <div>
            <strong>ROBO<span className="red">VORTEX</span></strong>
            <p>ENGINEERED FOR THE CHALLENGE.</p>
          </div>
        </div>

        <div>
          <p>NRL HYPERDRIVE 2026 · TEAM #210</p>
          <p>PNC COGNITIO SCHOOL</p>
        </div>

        <div>
          <p>FOLLOW OUR JOURNEY</p>
          <a
            href="https://www.youtube.com/@RoboVortex-l6u"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube ↗
          </a>
        </div>

        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
