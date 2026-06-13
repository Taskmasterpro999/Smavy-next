import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

const stats = [
  ["3K+", "Students worldwide"],
  ["4.8", "Google ratings (240)"],
  ["200+", "Expert tutors"],
];

const availability = [
  ["Academic Tutoring", "Year 1-12 - All countries - Any curriculum"],
  ["Exam Preparation", "AU Selective, Scholarship, OC, NAPLAN, ICAS - UK 11-Plus, GCSE - US SAT, ACT"],
  ["Coding, Robotics & AI", "All countries - Scratch to Python to AI pathway"],
  ["Creative & Non-Academic", "Creative Writing - Public Speaking - Chess - Vedic Maths"],
];

const platformCards = [
  {
    title: "Dual Camera Classroom",
    text: "See the student's face and their notebook at the same time. Tutors catch errors in the working, not just the answer.",
    icon: "dual-camera.png",
  },
  {
    title: "Live Interactive Whiteboard",
    text: "Tutor and student write and draw together in real time. Equations, diagrams and essays are saved after each session.",
    icon: "whiteboard.png",
  },
  {
    title: "Session Recording",
    text: "Every session is automatically recorded. Students rewatch to revise; parents can review tutor quality any time.",
    icon: "session-recording.png",
  },
  {
    title: "Progress Dashboard",
    text: "Track attendance, topics covered, strengths, weaknesses, homework completion and test scores clearly.",
    icon: "progress-dashboard.png",
  },
  {
    title: "Parent & Student Portal",
    text: "Book sessions, message tutors, view reports, download materials and pay invoices in one login.",
    icon: "portal.png",
  },
];

const countries = [
  ["Australia", "Full curriculum support - Exam preparation - NAPLAN - Selective - VCE - HSC - QCE", "/assets/images/flags/flag-australia.svg"],
  ["United Kingdom", "Full curriculum support - Exam preparation - 11-Plus - GCSE - A-Level", "/assets/images/flags/flag-uk.svg"],
  ["United States", "Full curriculum support - Exam preparation - SAT - ACT - AP Subjects", "/assets/images/flags/flag-us.svg"],
  ["IB Curriculum", "IB schools worldwide - PYP - MYP - DP (SL / HL) - Exploration IA - TOK support", "/assets/images/flags/flag-ib.svg"],
];

const worldwide = [
  ["India", "flag-india.svg"],
  ["Singapore", "flag-singapore.svg"],
  ["UAE", "flag-uae.svg"],
  ["New Zealand", "flag-new-zealand.svg"],
  ["Canada", "flag-canada.svg"],
  ["+ Students Worldwide", "flag-worldwide.svg"],
];

const courseCards = [
  {
    title: "Academic Tutoring",
    text: "English, Maths, Science and General Ability for Year 1-12. Expert 1:1 tutors for any curriculum - Australia, UK, USA and worldwide.",
    icon: "/assets/images/Academic Tutoring.png",
    href: "/courses/australia/english",
  },
  {
    title: "Exam Preparation",
    text: "AU: Selective Entry, Scholarship, OC, NAPLAN, ICAS. UK: 11-Plus, GCSE, A-Level. US: SAT, ACT, AP Subjects.",
    icon: "/assets/images/Exam Preparation.png",
    href: "#trial",
  },
  {
    title: "Coding, Robotics & AI",
    text: "Scratch, Codey Robot, Arduino, Automated Ground Vehicle, Python, Raspberry Pi, Data Science and Machine Learning.",
    icon: "/assets/images/Robotics.png",
    href: "#trial",
  },
  {
    title: "General Ability",
    text: "Verbal reasoning, numerical reasoning, abstract thinking and spatial skills for Year 3-8.",
    icon: "/assets/images/General.png",
    href: "/courses/australia/general-ability",
  },
  {
    title: "Creative & Non-Academic",
    text: "Creative Writing, Public Speaking, Chess and Vedic Maths. Fully personalised 1:1 sessions for every age and skill level.",
    icon: "/assets/images/Creative.png",
    href: "#trial",
  },
  {
    title: "Dual Camera Classroom",
    text: "Our unique dual camera technology lets tutors see the student's face and notebook simultaneously for real-time feedback.",
    icon: "/assets/images/dual-camera.png",
    href: "#platform",
  },
];

