"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)


  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 })
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 })
  const isInfoInView = useInView(infoRef, { once: true, amount: 0.2 })
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.2 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 })


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    toast({
      title: t("contact.toast.success.title"),
      description: t("contact.toast.success.description"),
    })

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  const faqs = Array.from({ length: 6 }, (_, i) => ({
    questionKey: `contact.faq.item${i + 1}.question`,
    answerKey: `contact.faq.item${i + 1}.answer`,
  }));


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
              {t("contact.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">{t("contact.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text font-display">
                {t("contact.sendMessage")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {t("contact.name")}
                    </label>
                    <Input id="name" name="name" placeholder={t("contact.name")} required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {t("contact.email")}
                    </label>
                    <Input id="email" name="email" type="email" placeholder={t("contact.email")} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    {t("contact.subject")}
                  </label>
                  <Input id="subject" name="subject" placeholder={t("contact.subjectPlaceholder")} required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t("contact.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("contact.messagePlaceholder")}
                    rows={6}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    {t("contact.privacyPolicy")}{" "}
                    <a href="#" className="text-primary hover:underline">
                      {t("footer.privacy")}
                    </a>
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("contact.sending")}
                    </>
                  ) : (
                    <>
                      {t("contact.submit")} <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 50 }}
              animate={isInfoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text font-display">
                  {t("contact.contactInfo")}
                </h2>
                <p className="text-muted-foreground mb-8">{t("contact.contactDesc")}</p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-muted rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t("contact.address")}</h3>
                      <p className="text-muted-foreground">{t("contact.address.detail")}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-muted rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t("contact.phone")}</h3>
                      <p className="text-muted-foreground">{t("contact.phone.detail")}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-muted rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t("contact.email")}</h3>
                      <p className="text-muted-foreground">{t("contact.email.detail")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">{t("contact.businessHours")}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t("contact.hours.mondayFriday")}</span>
                    <span>{t("contact.hours.mondayFridayTime")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("contact.hours.saturday")}</span>
                    <span>{t("contact.hours.saturdayTime")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("contact.hours.sunday")}</span>
                    <span>{t("contact.hours.sundayTime")}</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative w-full h-64 rounded-xl overflow-hidden border border-border/50">
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">{t("contact.mapPlaceholder")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-display">{t("contact.faqTitle")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.faqSubtitle")}</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50"
                >
                  <h3 className="text-lg font-bold mb-2">{t(faq.questionKey)}</h3>
                  <p className="text-muted-foreground">{t(faq.answerKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
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
              {t("contact.ctaTitle")}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">{t("contact.ctaSubtitle")}</p>
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
              {t("contact.scheduleCall")}
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}