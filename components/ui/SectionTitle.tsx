type SectionTitleProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="text-4xl font-bold text-[#1B4332] lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 max-w-2xl text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}