import Image from "next/image";
import Link from "next/link";

export default function HeroHomePage() {
  return (
    <>
      <section className="section-group">
        <div className="project-results2">
          <div className="container-project">
            <h2>About me</h2>
          </div>
          <div className="project-group">
            <div className="project-group-image">
              <Image
                src="/images/personal_avatar.png"
                alt="Adriana Nobre Lawrence Avatar"
                width="8"
                height="8"
                layout="responsive"
              />
            </div>
            <div className="project-group-text">
              <p>
                In my free time, I love spending time with{" "}
                <b>family and friends</b>. A perfect Sunday for me is having a
                big family lunch in a very noisy house (as Brazilians usually
                have big families) and my friends end up joining us at my
                grandmother`s house too.
              </p>
              <br></br>
              <p>
                Another side of me is my <b>love of travelling</b>. My passion
                came from my family, where we used to travel every year to
                somewhere different. So far, I have lived in California,
                Australia, Italy and UK.
              </p>
              <br></br>
              {/* <p>
                I believe we can make a different in each others lives and small
                actions can bring real benefits to the society. We can all do
                our part.
              </p> */}
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section className="section-group">
        <div className="project-results1">
          <div className="container-project">
            <h2>Professional journey</h2>
          </div>
          <div className="project-group">
            <div className="project-group-text">
              <p>
                I decided to pursue a <b>dream</b> of becoming a developer by
                enrolling on the School of Code(SoC) bootcamp, in which they
                selected 200 candidates from 1.8 submissions.
                <br></br> During the whole program, I have{" "}
                <b>rediscovered myself</b>, became a better <b>team player</b>{" "}
                and re-learnt how to <b>learn</b>. I can`t wait to start the
                next chapter of my life to implement everything I learned and
                learn more from experts in order to make people`s lives better.
              </p>
              <h4 className="desktop-only">Who I was before the bootcamp...</h4>
              <p className="desktop-only">
                I am a skilled and dedicated{" "}
                <b>business analyst and project manager</b> with over 10 years`
                experience across a range of organisations, from private
                companies to non-profit organisations and the public sector.
              </p>
              <br></br>
              <div>
                <a href="https://www.linkedin.com/in/adriana-nobre-lawrence/">
                  Read more at Linkedin
                </a>
              </div>
            </div>
            <div className="project-group-image">
              <Image
                src="/images/data-analysis.png"
                alt="Adriana Nobre Lawrence Avatar"
                width="8"
                height="8"
                layout="responsive"
                className="opacity"
              />
            </div>
          </div>
        </div>
        {/* </div>
        </div> */}
      </section>
      <section className="section-group">
        <div className="project-results2">
          <div className="container-project">
            <h2>Projects</h2>
          </div>
          <div className="project-group">
            <div className="project-group-image">
              <Image
                className="image-size"
                src="/images/projects.png"
                width="8"
                height="6"
                layout="responsive"
                alt="project"
              />
            </div>

            <div className="project-group-text">
              <div>
                <p>
                  During the projects, I tried to apply the different concepts
                  we have learnt at the School of Code. It`s incredible to see
                  how much I have learnt from creating an HTML page to building
                  React applications in only 12 weeks. I hope you enjoy seeing
                  what I`ve produced individually and as a team.
                </p>
              </div>
              <br></br>
              <div>
                <Link href="/projects">
                  <a className="read-more">See the latest</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
