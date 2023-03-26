import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "src/assets/svg/LogoLoadingAnimate";

export default function LoadingPage({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-50 bg-main flex items-center justify-center flex-col"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="pb-12">
            <Logo className="h-32" />
          </div>
          {/* <p className="text-center mt-2 title-3">EidMubarak!</p> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

LoadingPage.propTypes = {
  loading: PropTypes.bool,
};

LoadingPage.defaultProps = {
  loading: true,
};
