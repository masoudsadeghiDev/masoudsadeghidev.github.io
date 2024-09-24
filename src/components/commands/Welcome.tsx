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
 _____ ______   ________  ________  ________  ___  ___  ________     
|\   _ \  _   \|\   __  \|\   ____\|\   __  \|\  \|\  \|\   ___ \    
\ \  \\\__\ \  \ \  \|\  \ \  \___|\ \  \|\  \ \  \\\  \ \  \_|\ \   
 \ \  \\|__| \  \ \   __  \ \_____  \ \  \\\  \ \  \\\  \ \  \ \\ \  
  \ \  \    \ \  \ \  \ \  \|____|\  \ \  \\\  \ \  \\\  \ \  \_\\ \ 
   \ \__\    \ \__\ \__\ \__\____\_\  \ \_______\ \_______\ \_______\
    \|__|     \|__|\|__|\|__|\_________\|_______|\|_______|\|_______|

          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
 _____ ______   ________  ________  ________  ___  ___  ________     
|\   _ \  _   \|\   __  \|\   ____\|\   __  \|\  \|\  \|\   ___ \    
\ \  \\\__\ \  \ \  \|\  \ \  \___|\ \  \|\  \ \  \\\  \ \  \_|\ \   
 \ \  \\|__| \  \ \   __  \ \_____  \ \  \\\  \ \  \\\  \ \  \ \\ \  
  \ \  \    \ \  \ \  \ \  \|____|\  \ \  \\\  \ \  \\\  \ \  \_\\ \ 
   \ \__\    \ \__\ \__\ \__\____\_\  \ \_______\ \_______\ \_______\
    \|__|     \|__|\|__|\|__|\_________\|_______|\|_______|\|_______|            
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
