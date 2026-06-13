import Image from "next/image";
import Navbar from "../../../components/Navbar";

const pdfHref = "/assets/images/English%20%E2%80%94%20IB%20Curriculum.pdf";

const yearButtons = [
  { label: "PYP 3-5", id: "pyp-ages-3-5" },
  { label: "PYP Y1-2", id: "pyp-years-1-2" },
  { label: "PYP Y3-4", id: "pyp-years-3-4" },
  { label: "PYP Y5-6", id: "pyp-years-5-6" },
  { label: "MYP Y1-3", id: "myp-years-1-3" },
  { label: "MYP Y4-5", id: "myp-years-4-5" },
  { label: "DP Y12", id: "dp-year-12" },
  { label: "DP Y13", id: "dp-year-13" },
];

const courseCards = [
  {
    id: "pyp-ages-3-5",
    title: "IB PYP Ages 3-5 English",
    stage: "PYP",
    meta: "IB PYP Early Years (Ages 3-5):",
    desc: "Developing early literacy through inquiry, play and storytelling in the IB PYP Early Years framework.",
    topics: ["Oral language development and vocabulary", "Listening and responding to stories", "Phonemic awareness and print concepts", "Emerging writing through drawing and mark-making", "Concept-based inquiry through picture books"],
    outcome: "Learners communicate ideas confidently through speech, begin recognising sounds and letters, and engage with stories through questioning and discussion.",
    download: "Download PYP 3-5",
  },
  {
    id: "pyp-years-1-2",
    title: "IB PYP Years 1-2 English",
    stage: "PYP",
    meta: "IB PYP Years 1-2 (Ages 6-7):",
    desc: "Building foundational reading and writing skills within the PYP inquiry framework.",
    topics: ["Phonics and decoding strategies", "Reading with fluency and comprehension", "Writing simple narratives and descriptions", "Speaking and listening in group inquiry", "Responding to texts through PYP concepts"],
    outcome: "Learners read simple texts independently, write for a range of purposes and participate actively in inquiry-based language discussions.",
    download: "Download PYP Y1-2",
  },
  {
    id: "pyp-years-3-4",
    title: "IB PYP Years 3-4 English",
    stage: "PYP",
    meta: "IB PYP Years 3-4 (Ages 8-9):",
    desc: "Developing comprehension, composition and critical thinking across a range of text types.",
    topics: ["Reading fiction, non-fiction and poetry", "Writing narrative, descriptive and persuasive texts", "Oral presentations and discussion", "Visual literacy - images, diagrams and media", "Inquiry into how language shapes meaning"],
    outcome: "Learners analyse and respond to a range of texts, write with clear purpose and structure and use language to support PYP inquiry work.",
    download: "Download PYP Y3-4",
  },
  {
    id: "pyp-years-5-6",
    title: "IB PYP Years 5-6 English",
    stage: "PYP",
    meta: "IB PYP Years 5-6 (Ages 10-11):",
    desc: "Strengthening analytical reading and writing in preparation for the PYP Exhibition and transition to MYP.",
    topics: ["Analysing themes, characters and structure in fiction", "Research-based writing for the PYP Exhibition", "Advanced grammar and vocabulary", "Media literacy and digital communication", "Evaluating arguments and perspectives"],
    outcome: "Learners critically engage with texts, write extended compositions and present findings confidently as part of the PYP Exhibition.",
    download: "Download PYP Y5-6",
  },
  {
    id: "myp-years-1-3",
    title: "IB MYP Years 1-3 English",
    stage: "MYP",
    meta: "IB MYP Years 1-3 (Ages 11-14):",
    desc: "Developing language and literature skills in the IB MYP framework through global contexts and key concepts.",
    topics: ["Literary analysis - form, perspective, style", "Non-fiction writing - analytical, persuasive, reflective", "Speaking and presentation skills", "MYP key concepts - communication, creativity, perspective", "Global contexts applied to language study"],
    outcome: "Students analyse texts in detail, construct well-structured written responses and communicate effectively across a range of global contexts.",
    download: "Download MYP Y1-3",
  },
  {
    id: "myp-years-4-5",
    title: "IB MYP Years 4-5 English",
    stage: "MYP",
    meta: "IB MYP Years 4-5 (Ages 14-16):",
    desc: "Preparing for MYP Personal Project and eAssessment through advanced literary and analytical study.",
    topics: ["In-depth literary analysis - prose, poetry, drama", "Argumentative and analytical essays", "Oral commentaries and presentations", "Comparative text study across cultures", "MYP Personal Project research and writing"],
    outcome: "Students produce sophisticated analytical writing, engage critically with global literature and demonstrate mastery of language for the MYP eAssessment.",
    download: "Download MYP Y4-5",
  },
  {
    id: "dp-year-12",
    title: "IB DP Year 12 English",
    stage: "DP",
    meta: "IB DP Year 12 / IB1 (Age 16-17):",
    desc: "IB Diploma English A: Language and Literature, developing analytical and interpretive skills with literary and non-literary texts.",
    topics: ["Areas of exploration - readers, writers and texts", "Time and space; intertextuality", "Literary forms - prose, poetry, drama", "Non-literary bodies of work and literary works", "Paper 1 textual analysis and Paper 2 comparative essay"],
    outcome: "Students develop close-reading and comparative analysis skills, engaging with literary and non-literary texts from diverse cultural and historical contexts.",
    download: "Download Y12",
  },
  {
    id: "dp-year-13",
    title: "IB DP Year 13 English",
    stage: "DP",
    meta: "IB DP Year 13 / IB2 (Age 17-18):",
    desc: "Final year of IB DP English A - consolidating analysis, completing Individual Oral and HL Essay for external assessment.",
    topics: ["Individual Oral - 10 minutes plus 5 minutes questioning", "HL Essay - 1,200-1,500 words for HL only", "Paper 1 guided textual analysis", "Paper 2 comparative essay on studied works", "Exam technique and timed practice"],
    outcome: "Students refine analytical writing, present sophisticated oral commentaries and achieve mastery for final IB external examinations.",
    download: "Download Y13",
  },
];

