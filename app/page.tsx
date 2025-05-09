"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  ArrowRight,
  Code,
  Smartphone,
  Cloud,
  LineChart,
  CheckCircle2,
  Braces,
  Globe,
  Type,
  Server,
  Code2,
  Container,
  Network,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { t } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const techRef = useRef<HTMLDivElement>(null)
  // const testimonialsRef = useRef<HTMLDivElement>(null); // Removed
  const ctaRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const isTechInView = useInView(techRef, { once: true, amount: 0.2 })
  // const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 }); // Removed
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 })
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 })


  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollYVal = window.scrollY
      const parallaxElements = document.querySelectorAll(".parallax-layer")

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || "0.5"
        const yPos = scrollYVal * Number.parseFloat(speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: <Code className="h-10 w-10 text-purple-500" />,
      titleKey: "services.webDev",
      descriptionKey: "services.webDesc",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-blue-500" />,
      titleKey: "services.mobileDev",
      descriptionKey: "services.mobileDesc",
    },
    {
      icon: <Cloud className="h-10 w-10 text-teal-500" />,
      titleKey: "services.cloudSolutions",
      descriptionKey: "services.cloudDesc",
    },
    {
      icon: <LineChart className="h-10 w-10 text-indigo-500" />,
      titleKey: "services.consultancy",
      descriptionKey: "services.consultancyDesc",
    },
  ]

  const technologies = [
    { name: "React", icon: <Braces className="w-16 h-16 text-blue-500" /> },
    { name: "Next.js", icon: <Globe className="w-16 h-16 text-black dark:text-white" /> },
    { name: "TypeScript", icon: <Type className="w-16 h-16 text-blue-700" /> },
    { name: "Node.js", icon: <Server className="w-16 h-16 text-green-500" /> },
    { name: "Python", icon: <Code2 className="w-16 h-16 text-yellow-500" /> },
    { name: "AWS", icon: <Cloud className="w-16 h-16 text-orange-500" /> },
    { name: "Docker", icon: <Container className="w-16 h-16 text-blue-400" /> },
    { name: "Kubernetes", icon: <Network className="w-16 h-16 text-indigo-500" /> },
  ]

  const homeFeatures = [
    "home.features.item1",
    "home.features.item2",
    "home.features.item3",
    "home.features.item4",
    "home.features.item5",
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 animated-bg overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-20"></div>

        <motion.div style={{ y, opacity }} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text font-display leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href={'/services'}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  >
                  {t("hero.cta")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                  </Link>
                <Link href={'/contact'}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-foreground hover:bg-purple-500/10"
                  >
                  {t("hero.secondary")}
                </Button>
                  </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] lg:h-[500px] snake-border rounded-2xl overflow-hidden glow">
                <Image
                  src="/medusa-main.png"
                  alt="Medusa Software Development"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-foreground rounded-full mt-2"
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-display">{t("services.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="mb-4 p-3 bg-background rounded-lg inline-block">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground">{t(service.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={techRef} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTechInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-display">{t("tech.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("tech.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isTechInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  {tech.icon}
                </div>
                <p className="font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - REMOVED */}

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text font-display">
                  {t("home.features.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t("home.features.subtitle")}
                </p>

                <div className="space-y-4">
                  {homeFeatures.map((featureKey, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <p>{t(featureKey)}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/services">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      {t("home.features.exploreServices")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full h-[400px] lg:h-[500px] snake-border rounded-2xl overflow-hidden">
                  <Image
                    src="/handshake.png"
                    alt={t("home.features.title")}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 md:py-32 relative overflow-hidden animated-bg">
        <div className="absolute inset-0 geometric-pattern opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white font-display">
              {t("home.cta.title")}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              {t("home.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={'/contact'}>
              <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
                {t("home.cta.getStarted")}
              </Button>
              </Link>
              {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                {t("home.cta.learnMore")}
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}