const steps = [
  ["01", "Send a Free Demo Request", "Submit a demo request through our website form or contact our team directly by phone or WhatsApp. Takes less than 2 minutes.", "No payment details needed", "at this stage - or ever for the demo."],
  ["02", "We Learn About Your Child", "Within 24 hours a Learning Counsellor calls you to understand your child's learning needs, current level and goals. We also set the best schedule for the free demo session on that same call.", "24-hour response", "guaranteed - we call you, you don't chase us."],
  ["03", "Get Ready for Your Demo", "Follow the simple steps in our welcome email or WhatsApp message. Log in to your demo account on the Smavy app or browser platform - video instructions included.", "Nothing to download", "- works in any browser on any device."],
  ["04", "Start Your Free Trial Session", "Join your free 1-hour trial session on your chosen schedule - one free trial per subject. Access via the Smavy app or browser, no install needed.", "Dual camera classroom", "- tutor sees your child's face and their notebook simultaneously."],
  ["05", "Not Happy? We'll Find a Better Tutor", "If the trial tutor isn't the right fit, we assign a different tutor - also for free. We keep going until you're completely satisfied. Once you're happy, book your first paid session.", "No lock-in, no pressure", "- every new tutor trial is free until you find the right match."],
  ["06", "Start Learning with Smavy", "Your child's custom curriculum and 1:1 sessions begin. The same tutor stays with your child as they advance through year levels - no need to find a new tutor every year.", "Continuity guaranteed", "- your tutor grows with your child."],
];

const actionHighlights = [
  ["Who we are and our mission", "/assets/images/mission.png"],
  ["How the 6-step process works", "/assets/images/6steps.png"],
  ["Dual camera classroom in action", "/assets/images/dual-camera.png"],
  ["Platform features and parent dashboard", "/assets/images/portal.png"],
];

const reviews = [
  {
    name: "srikrjy \"Sri\"",
    role: "Parent - Australia",
    flag: "flag-australia.svg",
    avatarType: "icon",
    text: "We are with Smavy for the last 1 year. Ramesh Krishnan is my son Koushik's English teacher. He is exemplary and a wonderful teacher. He is patient, empathetic and knowledgeable.",
  },
  {
    name: "Vivaan Varun",
    role: "Parent - Australia",
    flag: "flag-australia.svg",
    avatar: "/assets/images/nav/nav/image 2.png",
    text: "Ramesh Krishnan has been teaching English to my son, Vivaan, for his selective school exam preparation. His teaching style is very clear, structured, and easy for my son to understand.\n\nVivaan enjoys the classes and appreciates all the learning he is receiving from the teacher. We especially appreciate the focus on exam strategies, comprehension and writing skills.\n\nRamesh's patience and encouragement helps Vivaan stay motivated. We are very happy with the progress he is making under his guidance.\n\nThank you for your help in Vivaan's learning journey.",
  },
  {
    name: "Indu Nair",
    role: "Parent - India",
    flag: "flag-india.svg",
    avatar: "/assets/images/nav/nav/image 3.png",
    text: "Alvira Kafi did a splendid job in a short time for getting the right tutors and setting up classes for all my 3 children. The whole process was very smooth and hassle free. I highly recommend Smavy, the platform is well organised and structured in a way that children and parents can see how they are progressing.",
  },
];

