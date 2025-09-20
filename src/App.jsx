import { HashRouter } from 'react-router-dom'

export default function App(){
  const data = {
    name: 'Eric Ahn',
    role: 'Eric Ahn - Personal Portfolio',
    summary: `B.A. CS @ Emory ’25 → M.S. AI @ NJIT. \n \nWelcome to my page! Here I make, compile, and share practical tools that people might love.`,
    links: {
      email: 'mailto:ericahn03@gmail.com',
      github: 'https://github.com/ericahn03',
      linkedin: 'https://www.linkedin.com/in/eric-ahn-1b07592b8/',
      resume: './resume_final_ea.pdf'
    },
    photo: './profile.png',
    projects: [
      {
        title: 'Spotify Personality Inferencer (TypeTune)',
        period: 'Jul 2025 – Aug 2025',
        summary: 'Reads your top tracks and shows, step‑by‑step, how they map onto MBTI axes—shareable, fast, and transparent.',
        links: [
          {label:'Live Website', href:'https://typetune.vercel.app/' },
          {label:'Repo (public)', href:'https://github.com/ericahn03/typetune'}
        ],
        media: [
          {src:'./tt_homepage.jpeg', alt:'TypeTune homepage'},
          {src:'./tt_personalresults.jpeg', alt:'TypeTune results'},
          {src:'./tt_lyricsview.jpeg', alt:'TypeTune lyrics view'},
          {src:'./tt_resultsshared.jpeg', alt:'TypeTune shared'}
        ]
      },
      {
        title: 'IHME Mortality Prediction Data Analysis',
        period: 'Jan 2025 – May 2025',
        summary: 'End‑to‑end pipeline for forecasting age‑specific mortality with careful validation and clear error reporting.',
        links: [
          {label:'Report', href:'./mpda_report.pdf'},
          {label:'Repo (public)', href:'https://github.com/ericahn03/Mortality-Prediction-Pipeline'}
        ]
      },
      {
        title: 'Resume Enhancer & Job Matcher',
        period: 'Jan 2025 – May 2025',
        summary: 'Turns a resume into clean sections, improves phrasing, and matches to real job posts that fit.',
        links: [
          {label:'Demo', href:'https://www.youtube.com/watch?v=34NjbuVftyQ'},
          {label:'Report', href:'./careerai_report.pdf'},
          {label:'Repo (private)', href:'https://github.com/ZeshanZa/NLPPROJECT'}
        ]
      },
      {
        title: 'Jarvis Home Assistant',
        period: 'Jan 2024 – May 2024',
        summary: 'Privacy‑first voice assistant for macOS/Windows/iOS that controls devices and answers queries with an offline‑first stance.',
        links: [
          {label:'Demo', href:'https://www.youtube.com/watch?v=5ATZ_7YWslM'},
          {label:'Dev Doc', href:'./jarvis_devdoc.pdf'},
          {label:'User Doc', href:'./jarvis_userdoc.pdf'},
          {label:'Repo (private)', href:'https://github.com/willkohn/jarvis'}
        ]
      }
    ],
    education: [
      {
        school: 'New Jersey Institute of Technology',
        detail: 'M.S. in Artificial Intelligence (in progress)',
        period: 'Sep 2025 – Present'
      },
      {
        school: 'Emory University',
        detail: 'B.A. in Computer Science (’25), Math minor',
        period: 'Aug 2021 – May 2025'
      }
    ],
    coursework: [
      {
        group: "Applied AI (ML & RL & NLP)",
        items: [
          { code: "CS 669", title: "Reinforcement Learning", school: "NJIT", term: "Fall 2025" },
          { code: "CS 670", title: "Artificial Intelligence", school: "NJIT", term: "Fall 2025" },
          { code: "DS 675", title: "Machine Learning", school: "NJIT", term: "Fall 2025" },
          { code: "CS 334", title: "Machine Learning", school: "Emory", term: "Fall 2024" },
          { code: "CS 323", title: "Machine Learning Applications", school: "Emory", term: "Spring 2025" },
          { code: "CS 329", title: "Computational Linguistics", school: "Emory", term: "Spring 2025" },
        ],
      },
      {
        group: "Data & Modeling",
        items: [
          { code: "DS 637", title: "Python and Mathematics", school: "NJIT", term: "Fall 2025" },
          { code: "MATH 221", title: "Linear Algebra", school: "Emory", term: "Spring 2024" },
          { code: "MATH 212", title: "Differential Equations", school: "Emory", term: "Spring 2025" },
          { code: "MATH 315", title: "Numerical Analysis", school: "Emory", term: "Fall 2024" },
          { code: "MATH 250", title: "Foundations of Mathematics", school: "Emory", term: "Fall 2024" },
        ],
      },
      {
        group: "Systems & Performance",
        items: [
          { code: "CS 350", title: "Systems Programming", school: "Emory", term: "Spring 2025" },
          { code: "CS 255", title: "Comp.Arch./Machine Level Prog.", school: "Emory", term: "Spring 2024" },
          { code: "CS 370", title: "Computer Science Practicum", school: "Emory", term: "Fall 2024" },
          { code: "CS 326", title: "Analysis of Algorithms", school: "Emory", term: "Fall 2024" },
          { code: "CS 253", title: "Data Structures and Algorithms", school: "Emory", term: "Spring 2024" },
        ],
      },
      {
        group: "Foundations & Core CS",
        items: [
          { code: "CS 224", title: "Foundations of Comp.Science", school: "Emory", term: "Fall 2023" },
          { code: "CS 171", title: "Intro to Computer Science II", school: "Emory", term: "Fall 2023" },
          { code: "CS 170", title: "Intro to Computer Science I", school: "Emory", term: "Summer 2023" },
          { code: "MATH 210", title: "Adv.Calculus for Data Sciences", school: "Emory", term: "Summer 2024" },
          { code: "MATH 211", title: "Adv Calculus (Multivariable)", school: "Emory", term: "Summer 2024" },
        ],
      },
    ],
  }

  return (
    <HashRouter>
      <div className="min-h-screen bg-[#15181b] text-zinc-200">
        <Header data={data} />
        <main className="container">
          <Summary data={data} />
          <Education data={data} />
          <Coursework data={data} />
          <Timeline data={data} />
        </main>
        <SiteFooter data={data} />
      </div>
    </HashRouter>
  )
}

