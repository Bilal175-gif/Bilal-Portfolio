import type { CSSProperties } from "react";

const stack = [
  { name: "Python", logo: "/tech/python.svg", tone: "python" },
  { name: "Gemini", logo: "/tech/gemini.svg", tone: "gemini" },
  { name: "LangChain", logo: "/tech/langchain.svg", tone: "langchain" },
  {
    name: "Hugging Face",
    logo: "/tech/hugging-face.svg",
    tone: "huggingface",
  },
];

export function CodeProfileCard() {
  return (
    <div className="code-profile">
      <div className="code-profile__glow" aria-hidden="true" />
      <div className="code-window">
        <div className="code-window__bar">
          <span className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>ai_engineer.py</span>
          <span className="code-window__status">Python</span>
        </div>
        <div
          className="code-window__body"
          role="img"
          aria-label="Generative AI Engineer profile for Muhammad Bilal"
        >
          <ol className="code-lines">
            <li>
              engineer = {"{"}
            </li>
            <li>
              &nbsp;&nbsp;name: <span className="syntax-string">&apos;Muhammad Bilal&apos;</span>,
            </li>
            <li>
              &nbsp;&nbsp;role:{" "}
              <span className="syntax-string">&apos;Generative AI Engineer&apos;</span>,
            </li>
            <li>
              &nbsp;&nbsp;focus: [
            </li>
            <li>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">&apos;LLM apps&apos;</span>,{" "}
              <span className="syntax-string">&apos;Retrieval&apos;</span>,{" "}
              <span className="syntax-string">&apos;AI products&apos;</span>
            </li>
            <li>
              &nbsp;&nbsp;],
            </li>
            <li>
              &nbsp;&nbsp;stack: {"{"}
            </li>
            <li>
              &nbsp;&nbsp;&nbsp;&nbsp;models: [
              <span className="syntax-string">&apos;OpenAI&apos;</span>,{" "}
              <span className="syntax-string">&apos;Gemini&apos;</span>,{" "}
              <span className="syntax-string">&apos;Llama 2&apos;</span>],
            </li>
            <li>
              &nbsp;&nbsp;&nbsp;&nbsp;orchestration: [
              <span className="syntax-string">&apos;LangChain&apos;</span>,{" "}
              <span className="syntax-string">&apos;Hugging Face&apos;</span>],
            </li>
            <li>
              &nbsp;&nbsp;&nbsp;&nbsp;vectors: [
              <span className="syntax-string">&apos;Pinecone&apos;</span>,{" "}
              <span className="syntax-string">&apos;ChromaDB&apos;</span>]
            </li>
            <li>
              &nbsp;&nbsp;{"}"},
            </li>
            <li>
              &nbsp;&nbsp;status:{" "}
              <span className="syntax-string">&apos;Open to opportunities&apos;</span>
            </li>
            <li>{"}"}</li>
          </ol>
        </div>
      </div>

      <aside className="stack-card" aria-label="Core technology stack">
        <p>Core stack</p>
        <ul>
          {stack.map(({ name, logo, tone }, index) => (
            <li
              key={name}
              data-tone={tone}
              style={{ "--logo-delay": `${index * 180}ms` } as CSSProperties}
            >
              <img aria-hidden="true" alt="" height="24" src={logo} width="24" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
