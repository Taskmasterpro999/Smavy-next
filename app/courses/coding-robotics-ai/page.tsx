import Image from "next/image";
import Navbar from "../../components/Navbar";

const pdfHref = "/assets/images/Coding%2C%20Robotics%20%26%20AI.pdf";

const courseButtons = [
  { label: "Scratch", id: "scratch" },
  { label: "Codey Robot", id: "codey-robot" },
  { label: "Ground Vehicle", id: "ground-vehicle" },
  { label: "Arduino Sim", id: "simulate-with-arduino" },
  { label: "Arduino Auto", id: "automate-with-arduino" },
  { label: "Python", id: "python" },
  { label: "Raspberry Pi", id: "raspberry-pi-iot" },
  { label: "Data Sci & ML", id: "data-science-machine-learning" },
];

const courseGroups = [
  {
    eyebrow: "Scratch & Visual Coding",
    title: "Start Coding - Age 8 to 10",
    text: "Visual programming and physical robotics for younger students. No prior experience needed.",
    cards: [
      {
        id: "scratch",
        title: "Coding with Scratch",
        stage: "Beginner",
        meta: "Available worldwide:",
        desc: "Fully software-based. The world's most popular visual programming language for young learners. Students build games, animations and interactive stories while learning programming logic without syntax complexity.",
        topics: ["Sequencing - step-by-step instructions", "Loops - repeating actions efficiently", "Conditionals - if/else logic and decisions", "Events and triggers - responding to user input", "Variables - storing and using data", "Debugging - finding and fixing mistakes", "Creative projects - games, stories and animations"],
        outcome: "Students build and publish their own Scratch projects, explain the logic behind their code and apply computational thinking to new problems independently.",
      },
      {
        id: "codey-robot",
        title: "Code & Create with Codey Robot",
        stage: "Beginner",
        meta: "Available worldwide:",
        desc: "Codey Rocky robot kit required. Students bridge screen-based coding and physical robotics by programming a real robot with LED displays, sensors and voice recognition.",
        topics: ["Programming robot movement - precise motor control", "LED displays - facial expressions and light patterns", "Sensor inputs - how robots perceive environments", "Voice recognition - responding to spoken commands", "Object detection - introduction to computer vision", "Combining inputs and outputs - systems thinking"],
        outcome: "Students program Codey Rocky to respond to voice, navigate by sensor, display custom LED animations and explain how robots perceive and respond to the world.",
      },
    ],
  },
  {
    eyebrow: "Robotics & Arduino",
    title: "Build Real Robots - Age 8 to 12",
    text: "Physical robotics and electronics engineering. Students build autonomous vehicles and program real Arduino microcontrollers.",
    cards: [
      {
        id: "ground-vehicle",
        title: "Automated Ground Vehicle",
        stage: "Developing",
        meta: "Available worldwide:",
        desc: "Robot kit required. Students assemble a complete autonomous vehicle from motors, sensors, chassis and wheels, then program it to navigate independently.",
        topics: ["Chassis and wheel assembly - structural engineering", "Motor wiring and control - DC motor fundamentals", "Sensor integration - ultrasonic, light and sound sensors", "Fixed-path programming - input/output systems", "Line-following algorithms - sensor-controlled navigation", "Obstacle avoidance - autonomous decision making"],
        outcome: "Students build a fully functional autonomous vehicle, program it to follow lines and avoid obstacles, and explain how sensors, motors and code work as an integrated system.",
      },
      {
        id: "simulate-with-arduino",
        title: "Simulate with Arduino",
        stage: "Developing",
        meta: "Available worldwide:",
        desc: "Fully browser-based simulation. Students master circuit design and Arduino programming through professional simulation software before touching real electronics.",
        topics: ["Electronics fundamentals - voltage, current, resistance", "Ohm's Law - calculations and practical applications", "Circuit components - LEDs, resistors, capacitors, sensors", "Arduino IDE - text-based coding", "Motors and actuators - servo and DC simulation", "Circuit debugging - identifying and fixing faults"],
        outcome: "Students design and test functional virtual circuits, write Arduino programs in text-based code and explain how each electronic component behaves.",
      },
      {
        id: "automate-with-arduino",
        title: "Automate with Arduino",
        stage: "Developing",
        meta: "Available worldwide:",
        desc: "Arduino starter kit required. Students build circuits that work - automatic plant waterers, temperature-controlled fans and motion alarms.",
        topics: ["Breadboard assembly - physical circuit construction", "Microcontroller fundamentals - how Arduino processes I/O", "Servo and DC motors - controlling real-world movement", "Environmental sensors - temperature, humidity, motion", "Project - automatic plant watering system", "Project - burglar alarm with motion detection", "Project - temperature-controlled fan"],
        outcome: "Students build and program functioning automation systems using real Arduino hardware, explaining how microcontrollers read sensor inputs and produce outputs.",
      },
    ],
  },
  {
    eyebrow: "Python & Raspberry Pi",
    title: "Professional Programming - Age 12 to 14",
    text: "Python and physical computing. Students use the same tools as professional developers and engineers.",
    cards: [
      {
        id: "python",
        title: "Python Programming",
        stage: "Intermediate",
        meta: "Available worldwide:",
        desc: "Fully browser-based using Jupyter notebooks. Students learn Python in the same professional environment used by data scientists.",
        topics: ["Python syntax - clean, readable code from day one", "Control structures - if/else, while loops, for loops", "Lists and data structures - storing and manipulating data", "Functions - reusable, modular code", "String manipulation - working with text data", "Debugging - systematic error-finding", "Jupyter notebooks - code, documentation and output combined"],
        outcome: "Students write Python programs independently in Jupyter notebooks, applying loops, conditionals, functions and data structures to solve real computational problems.",
      },
      {
        id: "raspberry-pi-iot",
        title: "Raspberry Pi & IoT",
        stage: "Intermediate",
        meta: "Available worldwide:",
        desc: "Raspberry Pi kit required. Students apply Python to control physical hardware, read sensors and run autonomous programmes.",
        topics: ["Linux fundamentals - command line basics", "GPIO pins - controlling LEDs, reading buttons, PWM signals", "Sensor integration - temperature, distance and light sensors", "Camera module - images and basic computer vision", "Headless operation - autonomous programmes", "Remote access - SSH and VNC", "IoT project - remote sensor monitoring system"],
        outcome: "Students build and deploy a Raspberry Pi IoT project, write Python programs that interact with physical hardware and connect software to the real world.",
      },
    ],
  },
  {
    eyebrow: "Data Science & Machine Learning",
    title: "Build Real AI - Age 14 to 16",
    text: "The complete data science and machine learning workflow - from data analysis to training and deploying real ML models.",
    cards: [
      {
        id: "data-science-machine-learning",
        title: "Data Science & Machine Learning with Python",
        stage: "Advanced",
        meta: "Available worldwide:",
        desc: "Python Programming experience required. Students master NumPy, Pandas and data visualisation, then implement machine learning models with Scikit-learn.",
        topics: ["NumPy - arrays, matrix operations, vectorised computation", "Pandas - loading, cleaning and analysing datasets", "Matplotlib & Seaborn - 2D and 3D visualisation", "Supervised learning - classification and regression models", "Ensemble methods - random forests and gradient boosting", "Search algorithms - A* pathfinding and optimisation", "Model evaluation - accuracy, precision, recall, confusion matrices"],
        outcome: "Students load, clean and visualise real datasets, then train, evaluate and interpret machine learning models using Scikit-learn.",
      },
    ],
  },
];

