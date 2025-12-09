import React from "react";

/* Simple helper */
const SectionTitle = ({ label }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mb-8 text-center">
    {label}
  </h2>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/70 text-slate-100 border border-slate-700">
    {children}
  </span>
);

function App() {
  const skills = {
    Languages: ["C++", "Java (OOPs)"],
    "Frameworks & Libraries": [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
    ],
    "Developer Tools": ["Git", "GitHub", "VS Code", "Postman"],
    "Soft Skills": [
      "Problem Solving",
      "Team Collaboration",
      "Debugging",
      "Full-Stack Development",
    ],
  };

  const projects = [
    {
      name: "BytePost",
      period: "Feb 2025 – Mar 2025",
      description:
        "A modern blogging web app with authentication, user profiles, and full CRUD functionality.",
      bullets: [
        "Implemented secure authentication, user profiles, and post management.",
        "Added blog search, image uploads, and admin dashboard for managing posts and users.",
        "Built responsive UI using React & Tailwind and backend APIs with Node.js & Express.",
      ],
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/diwakaraman/BytePost",
    },
    {
      name: "RealEstate",
      period: "May 2025 – Jun 2025",
      description:
        "A property listing platform with authentication, property management, and advanced search.",
      bullets: [
        "Designed secure authentication and property CRUD features for users.",
        "Integrated property search, filters, and sorting for improved UX.",
        "Built backend APIs for listings, profiles, and JWT authentication.",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/diwakaraman/Estate-Project",
    },
    {
      name: "Weather App",
      period: "Mar 2024",
      description:
        "A real-time weather application using OpenWeather API with intuitive city search.",
      bullets: [
        "Displayed temperature, humidity, and wind speed in real time.",
        "Handled loading and error states gracefully for better UX.",
      ],
      tech: ["JavaScript", "REST API", "HTML", "CSS"],
      github: "https://github.com/diwakaraman/Weather-App",
    },
  ];

  const education = [
    {
      institute: "Motilal Nehru National Institute of Technology, Allahabad",
      degree: "Master of Computer Application (MCA)",
      period: "2023 – 2026",
      score: "CGPA: 7.16",
    },
    {
      institute: "Allahabad State University, Uttar Pradesh",
      degree:
        "Bachelor’s (Kiranlata Singh Mahavidyalaya Asothar, Fatehpur)",
      period: "2020 – 2023",
      score: "Percentage: 64%",
    },
    {
      institute: "Saraswati Vidya Mandir Inter College, Fatehpur",
      degree: "UP Board (10+2)",
      period: "2019 – 2020",
      score: "Percentage: 82%",
    },
    {
      institute: "Saraswati Vidya Mandir Inter College, Fatehpur",
      degree: "UP Board (10th)",
      period: "2017 – 2018",
      score: "Percentage: 82%",
    },
  ];

  const achievements = [
    "Awarded Inspire SHE scholarship for academic excellence.",
    "Solved 400+ coding problems on LeetCode.",
    "Collaborated on full-stack projects using Git and GitHub workflows.",
  ];

  const codingProfiles = [
    {
      label: "LeetCode",
      value: "Aman Diwakar",
      link: "https://leetcode.com/u/Aman_Diwakar/",
    },
    {
      label: "GeeksForGeeks",
      value: "2023aspj0zm",
      link: "https://www.geeksforgeeks.org/profile/2023aspj0zm?tab=activity",
    },
    {
      label: "Codeforces",
      value: "Amandiwakar",
      link: "https://codeforces.com/profile/Amandiwakar",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute top-40 -right-10 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Aman&nbsp;Kumar&nbsp;Diwakar
            </span>
          </div>
          <div className="hidden gap-6 text-sm text-slate-200/80 sm:flex">
            <a href="#about" className="hover:text-slate-50">About</a>
            <a href="#education" className="hover:text-slate-50">Education</a>
            <a href="#skills" className="hover:text-slate-50">Skills</a>
            <a href="#projects" className="hover:text-slate-50">Projects</a>
            <a href="#achievements" className="hover:text-slate-50">Achievements</a>
            <a href="#contact" className="hover:text-slate-50">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* ABOUT */}
        <section id="about" className="flex flex-col gap-10 py-16 sm:flex-row sm:items-center sm:py-24">
          <div className="flex-1 space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              MCA • MNNIT Allahabad • MERN Stack
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Full-Stack Developer &{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                MCA Student
              </span>
            </h1>

            <p className="max-w-xl text-base text-slate-300 sm:text-lg">
              Motivated MCA student at MNNIT Allahabad with strong full-stack development skills and hands-on project experience.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950">
                View Projects
              </a>
              <a href="https://github.com/diwakaraman" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-slate-600/70 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-100">
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex-1">
            <div className="mx-auto h-40 w-40 rounded-3xl border border-slate-700/70 bg-slate-900/60 p-1 shadow-xl sm:h-48 sm:w-48">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-2xl font-bold text-slate-950">
                  AD
                </div>
                <p className="text-xs font-medium">Aman Kumar Diwakar</p>
                <p className="text-[11px] text-slate-400">Full-Stack Developer</p>
              </div>
            </div>
          </div>
        </section>

        {/* ⭐ EDUCATION (moved above skills) */}
        <section id="education" className="py-16 sm:py-20">
          <SectionTitle label="Education" />
          <div className="space-y-5">
            {education.map((edu) => (
              <div key={edu.institute} className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-base font-semibold text-slate-50">{edu.institute}</h3>
                    <p className="text-sm text-slate-300">{edu.degree}</p>
                  </div>
                  <div className="text-right text-xs text-slate-400">
                    <p>{edu.period}</p>
                    <p className="font-medium text-slate-200">{edu.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-16 sm:py-20">
          <SectionTitle label="Skills & Tech Stack" />
          <div className="grid gap-8 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6">
                <h3 className="mb-3 text-sm font-semibold uppercase text-slate-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16 sm:py-20">
          <SectionTitle label="Projects" />
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6">
                <div className="mb-3 flex justify-between">
                  <h3 className="text-lg font-semibold text-slate-50">{project.name}</h3>
                  <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px]">{project.period}</span>
                </div>
                <p className="text-sm text-slate-300">{project.description}</p>
                <ul className="mt-3 mb-4 list-disc pl-4 text-xs text-slate-400 space-y-1">
                  {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
                <a href={project.github} target="_blank" className="text-sm text-cyan-300">View on GitHub →</a>
              </article>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS + CODING PROFILES */}
        <section id="achievements" className="py-16 sm:py-20">
          <SectionTitle label="Achievements & Coding Profiles" />
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Achievements */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6">
              <h3 className="mb-3 text-sm font-semibold uppercase text-slate-400">Achievements</h3>
              <ul className="space-y-2 text-sm text-slate-200">
                {achievements.map((ach, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="h-2 w-2 bg-cyan-300 rounded-full mt-1" />
                    {ach}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coding Profiles */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6">
              <h3 className="mb-3 text-sm font-semibold uppercase text-slate-400">Coding Profiles</h3>
              
              <ul className="space-y-3 text-sm">
                {codingProfiles.map((cp) => (
                  <li key={cp.label} className="flex justify-between items-center">
                    <span>{cp.label}</span>
                    <a
                      href={cp.link}
                      target="_blank"
                      className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-cyan-300 hover:text-cyan-200"
                    >
                      {cp.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16 sm:py-20">
          <SectionTitle label="Contact" />
          <div className="mx-auto max-w-xl text-center space-y-3 text-sm">
            <p className="text-slate-300">Open to internships, full-time roles & collaborations.</p>
            <p><strong>Email:</strong>{" "}
              <a href="mailto:iamankumardiwakar@gmail.com" className="text-cyan-300">
                iamankumardiwakar@gmail.com
              </a>
            </p>
            <p><strong>GitHub:</strong>{" "}
              <a href="https://github.com/diwakaraman" target="_blank" className="text-cyan-300">
                github.com/diwakaraman
              </a>
            </p>
            <p><strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/aman-diwakar-48527a28b/" target="_blank" className="text-cyan-300">
                linkedin.com/in/aman-diwakar
              </a>
            </p>
            <p><strong>Phone:</strong>{" "}
              <a href="tel:+917081997560" className="text-cyan-300">
                +91-7081997560
              </a>
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/70 bg-slate-950 py-5">
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Aman Kumar Diwakar · Portfolio built with React + Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default App;
