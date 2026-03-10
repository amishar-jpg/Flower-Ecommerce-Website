"use client";

import { useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerChild } from "./ScrollReveal";

const flowerImages = [
  "https://images.unsplash.com/photo-1490750967868-88df5691cc78?w=600&q=80",
  "https://images.unsplash.com/photo-1487530811015-780c1dba0ef0?w=600&q=80",
  "https://images.unsplash.com/photo-1455793062861-8e1f6e47b2d0?w=600&q=80",
  "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=600&q=80",
  "https://images.unsplash.com/photo-1531498860502-7c67cf519b9e?w=600&q=80",
  "https://images.unsplash.com/photo-1444930694458-01babf71870c?w=600&q=80",
];

const bgPositions = [
  { top: "0%",   left: "0%",   width: "340px", height: "340px", rotate: "-12deg", opacity: 0.22, scale: 1.15 },
  { top: "0%",   right: "0%",  width: "300px", height: "380px", rotate: "8deg",   opacity: 0.20, scale: 1.1  },
  { bottom: "0%",left: "0%",   width: "280px", height: "300px", rotate: "6deg",   opacity: 0.18, scale: 1.2  },
  { bottom: "0%",right: "0%",  width: "360px", height: "320px", rotate: "-8deg",  opacity: 0.22, scale: 1.1  },
  { top: "30%",  left: "38%",  width: "220px", height: "260px", rotate: "15deg",  opacity: 0.12, scale: 1.0  },
  { top: "10%",  left: "55%",  width: "180px", height: "220px", rotate: "-5deg",  opacity: 0.14, scale: 1.05 },
];

const navLinks = {
  Shop: [
    { label: "All Plants",      href: "/#products" },
    { label: "Flowers",         href: "/#products" },
    { label: "Succulents",      href: "/#products" },
    { label: "Indoor Plants",   href: "/#products" },
    { label: "New Arrivals",    href: "/#products" },
  ],
  Help: [
    { label: "Shipping Info",   href: "#" },
    { label: "Returns",         href: "#" },
    { label: "Plant Care Guide",href: "#" },
    { label: "FAQs",            href: "#" },
    { label: "Contact Us",      href: "#" },
  ],
  Company: [
    { label: "Our Story",       href: "#" },
    { label: "Sustainability",  href: "#" },
    { label: "Press",           href: "#" },
    { label: "Careers",         href: "#" },
    { label: "Blog",            href: "#" },
  ],
};

function SproutIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="footerGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M18 38 C18 38 18 22 18 16"
        stroke="#22C55E"
        strokeWidth="1.8"
        strokeLinecap="round"
        filter="url(#footerGlow)"
      />
      <path
        d="M18 26 C18 26 10 24 8 17 C8 17 14 13 20 17 C22 18.5 22 22 18 26Z"
        stroke="#22C55E"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
        filter="url(#footerGlow)"
      />
      <path
        d="M18 20 C18 20 26 17 28 10 C28 10 22 6 16 11 C14 12.8 14 17 18 20Z"
        stroke="#22C55E"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
        filter="url(#footerGlow)"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.16 1.22-5.16s-.31-.62-.31-1.55c0-1.45.84-2.54 1.89-2.54.89 0 1.32.67 1.32 1.48 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.09-2.37 3.09-5.17 0-2.14-1.44-3.63-3.5-3.63-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.16.06.24-.06.26-.2.83-.23.94-.04.15-.13.18-.29.11-1.09-.51-1.77-2.1-1.77-3.38 0-2.75 2-5.27 5.77-5.27 3.03 0 5.38 2.16 5.38 5.04 0 3.01-1.89 5.42-4.52 5.42-.88 0-1.71-.46-2-.99l-.54 2.02c-.2.75-.73 1.69-1.08 2.26.81.25 1.67.39 2.56.39 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l16 16M4 20L20 4" />
      <path d="M4 4h4l12 16h-4z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <footer className="relative overflow-hidden bg-[#0b0f0c]">
      {/* ── Flower image collage background ── */}
      {flowerImages.map((src, i) => {
        const pos = bgPositions[i];
        return (
          <div
            key={i}
            className="absolute pointer-events-none select-none"
            style={{
              top:    pos.top,
              left:   pos.left,
              right:  pos.right,
              bottom: pos.bottom,
              width:  pos.width,
              height: pos.height,
              transform: `rotate(${pos.rotate}) scale(${pos.scale})`,
              opacity: pos.opacity,
              zIndex: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: "saturate(1.4) contrast(1.05)" }}
            />
          </div>
        );
      })}

      {/* ── Multi-layer gradient overlays ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,197,94,0.07) 0%, transparent 70%), " +
            "linear-gradient(to bottom, rgba(11,15,12,0.72) 0%, rgba(11,15,12,0.55) 40%, rgba(11,15,12,0.82) 100%)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(11,15,12,0.88) 0%, transparent 35%, transparent 65%, rgba(11,15,12,0.88) 100%)",
          zIndex: 2,
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Brand hero strip ── */}
        <ScrollReveal variant="zoomIn" delay={0.1} duration={0.7}>
          <div className="pt-20 pb-14 border-b border-white/10 flex flex-col items-center text-center gap-4">
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-1">
              <SproutIcon />
              <span
                className="font-playfair text-white text-3xl tracking-[0.18em] font-normal"
                style={{ textShadow: "0 0 28px rgba(34,197,94,0.35)" }}
              >
                Florique
              </span>
            </div>
            {/* Tagline */}
            <p className="text-white/50 text-sm tracking-widest uppercase font-light max-w-xs">
              Where nature meets elegance
            </p>
            {/* Decorative line */}
            <div className="flex items-center gap-4 mt-2">
              <div className="h-px w-16 bg-linear-to-r from-transparent to-green-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
              <div className="h-px w-16 bg-linear-to-l from-transparent to-green-500/50" />
            </div>
          </div>
        </ScrollReveal>

        {/* ── Four-column grid ── */}
        <StaggerContainer
          className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          stagger={0.12}
          delay={0.05}
          margin="-60px 0px"
        >
          {/* Column 1 — About */}
          <StaggerChild variant="fadeUp" duration={0.6}>
            <h3 className="font-playfair text-white text-lg mb-5 italic">About Florique</h3>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              We curate rare, sustainably grown plants and flowers, handpicked from growers who share our passion for living beauty.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: InstagramIcon, label: "Instagram" },
                { Icon: PinterestIcon, label: "Pinterest" },
                { Icon: FacebookIcon,  label: "Facebook"  },
                { Icon: TwitterIcon,   label: "X"         },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/50 hover:border-green-500/60 hover:text-green-400 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </StaggerChild>

          {/* Columns 2-4 — Shop / Help / Company */}
          {Object.entries(navLinks).map(([heading, links]) => (
            <StaggerChild key={heading} variant="fadeUp" duration={0.6}>
              <h3 className="font-playfair text-white text-lg mb-5 italic">{heading}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/45 text-sm hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="block w-0 h-px bg-green-500/70 group-hover:w-3 transition-all duration-200" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </StaggerChild>
          ))}

          {/* Column 4 — Newsletter */}
          <StaggerChild variant="fadeUp" duration={0.6}>
            <h3 className="font-playfair text-white text-lg mb-5 italic">Stay in Bloom</h3>
            <p className="text-white/45 text-sm leading-relaxed mb-5">
              Seasonal arrivals, plant care tips, and exclusive offers — delivered to your inbox.
            </p>
            {subscribed ? (
              <div className="py-4 px-5 border border-green-500/40 bg-green-950/30 text-green-400 text-sm text-center">
                You&rsquo;re on the list. Thank you!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-white/5 border border-white/15 text-white/80 placeholder-white/25 text-sm px-4 py-3 outline-none focus:border-green-500/60 transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 text-white text-sm tracking-widest uppercase px-4 py-3 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            )}
          </StaggerChild>
        </StaggerContainer>

        {/* ── Bottom bar ── */}
        <ScrollReveal variant="fadeIn" delay={0.1} duration={0.6}>
          <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs tracking-wide">
              &copy; {new Date().getFullYear()} Florique. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/30 text-xs hover:text-white/60 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
