// DashboardChat.jsx
import ChatWindow from '../../components/Chat/ChatWindow';
import Sidebar from '../../components/Layout/Sidebar';

export default function DashboardChat() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100">
      <Sidebar />
      <main className="flex-1 p-10">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-8">Chat</h1>
        <ChatWindow className="rounded-xl shadow-lg bg-white" />
      </main>
    </div>
  );
}