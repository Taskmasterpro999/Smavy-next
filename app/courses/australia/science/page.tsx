import Image from "next/image";
import Navbar from "../../../components/Navbar";

const yearButtons = [
  { label: "Year 1", id: "year-1" },
  { label: "Year 2", id: "year-2" },
  { label: "Year 3", id: "year-3" },
  { label: "Year 4", id: "year-4" },
  { label: "Year 5", id: "year-5" },
  { label: "Year 6", id: "year-6" },
  { label: "Year 7", id: "year-7" },
  { label: "Year 8", id: "year-8" },
  { label: "Year 9", id: "year-9" },
  { label: "Y10 Bio", id: "year-10-biology" },
  { label: "Y10 Chem", id: "year-10-chemistry" },
  { label: "Y10 Phys", id: "year-10-physics" },
  { label: "Y11 Bio", id: "year-11-biology" },
  { label: "Y11 Chem", id: "year-11-chemistry" },
  { label: "Y11 Phys", id: "year-11-physics" },
  { label: "Y12 Bio", id: "year-12-biology" },
  { label: "Y12 Chem", id: "year-12-chemistry" },
  { label: "Y12 Phys", id: "year-12-physics" },
];

const courseCards = [
  {
    id: "year-1",
    title: "Year 1 Science",
    stage: "Primary",
    meta: "AU - ACARA Year 1:",
    desc: "Biological sciences, chemical sciences and Earth sciences. Exploring the natural world through observation and simple experiments.",
    topics: ["Living things and their needs", "Materials - properties and uses", "Weather and seasonal changes", "Senses and observation skills", "Simple data recording"],
    outcome: "Students identify living and non-living things, describe basic material properties and make simple observations about the world around them.",
    download: "Download Year 1",
  },
  {
    id: "year-2",
    title: "Year 2 Science",
    stage: "Primary",
    meta: "AU - ACARA Year 2:",
    desc: "All three strands - biological, chemical and Earth sciences. Investigating how things work and how living things change and grow.",
    topics: ["Animal life cycles - growth and change", "Materials - mixing and separating", "Earth - day and night, sun and moon", "Simple investigations and fair testing", "Sorting and classifying living things"],
    outcome: "Students describe animal life cycles, conduct simple fair tests and identify patterns in everyday science phenomena.",
    download: "Download Year 2",
  },
  {
    id: "year-3",
    title: "Year 3 Science",
    stage: "Primary",
    meta: "AU - ACARA Year 3:",
    desc: "Biological, chemical, physical and Earth sciences introduced. Building scientific inquiry skills alongside core concepts in life, matter and Earth science.",
    topics: ["Adaptations of living things", "Physical and chemical changes in materials", "Earth's surface - rocks, soil and water", "Designing simple experiments", "Recording and communicating data"],
    outcome: "Students explain how adaptations help living things survive, distinguish physical from chemical change and record findings systematically.",
    download: "Download Year 3",
  },
  {
    id: "year-4",
    title: "Year 4 Science",
    stage: "Primary",
    meta: "AU - ACARA Year 4:",
    desc: "Ecosystems, physical sciences and Earth sciences. Deepening understanding of living systems, energy and Earth processes.",
    topics: ["Food chains and ecosystems", "Heat and energy transfer", "Geological changes - erosion and weathering", "Variables in scientific investigations", "Graphs and data interpretation"],
    outcome: "Students explain food chains, describe heat transfer and conduct multi-variable investigations with growing independence.",
    download: "Download Year 4",
  },
  {
    id: "year-5",
    title: "Year 5 Science",
    stage: "Primary",
    meta: "AU - ACARA Year 5:",
    desc: "Biological, physical and Earth and space sciences. Developing scientific reasoning across living, physical and Earth systems.",
    topics: ["Classification of living things - kingdoms", "Properties of materials and mixtures", "Forces - gravity, friction and magnetism", "Earth in space - solar system", "Planning and conducting investigations"],
    outcome: "Students classify organisms, explain forces in everyday contexts and design structured investigations with testable predictions.",
    download: "Download Year 5",
  },
  {
    id: "year-6",
    title: "Year 6 Science",
    stage: "Primary",
    meta: "AU - ACARA Year 6:",
    desc: "All science strands. Bridge to secondary science. Upper primary science - preparation for secondary analytical skills.",
    topics: ["Cells - basic structure and function", "Chemical reactions - observable changes", "Energy forms and transformations", "Biodiversity and conservation", "Scientific reports and evidence-based conclusions"],
    outcome: "Students describe basic cell structure, explain chemical reactions and write structured scientific reports with evidence-based conclusions.",
    download: "Download Year 6",
  },
  {
    id: "year-7",
    title: "Year 7 Science",
    stage: "Middle",
    meta: "AU - NSW/VIC/QLD Stage 4:",
    desc: "Integrated science. NAPLAN Year 7 science literacy. Introduction to secondary science - deeper exploration across all strands.",
    topics: ["Cells and body systems", "Particle model of matter", "Forces and motion", "Earth's structure and geological time", "Scientific inquiry - hypothesis to conclusion"],
    outcome: "Students explain body systems, apply the particle model and conduct structured scientific inquiries with hypothesis, method and conclusion.",
    download: "Download Year 7",
  },
  {
    id: "year-8",
    title: "Year 8 Science",
    stage: "Middle",
    meta: "AU - NSW/VIC/QLD Stage 4:",
    desc: "Building analytical and quantitative science skills. Consolidating secondary science foundations - chemical, physical and biological systems.",
    topics: ["Chemical reactions - equations and types", "Waves - light and sound", "Genetics - inheritance and DNA introduction", "Universe and space exploration", "Variables, controls and reliability in experiments"],
    outcome: "Students balance simple chemical equations, explain wave properties and discuss genetic inheritance with growing scientific literacy.",
    download: "Download Grade 8",
  },
  {
    id: "year-9",
    title: "Year 9 Science",
    stage: "Middle",
    meta: "AU - NSW Stage 5 / VIC Year 9:",
    desc: "NAPLAN Year 9. Bridge to VCE/HSC/QCE sciences. Pre-senior science - bridging to Biology, Chemistry and Physics as separate disciplines.",
    topics: ["Evolution and natural selection", "Atomic structure and the periodic table", "Motion - speed, velocity and acceleration", "Climate science and Earth systems", "NAPLAN Year 9 science preparation"],
    outcome: "Students explain evolution, navigate the periodic table and apply kinematic equations to motion - ready for senior science pathways.",
    download: "Download Grade 9",
  },
  {
    id: "year-10-biology",
    title: "Year 10 Biology",
    stage: "Senior",
    meta: "AU - Year 10 Biology:",
    desc: "Pre-VCE/HSC/QCE foundation. ACARA Year 10 biological sciences. Foundation senior Biology - cells, genetics and introduction to biological systems.",
    topics: ["Cell biology - organelles, cell division", "DNA and protein synthesis introduction", "Genetics - Mendelian inheritance, Punnett squares", "Ecosystems - energy flow and matter cycles", "Scientific investigation skills for senior Biology"],
    outcome: "Students explain cell division, apply Punnett squares to predict inheritance and describe energy flow in ecosystems.",
    download: "Download Y10 Bio",
  },
  {
    id: "year-10-chemistry",
    title: "Year 10 Chemistry",
    stage: "Senior",
    meta: "AU - Year 10 Chemistry:",
    desc: "Pre-VCE/HSC/QCE foundation. ACARA Year 10 chemical sciences. Foundation senior Chemistry - atomic structure, bonding and chemical reactions.",
    topics: ["Atomic structure - Bohr model and electron configuration", "Chemical bonding - ionic, covalent, metallic", "Chemical reactions - types and balancing equations", "Mole concept - introduction", "Acids, bases and pH"],
    outcome: "Students explain atomic structure, predict bonding type and balance chemical equations accurately.",
    download: "Download Y10 Chem",
  },
  {
    id: "year-10-physics",
    title: "Year 10 Physics",
    stage: "Senior",
    meta: "AU - Year 10 Physics:",
    desc: "Pre-VCE/HSC/QCE foundation. ACARA Year 10 physical sciences. Foundation senior Physics - mechanics, electricity and waves.",
    topics: ["Motion - speed, velocity and acceleration", "Forces - Newton's Laws", "Electricity - circuits, Ohm's Law", "Waves - properties of light and sound", "Energy - transformations and conservation"],
    outcome: "Students apply Newton's Laws, calculate electrical quantities and describe wave properties accurately.",
    download: "Download Y10 Phys",
  },
  {
    id: "year-11-biology",
    title: "Year 11 Biology",
    stage: "Senior",
    meta: "AU - VCE Unit 1 & 2 / HSC Biology:",
    desc: "SAC and core concept preparation. VCE/HSC/QCE Biology Year 11 - cells, genetics and biological systems.",
    topics: ["Cell structure, homeostasis and membranes", "Biochemistry - enzymes", "Genetics - inheritance and disease", "Scientific investigation skills for senior Biology", "SAC and topic-test preparation"],
    outcome: "Students consolidate biological systems, explain cellular processes and prepare structured SAC responses.",
    download: "Download Y11 Bio",
  },
  {
    id: "year-11-chemistry",
    title: "Year 11 Chemistry",
    stage: "Senior",
    meta: "AU - VCE Unit 1 & 2 / HSC Preliminary Chemistry:",
    desc: "SAC and core concept preparation. VCE/HSC/QCE Chemistry Year 11 - from atomic theory to chemical reactions and stoichiometry.",
    topics: ["Atomic theory and the periodic table", "Chemical bonding and structure", "Quantitative chemistry - moles and stoichiometry", "Acids and bases - equilibrium introduction", "SAC preparation - multiple choice and short answer"],
    outcome: "Students perform mole calculations, explain periodic trends and prepare for formal SAC assessment.",
    download: "Download Y11 Chem",
  },
  {
    id: "year-11-physics",
    title: "Year 11 Physics",
    stage: "Senior",
    meta: "AU - VCE Unit 1 & 2 / HSC Preliminary Physics:",
    desc: "SAC and core concept preparation. VCE/HSC/QCE Physics Year 11 - motion, energy, waves and electricity.",
    topics: ["Motion - kinematics and dynamics", "Forces - circular motion and gravity", "Waves - electromagnetic spectrum", "Electricity - DC circuits and resistance", "SAC preparation - structured questions"],
    outcome: "Students solve kinematic equations, analyse circular motion and build expertise in DC circuit calculations.",
    download: "Download Y11 Phys",
  },
  {
    id: "year-12-biology",
    title: "Year 12 Biology",
    stage: "Senior",
    meta: "AU - VCE Unit 3 & 4 / HSC Biology:",
    desc: "ATAR preparation. Past papers and SAC strategy. VCE/HSC/QCE Biology Year 12 - evolution, heredity and biological change.",
    topics: ["DNA replication, transcription and translation", "Heredity - chromosomal abnormalities and biotechnology", "Evolution - natural selection, speciation", "Immune system - adaptive and innate immunity", "Past exam papers and ATAR strategy"],
    outcome: "Students master molecular biology, explain biotechnology applications and write exam-quality extended responses.",
    download: "Download Y12 Bio",
  },
  {
    id: "year-12-chemistry",
    title: "Year 12 Chemistry",
    stage: "Senior",
    meta: "AU - VCE Unit 3 & 4 / HSC Chemistry:",
    desc: "Past papers and ATAR preparation. VCE/HSC/QCE Chemistry Year 12 - equilibrium, organic chemistry and electrochemistry.",
    topics: ["Equilibrium - Le Chatelier's principle", "Redox and electrochemistry - galvanic and electrolytic", "Organic chemistry - functional groups, polymers", "Analytical techniques - spectroscopy", "Past exam papers and ATAR maximisation"],
    outcome: "Students apply Le Chatelier's principle, explain electrochemical cells and analyse organic reactions in exam-quality extended responses.",
    download: "Download Y12 Chem",
  },
  {
    id: "year-12-physics",
    title: "Year 12 Physics",
    stage: "Senior",
    meta: "AU - VCE Unit 3 & 4 / HSC Physics:",
    desc: "Past papers and ATAR preparation. VCE/HSC/QCE Physics Year 12 - fields, photonics, relativity and quantum mechanics.",
    topics: ["Fields - gravitational, electric and magnetic", "Electromagnetic induction and AC circuits", "Special relativity - time dilation and length contraction", "Quantum mechanics - photoelectric effect", "Past exam papers and ATAR strategy"],
    outcome: "Students apply field theory, explain electromagnetic induction and discuss special relativity and quantum phenomena in extended responses.",
    download: "Download Y12 Phys",
  },
];

