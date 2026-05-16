import { useState } from "react";

const events = [
  {
    date: "~30 May 2026",
    label: "Fiancé Visa Granted",
    sublabel: "Decision expected",
    category: "visa",
    icon: "✈",
    detail: "Nick gives notice at local register office immediately. Nikki cannot give notice until she's physically in the UK.",
    urgent: false,
  },
  {
    date: "Now → 30 May",
    label: "Nick Gives Notice",
    sublabel: "Register office — get ahead of the 28-day clock",
    category: "marriage",
    icon: "📋",
    detail: "Nick can give notice before Nikki arrives. This doesn't start the 28-day clock — it resets to the later of the two notice dates. But it means one less thing to do on arrival.",
    urgent: true,
  },
  {
    date: "23 June 2026",
    label: "Nikki Arrives in the UK",
    sublabel: "Entry on fiancé visa",
    category: "visa",
    icon: "🇬🇧",
    detail: "Day 1: Register with an E17 GP immediately. Self-refer to Whipps Cross maternity team same week. Bring full US OB transfer-of-care records. Chargeable for NHS at 150% rate until IHS is paid.",
    urgent: true,
  },
  {
    date: "23–24 June 2026",
    label: "Nikki Gives Notice",
    sublabel: "Register office — triggers 28-day clock",
    category: "marriage",
    icon: "📋",
    detail: "Nikki must give notice in person at the register office. This is the date that starts the mandatory 28 clear days. She'll need her passport and fiancé visa documentation.",
    urgent: true,
  },
  {
    date: "23–30 June 2026",
    label: "GP Registration + Whipps Cross Referral",
    sublabel: "NHS maternity pathway begins",
    category: "health",
    icon: "🏥",
    detail: "Register with GP in E17 on arrival. Self-refer to Whipps Cross (020 7767 3348). Request urgent 20-week anomaly scan if not done in the US. Consultant-led care due to advanced maternal age.",
    urgent: true,
  },
  {
    date: "~22 July 2026",
    label: "MARRIAGE",
    sublabel: "28 clear days after Nikki's notice",
    category: "marriage",
    icon: "💍",
    detail: "Earliest legal marriage date after Nikki gives notice on June 23–24. Register office ceremony. Get married as soon as legally possible — every day of delay is a day of potential NHS liability.",
    urgent: false,
    highlight: true,
  },
  {
    date: "23–25 July 2026",
    label: "File FLR(M) + Pay IHS",
    sublabel: "The financial switch — do this the next working day",
    category: "visa",
    icon: "💳",
    detail: "Apply for spouse visa (FLR(M)) online immediately after marriage. IHS cost: ~£2,587 for 2.5 years. From the moment IHS is paid, Nikki is exempt from all NHS charges. Consider Super Priority service (~£1,000 extra) for 24hr decision — worth it for peace of mind.",
    urgent: true,
    highlight: false,
  },
  {
    date: "25 July 2026 onwards",
    label: "Full NHS Access",
    sublabel: "IHS payment = exempt from all charges",
    category: "health",
    icon: "✅",
    detail: "All remaining antenatal care, the birth, and postnatal care is free on the NHS. Nikki is treated identically to any UK resident. The £2,587 IHS is the total healthcare cost for the entire maternity journey.",
    urgent: false,
  },
  {
    date: "July–August 2026",
    label: "Consultant-Led Antenatal Care",
    sublabel: "Weeks 24–30 approx",
    category: "health",
    icon: "👩‍⚕️",
    detail: "Regular consultant (not just midwife) appointments. Glucose tolerance test for gestational diabetes — important for advanced maternal age. Growth scan at 28 weeks. Uterine artery Doppler. Blood pressure monitoring for pre-eclampsia risk.",
    urgent: false,
  },
  {
    date: "Aug–Oct 2026",
    label: "Growth Scans + Birth Planning",
    sublabel: "Weeks 30–38 approx",
    category: "health",
    icon: "🔬",
    detail: "Growth scans every 2–4 weeks. GBS swab at 35–37 weeks. Anaesthetic pre-assessment (standard for high-risk). Documented birth plan with consultant. Hospital tour. Kick counting from 28 weeks.",
    urgent: false,
  },
  {
    date: "~Sept–Oct 2026",
    label: "FLR(M) Decision Expected",
    sublabel: "Standard processing: ~8 weeks from application",
    category: "visa",
    icon: "📬",
    detail: "Spouse visa should be granted well before the birth. If using standard processing (8 weeks from late July = late September). NHS coverage already active from IHS payment date regardless of decision timing.",
    urgent: false,
  },
  {
    date: "November 2026",
    label: "Baby Arrives 🎉",
    sublabel: "Consultant-led hospital birth",
    category: "health",
    icon: "👶",
    detail: "Hospital birth at Whipps Cross (or UCLH if referred). Consultant-led due to high-risk status. Full NHS coverage via IHS. Neonatal unit on site if needed. Baby is a British national by descent via Nick.",
    urgent: false,
    highlight: true,
  },
];

const categoryColors = {
  visa:     { bg: "#1a1a2e", accent: "#4f8ef7", light: "#e8f0fe" },
  marriage: { bg: "#2d1a2e", accent: "#c97ef5", light: "#f3e8ff" },
  health:   { bg: "#1a2e1a", accent: "#4caf7d", light: "#e8f5e9" },
};

