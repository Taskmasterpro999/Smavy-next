import Image from "next/image";
import Navbar from "../../../components/Navbar";

const yearButtons = [
  { label: "KS1 Y1", id: "ks1-year-1" },
  { label: "KS1 Y2", id: "ks1-year-2" },
  { label: "KS2 Y3", id: "ks2-year-3" },
  { label: "KS2 Y4", id: "ks2-year-4" },
  { label: "KS2 Y5", id: "ks2-year-5" },
  { label: "KS2 Y6", id: "ks2-year-6" },
  { label: "KS3 Y7", id: "ks3-year-7" },
  { label: "KS3 Y8", id: "ks3-year-8" },
  { label: "KS3 Y9", id: "ks3-year-9" },
  { label: "GCSE Bio Y10", id: "gcse-year-10-biology" },
  { label: "GCSE Chem Y10", id: "gcse-year-10-chemistry" },
  { label: "GCSE Phys Y10", id: "gcse-year-10-physics" },
  { label: "GCSE Bio Y11", id: "gcse-year-11-biology" },
  { label: "GCSE Chem Y11", id: "gcse-year-11-chemistry" },
  { label: "GCSE Phys Y11", id: "gcse-year-11-physics" },
  { label: "AL Bio 12", id: "a-level-year-12-biology" },
  { label: "AL Chem 12", id: "a-level-year-12-chemistry" },
  { label: "AL Phys 12", id: "a-level-year-12-physics" },
  { label: "AL Bio 13", id: "a-level-year-13-biology" },
  { label: "AL Chem 13", id: "a-level-year-13-chemistry" },
  { label: "AL Phys 13", id: "a-level-year-13-physics" },
];

