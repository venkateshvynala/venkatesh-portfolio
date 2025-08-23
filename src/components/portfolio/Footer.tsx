"use client"

import { motion } from "framer-motion"

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-8 px-4 sm:px-6 lg:px-8 bg-card border-t border-border"
        >
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-muted-foreground">© 2024 Vynala Venkatesh. All rights reserved.</p>
            </div>
        </motion.footer>
    )
}
