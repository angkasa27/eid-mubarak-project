import useAction from "./hooks/useAction";
import LoadingPage from "src/fragments/LoadingPage";
import PropTypes from "prop-types";
import Mandala from "./Theme/Mandala";
import { AnimatePresence, motion } from "framer-motion";

export default function Container() {
  const { data, loading, name } = useAction();

  const props = {
    data,
    name,
  };

  const _renderTheme = () => {
    switch (data?.theme) {
      case "mandala":
        return <Mandala {...props} />;
      default:
        break;
    }
  };

  return (
    <div className="h-screen w-full overflow-y-scroll bg-deep-purple-900 text-white overflow-x-hidden">
      {_renderTheme()}
      <AnimatePresence>
        {true && (
          <motion.div
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-50 bg-deep-purple-800 flex items-center justify-center"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <div>Memuat</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