const tutorBenefits = [
  "Ace homework assignments with expert guidance every session",
  "Excel in selective exams with superior results and targeted preparation",
  "Increase your child's chances of scholarship acceptance",
  "Enjoy fun and engaging 1:1 learning tailored to their style",
  "Access a variety of study resources and online assessments",
  "Develop proficiency in technology skills - coding, robotics and AI",
  "Receive personalised lessons customised to your child's exact needs",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#102877]">
      <Navbar />
      <div className="mx-auto max-w-[1440px] overflow-hidden border-x border-[#d8d8d8]">
        <HeroSection />
        <DualCameraSection />
        <PlatformSection />
        <CountriesSection />
        <CoursesSection />
        <HowItWorksSection />
        <ActionSection />
        <ReviewsSection />
        <TutorFinderSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="bg-[#102877] px-6 pb-16 pt-10 text-white md:px-14 lg:px-[96px]">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-[#0a235f] px-5 py-2 text-[12px] font-black text-[#ffbd8a]">
            <span className="h-3 w-3 rounded-full bg-[#F98925]" />
            1:1 Online Tutoring - Free Trial Per Subject - 8+ Countries
          </span>
          <h1 className="mt-7 max-w-[690px] text-[42px] font-black leading-[1.04] tracking-[0] md:text-[70px]">
            Online Tutoring
            <br />
            That Feels Like
            <br />
            <span className="text-[#F98925]">Being There.</span>
          </h1>
          <p className="mt-6 max-w-[650px] text-[15px] font-semibold leading-[1.65] text-white/78 md:text-[17px]">
            Expert 1:1 online tutoring for students from Year 1 to Year 12. Academic tutoring, exam preparation, coding, robotics and AI - available in Australia, UK, USA and 8+ countries worldwide. One free trial per subject, new tutor until you&apos;re satisfied.
          </p>
          <div className="mt-8 flex flex-wrap gap-5">
            <a className="inline-flex h-[56px] items-center gap-3 rounded-[19px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
              Book Free Trial <ArrowRightIcon />
            </a>
            <a className="inline-flex h-[56px] items-center rounded-[19px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="#how-it-works">
              How it works?
            </a>
          </div>
          <div className="mt-12 grid max-w-[620px] grid-cols-3 gap-5 border-t border-white/18 pt-8">
            {stats.map(([value, label]) => (
              <div key={label}>
                <p className="text-[26px] font-black text-[#f6ca00]">{value}</p>
                <p className="mt-1 text-[11px] font-bold leading-tight text-white/64">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid content-start gap-5">
          <div className="rounded-[24px] bg-white/14 p-6 shadow-[0_24px_70px_rgba(3,12,49,0.24)]">
            <h2 className="text-[16px] font-black">What&apos;s available for your student</h2>
            <div className="mt-5 space-y-4">
              {availability.map(([title, text], index) => (
                <div key={title} className="flex gap-3">
                  <span className="mt-1 flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[16px] bg-white/14 text-white">
                    <MiniIcon index={index} />
                  </span>
                  <span>
                    <span className="block text-[13px] font-black">{title}</span>
                    <span className="mt-1 block text-[11px] font-semibold leading-[1.35] text-white/64">{text}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid max-w-[620px] gap-5 md:grid-cols-2">
            <div className="min-h-[118px] rounded-[26px] border border-white/18 bg-white/14 px-7 py-6">
              <p className="flex items-center gap-3 text-[13px] font-black text-white">
                <GiftIcon />
                Free Trial
              </p>
              <p className="mt-5 text-[24px] font-black leading-none text-[#f6ca00]">Per Subject</p>
              <p className="mt-2 text-[13px] font-bold text-white/56">New tutor till you&apos;re happy</p>
            </div>
            <div className="min-h-[118px] rounded-[26px] border border-white/18 bg-white/14 px-7 py-6">
              <p className="flex items-center gap-3 text-[13px] font-black text-white">
                <GlobeIcon />
                Worldwide
              </p>
              <p className="mt-5 text-[24px] font-black leading-none text-[#f6ca00]">8+</p>
              <p className="mt-2 text-[13px] font-bold text-white/56">Countries served</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 overflow-hidden rounded-[24px]">
        <Image src="/assets/images/home/home-1-7.jpeg" alt="Online tutor seeing student and notebook at the same time" width={1408} height={768} priority className="h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function DualCameraSection() {
  return (
    <section className="bg-[#102877] px-6 py-16 text-white md:px-14 lg:px-[96px]">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 md:grid-cols-[300px_1fr]">
        <div className="relative mx-auto h-[340px] w-[310px]">
          <div className="absolute left-[10px] top-[12px] h-[145px] w-[145px] rounded-full bg-[#82E1DF]" />
          <div className="absolute bottom-[46px] left-[46px] h-[250px] w-[250px] rounded-full bg-[#08C3CB]" />
          <div className="absolute left-[150px] top-[125px] z-10 text-center">
            <p className="text-[55px] font-black leading-none text-white">2X</p>
            <p className="mt-1 max-w-[112px] text-[12px] font-black leading-tight text-white">More effective than screen share alone</p>
          </div>
          <Image src="/assets/images/home/home-1-28-cutout.png" alt="Dual camera document camera arm" width={623} height={670} className="absolute left-[20px] top-[18px] z-20 h-[280px] w-auto -scale-x-100 object-contain brightness-95 contrast-110 saturate-90" />
          <p className="absolute bottom-0 left-[98px] text-[23px] font-black text-white">Dual Camera</p>
        </div>
        <div>
          <span className="inline-flex items-center gap-3 rounded-full border border-white/70 px-5 py-2 text-[12px] font-black text-[#f6ca00]">
            <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
            Signature Feature
          </span>
          <h2 className="mt-8 text-[30px] font-black leading-tight md:text-[44px]">See the Student and the Notebook at the Same Time</h2>
          <p className="mt-7 max-w-[920px] text-[18px] font-semibold leading-[1.35] text-white/78">
            Our dual camera classroom lets tutors see both the student&apos;s face and their working notebook simultaneously. Tutors catch errors in real time, correct technique at the moment it happens, and give feedback on the actual written working - not just the answer.
          </p>
          <div className="mt-8 h-px w-full bg-white/18" />
          <div className="mt-6 flex flex-wrap gap-4 text-[12px] font-black text-white">
            {["Face camera - engagement and understanding", "Notebook camera - working and technique", "Instant written feedback", "Particularly powerful for Maths and Science"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/12 px-5 py-3 shadow-[inset_0_-2px_0_rgba(255,255,255,0.08)]">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section id="platform" className="bg-[#f5f7ff] px-6 py-24">
      <div className="mx-auto max-w-[1240px]">
        <LeftHeader eyebrow="Smavy Technology" title="A Purpose-Built Platform for 1:1 Online Tutoring" />
        <p className="mt-5 max-w-[900px] text-[14px] font-semibold leading-[1.65] text-[#6d7393]">
          Every Smavy session runs on our own classroom platform - designed specifically for 1:1 online tutoring. Not a generic video call. Not a recycled webinar tool. Built for learning.
        </p>
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {platformCards.map((card) => (
            <FeatureCard key={card.title} card={card} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a className="inline-flex h-[52px] items-center rounded-[17px] bg-[#F98925] px-8 text-[14px] font-black text-white" href="#trial">Explore the Smavy Platform</a>
        </div>
      </div>
    </section>
  );
}

function CountriesSection() {
  return (
    <section className="bg-[#f5f7ff] px-6 pb-24">
      <div className="mx-auto max-w-[1240px]">
        <LeftHeader eyebrow="Where We Teach" title="Available Worldwide Local Focus in AU, UK, USA & IB" />
        <p className="mt-5 max-w-[960px] text-[14px] font-semibold leading-[1.65] text-[#6d7393]">
          Our online tutors deliver expert 1:1 tutoring for any curriculum, anywhere in the world. Students in Australia, UK and USA receive full local syllabus alignment and exam preparation. IB students receive programme-specific tutoring across PYP, MYP and DP.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {countries.map(([country, text, flag]) => (
            <article key={country} className="rounded-[22px] border border-[#e0e8fb] bg-white p-8">
              <Image src={flag} alt="" width={54} height={54} className="h-[54px] w-[54px] rounded-[12px] object-contain" />
              <h3 className="mt-7 text-[21px] font-black text-[#102877]">{country}</h3>
              <p className="mt-4 text-[15px] font-semibold leading-[1.55] text-[#5f5b68]">{text}</p>
              <p className="mt-6 inline-flex items-center gap-3 text-[13px] font-black text-[#20b455]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#20b455]" />
                {country === "IB Curriculum" ? "Program-aligned" : "Full curriculum support"}
              </p>
            </article>
          ))}
          <div className="rounded-[22px] bg-[#102877] p-8 text-white md:col-span-2">
          <p className="text-[14px] font-black">We also teach students in:</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {worldwide.map(([country, flag]) => (
              <span key={country} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[12px] font-bold">
                <Image src={`/assets/images/flags/${flag}`} alt="" width={22} height={22} className="h-[22px] w-[22px] rounded-[7px] object-cover" />
                {country}
              </span>
            ))}
          </div>
          <p className="mt-5 text-[12px] font-semibold leading-[1.6] text-white/70">
            India: SAT, Creative Writing, Chess, Vedic Maths, Coding & AI available. Academic tutoring, concept explanation and homework assistance available for students in all countries.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoursesSection() {
  return (
    <section id="courses" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1240px]">
        <LeftHeader eyebrow="What We Teach" title="Online Tutoring Courses for Every Subject & Year Level" />
        <p className="mt-5 max-w-[900px] text-[14px] font-semibold leading-[1.65] text-[#6d7393]">
          From foundational literacy in Year 1 to university entrance exam preparation - and the future-facing skills that classrooms haven&apos;t caught up with yet.
        </p>
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {courseCards.map((card) => (
            <Link key={card.title} href={card.href} className="group rounded-[14px] border border-[#e0e8fb] bg-white p-7 transition hover:-translate-y-1 hover:border-[#F98925] hover:shadow-[0_18px_45px_rgba(249,137,37,0.12)]">
              <Image src={card.icon} alt="" width={56} height={56} className="h-14 w-14 object-contain" />
              <h3 className="mt-5 text-[18px] font-black text-[#102877]">{card.title}</h3>
              <p className="mt-3 text-[13px] font-semibold leading-[1.55] text-[#5f6689]">{card.text}</p>
              <span className="mt-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f7ff] text-[#102877] transition group-hover:bg-[#F98925] group-hover:text-white">
                <ArrowRightSmallIcon />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a className="inline-flex h-[52px] items-center rounded-[17px] bg-[#F98925] px-8 text-[14px] font-black text-white" href="#platform">Explore the Smavy Platform</a>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#112b81] px-5 py-12 text-white md:px-6 md:py-16">
      <div className="mx-auto max-w-[1340px] text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/38 bg-[#112671] px-5 py-2 text-[11px] font-black text-[#f6ca00] shadow-[0_10px_28px_rgba(0,0,0,0.1)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F98925]" />
          Getting Started
        </span>
        <h2 className="mt-8 text-[36px] font-black leading-[1.05] tracking-[0] md:text-[62px]">How Smavy Online Tutoring Works</h2>
        <p className="mx-auto mt-6 max-w-[900px] text-[16px] font-black leading-[1.5] text-white md:text-[20px]">
          From your first enquiry to your child&apos;s first paid session - here&apos;s exactly what happens.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([number, title, text, noteTitle, noteText]) => (
            <article
              key={number}
              className="min-h-[366px] rounded-[21px] border border-white/26 bg-white/15 px-8 pb-8 pt-7 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] md:px-9"
            >
              <span className="block text-[66px] font-black leading-none text-[#91a2df]/70">{number}</span>
              <h3 className="mt-7 text-[20px] font-black leading-tight text-white">{title}</h3>
              <p className="mt-3 text-[13px] font-semibold leading-[1.55] text-white/68">{text}</p>
              <div className="mt-5 border border-[#2b5eaa] border-l-[#06c6ca] bg-[#21418b]/35 py-2.5 pl-5 pr-4 text-[11px] font-bold leading-[1.35] text-white/76">
                <span className="block font-black text-[#08d8ce]">{noteTitle}</span>
                <span>{noteText}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActionSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <LeftHeader eyebrow="See Smavy in Action" title="Who We Are, How It Works & Our Platform" />
          <p className="mt-5 text-[14px] font-semibold leading-[1.65] text-[#6d7393]">
            Watch our 2-minute introduction to Smavy Academy - who we are, how our 1:1 online tutoring works, and a walkthrough of our dual camera classroom and student platform.
          </p>
          <ul className="mt-7 space-y-4">
            {actionHighlights.map(([item, icon]) => (
              <li key={item} className="flex items-center gap-5 text-[16px] font-bold text-[#565263]">
                <Image src={icon} alt="" width={76} height={76} className="h-[76px] w-[76px] shrink-0 object-contain" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a className="mt-8 inline-flex h-[52px] items-center rounded-[17px] bg-[#F98925] px-8 text-[14px] font-black text-white" href="#trial">Book Your Free Trial</a>
        </div>
        <div className="flex aspect-video items-center justify-center rounded-[24px] bg-[#eef1f8]">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F98925] text-white shadow-[0_18px_42px_rgba(249,137,37,0.28)]">
            <PlayIcon />
          </span>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="bg-white px-6 py-24">
      <CenteredHeader eyebrow="What Parents Say" title="What Parents Say About Smavy Online Tutoring" />
      <div className="mx-auto mt-12 grid max-w-[1210px] items-start gap-9 md:grid-cols-3">
        {reviews.map((item, index) => (
          <article key={item.name} className={`rounded-[18px] border border-[#dfe6f5] bg-white px-8 py-8 ${index === 1 ? "md:min-h-[520px]" : "md:min-h-[360px]"}`}>
            <div className="flex gap-2 text-[20px] leading-none text-[#f6c000]" aria-label="5 star rating">
              {[1, 2, 3, 4, 5].map((star) => <span key={star}>★</span>)}
            </div>
            <p className="mt-6 whitespace-pre-line text-[13px] font-bold leading-[1.55] text-[#4f4c58]">{item.text}</p>
            <div className="mt-6 flex items-center gap-4">
              {item.avatar ? (
                <Image src={item.avatar} alt="" width={42} height={42} className="h-[42px] w-[42px] rounded-full object-cover" />
              ) : (
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#20b455] text-white">
                  <UserIcon />
                </span>
              )}
              <span>
                <span className="block text-[14px] font-black text-[#102877]">{item.name}</span>
                <span className="mt-1 flex items-center gap-1.5 text-[11px] font-semibold text-[#9aa0b8]">
                  {item.role}
                  <Image src={`/assets/images/flags/${item.flag}`} alt="" width={14} height={14} className="h-3.5 w-3.5 rounded-full object-cover" />
                </span>
              </span>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a className="inline-flex h-[58px] items-center rounded-[20px] border border-[#F98925] px-9 text-[16px] font-black text-[#F98925]" href="/why-smavy#parents">Read all parent reviews</a>
      </div>
    </section>
  );
}

function TutorFinderSection() {
  return (
    <section id="trial" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-[1240px] items-start gap-12 lg:grid-cols-[0.95fr_0.88fr]">
        <div>
          <LeftHeader eyebrow="Find Your Child's Tutor" title="Find Your Child's Tutor Now!" />
          <p className="mt-6 max-w-[820px] text-[17px] font-bold leading-[1.25] text-[#4f4c58]">
            Connect with a tutor who understands and fits your child&apos;s academic needs - available in Australia, UK, USA and worldwide.
          </p>
          <ul className="mt-12 grid max-w-[620px] gap-4">
            {tutorBenefits.map((item) => (
              <li key={item} className="flex items-start gap-4 text-[18px] font-bold leading-[1.15] text-[#4f4c58]">
                <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] bg-[#20b455] text-white">
                  <StarIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a className="mt-7 inline-flex h-[58px] items-center gap-3 rounded-[18px] bg-[#F98925] px-10 text-[18px] font-black text-white" href="#trial">
            Book Your Free Trial <ArrowRightIcon />
          </a>
        </div>
        <form className="mt-16 rounded-[32px] bg-[#102877] px-10 py-9 text-white lg:mt-8">
          <h3 className="flex items-center gap-4 text-[23px] font-black">
            <span className="h-3.5 w-3.5 rounded-full bg-[#f6ca00]" />
            Quick Enquiry
          </h3>
          <p className="ml-7 mt-2 max-w-[520px] text-[11px] font-semibold leading-[1.2] text-white/72">
            Need help estimating cost or finding the right tutor? Fill in the form and we&apos;ll get back to you ASAP. Remember - 1 free trial per subject, new tutor if you&apos;re not satisfied.
          </p>
          <label className="mt-9 block text-[12px] font-black">What&apos;s your name?</label>
          <input className="mt-3 h-[54px] w-full rounded-[12px] border border-white/10 bg-white/18 px-6 text-[13px] font-semibold text-white outline-none placeholder:text-white/45" placeholder="Your Full name" />
          <label className="mt-7 block text-[12px] font-black">What&apos;s your phone number?</label>
          <input className="mt-3 h-[54px] w-full rounded-[12px] border border-white/10 bg-white/18 px-6 text-[13px] font-semibold text-white outline-none placeholder:text-white/45" placeholder="xxxx-xxx-xxxx" />
          <label className="mt-7 block text-[12px] font-black">What&apos;s your email address?</label>
          <input className="mt-3 h-[54px] w-full rounded-[12px] border border-white/10 bg-white/18 px-6 text-[13px] font-semibold text-white outline-none placeholder:text-white/45" placeholder="your@email.com" />
          <button type="button" className="mt-7 flex h-[58px] w-full items-center justify-center gap-3 rounded-[18px] bg-[#F98925] text-[18px] font-black text-white">
            Send my enquiry <ArrowRightIcon />
          </button>
          <p className="mx-auto mt-6 max-w-[470px] text-center text-[11px] font-semibold leading-[1.2] text-white/72">Your details are safe with us. We&apos;ll only contact you about your enquiry. No spam. Unsubscribe any time.</p>
        </form>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#102877] px-6 py-24 text-center text-white">
      <div className="absolute bottom-[-120px] left-[-70px] h-[330px] w-[330px] rounded-full bg-white/6" />
      <div className="relative mx-auto max-w-[900px]">
        <h2 className="text-[38px] font-black leading-[1.12] tracking-[0] md:text-[58px]">
          Start Your Child&apos;s Learning Journey.
          <br />
          <span className="text-[#F98925]">Free Trial Per Subject.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[620px] text-[14px] font-medium leading-[1.6] text-white/76">
          No payment details required. No lock-in. Book a free online tutoring session with a matched expert tutor.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="inline-flex h-[54px] items-center gap-2 rounded-[18px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
            Request a Free Trial <ArrowRightIcon />
          </a>
          <a className="inline-flex h-[54px] items-center rounded-[18px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="#courses">See all courses</a>
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

function LeftHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-left">
      <span className="inline-flex items-center gap-2 rounded-full bg-[#fff1ef] px-4 py-2 text-[11px] font-black text-[#ff5f52]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f52]" />
        {eyebrow}
      </span>
      <h2 className="mt-5 max-w-[850px] text-[32px] font-black leading-[1.16] tracking-[0] text-[#102877] md:text-[48px]">{title}</h2>
    </div>
  );
}

function CenteredHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
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

function FeatureCard({ card }: { card: (typeof platformCards)[number] }) {
  const isDualCamera = card.icon === "dual-camera.png";

  return (
    <article className="rounded-[14px] bg-white p-7 shadow-[0_12px_30px_rgba(18,35,99,0.05)]">
      <Image src={`/assets/images/${card.icon}`} alt="" width={isDualCamera ? 58 : 44} height={isDualCamera ? 58 : 44} className={`${isDualCamera ? "h-[58px] w-[58px]" : "h-11 w-11"} object-contain`} />
      <h3 className="mt-5 text-[18px] font-black text-[#102877]">{card.title}</h3>
      <p className="mt-3 text-[13px] font-semibold leading-[1.55] text-[#5f6689]">{card.text}</p>
      <span className="mt-5 inline-flex rounded-full bg-[#fff1ef] px-3 py-1.5 text-[10px] font-black text-[#F98925]">Signature feature</span>
    </article>
  );
}

function MiniIcon({ index }: { index: number }) {
  return (
    <svg className="h-9 w-9" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      {index === 0 ? (
        <>
          <path d="M7.5 25.2h21l-2 3.2h-17z" fill="#d8e6ff" />
          <path d="M9 9.2h18v15H9z" fill="#f7fbff" stroke="#102877" strokeLinejoin="round" strokeWidth="1.9" />
          <path d="M12 13.5h4.2M12 17h6.8M12 20.5h4.8" stroke="#7692ca" strokeLinecap="round" strokeWidth="1.6" />
          <path d="M20.8 14.6h5.1v8.8h-5.1z" fill="#F98925" stroke="#102877" strokeLinejoin="round" strokeWidth="1.4" />
          <path d="M22.2 17.1h2.4M22.2 19.5h2.4" stroke="#fff7e6" strokeLinecap="round" strokeWidth="1.2" />
          <path d="M7 28.4h22" stroke="#102877" strokeLinecap="round" strokeWidth="2" />
        </>
      ) : index === 1 ? (
        <>
          <path d="M18 6.4c-4.3 0-7.8 3.3-7.8 7.4 0 2.9 1.5 5 3.8 6.3v2.7h8v-2.7c2.3-1.3 3.8-3.4 3.8-6.3 0-4.1-3.5-7.4-7.8-7.4Z" fill="#eafff1" stroke="#102877" strokeLinejoin="round" strokeWidth="1.9" />
          <path d="M14.4 25.2h7.2M15.5 28h5" stroke="#102877" strokeLinecap="round" strokeWidth="1.9" />
          <path d="m14.6 14.8 3.1 3.1 4.8-6.7" stroke="#20b455" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
          <path d="M10 10.8 7.7 9.5M26 10.8l2.3-1.3M18 3.8V2" stroke="#f6ca00" strokeLinecap="round" strokeWidth="1.8" />
        </>
      ) : index === 2 ? (
        <>
          <path d="M10 5.4h16v25H10z" fill="#effbff" stroke="#102877" strokeLinejoin="round" strokeWidth="1.9" />
          <path d="M13.4 10.2h3.8M19.4 10.2h3.2M13.4 15.2h9.2M13.4 24.8h8" stroke="#7692ca" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M14.2 18.8 12.4 21l1.8 2.2M21.8 18.8l1.8 2.2-1.8 2.2M19.2 18.2l-2.4 6.6" stroke="#05B4BB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
          <path d="M14.4 5.4V3.2M21.6 5.4V3.2" stroke="#102877" strokeLinecap="round" strokeWidth="1.8" />
          <path d="M9.4 29.6h17.2" stroke="#102877" strokeLinecap="round" strokeWidth="1.9" />
        </>
      ) : (
        <>
          <path d="M17 5.7c-6.8 0-11.8 4.5-11.8 10.7 0 5.8 4.4 10.1 10.5 10.1h1.6c1 0 1.7.6 1.7 1.5 0 1 .7 1.7 1.7 1.5 4.9-.8 8.1-5.2 8.1-11.2 0-7.4-4.7-12.6-11.8-12.6Z" fill="#fff8db" stroke="#102877" strokeLinejoin="round" strokeWidth="1.9" />
          <circle cx="11.6" cy="15" r="2" fill="#F98925" />
          <circle cx="16.2" cy="11.9" r="2" fill="#20b455" />
          <circle cx="21.2" cy="14.6" r="2" fill="#05B4BB" />
          <path d="M13.8 23c2.1-.1 3.7-1.1 4.5-2.8" stroke="#102877" strokeLinecap="round" strokeWidth="2" />
          <path d="M24.7 8.7c2.5 1.8 4 4.8 4 8.4" stroke="#f6ca00" strokeLinecap="round" strokeWidth="1.7" />
        </>
      )}
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
    </svg>
  );
}

function ArrowRightSmallIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.5v13l10-6.5z" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg className="h-6 w-6 text-[#f6ca00]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 10h15v10h-15zM3.5 7h17v3h-17z" fill="currentColor" />
      <path d="M12 7v13" stroke="#102877" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M12 7c-3.9 0-5.3-1.2-5.3-2.7 0-1.1.8-1.9 1.9-1.9C10.1 2.4 11.3 4.2 12 7ZM12 7c3.9 0 5.3-1.2 5.3-2.7 0-1.1-.8-1.9-1.9-1.9C13.9 2.4 12.7 4.2 12 7Z" fill="currentColor" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" fill="currentColor" />
      <path d="M5.2 9.2h4.1l1.5 2.2-1.1 1.8 2.8 2 .7 3.8M14.5 4.7l-.9 2.5 2.6 1.5h2.8M14.8 12.2l2.1.6 1.1 2.2" stroke="#102877" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="m10 2.2 2.25 4.55 5.02.73-3.63 3.54.86 5-4.5-2.36-4.5 2.36.86-5-3.63-3.54 5.02-.73Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" fill="currentColor" />
      <path d="M5.5 19c.8-4 3.15-6 6.5-6s5.7 2 6.5 6" fill="currentColor" />
    </svg>
  );
}
