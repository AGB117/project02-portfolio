import classes from "./LandingPage.module.css";
import Card from "../ui/Card";
import Link from "next/link";
import { CalendarBlank, MapPin } from "@phosphor-icons/react";

function LandingPage(props) {
  return (
    <div className={classes.landingContainer}>
      <section id="about" className={classes.about}>
        <h2>
          Web
          <div>Developer</div>
        </h2>
        <p>
          A highly motivated chemical engineer with a passion for technology and
          computers, seeking to transition into a web development career. My
          skills include HTML, CSS, JavaScript. My favorite way of using these
          technologies is through the REACT.js library and the Next.js framework
          to design websites from the ground up. Combining my technical skills,
          analytical mindset, and problem-solving abilities, I am eager to
          contribute to a dynamic web development team.
        </p>
      </section>

      <section id="education" className={classes.education}>
        <h2>Education</h2>
        <h1>Bachelor of Science in Chemical Engineering</h1>
        <p>Universidad de Puerto Rico, Mayaguez Campus 2014</p>
      </section>

      <section id="experience" className={classes.experience}>
        <h2>Experience</h2>
        <h1>Research assistant</h1>
        <p>Florida Polytechnic University</p>
        <div className={classes.expDateLocContainer}>
          <div className={classes.expDate}>
            <div className={classes.iconContainer}>
              <CalendarBlank size={32} />
            </div>
            <div>Feb 2014 - Present</div>
          </div>
          <div className={classes.expLoc}>
            <div className={classes.iconContainerMap}>
              <MapPin size={32} />
            </div>
            <div>Bartow, FL</div>
          </div>
        </div>
        <div>
          <ul>
            <li>
              Analysis of samples (liquid and solid) using analytical lab
              instruments producing accurate and reliable results for clients
              99% of the time.
            </li>

            <li>
              Designed, set up and conducted tests for lab scale research
              projects resulting in accurate data generation and increasing
              current projects by 50%.
            </li>
            <li>
              {" "}
              Headed the implementation of lab scale projects to industry scale
              driving a 20% increase in service demand by implementing
              streamlined processes.{" "}
            </li>
            <li>
              Authored laboratory SOPs (sample preparation, standard
              formulation) resulting in a streamlined and straightforward
              laboratory work flow and increasing efficiency of the lab by 30%.
            </li>
            <li>
              {" "}
              Trained personnel and coached students in lab SOPs to ensure
              continuous operation of the chemistry laboratory resulting in an
              increased output speed of 50%.
            </li>
            <li>
              Operated and troubleshooted analytical laboratory equipment to
              ensure accurate analysis of the sampling process, mostly for REE
              (rare earths) and phosphate concentrations resulting in an uptime
              of 95%.
            </li>
            <li>
              Learned new analysis equipment within the laboratory to increase
              available laboratory services by 30%.
            </li>
            <li>
              Learned new roles at the university to increase knowledge base and
              avoid downtime resulting in delivering quality results 95% of the
              time in a timely manner.
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" className={classes.skills}>
        <h2>Skills</h2>
        <div>
          <ul>
            <li>
              Programming Languages: HTML, CSS, JavaScript and TypeScript.
            </li>
            <li>Web Development Libraries: ReactJS.</li>
            <li>Web Development Frameworks: NextJS.</li>
            <li>Database Management: MongoDB, Supabase.</li>
            <li>Version Control: GitHub.</li>
            <li>Problem-Solving and Analytical Thinking.</li>
            <li>Strong Communication and Collaboration Skills.</li>
          </ul>
        </div>
      </section>

      <section id="Portfolio Projects" className={classes.work}>
        <h2>Portfolio Projects</h2>
        <div className={classes.projectsContainer}>
          <div className={classes.cardContainer}>
            <div className={classes.cardFlexCenter}>
              <Card>
                <div className={classes.workImg}>
                  <img src="project01.webp" />
                </div>
                <div className={classes.projectName}>Restaurant Project</div>
                <div className={classes.linksContainer}>
                  <div>
                    <a href="https://project01-restaurant.vercel.app/">
                      <img src="/Vercel-modified.webp" />
                    </a>
                    <div>
                      <a href="https://project01-restaurant.vercel.app/">
                        Vercel
                      </a>
                    </div>
                  </div>
                  <div>
                    <Link href="https://github.com/AGB117/project01-restaurant">
                      <img src="/githubcircle-modified.webp" />
                    </Link>
                    <div>
                      <a href="https://github.com/AGB117/project01-restaurant">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className={classes.cardContainer}>
            <div className={classes.cardFlexCenter}>
              <Card>
                <div className={classes.workImg}>
                  <img src="project03.webp" />
                </div>
                <div className={classes.projectName}>Video Game Hoard</div>
                <div className={classes.linksContainer}>
                  <div>
                    <a href="https://project03-videogamehoard.vercel.app/">
                      <img src="/Vercel-modified.webp" />
                    </a>
                    <div>
                      <a href="https://project03-videogamehoard.vercel.app/">
                        Vercel
                      </a>
                    </div>
                  </div>
                  <div>
                    <Link href="https://github.com/AGB117/project03-videogamehoard">
                      <img src="/githubcircle-modified.webp" />
                    </Link>
                    <div>
                      <a href="https://github.com/AGB117/project03-videogamehoard">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={classes.contact}>
        <h2>Contact</h2>
        <div className={classes.contactLinks}>
          <ul>
            <li>abner.gonzalez4@gmail.com</li>
            <li>
              <button>
                <a href="https://www.linkedin.com/in/abner-gonzalez/">
                  <p>LinkedIn</p>
                </a>
              </button>
            </li>
            <li>
              <button>
                <a href="https://github.com/AGB117">
                  <p>Github</p>
                </a>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
