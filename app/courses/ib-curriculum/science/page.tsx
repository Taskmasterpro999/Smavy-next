import Image from "next/image";
import Navbar from "../../../components/Navbar";

const pdfHref = "/assets/images/Science%20%E2%80%94%20IB%20Curriculum.pdf";

const yearButtons = [
  { label: "PYP 3-5", id: "pyp-ages-3-5" },
  { label: "PYP Y1-2", id: "pyp-years-1-2" },
  { label: "PYP Y3-4", id: "pyp-years-3-4" },
  { label: "PYP Y5-6", id: "pyp-years-5-6" },
  { label: "MYP Y1-3", id: "myp-years-1-3" },
  { label: "MYP Y4-5", id: "myp-years-4-5" },
  { label: "DP Bio Y12", id: "dp-year-12-biology" },
  { label: "DP Chem Y12", id: "dp-year-12-chemistry" },
  { label: "DP Phys Y12", id: "dp-year-12-physics" },
  { label: "DP Bio Y13", id: "dp-year-13-biology" },
  { label: "DP Chem Y13", id: "dp-year-13-chemistry" },
  { label: "DP Phys Y13", id: "dp-year-13-physics" },
];

const courseCards = [
  {
    id: "pyp-ages-3-5",
    title: "IB PYP Ages 3-5 Science",
    stage: "PYP",
    meta: "IB PYP Early Years (Ages 3-5):",
    desc: "Science integrated with transdisciplinary themes. Sparking early scientific curiosity through inquiry, observation and play in the IB PYP framework.",
    topics: ["Living things - plants and animals", "Materials and their properties", "Senses and observation", "Weather and seasons", "Simple experimentation through play"],
    outcome: "Learners observe, question and describe the natural world, building foundations for scientific inquiry.",
    download: "Download PYP 3-5",
  },
  {
    id: "pyp-years-1-2",
    title: "IB PYP Years 1-2 Science",
    stage: "PYP",
    meta: "IB PYP Years 1-2 (Ages 6-7):",
    desc: "Science as part of transdisciplinary inquiry. Building scientific inquiry and observation skills across life, material and Earth science.",
    topics: ["Living things and their habitats", "Material properties and changes", "Forces and motion - simple", "Earth and space basics", "Simple fair testing and investigation"],
    outcome: "Learners ask scientific questions, make predictions and record observations using mathematical and visual tools.",
    download: "Download PYP Y1-2",
  },
  {
    id: "pyp-years-3-4",
    title: "IB PYP Years 3-4 Science",
    stage: "PYP",
    meta: "IB PYP Years 3-4 (Ages 8-9):",
    desc: "Moves toward more formal scientific method while maintaining an inquiry-based approach across biology, chemistry and physics.",
    topics: ["Adaptations and ecosystems", "Physical and chemical changes", "Forces, energy and simple machines", "Earth - rocks, water cycle, atmosphere", "Designing and conducting experiments"],
    outcome: "Learners design investigations, record and analyse data, and communicate findings with scientific vocabulary.",
    download: "Download PYP Y3-4",
  },
  {
    id: "pyp-years-5-6",
    title: "IB PYP Years 5-6 Science",
    stage: "PYP",
    meta: "IB PYP Years 5-6 (Ages 10-11):",
    desc: "Strong preparation for MYP Sciences. PYP Exhibition often includes scientific inquiry and complete investigation cycles.",
    topics: ["Body systems and microorganisms", "Chemistry - elements, compounds, reactions", "Physics - energy transfer, forces, electricity", "Earth and space - solar system, geology", "Scientific method and investigation design"],
    outcome: "Learners plan and carry out complete investigations, use evidence to draw conclusions and communicate scientific findings confidently.",
    download: "Download PYP Y5-6",
  },
  {
    id: "myp-years-1-3",
    title: "IB MYP Years 1-3 Science",
    stage: "MYP",
    meta: "IB MYP Years 1-3 (Ages 11-14):",
    desc: "Integrated Sciences with biology, chemistry and physics taught as interconnected disciplines through MYP concepts and criteria.",
    topics: ["Biology - cells, organisms, ecosystems", "Chemistry - matter, reactions, periodic table", "Physics - forces, energy, waves", "Scientific method and investigation design", "MYP key concepts - change, relationships, systems"],
    outcome: "Students design scientific investigations, analyse data and communicate findings using scientific vocabulary and mathematical tools.",
    download: "Download MYP Y1-3",
  },
  {
    id: "myp-years-4-5",
    title: "IB MYP Years 4-5 Science",
    stage: "MYP",
    meta: "IB MYP Years 4-5 (Ages 14-16):",
    desc: "Preparing for DP Sciences with in-depth study and MYP eAssessment in chosen science or integrated sciences.",
    topics: ["Biology - genetics, evolution, human systems", "Chemistry - bonding, reactions, stoichiometry", "Physics - mechanics, waves, electricity", "Scientific investigations for MYP Personal Project", "Assessment - scientific literacy, data analysis"],
    outcome: "Students demonstrate MYP mastery in chosen sciences and develop the analytical skills required for DP Biology, Chemistry or Physics.",
    download: "Download MYP Y4-5",
  },
  {
    id: "dp-year-12-biology",
    title: "IB DP Y12 Biology",
    stage: "DP",
    meta: "IB DP Biology Year 12 (Age 16-17):",
    desc: "Molecular biology, cells, ecology and genetics at SL or HL, including IA foundations and option pathways.",
    topics: ["Cells - structure, transport, division", "Molecular biology - DNA, enzymes, metabolism", "Genetics and evolution", "Ecology and biodiversity", "HL topics - nucleic acids, metabolism, plant biology, animal physiology"],
    outcome: "Students develop deep understanding of biological systems, experimental design and data analysis for university-level biological sciences.",
    download: "Download Bio Y12",
  },
  {
    id: "dp-year-12-chemistry",
    title: "IB DP Y12 Chemistry",
    stage: "DP",
    meta: "IB DP Chemistry Year 12 (Age 16-17):",
    desc: "Stoichiometry, bonding, equilibria and organic chemistry at SL or HL with a strong mathematical component.",
    topics: ["Stoichiometric relationships", "Atomic structure and periodicity", "Chemical bonding and structure", "Energetics and thermochemistry", "HL - kinetics, equilibrium, organic chemistry, analytical techniques"],
    outcome: "Students master chemical principles through quantitative problem-solving and practical experimentation.",
    download: "Download Chem Y12",
  },
  {
    id: "dp-year-12-physics",
    title: "IB DP Y12 Physics",
    stage: "DP",
    meta: "IB DP Physics Year 12 (Age 16-17):",
    desc: "Mechanics, thermal physics, waves and electromagnetism at SL or HL with mathematical modelling and IA preparation.",
    topics: ["Measurement and uncertainties", "Mechanics - kinematics, dynamics, momentum", "Thermal physics and kinetic theory", "Waves and oscillations", "HL - rotational dynamics, quantum physics, nuclear physics"],
    outcome: "Students build deep understanding of physical principles and develop mathematical modelling and experimental skills.",
    download: "Download Phys Y12",
  },
  {
    id: "dp-year-13-biology",
    title: "IB DP Y13 Biology",
    stage: "DP",
    meta: "IB DP Biology Year 13 (Age 17-18):",
    desc: "Final DP Biology year focused on Internal Assessment completion and external paper preparation.",
    topics: ["Individual Investigation - 20% of grade", "Paper 1 - multiple choice", "Paper 2 - data-based and extended response", "Paper 3 - options and data analysis", "Exam technique and past paper practice"],
    outcome: "Students submit a high-quality independent investigation and achieve mastery of IB Biology external examinations.",
    download: "Download Bio Y13",
  },
  {
    id: "dp-year-13-chemistry",
    title: "IB DP Y13 Chemistry",
    stage: "DP",
    meta: "IB DP Chemistry Year 13 (Age 17-18):",
    desc: "Final DP Chemistry year focused on IA completion, options, data analysis and timed external paper practice.",
    topics: ["Individual Investigation", "Paper 1 - multiple choice", "Paper 2 - short and extended response", "Paper 3 - options and data analysis", "Exam technique and timed practice"],
    outcome: "Students submit a rigorous Individual Investigation and achieve mastery of IB Chemistry external examinations.",
    download: "Download Chem Y13",
  },
  {
    id: "dp-year-13-physics",
    title: "IB DP Y13 Physics",
    stage: "DP",
    meta: "IB DP Physics Year 13 (Age 17-18):",
    desc: "Final DP Physics year covering the Individual Investigation and external papers with structured past-paper strategy.",
    topics: ["Individual Investigation", "Paper 1 - multiple choice", "Paper 2 - data-based and extended response", "Paper 3 - options and short response", "Exam technique and past papers"],
    outcome: "Students submit a rigorous IA and achieve mastery of IB Physics external examinations.",
    download: "Download Phys Y13",
  },
];

