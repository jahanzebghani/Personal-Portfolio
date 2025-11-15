import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import profileImg from "../public/profile.jpg";

export default function App() {
  const [dark, setDark] = useState(true);
  const toggleDark = () => setDark((d) => !d);

  const projects = [
    {
      title: "Online Course Recommendation System",
      period: "07/2025 - 08/2025",
      tech: ["Django","Python","ML","NLP","MySQL"],
      bullets: ["AI chatbot integration","Admin dashboard","Personalized recommendations using TF-IDF & sentence-transformers"]
    },
    {
      title: "AI Chatbot",
      period: "08/2025",
      tech: ["Flask","Gemini API","NLP","JS"],
      bullets: ["Real-time conversation","Scalable design","Clean UX"]
    },
    {
      title: "Exploratory Data Analysis - Laptop Sales (2025)",
      period: "03/2025",
      tech: ["Pandas","Matplotlib","Seaborn"],
      bullets: ["City-wise trends","Processor/GPU preferences","Correlation heatmap"]
    },
    {
      title: "CSR Portal (Complaint Management)",
      period: "01/2023 - 03/2023",
      tech: ["Django","MySQL","JS","Bootstrap"],
      bullets: ["Role-based access","Notifications","Full complaint lifecycle"]
    }
  ];

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="min-h-screen text-gray-100">
        <div className="max-w-6xl mx-auto p-6">
          <header className="flex items-center justify-between py-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-2xl ring-1 ring-gray-700">
                <img src={profileImg} alt="Jahanzeb" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Muhammad Jahanzeb Ghani</h1>
                <p className="text-sm text-gray-300">Python Developer • Django • ML • Data Analysis</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/jahanzebjobcv.pdf"
                download
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm"
              >
                <FaDownload /> Resume
              </a>
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center py-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 bg-gray-900/40 p-6 rounded-2xl ring-1 ring-gray-700"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Hi — I'm Jahanzeb</h2>
              <p className="mt-3 text-gray-300 max-w-3xl leading-relaxed">
                Aspiring Python Developer skilled in Django, Machine Learning, and Data Analysis. I build web apps,
                ML pipelines, and data visualizations to solve real-world problems. I enjoy clean code, automation, and
                creating useful tools.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-sm">View Projects</a>
                <a href="#contact" className="px-4 py-2 rounded-md bg-transparent border border-gray-700 text-sm">Contact Me</a>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="p-3 rounded-lg bg-gray-800/30 ring-1 ring-gray-700">
                  <div className="text-xs text-gray-400">Location</div>
                  <div className="font-medium flex items-center gap-2"><FaMapMarkerAlt /> Karachi, Pakistan</div>
                </div>
                <div className="p-3 rounded-lg bg-gray-800/30 ring-1 ring-gray-700">
                  <div className="text-xs text-gray-400">Email</div>
                  <div className="font-medium flex items-center gap-2"><FaEnvelope /> jahanzebg1302@gmail.com</div>
                </div>
                <div className="p-3 rounded-lg bg-gray-800/30 ring-1 ring-gray-700">
                  <div className="text-xs text-gray-400">Phone</div>
                  <div className="font-medium flex items-center gap-2"><FaPhone /> 03174742139</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 ring-1 ring-gray-700"
            >
              <div className="w-full h-56 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-600/60 flex items-center justify-center text-4xl font-bold shadow-lg">Python</div>
              <p className="mt-4 text-sm text-gray-300">Focused on Django web apps, ML models and data visualization. Fast learner and strong problem solver.</p>
            </motion.div>
          </section>

          <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2 bg-gray-900/30 p-6 rounded-2xl ring-1 ring-gray-700">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Python", "Django", "Flask", "Machine Learning",
                  "Pandas", "NumPy", "Scikit-learn", "NLTK/Spacy",
                  "MySQL", "HTML/CSS/JS", "Bootstrap", "Selenium"
                ].map((s) => (
                  <div key={s} className="px-3 py-2 bg-gray-800/40 rounded-md ring-1 ring-gray-700 text-sm">{s}</div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/30 p-6 rounded-2xl ring-1 ring-gray-700">
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="mt-4 text-sm text-gray-300 space-y-3">
                <div>
                  <div className="font-medium">BS Digital Systems & Web Technology</div>
                  <div className="text-xs text-gray-400">Hamdard University — Nov 2023 - Sep 2025</div>
                </div>
                <div>
                  <div className="font-medium">Associate Degree in Software Development</div>
                  <div className="text-xs text-gray-400">Hamdard University — Oct 2020 - Sep 2022</div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="mt-10">
            <h3 className="text-2xl font-semibold">Selected Projects</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {projects.map((p, idx) => (
                <ProjectCard key={idx} {...p} />
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h3 className="text-2xl font-semibold">Experience</h3>
            <div className="mt-4 space-y-4">
              <ExperienceCard
                title="Machine Learning Intern"
                org="Embedded Systems & Computer Vision, NED University"
                period="03/2025 - 07/2025"
                bullets={["Built Online Course Recommendation System","NLP & ML model training","Django deployment"]}
              />

              <ExperienceCard
                title="Full-Stack Development Intern"
                org="National Center of Cyber Security, NED University"
                period="10/2022 - 02/2023"
                bullets={["Created CSR Portal","Implemented auth & dashboards","Notifications & forms"]}
              />
            </div>
          </section>

          <section id="contact" className="mt-10 bg-gray-900/30 p-6 rounded-2xl ring-1 ring-gray-700">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-gray-300">I'm open to python developer roles. You can reach me here:</p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="font-medium">jahanzebg1302@gmail.com</div>

                <div className="mt-3 text-sm text-gray-400">Phone</div>
                <div className="font-medium">03174742139</div>

                <div className="mt-3 text-sm text-gray-400">Location</div>
                <div className="font-medium">Karachi, Pakistan</div>
              </div>

              <form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('This demo sends nothing — wire up your backend to submit messages.');}}>
                <input className="w-full rounded-md p-3 bg-gray-800/40 ring-1 ring-gray-700 text-sm" placeholder="Your name" />
                <input className="w-full rounded-md p-3 bg-gray-800/40 ring-1 ring-gray-700 text-sm" placeholder="Email" />
                <textarea className="w-full rounded-md p-3 bg-gray-800/40 ring-1 ring-gray-700 text-sm" rows={4} placeholder="Message"></textarea>
                <button className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white">Send message</button>
              </form>
            </div>
          </section>

          <footer className="mt-10 text-center text-xs text-gray-500">© {new Date().getFullYear()} Muhammad Jahanzeb Ghani — Built with React + Tailwind + Framer Motion</footer>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, period, tech = [], bullets = [] }){
  return (
    <motion.div whileHover={{ y: -6 }} className="p-4 rounded-xl bg-gray-900/30 ring-1 ring-gray-700">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-xs text-gray-400">{period}</div>
        </div>
        <div className="text-xs text-gray-300">{tech.join(' • ')}</div>
      </div>
      <ul className="mt-3 text-sm text-gray-300 space-y-1">
        {bullets.map((b,i)=> <li key={i}>• {b}</li>)}
      </ul>
    </motion.div>
  );
}

function ExperienceCard({ title, org, period, bullets = [] }){
  return (
    <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1,x:0}} transition={{duration:0.35}} className="p-4 rounded-xl bg-gray-900/30 ring-1 ring-gray-700">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-xs text-gray-400">{org}</div>
        </div>
        <div className="text-xs text-gray-300">{period}</div>
      </div>
      <ul className="mt-3 text-sm text-gray-300 space-y-1">
        {bullets.map((b,i)=> <li key={i}>• {b}</li>)}
      </ul>
    </motion.div>
  );
}
