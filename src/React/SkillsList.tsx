import React from "react";

type Category = {
  title: string;
  blurb: string;
  icon: React.ReactNode;
  items: string[];
};

const iconClass = "w-6 h-6";

const categories: Category[] = [
  {
    title: "AI & Agents",
    blurb: "Building intelligent, autonomous systems",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
        <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z" />
      </svg>
    ),
    items: [
      "GenAI, LangGraph & agentic workflows",
      "RAG pipelines (FAISS, OpenSearch)",
      "Amazon Bedrock & multi-model routing",
      "Edge inference — YOLO / RT-DETR on Jetson",
    ],
  },
  {
    title: "Full Stack",
    blurb: "End-to-end product engineering",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
        <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z" />
      </svg>
    ),
    items: [
      "Next.js & React for production apps",
      "FastAPI, Flask & Node.js backends",
      "REST APIs & microservices",
      "PostgreSQL, MongoDB, DynamoDB, Redis",
    ],
  },
  {
    title: "Cloud & DevOps",
    blurb: "Shipping & running it at scale",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
        <path d="M17 7C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C7.0241 7 7.04817 7.00017 7.07221 7.0005C8.13261 5.16928 10.1224 4 12.3438 4C15.0009 4 17.2853 5.74233 18.0312 8.20846ZM11 11V14H13V11H16L12 7L8 11H11Z" />
      </svg>
    ),
    items: [
      "AWS (ECS Fargate, Lambda, S3) & GCP",
      "Docker, Terraform & Linux networking",
      "Self-hosted CI/CD for SOC2 compliance",
      "Prometheus & Grafana observability",
    ],
  },
  {
    title: "Languages & Systems",
    blurb: "Performance & reliability at the core",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM13 15H18V17H13V15ZM9.41421 12L6.58579 14.8284L8 16.2426L12.2426 12L8 7.75736L6.58579 9.17157L9.41421 12Z" />
      </svg>
    ),
    items: [
      "Python, Go, C++, Java & TypeScript",
      "Fault-tolerant systems (Sophgo SDK)",
      "Performance optimization & profiling",
      "Unit testing, debugging & PR reviews",
    ],
  },
];

const SkillsList = () => {
  return (
    <div className="w-full text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="group relative edge-light rounded-2xl p-5 md:p-6 bg-[var(--surface)] border border-[var(--border)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[rgba(99,102,241,0.2)] to-[rgba(6,182,212,0.15)] text-[var(--sec)] border border-[var(--border)] transition-colors group-hover:text-white">
                {cat.icon}
              </span>
              <div className="min-w-0">
                <h4 className="text-[var(--white)] text-lg font-semibold leading-tight truncate">
                  {cat.title}
                </h4>
                <p className="text-xs text-[var(--white-icon)] truncate">{cat.blurb}</p>
              </div>
            </div>

            <ul className="space-y-2.5">
              {cat.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--white-icon)] leading-snug">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--accent-2)]"
                  >
                    <path d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2426L17.6569 9.17157L16.2427 7.75736L10.5858 13.4142Z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
