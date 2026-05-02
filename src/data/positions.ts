export type LabeledItem = { label?: string; text: string };

export type PositionSection = {
  heading: string;
  paragraphs?: string[];
  items?: LabeledItem[];
};

export type Position = {
  slug: string;
  title: string;
  tag: string;
  location: string;
  intro: string[];
  sections: PositionSection[];
  cardDescription?: string;
};

const SHARED_INTRO: string[] = [
  "We\u2019re building the world\u2019s first Creator Casino: a creator-powered gaming network where influencers launch Rooms, run drops/missions, and monetize Originals built on top of certified game engines\u2014powered by an AI Host layer and programmable incentives designed for high-frequency sessions and measurable creator performance.",
  "This role helps us scale creator-led distribution, room economics, and session-velocity gameplay\u2014without compromising trust, compliance, or margin.",
];

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type RawPosition = Omit<Position, "slug" | "location">;

const RAW: RawPosition[] = [
  {
    title: "Sportsbook Manager",
    tag: "Product",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We\u2019re hiring a Sportsbook Manager to own sportsbook performance, event exposure, and risk-adjusted growth\u2014ensuring sustainable margins while supporting creator-driven traffic spikes during major events.",
          "This is a volatility-aware role: balancing handle growth, pricing discipline, and creator engagement mechanics.",
        ],
      },
      {
        heading: "Core Tools & Systems",
        items: [
          { text: "Sportsbook provider back office (odds, exposure, limits)" },
          { text: "Internal BI dashboards (hold %, event exposure, player segmentation)" },
          { text: "Risk monitoring systems" },
          { text: "Fast Track (sports promo coordination)" },
          { text: "Greco (bonus + arbitrage detection)" },
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Own sportsbook performance: handle, hold %, margin volatility, and risk exposure." },
          { text: "Monitor event-level exposure and implement limits or adjustments when needed." },
          { text: "Coordinate creator-led event moments (big matches, tournaments, live betting spikes)." },
          { text: "Analyze betting patterns to detect arbitrage, syndicates, or coordinated abuse." },
          { text: "Align sportsbook promotions with retention and VIP strategy." },
          { text: "Optimize betting limits and promo structures to protect margin." },
          { text: "Run post-event reviews (exposure, promo impact, risk anomalies)." },
          { text: "Collaborate with Risk, Payments, and CX during peak traffic periods." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "5+ years in Sportsbook Operations or Trading, ideally in crypto or online sportsbook environments." },
          { text: "Strong understanding of pricing models, hold %, and exposure management." },
          { text: "Experience handling high-volatility events and peak traffic spikes." },
          { text: "Strong risk awareness and analytical skills." },
          { text: "Comfort coordinating across Risk, VIP, CRM, and Ops teams." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience integrating sportsbook moments into creator-led ecosystems." },
          { text: "Understanding of arbitrage patterns and syndicate detection." },
          { text: "Experience working with micro-betting or live betting products." },
          { text: "Strong negotiation skills with sportsbook providers." },
          { text: "Bilingual (English/Spanish) is a plus." },
        ],
      },
    ],
  },
  {
    title: "Casino Manager",
    tag: "Product",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We\u2019re hiring a Casino Manager to own the performance, profitability, and operational excellence of the casino vertical across slots, live casino, Originals, and creator-specific game configurations.",
          "This role bridges Product, CRM, VIP, Risk, and Game Providers to ensure the casino portfolio is optimized for retention, margin, and creator-led growth.",
        ],
      },
      {
        heading: "Core Tools & Systems",
        items: [
          { text: "Game provider back offices (RTP configs, performance dashboards)" },
          { text: "Internal BI / cohort dashboards (ARPU, retention, margin by room)" },
          { text: "Fast Track (promo impact + retention inputs)" },
          { text: "Greco (bonus abuse + leakage monitoring)" },
          { text: "Affilka (affiliate + creator performance inputs)" },
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Own overall casino P&L performance: GGR, NGR, margin mix, and provider cost optimization." },
          { text: "Curate and optimize game portfolio by creator/room affinity (themes, volatility, mechanics)." },
          { text: "Monitor RTP configurations and ensure compliance with certified guardrails." },
          { text: "Analyze performance by provider, mechanic, and creator cohort to tune game exposure." },
          { text: "Coordinate new game launches with CRM, Community, and Creator Growth." },
          { text: "Optimize game lobby structure in collaboration with Product and ML." },
          { text: "Partner with Risk to control promo leakage and bonus abuse impact on casino margin." },
          { text: "Run weekly performance reviews (portfolio mix, volatility exposure, promo ROI)." },
          { text: "Maintain provider relationships and commercial performance negotiations." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "5+ years in Casino Management / Casino Operations, ideally in crypto casino / crypto gaming." },
          { text: "Strong understanding of RTP, volatility, provider cost structures, and margin dynamics." },
          { text: "Experience owning casino P&L or vertical-level performance metrics." },
          { text: "Strong analytical mindset and comfort working with cohort-level data." },
          { text: "Experience coordinating cross-functional teams around launches and performance tuning." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience in creator-driven or community-led gaming environments." },
          { text: "Experience optimizing Originals alongside third-party providers." },
          { text: "Strong understanding of bonus economics and incentive overlays." },
          { text: "Experience negotiating provider commercials and revenue share terms." },
          { text: "Being bilingual (English/Spanish) is a plus." },
        ],
      },
    ],
  },
  {
    title: "Game Economic Designer",
    tag: "Engineering",
    intro: [SHARED_INTRO[0]],
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "As a Game Economic Designer at HighStack, you are the architect of our digital ecosystem\u2019s monetary and behavioral flow. You don't just build paytables; you design the \"invisible hand\" that balances player excitement, long-term retention, and house sustainability. You will bridge the gap between high-fidelity iGaming mathematics (RTP, Volatility) and virtual macroeconomics, ensuring that every gold coin, crypto-bonus, and VIP tier interacts perfectly to create a thriving, non-exploitable gaming economy.",
        ],
      },
      {
        heading: "Key Responsibilities",
        items: [
          { label: "Systemic Economy Design", text: "Design and manage the end-to-end lifecycle of virtual resources (currency, experience points, boosters). Define how players earn, spend, and trade value within the HighStack ecosystem to ensure an optimal \"faucet and sink\" balance." },
          { label: "Mathematical Modeling", text: "Build complex models that simulate how game mechanics (Slots, Crash, Sportsbook) interact with meta-features like VIP levels and loyalty rewards. You ensure that as players progress, the economy remains challenging and rewarding without breaking the platform\u2019s net margin." },
          { label: "Behavioral Balancing", text: "Use player data and psychology to set numerical thresholds (prices, drop rates, level-up requirements). You adjust these values to optimize the player journey, ensuring the game is neither too \"blocking\" nor too inflationary." },
          { label: "Economy Guardrails & Risk", text: "Quantify the systemic impact of promos and crypto-linked bonuses. Design automated \"throttles\" and limits to protect the economy from hyper-inflation, bot farming, and bonus abuse while maintaining the \"Provably Fair\" integrity of the RNG." },
          { label: "Validation & Simulation", text: "Conduct multi-million-iteration Monte Carlo simulations to validate not just game-level RTP, but Session-level Effective RTP. Model \"Whale\" behavior and \"Heater\" scenarios to ensure the economy survives extreme volatility." },
          { label: "Cross-Functional Technical Writing", text: "Collaborate with Lead Game Designers and Product Managers to translate economic theories into technical specs. Produce robust documentation (Jupyter/PDF) that explains the \"Why\" behind the numbers for developers, investors, and regulators." },
        ],
      },
      {
        heading: "Core Tech Stack",
        items: [
          { label: "Python/Jupyter", text: "Primary for economic simulations, Monte Carlo modeling, and resource flow analysis." },
          { label: "Excel/Google Sheets", text: "For rapid economy balancing, pricing scales, and sensitivity \"what-if\" analysis." },
          { label: "Data Visualization", text: "Tools like Tableau, Looker, or Matplotlib to track real-time economic health and player spend patterns." },
          { label: "Modern Workflow", text: "Git for versioning math specs and LLM-assisted workflows for drafting economic logic and test cases." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { label: "4+ Years in Quantitative Design", text: "Background in game economy design, mathematical modeling, or tokenomics (ideally in iGaming, Free-to-Play, or Crypto-gaming)." },
          { label: "Systems Thinking", text: "Ability to visualize and model how changing one variable (e.g., a 2% increase in a VIP rebate) ripples through the entire multi-game ecosystem." },
          { label: "Statistical Mastery", text: "Deep expertise in probability, stochastic processes, and heavy-tailed distributions." },
          { label: "Market Fluency", text: "Strong understanding of current gaming trends, player preferences, and the psychological drivers of \"high-stakes\" engagement." },
          { label: "Communication", text: "Proven ability to explain abstract economic trade-offs (e.g., \"Player Value vs. Operator Margin\") to non-technical stakeholders." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Advanced Degree in Economics, Game Design, or Mathematics." },
          { text: "Experience with Sportsbook Risk or market-making mechanics." },
          { text: "Familiarity with Live-Ops\u2014tuning a game economy in real-time based on live data." },
        ],
      },
    ],
  },
  {
    title: "Senior Game Engineer",
    tag: "Engineering",
    intro: [
      SHARED_INTRO[0],
      "We are currently in stealth mode, focusing on building the core engine that will power a new category of community-driven entertainment.",
    ],
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We are seeking a Senior Game Engineer with deep mastery of the web graphics stack and modern frontend frameworks. You will be a founding member of the game engineering team, responsible for architecting 2D and 3D game clients (Slots, Crash, and original mechanics).",
          "This role requires a unique hybrid: you must be able to write high-performance WebGL code in PixiJS/Babylon.js while simultaneously building the reactive UI layers, betting controls, and HUDs in React. You aren't just building a game; you are building a modular, themeable engine designed for rapid deployment and community-led customization.",
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { label: "Engine Development", text: "Build and optimize lightweight, high-performance game clients using TypeScript, PixiJS, and Babylon.js." },
          { label: "Hybrid UI Systems", text: "Develop sophisticated game HUDs and betting interfaces using React, ensuring seamless communication between the React state and the Game Canvas." },
          { label: "Dynamic Animation", text: "Integrate Spine for complex character rigging and Rive for interactive, state-driven UI components and transitions." },
          { label: "State & Logic", text: "Implement robust game state machines and manage client-side state using Zustand or similar, handling real-time outcomes via GraphQL subscriptions." },
          { label: "Asset Pipeline", text: "Architect an efficient asset loading system (Vite-based) that supports dynamic \"skinning\" and multi-tenant configurations." },
          { label: "Performance Engineering", text: "Optimize draw calls and memory usage while minimizing React re-renders to ensure 60 FPS performance across mobile and desktop." },
          { label: "Cross-Functional Integration", text: "Work within an Nx monorepo to package games as Micro-Frontends, ensuring they play nicely with our Qwik host and shared component libraries." },
          { label: "Reliability & Trust", text: "Ensure game clients accurately represent server-side logic with frame-perfect synchronization and robust reconnection handling." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "5+ years of experience in Game Development or Senior Frontend Engineering with a heavy focus on interactive graphics." },
          { label: "TypeScript & React Mastery", text: "Expert-level knowledge of TS and React 18/19, including hooks, context, and performance optimization patterns." },
          { label: "2D/3D Expertise", text: "Strong proficiency with PixiJS and/or Babylon.js. You should understand shaders, lighting, and scene graph optimization." },
          { label: "Animation Pipelines", text: "Experience implementing Spine (Skeletal Animation) and Rive (State Machines) into web runtimes." },
          { label: "Modern Tooling", text: "Deep familiarity with Vite, PNPM, and monorepo workflows (Nx)." },
          { label: "Math & Logic", text: "Comfortable with game math (interpolation, easing, basic probability) and handling high-precision numerical data for real-money transactions." },
          { label: "Web Standards", text: "Solid understanding of CSS-in-JS or Tailwind CSS for styling game-adjacent UI." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { label: "iGaming/Fintech Experience", text: "Previous experience building regulated games (Slots, Table Games) or \"Provably Fair\" systems." },
          { label: "GLSL Shaders", text: "Ability to write custom shaders for specialized visual effects and particles." },
          { label: "Infrastructure", text: "Familiarity with Cloudflare Workers and edge-side computing." },
          { label: "Micro-Frontends", text: "Experience with Module Federation, Web Fragments, or similar composition patterns." },
        ],
      },
    ],
  },
  {
    title: "Senior Frontend Engineer",
    tag: "Engineering",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We are seeking a Senior Frontend Engineer to build and maintain a micro-frontend platform powering a gaming product. The stack spans a Qwik SSR host application, React micro-frontends, a framework-agnostic component library, and a CMS-driven content system \u2014 all orchestrated within an Nx monorepo.",
          "You will work on UI systems that must be performant, accessible, and maintainable at scale, with a strong emphasis on type safety, component architecture, and edge deployment.",
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Design and implement UI components following a contract-based architecture (contracts \u2192 styles \u2192 framework adapters) across Qwik and React." },
          { text: "Build and maintain a Qwik SSR host application deployed on Cloudflare Pages edge workers." },
          { text: "Develop React micro-frontends embedded into the host via the Web Fragments composition layer." },
          { text: "Implement and consume GraphQL APIs using urql with persisted queries, WebSocket subscriptions, and SSR-aware authentication exchanges." },
          { text: "Build admin dashboard features using React, TanStack Router, and Zustand, including RBAC-based access control." },
          { text: "Integrate Storyblok CMS for content-driven pages, including visual editor bridge support and SEO metadata extraction." },
          { text: "Create and maintain Storybook documentation for the shared component library." },
          { text: "Ensure performance through Qwik resumability, Partytown offloading, dynamic imports, and CDN-level image optimization." },
          { text: "Write and maintain automated tests using Vitest, Testing Library, and happy-dom." },
          { text: "Enforce code quality through OxLint, Prettier, Knip, and TypeScript strict mode in CI." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "5+ years of experience as a Frontend Engineer." },
          { text: "Strong experience with TypeScript and type-safe, end-to-end development patterns." },
          { text: "Proficiency with React 19 including hooks, context, and modern patterns." },
          { text: "Experience with Tailwind CSS using design tokens and CSS-first configuration (no arbitrary values)." },
          { text: "Solid understanding of GraphQL client-side patterns \u2014 queries, mutations, subscriptions, and code generation." },
          { text: "Experience building and consuming component libraries with clear API contracts and separation of concerns." },
          { text: "Familiarity with SSR/SSG concepts and edge deployment (Cloudflare Workers/Pages or similar)." },
          { text: "Experience with monorepo tooling (Nx, Turborepo, or similar)." },
          { text: "Strong understanding of web accessibility (ARIA patterns, keyboard navigation, screen reader support)." },
          { text: "Experience with Vite as a build tool." },
          { text: "Strong code quality, testing, and documentation habits." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience with Qwik and its resumability model." },
          { text: "Experience with micro-frontend architectures (Module Federation, Web Fragments, or similar composition patterns)." },
          { text: "Experience with headless CMS platforms (Storyblok, Contentful, Sanity)." },
          { text: "Familiarity with urql or similar GraphQL clients (Apollo, Relay) including custom exchanges and persisted queries." },
          { text: "Experience with TanStack Router or similar file-based routing solutions." },
          { text: "Experience with Zustand or similar lightweight state management." },
          { text: "Experience with Storybook for component documentation and visual testing." },
          { text: "Familiarity with Cloudflare Pages/Workers deployment and edge computing." },
          { text: "Experience in iGaming, fintech, or similar regulated industries." },
          { text: "Experience with analytics instrumentation (PostHog, GTM) and main-thread performance optimization (Partytown)." },
          { text: "Familiarity with GraphQL code generation (graphql-codegen, TypedDocumentNode)." },
        ],
      },
    ],
  },
  {
    title: "Senior QA Engineer",
    tag: "Engineering",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We are seeking a Senior QA Engineer who is comfortable working across backend systems, infrastructure, and frontend applications. This role focuses on ensuring overall product quality by validating how APIs, databases, services, and user-facing interfaces work together as a complete system.",
        ],
      },
      {
        heading: "The ideal candidate is able to",
        items: [
          { text: "Understand end-to-end flows in transactional platforms." },
          { text: "Verify that frontend behavior correctly reflects backend logic." },
          { text: "Ensure systems remain reliable under different scenarios, including errors and retries." },
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Design and execute end-to-end test plans covering frontend, backend, and integrations." },
          { text: "Validate backend APIs, transactional flows, and integrations between services." },
          { text: "Test critical flows such as balance checks, debits, credits, rollbacks, and retries." },
          { text: "Verify idempotency, error handling, and failure scenarios." },
          { text: "Validate frontend behavior against backend state and API responses." },
          { text: "Test API security mechanisms (HMAC signatures, headers, secrets)." },
          { text: "Perform integration testing across logically separated systems." },
          { text: "Validate database integrity, constraints, and state transitions." },
          { text: "Build and maintain automated tests for APIs and frontend flows." },
          { text: "Collaborate closely with Backend and DevOps teams (shift-left QA)." },
          { text: "Validate releases across staging and production-like environments." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "5+ years of experience in QA / Software Testing roles." },
          { text: "Strong experience testing backend APIs and microservices." },
          { text: "Strong experience testing frontend applications (web)." },
          { text: "Experience with API testing tools (Postman or similar)." },
          { text: "Experience with frontend test automation (Playwright, Cypress, or equivalent)." },
          { text: "Experience with backend/API automation (JavaScript/TypeScript or Python-based)." },
          { text: "Ability to read and reason about backend code and SQL queries." },
          { text: "Understanding of transactional systems, idempotency, and data consistency." },
          { text: "Experience working in cloud-based environments (AWS preferred)." },
          { text: "Ability to reason across system boundaries (frontend \u2192 backend \u2192 infra)." },
        ],
      },
      {
        heading: "Additional Requirements",
        items: [
          { text: "Solid understanding of how frontend actions map to backend side effects." },
          { text: "Ability to validate UI behavior using backend data and logs." },
          { text: "Comfort working with multiple environments and deployments." },
          { text: "Strong attention to detail and ownership mindset." },
        ],
      },
      {
        heading: "Nice to Have (Optional)",
        items: [
          { text: "Experience in fintech, iGaming, or payment platforms." },
          { text: "Experience validating PostgreSQL schemas and migrations." },
          { text: "Experience integrating QA into CI/CD pipelines." },
          { text: "Basic understanding of infrastructure concepts (Docker, environments, deployments)." },
        ],
      },
    ],
  },
  {
    title: "Senior DevOps/Infrastructure Engineer",
    tag: "Engineering",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We are looking for a Senior DevOps / Infrastructure Engineer to own the infrastructure and operational reliability of a transaction-heavy, API-driven platform running on AWS. This role ensures that backend services, databases, and integrations run securely, reliably, and at scale.",
          "You will work closely with Backend, Data and QA engineers to support environments where financial integrity, idempotency, security, and uptime are critical.",
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Design and operate AWS-first infrastructure for backend services and APIs." },
          { text: "Manage production, staging, and development environments." },
          { text: "Build and maintain CI/CD pipelines for Node.js-based services." },
          { text: "Deploy and operate containerized workloads (Docker, ECS and/or EKS)." },
          { text: "Manage PostgreSQL infrastructure (RDS/Aurora), backups, and migrations." },
          { text: "Implement monitoring, logging, and alerting for APIs and databases." },
          { text: "Own cloud security: IAM, secrets management, networking, and isolation." },
          { text: "Support incident response, rollbacks, and root-cause analysis." },
          { text: "Work with QA to enable test environments and automation pipelines." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "5+ years of experience in DevOps / Infrastructure roles." },
          { text: "Strong hands-on experience with AWS (EC2, ECS/EKS, RDS/Aurora, DynamoDB, S3, VPC, IAM)." },
          { text: "Infrastructure as Code." },
          { text: "CI/CD experience (GitHub Actions, GitLab CI, or similar)." },
          { text: "Docker and container-based deployments." },
          { text: "Experience supporting transactional systems and APIs." },
          { text: "Strong understanding of reliability, availability, and security." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience with fintech, iGaming, or payment systems." },
          { text: "Experience with Redshift." },
          { text: "Experience supporting Node.js / PostgreSQL stacks." },
        ],
      },
    ],
  },
  {
    title: "Creator Growth Architect",
    tag: "Marketing",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Summary",
        paragraphs: [
          "You will own our creator-led growth system end-to-end: Room launch strategy, creator deal structuring, programmable incentive architecture, and cross-channel attribution\u2014turning creators into repeatable distribution engines.",
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Own the Creator Room Launch System: pre-launch \u2192 launch \u2192 sustain playbooks, calendars, and execution checklists." },
          { text: "Design creator deal structures: rev share, performance tiers, guarantees, usage rights, exclusivity, whitelists." },
          { text: "Architect programmable incentives with guardrails: drops, missions, power-ups, bundles, VIP boosts by creator/room." },
          { text: "Build social-native growth loops: streaming moments \u2192 shareables \u2192 in-product activation \u2192 repeat sessions." },
          { text: "Define creator performance dashboards: cohort retention, ARPU uplift, promo ROI by room, creator LTV." },
          { text: "Lead cross-channel attribution logic: creator vs affiliate vs organic; leakage prevention and measurement standards." },
          { text: "Experience structuring influencer/creator partnerships with measurable revenue outcomes." },
          { text: "Strong understanding of incentive systems, cohorts, and performance marketing measurement." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "5\u20138 years in growth/marketing/retention roles, with crypto casino / crypto gaming experience." },
          { text: "Proven cross-functional execution leadership (multiple owners, one engine)." },
          { text: "Deep understanding of creator economy mechanics: how creators monetize, what drives performance, and how incentives shape behavior." },
          { text: "Proven experience structuring creator deals (commercial terms, deliverables, timelines, usage rights) and managing creators as a scalable channel." },
          { text: "Strong attribution discipline: tracking frameworks for influencer/affiliate impact and consistent measurement across channels." },
          { text: "Hands-on experience running social campaigns and coordinating organic + creator-led distribution." },
          { text: "Strong experience managing Discord communities and social channels as part of the growth engine (moderation, announcements, engagement, escalation routing)." },
          { text: "Strong understanding of funnel economics: retention, promo cost, ROI discipline." },
          { text: "Highly organized operator with strong follow-through." },
          { text: "Strong instincts for promo calendar management and launch readiness." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience operating influencer and affiliate programs with strong reporting discipline." },
          { text: "Experience building launch playbooks and execution checklists for major releases." },
          { text: "Strong content calendar management across creators, VIP moments, and CRM promos." },
          { text: "Experience partnering closely with Product on roadmap-driven growth loops." },
        ],
      },
    ],
  },
  {
    title: "Game Math Engineer (Certified Core + Configurable Overlays)",
    tag: "Engineering",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "As a Game Math Engineer at HighStack, you will own the mathematical architecture of our entire gaming ecosystem. You aren't just building paytables; you are designing a sustainable, high-stakes economy. You will bridge the gap between traditional iGaming mathematics (RTP, Volatility) and the dynamic world of crypto-economic modeling, ensuring every game is exciting for players and mathematically sound for the house.",
        ],
      },
      {
        heading: "Key Responsibilities",
        items: [
          { text: "Design configurable reward overlays on top of certified core engines (RTP/volatility guardrails preserved)." },
          { text: "Model and validate promo/reward mechanics layered on fixed certified math: missions, drops, boosts, pool dynamics." },
          { text: "Collaborate with Product/ML/Ops to ensure incentive systems are both engaging and margin-safe." },
          { label: "Economy & Game Design", text: "Own and optimize the mathematical balance for our iGaming portfolio (Slots, Crash, Table Games). Define probabilities, distributions, and game rules to ensure sustainable margins and fair play." },
          { label: "Validation & Simulation", text: "Build and run million-iteration Monte Carlo simulations to validate RTP, hit rates, and volatility. Ensure games behave as expected under extreme scenarios and are free of exploitable logic." },
          { label: "Economic Guardrails", text: "Quantify the impact of promos, VIP rewards, and crypto-linked bonuses on the platform\u2019s overall economy. Define betting limits to mitigate risk from bots, collusion, and bonus abuse." },
          { label: "Risk & Documentation", text: "Assess \"House Edge\" exposure across casino and sportsbook contexts. Produce robust mathematical documentation and test evidence for international regulatory audits and production readiness." },
          { label: "Cross-Functional Collaboration", text: "Partner with Art, Product, and Dev teams to translate complex math specs into playable features, using Jupyter Notebooks and Git for reproducible reporting." },
        ],
      },
      {
        heading: "Core Tech Stack",
        items: [
          { label: "Python", text: "Primary for simulation tooling, Monte Carlo models, and validation harnesses." },
          { label: "Excel", text: "For rapid modeling, paytables, and sensitivity analysis." },
          { label: "Jupyter/R", text: "For statistical analysis and reproducible math reporting." },
          { label: "Modern Tools", text: "Git (versioning), MATLAB, and Claude/LLM-assisted workflows for math spec drafting and test generation." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "4+ years in quantitative roles, game math, or statistical modeling (ideally within the iGaming or crypto-gaming space)." },
          { label: "Deep Statistical Expertise", text: "Mastery of probability, Monte Carlo simulations, and stochastic processes." },
          { label: "Regulatory Knowledge", text: "Experience preparing math documentation for compliance and certification (RTP/Volatility validation)." },
          { label: "Communication", text: "Ability to explain complex mathematical trade-offs (RTP vs. Margin vs. Player Excitement) to non-technical stakeholders." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience building tunable mechanics on certified/regulated cores without breaking compliance constraints." },
          { text: "Strong intuition for how incentive overlays change session frequency and retention." },
          { text: "PhD or Advanced Degree in Physics, Mathematics, or Statistical Sciences." },
          { text: "Familiarity with sportsbook risk concepts and market mechanics." },
          { text: "Experience building scalable, automated validation suites for instant games." },
        ],
      },
    ],
  },
  {
    title: "Blockchain / Crypto Engineer (Session-Based Settlement)",
    tag: "Engineering",
    intro: SHARED_INTRO,
    cardDescription:
      "influencers launch Rooms, run drops/missions, and monetize Originals built on top of certified game engines\u2014powered by an AI Host layer and programmable incentives designed for high-frequency sessions and measurable creator performance. This role helps us scale creator-led distribution, room economics, and session-velocity gameplay\u2014without compromising trust, compliance, or margin.",
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We\u2019re hiring a Blockchain / Crypto Engineer to build and operate the crypto money-movement layer of our casino\u2014wallet infrastructure, transaction processing, confirmations, reconciliation, and reliability at scale.",
          "This is a backend-heavy role. You\u2019ll work on systems that must be ledger-safe, retry-safe, and production-hardened.",
        ],
      },
      {
        heading: "Core Tools & Systems",
        items: [
          { text: "Fireblocks (custody, policy controls, transaction lifecycle)." },
          { text: "Node.js + TypeScript (backend services)." },
          { text: "Python (ops tooling, reconciliation scripts, simulations, automation helpers)." },
          { text: "GraphQL + REST (API gateway, schema design, domain boundaries)." },
          { text: "PostgreSQL (ledgers, transactions, constraints, auditability)." },
          { text: "Redis (caching, idempotency keys, rate/velocity controls)." },
          { text: "Kafka / SQS / EventBridge (event-driven processing, settlement pipelines)." },
          { text: "Docker + Kubernetes (runtime, scaling, deployment patterns)." },
          { text: "Terraform (infra-as-code for production environments)." },
          { text: "AWS Architecture (cloud-native patterns, security, observability, scaling)." },
          { text: "gRPC/WebSockets (internal service-to-service calls + real-time updates, when applicable)." },
          { text: "EVM & Wallet Libraries (ethers.js/web3.js, web3.py, chain RPC providers)." },
          { text: "Smart Contract Tooling (when applicable) (Hardhat/Foundry, ABI handling)." },
          { text: "On-chain monitoring / screening tools (wallet risk screening and transaction monitoring, when applicable)." },
          { text: "Claude (agent creation, internal automations, AI-assisted testing/specs)." },
          { text: "Go and/or Rust (performance-critical services, chain/indexing systems)." },
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Design and maintain systems supporting session-based settlement with high transaction velocity." },
          { text: "Ensure reliability under spikes: idempotency, retry safety, ledger correctness, reconciliation, and observability." },
          { text: "Build infrastructure that enables programmable incentives and rapid settlement without compromising safety." },
          { text: "Build wallet infrastructure services: address generation, balance tracking, deposit/withdraw flows, and transaction state machines." },
          { text: "Implement on-chain/off-chain synchronization: confirmations, reorg handling, retries, and reconciliation against internal ledgers." },
          { text: "Design and maintain transaction processing that is idempotent, audit-friendly, and safe under concurrency." },
          { text: "Build monitoring and alerting for stuck transactions, fee spikes, chain congestion, and provider degradations." },
          { text: "Support chain data access and indexing patterns (events, transfers, confirmations) as needed for product and ops." },
          { text: "Partner with Ops/Risk to ensure high reliability in peak traffic moments." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "4+ years engineering; 2+ years in crypto systems, with crypto casino / crypto gaming wallet flow experience." },
          { text: "Strong backend fundamentals (API design, distributed systems, retries/idempotency, observability)." },
          { text: "Proven experience building transaction/ledger systems with strong data integrity guarantees." },
          { text: "Security-first mindset (secrets management, threat modeling, permissions, auditability)." },
          { text: "Strong incident response and debugging skills." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience designing high-throughput transaction systems and safe settlement primitives for consumer-scale usage." },
          { text: "Experience with EVM tooling, smart contract interaction patterns, and chain monitoring." },
          { text: "Experience designing ledger-safe transaction state machines and reconciliation pipelines." },
          { text: "Experience with security reviews and threat modeling for custody integrations." },
          { text: "Experience building runbooks, on-call playbooks, and postmortem processes." },
        ],
      },
    ],
  },
  {
    title: "ML Engineer (Creator Affinity + Incentive Optimization)",
    tag: "AI & Data",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We\u2019re hiring an ML Engineer to power our personalization, incentive optimization, and creator-affinity systems\u2014turning signals from gameplay, creators, and community into models that improve retention, ARPU, and creator-led growth.",
          "This is a high-impact, hands-on ML role: production-grade pipelines, real-time personalization, and incentive optimization with measurable margin outcomes.",
        ],
      },
      {
        heading: "Core Tools & Systems",
        items: [
          { text: "Python (modeling, training, evaluation)" },
          { text: "Feature stores / data pipelines (Airflow, dbt, Snowflake/BigQuery, Redshift)" },
          { text: "MLOps tooling (MLflow, SageMaker, Vertex AI, or similar)" },
          { text: "Real-time serving (Kafka, Redis, low-latency inference services)" },
          { text: "BI & experimentation tools (Looker, Mode, Eppo, GrowthBook)" },
          { text: "GraphQL/REST integration with backend personalization layers" },
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Build and deploy ML models that power: creator-room recommendations, game personalization, mission/drop targeting, retention/churn prediction, promo ROI optimization, fraud / bonus abuse detection, lifetime value (LTV) modeling." },
          { text: "Own the end-to-end ML lifecycle: ingestion \u2192 features \u2192 training \u2192 deployment \u2192 monitoring." },
          { text: "Build feature stores and data pipelines that support real-time personalization." },
          { text: "Partner with Product, Growth, and CRM to define experimentation strategy and measurable outcomes." },
          { text: "Design models that respect economic guardrails (margin, RTP, bonus exposure)." },
          { text: "Deliver model dashboards for performance, drift, and ROI tracking." },
          { text: "Collaborate with Data Engineering on data quality, schema, and governance." },
          { text: "Drive A/B testing infrastructure for ML-driven features." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "5+ years in ML / Data Science with production model deployment experience." },
          { text: "Strong Python and SQL fundamentals." },
          { text: "Strong experience with recommendation systems, ranking models, or personalization." },
          { text: "Experience with real-time inference and high-volume data pipelines." },
          { text: "Strong understanding of A/B testing, causal inference, and statistical evaluation." },
          { text: "Experience working in growth, retention, or marketplace contexts." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience in iGaming, fintech, or marketplaces with monetary outcomes." },
          { text: "Experience optimizing incentives or promos with ROI/margin constraints." },
          { text: "Experience with creator-economy or social-platform data." },
          { text: "Experience with reinforcement learning or contextual bandits." },
          { text: "Bilingual (English/Spanish) is a plus." },
        ],
      },
    ],
  },
  {
    title: "Ops Analyst (Room Economics + Creator Cohorts)",
    tag: "AI & Data",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We\u2019re hiring an Ops Analyst to be the analytical backbone of our creator-driven casino: monitoring room performance, creator cohorts, promo ROI, and operational health across the platform.",
          "This is a high-leverage role: your analysis directly informs creator deals, promo strategy, retention plays, and operational decisions.",
        ],
      },
      {
        heading: "Core Tools & Systems",
        items: [
          { text: "SQL (advanced) on Snowflake / BigQuery / Redshift." },
          { text: "Looker / Mode / Metabase (dashboards and reporting)." },
          { text: "Python (light scripting, automation, ad-hoc analysis)." },
          { text: "Eppo / GrowthBook (experimentation)." },
          { text: "Fast Track / CRM analytics layers." },
          { text: "Greco (bonus abuse + leakage analytics)." },
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Build and maintain dashboards for: room-level economics (GGR, NGR, margin, ARPU, retention), creator cohort performance (LTV, churn, ROI), promo and incentive performance (cost, leakage, ROI), VIP and high-value player tracking, sportsbook event performance, casino game mix performance." },
          { text: "Run deep-dive analyses on creator launches, promo events, and retention experiments." },
          { text: "Partner with Growth, CRM, and Product on weekly performance reviews." },
          { text: "Define cohort segmentation models for creators and players." },
          { text: "Support experimentation: hypothesis design, sample sizing, evaluation." },
          { text: "Produce creator performance reports for commercial discussions." },
          { text: "Identify anomalies and operational risks (bonus abuse, traffic spikes, exposure)." },
          { text: "Maintain data documentation, definitions, and metric ownership." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "4+ years in Analytics / BI / Data roles, ideally in iGaming or consumer marketplaces." },
          { text: "Advanced SQL and strong cohort analysis fundamentals." },
          { text: "Experience working with promo, retention, or creator-driven datasets." },
          { text: "Strong storytelling and data-communication skills." },
          { text: "Experience supporting cross-functional teams with actionable insights." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience with creator-economy or social-platform analytics." },
          { text: "Experience working on promo ROI or incentive design." },
          { text: "Experience with experimentation platforms and causal inference basics." },
          { text: "Bilingual (English/Spanish) is a plus." },
        ],
      },
    ],
  },
  {
    title: "Payment / Treasury Specialist (Session Velocity)",
    tag: "AI & Data",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We\u2019re hiring a Payment Specialist to keep money movement smooth and reliable\u2014especially around crypto operations\u2014while maintaining clean escalation handling and operational precision.",
        ],
      },
      {
        heading: "Core Tools & Systems",
        items: [
          { text: "Fireblocks at Jedi Level (custody operations context, transaction lifecycle visibility)" },
          { text: "Intercom (payment-related escalations coordination)" },
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Support high-frequency, low-friction purchase flows consistent with session velocity gameplay." },
          { text: "Ensure payout/deposit flows remain stable during creator-driven spikes and promotional bursts." },
          { text: "Coordinate crypto operational workflows and exception handling." },
          { text: "Support wallet/balance operations in collaboration with platform teams." },
          { text: "Handle player-facing escalations and incident communications with CX." },
          { text: "Maintain operational checklists and readiness for peak traffic periods." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "3+ years in payments ops / cashier ops / fintech ops, with crypto casino / crypto gaming experience." },
          { text: "Strong attention to detail, reconciliation mindset, and incident calm." },
          { text: "Comfortable operating crypto custody/transaction flows and handling exceptions." },
          { text: "Strong communication for incident updates and escalations." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience in high-velocity micro-transaction environments (games, marketplaces, high-frequency consumer products)." },
          { text: "Experience running reconciliation between custody activity and internal ledgers." },
          { text: "Experience managing payment incidents and coordinating vendor escalations." },
          { text: "Familiarity with fees, confirmations, and operational edge cases in crypto transfers." },
          { text: "Experience creating and maintaining ops runbooks." },
        ],
      },
    ],
  },
  {
    title: "Fraud / Risk Specialist (Creator-Driven Abuse Patterns)",
    tag: "AI & Data",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We\u2019re seeking a Fraud Specialist to reduce bonus abuse and \u201cfree money\u201d leakage while protecting the experience for real players.",
        ],
      },
      {
        heading: "Core Tools & Systems",
        items: [
          { text: "Greco (abuse detection + leakage signals)" },
          { text: "SumSub (KYC/identity checks context)" },
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Detect and mitigate creator/room-specific abuse patterns: cross-room promo farming, multi-account switching, bonus stacking, creator arbitrage." },
          { text: "Build monitoring and rules that account for room dynamics and creator-led incentives." },
          { text: "Partner with Ops/ML to create feedback loops between abuse detection and incentive tuning." },
          { text: "Investigate suspicious behavior and promo abuse patterns." },
          { text: "Coordinate account holds, reviews, and escalations with Support and Operations." },
          { text: "Partner with KYC workflows when identity constraints matter." },
          { text: "Maintain clear case notes, playbooks, and weekly insights on attack patterns." },
          { text: "Recommend controls that protect margin without hurting genuine retention." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "3+ years in fraud/risk operations, with crypto casino / crypto gaming experience." },
          { text: "Strong investigations, pattern recognition, and documentation discipline." },
          { text: "Strong understanding of promo abuse patterns (multi-accounting, farming, arbitrage)." },
          { text: "Comfortable working cross-functionally with CX, Payments, and VIP." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience in affiliate-heavy or influencer-driven products where abuse takes non-traditional forms." },
          { text: "Experience building rules/playbooks for multi-accounting and bonus farming at scale." },
          { text: "Experience with chargeback patterns and dispute workflows." },
          { text: "Familiarity with AML red flags and escalation documentation." },
          { text: "Experience running post-incident reviews and prevention checklists." },
        ],
      },
    ],
  },
  {
    title: "CRM Specialist (Creator-Synced Lifecycle)",
    tag: "Marketing",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We\u2019re hiring a CRM Specialist to execute lifecycle campaigns that drive activation, retention, reactivation, and VIP growth\u2014cleanly measured and continuously improved.",
        ],
      },
      {
        heading: "Core Tools & Systems",
        items: [
          { text: "Fast Track at Jedi level (segments, journeys, offers, retention logic)" },
          { text: "Affilka (affiliate attribution inputs + partner promo alignment)" },
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Build lifecycle journeys synced to creator campaigns: launches, drops, room events, and creator-specific promos." },
          { text: "Segment by creator affinity and behavioral clusters (room participation, session frequency, incentives response)." },
          { text: "Coordinate CRM cadence with Marketing/VIP so players experience a single coherent creator-led journey." },
          { text: "Build and maintain lifecycle journeys (onboarding, churn save, reactivation)." },
          { text: "Manage segmentation logic and player journeys with strong QA discipline." },
          { text: "Coordinate promo alignment with affiliates when relevant." },
          { text: "Maintain campaign hygiene: naming, frequency, suppression, and reporting discipline." },
          { text: "Partner with VIP + Community so all retention levers work together." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "3+ years in CRM/lifecycle marketing or retention ops, with crypto casino / crypto gaming experience." },
          { text: "Hands-on experience operating a CRM like Fast Track (or equivalent)." },
          { text: "Strong analytical mindset, strong QA standards, and comfort owning calendars and execution cadence." },
          { text: "Clear understanding of bonus/promo economics and retention measurement." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Hands-on experience coordinating CRM with influencer/creator initiatives." },
          { text: "Strong at cohort-based thinking and experimentation tied to incentive systems." },
          { text: "Experience building churn-save and reactivation playbooks with testing discipline." },
          { text: "Experience aligning VIP, CRM, and community initiatives into one retention plan." },
          { text: "Strong copy judgment for short, conversion-focused messages." },
          { text: "Experience coordinating affiliate promo alignment (tracking, offer consistency)." },
        ],
      },
    ],
  },
  {
    title: "Community Manager + Customer Support",
    tag: "Marketing",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "This is a community-first role with customer support responsibility. You\u2019ll be highly active in Discord, internal chat coordination, and social channels, keeping the community healthy, energized, and aligned with the brand\u2014while also helping resolve player issues and routing escalations correctly.",
        ],
      },
      {
        heading: "You\u2019ll spend most of your day",
        items: [
          { text: "Managing real-time conversations in Discord." },
          { text: "Coordinating internally to keep answers consistent (VIP, CRM, Payments, Risk)." },
          { text: "Responding on social channels and routing issues fast." },
        ],
      },
      {
        heading: "Core Tools & Systems",
        items: [
          { text: "Intercom (ticketing, workflows, help center, QA)" },
          { text: "SumSub (KYC eligibility + escalation context)" },
          { text: "Greco (abuse/leakage escalations context)" },
          { text: "Discord + Social Channels (community operations: moderation, announcements, engagement)" },
          { text: "Chainalysis / TRM Labs / Elliptic (on-chain transaction monitoring + wallet risk screening)" },
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Execute and moderate creator events: drops, missions, announcements, limited-time incentives, and live moments." },
          { text: "Operate real-time community workflows during spikes: anti-spam, anti-abuse, escalation, and resolution loops." },
          { text: "Capture community insights and feed them back into Room design, incentive tuning, and CX improvements." },
          { text: "Resolve player requests efficiently via chat/tickets." },
          { text: "Be highly present in Discord: answer questions, keep chats healthy, post announcements, and maintain a positive vibe." },
          { text: "Support social channel responses and route issues to the right owner when needed." },
          { text: "Follow playbooks for account, KYC, promotions, and gameplay issues." },
          { text: "Escalate sensitive cases following SOPs." },
          { text: "Log recurring issues and share clear weekly feedback with the team." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "2+ years in community management and/or customer support, with crypto casino / crypto gaming exposure." },
          { text: "Hands-on experience managing Discord communities (moderation, announcements, de-escalation)." },
          { text: "Hands-on experience handling social media engagement (replies, routing issues, brand-safe tone)." },
          { text: "Strong writing, empathy, and structured troubleshooting." },
          { text: "Comfortable with fast-paced chat environments and high-traffic moments." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience supporting products where creators drive unpredictable traffic and engagement surges." },
          { text: "Experience handling VIP-adjacent comms and high-stakes escalations calmly." },
          { text: "Comfort working weekends/late hours during launches or major events." },
          { text: "Experience writing short, clear announcements and community updates." },
          { text: "Bilingual (English/Spanish) is a plus." },
        ],
      },
    ],
  },
  {
    title: "Head of CX & Community Management",
    tag: "Marketing",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We\u2019re looking for a Head of CX & Community to run a combined Support + Community function\u2014high-quality service, strong moderation, and a consistent voice across every player touchpoint.",
        ],
      },
      {
        heading: "This role is community-heavy and requires proven experience operating",
        items: [
          { text: "Discord (primary): daily chat presence, moderation, announcements, community programs." },
          { text: "Social channels: fast, brand-safe engagement and escalation routing." },
          { text: "Internal chat: tight coordination with VIP, CRM, Payments, Risk, and Product to keep answers consistent." },
        ],
      },
      {
        heading: "Core Tools & Systems",
        items: [
          { text: "Intercom (ticketing, workflows, help center, QA)" },
          { text: "SumSub (KYC eligibility + escalation context)" },
          { text: "Greco (abuse/leakage escalations context)" },
          { text: "Discord + Social Channels (community operations: moderation, announcements, engagement)" },
          { text: "Chainalysis / TRM Labs / Elliptic (on-chain transaction monitoring + wallet risk screening)" },
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Own CX SLAs, QA scorecards, routing, and escalation trees." },
          { text: "Build and maintain the knowledge base and self-serve flows to reduce contact drivers." },
          { text: "Set standards for Discord moderation, announcements, and community programming." },
          { text: "Ensure social responses stay on-brand, fast, and correctly routed." },
          { text: "Turn community and support insights into structured, actionable feedback for Product/Ops." },
          { text: "Lead and coach the support/community team (coverage, quality, consistency of voice)." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "6+ years leading CX/support/community, with crypto casino / crypto gaming experience." },
          { text: "Proven experience running Discord-first communities (moderation, announcements, community programming)." },
          { text: "Proven experience managing social channels (responses, escalation routing, brand-safe engagement)." },
          { text: "Deep experience running chat-first support operations." },
          { text: "Strong operational discipline, calm escalation judgment, and high QA standards." },
          { text: "Ability to coordinate cross-functionally in fast-moving environments (internal chat + weekly cadence)." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience designing QA frameworks (scorecards, coaching loops, calibration)." },
          { text: "Experience running incident communications and service recovery playbooks." },
          { text: "Experience building hiring plans, shift coverage models, and on-call/escalation rotations." },
          { text: "Bilingual (English/Spanish) is a plus." },
        ],
      },
    ],
  },
  {
    title: "Head of VIPs",
    tag: "Marketing",
    intro: SHARED_INTRO,
    cardDescription:
      "Role Overview We\u2019re hiring a Head of VIPs to build and run our VIP program end-to-end\u2014tiers, perks, retention playbooks, and high-touch service\u2014while protecting margin and keeping the experience premium.",
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We\u2019re hiring a Head of VIPs to build and run our VIP program end-to-end\u2014tiers, perks, retention playbooks, and high-touch service\u2014while protecting margin and keeping the experience premium.",
        ],
      },
      {
        heading: "Core Tools & Systems",
        items: [
          { text: "Fast Track (VIP segments, journeys, offers)" },
          { text: "Chainalysis / TRM Labs / Elliptic (on-chain transaction monitoring + wallet risk screening)" },
          { text: "Greco (bonus abuse / \u201cfree money\u201d leakage prevention)" },
          { text: "SumSub (KYC eligibility + escalations)" },
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Own VIP tiers, qualification rules, and retention strategy." },
          { text: "Run VIP servicing workflows and high-touch escalation handling." },
          { text: "Partner with Risk to minimize promo abuse and leakage." },
          { text: "Ensure VIP journeys respect KYC/eligibility constraints and edge cases." },
          { text: "Coordinate VIP deposit/withdrawal readiness with Operations." },
          { text: "Define VIP KPIs and continuously optimize retention + ROI." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "7+ years in VIP, retention, or player ops, with crypto casino / crypto gaming experience." },
          { text: "Strong understanding of VIP economics: bonus cost, payback, retention curves." },
          { text: "Proven experience operating lifecycle and segmentation tooling." },
          { text: "Comfortable handling high-touch VIP operations that involve deposits/withdrawals and account constraints." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience building tiered loyalty/VIP programs from scratch." },
          { text: "Experience running VIP events and high-touch community moments." },
          { text: "Strong negotiation and relationship management with high-value players." },
          { text: "Bilingual (English/Spanish) is a plus." },
        ],
      },
    ],
  },
  {
    title: "Senior Backend Engineer",
    tag: "Engineering",
    intro: SHARED_INTRO,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "We are seeking a Senior Backend Engineer to build and maintain backend services that handle wallets, balances, transactions, and external game/provider integrations. This role focuses on correctness, security, and robustness in distributed systems.",
          "You will work on APIs that must be idempotent, secure, and fault-tolerant, similar to those used in real-world casino, fintech, or payment platforms.",
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          { text: "Design and implement backend APIs using Node.js (v18+)." },
          { text: "Build secure, well-structured services using Express.js or equivalent frameworks." },
          { text: "Implement transactional logic for wallets, debits, credits, and rollbacks." },
          { text: "Guarantee idempotency for money-moving operations." },
          { text: "Design and maintain PostgreSQL schemas, migrations, and constraints." },
          { text: "Implement HMAC-based authentication between internal and external services." },
          { text: "Enforce strict domain separation between systems (e.g. casino vs provider)." },
          { text: "Ensure data integrity under retries, failures, and concurrent requests." },
          { text: "Collaborate with QA and DevOps to support testing and deployments." },
        ],
      },
      {
        heading: "Required Skills & Experience",
        items: [
          { text: "5+ years of experience as a Backend Engineer." },
          { text: "Strong experience with Node.js and TypeScript or JavaScript." },
          { text: "Experience building APIs with Express.js or similar." },
          { text: "Strong knowledge of PostgreSQL and transactional SQL." },
          { text: "Experience with idempotent transaction design." },
          { text: "Understanding of distributed systems and retry-safe APIs." },
          { text: "Familiarity with API security patterns (HMAC, signatures, secrets)." },
          { text: "Experience working in cloud environments (AWS preferred)." },
          { text: "Strong code quality, structure, and documentation habits." },
        ],
      },
      {
        heading: "Nice to Have",
        items: [
          { text: "Experience in iGaming, fintech, payments, or wallet systems." },
          { text: "Experience with ORMs (Prisma, Sequelize, TypeORM) or well-structured raw SQL." },
          { text: "Experience with simulation or test-driver endpoints." },
          { text: "Familiarity with event-driven or message-based systems." },
        ],
      },
    ],
  },
];

export const POSITIONS: Position[] = RAW.map((p) => ({
  ...p,
  location: "Remote",
  slug: slugify(p.title),
}));

export function findPositionBySlug(slug: string): Position | undefined {
  return POSITIONS.find((p) => p.slug === slug);
}
