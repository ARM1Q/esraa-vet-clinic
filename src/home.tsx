import { Link } from "wouter";

import { motion } from "framer-motion";

import {

HeartPulse,

Stethoscope,

Clock,

ShieldCheck,

ChevronLeft,

Star,

Phone,

Award,

Users,

} from "lucide-react";


const FEATURES = [

{

icon: Stethoscope,

title: "كادر طبي متخصص",

desc: "أطباء بيطريون ذوو خبرة عالية في التعامل مع كافة أنواع الحيوانات الأليفة.",

color: "text-primary",

bg: "bg-primary/10",

},

{

icon: ShieldCheck,

title: "رعاية شاملة ومتكاملة",

desc: "من الفحوصات الدورية والتطعيمات إلى العمليات الجراحية المتخصصة.",

color: "text-accent",

bg: "bg-accent/10",

},

{

icon: Clock,

title: "استجابة سريعة",

desc: "فريقنا متاح لخدمتكم كل يوم من ٩ صباحاً حتى ١٠ مساءً.",

color: "text-teal-600",

bg: "bg-teal-50",

},

];


const STATS = [

{ value: "+٥٠٠٠", label: "حيوان تم علاجه", icon: HeartPulse },

{ value: "+١٢", label: "طبيب بيطري", icon: Users },

{ value: "١٠+", label: "سنوات خبرة", icon: Award },

{ value: "٤.٩★", label: "تقييم العملاء", icon: Star },

];


const ANIMAL_EMOJIS = [

{ emoji: "🐱", label: "قطط" },

{ emoji: "🐶", label: "كلاب" },

{ emoji: "🦜", label: "طيور" },

{ emoji: "🐰", label: "أرانب" },

{ emoji: "🐠", label: "أسماك" },

{ emoji: "🦎", label: "زواحف" },

];


