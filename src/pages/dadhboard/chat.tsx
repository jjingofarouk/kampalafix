import ChatWindow from '../../components/Chat/ChatWindow';
import Sidebar from '../../components/Layout/Sidebar';

export default function DashboardChat() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Chat</h1>
        <ChatWindow />
      </div>
    </div>
  );
}