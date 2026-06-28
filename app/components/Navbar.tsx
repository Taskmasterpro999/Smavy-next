"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MenuName = "why" | "courses" | "resources" | "part" | null;

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuName>(null);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = (menu: MenuName) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  useEffect(() => {
    if (!openMenu) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    };

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnOutsideClick);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [openMenu]);

  const closeMobileMenu = () => {
    setOpenMenu(null);
    const mobileToggle = document.getElementById("mobile-nav-toggle") as HTMLInputElement | null;
    if (mobileToggle) {
      mobileToggle.checked = false;
    }
  };

  return (
    <header ref={navRef} className="sticky top-0 z-50 w-full bg-white text-white">
      <div className="mx-auto max-w-[1440px] border-x border-[#d8d8d8] bg-[#102877]">
        <input id="mobile-nav-toggle" type="checkbox" className="peer sr-only" aria-label="Toggle mobile navigation" />
        <nav className="relative flex h-[58px] items-center justify-between px-4 sm:px-6 lg:px-[78px]">
          {/* Logo */}
          <Link href="/" className="smavy-logo-shine flex items-center" onClick={closeMobileMenu}>
            <Image
              src="/assets/images/smavy-logo.png"
              alt="Smavy Academy"
              width={166}
              height={42}
              className="h-[32px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-[25px] text-[13px] font-bold leading-none tracking-[-0.01em] lg:flex">
            {/* Why Smavy */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("why")}
            >
              <Link
                href="/why-smavy"
                className={`flex items-center gap-[7px] transition ${
                  openMenu === "why" ? "text-[#F98925]" : "text-white"
                }`}
              >
                Why Smavy
                <SmallArrow active={openMenu === "why"} />
              </Link>

              {openMenu === "why" && <WhySmavyDropdown onClose={() => setOpenMenu(null)} />}
            </div>

            {/* Courses */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("courses")}
            >
              <button
                onClick={() => toggleMenu("courses")}
                className={`flex items-center gap-[7px] transition ${
                  openMenu === "courses" ? "text-[#F98925]" : "text-white"
                }`}
              >
                Courses
                <SmallArrow active={openMenu === "courses"} />
              </button>

              {openMenu === "courses" && <CoursesMegaMenu onClose={() => setOpenMenu(null)} />}
            </div>

            {/* Resources */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("resources")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                onClick={() => toggleMenu("resources")}
                className={`flex items-center gap-[7px] transition ${
                  openMenu === "resources" ? "text-[#F98925]" : "text-white"
                }`}
              >
                Resources
                <SmallArrow active={openMenu === "resources"} />
              </button>

              {openMenu === "resources" && <ResourcesDropdown />}
            </div>

            <Link href="/pricing" className="transition hover:text-[#F98925]">
              Pricing
            </Link>

            {/* Be Part */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("part")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                onClick={() => toggleMenu("part")}
                className={`flex items-center gap-[7px] transition ${
                  openMenu === "part" ? "text-[#F98925]" : "text-white"
                }`}
              >
                Be Part of Smavy
                <SmallArrow active={openMenu === "part"} />
              </button>

              {openMenu === "part" && <BePartDropdown />}
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden items-center gap-[22px] lg:flex">
            <a
            href="#login"
            className="flex items-center gap-[8px] text-[13px] font-bold leading-none tracking-[-0.01em] text-white"
            >
            <svg
              aria-hidden="true"
              className="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
              <path
                d="M4.5 20c1.4-4 4-6 7.5-6s6.1 2 7.5 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
            Login to Smavy Platform
            </a>

            <a
              href="#trial"
              className="rounded-[18px] bg-[#F98925] px-[22px] py-[10px] text-[13px] font-bold leading-none tracking-[-0.01em] text-white shadow-sm transition hover:bg-[#ff8c35]"
            >
              Book Free Trial
            </a>
          </div>

          {/* Mobile Button */}
          <label
            htmlFor="mobile-nav-toggle"
            aria-label="Open navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white lg:hidden"
          >
            <span className="mobile-menu-icon">
              <MenuIcon />
            </span>
            <span className="mobile-close-icon hidden">
              <CloseIcon />
            </span>
          </label>
        </nav>
        <MobileNavPanel onClose={closeMobileMenu} />
        {/* Bottom multi-color line */}
        <div className="grid h-[4px] grid-cols-4">
          <div className="bg-[#F98925]" />
          <div className="bg-[#20b455]" />
          <div className="bg-[#00b8d8]" />
          <div className="bg-[#f6ca00]" />
        </div>
      </div>
    </header>
  );
}

const mobileCourseGroups = [
  {
    title: "Australia",
    links: [
      ["English", "/courses/australia/english"],
      ["Maths", "/courses/australia/maths"],
      ["Science", "/courses/australia/science"],
      ["General Ability", "/courses/australia/general-ability"],
      ["Exam Preparation", "/courses/australia/exam-preparation"],
    ],
  },
  {
    title: "United Kingdom",
    links: [
      ["English", "/courses/united-kingdom/english"],
      ["Maths", "/courses/united-kingdom/maths"],
      ["Science", "/courses/united-kingdom/science"],
      ["General Ability", "/courses/united-kingdom/general-ability"],
      ["Exam Preparation", "/courses/united-kingdom/exam-preparation"],
    ],
  },
  {
    title: "United States",
    links: [
      ["English", "/courses/united-states/english"],
      ["Maths", "/courses/united-states/maths"],
      ["Science", "/courses/united-states/science"],
      ["General Ability", "/courses/united-states/general-ability"],
      ["Exam Preparation", "/courses/united-states/exam-preparation"],
    ],
  },
  {
    title: "IB Curriculum",
    links: [
      ["English", "/courses/ib-curriculum/english"],
      ["Maths", "/courses/ib-curriculum/maths"],
      ["Science", "/courses/ib-curriculum/science"],
    ],
  },
];

function MobileNavPanel({ onClose }: { onClose: () => void }) {
  return (
    <div id="mobile-navigation" className="mobile-nav-panel border-t border-white/12 bg-[#102877] px-4 pb-6 pt-4 text-white shadow-[0_18px_45px_rgba(0,0,0,0.22)] lg:hidden">
      <div className="grid gap-4">
        <Link href="/why-smavy" onClick={onClose} className="rounded-[14px] bg-white/10 px-4 py-3 text-[14px] font-bold">
          Why Smavy
        </Link>
        <Link href="/pricing" onClick={onClose} className="rounded-[14px] bg-white/10 px-4 py-3 text-[14px] font-bold">
          Pricing
        </Link>
        <Link href="/courses/coding-robotics-ai" onClick={onClose} className="rounded-[14px] bg-white/10 px-4 py-3 text-[14px] font-bold">
          Coding, Robotics & AI
        </Link>
      </div>

      <div className="mt-5 space-y-3">
        {mobileCourseGroups.map((group) => (
          <MobileCourseSection key={group.title} title={group.title} links={group.links} onClose={onClose} />
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a href="#login" onClick={onClose} className="inline-flex min-h-12 items-center justify-center rounded-[16px] border border-white/20 px-4 text-center text-[13px] font-bold text-white">
          Login to Smavy Platform
        </a>
        <a href="#trial" onClick={onClose} className="inline-flex min-h-12 items-center justify-center rounded-[16px] bg-[#F98925] px-4 text-center text-[13px] font-bold text-white">
          Book Free Trial
        </a>
      </div>
    </div>
  );
}

function MobileCourseSection({
  title,
  links,
  onClose,
}: {
  title: string;
  links: string[][];
  onClose: () => void;
}) {
  return (
    <details className="rounded-[14px] bg-white/10 px-4 py-3">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14px] font-bold">
        {title}
        <span className="smavy-chevron text-[#F98925]">v</span>
      </summary>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {links.map(([label, href]) => (
          <Link
            key={`${title}-${label}`}
            href={href}
            onClick={onClose}
            className="rounded-[10px] bg-white/10 px-3 py-2 text-[12px] font-semibold text-white/82"
          >
            {label}
          </Link>
        ))}
      </div>
    </details>
  );
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m7 7 10 10M17 7 7 17" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
    </svg>
  );
}


function SmallArrow({ active }: { active: boolean }) {
  return (
    <span
      className={`smavy-chevron mt-[1px] leading-none transition ${
        active ? "rotate-180 text-[#F98925]" : "text-white"
      }`}
    >
      ▼
    </span>
  );
}

/* ---------------- Why Smavy Dropdown ---------------- */

function WhySmavyDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute left-[-18px] top-[37px] w-[238px] rounded-b-[18px] bg-white px-[22px] py-[17px] text-black shadow-[0_14px_35px_rgba(0,0,0,0.12)]">
      <SmallMenuItem
        iconColor="#f6ca00"
        icon="★"
        title="Why Choose Smavy"
        subtitle="What makes us different"
        href="/why-smavy#why-choose"
        onSelect={onClose}
      />
      <SmallMenuItem
        iconColor="#F98925"
        icon="✣"
        title="What Parents Say"
        subtitle="Verified reviews"
        href="/why-smavy#parents"
        onSelect={onClose}
      />
      <SmallMenuItem
        iconColor="#102877"
        icon="⌘"
        title="How It Works"
        subtitle="6 simple steps"
        href="/why-smavy#how-it-works"
        onSelect={onClose}
      />
    </div>
  );
}

