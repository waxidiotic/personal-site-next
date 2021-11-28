import { Fragment, useState, useEffect, Dispatch, SetStateAction } from "react";
import { Menu, Transition, RadioGroup } from "@headlessui/react";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import { TagIcon } from "@heroicons/react/solid";

export function Options() {
  // TODO: Local storage for saved theme
  const [currentTheme, setCurrentTheme] = useState("theme-orange-light");
  const [_theme, color, mode] = currentTheme.split("-");
  const [selectedColor, setSelectedColor] = useState<"orange" | "blue">(
    color as "orange" | "blue"
  );

  useEffect(() => {
    if (document.documentElement.classList.length === 0) {
      document.documentElement.classList.add(currentTheme);
    } else {
      const current = document.documentElement.classList[0];
      document.documentElement.classList.replace(current, currentTheme);
    }
  }, [currentTheme]);

  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button
          title="Options"
          className="inline-flex justify-center w-full py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-opacity-75"
        >
          {({ open }) => (
            <AdjustmentsIcon
              className={`w-6 h-6 ${
                open ? "rounded-md bg-accent text-dark" : "text-accent"
              }`}
              aria-hidden="true"
            />
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right border-2 divide-y rounded-md shadow-2xl border-accent bg-primary divide-accent/90 ring-1 ring-accent ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <span className="inline-block p-2 text-sm">Accent Colors</span>
            <div className="flex">
              <Menu.Item>
                {() => (
                  <button
                    className={`${
                      color === "orange"
                        ? "bg-orange-light-mode dark:bg-orange-dark-mode text-dark"
                        : "text-orange-light-mode dark:text-dark"
                    } group flex rounded-md items-center pl-2 py-2 text-sm`}
                    onClick={() => {
                      setSelectedColor("orange");
                      setCurrentTheme(`theme-orange-${mode}`);
                    }}
                  >
                    <TagIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <button
                    className={`${
                      color === "blue"
                        ? "bg-blue-light-mode dark:bg-blue-dark-mode text-dark"
                        : "text-blue-light-mode dark:text-blue-dark-mode"
                    } group flex rounded-md items-center pl-2 text-sm`}
                    onClick={() => {
                      setSelectedColor("blue");
                      setCurrentTheme(`theme-blue-${mode}`);
                    }}
                  >
                    <TagIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  </button>
                )}
              </Menu.Item>
            </div>
          </div>
          <div className="px-1 py-1">
            <span className="inline-block p-2 text-sm">Dark Mode</span>
            <Menu.Item>
              <DarkModeDropdown
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
              />
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function DarkModeDropdown({
  currentTheme,
  setCurrentTheme,
}: {
  currentTheme: string;
  setCurrentTheme: Dispatch<SetStateAction<string>>;
}) {
  const [_theme, color, mode] = currentTheme.split("-");
  const [selected, setSelected] = useState<"dark" | "light">(
    mode as "dark" | "light"
  );

  return (
    <div className="w-full px-2 pb-2">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup
          value={selected}
          onChange={(val) => {
            setCurrentTheme(`theme-${color}-${val}`);
            setSelected(val);
          }}
        >
          <RadioGroup.Label className="sr-only">Dark Mode</RadioGroup.Label>
          <div className="space-y-2">
            {/* <RadioGroup.Option
              value="system"
              className={({ active, checked }) =>
                `${
                  active
                    ? "ring-2 ring-offset-2 ring-white ring-opacity-60"
                    : ""
                } ${
                  checked ? "bg-accent bg-opacity-75 text-primary" : ""
                } relative flex px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none hover:shadow-lg`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium  ${
                            checked ? "text-primary" : ""
                          }`}
                        >
                          System
                        </RadioGroup.Label>
                      </div>
                    </div>
                    {checked && (
                      <div className="flex-shrink-0 text-primary">
                        <CheckIcon className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option> */}
            <RadioGroup.Option
              value="dark"
              className={({ active, checked }) =>
                `${active ? "" : ""} ${
                  checked ? "bg-accent bg-opacity-75" : "border-accent border-2"
                } relative flex px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none hover:shadow-lg`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium  ${
                            checked ? "text-dark" : ""
                          }`}
                        >
                          Dark
                        </RadioGroup.Label>
                      </div>
                    </div>
                    {checked && (
                      <div className="flex-shrink-0 text-dark">
                        <CheckIcon className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option
              value="light"
              className={({ active, checked }) =>
                `${active ? "" : ""} ${
                  checked ? "bg-accent" : "border-accent border-2"
                } relative flex px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none hover:shadow-lg`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium  ${
                            checked ? "text-dark" : ""
                          }`}
                        >
                          Light
                        </RadioGroup.Label>
                      </div>
                    </div>
                    {checked && (
                      <div className="flex-shrink-0 text-dark">
                        <CheckIcon className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
            {/* {modes.map((mode) => (
              <RadioGroup.Option
                key={mode.name}
                value={mode}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                      : ""
                  }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-primary" : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-primary" : "text-gray-900"
                            }`}
                          >
                            {mode.name}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-primary">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))} */}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="currentColor" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
