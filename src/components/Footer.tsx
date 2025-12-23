import { Phone, Mail, MapPin, Facebook, Instagram, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-heading text-muted py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-primary-foreground">
                Berdakh Edu
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Sun'iy intellekt va zamonaviy texnologiyalar bo'yicha eng yaxshi
              o'quv markazi. Kelajak bugun boshlanadi!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Tezkor havolalar
            </h4>
            <ul className="space-y-3">
              {["Bosh sahifa", "Afzalliklar", "Kurslar", "Ro'yxatdan o'tish"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/[^a-z]/g, "")}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Aloqa
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+998943513232"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +998 94 351 32 32
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@berdakhedu.uz"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@berdakhedu.uz
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Toshkent shahri, Chilonzor tumani</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Ijtimoiy tarmoqlar
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-muted/20 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-muted/20 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-muted/20 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-muted/20 text-center">
          <p className="text-muted-foreground">
            © 2025 Berdakh Edu. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
