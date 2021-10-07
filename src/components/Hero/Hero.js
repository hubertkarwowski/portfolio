import {
  HeroDescription,
  HeroSection,
  HeroName,
  HeroAboutMe,
  HeroButton,
} from "./HeroElements";

function Hero() {
  return (
    <HeroSection>
      <HeroDescription>
        <HeroName>
          <h1>HUBERT KARWOWSKI</h1>
        </HeroName>
        <HeroAboutMe>
          <h4>
            I’m self-taught <span>Front-end developer </span> focused on
            creating clean and user-friendly websites.
          </h4>
        </HeroAboutMe>
      </HeroDescription>
      <HeroButton>
        <a href="#portfolio">CHECK OUT MY WORK</a>
      </HeroButton>
    </HeroSection>
  );
}

export default Hero;
