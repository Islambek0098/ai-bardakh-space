import { useState } from "react";
import { Clock, BookOpen, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const courses = [
  {
    title: "Python va AI asoslari",
    description:
      "Python dasturlash tilini noldan o'rganing va sun'iy intellektga kirish qiling.",
    duration: "3 oy",
    lessons: "24 dars",
    color: "from-orange-400 to-amber-500",
    fullDescription:
      "Bu kursda siz Python dasturlash tilini noldan o'rganasiz. Kurs davomida o'zgaruvchilar, shartli operatorlar, sikllar, funksiyalar, ob'ektga yo'naltirilgan dasturlash va sun'iy intellekt asoslari bilan tanishasiz. Amaliy loyihalar orqali bilimlaringizni mustahkamlaysiz.",
    topics: ["Python asoslari", "Ma'lumotlar tuzilmalari", "OOP", "AI kirish", "Amaliy loyihalar"],
  },
  {
    title: "Machine Learning & Deep Learning",
    description:
      "Mashinali o'qitish va chuqur o'qitish algoritmlarini amaliyotda qo'llang.",
    duration: "4 oy",
    lessons: "32 dars",
    color: "from-primary to-orange-glow",
    fullDescription:
      "Mashinali o'qitish va chuqur o'qitish algoritmlarini chuqur o'rganing. Scikit-learn, TensorFlow va PyTorch kutubxonalari bilan ishlashni o'rganasiz. Haqiqiy loyihalar ustida ishlash orqali tajriba orttirasiz.",
    topics: ["Regression", "Classification", "Neural Networks", "CNN", "RNN", "Transfer Learning"],
  },
  {
    title: "Data Science",
    description:
      "Ma'lumotlar tahlili, vizualizatsiya va biznes intellekti bo'yicha malaka oshiring.",
    duration: "3.5 oy",
    lessons: "28 dars",
    color: "from-amber-500 to-yellow-500",
    fullDescription:
      "Ma'lumotlar fani sohasida professional bo'ling. Pandas, NumPy, Matplotlib va Seaborn kutubxonalari bilan ishlashni o'rganasiz. Ma'lumotlarni tahlil qilish, vizualizatsiya va biznes qarorlarini qabul qilishda yordam beradigan bilimlarni egallaysiz.",
    topics: ["Pandas", "NumPy", "Data Visualization", "Statistical Analysis", "Business Intelligence"],
  },
  {
    title: "NLP va Computer Vision",
    description:
      "Tabiiy til qayta ishlash va kompyuter ko'rish texnologiyalarini o'rganing.",
    duration: "4 oy",
    lessons: "30 dars",
    color: "from-orange-500 to-red-500",
    fullDescription:
      "Tabiiy til qayta ishlash va kompyuter ko'rish texnologiyalarini chuqur o'rganing. Matn tahlili, sentiment analizi, ob'ektlarni aniqlash va tasvirlarni klassifikatsiya qilish kabi mavzularni o'z ichiga oladi.",
    topics: ["Text Processing", "Sentiment Analysis", "Object Detection", "Image Classification", "Transformers"],
  },
];

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

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
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  onClick={() => setSelectedCourse(course)}
                >
                  Batafsil
                  <Info className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-lg">
          {selectedCourse && (
            <>
              <DialogHeader>
                <div className={`h-2 bg-gradient-to-r ${selectedCourse.color} -mx-6 -mt-6 mb-4 rounded-t-lg`} />
                <DialogTitle className="text-2xl text-heading">
                  {selectedCourse.title}
                </DialogTitle>
                <DialogDescription className="text-body pt-2">
                  {selectedCourse.fullDescription}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-body">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>{selectedCourse.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-body">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span>{selectedCourse.lessons}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-heading mb-2">Kurs mavzulari:</h4>
                  <ul className="space-y-1">
                    {selectedCourse.topics.map((topic, idx) => (
                      <li key={idx} className="text-body flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedCourse(null)}
                  >
                    Yopish
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CoursesSection;
