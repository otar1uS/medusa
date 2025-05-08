"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle2, Award, Users, Target, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const missionVisionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const joinTeamRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);


  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 })
  const isStoryInView = useInView(storyRef, { once: true, amount: 0.2 })
  const isMissionVisionInView = useInView(missionVisionRef, { once: true, amount: 0.2 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 })
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 })
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.2 })
  const isJoinTeamInView = useInView(joinTeamRef, { once: true, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 });


  const teamMembers = [
    {
      nameKey: "about.team.member1.name", // Names might not be translated or translated differently
      positionKey: "about.team.member1.position",
      bioKey: "about.team.member1.bio",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nameKey: "about.team.member2.name",
      positionKey: "about.team.member2.position",
      bioKey: "about.team.member2.bio",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nameKey: "about.team.member3.name",
      positionKey: "about.team.member3.position",
      bioKey: "about.team.member3.bio",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nameKey: "about.team.member4.name",
      positionKey: "about.team.member4.position",
      bioKey: "about.team.member4.bio",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nameKey: "about.team.member5.name",
      positionKey: "about.team.member5.position",
      bioKey: "about.team.member5.bio",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nameKey: "about.team.member6.name",
      positionKey: "about.team.member6.position",
      bioKey: "about.team.member6.bio",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const companyValues = [
    {
      icon: <Lightbulb className="h-10 w-10 text-purple-500" />,
      titleKey: "about.values.innovation.title",
      descriptionKey: "about.values.innovation.desc",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      titleKey: "about.values.collaboration.title",
      descriptionKey: "about.values.collaboration.desc",
    },
    {
      icon: <Award className="h-10 w-10 text-teal-500" />,
      titleKey: "about.values.excellence.title",
      descriptionKey: "about.values.excellence.desc",
    },
    {
      icon: <Target className="h-10 w-10 text-indigo-500" />,
      titleKey: "about.values.clientFocus.title",
      descriptionKey: "about.values.clientFocus.desc",
    },
  ]

  const timelineEvents = Array.from({ length: 8 }, (_, i) => ({
    yearKey: `about.journey.event${i + 1}.year`,
    titleKey: `about.journey.event${i + 1}.title`,
    descriptionKey: `about.journey.event${i + 1}.desc`,
  }));

  const missionItems = [
    "about.mission.item1",
    "about.mission.item2",
    "about.mission.item3",
    "about.mission.item4",
  ]
  const visionItems = [
    "about.vision.item1",
    "about.vision.item2",
    "about.vision.item3",
    "about.vision.item4",
  ]

  const storyParagraphs = [
    "about.story.p1",
    "about.story.p2",
    "about.story.p3",
    "about.story.p4",
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
              {t("about.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">{t("about.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text font-display">{t("about.story")}</h2>
              <div className="space-y-4 text-muted-foreground">
                {storyParagraphs.map((pKey) => (
                  <p key={pKey}>{t(pKey)}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] snake-border rounded-2xl overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt={t("about.story")} fill className="object-cover" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionVisionRef} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMissionVisionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50">
              <h3 className="text-2xl font-bold mb-4 gradient-text font-display">{t("about.mission")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("about.mission.desc")}
              </p>
              <ul className="space-y-2">
                {missionItems.map((itemKey, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t(itemKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50">
              <h3 className="text-2xl font-bold mb-4 gradient-text font-display">{t("about.vision")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("about.vision.desc")}
              </p>
              <ul className="space-y-2">
                {visionItems.map((itemKey, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t(itemKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Company Values */}
      <section ref={valuesRef} className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-display">{t("about.valuesTitle")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("about.valuesSubtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="mb-4 p-3 bg-background rounded-lg inline-block">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{t(value.titleKey)}</h3>
                <p className="text-muted-foreground">{t(value.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section ref={timelineRef} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-display">
              {t("about.journeyTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("about.journeySubtitle")}</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>

            <div className="space-y-12 relative">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 text-right" : "md:pl-16 text-left"}`}>
                    <div className="mb-2">
                      <span className="text-xl font-bold text-primary">{t(event.yearKey)}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t(event.titleKey)}</h3>
                    <p className="text-muted-foreground">{t(event.descriptionKey)}</p>
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

      {/* Team Section */}
      <section ref={teamRef} className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-display">{t("about.team")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.team.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={t(member.nameKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{t(member.nameKey)}</h3>
                  <p className="text-primary font-medium mb-4">{t(member.positionKey)}</p>
                  <p className="text-muted-foreground">{t(member.bioKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section ref={joinTeamRef} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isJoinTeamInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-display">{t("about.joinTitle")}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t("about.joinSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                {t("about.join.viewOpenings")}
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                {t("about.join.sendResume")}
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 md:py-32 relative overflow-hidden animated-bg">
        <div className="absolute inset-0 geometric-pattern opacity-20"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white font-display">
              {t("about.ctaTitle")}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">{t("about.ctaSubtitle")}</p>
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
              {t("about.cta.getInTouch")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}