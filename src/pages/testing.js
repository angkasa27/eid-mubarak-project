import { Transition } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";

export default function Sidebar() {
  const [slide, setSlide] = useState(50);
  const [direction, setDirection] = useState(1);
  const isShowing = true;

  const content = [
    { label: "test", background: "bg-red-500" },
    { label: "test2", background: "bg-blue-500" },
    { label: "test3", background: "bg-yellow-500" },
  ];

  const isShow = (i) => {
    const res = slide % content.length === i;
    return res;
  };

  const handleChange = (dir) => {
    setDirection(dir);
    const ressult = slide + dir;
    setSlide(ressult);
  };

  return (
    <div>
      <div className="relative h-96">
        {content.map(({ label, background }, i) => (
          <Transition
            enter="transition-transform ease-out duration-300 absolute inset-0 z-10"
            entered={"absolute inset-0 z-10"}
            enterFrom={clsx(
              "transform",
              direction > 0 ? "translate-x-full" : "-translate-x-full"
            )}
            enterTo="transform translate-x-0"
            key={i}
            leave="transition duration-300 absolute inset-0"
            leaveFrom="z-0"
            leaveTo="z-0"
            show={isShow(i)}
            unmount={false}
          >
            <div
              className={clsx(
                "w-full h-96 flex items-center justify-center",
                background
              )}
            >
              {label}
            </div>
          </Transition>
        ))}
      </div>
      <button onClick={() => handleChange(-1)}>before</button>
      <button onClick={() => handleChange(1)}>after</button>
    </div>
  );
}