/* ---------------- Resources Dropdown ---------------- */

function ResourcesDropdown() {
  return (
    <div className="absolute left-[-18px] top-[37px] w-[238px] rounded-b-[18px] bg-white px-[22px] py-[17px] text-black shadow-[0_14px_35px_rgba(0,0,0,0.12)]">
      <SmallMenuItem
        iconColor="#f6ca00"
        icon="▣"
        title="Blog"
        subtitle="Tutoring tips & study guides"
      />
      <SmallMenuItem
        iconColor="#F98925"
        icon="▰"
        title="Free Trial Session"
        subtitle="Book your first session"
      />
      <SmallMenuItem
        iconColor="#20b455"
        icon="●"
        title="Contact Us"
        subtitle="Get in Touch"
      />
    </div>
  );
}

/* ---------------- Be Part Dropdown ---------------- */

function BePartDropdown() {
  return (
    <div className="absolute left-[-45px] top-[37px] w-[292px] rounded-b-[18px] bg-white px-[22px] py-[17px] text-black shadow-[0_14px_35px_rgba(0,0,0,0.12)]">
      <SmallMenuItem
        iconColor="#f6ca00"
        icon="▰"
        title="Become a Tutor"
        subtitle="Teach 1:1 with Smavy"
      />
      <SmallMenuItem
        iconColor="#F98925"
        icon="■"
        title="Join Operations & Sales"
        subtitle="Office & Learning Counsellor Roles"
      />
    </div>
  );
}

