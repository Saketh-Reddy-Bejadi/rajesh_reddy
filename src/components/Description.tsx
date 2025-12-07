import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "github-markdown-css/github-markdown.css";
import type { DescriptionProps } from "../types";
import { useParams } from "react-router";
import PROJECTS from "../data/projects";
import BLOGS from "../data/blogs";

const Description: React.FC<DescriptionProps> = ({ theme }) => {
  const ELEMENTS = [...PROJECTS, ...BLOGS];
  const [element, setElement] = useState<string>("");
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;

    const ele = ELEMENTS.find((e) => e.id === id);

    if (ele?.src) {
      import(/* @vite-ignore */ `${ele.src}?raw`)
        .then((mod) => setElement(mod.default))
        .catch(() => setElement("Failed to load markdown file."));
    }
  }, [id]);

  const isDark = theme === "dark";

  return (
    <div className="flex justify-center">
      <article
        className="markdown-body max-w-[980px] w-full p-4 md:p-8"
        style={{
          backgroundColor: "transparent",
          color: isDark ? "#e5e7eb" : "#111827",
        }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {element}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default Description;
