import { clinicInfo } from "../../data/clinicInfo";

export default function FooterSection() {
  const phonePrimaryHref = `tel:${clinicInfo.phonePrimary.replace(/\s+/g, "")}`;
  const phoneSecondaryHref = `tel:${clinicInfo.phoneSecondary.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${clinicInfo.email}`;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicInfo.address)}`;

  const footerLinks = [
    {
      title: "Support",
      items: [
        { label: "Appointment Booking", href: "#appointment" },
        { label: "Clinic Timings", href: "#faq" },
        { label: "Help Desk", href: "#contact" },
        { label: "Reports & Follow-up", href: "#services" },
        { label: "Contact Clinic", href: "#contact" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Cardiology Consultation", href: "#services" },
        { label: "Preventive Check-ups", href: "#services" },
        { label: "Hypertension Care", href: "#services" },
        { label: "ECG & Rhythm Guidance", href: "#services" },
        { label: "Cholesterol Management", href: "#services" },
      ],
    },
    {
      title: "Information",
      items: [
        { label: "About Clinic", href: "#about" },
        { label: "Doctor Profile", href: "#doctors" },
        { label: "Location & Directions", href: mapHref },
        { label: "Patient Instructions", href: "#how" },
        { label: "Privacy Notice", href: "#faq" },
      ],
    },
  ];

  const quickActions = [
    { label: "Call", href: phonePrimaryHref },
    { label: "Email", href: emailHref },
    { label: "Directions", href: mapHref },
    { label: "Book", href: "#appointment" },
  ];

  return (
    <footer className="border-t border-[#dbe7ef] bg-[#deeff8] pb-12 pt-16">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative block h-16 w-16">
                <span className="absolute left-0 top-1/2 h-8 w-8 -translate-y-1/2 rounded-l-full bg-[#2cbeff]" />
                <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-r-full bg-[#0084d4]" />
                <span className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-t-full bg-[#00a4f4]" />
                <span className="absolute left-1/2 bottom-0 h-8 w-8 -translate-x-1/2 rounded-b-full bg-[#75d4ff]" />
              </span>
              <span className="text-[32px] font-bold text-[#0069ab] md:text-[42px]">{clinicInfo.name}</span>
            </div>
            <p className="mt-7 text-[16px] leading-8 text-[#5d5d5d]">
              <a href={mapHref} target="_blank" rel="noreferrer" className="hover:text-[#0084d4]">
                {clinicInfo.address}
              </a>
              <br />
              <a href={phonePrimaryHref} className="hover:text-[#0084d4]">{clinicInfo.phonePrimary}</a> |{" "}
              <a href={phoneSecondaryHref} className="hover:text-[#0084d4]">{clinicInfo.phoneSecondary}</a>
              <br />
              <a href={emailHref} className="hover:text-[#0084d4]">{clinicInfo.email}</a>
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[17px] font-semibold text-[#0084d4]">{group.title}</h4>
              <ul className="mt-5 grid gap-3">
                {group.items.map((item) => (
                  <li key={item.label} className="text-[16px] text-[#5d5d5d]">
                    <a href={item.href} className="hover:text-[#0084d4]">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#9ed9fa] pt-6 text-[16px] text-[#888888] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3 text-[13px] font-semibold text-[#00a4f4]">
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="rounded-full border border-[#9ed9fa] bg-white px-4 py-1.5 hover:text-[#0084d4]"
              >
                {action.label}
              </a>
            ))}
          </div>
          <p className="text-center sm:text-right">{clinicInfo.name} ? {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
