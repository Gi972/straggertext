import { motion, AnimatePresence } from "framer-motion";
import { Fragment, useState } from "react";
import "./styles.css";

const StranglerText = ({
  animate,
  margin,
  delay,
  children = ""
}: {
  animate: string;
  margin?: string;
  delay: number;
  children: string;
}) => {
  const sentence = {
    hiddenUp: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.014,
        staggerDirection: 1
      }
    },
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.014,
        staggerDirection: -1
      }
    }
  };
  const letter = {
    hiddenUp: {
      transition: { duration: 0.5 },
      y: "-30px"
    },
    hiddenDown: {
      y: "30px"
    },
    visible: {
      transition: { duration: 0.5 },
      y: "0px"
    }
  };

  return (
    <motion.h3
      style={{ overflow: "hidden", margin: margin }}
      variants={sentence}
      initial="hiddenUp"
      animate={animate}
    >
      {children
        .split("")
        .map((char) => char.replace(" ", "\u00a0"))
        .map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={letter}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
    </motion.h3>
  );
};

const WordOne = ({
  animate,
  margin,
  delay,
  children = ""
}: {
  animate: string;
  margin?: string;
  delay: number;
  children: string;
}) => {
  const sentence = {
    initial: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.014,
        staggerDirection: 1
      }
    },
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.014,
        staggerDirection: -1
      }
    }
  };
  const letter = {
    initial: {
      transition: { duration: 0.5 },
      y: "0px"
    },
    visible: {
      transition: { duration: 0.5 },
      y: "30px"
    }
  };

  return (
    <motion.h3
      style={{ overflow: "hidden", margin: margin }}
      variants={sentence}
      initial="initial"
      animate={animate}
      exit="visible"
    >
      {children
        .split("")
        .map((char) => char.replace(" ", "\u00a0"))
        .map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={letter}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
    </motion.h3>
  );
};

const WordTwo = ({
  animate,
  margin,
  delay,
  children = ""
}: {
  animate: string;
  margin?: string;
  delay: number;
  children: string;
}) => {
  const sentence = {
    initial: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.014,
        staggerDirection: 1
      }
    },
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.014,
        staggerDirection: -1
      }
    }
  };
  const letter = {
    initial: {
      transition: { duration: 0.5 },
      y: "-30px"
    },
    visible: {
      transition: { duration: 0.5 },
      y: "0px"
    }
  };

  return (
    <motion.h3
      key="modal"
      style={{ overflow: "hidden", margin: margin }}
      variants={sentence}
      initial="initial"
      animate={animate}
      exit="initial"
    >
      {children
        .split("")
        .map((char) => char.replace(" ", "\u00a0"))
        .map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={letter}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
    </motion.h3>
  );
};

export default function App() {
  const [animate, setAnimate] = useState<"initial" | "visible">("initial");

  return (
    <div>
      <div>
        <button onClick={() => setAnimate("initial")}>up</button>{" "}
        <button onClick={() => setAnimate("visible")}>visible</button>
      </div>
      {/* <Fragment key="up">
        <StranglerText animate={animate} margin="0" delay={0}>
          JOHNATHAN FLYNN IS
        </StranglerText>
        <StranglerText animate={animate} margin="0 20px" delay={0.3}>
          A SALT LAKE CITY
        </StranglerText>
        <StranglerText animate={animate} margin="0 0px" delay={0.6}>
          BASED DATA AND SOCIAL
        </StranglerText>
      </Fragment> */}

      <WordOne key="up" animate={animate} margin="0" delay={0}>
        JOHNATHAN FLYNN IS
      </WordOne>

      <AnimatePresence exitBeforeEnter initial={false}>
        {
          animate === "initial" ? (
            <WordOne key="modalo" animate={animate} margin="0" delay={0}>
              {""}
            </WordOne>
          ) : (
            <WordTwo key="modalo" animate={animate} margin="0" delay={0}>
              JOHNATHAN FLYNN IS
            </WordTwo>
          )

          //: (
          // <Fragment key="up">
          //   <WordOne animate={animate} margin="0" delay={0}>
          //     JOHNATHAN FLYNN IS
          //   </WordOne>
          //   <WordOne animate={animate} margin="0 20px" delay={0.3}>
          //     A SALT LAKE CITY
          //   </WordOne>
          //   <WordOne animate={animate} margin="0 0px" delay={0.6}>
          //     BASED DATA AND SOCIAL
          //   </WordOne>
          // </Fragment>
          // <WordTwo key="down" animate={animate} margin="0 0px" delay={0.6}>
          //   BASED DATA AND SOCIAL
          // </WordTwo>
          //)
        }
      </AnimatePresence>
    </div>
  );
}

// Todo: Petit effet pas mal
// <WordOne key="up" animate={animate} margin="0" delay={0}>
// JOHNATHAN FLYNN IS
// </WordOne>

// <AnimatePresence exitBeforeEnter initial={false}>
// {
//   animate === "initial" ? (
//     <WordOne key="modalo" animate={animate} margin="0" delay={0}>
//       JOHNATHAN FLYNN IS
//     </WordOne>
//   ) : (
//     <WordTwo key="modalo" animate={animate} margin="0" delay={0}>
//       JOHNATHAN FLYNN IS
//     </WordTwo>
//   )