/* ---------------- Small Dropdown Item ---------------- */

function SmallMenuItem({
  iconColor,
  title,
  subtitle,
  href = "#",
  onSelect,
}: {
  icon: string;
  iconColor: string;
  title: string;
  subtitle: string;
  href?: string;
  onSelect?: () => void;
}) {
  return (
    <Link href={href} onClick={onSelect} className="mb-[15px] flex items-start gap-[13px] last:mb-0">
      <span
        className="mt-[1px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[7px] text-[9px] font-black leading-none text-white shadow-[0_6px_14px_rgba(16,40,119,0.12)]"
        style={{ backgroundColor: iconColor }}
      >
        {title.charAt(0)}
      </span>

      <span>
        <span className="block text-[13px] font-bold leading-[120%] tracking-[-0.01em] text-[#1d1d1f]">
          {title}
        </span>
        <span className="mt-[3px] block text-[11px] font-medium leading-[120%] tracking-[-0.01em] text-[#a0a0a0]">
          {subtitle}
        </span>
      </span>
    </Link>
  );
}

/* ---------------- Courses Mega Menu ---------------- */

function CoursesMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute left-1/2 top-[37px] w-[1320px] -translate-x-1/2 rounded-b-[18px] bg-white px-[28px] pb-[20px] pt-[22px] text-black shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
      <div className="grid grid-cols-5 gap-[30px]">
        <CourseColumn
          title="🇦🇺 Australia"
          rows={[
            ["Academic Courses", ""],
            ["English", "Year 1-12", "/courses/australia/english"],
            ["Maths", "Year 1-12", "/courses/australia/maths"],
            ["Science", "Year 1-12", "/courses/australia/science"],
            ["General Ability", "Year 3-8", "/courses/australia/general-ability"],
            ["Exam Preparation", "", "/courses/australia/exam-preparation"],
            ["NAPLAN", "Year 3, 5, 7, 9", "/courses/australia/exam-preparation#naplan"],
            ["Selective Entry", "NSW · VIC · QLD · WA", "/courses/australia/exam-preparation#selective-entry"],
            ["Scholarship", "EDUTEST · ACER · AAS", "/courses/australia/exam-preparation#scholarship"],
            ["ICAS", "Year 2-10", "/courses/australia/exam-preparation#icas"],
          ]}
          link="View all AU Exam Prep"
          onClose={onClose}
        />

        <CourseColumn
          title="🇬🇧 United Kingdom"
          rows={[
            ["Academic Courses", ""],
            ["English", "KS1-A-Level", "/courses/united-kingdom/english"],
            ["Math", "KS1-A-Level", "/courses/united-kingdom/maths"],
            ["Science", "KS1-A-Level", "/courses/united-kingdom/science"],
            ["General Ability", "Year 3-8", "/courses/united-kingdom/general-ability"],
            ["Exam Preparation", "", "/courses/united-kingdom/exam-preparation"],
            ["11-Plus", "GL & CEM", "/courses/united-kingdom/exam-preparation#11-plus"],
            ["GCSE", "Year 10-11", "/courses/united-kingdom/exam-preparation#gcse"],
            ["A-Level", "Year 12-13", "/courses/united-kingdom/exam-preparation#a-level"],
            ["ICAS", "Year 2-10"],
          ]}
          link="View all UK Exam Prep"
          onClose={onClose}
        />

        <CourseColumn
          title="🇺🇸 United States"
          rows={[
            ["Academic Courses", ""],
            ["English", "K-Grade 12", "/courses/united-states/english"],
            ["Math", "K-Grade 12", "/courses/united-states/maths"],
            ["Science", "K-Grade 12", "/courses/united-states/science"],
            ["General Ability", "Grade 3-8", "/courses/united-states/general-ability"],
            ["Exam Preparation", "", "/courses/united-states/exam-preparation"],
            ["SAT", "Grade 10-12", "/courses/united-states/exam-preparation#sat"],
            ["ACT", "Grade 10-12", "/courses/united-states/exam-preparation#act"],
            ["AP Subjects", "Grade 10-12", "/courses/united-states/exam-preparation#ap-subjects"],
            ["ICAS", "Year 2-10"],
          ]}
          link="View all US Exam Prep"
          onClose={onClose}
        />

        <CourseColumn
          title="🌐 IB Curriculum"
          rows={[
            ["Academic Courses", ""],
            ["English", "PYP - MYP - DP", "/courses/ib-curriculum/english"],
            ["Math", "PYP - MYP - DP", "/courses/ib-curriculum/maths"],
            ["Science", "PYP - MYP - DP", "/courses/ib-curriculum/science"],
            ["General Ability", "Grade 3-8"],
            ["Creative & Non-Academic", ""],
            ["Creative Writing", "Age 8+"],
            ["Public Speaking", "Age 8+"],
            ["Chess", "Age 6+"],
            ["Vedic Maths", "Age 8+"],
          ]}
          link="Signature Feature"
          onClose={onClose}
        />

        <CourseColumn
          title="💻 Coding & AI"
          rows={[
            ["Foundation", ""],
            ["Scratch", "Age 8-10", "/courses/coding-robotics-ai#scratch"],
            ["Codey Robot", "Age 8-10", "/courses/coding-robotics-ai#codey-robot"],
            ["Robotics", ""],
            ["Ground Vehicle", "Age 10-12", "/courses/coding-robotics-ai#ground-vehicle"],
            ["Arduino", "Age 10-13", "/courses/coding-robotics-ai#automate-with-arduino"],
            ["Advanced", ""],
            ["Python", "Age 11+", "/courses/coding-robotics-ai#python"],
            ["Raspberry Pi & IoT", "Age 12+", "/courses/coding-robotics-ai#raspberry-pi-iot"],
            ["Data Science & ML", "Age 13+", "/courses/coding-robotics-ai#data-science-machine-learning"],
          ]}
          link="View all coding courses"
          onClose={onClose}
        />
      </div>

      <div className="mt-[22px] flex h-[43px] items-center rounded-[13px] bg-[#f4f6ff] px-[19px] text-[11px] font-medium leading-none tracking-[-0.01em] text-[#555]">
        <span className="mr-[8px] text-[13px]">◎</span>
        <span className="font-bold text-[#008b93]">
          Academic tutoring available worldwide
        </span>
        <span className="ml-[6px]">
          - concept explanation & homework assistance for any curriculum, any country.
        </span>
      </div>
    </div>
  );
}

