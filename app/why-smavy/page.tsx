import Image from "next/image";
import Navbar from "../components/Navbar";

const familyCards = [
  {
    icon: "family-students.png",
    title: "For Students",
    text: "Stay savvy and happy. Advance in your school work. Develop new talents. Build confidence through live sessions with a tutor who gets you.",
  },
  {
    icon: "family-parents.png",
    title: "For Parents",
    text: "Tutor and student unite and grow together in real time. Equations, diagrams, essays, and saved notes update automatically after each session.",
  },
  {
    icon: "family-tutors.png",
    title: "For Tutors",
    text: "Driven by a tireless passion to make a difference. Tutors are screened, trained in online teaching techniques, and given the flexibility to shine.",
  },
];

const classroomCards = [
  {
    icon: "classroom-curriculum.png",
    title: "Personalised Curriculum",
    text: "Every lesson is customised to your child's learning style. Learnings are highly transferable from tutor to school, built on accredited curriculum standards.",
  },
  {
    icon: "classroom-continuity.png",
    title: "Tutor Continuity Guaranteed",
    text: "Tutors are not switched to avoid disrupting your child's learning rhythm. Once you've built rapport, your child stays with the same tutor even when they advance to the next grade.",
  },
  {
    icon: "classroom-parent.png",
    title: "Parent Visibility and Control",
    text: "Receive regular tutor reports. Schedule meetings at your convenience. Access your child's progress dashboard anytime. Watch saved session recordings to see them in action.",
  },
  {
    icon: "classroom-science.png",
    title: "Proven Learning Science",
    text: "Our tutors are trained in academically proven techniques - Spaced Repetition and Active Recall - that keep students engaged and genuinely retaining what they learn.",
  },
  {
    icon: "classroom-camera.png",
    title: "Dual Camera Classroom",
    text: "Our unique dual camera setup lets tutors see both your child's face and their notebook or workbench simultaneously - delivering the real-time feedback of an in-person session, online.",
  },
  {
    icon: "classroom-access.png",
    title: "Accessible Everywhere",
    text: "Join from any device - our platform works on desktop, tablet and mobile. The Smavy mobile app gives students and parents access to sessions, recordings and reports on the go.",
  },
];

const principles = [
  ["Caring", "Even with distance, we offer every student care through our actions and words - helping mould them into empathetic, confident adults who know they are supported.", "principle-caring.png"],
  ["Nurturing", "We value the vital role a teacher plays during a child's formative years. It's our duty to provide every student a safe space to continuously learn, grow and make mistakes without fear.", "principle-nurturing.png"],
  ["Personal Connection", "Children learn from people they genuinely connect with. Building a real relationship with each student makes learning more enjoyable and gives them the confidence to advance further.", "principle-connection.png"],
  ["Trust", "We give our tutors the flexibility to explore their craft and trust their ability to impart knowledge. Parents can trust that every tutor on Smavy has been screened and trained to produce great results.", "principle-trust.png"],
  ["Savviness", "Our tutors are experts in their fields. Before joining the team they are screened, tested and trained to become effective online educators - not just subject matter experts.", "principle-savviness.png"],
  ["World Class Experience", "As we expand globally, we hold our teaching to the highest standards - always investing in world-class materials, techniques and technology that keep Smavy at the forefront of online education.", "principle-world.png"],
];

const logoValues = [
  ["Understand", "Learn and understand with energy and excitement. Curiosity is the beginning of every great education.", "logo-understand.png"],
  ["Retain", "Retain what you learn, and develop awareness of how, when and where to apply it in the real world.", "logo-retain.png"],
  ["Security", "Security and assurance of a world class education - every student, every session, every year.", "logo-security.png"],
  ["Apply & Achieve", "Right application of learning symbolises success - securing the future of every child who learns with Smavy.", "logo-achieve.png"],
];