const differenceCards = [
  {
    icon: "concept",
    title: "Concept-First Teaching",
    text: "Our Science tutors focus on deep conceptual understanding rather than surface memorisation. Students who truly understand the 'why' perform consistently across all question types.",
  },
  {
    icon: "data",
    title: "Data & Practical Skills",
    text: "Beyond theory - tutors cover data analysis, experimental design and practical skills assessment. Critical for internal assessments and senior science exams.",
  },
  {
    icon: "exam",
    title: "Exam-Specific Preparation",
    text: "Whether it's VCE, HSC, GCSE or AP, our tutors know the marking criteria inside out. Students learn exactly how to answer structured and extended response questions.",
  },
];

const testimonials = [
  {
    name: "Smita Joshi",
    role: "Parent - Australia",
    flag: "flag-australia.svg",
    avatar: "/assets/images/nav/nav/image 3.png",
    text: "Excellent experience with Smavy. They helped identify the right tutors for my son in English, Maths, and Science, perfectly matching his learning style. The learning and support team is very responsive and always just a message away.",
  },
  {
    name: "Shatakshi Shivhare",
    role: "Student - India",
    flag: "flag-india.svg",
    text: "I rate both my Science and Maths teacher a 5-star rating as their classes are genuinely entertaining and enjoyable, and they make it easy to learn challenging science and Maths topics.",
  },
  {
    name: "meghavi shah",
    role: "Student - Australia",
    flag: "flag-australia.svg",
    text: "Nice teaching, good amount of resources, really recommend Ganta Dhameswari teacher for science. She is really nice and knows a lot about the subject, and my results really improved because of her.",
  },
];

