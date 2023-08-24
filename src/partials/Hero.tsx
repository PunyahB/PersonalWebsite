import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Punyah Baghla</GradientText>{' '}
          <span className="wave">👋</span>
        </>
      }
      description={
        <div className="mt-6 text-xl leading-9">
          <p>I am a student at Bhavans Rajaji Vidyashram.</p>{' '}
          <p>
            I am studying Computer Science with Physics, Chemistry, Mathematics,
            and aim to pursue my higher studies in the United States.
          </p>{' '}
          <p>
            My typical day revolves around coding, staying updated with new
            technologies, engaging in continuous learning through books, and
            involving myself in outdoor activities. I also have a passion
            building projects that are impactful and meaningful.
          </p>
        </div>
      }
      avatar={
        <img
          className="h-96 w-96"
          src="/assets/images/avatar.webp"
          alt="Avatar image"
          loading="eager"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/iamrockstar211">
            <HeroSocial
              src="/assets/images/social/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/punyah-baghla-2b9ab3289/">
            <HeroSocial
              src="/assets/images/social/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/PunyahB">
            <HeroSocial
              src="/assets/images/social/github-logo.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
