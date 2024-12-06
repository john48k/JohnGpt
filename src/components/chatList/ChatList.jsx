import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link>Create a New Chat</Link>
      <Link>Explore John AI</Link>
      <Link>Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link>Create a New Chat</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to John AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
