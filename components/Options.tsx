import { Menu, Transition, RadioGroup } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import { TagIcon } from "@heroicons/react/solid";

export function Options() {
  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button className="inline-flex justify-center w-full py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <AdjustmentsIcon className="w-6 h-6 text-accent" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-gray-200 divide-y rounded-md shadow-lg divide-gray-900/10 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <span className="inline-block p-2 text-sm">Accent Colors</span>
            <div className="flex">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-orange-light-mode dark:bg-orange-dark-mode text-white"
                        : "text-orange-light-mode dark:text-orange-dark-mode"
                    } group flex rounded-md items-center pl-2 py-2 text-sm`}
                  >
                    <TagIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-blue-light-mode dark:bg-blue-dark-mode text-white"
                        : "text-blue-light-mode dark:text-blue-dark-mode"
                    } group flex rounded-md items-center pl-2 text-sm`}
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
              <DarkModeDropdown />
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function DarkModeDropdown() {
  const [selected, setSelected] = useState<"system" | "dark" | "light">(
    "system"
  );

  return (
    <div className="w-full px-2 pb-2">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Dark Mode</RadioGroup.Label>
          <div className="space-y-2">
            <RadioGroup.Option
              value="system"
              className={({ active, checked }) =>
                `${
                  active
                    ? "ring-2 ring-offset-2 ring-white ring-opacity-60"
                    : ""
                } ${
                  checked ? "bg-accent bg-opacity-75 text-white" : ""
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
                            checked ? "text-white" : ""
                          }`}
                        >
                          System
                        </RadioGroup.Label>
                      </div>
                    </div>
                    {checked && (
                      <div className="flex-shrink-0 text-white">
                        <CheckIcon className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option
              value="dark"
              className={({ active, checked }) =>
                `${
                  active
                    ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                    : ""
                } ${
                  checked ? "bg-accent bg-opacity-75 text-white" : ""
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
                            checked ? "text-white" : ""
                          }`}
                        >
                          Dark
                        </RadioGroup.Label>
                      </div>
                    </div>
                    {checked && (
                      <div className="flex-shrink-0 text-white">
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
                `${
                  active
                    ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                    : ""
                } ${
                  checked ? "bg-accent text-white" : ""
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
                            checked ? "text-white" : ""
                          }`}
                        >
                          Light
                        </RadioGroup.Label>
                      </div>
                    </div>
                    {checked && (
                      <div className="flex-shrink-0 text-white">
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
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
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
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {mode.name}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
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
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
