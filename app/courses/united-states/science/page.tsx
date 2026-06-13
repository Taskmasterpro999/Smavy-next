import Image from "next/image";
import Navbar from "../../../components/Navbar";

const pdfHref = "/assets/images/Science%20%E2%80%94%20United%20States.pdf";

const yearButtons = [
  { label: "Kinder", id: "kindergarten" },
  { label: "G1", id: "grade-1" },
  { label: "G2", id: "grade-2" },
  { label: "G3", id: "grade-3" },
  { label: "G4", id: "grade-4" },
  { label: "G5", id: "grade-5" },
  { label: "G6", id: "grade-6" },
  { label: "G7", id: "grade-7" },
  { label: "G8", id: "grade-8" },
  { label: "AP Bio G11", id: "ap-biology-grade-11" },
  { label: "AP Chem G11", id: "ap-chemistry-grade-11" },
  { label: "AP Phys G11", id: "ap-physics-grade-11" },
  { label: "AP Bio G12", id: "ap-biology-grade-12" },
  { label: "AP Chem G12", id: "ap-chemistry-grade-12" },
  { label: "AP Phys G12", id: "ap-physics-grade-12" },
];

const courseCards = [
  {
    id: "kindergarten",
    title: "Kindergarten Science",
    stage: "Elementary",
    meta: "US - NGSS Kindergarten:",
    desc: "Physical science, life science, Earth science and engineering. Building curiosity about the natural world through observation and inquiry.",
    topics: ["Pushes, pulls and forces", "Plants and animals - basic needs", "Weather and seasonal patterns", "Earth materials - soil, rocks, water", "Engineering - designing simple structures"],
    outcome: "Students describe how forces affect objects, explain basic needs of living things and make weather observations.",
    download: "Download Kinder",
  },
  {
    id: "grade-1",
    title: "Grade 1 Science",
    stage: "Elementary",
    meta: "US - NGSS Grade 1:",
    desc: "Sound, light, plants, animals and Earth science. Exploring sound, light, plants and Earth processes.",
    topics: ["Sound - vibrations and communication", "Light - sun, seeing and shadows", "Plants and animals - parents and offspring", "Seasonal weather patterns", "Engineering - solving problems with materials"],
    outcome: "Students describe how light and sound travel, explain plant reproduction and identify weather patterns by season.",
    download: "Download G1",
  },
  {
    id: "grade-2",
    title: "Grade 2 Science",
    stage: "Elementary",
    meta: "US - NGSS Grade 2:",
    desc: "Materials, ecosystems, Earth's surface and engineering. Investigating materials, ecosystems and the Earth's changing surface.",
    topics: ["Properties of materials", "Plant and animal interdependence", "Wind and water erosion", "Mapping Earth's features", "Engineering - material properties in design"],
    outcome: "Students compare material properties, describe ecosystem interdependence and explain how wind and water shape Earth's surface.",
    download: "Download G2",
  },
  {
    id: "grade-3",
    title: "Grade 3 Science",
    stage: "Elementary",
    meta: "US - NGSS Grade 3:",
    desc: "Traits, forces, weather and climate - building scientific reasoning.",
    topics: ["Inheritance of traits", "Forces and interactions - magnets", "Weather and climate patterns", "Life cycles of diverse organisms", "Engineering - applying science to design"],
    outcome: "Students explain inherited traits, describe magnetic forces and distinguish weather from climate.",
    download: "Download G3",
  },
  {
    id: "grade-4",
    title: "Grade 4 Science",
    stage: "Elementary",
    meta: "US - NGSS Grade 4:",
    desc: "Energy, waves, ecosystems and Earth's internal processes.",
    topics: ["Energy - transfer and conversion", "Waves - light and sound", "Ecosystems - energy flow", "Earth's interior - rock cycle", "Engineering - energy transfer applications"],
    outcome: "Students trace energy transfer, describe wave properties and explain rock cycle processes.",
    download: "Download G4",
  },
  {
    id: "grade-5",
    title: "Grade 5 Science",
    stage: "Elementary",
    meta: "US - NGSS Grade 5:",
    desc: "Matter, ecosystems and Earth's systems - deeper quantitative science.",
    topics: ["Properties of matter and chemical reactions", "Ecosystems - matter and energy cycles", "Earth's systems - water, atmosphere, geosphere", "Stars and solar system", "Engineering - solving multi-step problems"],
    outcome: "Students describe matter and chemical reactions, explain matter cycles in ecosystems and describe Earth's major systems.",
    download: "Download G5",
  },
  {
    id: "grade-6",
    title: "Grade 6 Science",
    stage: "Middle",
    meta: "US - NGSS/State Standards Grade 6:",
    desc: "Middle school science entry - structure of matter, ecosystems and Earth science.",
    topics: ["Atomic structure - elements, atoms, molecules", "Ecosystems - biomes and biodiversity", "Earth's history - rock record and fossils", "Weather and climate - atmospheric science", "Engineering - applying middle school concepts"],
    outcome: "Students describe atomic structure, classify biomes and explain how rocks record Earth's history.",
    download: "Download G6",
  },
  {
    id: "grade-7",
    title: "Grade 7 Science",
    stage: "Middle",
    meta: "US - NGSS Grade 7:",
    desc: "Life science focus - cells, genetics, evolution and body systems.",
    topics: ["Cell biology - organelles and function", "Genetics - DNA, genes, heredity", "Natural selection and evolution", "Human body systems - interactions", "Ecology - populations and communities"],
    outcome: "Students explain cell biology and genetics, describe natural selection and analyse interactions within ecosystems.",
    download: "Download G7",
  },
  {
    id: "grade-8",
    title: "Grade 8 Science",
    stage: "Middle",
    meta: "US - NGSS Grade 8:",
    desc: "Physical science focus - motion, forces, energy and chemistry foundations.",
    topics: ["Motion - speed, velocity, acceleration", "Newton's Laws of Motion", "Chemical reactions - types and equations", "Waves - EM spectrum", "Atomic structure and the periodic table"],
    outcome: "Students apply Newton's Laws, balance chemical equations and describe wave types across the EM spectrum.",
    download: "Download G8",
  },
  {
    id: "ap-biology-grade-11",
    title: "AP Biology Grade 11 Science",
    stage: "High School",
    meta: "US - AP Biology (Grade 11):",
    desc: "College-level biology. AP Biology Year 1 - evolution, cellular processes and genetics.",
    topics: ["Evolution - natural selection, Hardy-Weinberg", "Cell structure and cellular respiration", "Photosynthesis - light and dark reactions", "Genetics - Mendelian and molecular", "AP Biology exam format and free-response technique"],
    outcome: "Students apply Hardy-Weinberg calculations, explain ATP synthesis and answer AP-quality free-response questions.",
    download: "Download Bio G11",
  },
  {
    id: "ap-chemistry-grade-11",
    title: "AP Chemistry Grade 11 Science",
    stage: "High School",
    meta: "US - AP Chemistry (Grade 11):",
    desc: "College-level chemistry. AP Chemistry Year 1 - atomic structure, bonding, thermodynamics and equilibrium.",
    topics: ["Atomic structure - quantum model and periodicity", "Chemical bonding - VSEPR and intermolecular forces", "Thermodynamics - enthalpy, entropy and Gibbs free energy", "Chemical equilibrium - ICE tables and Kc", "AP free-response and multiple choice technique"],
    outcome: "Students apply VSEPR theory, perform Gibbs free energy calculations and answer AP-quality free-response questions.",
    download: "Download Chem G11",
  },
  {
    id: "ap-physics-grade-11",
    title: "AP Physics Grade 11 Science",
    stage: "High School",
    meta: "US - AP Physics 1 (Grade 11):",
    desc: "Algebra-based AP Physics 1 - mechanics, energy, waves and simple circuits.",
    topics: ["Kinematics - 1D and 2D motion", "Newton's Laws - forces, friction, tension", "Energy - work, power, conservation", "Waves - mechanical waves and sound", "Simple DC circuits - Ohm's Law and Kirchhoff's"],
    outcome: "Students solve multi-step mechanics problems, apply energy conservation and answer AP-quality free-response questions.",
    download: "Download Phys G11",
  },
  {
    id: "ap-biology-grade-12",
    title: "AP Biology Grade 12 Science",
    stage: "High School",
    meta: "US - AP Biology (Grade 12):",
    desc: "AP Biology Year 2 - gene expression, ecology and systems biology.",
    topics: ["Gene expression - transcription, translation, regulation", "Ecology - population and community dynamics", "Animal behaviour and communication", "Systems biology - feedback and homeostasis", "AP exam past papers and scoring strategy"],
    outcome: "Students explain gene regulation, analyse ecological data and produce AP-quality essays on all units.",
    download: "Download Bio G12",
  },
  {
    id: "ap-chemistry-grade-12",
    title: "AP Chemistry Grade 12 Science",
    stage: "High School",
    meta: "US - AP Chemistry (Grade 12):",
    desc: "AP Chemistry Year 2 - kinetics, electrochemistry, acids/bases and analytical techniques.",
    topics: ["Kinetics - rate laws and mechanisms", "Acids and bases - buffers and titration", "Electrochemistry - galvanic and electrolytic cells", "Spectroscopy and analytical techniques", "AP past papers and scoring strategy"],
    outcome: "Students explain reaction mechanisms, perform buffer calculations and produce AP-quality essays on all units.",
    download: "Download Chem G12",
  },
  {
    id: "ap-physics-grade-12",
    title: "AP Physics Grade 12 Science",
    stage: "High School",
    meta: "US - AP Physics 2 / AP Physics C (Grade 12):",
    desc: "AP Physics 2 or C - fluids, thermodynamics, E&M and modern physics.",
    topics: ["Fluids - pressure, buoyancy, flow", "Thermodynamics - heat engines and entropy", "Electrostatics and electric fields", "Magnetism and electromagnetic induction", "Modern physics - quantum and nuclear"],
    outcome: "Students explain thermodynamic cycles, analyse electromagnetic fields and discuss modern physics in AP-quality responses.",
    download: "Download Phys G12",
  },
];