export default function Home() {

return (




{/* ═══════════════════════════════════ HERO ═══════════════════════════════════ /}




{/ ── Desktop layout ── /}




{/ Text side — teal gradient (right in RTL) /}




{/ Decorative circles */}







<motion.div

initial={{ opacity: 0, x: 24 }}

animate={{ opacity: 1, x: 0 }}

transition={{ duration: 0.65 }}

className="relative z-10"

>






الرعاية الأمثل لحيواناتك الأليفة







عيادة






ألما

{" "}

البيطرية







نقدم خدمات بيطرية متكاملة ومنتجات عالية الجودة لضمان صحة وسعادة

حيواناتكم الأليفة تحت سقف واحد.









احجز موعداً الآن







تصفح المتجر










+966 50 123 4567



</motion.div>





      {/* Image side (left in RTL) */}  
      <motion.div  
        initial={{ opacity: 0, scale: 1.04 }}  
        animate={{ opacity: 1, scale: 1 }}  
        transition={{ duration: 0.8 }}  
        className="relative"  
      >  
        <img  
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}  
          alt="طبيبة بيطرية مع قطة"  
          className="w-full h-full object-cover object-center"  
        />  
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent pointer-events-none" />  
        {/* Floating rating card */}  
        <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-4 shadow-2xl border border-border flex items-center gap-3">  
          <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center">  
            <Star className="w-5 h-5 fill-accent text-accent" />  
          </div>  
          <div>  
            <p className="font-display font-bold text-sm">تقييم ممتاز</p>  
            <p className="text-xs text-muted-foreground">٤.٩ / ٥ نجوم</p>  
          </div>  
        </div>  
      </motion.div>  
    </div>  

    {/* ── Mobile layout ── */}  
    <div className="md:hidden teal-gradient relative">  
      {/* Hero image top */}  
      <div className="relative h-52 overflow-hidden">  
        <img  
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}  
          alt="طبيبة بيطرية مع قطة"  
          className="w-full h-full object-cover object-top"  
        />  
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/70" />  
      </div>  

      {/* Text below image */}  
      <div className="px-5 pb-10 pt-4 relative">  
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white font-semibold text-xs mb-4 border border-white/25 w-fit">  
          <HeartPulse className="w-3.5 h-3.5 text-yellow-300" />  
          الرعاية الأمثل لحيواناتك الأليفة  
        </div>  
        <h1 className="text-4xl font-display font-black text-white leading-[1.2] mb-3">  
          عيادة <span className="text-yellow-300">ألما</span> البيطرية  
        </h1>  
        <p className="text-white/80 text-sm leading-relaxed mb-6">  
          خدمات بيطرية متكاملة ومنتجات عالية الجودة تحت سقف واحد.  
        </p>  
        <div className="flex flex-col gap-2.5">  
          <Link  
            href="/appointments"  
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-primary font-bold text-base shadow-lg"  
          >  
            احجز موعداً الآن  
            <ChevronLeft className="w-5 h-5" />  
          </Link>  
          <Link  
            href="/store"  
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/15 text-white font-bold text-base border border-white/30"  
          >  
            تصفح المتجر  
          </Link>  
        </div>  
      </div>  
    </div>  
  </section>  

  {/* ═══════════════════════════════════ ANIMAL TYPES ═══════════════════════════════════ */}  
  <section className="py-8 bg-white border-b border-border">  
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="flex items-center justify-between gap-3 overflow-x-auto scrollbar-hide">  
        <p className="text-sm font-bold text-muted-foreground shrink-0 hidden sm:block">  
          نعالج:  
        </p>  
        <div className="flex gap-3 pb-1">  
          {ANIMAL_EMOJIS.map((a) => (  
            <Link  
              key={a.label}  
              href={`/store?animalType=${a.label}`}  
              className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl bg-secondary/50 hover:bg-primary/10 hover:text-primary border border-border hover:border-primary/30 transition-all min-w-[72px] group"  
            >  
              <span className="text-2xl">{a.emoji}</span>  
              <span className="text-xs font-bold text-muted-foreground group-hover:text-primary">  
                {a.label}  
              </span>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </div>  
  </section>  

  {/* ═══════════════════════════════════ STATS ═══════════════════════════════════ */}  
  <section className="py-12 bg-background">  
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">  
        {STATS.map((stat, i) => (  
          <motion.div  
            key={i}  
            initial={{ opacity: 0, y: 16 }}  
            whileInView={{ opacity: 1, y: 0 }}  
            viewport={{ once: true }}  
            transition={{ delay: i * 0.08 }}  
            className="bg-white rounded-2xl p-5 border border-border shadow-sm text-center hover:shadow-md transition-shadow"  
          >  
            <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">  
              <stat.icon className="w-5 h-5 text-primary" />  
            </div>  
            <p className="font-display font-black text-2xl text-foreground">  
              {stat.value}  
            </p>  
            <p className="text-xs text-muted-foreground font-medium mt-1">  
              {stat.label}  
            </p>  
          </motion.div>  
        ))}  
      </div>  
    </div>  
  </section>  

  {/* ═══════════════════════════════════ WHY US ═══════════════════════════════════ */}  
  <section className="py-16 bg-white">  
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="text-center mb-12">  
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">  
          لماذا تختارنا؟  
        </span>  
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">  
          عيادة ألما — الأفضل في رعاية حيوانك  
        </h2>  
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">  
          نلتزم بأعلى معايير الرعاية الصحية البيطرية بمعايير عالمية وخبرات  
          محلية.  
        </p>  
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">  
        {FEATURES.map((feat, i) => (  
          <motion.div  
            key={i}  
            initial={{ opacity: 0, y: 20 }}  
            whileInView={{ opacity: 1, y: 0 }}  
            viewport={{ once: true }}  
            transition={{ delay: i * 0.1 }}  
            className="p-7 rounded-3xl border border-border bg-background hover:shadow-lg hover:-translate-y-1 transition-all duration-300"  
          >  
            <div  
              className={`w-14 h-14 rounded-2xl ${feat.bg} flex items-center justify-center mb-5`}  
            >  
              <feat.icon className={`w-7 h-7 ${feat.color}`} />  
            </div>  
            <h3 className="font-display font-bold text-xl text-foreground mb-2">  
              {feat.title}  
            </h3>  
            <p className="text-muted-foreground leading-relaxed">  
              {feat.desc}  
            </p>  
          </motion.div>  
        ))}  
      </div>  
    </div>  
  </section>  

  {/* ═══════════════════════════════════ CLINIC SECTION ═══════════════════════════════════ */}  
  <section className="py-16 bg-background">  
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">  
        <motion.div  
          initial={{ opacity: 0, x: -20 }}  
          whileInView={{ opacity: 1, x: 0 }}  
          viewport={{ once: true }}  
          className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-border"  
        >  
          <img  
            src={`${import.meta.env.BASE_URL}images/clinic-interior.png`}  
            alt="داخل العيادة"  
            className="w-full h-full object-cover"  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />  
          <div className="absolute bottom-4 right-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">  
            <p className="font-display font-bold text-foreground">  
              مجهزة بأحدث التقنيات  
            </p>  
            <p className="text-sm text-muted-foreground">  
              أشعة سينية رقمية · مختبر داخلي · صيدلية بيطرية  
            </p>  
          </div>  
        </motion.div>  

        <motion.div  
          initial={{ opacity: 0, x: 20 }}  
          whileInView={{ opacity: 1, x: 0 }}  
          viewport={{ once: true }}  
        >  
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold mb-5">  
            عيادتنا  
          </span>  
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 leading-tight">  
            بيئة مجهزة بأحدث التقنيات لراحة حيوانك  
          </h2>  
          <p className="text-muted-foreground leading-relaxed mb-7">  
            حرصنا على تجهيز عيادتنا بأحدث المعدات الطبية العالمية لضمان  
            تشخيص دقيق وعلاج فعال. غرف الفحص مصممة لتقليل التوتر وتوفير بيئة  
            هادئة وآمنة.  
          </p>  
          <ul className="space-y-3 mb-8">  
            {[  
              "مختبر تحاليل متكامل داخل العيادة",  
              "غرف جراحة معقمة ومجهزة بالكامل",  
              "صيدلية بيطرية شاملة لجميع الأدوية",  
              "نظام متابعة إلكتروني للحيوانات",  
            ].map((item, i) => (  
              <li key={i} className="flex items-center gap-3">  
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">  
                  <svg  
                    className="w-3 h-3 text-white"  
                    fill="none"  
                    viewBox="0 0 24 24"  
                    stroke="currentColor"  
                    strokeWidth={3}  
                  >  
                    <path  
                      strokeLinecap="round"  
                      strokeLinejoin="round"  
                      d="M5 13l4 4L19 7"  
                    />  
                  </svg>  
                </div>  
                <span className="text-foreground font-medium">{item}</span>  
              </li>  
            ))}  
          </ul>  
          <div className="flex gap-3">  
            <Link  
              href="/services"  
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"  
            >  
              استكشف خدماتنا  
              <ChevronLeft className="w-4 h-4" />  
            </Link>  
            <a  
              href="tel:+966501234567"  
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground font-bold rounded-xl border border-border hover:bg-secondary/80 transition-all"  
            >  
              <Phone className="w-4 h-4 text-primary" />  
              اتصل بنا  
            </a>  
          </div>  
        </motion.div>  
      </div>  
    </div>  
  </section>  

  {/* ═══════════════════════════════════ CTA BANNER ═══════════════════════════════════ */}  
  <section className="py-14">  
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="teal-gradient rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">  
        <div className="absolute inset-0 opacity-10">  
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/4" />  
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/4" />  
        </div>  
        <div className="relative z-10">  
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">  
            احجز موعداً لحيوانك الأليف اليوم  
          </h2>  
          <p className="text-white/75 mb-7 max-w-xl mx-auto">  
            فريقنا الطبي جاهز لاستقبالك وتقديم أفضل رعاية صحية. لا تنتظر حتى  
            تتفاقم الحالة.  
          </p>  
          <div className="flex flex-col sm:flex-row gap-3 justify-center">  
            <Link  
              href="/appointments"  
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"  
            >  
              احجز الآن  
              <ChevronLeft className="w-5 h-5" />  
            </Link>  
            <a  
              href="tel:+966501234567"  
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/15 border border-white/30 text-white font-bold rounded-xl hover:bg-white/25 transition-all"  
            >  
              <Phone className="w-5 h-5" />  
              اتصل بنا  
            </a>  
          </div>  
        </div>  
      </div>  
    </div>  
  </section>  
</div>  



);

}

