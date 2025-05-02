export default function TypingIndicator() {
  return (
    <div className="p-2">
      <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
      <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></span>
      <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></span>
    </div>
  );
}