const differenceCards = [
  {
    icon: "concept",
    title: "Subject Specialist Tutors",
    text: "Separate tutors for Biology, Chemistry and Physics - each an IB-experienced subject expert, not a generalist science teacher.",
  },
  {
    icon: "data",
    title: "IA Investigation Support",
    text: "Expert guidance on the Individual Investigation: research question, method, data analysis and evaluation aligned to IB assessment criteria.",
  },
  {
    icon: "exam",
    title: "Paper 3 & Options",
    text: "Full coverage of Paper 3 options including Biotechnology, Medicinal Chemistry, Astrophysics, Relativity and more.",
  },
];

const faqs = [
  ["Do you teach IB PYP, MYP and DP Science?", "Yes. The programme covers PYP inquiry science, MYP integrated sciences and DP Biology, Chemistry and Physics at SL or HL."],
  ["Can you help with the IB Science IA?", "Yes. Tutors guide students through research questions, method design, data processing, analysis, evaluation and final polishing against IB assessment criteria."],
  ["Do DP students get separate tutors for Biology, Chemistry and Physics?", "Yes. DP students work with subject-specialist tutors for each science so lessons stay aligned with the exact syllabus, paper style and IA expectations."],
  ["Do you cover SL and HL?", "Yes. DP Biology, Chemistry and Physics are supported at both SL and HL, including core topics, HL extensions, options and external exam preparation."],
];

