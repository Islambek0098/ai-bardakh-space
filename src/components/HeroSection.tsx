import { ArrowRight, Sparkles, Brain, Users, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-ai.jpg";

const courses = [
  "Python va AI asoslari",
  "Machine Learning & Deep Learning",
  "Data Science",
  "NLP va Computer Vision",
];

const WEBHOOK_URL = "https://hook.eu1.make.com/baylrj20mhstn41webvja8x6b0khlybk";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !course) {
      toast({
        title: "Xatolik",
        description: "Iltimos, barcha maydonlarni to'ldiring",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const payload = `name: ${name}\nphone: ${phone}\ncourse: ${course}`;

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
        },
        mode: "no-cors",
        body: payload,
      });

      toast({
        title: "So'rovingiz qabul qilindi!",
        description: "Tez orada siz bilan bog'lanamiz",
      });
      setOpen(false);
      setName("");
      setPhone("");
      setCourse("");
    } catch (error) {
      console.error("Webhook error:", error);
      toast({
        title: "Xatolik",
        description: "Ma'lumotlarni yuborishda xatolik yuz berdi",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-20 gradient-hero relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/60 rounded-full animate-float animation-delay-200" />

      <div className="container mx-auto py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Sun'iy intellekt o'quv markazi
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-heading">
              Kelajak{" "}
              <span className="text-gradient">Sun'iy intellekt</span>
              {" "}bilan
            </h1>

            <p className="text-lg md:text-xl text-body max-w-lg leading-relaxed">
              Sun'iy intellekt sohasini chuqur o'rganing va kelajak kasblarini
              egallang. Bizning professional o'qituvchilar jamoasi bilan birga
              yangi imkoniyatlarni kashf eting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="hero" size="lg" className="gap-2">
                    <FileText className="w-5 h-5" />
                    Ariza qoldirish
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-heading">Ariza qoldirish</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="modal-name">Ismingiz</Label>
                      <Input
                        id="modal-name"
                        placeholder="Ismingizni kiriting"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="modal-phone">Telefon raqamingiz</Label>
                      <Input
                        id="modal-phone"
                        type="tel"
                        placeholder="+998 90 123 45 67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="modal-course">Kursni tanlang</Label>
                      <Select value={course} onValueChange={setCourse}>
                        <SelectTrigger>
                          <SelectValue placeholder="Kursni tanlang" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" variant="hero" className="w-full" disabled={isLoading}>
                      {isLoading ? "Yuborilmoqda..." : "Yuborish"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <a href="#courses">
                <Button variant="outline" size="lg" className="gap-2">
                  Kurslarni ko'rish
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="animate-fade-in-up animation-delay-200">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-2xl md:text-3xl font-bold text-heading">500+</span>
                </div>
                <p className="text-sm text-body">Bitiruvchilar</p>
              </div>
              <div className="animate-fade-in-up animation-delay-300">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-primary" />
                  <span className="text-2xl md:text-3xl font-bold text-heading">10+</span>
                </div>
                <p className="text-sm text-body">AI Kurslar</p>
              </div>
              <div className="animate-fade-in-up animation-delay-400">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-2xl md:text-3xl font-bold text-heading">98%</span>
                </div>
                <p className="text-sm text-body">Mamnunlik</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Sun'iy intellekt va zamonaviy ta'lim"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-elevated animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-heading">AI Laboratoriya</p>
                  <p className="text-sm text-body">Zamonaviy texnologiyalar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