const differenceCards = [
  {
    icon: "/assets/images/IB-Experienced Tutors.png",
    title: "IB-Experienced Tutors",
    text: "Every IB English tutor has direct experience teaching, examining or completing IB English A at the programme level they tutor.",
  },
  {
    icon: "/assets/images/Oral.png",
    title: "IA & Oral Support",
    text: "Expert guidance on the Individual Oral, HL Essay, and Paper 1 & 2 preparation. Past paper practice with detailed markscheme feedback.",
  },
  {
    icon: "/assets/images/Continuity%20Through%20IB%20Journey.png",
    title: "Continuity Through IB Journey",
    text: "Start with MYP and continue with the same tutor into DP - building deep understanding of your writing style and goals.",
  },
];

const faqs = [
  ["Do you teach IB PYP, MYP and DP English?", "Yes. Smavy supports PYP literacy, MYP Language & Literature and IB DP English A: Language and Literature at SL or HL."],
  ["Can you help with the Individual Oral?", "Yes. Tutors guide students through global issue selection, extract choice, oral structure, practice delivery and refinement against IB criteria."],
  ["Do you support HL Essay and Paper 1/Paper 2?", "Yes. Students receive support for HL Essay planning, close textual analysis, comparative writing, timed practice and markscheme-based feedback."],
  ["Can students stay with the same tutor across MYP and DP?", "Yes. Where possible, students can continue with the same tutor so the tutor understands their writing style, reading gaps and long-term goals."],
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

export default function EnglishIBCurriculumPage() {
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
            IB Curriculum · PYP · MYP · DP
          </span>
          <h1 className="mt-8 max-w-[820px] text-[46px] font-black leading-[1.04] tracking-[0] md:text-[62px]">
            IB English Tutoring
            <br />
            <span className="text-[#05B4BB]">PYP · MYP · DP</span>
          </h1>
          <p className="mt-7 max-w-[720px] text-[17px] font-semibold leading-[1.22] text-white/78 md:text-[20px]">
            Expert 1:1 online English tutoring for students in the IB PYP, MYP and Diploma Programme. From early years literacy through to IB English A Literature and Language & Literature at SL or HL.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-black text-white">
            {["PYP Ages 3-11", "MYP Ages 11-16", "DP Ages 16-19", "SL & HL", "IA & Oral support"].map((item) => (
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
        <Image src="/assets/images/Image (Replace)-23.png" alt="IB English student studying literature and annotated texts" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function HeroSummaryCard() {
  return (
    <div className="justify-self-center rounded-[34px] border border-[#6e83bd] bg-[#3c5597] px-7 py-8 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[372px]">
      <h2 className="flex items-center gap-3 text-[20px] font-black">
        <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
        IB English with Smavy
      </h2>
      <div className="mt-6 space-y-0">
        {[
          ["Programmes", "PYP · MYP · DP"],
          ["DP Levels", "SL & HL"],
          ["Courses", "English A: Lang & Lit"],
          ["Format", "1:1 online"],
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
        <LeftSectionHeader eyebrow="Course Structure" title="8 Individual Year Courses" highlight="IB Curriculum · IB PYP · MYP · DP" />
        <p className="mt-5 max-w-[860px] text-[14px] font-medium leading-[1.6] text-[#6d7393]">
          Each year has its own focused English course with curriculum alignment, key topics and learning outcomes. Pick your child&apos;s year below or use the programme buttons above.
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
        <LeftSectionHeader eyebrow="IB Tutoring" title="Why Smavy for IB English" />
      </div>
      <div className="mx-auto mt-16 grid max-w-[1240px] gap-9 md:grid-cols-3">
        {differenceCards.map((card) => (
          <article key={card.title} className="min-h-[262px] rounded-[24px] border border-[#dfe6f5] bg-white px-9 py-9">
            <Image src={card.icon} alt="" width={45} height={45} className="h-[45px] w-[45px] rounded-[12px] object-contain" />
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
      <SectionHeader eyebrow="FAQs" title="Common Questions About Online IB English" />
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
          <span className="text-[#F98925]">IB English?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[610px] text-[14px] font-medium leading-[1.6] text-white/76">
          Book your free 1-hour trial session with an IB-experienced English tutor.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="inline-flex h-[54px] items-center gap-2 rounded-[18px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
            Request a Free Trial <ArrowRightIcon />
          </a>
          <a className="inline-flex h-[54px] items-center rounded-[18px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="/courses/ib-curriculum/maths">See IB Maths</a>
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
