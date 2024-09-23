import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Masoud Sadeghi</HighlightSpan>!
      </p>
      <p>
        I'm a <HighlightAlt>Backend Developer </HighlightAlt>with a focus on building scalable and efficient systems using<HighlightAlt> Java</HighlightAlt>.
        <br />
        <br />
        My expertise lies in working with:
        <br />
        <br />
      </p>
      <p>
          SQL (PostgreSQL, MySQL)<br />
          NoSQL (MongoDB, Redis) <br />
          Message Brokers (RabbitMQ, Kafka)<br />
          Spring Boot for microservices architecture<br />
      </p>
    </AboutWrapper>
  );
};

export default About;
