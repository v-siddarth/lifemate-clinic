import { clinicInfo } from "../../data/clinicInfo";

export default function HelpDeskSection() {
  const supportHref = `mailto:${clinicInfo.email}?subject=${encodeURIComponent("Support request from Lifemate Clinic")}`;
  return (
    <section id="contact" className="bg-[#edf3f7] py-24">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-6">
        <h3 className="text-center text-[36px] font-bold text-[#3d3d3d] md:text-[46px] lg:text-[56px]">Reach our <span className="text-[#2cbeff]">Help Desk</span> for support</h3>
        <p className="mt-6 text-center text-[16px] leading-8 text-[#b0b0b0]">Call {clinicInfo.phonePrimary} or submit your details for appointment assistance from {clinicInfo.name}.</p>

        <div className="mx-auto mt-10 grid max-w-[1260px] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_260px] xl:gap-5">
          <input type="text" placeholder="Enter Your First Name" className="h-[64px] rounded-2xl border-2 border-[#75d4ff] bg-[#f3f8fc] px-5 text-[18px] text-[#4f4f4f] placeholder:text-[#b0b0b0]" />
          <input type="tel" placeholder="Enter Your Phone Number" className="h-[64px] rounded-2xl border-2 border-[#75d4ff] bg-[#f3f8fc] px-5 text-[18px] text-[#4f4f4f] placeholder:text-[#b0b0b0]" />
          <input type="email" placeholder="Enter Your Email Address" className="h-[64px] rounded-2xl border-2 border-[#75d4ff] bg-[#f3f8fc] px-5 text-[18px] text-[#4f4f4f] placeholder:text-[#b0b0b0]" />
          <a
            href={supportHref}
            className="inline-flex h-[64px] items-center justify-center rounded-2xl bg-gradient-to-r from-[#2cbeff] to-[#00a4f4] text-[22px] font-semibold text-white"
            aria-label={`Request support from ${clinicInfo.name}`}
          >
            Request support
          </a>
        </div>
      </div>
    </section>
  );
}
