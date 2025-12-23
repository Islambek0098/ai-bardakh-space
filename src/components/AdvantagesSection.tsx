import { Monitor, Cpu, Users, Award } from "lucide-react";

const advantages = [
  {
    icon: Monitor,
    title: "Zamonaviy AI Laboratoriyalar",
    description:
      "Eng so'nggi texnologiyalar bilan jihozlangan laboratoriyalarda amaliy tajriba orttiring.",
  },
  {
    icon: Cpu,
    title: "Amaliy Loyihalar",
    description:
      "Haqiqiy AI loyihalar ustida ishlash orqali portfolio yarating va tajriba to'plang.",
  },
  {
    icon: Users,
    title: "Tajribali Mentorlar",
    description:
      "Sohaning eng yaxshi mutaxassislari rahbarligida bilim va ko'nikmalaringizni oshiring.",
  },
  {
    icon: Award,
    title: "Sertifikat",
    description:
      "Kursni muvaffaqiyatli tamomlaganingiz uchun rasmiy sertifikat oling.",
  },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-20 bg-surface">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Afzalliklar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Nega aynan <span className="text-gradient">Berdakh Edu</span>?
          </h2>
          <p className="text-body text-lg">
            Bizning o'quv markazimiz sizga eng yaxshi ta'lim va amaliy tajriba
            taqdim etadi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-5">
                <advantage.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-heading mb-3">
                {advantage.title}
              </h3>
              <p className="text-body leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
