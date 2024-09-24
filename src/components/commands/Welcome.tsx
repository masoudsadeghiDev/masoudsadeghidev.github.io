import {
  Cmd,
  HeroContainer,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
______  ___                          _________
___   |/  /_____ _________________  _______  /
__  /|_/ /_  __ /_  ___/  __ \  / / /  __  / 
_  /  / / / /_/ /_(__  )/ /_/ / /_/ // /_/ /  
/_/  /_/  \__,_/ /____/ \____/\__,_/ \__,_/ 
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
______  ___                          _________
___   |/  /_____ _________________  _______  /
__  /|_/ /_  __ /_  ___/  __ \  / / /  __  / 
_  /  / / / /_/ /_(__  )/ /_/ / /_/ // /_/ /  
/_/  /_/  \__,_/ /____/ \____/\__,_/ \__,_/  
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Hi there, I'm Masoud 👋</div>
        <Seperator>----</Seperator>
        <div>
          Backend developer specializing in Java, with a keen interest in Go and algorithms.
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
       
      </div>
    </HeroContainer>
  );
};

export default Welcome;
