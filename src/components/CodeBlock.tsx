import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock = ({ code, language = "javascript", title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  // Simple syntax highlighting for JavaScript
  const highlightCode = (code: string) => {
    return code
      .replace(/(function|const|let|var|if|else|for|while|return|true|false|null|undefined)/g, 
        '<span class="syntax-keyword">$1</span>')
      .replace(/(["'].*?["'])/g, '<span class="syntax-string">$1</span>')
      .replace(/(\d+)/g, '<span class="syntax-number">$1</span>')
      .replace(/(\/\/.*$)/gm, '<span class="syntax-comment">$1</span>');
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-card">
      {title && (
        <div className="bg-muted px-4 py-2 border-b border-border flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">{title}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 w-8 p-0"
          >
            {copied ? (
              <Check className="w-4 h-4 text-accent" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
          <code
            dangerouslySetInnerHTML={{
              __html: highlightCode(code),
            }}
          />
        </pre>
        {!title && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="absolute top-2 right-2 h-8 w-8 p-0 opacity-70 hover:opacity-100"
          >
            {copied ? (
              <Check className="w-4 h-4 text-accent" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CodeBlock;