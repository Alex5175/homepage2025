import GetTimeProgession from "@/lib/GetTimeProgression";
import SectionTemplate from "@/components/SectionTemplate";

export default function page() {
  const startDate = new Date("July 1, 2025");
  const endDate = new Date("March 31, 2026");
  const progress = GetTimeProgession(startDate, endDate);

  const textStyle = "text-foreground font-bold text-sm md:text-lg";

  return (
    <SectionTemplate title="Zivildienst Status" hasFooter={false}>
      <div className="relative w-full h-full flex justify-center">
        <div className="absolute top-[25%] w-[60vw] h-[15vh] flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <p className={textStyle}>
              Start: {startDate.toLocaleDateString("de")}
            </p>
            <p className={textStyle}>{Math.round(progress * 100)}%</p>
            <p className={textStyle}>
              Ende: {endDate.toLocaleDateString("de")}
            </p>
          </div>
          <progress
            className="w-full h-full bg-secondary rounded-md "
            value={progress}
          ></progress>
        </div>
      </div>
    </SectionTemplate>
  );
}
