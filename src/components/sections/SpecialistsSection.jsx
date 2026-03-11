import { clinicInfo } from "../../data/clinicInfo";
import DotCluster from "../shared/DotCluster";

const doctors = [
  {
    name: "Dr. Swapnil Mate (Interventional Cardiologist)",
    desc: "Focused on interventional and preventive cardiology, Dr. Mate works on early diagnosis, risk reduction, and long-term cardiovascular outcomes.",
    experience: "10+ years in interventional cardiology",
    image: "/images/specialist-female.png",
  },
  {
    name: "Lifemate Cardiac Care Team",
    desc: "Our clinical support team helps with appointment coordination, diagnostics, follow-up scheduling, and patient education for continuity of care.",
    experience: "10+ years in coordinated cardiac care",
    image: "/images/specialist-male.png",
  },
];

export default function SpecialistsSection() {
  const appointmentHref = clinicInfo.appointmentUrl || "#appointment";
  return (
    <section id="doctors" className="relative bg-[#edf3f7] py-20">
      <DotCluster className="absolute left-[270px] top-[330px]" />
      <DotCluster className="absolute right-[260px] bottom-[100px]" />

      <div className="mx-auto max-w-[1320px] px-5 lg:px-6">
        <h3 className="text-center text-[36px] font-bold text-[#3d3d3d] md:text-[46px] lg:text-[56px]"><span className="text-[#2cbeff]">Cardiac Specialists:</span><br />Meet our core care team</h3>
        <p className="mx-auto mt-6 max-w-[980px] text-center text-[16px] leading-8 text-[#888888]">Lifemate Clinic combines specialist consultation with a dedicated support team for complete cardiology care in Pune.</p>

        {doctors.map((doctor) => (
          <article key={doctor.name} className="mt-10 grid overflow-hidden rounded-[28px] border-2 border-[#75d4ff] bg-gradient-to-r from-[#2cbeff] to-[#0084d4] shadow-[0_16px_30px_rgba(0,0,0,0.08)] lg:grid-cols-[360px_1fr]">
            <div className="flex h-[280px] items-end justify-center bg-[#35b6f4] p-4 md:h-[340px] lg:h-[380px]">
              <img src={doctor.image} alt={doctor.name} className="h-full w-auto object-contain object-center" />
            </div>
            <div className="p-6 text-white md:p-8 lg:p-10">
              <h4 className="text-[32px] font-semibold leading-tight md:text-[40px] lg:text-[50px]">{doctor.name}</h4>
              <p className="mt-3 inline-flex w-fit rounded-full bg-white/15 px-4 py-1 text-[14px] font-semibold text-white md:text-[15px]">
                {doctor.experience}
              </p>
              <p className="mt-4 max-w-[700px] text-[16px] leading-8 text-[#eff9ff]">{doctor.desc}</p>
              <a
                href={appointmentHref}
                className="mt-8 inline-flex items-center rounded-2xl bg-white/90 px-7 py-4 text-[18px] font-semibold text-[#0084d4]"
                aria-label={`Book appointment with ${doctor.name}`}
              >
                Book appointment
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
