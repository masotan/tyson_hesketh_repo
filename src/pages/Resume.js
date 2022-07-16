import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

function Resume() {


    return(
    <div>
    <motion.div initial={{
      opacity:0
    }}
    animate={{
      opacity:1
    }}
    >
    <h1>Resume</h1>
    
    <hr></hr>
    </motion.div>
    </div>
    );
    
    }
    
    
    export default Resume;