const categoryLabels = {
  visa:     "Visa",
  marriage: "Marriage",
  health:   "Health",
};

export default function Timeline() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0d0d0d",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      padding: "40px 20px",
      color: "#e8e8e8",
    }}>
      {/* Header */}
      <div style={{ maxWidth: 680, margin: "0 auto 48px", textAlign: "center" }}>
        <div style={{
          fontSize: 11,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#666",
          marginBottom: 12,
        }}>
          Prepared for Nick & Nikki
        </div>
        <h1 style={{
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 400,
          margin: "0 0 8px",
          lineHeight: 1.15,
          color: "#f0f0f0",
          letterSpacing: "-0.02em",
        }}>
          UK Arrival, Marriage &<br />Maternity Timeline
        </h1>
        <p style={{ color: "#888", fontSize: 15, margin: "12px 0 0", fontStyle: "italic" }}>
          June 2026 — November 2026
        </p>

        {/* Legend */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
          {Object.entries(categoryColors).map(([key, col]) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: col.accent }} />
              <span style={{ color: "#aaa", letterSpacing: "0.05em" }}>{categoryLabels[key]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>

        {/* Vertical line */}
        <div style={{
          position: "absolute",
          left: 28,
          top: 0,
          bottom: 0,
          width: 1,
          background: "linear-gradient(to bottom, transparent, #333 5%, #333 95%, transparent)",
        }} />

        {events.map((ev, i) => {
          const col = categoryColors[ev.category];
          const isOpen = expanded === i;

          return (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 24,
                marginBottom: 8,
                position: "relative",
              }}
            >
              {/* Node */}
              <div style={{ flexShrink: 0, width: 56, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
                    width: ev.highlight ? 48 : 36,
                    height: ev.highlight ? 48 : 36,
                    borderRadius: "50%",
                    background: ev.highlight ? col.accent : "#1a1a1a",
                    border: `2px solid ${col.accent}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: ev.highlight ? 20 : 16,
                    boxShadow: ev.highlight ? `0 0 20px ${col.accent}55` : "none",
                    transition: "all 0.2s",
                    zIndex: 1,
                    position: "relative",
                    marginLeft: ev.highlight ? -6 : 0,
                  }}
                >
                  {ev.icon}
                </div>
              </div>

              {/* Card */}
              <div
                onClick={() => setExpanded(isOpen ? null : i)}
                style={{
                  flex: 1,
                  background: isOpen ? "#1c1c1c" : "#141414",
                  border: `1px solid ${isOpen ? col.accent + "66" : "#222"}`,
                  borderLeft: `3px solid ${col.accent}`,
                  borderRadius: 8,
                  padding: "14px 18px",
                  cursor: "pointer",
                  marginBottom: 4,
                  transition: "all 0.2s",
                  boxShadow: isOpen ? `0 4px 20px ${col.accent}22` : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: col.accent,
                      marginBottom: 4,
                    }}>
                      {ev.date}
                      {ev.urgent && (
                        <span style={{
                          marginLeft: 8,
                          background: "#ff4444",
                          color: "#fff",
                          fontSize: 9,
                          padding: "1px 6px",
                          borderRadius: 3,
                          letterSpacing: "0.1em",
                        }}>ACTION REQUIRED</span>
                      )}
                    </div>
                    <div style={{
                      fontSize: 16,
                      fontWeight: ev.highlight ? 600 : 400,
                      color: ev.highlight ? col.accent : "#e8e8e8",
                      marginBottom: 2,
                    }}>
                      {ev.label}
                    </div>
                    <div style={{ fontSize: 13, color: "#888", fontStyle: "italic" }}>
                      {ev.sublabel}
                    </div>
                  </div>
                  <div style={{ color: "#555", fontSize: 16, flexShrink: 0, marginTop: 2 }}>
                    {isOpen ? "▲" : "▼"}
                  </div>
                </div>

                {/* Expanded detail */}
                {isOpen && (
                  <div style={{
                    marginTop: 14,
                    paddingTop: 14,
                    borderTop: `1px solid #2a2a2a`,
                    fontSize: 14,
                    color: "#bbb",
                    lineHeight: 1.7,
                  }}>
                    {ev.detail}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer cost summary */}
      <div style={{ maxWidth: 680, margin: "40px auto 0" }}>
        <div style={{
          background: "#141414",
          border: "1px solid #2a2a2a",
          borderRadius: 10,
          padding: "24px 28px",
        }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#666", marginBottom: 14 }}>
            Cost Summary
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["IHS (spouse visa, 2.5 yrs)", "£2,587", "#4f8ef7"],
              ["Super Priority FLR(M) service (optional)", "£1,000", "#4f8ef7"],
              ["All NHS maternity care (antenatal → birth → postnatal)", "FREE", "#4caf7d"],
              ["Potential bill without IHS in place at birth", "£10,000–20,000+", "#ff6b6b"],
            ].map(([label, val, col]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 14, color: "#aaa" }}>{label}</span>
                <span style={{ fontSize: 15, color: col, fontWeight: 600, fontFamily: "monospace" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "#555", fontStyle: "italic" }}>
          Tap any event to expand details · Dates assume fiancé visa granted ~30 May 2026
        </div>
      </div>
    </div>
  );
}
