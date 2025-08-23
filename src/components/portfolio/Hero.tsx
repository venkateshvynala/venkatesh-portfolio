"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
}

export function Hero() {
    return (
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-6xl font-bold text-foreground mb-6"
                    >
                        Vynala Venkatesh
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl sm:text-2xl text-muted-foreground mb-4"
                    >
                        Certified Power BI Developer | Business Intelligence Expert
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto"
                    >
                        Transforming complex datasets into actionable insights with 3+ years of proven experience in Business
                        Intelligence, Data Modeling, and Dashboard Development
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                            <Download className="mr-2 h-4 w-4" />
                            Download Resume
                        </Button>
                        <Button size="lg" variant="outline">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Projects
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
