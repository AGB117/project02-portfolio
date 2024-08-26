import classes from "./LandingPage.module.css";
import Card from "../ui/Card";
import Link from "next/link";
import { CalendarBlank, MapPin } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

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
          contribute my expertise to a dynamic web development team.
        </p>
      </section>

      <section id="education" className={classes.education}>
        <h2>Education</h2>
        <h1>Bachelor of Science in Chemical Engineering</h1>
        <p>Mayaguez, PR 2014</p>
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
              Analyze a variety of samples using analytical lab instruments.
            </li>

            <li>
              Design, set up and conduct tests for various lab scale research
              projects.
            </li>
            <li> Help implement lab scale projects to industry scale. </li>
            <li>
              Operation of mineral processing equipment (jaw crusher, Bico-Braun
              ball or rod mill, wet & dry sieve screening) to prepare materials
              for accurate analysis in the wet chemistry lab.
            </li>
            <li> Perform phosphate flotation for reagent testing purposes. </li>
            <li>
              Operation and troubleshooting of analytical laboratory equipment
              including Flow Injection Analysis (Ion Chromatography), ICP-OES
              (optical emission spectrometry) to obtain quantitative properties
              of various materials (solid and liquid) and Particle Size Analyzer
              for dry and slurry samples. Mostly for REE (rare earths) and
              phosphate concentrations.
            </li>
            <li>
              Perform testing of samples using a variety of analytical chemistry
              techniques (titration, pH adjustments, fluoride concentration in
              soil, silica concentration, citrate insoluble etc.)
            </li>
            <li>
              Author various laboratory SOPs (sample preparation, standard
              formulation etc.)
            </li>
            <li>Train personnel in a variety of lab SOPs. </li>
          </ul>
        </div>
      </section>

      <section id="skills" className={classes.skills}>
        <h2>Skills</h2>
        <div>
          <ul>
            <li>Programming Languages: HTML, CSS, JavaScript, TypeScript.</li>
            <li>Web Development Libraries: ReactJS.</li>
            <li>Web Development Frameworks: NextJS.</li>
            <li>Database Management: MongoDB, Supabase.</li>
            <li>Version Control: Git,Github.</li>
            <li>Problem-Solving and Analytical Thinking.</li>
            <li>Strong communication and collaboration Skills.</li>
          </ul>
        </div>
      </section>

      <section id="work" className={classes.work}>
        <h2>Work</h2>
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

          {/* <div className={classes.cardFlexCenter}>
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
          </div> */}
        </div>
      </section>

      <section id="contact" className={classes.contact}>
        <h2>Contact</h2>
        <div className={classes.contactLinks}>
          <ul>
            <li>abner.gonzalez4@gmail.com</li>
            <li>
              <a href="https://www.linkedin.com/in/abner-gonzalez/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/AGB117">Github</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
