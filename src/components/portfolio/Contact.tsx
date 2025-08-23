"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from "lucide-react"

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
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">Let's Connect</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Ready to discuss how I can help transform your data into actionable insights? Let's connect and explore
                        opportunities together.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <Card>
                        <CardContent className="pt-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Contact Information */}
                                <motion.div variants={fadeInUp}>
                                    <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
                                    <div className="space-y-4">
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                        >
                                            <Mail className="h-5 w-5 text-primary" />
                                            <span>venkateshvynala001@gmail.com</span>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                        >
                                            <Phone className="h-5 w-5 text-primary" />
                                            <span>+91 9642594022</span>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                        >
                                            <MapPin className="h-5 w-5 text-primary" />
                                            <span>Hyderabad, India</span>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Social Media Links */}
                                <motion.div variants={fadeInUp}>
                                    <h3 className="text-xl font-semibold mb-6 text-foreground">Follow Me</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button variant="outline" className="w-full h-16 flex-col space-y-2 bg-transparent" asChild>
                                                <a
                                                    href="https://linkedin.com/in/venkatesh-vynala-43b8b81a8"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Linkedin className="h-6 w-6" />
                                                    <span className="text-sm">LinkedIn</span>
                                                </a>
                                            </Button>
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button variant="outline" className="w-full h-16 flex-col space-y-2 bg-transparent">
                                                <Github className="h-6 w-6" />
                                                <span className="text-sm">GitHub</span>
                                            </Button>
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button variant="outline" className="w-full h-16 flex-col space-y-2 bg-transparent">
                                                <Twitter className="h-6 w-6" />
                                                <span className="text-sm">Twitter</span>
                                            </Button>
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button variant="outline" className="w-full h-16 flex-col space-y-2 bg-transparent">
                                                <Instagram className="h-6 w-6" />
                                                <span className="text-sm">Instagram</span>
                                            </Button>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