const differenceCards = [
  {
    icon: "concept",
    title: "Concept-First Teaching",
    text: "Our Science tutors focus on deep conceptual understanding rather than surface memorisation. Students who truly understand the why perform consistently across all question types.",
  },
  {
    icon: "data",
    title: "Data & Practical Skills",
    text: "Beyond theory - tutors cover data analysis, experimental design and practical skills assessment. Critical for internal assessments and senior science exams.",
  },
  {
    icon: "exam",
    title: "Exam-Specific Preparation",
    text: "Whether it is VCE, HSC, GCSE or AP, our tutors know the marking criteria inside out. Students learn exactly how to answer structured and extended response questions.",
  },
];

const testimonials = [
  {
    name: "leonne sequeira",
    role: "Parent - Australia",
    flag: "flag-australia.svg",
    avatar: "/assets/images/nav/nav/image 14.png",
    text: "Smavy has been tutoring my year 13 and also my year 7 children. Teaching by RajaSoundari for science and Neethu for Maths are truly outstanding. The support staff are very helpful and always available.",
  },
  {
    name: "Rajeev Kumar",
    role: "Parent - UK",
    flag: "flag-uk.svg",
    avatar: "/assets/images/nav/nav/image 12.png",
    text: "Smavy is a fantastic academy that provides excellent Year 10 GCSE support for my child in English and Triple Science. The teachers are highly supportive, knowledgeable and committed to student success.",
  },
  {
    name: "Putlur Durga Jyotsna",
    role: "Parent - UK",
    flag: "flag-uk.svg",
    avatar: "/assets/images/nav/nav/image 13.png",
    text: "My daughter started her classes for math and science this week and so far her experience is good. The process of registration was smooth with Alvira.",
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

export default function ScienceUnitedStatesPage() {
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
        Home <span className="mx-2 text-[#05b4bb]">/</span> Courses <span className="mx-2 text-[#05b4bb]">/</span> Academic Tutoring <span className="mx-2 text-[#05b4bb]">/</span> Science - United States
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#46c7db]/70 bg-[#0a235f] px-4 py-2 text-[11px] font-bold text-[#48d8e8]">
            <Image src="/assets/images/flags/flag-us.svg" alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
            Academic Tutoring - United States
          </span>
          <h1 className="mt-6 max-w-[850px] text-[40px] font-black leading-[1.04] tracking-[0] md:text-[64px]">
            Online <span className="text-[#05B4BB]">Science Tutoring</span>
            <br />
            Year K-12
          </h1>
          <p className="mt-6 max-w-[760px] text-[15px] font-semibold leading-[1.6] text-white/78 md:text-[17px]">
            Expert 1:1 Science tutors for United States students - General Science in junior years through to Biology, Chemistry and Physics as separate subjects in senior years.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-bold text-white/72">
            {["Biology", "Chemistry", "Physics", "General Science", "Exam Preparation"].map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-4 py-2">{item}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-5">
            <a className="inline-flex h-[56px] items-center gap-3 rounded-[19px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
              Book Free Trial <ArrowRightIcon />
            </a>
            <a className="inline-flex h-[56px] items-center rounded-[19px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="#years">View Year Levels</a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3 text-[12px] font-bold text-white/86">
            <span>Also available for:</span>
            {[
              ["Australia", "flag-australia.svg"],
              ["United Kingdom", "flag-uk.svg"],
            ].map(([country, flag]) => (
              <span key={country} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Image src={`/assets/images/flags/${flag}`} alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
                {country}
              </span>
            ))}
          </div>
        </div>
        <HeroSummaryCard />
      </div>
      <div className="mt-12 overflow-hidden rounded-[22px]">
        <Image src="/assets/images/Image (Replace)-21.png" alt="Student studying science with online tutoring and lab equipment" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function HeroSummaryCard() {
  return (
    <div className="justify-self-center rounded-[28px] border border-[#6e83bd] bg-[#3c5597] p-7 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[350px]">
      <h2 className="flex items-center gap-3 text-[17px] font-black">
        <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
        Science - United States
      </h2>
      <div className="mt-6 space-y-4">
        {[["Year levels", "Grade K-12"], ["Junior years", "General Science"], ["Senior years", "Bio / Chem / Phys"], ["Free trial", "1 Per Subject"], ["Tutor rating", "4.8"]].map(([label, value]) => (
          <div key={label} className="flex justify-between border-b border-[#6f84bd]/70 pb-4 text-[12px] font-bold last:border-0 last:pb-0">
            <span className="text-white/55">{label}</span>
            <span className={label === "Tutor rating" ? "flex items-center gap-1.5 text-white" : label === "Free trial" ? "text-[#F98925]" : label === "Year levels" ? "text-[#05D8DE]" : "text-white"}>
              {value}
              {label === "Tutor rating" && <StarSmallIcon />}
            </span>
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
        <LeftSectionHeader eyebrow="Course Structure" title="15 Individual Year Courses" highlight="United States - NGSS" />
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
  const isHigh = card.stage === "High School";
  const isMiddle = card.stage === "Middle";

  return (
    <article id={card.id} className="scroll-mt-28 rounded-[14px] border border-transparent bg-white p-6 shadow-[0_12px_30px_rgba(18,35,99,0.06)] transition duration-300 target:-translate-y-1 target:border-[#F98925] target:ring-4 target:ring-[#F98925]/20 target:shadow-[0_18px_45px_rgba(249,137,37,0.18)]">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[18px] font-black text-[#102877]">{card.title}</h3>
        <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase ${isHigh ? "bg-[#fff0eb] text-[#F98925]" : isMiddle ? "bg-[#fff7df] text-[#e6a400]" : "bg-[#eafff1] text-[#20b455]"}`}>{card.stage}</span>
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

function ReviewsSection() {
  return (
    <section className="bg-white px-6 py-24">
      <CenteredPillHeader eyebrow="Parent Reviews" title="What Parents Say About Our Science Tutors" />
      <div className="mx-auto mt-16 grid max-w-[1360px] gap-8 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="min-h-[360px] rounded-[24px] border border-[#dfe6f5] bg-white px-9 py-9">
            <div className="flex gap-2 text-[#f6c000]" aria-label="5 star rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarReviewIcon key={star} />
              ))}
            </div>
            <p className="mt-7 text-[17px] font-bold leading-[1.45] text-[#57535e]">{item.text}</p>
            <div className="mt-8 flex items-center gap-5">
              {item.avatar ? (
                <Image src={item.avatar} alt="" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
              ) : (
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#08b7c2] text-[18px] font-black text-white">
                  {item.name[0].toUpperCase()}
                </span>
              )}
              <span>
                <span className="block text-[17px] font-black text-[#57535e]">{item.name}</span>
                <span className="mt-1 flex items-center gap-1.5 text-[13px] font-semibold text-[#9aa0b8]">
                  {item.role}
                  <Image src={`/assets/images/flags/${item.flag}`} alt="" width={14} height={14} className="h-3.5 w-3.5 rounded-full object-cover" />
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
          Start Science Tutoring
          <br />
          <span className="text-[#F98925]">Today. Free Trial Per Subject.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[610px] text-[14px] font-medium leading-[1.6] text-white/76">
          Book a free 1-hour trial session with a matched Science tutor for United States. No payment details required.
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

function CenteredPillHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-[840px] text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-[#fff1ef] px-4 py-2 text-[11px] font-black text-[#ff5f52]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f52]" />
        {eyebrow}
      </span>
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
  if (type === "concept") {
    return (
      <span className="flex h-[49px] w-[49px] items-center justify-center rounded-[14px] bg-[#ff7f20] text-white">
        <svg className="h-[32px] w-[32px]" viewBox="0 0 49 49" fill="none" aria-hidden="true">
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
        <svg className="h-[32px] w-[32px]" viewBox="0 0 49 49" fill="none" aria-hidden="true">
          <path d="M15 14v21h21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M20 29l5-5 4 4 6-8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M20 34h4M28 34h4" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
        </svg>
      </span>
    );
  }

  return (
    <span className="flex h-[49px] w-[49px] items-center justify-center rounded-[14px] bg-[#08b7c2] text-white">
      <svg className="h-[32px] w-[32px]" viewBox="0 0 49 49" fill="none" aria-hidden="true">
        <circle cx="24.5" cy="24.5" r="13" stroke="currentColor" strokeWidth="3" />
        <circle cx="24.5" cy="24.5" r="6" stroke="currentColor" strokeWidth="3" />
        <circle cx="24.5" cy="24.5" r="1.8" fill="currentColor" />
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

function StarSmallIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-[#f6ca00]" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="m8 1.8 1.8 3.65 4.03.59-2.92 2.84.69 4.02L8 11.01 4.4 12.9l.69-4.02-2.92-2.84 4.03-.59L8 1.8Z" />
    </svg>
  );
}

function StarReviewIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="m10 2.2 2.25 4.55 5.02.73-3.63 3.54.86 5-4.5-2.36-4.5 2.36.86-5-3.63-3.54 5.02-.73Z" />
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
