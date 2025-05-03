"use client";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Components } from "react-markdown";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const [fontSize, setFontSize] = useState("0.7rem"); // mobile default

  useEffect(() => {
    const updateFontSize = () => {
      setFontSize(window.innerWidth >= 768 ? "1rem" : "0.7rem");
    };
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  const components: Components = {
    code({ className, children, ...props }) {
      const isInline = className === undefined;
      const match = /language-(\w+)/.exec(className || "");

      if (!isInline && match) {
        return (
          <div className="text-sm md:text-base leading-relaxed">
            <SyntaxHighlighter
              language={match[1]}
              style={vscDarkPlus}
              customStyle={{
                background: "none",
                padding: 0,
                margin: 0,
              }}
              codeTagProps={{
                style: {
                  fontSize,
                },
              }}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          </div>
        );
      }

      return (
        <code
          className="bg-gray-100 px-1 py-0.5 rounded text-sm md:lg"
          {...props}
        >
          {children}
        </code>
      );
    },
  };

  return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
};

export default MarkdownRenderer;
