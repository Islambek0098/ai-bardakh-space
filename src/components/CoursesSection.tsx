import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Python va AI asoslari",
    description:
      "Python dasturlash tilini noldan o'rganing va sun'iy intellektga kirish qiling.",
    duration: "3 oy",
    lessons: "24 dars",
    color: "from-orange-400 to-amber-500",
  },
  {
    title: "Machine Learning & Deep Learning",
    description:
      "Mashinali o'qitish va chuqur o'qitish algoritmlarini amaliyotda qo'llang.",
    duration: "4 oy",
    lessons: "32 dars",
    color: "from-primary to-orange-glow",
  },
  {
    title: "Data Science",
    description:
      "Ma'lumotlar tahlili, vizualizatsiya va biznes intellekti bo'yicha malaka oshiring.",
    duration: "3.5 oy",
    lessons: "28 dars",
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "NLP va Computer Vision",
    description:
      "Tabiiy til qayta ishlash va kompyuter ko'rish texnologiyalarini o'rganing.",
    duration: "4 oy",
    lessons: "30 dars",
    color: "from-orange-500 to-red-500",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Kurslar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Bizning <span className="text-gradient">Kurslarimiz</span>
          </h2>
          <p className="text-body text-lg">
            AI sohasidagi eng dolzarb va talab yuqori yo'nalishlar bo'yicha kurslar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              <div className={`h-3 bg-gradient-to-r ${course.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-heading mb-3">
                  {course.title}
                </h3>
                <p className="text-body mb-6 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2 text-body">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-body">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm">{course.lessons}</span>
                  </div>
                </div>
                <a href="#register">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Kursga yozilish
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
