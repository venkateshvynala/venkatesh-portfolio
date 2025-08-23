"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme/ToggleTheme"

export function Navigation() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-bold text-xl text-primary"
                    >
                        VV
                    </motion.div>
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}