const testimonials = [
  {
    name: "Bin Thomas",
    role: "Parent - UK 🇬🇧",
    avatar: "testimonial-bin.png",
    rating: 5,
    text: "I have great experience with Smavy. I am from UK and Shrikan contacted me to offer tuition for my son and explained their offer. Initially, I took a trial lesson, which was very impressive and my son was very satisfied with the tutor.",
  },
  {
    name: "Smita Joshi",
    role: "Parent - Australia 🇦🇺",
    avatar: "testimonial-smita.png",
    rating: 5,
    text: "Excellent experience with Smavy. They helped identify the right tutor for my son in English, Maths, and Science. The ongoing tutor reports keep us informed and confident.",
  },
  {
    name: "Kavitha Rathinasamy",
    role: "Parent - India 🇮🇳",
    avatar: "testimonial-kavitha.png",
    rating: 4,
    text: "My son's English and Maths skills have improved a lot since starting with Smavy. The sessions are thoughtful and the progress is visible.",
  },
];

const footerLinks = [
  {
    title: "Academic Courses",
    links: ["English Tutoring", "Maths Tutoring", "Science Tutoring", "General Ability", "Exam Preparation"],
  },
  {
    title: "Coding, Robotics and AI",
    links: ["Coding with Scratch", "Automation Ground Vehicle", "Arduino with Sensors", "Python Programming", "Raspberry Pi and IoT"],
  },
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
  {
    title: "About",
    links: ["Why Choose Smavy", "How It Works", "Pricing", "Become a Tutor", "Jobs Operations and Sales"],
  },
];

const contactLinks = [
  "✉️ hello@smavy.com",
  "💬 WhatsApp — wa.link/hybwn0",
  "🇦🇺 +61 480 045 848",
  "🇮🇳 +91 76958 53385",
  "🇬🇧 UK: +44 20 3349 5911",
  "🇺🇸 US: +1 214 308 0807",
];