const differenceCards = [
  {
    icon: "/assets/images/Dual%20Camera%20Classroom.png",
    title: "Dual Camera Classroom",
    text: "Tutors see both the student's face and their physical workbench simultaneously. For robotics and electronics, they catch wiring errors and guide component placement in real time.",
  },
  {
    icon: "/assets/images/Real%20Hardware%2C%20Real%20Skills.png",
    title: "Real Hardware, Real Skills",
    text: "Every robotics and electronics course uses real components. Students build skills directly applicable to school science, university engineering and technology careers.",
  },
  {
    icon: "/assets/images/Industry-Standard%20Tools.png",
    title: "Industry-Standard Tools",
    text: "Jupyter notebooks, Arduino IDE, Linux command line and Scikit-learn - the exact tools used by professional developers and AI engineers.",
  },
];

const testimonials = [
  {
    label: "Python - Age 13 - AU",
    text: "My son built his first real Python programme after 8 sessions. Now he's halfway through the Data Science & ML course and genuinely passionate about AI.",
    name: "Raj K.",
    role: "Parent - Sydney, AU",
    flag: "flag-australia.svg",
  },
  {
    label: "Arduino - Age 11 - UK",
    text: "The dual camera was what made the difference. The tutor could see my daughter's breadboard and spotted a wiring mistake immediately. Her alarm system worked first try.",
    name: "Sarah B.",
    role: "Parent - Bristol, UK",
    flag: "flag-uk.svg",
  },
  {
    label: "Scratch - Age 9 - USA",
    text: "My daughter was nervous about coding. Within 3 sessions she was building her own Scratch games and showing them to her friends. The 1:1 format made all the difference.",
    name: "Linda M.",
    role: "Parent - Chicago, USA",
    flag: "flag-us.svg",
  },
];

