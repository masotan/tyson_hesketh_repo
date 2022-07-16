import React from 'react';
import CarouselFade from '../components/CarouselFade';
import { motion, AnimatePresence } from "framer-motion";

function Home() {


    return(
    <div>
    <motion.div initial={{
      opacity:0
    }}
    animate={{
      opacity:1
    }}
    >
    <h1>Home</h1>
    <hr></hr>
    <CarouselFade/>
    <p>Lorem ipsum dolor sit amet, magna falli his an, alii fugit an vel. Ei noluisse principes eum, rebum petentium vis te, ad eligendi pertinax evertitur vim. Te usu dolor erroribus conceptam. Pro an omnium volumus.

Vel ut eros posse salutatus, tollit minimum similique nam ad. Ne has duis euismod, eos apeirian persecuti eu, ius aliquid nonumes cu. Suas soluta expetenda ei pri. Ei eros consetetur voluptatibus eam. Eos et aeterno mandamus, quo ea altera numquam conclusionemque, enim accusamus in nec. Te vix nisl alienum, eu eum illum graecis dignissim. Stet debitis eu pri, usu et nostrum adipisci platonem, no regione volutpat ius.

Est autem offendit in, lorem quidam abhorreant cu eos. Congue tation abhorreant nam id, atqui nullam semper an mea. An qui nisl mucius facilis, omnis aperiam quaeque sit ad, mediocrem repudiare his ad. Sit eu offendit periculis.

Euismod qualisque scripserit cum et. His cu epicurei sadipscing omittantur, praesent consulatu pri in. Vel habeo nominati ei, pro ignota iudicabit an. Ad commune qualisque delicatissimi sea, ut solum doming ornatus has. Ei qui enim philosophia.

Tibique vituperatoribus qui cu. Habeo rationibus eam ei, nibh tamquam denique ea has. Ne duo ludus graeci, duo constituto intellegam ea, cu idque noster vix. Quo no dolore dissentiunt.</p>
    
    
    </motion.div>
    </div>
    );
    
    }
    
    
    export default Home;