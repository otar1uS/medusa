"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  Code,
  Smartphone,
  Cloud,
  LineChart,
  CheckCircle2,
  Server,
  Database,
  Shield,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export default function ServicesPage() {
  const { t } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const casesRef = useRef<HTMLDivElement>(null)
  const additionalServicesRef = useRef<HTMLDivElement>(null);


  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 })
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const isAdditionalServicesInView = useInView(additionalServicesRef, { once: true, amount: 0.2 });
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 })
  const isPricingInView = useInView(pricingRef, { once: true, amount: 0.2 })
  const isCasesInView = useInView(casesRef, { once: true, amount: 0.2 })

  const services = [
    {
      id: "web",
      icon: <Code className="h-10 w-10 text-purple-500" />,
      titleKey: "services.webDev",
      descriptionKey: "services.webDesc",
      features: [
        "services.webDev.features.0",
        "services.webDev.features.1",
        "services.webDev.features.2",
        "services.webDev.features.3",
        "services.webDev.features.4",
        "services.webDev.features.5",
      ],
    },
    {
      id: "mobile",
      icon: <Smartphone className="h-10 w-10 text-blue-500" />,
      titleKey: "services.mobileDev",
      descriptionKey: "services.mobileDesc",
      features: [
        "services.mobileDev.features.0",
        "services.mobileDev.features.1",
        "services.mobileDev.features.2",
        "services.mobileDev.features.3",
        "services.mobileDev.features.4",
        "services.mobileDev.features.5",
      ],
    },
    {
      id: "cloud",
      icon: <Cloud className="h-10 w-10 text-teal-500" />,
      titleKey: "services.cloudSolutions",
      descriptionKey: "services.cloudDesc",
      features: [
        "services.cloudSolutions.features.0",
        "services.cloudSolutions.features.1",
        "services.cloudSolutions.features.2",
        "services.cloudSolutions.features.3",
        "services.cloudSolutions.features.4",
        "services.cloudSolutions.features.5",
      ],
    },
    {
      id: "consultancy",
      icon: <LineChart className="h-10 w-10 text-indigo-500" />,
      titleKey: "services.consultancy",
      descriptionKey: "services.consultancyDesc",
      features: [
        "services.consultancy.features.0",
        "services.consultancy.features.1",
        "services.consultancy.features.2",
        "services.consultancy.features.3",
        "services.consultancy.features.4",
        "services.consultancy.features.5",
      ],
    },
  ]

  const additionalServices = [
    {
      icon: <Database className="h-10 w-10 text-emerald-500" />,
      titleKey: "services.additional.db.title",
      descriptionKey: "services.additional.db.desc",
    },
    {
      icon: <Shield className="h-10 w-10 text-red-500" />,
      titleKey: "services.additional.cybersecurity.title",
      descriptionKey: "services.additional.cybersecurity.desc",
    },
    {
      icon: <Cpu className="h-10 w-10 text-amber-500" />,
      titleKey: "services.additional.ai.title",
      descriptionKey: "services.additional.ai.desc",
    },
    {
      icon: <Server className="h-10 w-10 text-pink-500" />,
      titleKey: "services.additional.devops.title",
      descriptionKey: "services.additional.devops.desc",
    },
  ]

  const processSteps = [
    {
      number: "01",
      titleKey: "services.process.step1.title",
      descriptionKey: "services.process.step1.desc",
    },
    {
      number: "02",
      titleKey: "services.process.step2.title",
      descriptionKey: "services.process.step2.desc",
    },
    {
      number: "03",
      titleKey: "services.process.step3.title",
      descriptionKey: "services.process.step3.desc",
    },
    {
      number: "04",
      titleKey: "services.process.step4.title",
      descriptionKey: "services.process.step4.desc",
    },
    {
      number: "05",
      titleKey: "services.process.step5.title",
      descriptionKey: "services.process.step5.desc",
    },
    {
      number: "06",
      titleKey: "services.process.step6.title",
      descriptionKey: "services.process.step6.desc",
    },
    {
      number: "07",
      titleKey: "services.process.step7.title",
      descriptionKey: "services.process.step7.desc",
    },
  ]

  const caseStudies = [
    {
      titleKey: "services.caseStudies.ecommerce.title",
      categoryKey: "services.caseStudies.ecommerce.category",
      descriptionKey: "services.caseStudies.ecommerce.desc",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      titleKey: "services.caseStudies.mobileBanking.title",
      categoryKey: "services.caseStudies.mobileBanking.category",
      descriptionKey: "services.caseStudies.mobileBanking.desc",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      titleKey: "services.caseStudies.cloudMigration.title",
      categoryKey: "services.caseStudies.cloudMigration.category",
      descriptionKey: "services.caseStudies.cloudMigration.desc",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const pricingPlans = [
    {
      nameKey: "services.pricing.basic.name",
      priceKey: "services.pricing.basic.price",
      descriptionKey: "services.pricing.basic.desc",
      features: [
        "services.pricing.basic.features.0",
        "services.pricing.basic.features.1",
        "services.pricing.basic.features.2",
        "services.pricing.basic.features.3",
        "services.pricing.basic.features.4",
      ],
      ctaKey: "services.pricing.getStarted",
      popular: false,
    },
    {
      nameKey: "services.pricing.professional.name",
      priceKey: "services.pricing.professional.price",
      descriptionKey: "services.pricing.professional.desc",
      features: [
        "services.pricing.professional.features.0",
        "services.pricing.professional.features.1",
        "services.pricing.professional.features.2",
        "services.pricing.professional.features.3",
        "services.pricing.professional.features.4",
        "services.pricing.professional.features.5",
      ],
      ctaKey: "services.pricing.getStarted",
      popular: true,
    },
    {
      nameKey: "services.pricing.enterprise.name",
      priceKey: "services.pricing.enterprise.price",
      descriptionKey: "services.pricing.enterprise.desc",
      features: [
        "services.pricing.enterprise.features.0",
        "services.pricing.enterprise.features.1",
        "services.pricing.enterprise.features.2",
        "services.pricing.enterprise.features.3",
        "services.pricing.enterprise.features.4",
        "services.pricing.enterprise.features.5",
        "services.pricing.enterprise.features.6",
      ],
      ctaKey: "services.pricing.contactUs",
      popular: false,
    },
  ]

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 md:py-32 relative overflow-hidden animated-bg">
        <div className="absolute inset-0 geometric-pattern opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-display">
              {t("services.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">{t("services.subtitle")}</p>
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
              {t("services.hero.cta")}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section ref={servicesRef} className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="web" className="w-full">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6 gradient-text font-display"
              >
                {t("services.coreTitle")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                {t("services.coreSubtitle")}
              </motion.p>

              <TabsList className="mt-8 bg-muted/50 p-1 rounded-lg">
                <TabsTrigger value="web" className="rounded-md data-[state=active]:bg-background">
                  {t("services.tabs.webDev")}
                </TabsTrigger>
                <TabsTrigger value="mobile" className="rounded-md data-[state=active]:bg-background">
                  {t("services.tabs.mobileDev")}
                </TabsTrigger>
                <TabsTrigger value="cloud" className="rounded-md data-[state=active]:bg-background">
                  {t("services.tabs.cloudSolutions")}
                </TabsTrigger>
                <TabsTrigger value="consultancy" className="rounded-md data-[state=active]:bg-background">
                  {t("services.tabs.itConsultancy")}
                </TabsTrigger>
              </TabsList>
            </div>

            {services.map((service) => (
              <TabsContent
                key={service.id}
                value={service.id}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="p-3 bg-muted rounded-lg inline-block mb-4">{service.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{t(service.titleKey)}</h3>
                    <p className="text-muted-foreground mb-6">{t(service.descriptionKey)}</p>

                    <div className="space-y-3">
                      {service.features.map((featureKey, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <p>{t(featureKey)}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                        {t("services.learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="relative w-full h-[400px] snake-border rounded-2xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt={t(service.titleKey)}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section ref={additionalServicesRef} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isAdditionalServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-display"
            >
              {t("services.additionalTitle")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isAdditionalServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {t("services.additionalSubtitle")}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isAdditionalServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

      {/* Development Process */}
      <section ref={processRef} className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-display">
              {t("services.processTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.processSubtitle")}</p>
          </motion.div>

          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>

            <div className="space-y-12 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 text-right" : "md:pl-16 text-left"}`}>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{t(step.titleKey)}</h3>
                    <p className="text-muted-foreground">{t(step.descriptionKey)}</p>
                  </div>

                  <div className="md:w-0 relative my-4 md:my-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                  </div>

                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={casesRef} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-display">
              {t("services.caseStudiesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.caseStudiesSubtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={t(caseStudy.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary/80 text-white text-xs rounded-full">
                      {t(caseStudy.categoryKey)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {t(caseStudy.titleKey)}
                  </h3>
                  <p className="text-muted-foreground mb-4">{t(caseStudy.descriptionKey)}</p>
                  <Link href="#" className="text-primary hover:underline inline-flex items-center">
                    {t("services.caseStudies.readMore")} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              {t("services.caseStudies.viewAll")}
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-display">
              {t("services.pricingTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.pricingSubtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`relative h-full ${plan.popular ? "border-primary shadow-lg shadow-primary/10" : ""}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                      <span className="px-3 py-1 bg-primary text-white text-xs rounded-full">Popular</span> {/* This "Popular" text could also be translated if needed */}
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{t(plan.nameKey)}</CardTitle>
                    <CardDescription>{t(plan.descriptionKey)}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{t(plan.priceKey)}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((featureKey, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{t(featureKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                          : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {t(plan.ctaKey)}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">{t("services.pricing.customQuoteText")}</p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
              {t("services.pricing.contactUsButton")}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden animated-bg">
        <div className="absolute inset-0 geometric-pattern opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white font-display">
              {t("services.ctaTitle")}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">{t("services.ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
                {t("services.cta.scheduleConsultation")}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                {t("services.cta.viewPortfolio")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}