const faqs = [
  ["Do students need to start from Course 1?", "No - each course is self-contained. Students with prior experience can join at any point. Our tutors assess the right starting course in the free trial session."],
  ["Do robotics courses require physical hardware?", "Yes - Codey Rocky, the Automated Ground Vehicle kit, Arduino starter kits and Raspberry Pi require hardware. Scratch, Simulate with Arduino, Python and Data Science & ML are software-based."],
  ["How does the dual camera classroom work?", "Students set up two cameras: one facing them and one positioned above their workbench. The tutor sees both views simultaneously, guiding component placement and wiring in real time."],
  ["Is this available outside AU, UK and USA?", "Yes - all courses are curriculum-independent and available worldwide. Students in Singapore, UAE, India, New Zealand, Canada and everywhere else can enrol."],
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

const contactLinks = [
  "hello@smavy.com",
  "WhatsApp - wa.link/hybwn0",
  "+61 480 045 848",
  "+91 76958 53385",
  "UK: +44 20 3349 5911",
  "US: +1 214 308 0807",
];

export default function CodingRoboticsAIPage() {
  return (
    <main className="min-h-screen bg-white text-[#102877]">
      <Navbar />
      <div className="mx-auto max-w-[1440px] overflow-hidden border-x border-[#d8d8d8]">
        <Hero />
        <CourseNav />
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
        Home <span className="mx-3 text-white/80">&gt;</span> Courses <span className="mx-3 text-white/80">&gt;</span> Academic Tutoring <span className="mx-3 text-white/80">&gt;</span> <span className="text-[#05D8DE]">Coding, Robotics & AI</span>
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#46c7db]/80 bg-[#0a235f] px-3.5 py-2 text-[11px] font-black text-[#66e3e9]">
            <GlobeBadgeIcon />
            Available Worldwide · Age 8-16
          </span>
          <h1 className="mt-8 max-w-[850px] text-[44px] font-black leading-[1.04] tracking-[0] md:text-[64px]">
            Coding, Robotics
            <br />
            <span className="text-[#05B4BB]">& AI - 8 Courses</span>
          </h1>
          <p className="mt-7 max-w-[760px] text-[17px] font-semibold leading-[1.35] text-white/78 md:text-[20px]">
            From visual block coding with Scratch through to building real machine learning models - 8 individual 1:1 online courses students can join at any point. Available in Australia, UK, USA and worldwide.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-black text-white">
            {["Scratch & Visual Coding", "Physical Robotics", "Arduino Electronics", "Python Programming", "Raspberry Pi & IoT", "Data Science & Machine Learning"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/12 px-3.5 py-2">{item}</span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="inline-flex h-[58px] items-center gap-3 rounded-[21px] bg-[#F98925] px-8 text-[20px] font-black text-white" href="#trial">
              Book Free Trial <ArrowRightIcon />
            </a>
            <a className="inline-flex h-[58px] items-center rounded-[21px] border-2 border-[#F98925] px-8 text-[19px] font-black text-[#F98925]" href="#courses">Browse All Courses</a>
          </div>
        </div>
        <HeroSummaryCard />
      </div>
      <div className="mt-16 overflow-hidden rounded-[22px]">
        <Image src="/assets/images/Image (Replace)-26.png" alt="Student building robotics and Arduino electronics during online coding tutoring" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
      <p className="mt-5 text-center text-[13px] font-black text-white/68">All courses available worldwide - no local curriculum required</p>
    </section>
  );
}

function HeroSummaryCard() {
  return (
    <div className="justify-self-center rounded-[34px] border border-[#6e83bd] bg-[#3c5597] px-7 py-8 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[372px]">
      <h2 className="flex items-center gap-3 text-[20px] font-black">
        <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
        Coding, Robotics & AI
      </h2>
      <div className="mt-6 space-y-0">
        {[["Individual courses", "8 courses"], ["Age range", "Age 8-16"], ["Per course", "20-40 hours"], ["Session length", "1 hour"], ["Format", "1:1 only"], ["Free trial", "1 per subject"]].map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 border-b border-[#6f84bd]/70 py-4 text-[14px] font-black last:border-0 last:pb-0">
            <span className="text-white/52">{label}</span>
            <span className={label === "Individual courses" ? "text-[#05D8DE]" : label === "Free trial" ? "text-[#F98925]" : "text-white"}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CourseNav() {
  return (
    <section className="bg-white px-6 py-9">
      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-center gap-3">
        <a href="#courses" className="rounded-full border border-[#05B4BB]/30 bg-[#e9fbff] px-5 py-2 text-[11px] font-black text-[#05B4BB]">Worldwide</a>
        {courseButtons.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="rounded-full border border-[#dde5f5] bg-white px-5 py-2 text-[11px] font-black text-[#102877] shadow-[0_7px_16px_rgba(18,35,99,0.04)] transition hover:border-[#F98925] hover:text-[#F98925]">
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function CourseStructure() {
  return (
    <section id="courses" className="bg-[#f5f7ff] px-6 py-22">
      <div className="mx-auto max-w-[1240px]">
        <LeftSectionHeader eyebrow="Coding, Robotics & AI" title="8 Individual 1:1 Online Courses" highlight="Available Worldwide" />
      </div>
      <div className="mx-auto mt-12 max-w-[1240px] space-y-14">
        {courseGroups.map((group) => (
          <section key={group.eyebrow}>
            <div className="max-w-[880px]">
              <span className="inline-flex rounded-full bg-[#fff1ef] px-4 py-2 text-[11px] font-black text-[#F98925]">{group.eyebrow}</span>
              <h3 className="mt-4 text-[30px] font-black leading-tight text-[#102877] md:text-[42px]">{group.title}</h3>
              <p className="mt-3 text-[15px] font-semibold leading-[1.55] text-[#6d7393]">{group.text}</p>
            </div>
            <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {group.cards.map((card) => (
                <CourseCard key={card.id} card={card} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function CourseCard({ card }: { card: (typeof courseGroups)[number]["cards"][number] }) {
  const isAdvanced = card.stage === "Advanced";
  const isIntermediate = card.stage === "Intermediate";
  const isDeveloping = card.stage === "Developing";

  return (
    <article id={card.id} className="scroll-mt-28 rounded-[14px] border border-transparent bg-white p-6 shadow-[0_12px_30px_rgba(18,35,99,0.06)] transition duration-300 target:-translate-y-1 target:border-[#F98925] target:ring-4 target:ring-[#F98925]/20">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[18px] font-black text-[#102877]">{card.title}</h3>
        <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase ${isAdvanced ? "bg-[#fff0eb] text-[#e53935]" : isIntermediate ? "bg-[#e9fbff] text-[#05B4BB]" : isDeveloping ? "bg-[#fff7df] text-[#e6a400]" : "bg-[#eafff1] text-[#20b455]"}`}>{card.stage}</span>
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
        <a className="flex-1 rounded-[10px] border border-[#F98925] px-3 py-3 text-center text-[11px] font-black text-[#F98925]" href={pdfHref}>Download Curriculum</a>
        <a className="flex-1 rounded-[10px] bg-[#F98925] px-3 py-3 text-center text-[11px] font-black text-white" href="#trial">Book Free Trial</a>
      </div>
    </article>
  );
}

function DifferenceSection() {
  return (
    <section className="bg-[#f5f7ff] px-6 py-24">
      <div className="mx-auto max-w-[1240px]">
        <LeftSectionHeader eyebrow="Why Smavy Coding" title="What Makes Our Coding, Robotics & AI Tutoring Different" />
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

function ReviewsSection() {
  return (
    <section className="bg-white px-6 py-24">
      <SectionHeader eyebrow="Parent Reviews" title="What Parents Say About Our Coding & Robotics Tutors" />
      <div className="mx-auto mt-16 grid max-w-[1240px] gap-8 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="min-h-[320px] rounded-[24px] border border-[#dfe6f5] bg-white px-8 py-9">
            <span className="inline-flex rounded-full bg-[#e9fbff] px-4 py-2 text-[11px] font-black text-[#05B4BB]">{item.label}</span>
            <p className="mt-7 text-[17px] font-bold leading-[1.45] text-[#57535e]">{item.text}</p>
            <div className="mt-8 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#102877] text-[17px] font-black text-white">{item.name[0]}</span>
              <span>
                <span className="block text-[16px] font-black text-[#57535e]">{item.name}</span>
                <span className="mt-1 flex items-center gap-1.5 text-[12px] font-semibold text-[#9aa0b8]">
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
      <SectionHeader eyebrow="FAQs" title="Common Questions About Coding, Robotics & AI" />
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
          Start Coding, Robotics & AI
          <br />
          <span className="text-[#F98925]">Free Trial Per Subject.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[610px] text-[14px] font-medium leading-[1.6] text-white/76">
          Book a free 1-hour introductory session. Our tutor will recommend the right starting course and get your child coding in session one.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="inline-flex h-[54px] items-center gap-2 rounded-[18px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
            Request a Free Trial <ArrowRightIcon />
          </a>
          <a className="inline-flex h-[54px] items-center rounded-[18px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="#courses">Browse All Courses</a>
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
      <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
        <div>
          <Image src="/assets/images/smavy-logo.png" alt="Smavy Academy" width={166} height={42} className="h-auto w-[166px]" />
          <p className="mt-8 max-w-[300px] text-[13px] font-semibold leading-[1.55] text-white/78">
            A Smart Choice for a Savvy You.
            <br />
            Expert 1:1 online tutoring in Australia, UK, USA, IB schools and worldwide.
          </p>
          <div className="mt-8 flex gap-3">
            {["in", "x", "f", "yt"].map((item) => (
              <span key={item} className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/18 bg-white/12 text-[17px] font-bold text-white">
                {item === "yt" ? "" : item}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-white/86">Get In Touch</h3>
            <ul className="mt-5 space-y-3">
              {contactLinks.map((item) => (
                <li key={item} className="text-[12px] font-semibold leading-none text-white/76">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-white">{group.title}</h3>
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
