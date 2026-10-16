# Future Plans & Engineering Roadmap

This document outlines the planned roadmap, feature backlogs, DevOps enhancements, and long-term technical learning milestones for **Soojan Basu** and the portfolio codebase.

---

## 1. Portfolio Roadmap & UI Enhancements

### Phase 1: Immediate Backlog (Pending Asset & URL Supply)
* [ ] **Personal Headshot Integration**:
  * Drop personal photo into `public/soojan_basu.jpg`.
  * Set `avatarUrl: "/soojan_basu.jpg"` in [`src/content/portfolio.ts`](../src/content/portfolio.ts).
  * Automatically display personal photo within the glowing rounded avatar frame in [`Hero.tsx`](../src/components/Hero.tsx).
* [x] **Project Repositories & Live Demos**:
  * Added repository URLs and live deployment links to [`portfolio.ts`](../src/content/portfolio.ts) (VRCookiez, DisasterReady, Credify).
  * Enabled interactive action buttons (*"GitHub ↗"*, *"Live Demo ↗"*) on project cards in [`Projects.tsx`](../src/components/Projects.tsx).
* [x] **One-Click Email Copy Interaction**:
  * Unified single-pill layout with `supersoojanbasu@gmail.com` and clipboard copy button with instantaneous visual toast feedback (*"Copied!"*) and accessible screen-reader announcement.

### Phase 2: User Experience Polish
* [x] **HumanizeTech UI Design Variant (`humanize_UI` branch)**:
  * Established specialized branch with Humanize Royal Blue (`#1460d0`) to Lime Green (`#7ec500`) signature gradients, 2px topbar accent line, accent-bar eyebrows, and enterprise contrast.
* [ ] **Print Stylesheet (`@media print`)**:
  * Add clean print styles that format the portfolio into a clean, one-page executive resume summary when pressing `Ctrl + P`.
* [ ] **Interactive System Architecture Walkthroughs**:
  * Add expandable modal dialogs or lightweight slide-over panels for key projects showcasing interactive system architecture diagrams (e.g. Mermaid pipeline flows).
* [ ] **Technical Writing / Case Studies Section**:
  * A lightweight markdown-powered blog or articles section documenting practical learnings in LLM orchestration, async Python, and embedded BLE communications.

---

## 2. CI/CD & DevOps Automation

* [ ] **Activate GitHub Actions CI Quality Gate**:
  * Implement the workflow documented in [`docs/github_actions.md`](github_actions.md) (`.github/workflows/ci.yml`).
  * Enforce automated linting (`oxlint`), typechecking (`tsc -b`), production building, and bundle size budget checks on all pull requests.
* [ ] **Automated Netlify Deploy Previews**:
  * Configure Netlify GitHub App integration to spin up temporary preview environments for every pull request opened against `main`.
* [ ] **Automated Lighthouse Auditing**:
  * Integrate `@lhci/cli` (Lighthouse CI) in GitHub Actions to continuously track Performance, Accessibility, Best Practices, and SEO scores.

---

## 3. Technical Skillset & Engineering Goals (2026 – 2027)

### AI Engineering & Agentic Workflows
* **Multi-Agent Orchestration**: Deeper exploration of LangGraph, CrewAI, and AutoGen for multi-agent collaboration, autonomous planning, and deterministic tool-calling.
* **Local Inference & Quantization**: Experimenting with running smaller open-source models (Llama 3, Mistral, Qwen) locally using Ollama and vLLM with custom structured outputs.
* **Advanced RAG Architectures**: Implementing hybrid search (Dense + BM25 sparse vectors), re-ranking models (Cohere/BGE), and contextual compression pipelines.

### Backend & Distributed Systems
* **High-Throughput Services**: Expanding from Python/asyncio and Node.js into **Go** and **Rust** for latency-critical backend services and CLI tooling.
* **Event-Driven Architectures**: Incorporating message brokers (RabbitMQ, Apache Kafka, or Redis Streams) for decoupled background task processing.
* **Database Optimization**: Advanced indexing, query profiling, and read-replica strategies in PostgreSQL and MongoDB Atlas.

### Embedded Systems & Connected Hardware
* **Real-Time Operating Systems (RTOS)**: Deepening FreeRTOS multitasking, queue management, and semaphores on ESP32-S3 and ESP32-C3 microcontrollers.
* **Edge AI & TinyML**: Running quantized neural networks on edge microcontrollers using TensorFlow Lite for Microcontrollers (TFLite Micro).
* **Wireless Mesh Networks**: Exploring ESP-NOW and BLE Mesh for multi-node sensor telemetry without centralized routers.

---

## 4. Academic & Career Milestones

* [ ] **Smart India Hackathon 2025 / 2026**: Lead team in national finals, focusing on AI-assisted hardware or public infrastructure software.
* [ ] **Open-Source Contributions**: Contribute bug fixes, documentation, and feature additions to developer tools, CLI utilities, and AI orchestration frameworks.
* [ ] **BCA Graduation (Class of 2027)**: Complete final-year capstone project at RCC Institute of Information Technology with high academic honors.
* [ ] **Career Transition**: Step into a full-time role as a Software Engineer or AI Product Engineer building scalable, reliable distributed systems.
