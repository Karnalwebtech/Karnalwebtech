"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "../constact-us/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import toast from "react-hot-toast";
export default function ContsctUs() {
  const [email, setEmail] = useState<string>("");
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const socialLinks = [
    // { icon: Facebook, href: '#', label: 'Facebook' },
    {
      icon: Instagram,
      href: "https://www.instagram.com/karnalwebtech",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/karnalwebtech",
      label: "LinkedIn",
    },
    // { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const subscriberHandler = () => {
    console.log("click");
    if (!email.trim()) {
      toast.error("Email field should not be empty.");
      return;
    }
     // Regular expression to validate email structure
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address.");
    return;
  }
  };
  return (
    <section className="relative overflow-hidden">
      <div className="container relative mx-auto px-6 py-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 place-items-center">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-3xl font-bold text-center lg:text-start tracking-tight md:text-5xl">
                Let&apos;s Work Together!
              </h2>
              <p className="text-muted-foreground text-sm">
                I would like to meet with you to discuss something and
                opportunities for collaboration.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                <Mail className="h-5 w-5 text-black" />
                <span>info@karnalwebtech.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                <MapPin className="h-5 w-5 text-black" />
                <span>Sector-6, Karnal, Haryana 132001, India</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                <Phone className="h-5 w-5 text-black" />
                <span>
                  <Link href={"tel:+918816041566"}>+91 88160 41566</Link>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <div className="p-4">
            <Card>
              <CardContent className="mt-4">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-12 flex justify-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              variants={fadeIn}
              target="__blank"
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-black p-3 text-gray-300 transition-colors hover:bg-white/10 hover:text-black"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 rounded-xl bg-black p-8 text-center"
        >
          <h3 className="mb-2 text-xl font-semibold text-white">
            Get Notified About Project
          </h3>
          <p className="mb-6 text-gray-300">Subscribe Now</p>
          <div className="mx-auto flex max-w-md gap-2">
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-blue-500/30 bg-white/5 text-white placeholder:text-gray-400"
            />
            <Button
              onClick={() => subscriberHandler()}
              size="icon"
              className="bg-white text-black hover:text-white hover:bg-gray-700"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
