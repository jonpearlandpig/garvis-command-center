import { useState, useRef, useEffect } from "react";
import { Send, Trash2, Bot, User, Terminal } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const defaultMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "GARVIS INTELLIGENCE SYSTEM ONLINE.\n\nI am your sovereign intelligence assistant. I can help you with system queries, documentation, architecture analysis, and operational guidance.\n\nHow may I assist you?",
    timestamp: new Date(),
  },
];

const GarvisChat = () => {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulated response
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `PROCESSING QUERY: "${userMsg.content}"\n\nThis is a demonstration instance. Connect a backend API to enable full GARVIS AI capabilities including document analysis, system queries, and operational guidance.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  return (
    <div className="space-y-4 h-[calc(100vh-12rem)] flex flex-col">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">GARVIS AI</h1>
          <p className="text-muted-foreground text-sm">Sovereign intelligence assistant</p>
        </div>
        <button
          onClick={() => setMessages(defaultMessages)}
          className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>

      <div className="flex items-center gap-2 bg-card border border-border px-4 py-2">
        <Terminal size={14} className="text-primary" />
        <span className="text-xs text-muted-foreground tracking-wider">GARVIS TERMINAL v2.0 — ENCRYPTED CHANNEL</span>
        <span className="ml-auto w-2 h-2 bg-status-online rounded-full animate-pulse" />
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 pr-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-8 h-8 border flex items-center justify-center flex-shrink-0 ${
                msg.role === "user"
                  ? "border-muted-foreground"
                  : "border-primary bg-primary/10"
              }`}
            >
              {msg.role === "user" ? (
                <User size={14} />
              ) : (
                <Bot size={14} className="text-primary" />
              )}
            </div>
            <div className={`flex-1 max-w-[80%] ${msg.role === "user" ? "text-right" : ""}`}>
              <div
                className={`inline-block p-4 text-sm whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-secondary border border-border"
                    : "bg-card border border-primary/30"
                }`}
              >
                {msg.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="ASK GARVIS..."
          className="flex-1 bg-card border border-border px-4 py-3 text-sm tracking-wider placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
        <button
          onClick={handleSend}
          className="bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default GarvisChat;