const faqs = [
  ["When does Science split into Biology, Chemistry and Physics?", "In Australia, the split typically happens at Year 10 or 11 depending on the state and school. In the UK it occurs at GCSE (Year 10). In the US, Biology, Chemistry and Physics are taught as separate courses from Grade 9 onwards."],
  ["Can you help with practical and experimental write-ups?", "Yes - our Science tutors regularly assist with experimental design, data analysis, method writing and conclusion sections. These are often worth significant marks in internal assessment."],
  ["Do you cover all three sciences or can I book just one?", "You can book tutoring for any single science subject or all three. Each session is with a specialist tutor for that subject. You are never locked into a bundle."],
  ["What is the free curriculum download?", "Each year level card includes a downloadable PDF curriculum guide covering topics, skills and expected outcomes. Free, no sign-up required. Senior subject guides are separate documents."],
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

export default function ScienceAustraliaPage() {
  return (
    <main className="min-h-screen bg-white text-[#102877]">
      <Navbar />
      <div className="mx-auto max-w-[1440px] overflow-hidden border-x border-[#d8d8d8]">
        <Hero />
        <YearNav />
        <CourseStructure />
        <DifferenceSection />
        <ReviewsSection />
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
        Home <span className="mx-2 text-[#05b4bb]">/</span> Courses <span className="mx-2 text-[#05b4bb]">/</span> Academic Tutoring <span className="mx-2 text-[#05b4bb]">/</span> Science - Australia
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#46c7db]/70 bg-[#0a235f] px-4 py-2 text-[11px] font-bold text-[#48d8e8]">
            <Image
              src="/assets/images/flags/flag-australia.svg"
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px] rounded-full object-cover"
            />
            Academic Tutoring - Australia
          </span>
          <h1 className="mt-6 max-w-[850px] text-[40px] font-black leading-[1.04] tracking-[0] md:text-[64px]">
            Online <span className="text-[#05B4BB]">Science Tutoring</span>
            <br />
            Year 1-12
          </h1>
          <p className="mt-6 max-w-[760px] text-[15px] font-semibold leading-[1.6] text-white/78 md:text-[17px]">
            Expert 1:1 Science tutors for Australia students - General Science in junior years through to Biology, Chemistry and Physics as separate subjects in senior years.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-bold text-white/72">
            {["Biology", "Chemistry", "Physics", "General Science", "Exam Preparation"].map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-4 py-2">{item}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-5">
            <a className="inline-flex h-[56px] items-center rounded-[19px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">Book Free Trial {"->"}</a>
            <a className="inline-flex h-[56px] items-center rounded-[19px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="#years">View Year Levels</a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3 text-[12px] font-bold text-white/86">
            <span>Also available for:</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Image
                src="/assets/images/flags/flag-uk.svg"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] rounded-full object-cover"
              />
              United Kingdom
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Image
                src="/assets/images/flags/flag-us.svg"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] rounded-full object-cover"
              />
              United States
            </span>
          </div>
        </div>
        <div className="justify-self-center rounded-[28px] bg-white/14 p-7 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[350px]">
          <h2 className="flex items-center gap-3 text-[17px] font-black">
            <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
            Science - Australia
          </h2>
          <div className="mt-6 space-y-4">
            {[
              ["Year levels", "Year 1-12"],
              ["Junior years", "General Science"],
              ["Senior years", "Bio / Chem / Phys"],
              ["Free trial", "1 Per Subject"],
              ["Tutor rating", "4.8"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-white/12 pb-4 text-[12px] font-bold last:border-0 last:pb-0">
                <span className="text-white/50">{label}</span>
                <span className={label === "Tutor rating" ? "flex items-center gap-1 text-[#f6ca00]" : label === "Free trial" ? "text-[#F98925]" : "text-white"}>
                  {value}
                  {label === "Tutor rating" && <span className="text-[13px] leading-none">★</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 overflow-hidden rounded-[22px]">
        <Image src="/assets/images/Image (Replace)-10.png" alt="Student studying science with a microscope" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
    </section>
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
        <LeftSectionHeader eyebrow="Course Structure" title="18 Individual Year Courses" highlight="Australia - ACARA" />
        <p className="mt-5 max-w-[860px] text-[14px] font-medium leading-[1.6] text-[#6d7393]">
          Each year has its own focused Science course with curriculum alignment, key topics and learning outcomes. Pick your child&apos;s year below or use the year buttons above.
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
  const isSenior = card.stage === "Senior";
  const isMiddle = card.stage === "Middle";

  return (
    <article id={card.id} className="scroll-mt-28 rounded-[14px] border border-transparent bg-white p-6 shadow-[0_12px_30px_rgba(18,35,99,0.06)] transition duration-300 target:-translate-y-1 target:border-[#F98925] target:ring-4 target:ring-[#F98925]/20 target:shadow-[0_18px_45px_rgba(249,137,37,0.18)]">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[18px] font-black text-[#102877]">{card.title} <span className="text-[#05B4BB]">Science</span></h3>
        <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase ${isSenior ? "bg-[#fff0eb] text-[#F98925]" : isMiddle ? "bg-[#fff7df] text-[#e6a400]" : "bg-[#eafff1] text-[#20b455]"}`}>{card.stage}</span>
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
        <a className="flex-1 rounded-[10px] border border-[#F98925] px-3 py-3 text-center text-[11px] font-black text-[#F98925]" href="#trial">{card.download}</a>
        <a className="flex-1 rounded-[10px] bg-[#F98925] px-3 py-3 text-center text-[11px] font-black text-white" href="#trial">Book Free Trial</a>
      </div>
    </article>
  );
}

function DifferenceSection() {
  return (
    <section className="bg-[#f5f7ff] px-6 py-24">
      <div className="mx-auto max-w-[1240px]">
        <LeftSectionHeader eyebrow="Why Smavy Science" title="What Makes Our Science Tutoring Different" />
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

function ScienceDifferenceIcon({ type }: { type: string }) {
  const base = "h-[49px] w-[49px]";

  if (type === "concept") {
    return (
      <span className="flex h-[49px] w-[49px] items-center justify-center rounded-[14px] bg-[#ff7f20] text-white">
        <svg className={base} viewBox="0 0 49 49" fill="none" aria-hidden="true">
          <path d="M18 13h13M18 36h13" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
          <path d="M18 15c0 5 5 6 7 9-2 3-7 4-7 9M31 15c0 5-5 6-7 9 2 3 7 4 7 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M20 20h9M20 29h9" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
        </svg>
      </span>
    );
  }

  if (type === "data") {
    return (
      <span className="flex h-[49px] w-[49px] items-center justify-center rounded-[14px] bg-[#20b455] text-white">
        <svg className={base} viewBox="0 0 49 49" fill="none" aria-hidden="true">
          <path d="M15 14v21h21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M20 29l5-5 4 4 6-8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M20 34h4M28 34h4" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
        </svg>
      </span>
    );
  }

  return (
    <span className="flex h-[49px] w-[49px] items-center justify-center rounded-[14px] bg-[#08b7c2] text-white">
      <svg className={base} viewBox="0 0 49 49" fill="none" aria-hidden="true">
        <circle cx="24.5" cy="24.5" r="13" stroke="currentColor" strokeWidth="3" />
        <circle cx="24.5" cy="24.5" r="6" stroke="currentColor" strokeWidth="3" />
        <circle cx="24.5" cy="24.5" r="1.8" fill="currentColor" />
      </svg>
    </span>
  );
}

function ReviewsSection() {
  return (
    <section className="bg-white px-6 py-24">
      <CenteredPillHeader eyebrow="Parent Reviews" title="What Parents Say About Our Science Tutors" />
      <div className="mx-auto mt-16 grid max-w-[1360px] gap-8 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="min-h-[360px] rounded-[24px] border border-[#dfe6f5] bg-white px-9 py-9">
            <div className="flex gap-2 text-[24px] leading-none text-[#f6c000]" aria-label="5 star rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>★</span>
              ))}
            </div>
            <p className="mt-7 text-[17px] font-bold leading-[1.45] text-[#57535e]">{item.text}</p>
            <div className="mt-8 flex items-center gap-5">
              {item.avatar ? (
                <Image
                  src={item.avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
              ) : (
                <span className={`flex h-14 w-14 items-center justify-center rounded-full ${item.flag === "flag-india.svg" ? "bg-[#20b455]" : "bg-[#08b7c2]"} text-[18px] font-black text-white`}>
                  {item.name[0]}
                </span>
              )}
              <span>
                <span className="block text-[17px] font-black text-[#57535e]">{item.name}</span>
                <span className="mt-1 flex items-center gap-1.5 text-[13px] font-semibold text-[#9aa0b8]">
                  {item.role}
                  <Image
                    src={`/assets/images/flags/${item.flag}`}
                    alt=""
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5 rounded-full object-cover"
                  />
                </span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#f5f7ff] px-6 py-22">
      <SectionHeader eyebrow="FAQs" title="Common Questions About Online Science Tutoring" />
      <div className="mx-auto mt-11 max-w-[820px] space-y-4">
        {faqs.map(([question, answer]) => (
          <details key={question} className="group rounded-[14px] bg-white px-6 py-5 shadow-[0_10px_26px_rgba(18,35,99,0.04)]" open={question === faqs[0][0]}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[14px] font-black text-[#102877]">
              <span>{question}</span>
              <span className="text-[16px] text-[#6d7393] group-open:rotate-180">⌄</span>
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
          Start Science Tutoring
          <br />
          <span className="text-[#F98925]">Today. Free Trial Per Subject.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[610px] text-[14px] font-medium leading-[1.6] text-white/76">
          Book a free 1-hour trial session with a matched Science tutor for Australia. No payment details required.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="inline-flex h-[54px] items-center rounded-[18px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">Request a Free Trial {"->"}</a>
          <a className="inline-flex h-[54px] items-center rounded-[18px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="#years">Download Curriculum Guide</a>
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
                        <Image src={`/assets/images/flags/${link[1]}`} alt="" width={16} height={16} className="h-4 w-4 rounded-full object-contain" />
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

function SectionHeader({ eyebrow, title, highlight }: { eyebrow: string; title: string; highlight?: string }) {
  return (
    <div className="mx-auto max-w-[840px] text-center">
      <span className="inline-flex rounded-full bg-[#fff1ef] px-4 py-2 text-[11px] font-black text-[#F98925]">{eyebrow}</span>
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

function CenteredPillHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-[840px] text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-[#fff1ef] px-4 py-2 text-[11px] font-black text-[#ff5f52]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f52]" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-[32px] font-black leading-[1.16] tracking-[0] text-[#102877] md:text-[48px]">
        {title}
      </h2>
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
