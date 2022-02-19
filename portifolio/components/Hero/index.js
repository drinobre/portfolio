export default function HeroHomePage() {
  return (
    <>
      <section className="section-group">
        <div className="project-results">
          <div className="container-project">
            <h1>About me</h1>
          </div>
          <div className="project-group">
            <div className="project-group-image">
              <img
                src="https://www.internetmatters.org/wp-content/uploads/2019/04/avataaars-9-1-150x150.png"
                alt="Adriana Nobre Lawrence Avatar"
              ></img>
            </div>
            <div className="project-group-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen bookLorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
          <div>
            {/* <p>
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry.
            </p> */}
          </div>
        </div>
      </section>
      <section className="section-group">
        <div className="project-results">
          <div className="container-project">
            <h1>Professional journey</h1>
          </div>
          <div className="project-group">
            <div className="project-group-text">
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen bookLorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p> */}

              <div className="project-group-text">
                {/* <h3>Starting a new carrer...</h3> */}
                <p>
                  During 16 weeks I become a bootcamper at School of Code to
                  become a Full Stack developer. The journey wasn't easy as you
                  have to reinvent yourself and learn to learn as the pace of
                  the course and the rapdly changing in technology you must lern
                  to read documentation, use npm packages to speed up
                  implementation.
                  <p>
                    I have learnt to be a better team player as we were working
                    with people from different backgrounds, ways of working and
                    you know what there is no better way of learning than
                    practising with other team members.
                  </p>
                </p>
              </div>
              <div className="project-group">
                <div className="project-group-text">
                  <h4>Who I was before the bootcamper...</h4>
                  <p>
                    A skilled and dedicated Business Analyst and Digital
                    Analytics Manager with over 10 year's experience, across a
                    range of organisations from private companies to a
                    non-profit organisation and the public sector. Delivers
                    compelling and well-received outcomes to a range of high
                    profile leading companies including BT, Sky, TalkTalk,
                    Virgin Media, Facebook, Samsung and the UK Government Home
                    Office. International coverage, having worked in three
                    different countries and cultures within Australasia, South
                    America and Europe.
                  </p>
                </div>
                <div className="project-group-image">
                  <img src="" alt="Adriana Nobre Lawrence Avatar"></img>
                </div>
              </div>
              <div className="testimonial">
                <p>
                  Working with Adriana, you instantly see her dedication to her
                  craft and her love for detail and purpose. She is proactive
                  and great under pressure. She always seeks to answer the
                  questions before you've even ask them, in doing so
                  anticipating potential issues. On many projects that I have
                  worked with her on, she has been a vital part of the team,
                  contributing above and beyond her core objectives. She is a
                  powerful asset to any successful business and I would
                  definitely say that she would add value in any position she is
                  offered.
                  <p>Ghislaine Bombusa, Head of Digital at Internet Matters</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-group">
        <div className="project-results">
          <div className="container-project">
            <h1>Projects</h1>
          </div>
          <div className="project-group">
            <div className="project-group-text">
              <div>
                <p>
                  During the projects, I tried to apply the different concepts
                  we have learnt at School of Code and the projects are mainly
                  build using Node.js, React.js and Next.js. The main language
                  used is JavaScript but when using any kind of interaction with
                  database I've used SQL. It's incredible to see how much I have
                  learnt from creating a single page to build a React and Next
                  applications in only 16 weeks. I hope you enjoy seeing what
                  I've produced individually and as a team.
                </p>
              </div>
              <div>
                <a href="/projects">Read more about my new projects</a>
              </div>
            </div>
            <div className="project-group-image">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
