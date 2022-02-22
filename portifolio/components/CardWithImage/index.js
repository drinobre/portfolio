import Image from "next/image";

export default function CardWithImage() {
  <section className="section-group">
    <div className="project-results1">
      <div className="container-project">
        <h1>About me</h1>
      </div>
      <div className="project-group1">
        <div className="project-group-image">
          {/* <Image
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown"
            alt="Adriana Nobre Lawrence Avatar"
          /> */}
          <Image
            src="/images/data-analysis.png"
            alt="Adriana Nobre Lawrence Avatar"
            layout="fill"
          />
          <h4>Brazilian, with italian background who lives in UK</h4>
        </div>
        <div className="project-group-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen bookLorem Ipsum is simply dummy text of the printing
            and typesetting industry.
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
  </section>;
}
