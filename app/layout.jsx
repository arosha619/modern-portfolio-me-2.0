"use client";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <AnimatePresence mode="wait">
            <motion.div className="h-full">
              <Transition />
              {children}
            </motion.div>
          </AnimatePresence>
        </Layout>
      </body>
    </html>
  );
} 