function Header({data}){
  return (
    <header className="bg-[#0f1215]/90 border-b border-white/10 sticky top-0 z-30 backdrop-blur">
      <div className="container py-3 flex items-center justify-between">
        <span className="font-semibold text-white">{data.name}</span>
        <nav className="flex items-center gap-3">
          <a className="link text-sm" href="#education">Education</a>
          <a className="link text-sm" href="#projects">Projects</a>
          <a className="btn btn-ghost text-sm" href={data.links.resume} target="_blank" rel="noreferrer">Resume</a>
        </nav>
      </div>
    </header>
  )
}

function Summary({ data }) {
  return (
    <section className="section" id="top">
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-start gap-6 md:gap-12">
        {/* LEFT: photo */}
        <div className="w-full flex justify-center md:block md:w-auto md:pt-1">
          <img
            src={data.photo}
            alt="Eric Ahn"
            className="h-36 w-36 md:h-44 md:w-44 rounded-full object-cover ring-2 ring-white/20"
          />
        </div>

        {/* RIGHT: headline + blurb + actions */}
        <div className="min-w-0 md:pt-1 text-center md:text-left">
          <h1 className="h1 leading-tight break-words">{data.role}</h1>

          <p className="mt-3 text-zinc-300 md:max-w-none whitespace-pre-line">
            {data.summary}
          </p>

          {/* wraps on mobile, centers; left-aligns on md+ */}
          <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
            <a className="btn btn-ghost gap-2" href={data.links.github} target="_blank" rel="noreferrer">
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.1c-3.22.71-3.9-1.36-3.9-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.22 1.79 1.22 1.04 1.79 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.57-.29-5.27-1.29-5.27-5.74 0-1.27.45-2.31 1.2-3.13-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.58.23 2.75.11 3.04.75.82 1.2 1.86 1.2 3.13 0 4.46-2.71 5.44-5.29 5.73.42.36.8 1.07.8 2.16v3.21c0 .32.21.69.8.57A11.5 11.5 0 0 0 12 .5Z"/>
              </svg>
              GitHub
            </a>

            <a className="btn btn-ghost gap-2" href={data.links.linkedin} target="_blank" rel="noreferrer">
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM14.5 9c-2.21 0-3.5 1.24-3.5 2.95V21h4v-6.1c0-1.13.8-1.9 1.88-1.9 1.05 0 1.62.72 1.62 1.9V21h4v-6.78C22.5 10.86 21 9 18.6 9c-1.54 0-2.6.68-3.1 1.49V9h-1z"/>
              </svg>
              LinkedIn
            </a>

            <a className="btn btn-ghost gap-2" href={data.links.email}>
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/>
              </svg>
              Email
            </a>

            <a className="btn btn-ghost" href="#projects">See Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}





function Timeline({data}){
  // newest -> oldest
  const items = data.projects.slice().sort((a,b)=>{
    // sort by approximate end date (month/year parsing lightweight)
    const toKey = p => {
      const m = /\b([A-Za-z]{3})\s(\d{4})/.exec(p.period.split('–').pop().trim())
      const months = {Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12}
      if (!m) return 0
      return parseInt(m[2])*12 + (months[m[1]]||0)
    }
    return toKey(b)-toKey(a)
  })

  return (
    <section className="section" id="projects">
      <div className="flex items-baseline gap-3">
        <h2 className="h2">Featured Projects</h2>
        <span className="text-xs italic text-zinc-400">(from newest to oldest)</span>
      </div>
      <div className="relative mt-6">
        <div className="timeline-line" />
        <ol className="space-y-6">
          {items.map((p, idx)=> (
          <li key={p.title} className="relative sm:pl-12">
            <span className="timeline-dot mt-[28px]" />
              <article className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="h3">{p.title}</h3>
                  <span className="small">{p.period}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-300">{p.summary}</p>
                {p.media?.length ? (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {p.media.map((m,i)=> (
                      <img key={i} src={m.src} alt={m.alt} loading="lazy"
                        className="rounded-lg border border-white/15 object-cover w-full h-24"
                        sizes="(min-width: 768px) 25vw, 50vw" />
                    ))}
                  </div>
                ): null}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.links.map(l => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn btn-ghost">{l.label}</a>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Education({ data }) {
  const LOGOS = {
    "New Jersey Institute of Technology": { src: "/njit.png",  alt: "NJIT" },
    "Emory University":                    { src: "/emory.png", alt: "Emory" },
  };

  return (
    // ↓ tighten section padding top/bottom
    <section className="section pt-4 md:pt-6 pb-4 md:pb-6" id="education">
      <h2 className="h2">Education</h2>

      {/* ↓ smaller top margin and gap between cards */}
      <ul className="mt-3 grid gap-3 sm:grid-cols-2 items-stretch">
        {data.education.map((e) => {
          const logo = LOGOS[e.school];
          return (
            // ↓ a bit less padding + slightly lower min-height
            <li
              key={e.school}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 md:p-5 min-h-[128px] h-full"
            >
              {/* ↓ reduce internal gap a hair */}
              <div className="grid grid-cols-[64px,1fr,auto] items-center gap-3 h-full">
                <img
                  src={logo?.src}
                  alt={logo?.alt || e.school}
                  className="h-12 w-12 md:h-14 md:w-14 object-contain"
                />
                <div className="min-w-0">
                  <div className="text-white font-semibold text-base md:text-lg leading-tight">
                    {e.school}
                  </div>
                  <div className="text-xs md:text-[13px] text-zinc-400 mt-1 leading-snug">
                    {e.detail}
                  </div>
                </div>
                {/* ↓ slightly smaller pill padding */}
                <span className="justify-self-end self-center rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-zinc-300">
                  {e.period}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}



function Coursework({ data }) {
  if (!data.coursework?.length) return null;

  // School color (legend + per-row left dot)
  const SCHOOL = {
    Emory: { dot: "bg-sky-400" },     // blue
    NJIT:  { dot: "bg-rose-400" },    // red/rose
    default: { dot: "bg-slate-400" }
  };

  // Status color (second dot on the right)
  // Rule: NJIT => in progress (yellow); everything else => completed (green)
  const statusDot = (school) =>
    (school === "NJIT" ? "bg-yellow-400" : "bg-green-400");

  // Term sorting (newest → oldest)
  const TERM_ORDER = { Winter: 1, Spring: 2, Summer: 3, Fall: 4 };
  const termKey = (term = "") => {
    const m = term.match(/(Winter|Spring|Summer|Fall)\s+(\d{4})/i);
    if (!m) return -Infinity;
    const season = m[1][0].toUpperCase() + m[1].slice(1).toLowerCase();
    const year = parseInt(m[2], 10);
    return year * 10 + (TERM_ORDER[season] ?? 0);
  };
  const groups = data.coursework.map((g) => ({
    ...g,
    items: g.items.slice().sort((a, b) => termKey(b.term) - termKey(a.term)),
  }));

  return (
    <section className="section" id="coursework">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="h2">Relevant Coursework</h2>

        {/* Legend (visible on mobile, wraps if needed) */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 text-[11px] sm:text-xs text-zinc-400">
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-[3px] bg-rose-400" /> NJIT
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-[3px] bg-sky-400" /> Emory
          </span>
          <span aria-hidden className="mx-1 h-3 sm:h-4 w-px rounded bg-white/40 shrink-0" />
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-yellow-400" /> In&nbsp;Progress
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-400" /> Completed
          </span>
        </div>
      </div>


      {/* Cards */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {groups.map((g) => (
          <article key={g.group} className="card p-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-white font-medium">{g.group}</h3>
              <span className="small">{g.items.length} course{g.items.length > 1 ? "s" : ""}</span>
            </div>

            <ul className="mt-3 divide-y divide-white/10">
              {g.items.map((c, i) => {
                const schoolStyle = SCHOOL[c.school] ?? SCHOOL.default;
                return (
                  <li key={i} className="py-1.5 first:pt-0 last:pb-0">
                    <div className="grid grid-cols-[5.75rem,1fr,auto] items-center gap-3 text-xs md:text-[13px] leading-tight">
                      {/* Code badge */}
                      <span className="w-[5.75rem] text-center rounded-md border border-white/15 px-2 py-0.5 text-zinc-200">
                        {c.code}
                      </span>

                      {/* Course title */}
                      <span className="text-zinc-300 truncate">{c.title}</span>

                      {/* Right: school square + status circle + term */}
                      <span className="flex items-center gap-2 text-zinc-400 whitespace-nowrap">
                        <span
                          className={`h-2.5 w-2.5 rounded-[3px] ${schoolStyle.dot}`}
                          title={c.school}
                        />
                        <span
                          className={`h-2 w-2 rounded-full ${statusDot(c.school)}`}
                          title={c.school === "NJIT" ? "In progress" : "Completed"}
                        />
                        <span>· {c.term}</span>
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}



function SiteFooter({data}){
  return (
    <footer className="border-t border-white/10 mt-6">
      <div className="container py-8 text-sm text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} {data.name}</p>
        <div className="flex items-center gap-3">
          <a className="link" href="#top">Top</a>
          <a className="link" href={data.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="link" href={data.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