const courseCards = [
  {
    id: "ks1-year-1",
    title: "KS1 Year 1 Science",
    stage: "KS1",
    meta: "UK - KS1 Year 1:",
    desc: "NC Science. Plants, animals including humans, everyday materials, seasons. Exploring plants, animals and everyday materials through hands-on investigation.",
    topics: ["Identifying and naming common plants", "Animals and their offspring", "Properties of everyday materials", "Seasonal changes - weather and daylight", "Observing and describing"],
    outcome: "Students name common plants and animals, describe material properties and record seasonal observations.",
    download: "Download KS1 Y1",
  },
  {
    id: "ks1-year-2",
    title: "KS1 Year 2 Science",
    stage: "KS1",
    meta: "UK - KS1 Year 2:",
    desc: "NC Science. Living things, habitats, materials and plants. Building on KS1 foundations - living things, habitats and uses of materials.",
    topics: ["Life cycles and growth", "Habitats and food chains", "Uses of everyday materials", "Health and hygiene - basic needs", "Simple experiments and fair testing"],
    outcome: "Students describe habitats, construct simple food chains and conduct fair tests with help.",
    download: "Download KS1 Y2",
  },
  {
    id: "ks2-year-3",
    title: "KS2 Year 3 Science",
    stage: "KS2",
    meta: "UK - KS2 Year 3:",
    desc: "NC Science. Plants, rocks, light, forces and magnets. KS2 science - plants, rocks, light and forces introduced.",
    topics: ["Plant structure and function", "Rock types - igneous, sedimentary, metamorphic", "Light - sources, shadows and reflections", "Forces and magnets", "Nutrition and skeleton - basic biology"],
    outcome: "Students explain plant functions, classify rock types and investigate forces and magnets.",
    download: "Download KS2 Y3",
  },
  {
    id: "ks2-year-4",
    title: "KS2 Year 4 Science",
    stage: "KS2",
    meta: "UK - KS2 Year 4:",
    desc: "NC Science. Living things, states of matter, electricity, sound. Deepening KS2 science - living things, states of matter, electricity and sound.",
    topics: ["Classification of living things", "States of matter and changes of state", "Electricity - circuits and components", "Sound - vibrations and pitch", "Digestive system - teeth and digestion"],
    outcome: "Students describe states of matter changes, build simple circuits and explain digestion and sound transmission.",
    download: "Download KS2 Y4",
  },
  {
    id: "ks2-year-5",
    title: "KS2 Year 5 Science",
    stage: "KS2",
    meta: "UK - KS2 Year 5:",
    desc: "NC Science. Earth and space, forces, materials, life cycles. Upper KS2 science - Earth in space, forces, properties of materials and life cycles.",
    topics: ["Earth, Moon and Sun - space and gravity", "Forces - gravity, air resistance, water resistance", "Properties and changes of materials", "Life cycles - mammals, insects, birds, plants", "Working scientifically - planning investigations"],
    outcome: "Students explain space and gravity, compare material properties and describe life cycles of diverse organisms.",
    download: "Download KS2 Y5",
  },
  {
    id: "ks2-year-6",
    title: "KS2 Year 6 Science",
    stage: "KS2",
    meta: "UK - KS2 Year 6:",
    desc: "NC Science. SATs science reasoning paper preparation. Final KS2 year - light, electricity, evolution and living things.",
    topics: ["Light - reflection and refraction", "Electricity - circuit symbols and variables", "Evolution and inheritance", "Classification - living things and micro-organisms", "Working scientifically - KS2 SATs preparation"],
    outcome: "Students explain light reflection and refraction, use circuit symbols, and discuss evolution and classification systematically.",
    download: "Download KS2 Y6",
  },
  {
    id: "ks3-year-7",
    title: "KS3 Year 7 Science",
    stage: "KS3",
    meta: "UK - KS3 Year 7:",
    desc: "NC Secondary Science. Integrated biology, chemistry and physics. Secondary science foundations - cells, particles, forces and Earth.",
    topics: ["Cells - structure and function", "Particle model - solids, liquids, gases", "Forces - speed and pressure", "Space - solar system and Universe", "Working scientifically - secondary level"],
    outcome: "Students apply the particle model, explain cell functions and conduct secondary-level scientific investigations.",
    download: "Download KS3 Y7",
  },
  {
    id: "ks3-year-8",
    title: "KS3 Year 8 Science",
    stage: "KS3",
    meta: "UK - KS3 Year 8:",
    desc: "NC Secondary Science. Pre-GCSE skill building. Deepening KS3 science - ecosystems, chemical reactions, waves and the periodic table.",
    topics: ["Ecosystems and food webs", "Chemical reactions and word equations", "Waves - light, sound and EM spectrum", "Periodic table and atomic structure introduction", "Genetics - DNA and inheritance basics"],
    outcome: "Students write word equations, explain ecosystems and describe wave properties with increasing scientific confidence.",
    download: "Download KS3 Y8",
  },
  {
    id: "ks3-year-9",
    title: "KS3 Year 9 Science",
    stage: "KS3",
    meta: "UK - KS3 Year 9:",
    desc: "Pre-GCSE. Transition to separate or combined sciences at GCSE. Pre-GCSE science bridge - all three disciplines at GCSE entry level.",
    topics: ["GCSE Biology preview - cells, organisation", "GCSE Chemistry preview - structure, bonding", "GCSE Physics preview - energy, forces", "Required practicals introduction", "Separating into Biology, Chemistry, Physics choices"],
    outcome: "Students are ready to begin GCSE Biology, Chemistry and Physics, familiar with the assessment style and content of each.",
    download: "Download KS3 Y9",
  },
  {
    id: "gcse-year-10-biology",
    title: "GCSE Y10 Biology Science",
    stage: "GCSE",
    meta: "UK - GCSE Biology Year 1:",
    desc: "AQA / Edexcel / OCR. Cell biology, organisation, infection. GCSE Biology Year 1 - cell biology, organisation and infection and response.",
    topics: ["Cell biology - eukaryotes, prokaryotes, cell division", "Organisation - tissues, organs, systems", "Infection and response - pathogens and immunity", "Bioenergetics - photosynthesis and respiration", "Required practicals - microscopy and osmosis"],
    outcome: "Students describe cell types, explain immune response and conduct required Biology practicals confidently.",
    download: "Download GCSE Bio Y10",
  },
  {
    id: "gcse-year-10-chemistry",
    title: "GCSE Y10 Chemistry Science",
    stage: "GCSE",
    meta: "UK - GCSE Chemistry Year 1:",
    desc: "AQA / Edexcel / OCR. Required practicals included. GCSE Chemistry Year 1 - atomic structure, bonding, quantitative chemistry and chemical changes.",
    topics: ["Atomic structure and the periodic table", "Chemical bonding - ionic, covalent, metallic", "Quantitative chemistry - moles and yield", "Chemical changes - reactivity and electrolysis", "Energy changes in reactions"],
    outcome: "Students explain atomic structure, apply bonding theory and perform quantitative chemistry calculations.",
    download: "Download GCSE Chem Y10",
  },
  {
    id: "gcse-year-10-physics",
    title: "GCSE Y10 Physics Science",
    stage: "GCSE",
    meta: "UK - GCSE Physics Year 1:",
    desc: "AQA / Edexcel / OCR. Required practicals included. GCSE Physics Year 1 - energy, electricity, particle model and atomic structure.",
    topics: ["Energy - stores and transfers", "Electricity - circuits, charge and resistance", "Particle model - states of matter, density", "Atomic structure - nuclear model, radioactivity", "Waves - properties and the EM spectrum"],
    outcome: "Students calculate energy transfers, analyse circuit diagrams and explain radioactive decay and wave properties.",
    download: "Download GCSE Phys Y10",
  },
  {
    id: "gcse-year-11-biology",
    title: "GCSE Y11 Biology Science",
    stage: "GCSE",
    meta: "UK - GCSE Biology Year 2:",
    desc: "Full past paper practice. All major exam boards. GCSE Biology Year 2 - homeostasis, inheritance, evolution and ecology.",
    topics: ["Homeostasis - nervous system, hormones", "Inheritance - DNA, genes, evolution", "Ecology - ecosystems, biodiversity, food webs", "Required practicals - fieldwork and analysis", "Past papers and mark scheme technique"],
    outcome: "Students explain homeostasis, apply genetics knowledge and demonstrate ecology understanding in exam-quality responses.",
    download: "Download GCSE Bio Y11",
  },
  {
    id: "gcse-year-11-chemistry",
    title: "GCSE Y11 Chemistry Science",
    stage: "GCSE",
    meta: "UK - GCSE Chemistry Year 2:",
    desc: "Full past paper practice. All major exam boards. GCSE Chemistry Year 2 - rates, equilibrium, organic chemistry and analysis.",
    topics: ["Rate of reaction - factors and collision theory", "Equilibrium - reversible reactions", "Organic chemistry - alkanes, alkenes, alcohols", "Chemical analysis - chromatography", "Past papers and mark scheme technique"],
    outcome: "Students explain collision theory, discuss organic compound reactions and interpret chromatography results in exam-quality responses.",
    download: "Download GCSE Chem Y11",
  },
  {
    id: "gcse-year-11-physics",
    title: "GCSE Y11 Physics Science",
    stage: "GCSE",
    meta: "UK - GCSE Physics Year 2:",
    desc: "Full past paper practice. All major exam boards. GCSE Physics Year 2 - forces, waves, magnetism, space and required practicals.",
    topics: ["Forces - resultant forces, Newton's Laws, momentum", "Waves - reflection, refraction, sound applications", "Magnetism and electromagnetism", "Space physics - solar system, lifecycle of stars", "Past papers and mark scheme technique"],
    outcome: "Students apply Newton's Laws to momentum problems, explain electromagnetic induction and discuss stellar evolution.",
    download: "Download GCSE Phys Y11",
  },
  {
    id: "a-level-year-12-biology",
    title: "A-Level Y12 Biology Science",
    stage: "A-Level",
    meta: "UK - A-Level Biology Year 1:",
    desc: "AQA / Edexcel / OCR / Cambridge. NEA introduction. A-Level Biology Year 1 - molecules, cells, organisms and ecosystems.",
    topics: ["Biological molecules - proteins, lipids, nucleic acids", "Cell structure and division - mitosis and meiosis", "Transport in plants and animals", "Organisms exchange - gas exchange, digestion", "Ecosystems and energy flow"],
    outcome: "Students explain biological molecules at molecular level, describe cell division and analyse transport and exchange mechanisms.",
    download: "Download AL Bio Y12",
  },
  {
    id: "a-level-year-12-chemistry",
    title: "A-Level Y12 Chemistry Science",
    stage: "A-Level",
    meta: "UK - A-Level Chemistry Year 1:",
    desc: "AQA / Edexcel / OCR. Practical skills and NEA. A-Level Chemistry Year 1 - atoms, bonding, energetics and organic chemistry foundations.",
    topics: ["Atomic structure and periodicity", "Chemical bonding and structure", "Energetics - enthalpy and Hess cycles", "Kinetics - rate equations introduction", "Organic chemistry - mechanisms and functional groups"],
    outcome: "Students apply Hess's Law, explain periodicity trends and interpret organic reaction mechanisms.",
    download: "Download AL Chem Y12",
  },
  {
    id: "a-level-year-12-physics",
    title: "A-Level Y12 Physics Science",
    stage: "A-Level",
    meta: "UK - A-Level Physics Year 1:",
    desc: "AQA / Edexcel / OCR. Practical skills and coursework. A-Level Physics Year 1 - mechanics, materials, waves, electricity and further mechanics.",
    topics: ["Mechanics - projectile motion, forces, moments", "Materials - stress, strain and Young modulus", "Waves - superposition, diffraction, interference", "Electricity - Kirchhoff's Laws, internal resistance", "Circular motion and simple harmonic motion"],
    outcome: "Students solve projectile motion problems, apply Kirchhoff's Laws and explain wave superposition and SHM.",
    download: "Download AL Phys Y12",
  },
  {
    id: "a-level-year-13-biology",
    title: "A-Level Y13 Biology Science",
    stage: "A-Level",
    meta: "UK - A-Level Biology Year 2:",
    desc: "Past papers, NEA completion and UCAS preparation. A-Level Biology Year 2 - genetics, evolution, control and practical skills.",
    topics: ["Genetics and gene expression", "Evolution - speciation and phylogeny", "Control - nervous and endocrine systems", "Homeostasis at cellular level", "NEA completion and A-Level exam technique"],
    outcome: "Students analyse gene expression, discuss evolutionary mechanisms and apply A-Level exam technique across all paper types.",
    download: "Download AL Bio Y13",
  },
  {
    id: "a-level-year-13-chemistry",
    title: "A-Level Y13 Chemistry Science",
    stage: "A-Level",
    meta: "UK - A-Level Chemistry Year 2:",
    desc: "Past papers, NEA and UCAS preparation. A-Level Chemistry Year 2 - equilibrium, electrochemistry, transition metals and advanced organic.",
    topics: ["Equilibrium - Kc, Kp and Kw calculations", "Electrochemistry - electrode potentials", "Transition metal chemistry - complexes and colour", "Advanced organic - aromatic chemistry, amino acids", "Past papers and NEA completion"],
    outcome: "Students perform equilibrium calculations, explain electrode potentials and apply A-Level exam technique across all paper types.",
    download: "Download AL Chem Y13",
  },
  {
    id: "a-level-year-13-physics",
    title: "A-Level Y13 Physics Science",
    stage: "A-Level",
    meta: "UK - A-Level Physics Year 2:",
    desc: "Past papers, NEA and UCAS support. A-Level Physics Year 2 - fields, nuclear physics, thermal and option units.",
    topics: ["Fields - gravitational, electric and magnetic", "Nuclear physics - radioactive decay and nuclear energy", "Thermal physics - ideal gases and thermodynamics", "Option unit - astrophysics / medical physics / engineering", "Past papers and NEA completion"],
    outcome: "Students apply field equations, perform nuclear decay calculations and complete A-Level practical assessments to a high standard.",
    download: "Download AL Phys Y13",
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
    name: "Shatakshi Shivhare",
    role: "Parent - India",
    flag: "flag-india.svg",
    text: "I rate both my Science and Maths teacher a 5-star rating as their classes are genuinely entertaining and enjoyable, and they make it easy to learn challenging science and Maths topics.",
  },
  {
    name: "meghavi shah",
    role: "Student - Australia",
    flag: "flag-australia.svg",
    text: "Nice teaching, good amount of resources, really recommend Ganta Dhameswari teacher for science. She is really nice and knows a lot about the subject, and my results really improved because of her.",
  },
  {
    name: "Jeetendra Kulkarni",
    role: "Teacher - New Zealand",
    flag: "flag-new-zealand.svg",
    avatar: "/assets/images/nav/nav/image 8.png",
    text: "Smavy has been excellent for my son in Grade 3 Maths and Science. The teachers explain concepts clearly and with patience. The study notes and content are very well-structured.",
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

export default function ScienceUnitedKingdomPage() {
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
        Home <span className="mx-2 text-[#05b4bb]">/</span> Courses <span className="mx-2 text-[#05b4bb]">/</span> Academic Tutoring <span className="mx-2 text-[#05b4bb]">/</span> Science - United Kingdom
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#46c7db]/70 bg-[#0a235f] px-4 py-2 text-[11px] font-bold text-[#48d8e8]">
            <Image src="/assets/images/flags/flag-uk.svg" alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
            Academic Tutoring - United Kingdom
          </span>
          <h1 className="mt-6 max-w-[850px] text-[40px] font-black leading-[1.04] tracking-[0] md:text-[64px]">
            Online <span className="text-[#05B4BB]">Science Tutoring</span>
            <br />
            Year 1-13
          </h1>
          <p className="mt-6 max-w-[760px] text-[15px] font-semibold leading-[1.6] text-white/78 md:text-[17px]">
            Expert 1:1 Science tutors for United Kingdom students - General Science in junior years through to Biology, Chemistry and Physics as separate subjects in senior years.
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
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Image src="/assets/images/flags/flag-australia.svg" alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
              Australia
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Image src="/assets/images/flags/flag-us.svg" alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
              United States
            </span>
          </div>
        </div>
        <HeroSummaryCard />
      </div>
      <div className="mt-12 overflow-hidden rounded-[22px]">
        <Image src="/assets/images/Image (Replace)-17.png" alt="Student studying science with online tutoring and molecular models" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function HeroSummaryCard() {
  return (
    <div className="justify-self-center rounded-[28px] border border-[#6e83bd] bg-[#3c5597] p-7 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[350px]">
      <h2 className="flex items-center gap-3 text-[17px] font-black">
        <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
        Science - United Kingdom
      </h2>
      <div className="mt-6 space-y-4">
        {[
          ["Year levels", "Year 1-13"],
          ["Junior years", "General Science"],
          ["Senior years", "Bio / Chem / Phys"],
          ["Free trial", "1 Per Subject"],
          ["Tutor rating", "4.8"],
        ].map(([label, value]) => (
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
        <LeftSectionHeader eyebrow="Course Structure" title="21 Individual Year Courses" highlight="United Kingdom - National Curriculum" />
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
  const isALevel = card.stage === "A-Level";
  const isGcse = card.stage === "GCSE";
  const isKs3 = card.stage === "KS3";

  return (
    <article id={card.id} className="scroll-mt-28 rounded-[14px] border border-transparent bg-white p-6 shadow-[0_12px_30px_rgba(18,35,99,0.06)] transition duration-300 target:-translate-y-1 target:border-[#F98925] target:ring-4 target:ring-[#F98925]/20 target:shadow-[0_18px_45px_rgba(249,137,37,0.18)]">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[18px] font-black text-[#102877]">{card.title}</h3>
        <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase ${isALevel ? "bg-[#fff0eb] text-[#F98925]" : isGcse ? "bg-[#fff0eb] text-[#ff5f52]" : isKs3 ? "bg-[#fff7df] text-[#e6a400]" : "bg-[#eafff1] text-[#20b455]"}`}>{card.stage}</span>
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
        <a className="flex-1 rounded-[10px] border border-[#F98925] px-3 py-3 text-center text-[11px] font-black text-[#F98925]" href="/assets/images/Science%20%E2%80%94%20United%20Kingdom.pdf">{card.download}</a>
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
            <div className="flex gap-2 text-[24px] leading-none text-[#f6c000]" aria-label="5 star rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarReviewIcon key={star} />
              ))}
            </div>
            <p className="mt-7 text-[17px] font-bold leading-[1.45] text-[#57535e]">{item.text}</p>
            <div className="mt-8 flex items-center gap-5">
              {item.avatar ? (
                <Image src={item.avatar} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
              ) : (
                <span className={`flex h-14 w-14 items-center justify-center rounded-full ${item.flag === "flag-india.svg" ? "bg-[#20b455]" : "bg-[#08b7c2]"} text-[18px] font-black text-white`}>
                  {item.name[0]}
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
          Book a free 1-hour trial session with a matched Science tutor for United Kingdom. No payment details required.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="inline-flex h-[54px] items-center gap-2 rounded-[18px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
            Request a Free Trial <ArrowRightIcon />
          </a>
          <a className="inline-flex h-[54px] items-center rounded-[18px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="/assets/images/Science%20%E2%80%94%20United%20Kingdom.pdf">Download Curriculum Guide</a>
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
                        <FooterCountryIcon fileName={link[1]} />
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

function FooterCountryIcon({ fileName }: { fileName: string }) {
  return (
    <Image
      src={`/assets/images/flags/${fileName}`}
      alt=""
      width={18}
      height={18}
      className="h-[18px] w-[18px] rounded-full object-cover"
    />
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
