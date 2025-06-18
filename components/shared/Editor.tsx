"use client";
import { Copy, Trash2, Maximize2, Minimize2, Edit3 } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useEffect, useState, useRef } from "react";
import { useToast } from "../ui/use-toast";

const Editor = () => {
  const [isActive, setIsActive] = useState(false);
  const [textToCopy, setTextToCopy] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (textToCopy) {
      const words = textToCopy.trim().split(/\s+/);
      setWordCount(words.filter((word) => word !== "").length);
      setCharCount(textToCopy.length);
    } else {
      setWordCount(0);
      setCharCount(0);
    }
  }, [textToCopy]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) timer = setTimeout(() => setIsActive(false), 2000);
    return () => clearTimeout(timer);
  }, [isActive]);

  const handleCopyButtonClick = () => {
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setIsActive(true);
      toast({
        title: "Text Copied!",
        description: "Your text has been copied to clipboard",
        duration: 2000,
        className: "bg-green-600 text-white",
      });
    } else {
      toast({
        title: "Empty Editor",
        description: "Please enter some text to copy",
        duration: 3000,
        className: "bg-red-500 text-white",
      });
    }
  };

  const handleClearText = () => {
    setTextToCopy("");
    if (textareaRef.current) textareaRef.current.focus();
    toast({
      title: "Editor Cleared",
      description: "All text has been removed",
      duration: 2000,
      className: "bg-blue-500 text-white",
    });
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextToCopy(event.target.value);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      handleCopyButtonClick();
    }
  };

  return (
    <div
      className={`relative w-full ${
        isFullscreen ? "fixed inset-0 z-50 p-5 " : "p-1"
      }`}
    >
      <div
        className={`flex flex-col gap-4 h-full ${
          isFullscreen ? "max-w-6xl mx-auto" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
            <Edit3 size={20} /> Text Editor
          </h2>

          <div className="flex gap-2">
            <Button
              onClick={toggleFullscreen}
              variant="ghost"
              size="icon"
              className="rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-[#00F0FF]"
            >
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </Button>
          </div>
        </div>

        <div className="relative flex-1">
          <Textarea
            ref={textareaRef}
            value={textToCopy}
            onChange={handleTextChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter your text here..."
            className={`w-full h-full bg-transparent p-4 d rounded-lg border border-[#00F0FF]/30 focus:border-[#00F0FF] text-white text-lg shadow-lg shadow-[#00F0FF]/10 transition-all ${
              isFullscreen ? "min-h-[80vh]" : "min-h-[30vh] md:min-h-[50vh]"
            }`}
          />

          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button
              onClick={handleClearText}
              variant="ghost"
              size="icon"
              className="rounded-full bg-red-900/30 hover:bg-red-800 text-red-400"
              title="Clear text"
            >
              <Trash2 size={18} />
            </Button>

            <Button
              onClick={handleCopyButtonClick}
              className={`rounded-full flex items-center gap-2 transition-all ${
                isActive
                  ? "bg-green-700 hover:bg-green-600 text-white"
                  : "bg-gradient-to-r from-[#00F0FF] to-[#B026FF] hover:from-[#00F0FF]/90 hover:to-[#B026FF]/90 text-black"
              }`}
            >
              <Copy size={18} />
              {isActive ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center text-sm text-gray-400">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <span className="font-bold text-[#00F0FF]">{wordCount}</span>
              <span>words</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-[#B026FF]">{charCount}</span>
              <span>characters</span>
            </div>
          </div>

          <div className="flex gap-1">
            <kbd className="px-2 py-1 bg-[#1a1a1a] rounded text-xs border border-[#00F0FF]/30">
              Ctrl
            </kbd>
            <span className="mx-1">+</span>
            <kbd className="px-2 py-1 bg-[#1a1a1a] rounded text-xs border border-[#00F0FF]/30">
              C
            </kbd>
            <span className="ml-2">to copy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
