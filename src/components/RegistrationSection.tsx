import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const WEBHOOK_URL = "https://hook.eu1.make.com/baylrj20mhstn41webvja8x6b0khlybk";

const courses = [
  "Python va AI asoslari",
  "Machine Learning & Deep Learning",
  "Data Science",
  "NLP va Computer Vision",
];

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.course) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        course: formData.course,
      });

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        mode: "no-cors",
        body: params.toString(),
      });

      toast.success("So'rovingiz qabul qilindi!", {
        description: "Tez orada siz bilan bog'lanamiz.",
      });
      setFormData({ name: "", phone: "", course: "" });
    } catch (error) {
      console.error("Webhook error:", error);
      toast.error("Ma'lumotlarni yuborishda xatolik yuz berdi");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="register" className="py-20 bg-surface relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
              Ro'yxatdan o'tish
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
              <span className="text-gradient">Kursga yoziling</span> va
              kelajakni bugun boshlaing
            </h2>
            <p className="text-body text-lg mb-8 leading-relaxed">
              Bizning jamoamiz bilan bog'laning va AI sohasida o'z
              karyerangizni boshlang. Bepul konsultatsiya olish uchun
              ro'yxatdan o'ting.
            </p>

            <div className="space-y-4">
              {[
                "Bepul birinchi dars",
                "Tajribali mentorlar yordami",
                "Amaliy loyihalar portfoliosi",
                "Ish bilan ta'minlash bo'yicha yordam",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-body">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="animate-fade-in-up animation-delay-200">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-elevated"
            >
              <h3 className="text-2xl font-bold text-heading mb-6 text-center">
                Ariza qoldiring
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Ismingiz
                  </label>
                  <Input
                    type="text"
                    placeholder="Ismingizni kiriting"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-12 rounded-xl border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Telefon raqamingiz
                  </label>
                  <Input
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12 rounded-xl border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Kursni tanlang
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) =>
                      setFormData({ ...formData, course: e.target.value })
                    }
                    className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Kursni tanlang</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  {isLoading ? "Yuborilmoqda..." : "Yuborish"}
                </Button>
              </div>

              <p className="text-sm text-body text-center mt-4">
                Sizning ma'lumotlaringiz xavfsiz saqlanadi
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
