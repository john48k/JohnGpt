import { useEffect, useRef } from "react";
import "./chat-page.css";

const ChatPage = () => {
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
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
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
