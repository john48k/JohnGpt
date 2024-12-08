import "./chat-page.css";
import NewPrompt from "../../components/new-prompt/new-prompt";

const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test Message From AI</div>
          <div className="message user">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            necessitatibus aspernatur deserunt facilis nostrum ipsam sit minima
            reiciendis ipsum eum praesentium repellat laudantium, excepturi cum
            consequatur asperiores in quaerat fugiat!
          </div>
          <div className="message">Test Message From AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message From AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message From AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message From AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message From AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message From AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message From AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message From AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message From AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message From AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message From AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message From AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test Message From AI</div>
          <div className="message user">Test message from user</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
