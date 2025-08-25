"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, Globe, Heart } from "lucide-react"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export function Contact() {
    const contactInfo = [
        { 
            icon: Mail, 
            value: "venkateshvynala001@gmail.com", 
            label: "Email",
            color: "from-blue-500 to-purple-500",
            href: "mailto:venkateshvynala001@gmail.com"
        },
        { 
            icon: Phone, 
            value: "+91 9642594022", 
            label: "Phone",
            color: "from-green-500 to-blue-500",
            href: "tel:+919642594022"
        },
        { 
            icon: MapPin, 
            value: "Hyderabad, India", 
            label: "Location",
            color: "from-orange-500 to-red-500",
            href: "#"
        },
    ]

    const socialLinks = [
        { 
            name: "LinkedIn", 
            icon: Linkedin, 
            color: "from-blue-600 to-blue-700",
            href: "https://linkedin.com/in/venkatesh-vynala-43b8b81a8",
            description: "Professional Network"
        },
        { 
            name: "GitHub", 
            icon: Github, 
            color: "from-gray-700 to-gray-900",
            href: "#",
            description: "Code Repository"
        },
    ]

    return (
        <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 dark:from-pink-950 dark:via-red-950 dark:to-orange-950" />
            
            {/* Floating Elements */}
            <motion.div
                className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-10 blur-3xl"
                animate={{
                    y: [0, -40, 0],
                    x: [0, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-10 blur-3xl"
                animate={{
                    y: [0, 40, 0],
                    x: [0, -30, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mb-6 shadow-2xl shadow-pink-500/30"
                    >
                        <MessageCircle className="h-10 w-10 text-white" />
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-pink-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                            Let's Connect
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Ready to discuss how I can help transform your data into actionable insights? 
                        Let's connect and explore opportunities together.
                    </p>
                </motion.div>

                {/* Main Contact Card */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
                        <CardContent className="p-8">
                            <div className="grid lg:grid-cols-2 gap-12">
                                {/* Contact Information */}
                                <motion.div variants={fadeInUp} className="space-y-8">
                                    <div className="text-center lg:text-left">
                                        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center justify-center lg:justify-start gap-3">
                                            <Globe className="h-6 w-6 text-pink-500" />
                                            Get In Touch
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                            I'm always excited to discuss new opportunities, collaborations, or just chat about 
                                            data analytics and business intelligence. Feel free to reach out through any of these channels!
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        {contactInfo.map((contact, index) => (
                                            <motion.a
                                                key={contact.label}
                                                href={contact.href}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ x: 10, scale: 1.02 }}
                                                className="group block"
                                            >
                                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                                                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                                        <contact.icon className="h-6 w-6 text-white" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                            {contact.label}
                                                        </p>
                                                        <p className="text-gray-800 dark:text-gray-200 font-semibold">
                                                            {contact.value}
                                                        </p>
                                                    </div>
                                                    <Send className="h-5 w-5 text-gray-400 group-hover:text-pink-500 transition-colors duration-300" />
                                                </div>
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Social Media Links */}
                                <motion.div variants={fadeInUp} className="space-y-8">
                                    <div className="text-center lg:text-left">
                                        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center justify-center lg:justify-start gap-3">
                                            <Heart className="h-6 w-6 text-red-500" />
                                            Follow & Connect
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                            Stay updated with my latest work, insights, and professional journey. 
                                            Let's build meaningful connections in the data community!
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                className="group block"
                                            >
                                                <div className="h-full p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                                                    <div className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                                        <social.icon className="h-8 w-8 text-white" />
                                                    </div>
                                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                                        {social.name}
                                                    </h4>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        {social.description}
                                                    </p>
                                                    
                                                    {/* Hover Effect Overlay */}
                                                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`} />
                                                </div>
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Call to Action */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="mt-12 text-center p-8 bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-950/50 dark:to-red-950/50 rounded-2xl border border-pink-200/50 dark:border-pink-800/50"
                            >
                                <h4 className="text-xl font-semibold text-pink-800 dark:text-pink-200 mb-3">
                                    Ready to Start a Project?
                                </h4>
                                <p className="text-pink-700 dark:text-pink-300 mb-6 leading-relaxed">
                                    Let's discuss how I can help bring your data vision to life with powerful 
                                    business intelligence solutions and stunning visualizations.
                                </p>
                                <Button 
                                    size="lg"
                                    className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <Mail className="h-5 w-5 mr-2" />
                                    Start a Conversation
                                </Button>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