const footerLinks = [
  { title: "Academic Courses", links: ["English Tutoring", "Maths Tutoring", "Science Tutoring", "General Ability", "Exam Preparation"] },
  { title: "Coding, Robotics & AI", links: ["Coding with Scratch", "Automated Ground Vehicle", "Automate with Arduino", "Python Programming", "Raspberry Pi & IoT", "Data Science & ML"] },
  {
    title: "Countries",
    links: [
      ["Australia", "flag-australia.svg"],
      ["United Kingdom", "flag-uk.svg"],
      ["United States", "flag-us.svg"],
      ["IB Curriculum", "flag-ib.svg"],
      ["India", "flag-india.svg"],
      ["Singapore", "flag-singapore.svg"],
      ["UAE", "flag-uae.svg"],
      ["New Zealand", "flag-new-zealand.svg"],
      ["Canada", "flag-canada.svg"],
      ["WorldWide", "flag-worldwide.svg"],
    ],
  },
  { title: "About", links: ["Why Choose Smavy", "How It Works", "Pricing", "Become a Tutor", "Join Operations & Sales", "Contact Us"] },
];

export default function ScienceIBCurriculumPage() {
  return (
    <main className="min-h-screen bg-white text-[#102877]">
      <Navbar />
      <div className="mx-auto max-w-[1440px] overflow-hidden border-x border-[#d8d8d8]">
        <Hero />
        <YearNav />
        <CourseStructure />
        <DifferenceSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section className="bg-[#102877] px-6 pb-14 pt-7 text-white md:px-14 lg:px-[96px]">
      <div className="text-[11px] font-bold text-white/55">
        Home <span className="mx-3 text-white/80">&gt;</span> Courses <span className="mx-3 text-white/80">&gt;</span> Academic Tutoring <span className="mx-3 text-white/80">&gt;</span> <span className="text-[#05D8DE]">IB</span>
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#46c7db]/80 bg-[#0a235f] px-3.5 py-2 text-[11px] font-black text-[#66e3e9]">
            <GlobeBadgeIcon />
            IB Curriculum · PYP · MYP · DP Bio / Chem / Phys
          </span>
          <h1 className="mt-8 max-w-[820px] text-[46px] font-black leading-[1.04] tracking-[0] md:text-[62px]">
            IB Science Tutoring
            <br />
            <span className="text-[#05B4BB]">PYP · MYP · DP</span>
          </h1>
          <p className="mt-7 max-w-[705px] text-[17px] font-semibold leading-[1.22] text-white/78 md:text-[20px]">
            Expert 1:1 online Science tutoring for students in the IB PYP, MYP and Diploma Programme. From primary science inquiry through to DP Biology, Chemistry and Physics at SL or HL.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-black text-white">
            {["PYP Inquiry", "MYP Integrated", "DP Biology", "DP Chemistry", "DP Physics"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/12 px-3.5 py-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">{item}</span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="inline-flex h-[58px] items-center gap-3 rounded-[21px] bg-[#F98925] px-8 text-[20px] font-black text-white" href="#trial">
              Book Free Trial <ArrowRightIcon />
            </a>
            <a className="inline-flex h-[58px] items-center rounded-[21px] border-2 border-[#F98925] px-8 text-[19px] font-black text-[#F98925]" href="#trial">Speak to Our Team</a>
          </div>
        </div>
        <HeroSummaryCard />
      </div>
      <div className="mt-16 overflow-hidden rounded-[22px]">
        <Image src="/assets/images/Image (Replace)-25.png" alt="IB science student studying chemistry and data analysis" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function HeroSummaryCard() {
  return (
    <div className="justify-self-center rounded-[34px] border border-[#6e83bd] bg-[#3c5597] px-7 py-8 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[372px]">
      <h2 className="flex items-center gap-3 text-[20px] font-black">
        <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
        IB Sciences with Smavy
      </h2>
      <div className="mt-6 space-y-0">
        {[
          ["Programmes", "PYP · MYP · DP"],
          ["DP Sciences", "Bio · Chem · Physics"],
          ["Levels", "SL & HL"],
          ["IA", "Individual Investigation"],
          ["Worldwide", "All IB schools"],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 border-b border-[#6f84bd]/70 py-4 text-[14px] font-black last:border-0 last:pb-0">
            <span className="text-white/52">{label}</span>
            <span className={label === "Programmes" ? "text-[#05D8DE]" : label === "Worldwide" ? "text-[#F98925]" : "text-white"}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function YearNav() {
  return (
    <section className="bg-white px-6 py-9">
      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-center gap-3">
        {yearButtons.map((year) => (
          <a key={year.id} href={`#${year.id}`} className="rounded-full border border-[#dde5f5] bg-white px-5 py-2 text-[11px] font-black text-[#102877] shadow-[0_7px_16px_rgba(18,35,99,0.04)] transition hover:border-[#F98925] hover:text-[#F98925]">
            {year.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function CourseStructure() {
  return (
    <section id="years" className="bg-[#f5f7ff] px-6 py-22">
      <div className="mx-auto max-w-[1240px]">
        <LeftSectionHeader eyebrow="Course Structure" title="12 Individual Year Courses" highlight="IB Curriculum - PYP - MYP - DP" />
        <p className="mt-5 max-w-[860px] text-[14px] font-medium leading-[1.6] text-[#6d7393]">
          Each year has its own focused Science course with curriculum alignment, key topics and learning outcomes. Pick your child&apos;s year below or use the programme buttons above.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-[1240px] gap-7 md:grid-cols-2 lg:grid-cols-3">
        {courseCards.map((card) => (
          <CourseCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

function CourseCard({ card }: { card: (typeof courseCards)[number] }) {
  const isDp = card.stage === "DP";
  const isMyp = card.stage === "MYP";

  return (
    <article id={card.id} className="scroll-mt-28 rounded-[14px] border border-transparent bg-white p-6 shadow-[0_12px_30px_rgba(18,35,99,0.06)] transition duration-300 target:-translate-y-1 target:border-[#F98925] target:ring-4 target:ring-[#F98925]/20 target:shadow-[0_18px_45px_rgba(249,137,37,0.18)]">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[18px] font-black text-[#102877]">{card.title}</h3>
        <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase ${isDp ? "bg-[#fff0eb] text-[#F98925]" : isMyp ? "bg-[#fff7df] text-[#e6a400]" : "bg-[#eafff1] text-[#20b455]"}`}>{card.stage}</span>
      </div>
      <div className="mt-5 rounded-[8px] bg-[#e9fbff] p-4">
        <p className="text-[12px] font-black text-[#05B4BB]">{card.meta}</p>
        <p className="mt-2 text-[12px] font-semibold leading-[1.45] text-[#5f6689]">{card.desc}</p>
      </div>
      <h4 className="mt-5 text-[12px] font-black text-[#102877]">Key Topics Covered:</h4>
      <ul className="mt-3 space-y-2">
        {card.topics.map((topic) => (
          <li key={topic} className="flex gap-2 text-[12px] font-semibold leading-[1.35] text-[#4f5577]">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#05B4BB]" />
            {topic}
          </li>
        ))}
      </ul>
      <div className="mt-5 rounded-[8px] bg-[#f5f7ff] p-4">
        <h4 className="text-[12px] font-black text-[#102877]">Learning Outcomes:</h4>
        <p className="mt-2 text-[12px] font-semibold leading-[1.45] text-[#6d7393]">{card.outcome}</p>
      </div>
      <div className="mt-5 flex gap-3">
        <a className="flex-1 rounded-[10px] border border-[#F98925] px-3 py-3 text-center text-[11px] font-black text-[#F98925]" href={pdfHref}>{card.download}</a>
        <a className="flex-1 rounded-[10px] bg-[#F98925] px-3 py-3 text-center text-[11px] font-black text-white" href="#trial">Book Free Trial</a>
      </div>
    </article>
  );
}

function DifferenceSection() {
  return (
    <section className="bg-[#f5f7ff] px-6 py-24">
      <div className="mx-auto max-w-[1240px]">
        <LeftSectionHeader eyebrow="IB Tutoring" title="Why Smavy for IB Sciences" />
      </div>
      <div className="mx-auto mt-16 grid max-w-[1240px] gap-9 md:grid-cols-3">
        {differenceCards.map((card) => (
          <article key={card.title} className="min-h-[262px] rounded-[24px] border border-[#dfe6f5] bg-white px-9 py-9">
            <ScienceDifferenceIcon type={card.icon} />
            <h3 className="mt-7 text-[25px] font-black leading-tight text-[#102877]">{card.title}</h3>
            <p className="mt-3 text-[17px] font-semibold leading-[1.45] text-[#4d4954]">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#f5f7ff] px-6 py-22">
      <SectionHeader eyebrow="FAQs" title="Common Questions About Online IB Sciences" />
      <div className="mx-auto mt-11 max-w-[820px] space-y-4">
        {faqs.map(([question, answer]) => (
          <details key={question} className="group rounded-[14px] bg-white px-6 py-5 shadow-[0_10px_26px_rgba(18,35,99,0.04)]" open={question === faqs[0][0]}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[14px] font-black text-[#102877]">
              <span>{question}</span>
              <span className="text-[#6d7393] transition group-open:rotate-180">
                <DownSmallIcon />
              </span>
            </summary>
            <p className="mt-3 text-[12.5px] font-medium leading-[1.6] text-[#6d7393]">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="trial" className="relative overflow-hidden bg-[#102877] px-6 py-24 text-center text-white">
      <div className="absolute bottom-[-120px] left-[-70px] h-[330px] w-[330px] rounded-full bg-white/6" />
      <div className="relative mx-auto max-w-[900px]">
        <h2 className="text-[38px] font-black leading-[1.12] tracking-[0] md:text-[58px]">
          Ready to Excel in
          <br />
          <span className="text-[#F98925]">IB Sciences?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[610px] text-[14px] font-medium leading-[1.6] text-white/76">
          Book your free 1-hour trial session with an IB-experienced Science tutor.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="inline-flex h-[54px] items-center gap-2 rounded-[18px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
            Request a Free Trial <ArrowRightIcon />
          </a>
          <a className="inline-flex h-[54px] items-center rounded-[18px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href={pdfHref}>Download Curriculum Guide</a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 grid h-[5px] w-full grid-cols-4">
        <span className="bg-[#F98925]" />
        <span className="bg-[#20b455]" />
        <span className="bg-[#00b8d8]" />
        <span className="bg-[#f6ca00]" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#102877] px-6 pb-10 pt-14 text-white">
      <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1.35fr_repeat(4,1fr)]">
        <div>
          <Image src="/assets/images/smavy-logo.png" alt="Smavy Academy" width={166} height={42} className="h-auto w-[166px]" />
          <p className="mt-7 max-w-[300px] text-[13px] font-semibold leading-[1.55] text-white/76">
            A Smart Choice for a Savvy You. Expert 1:1 online tutoring in Australia, UK, USA, IB schools and worldwide.
          </p>
          <div className="mt-9">
            <h3 className="text-[12px] font-black uppercase tracking-[0.08em] text-white/86">Get In Touch</h3>
            <ul className="mt-5 space-y-3 text-[12px] font-semibold text-white/68">
              <li>hello@smavy.com</li>
              <li>WhatsApp - wa.link/hybwn0</li>
              <li>+61 480 045 848</li>
              <li>+91 76958 53385</li>
              <li>UK: +44 20 3349 5911</li>
              <li>US: +1 214 308 0807</li>
            </ul>
          </div>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3 className="text-[12px] font-black uppercase tracking-[0.08em] text-white">{group.title}</h3>
            <ul className="mt-5 space-y-3">
              {group.links.map((link) => (
                <li key={Array.isArray(link) ? link[0] : link}>
                  <a href="#" className="flex items-center gap-2 text-[12px] font-medium text-white/64 transition hover:text-white">
                    {Array.isArray(link) ? (
                      <>
                        <Image src={`/assets/images/flags/${link[1]}`} alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
                        <span>{link[0]}</span>
                      </>
                    ) : (
                      link
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-[1220px] flex-wrap justify-between gap-4 border-t border-white/10 pt-7 text-[11px] font-medium text-white/50">
        <span>2026 Smavy Private Limited</span>
        <span>Terms of Use - Refund Policy - Privacy Policy</span>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-[840px] text-center">
      <span className="inline-flex rounded-full bg-[#fff1ef] px-4 py-2 text-[11px] font-black text-[#F98925]">{eyebrow}</span>
      <h2 className="mt-5 text-[32px] font-black leading-[1.16] tracking-[0] text-[#102877] md:text-[48px]">{title}</h2>
    </div>
  );
}

function LeftSectionHeader({ eyebrow, title, highlight }: { eyebrow: string; title: string; highlight?: string }) {
  return (
    <div className="text-left">
      <span className="inline-flex items-center gap-2 rounded-full bg-[#fff1ef] px-4 py-2 text-[11px] font-black text-[#ff5f52]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f52]" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-[32px] font-black leading-[1.16] tracking-[0] text-[#102877] md:text-[48px]">
        {title}
        {highlight && (
          <>
            <br />
            <span className="text-[#05B4BB]">{highlight}</span>
          </>
        )}
      </h2>
    </div>
  );
}

function ScienceDifferenceIcon({ type }: { type: string }) {
  const iconSrc =
    type === "concept"
      ? "/assets/images/Subject.png"
      : type === "data"
        ? "/assets/images/IA.png"
        : "/assets/images/Paper%203%20%26%20Options.png";

  return (
    <Image
      src={iconSrc}
      alt=""
      width={39}
      height={39}
      className="h-[39px] w-[39px] rounded-[11px] object-contain"
    />
  );
}

function GlobeBadgeIcon() {
  return (
    <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white text-[#102877]">
      <svg className="h-[13px] w-[13px]" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2.5 8h11M8 2c1.6 1.7 2.4 3.7 2.4 6S9.6 12.3 8 14M8 2C6.4 3.7 5.6 5.7 5.6 8s.8 4.3 2.4 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.35" />
      </svg>
    </span>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
    </svg>
  );
}

function DownSmallIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}