export default function WhySmavyPage() {
  return (
    <main className="min-h-screen bg-white text-[#102877]">
      <Navbar />
      <div className="mx-auto max-w-[1440px] overflow-hidden border-x border-[#d8d8d8]">
        <HeroSection />
        <FamilySection />
        <ClassroomSection />
        <PrinciplesSection />
        <LogoSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="bg-[#102877] text-white">
      <div className="mx-auto grid min-h-[520px] max-w-[1440px] items-center gap-12 px-6 py-16 md:px-14 lg:grid-cols-[1.25fr_0.75fr] lg:px-[96px]">
        <div className="max-w-[760px]">
          <span className="inline-flex rounded-full border border-[#46c7db]/40 bg-[#0a235f] px-5 py-2 text-[12px] font-bold text-[#4dd9eb]">
            Our Purpose - Our Vision - Our Values
          </span>
          <h1 className="mt-7 max-w-[730px] text-[42px] font-bold leading-[1.04] tracking-[0] md:text-[64px]">
            To Secure <span className="text-[#05B4BB]">SUCCESS</span>
            <br />
            in Every Child&apos;s Future
          </h1>
          <p className="mt-6 max-w-[660px] text-[15px] font-medium leading-[1.7] text-white/82 md:text-[17px]">
            The Smavy team are both educators and parents. It&apos;s our mission to make quality,
            innovative education within the reach of more children through personalised 1:1
            learning and affordable pricing.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-[12px] font-bold text-white/72">
            {["Personalised 1:1 learning", "Available worldwide", "Proven learning techniques", "Dual camera classroom"].map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-5">
            <a className="inline-flex items-center gap-2 rounded-[24px] bg-[#F98925] px-10 py-5 text-[16px] font-bold text-white shadow-[0_16px_35px_rgba(0,0,0,0.18)]" href="#trial">
              Book Free Trial <span className="text-[21px] leading-none">→</span>
            </a>
            <a className="inline-flex items-center rounded-[24px] border border-[#F98925] px-10 py-5 text-[16px] font-bold text-[#F98925]" href="#courses">
              View all courses
            </a>
          </div>
        </div>

        <div className="justify-self-center rounded-[34px] bg-white/14 p-7 shadow-[0_24px_70px_rgba(3,12,49,0.24)] backdrop-blur md:w-[390px]">
          <h2 className="flex items-center gap-2 text-[18px] font-bold">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd24a]" />
            Smavy at a glance
          </h2>
          <div className="mt-6 space-y-5 text-[13px] font-semibold">
            {[
              ["Student Worldwide", "3000+"],
              ["Expert tutors", "200+"],
              ["Google rating", "4.8"],
              ["Countries served", "8+"],
              ["Free trial", "1 Per Subject"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-b border-white/12 pb-4 last:border-0 last:pb-0">
                <span className="text-white/62">{label}</span>
                <span className={`flex items-center gap-1 ${label === "Student Worldwide" ? "text-[#05B4BB]" : label === "Free trial" ? "text-[#F98925]" : "text-white"}`}>
                  {value}
                  {label === "Google rating" && <span className="text-[13px] leading-none text-[#ffd24a]">★</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FamilySection() {
  return (
    <section id="why-choose" className="scroll-mt-20 bg-[#f5f7ff] px-6 py-20">
      <SectionHeader eyebrow="Who We Serve" title="Smavy Works for Every Member of Your Family" />
      <div className="mx-auto mt-10 grid max-w-[1220px] gap-8 md:grid-cols-3">
        {familyCards.map((card) => (
          <article key={card.title} className="rounded-[18px] bg-white px-9 py-10 text-center shadow-[0_16px_40px_rgba(19,35,97,0.06)]">
            <SourceIcon name={card.icon} alt="" size={54} />
            <h3 className="mt-5 text-[19px] font-bold text-[#102877]">{card.title}</h3>
            <p className="mt-4 text-[13px] font-medium leading-[1.65] text-[#5f6689]">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClassroomSection() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-[#102877] px-6 py-24 text-white">
      <SectionHeader eyebrow="Our Vision" title="The World's Future Online Classroom" dark />
      <p className="mx-auto mt-5 max-w-[760px] text-center text-[14px] font-medium leading-[1.6] text-white/78">
        Smavy creates classrooms where children are excited to learn, tutors are passionate educators,
        and parents are comfortably involved wherever they are in the world.
      </p>
      <div className="mx-auto mt-12 grid max-w-[1220px] gap-7 md:grid-cols-2 lg:grid-cols-3">
        {classroomCards.map((card) => (
          <article key={card.title} className="rounded-[18px] bg-white/14 p-7 shadow-[0_18px_45px_rgba(2,12,48,0.14)]">
            <SourceIcon name={card.icon} alt="" size={48} align="start" />
            <h3 className="mt-5 text-[18px] font-bold">{card.title}</h3>
            <p className="mt-3 text-[13px] font-medium leading-[1.65] text-white/72">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="bg-[#f5f7ff] px-6 py-24">
      <SectionHeader eyebrow="Our Values" title="The Principles That Shape Everything We Do" />
      <p className="mx-auto mt-4 max-w-[760px] text-center text-[14px] font-medium leading-[1.6] text-[#6d7393]">
        Six guiding principles that shaped Smavy in securing success in your child&apos;s future.
      </p>
      <div className="mx-auto mt-12 grid max-w-[1220px] gap-7 md:grid-cols-2 lg:grid-cols-3">
        {principles.map(([title, text, icon]) => (
          <article key={title} className="rounded-[18px] bg-white p-7 shadow-[0_15px_36px_rgba(19,35,97,0.06)]">
            <SourceIcon name={icon} alt="" size={40} align="start" />
            <h3 className="mt-5 text-[18px] font-bold text-[#102877]">{title}</h3>
            <p className="mt-3 text-[13px] font-medium leading-[1.65] text-[#5f6689]">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function LogoSection() {
  return (
    <section className="bg-[#102877] px-6 py-20 text-white">
      <SectionHeader eyebrow="Our Identity" title="What Our Logo Represents" dark />
      <p className="mx-auto mt-5 max-w-[780px] text-center text-[14px] font-medium leading-[1.6] text-white/78">
        Each element of the Smavy logo represents one of four values that apply to every member of
        the Smavy community.
      </p>
      <div className="mx-auto mt-11 grid max-w-[1220px] gap-7 md:grid-cols-4">
        {logoValues.map(([title, text, icon]) => (
          <article key={title} className="rounded-[18px] bg-white/14 px-7 py-9 text-center">
            <SourceIcon name={icon} alt="" size={42} />
            <h3 className="mt-5 text-[16px] font-bold">{title}</h3>
            <p className="mt-3 text-[12px] font-medium leading-[1.6] text-white/72">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="parents" className="scroll-mt-20 bg-white px-6 py-24">
      <SectionHeader eyebrow="What Parents Say" title="Why Parents Choose Smavy Over Other Platforms" />
      <div className="mx-auto mt-12 grid max-w-[1220px] gap-7 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-[18px] border border-[#edf0f7] bg-white p-7 shadow-[0_14px_34px_rgba(18,35,99,0.05)]">
            <StarRating value={item.rating} />
            <p className="mt-5 text-[13px] font-medium leading-[1.65] text-[#4f5577]">{item.text}</p>
            <div className="mt-6 flex items-center gap-3">
              <SourceIcon name={item.avatar} alt="" size={42} align="start" />
              <span>
                <span className="block text-[13px] font-bold text-[#102877]">{item.name}</span>
                <span className="block text-[11px] font-semibold text-[#9aa0b8]">{item.role}</span>
              </span>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-12 grid max-w-[1220px] gap-9 md:grid-cols-2">
        <Image src="/assets/images/first.png" alt="Online tutor teaching a Smavy class" width={604} height={420} className="h-full w-full rounded-[24px] object-cover" />
        <Image src="/assets/images/second.png" alt="Parent and child celebrating online learning success" width={604} height={420} className="h-full w-full rounded-[24px] object-cover" />
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="trial" className="relative overflow-hidden bg-[#102877] px-6 py-24 text-center text-white">
      <div className="absolute bottom-[-110px] left-[-90px] h-[330px] w-[330px] rounded-full bg-white/6" />
      <div className="absolute right-[20%] top-[-140px] h-[390px] w-[390px] rounded-full bg-white/5" />
      <div className="relative mx-auto max-w-[950px]">
        <h2 className="text-[34px] font-bold leading-[1.16] md:text-[56px]">
          Ready to Secure Your Child&apos;s
          <br />
          <span className="text-[#F98925]">Future? Free Trial Per Subject.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[600px] text-[14px] font-medium leading-[1.6] text-white/80">
          Book a free 1-hour demo session. No payment details. No lock-in. Just great tutoring.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="inline-flex items-center gap-2 rounded-[24px] bg-[#F98925] px-10 py-5 text-[16px] font-bold text-white" href="#trial">
            Request a Free Trial <span className="text-[21px] leading-none">→</span>
          </a>
          <a className="inline-flex items-center rounded-[24px] border border-[#F98925] px-10 py-5 text-[16px] font-bold text-[#F98925]" href="#courses">
            Browse All Courses
          </a>
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
    <footer id="courses" className="bg-[#102877] px-6 pb-10 pt-14 text-white">
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
                {item}
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
                        <Image
                          src={`/assets/images/flags/${link[1]}`}
                          alt=""
                          width={16}
                          height={16}
                          className="h-4 w-4 rounded-full object-contain"
                        />
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

function SectionHeader({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <div className="mx-auto max-w-[780px] text-center">
      <span className={`inline-flex rounded-full px-4 py-2 text-[11px] font-bold ${dark ? "bg-white/10 text-[#ffd24a]" : "bg-[#fff1ef] text-[#F98925]"}`}>
        {eyebrow}
      </span>
      <h2 className={`mt-5 text-[30px] font-bold leading-[1.18] md:text-[44px] ${dark ? "text-white" : "text-[#102877]"}`}>
        {title}
      </h2>
    </div>
  );
}

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex gap-2 text-[22px] leading-none">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= value ? "text-[#ffc400]" : "text-[#fff1c9]"}>
          ★
        </span>
      ))}
    </div>
  );
}

function SourceIcon({ name, alt, size, align = "center" }: { name: string; alt: string; size: number; align?: "center" | "start" }) {
  return (
    <span className={`block ${align === "center" ? "mx-auto" : ""}`} style={{ height: size, width: size }}>
      <Image
        src={`/assets/images/why-smavy-icons/${name}`}
        alt={alt}
        width={size}
        height={size}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
