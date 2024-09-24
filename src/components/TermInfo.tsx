import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>terminal.masoudsadeghi.dev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
