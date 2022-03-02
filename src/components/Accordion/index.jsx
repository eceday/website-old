import styles from './accordion.module.css';
import { motion, AnimatePresence } from "framer-motion";
import {useState} from 'react';
function Accordion(props) {
    const [active, setExpanded] = useState(false);
    let AccordionHandler = () => {
        setExpanded(!active);
    }
    return (
        <motion.div className={styles.shell}>
            <motion.button className={styles.title} onClick={AccordionHandler}>
                {props.title}
                <motion.div className={styles.plus} whileHover={{ scale: 1.1 }}>{(active)?"+":"-"}</motion.div>
            </motion.button>
            <AnimatePresence initial={false}>
                {active && <motion.section 
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                        open: { opacity: 1, height: "auto" ,padding:'10px'},
                        collapsed: { opacity: 0, height: 0, padding: 0 }
                    }}
                    transition={{ duration: 0.8, ease: [0.00, 0.62, 0.23, 1] }}
                    className={styles.content}>
                    {props.content}
                </motion.section>}
            </AnimatePresence>
        </motion.div>
    )
}

export default Accordion;