function CourseColumn({
  title,
  rows,
  link,
  onClose,
}: {
  title: string;
  rows: string[][];
  link: string;
  onClose: () => void;
}) {
  const heading = getCourseHeading(title);

  return (
    <div>
      <h3 className="mb-[14px] flex items-center gap-2 border-b border-[#e8e8ef] pb-[12px] text-[12px] font-bold leading-none tracking-[-0.01em] text-[#102877]">
        {heading.flag ? (
          <Image src={heading.flag} alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
        ) : (
          <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#102877] text-[8px] font-black text-white">
            {heading.badge}
          </span>
        )}
        {heading.label}
      </h3>

      <div className="space-y-[8px]">
        {rows.map(([name, value, href], index) => {
          const isHeading =
            name === "Academic Courses" ||
            name === "Exam Preparation" ||
            name === "Foundation" ||
            name === "Robotics" ||
            name === "Advanced" ||
            name === "Creative & Non-Academic";

          const headingColor =
            name === "Advanced"
              ? "text-[#e53935]"
              : name === "Foundation" || name === "Robotics"
              ? "text-[#20b455]"
              : "text-[#009f8f]";

          return (
            href ? (
              <a
                key={`${name}-${index}`}
                href={href}
                onClick={onClose}
                className={`flex cursor-pointer items-center justify-between gap-[10px] rounded-[6px] py-[2px] text-[12px] font-bold leading-none tracking-[-0.01em] transition hover:text-[#F98925] ${
                  isHeading ? `pt-[3px] ${headingColor}` : "text-[#202124]"
                }`}
              >
                <span>{name}</span>
                {value && (
                  <span className="text-right text-[10.5px] font-medium text-[#a6a6a6]">
                    {value}
                  </span>
                )}
              </a>
            ) : (
              <div
                key={`${name}-${index}`}
                className={`flex items-center justify-between gap-[10px] text-[12px] leading-none tracking-[-0.01em] ${
                  isHeading
                    ? `pt-[3px] font-bold ${headingColor}`
                    : "font-bold text-[#202124]"
                }`}
              >
                <span>{name}</span>
                {value && (
                  <span className="text-right text-[10.5px] font-medium text-[#a6a6a6]">
                    {value}
                  </span>
                )}
              </div>
            )
          );
        })}
      </div>

      <a
        href="#"
        className="mt-[20px] block text-[11.5px] font-bold leading-none tracking-[-0.01em] text-[#F98925]"
      >
        {link} <span className="ml-[6px]">➜</span>
      </a>
    </div>
  );
}

function getCourseHeading(title: string) {
  if (title.includes("Australia")) {
    return { label: "Australia", flag: "/assets/images/flags/flag-australia.svg", badge: "" };
  }
  if (title.includes("United Kingdom")) {
    return { label: "United Kingdom", flag: "/assets/images/flags/flag-uk.svg", badge: "" };
  }
  if (title.includes("United States")) {
    return { label: "United States", flag: "/assets/images/flags/flag-us.svg", badge: "" };
  }
  if (title.includes("IB Curriculum")) {
    return { label: "IB Curriculum", flag: "/assets/images/flags/flag-ib.svg", badge: "" };
  }
  return { label: "Coding & AI", flag: "", badge: "AI" };
}
