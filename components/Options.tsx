import { Fragment, useState } from "react";
import { Popover, Transition, Listbox } from "@headlessui/react";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export function Options() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center">
            <AdjustmentsIcon
              className={`w-6 h-6 ${
                open ? "bg-accent text-dark rounded-md" : "text-accent"
              }`}
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel className="absolute z-10 w-56 p-4 mt-2 text-sm text-black divide-y divide-gray-300 rounded-md shadow-lg bg-primary">
              <div className="flex flex-col space-y-2">
                <span>Theme</span>
                <ThemeChooser />
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

function ThemeChooser() {
  const themes = ["System Setting", "Dark Mode", "Light Mode"];
  const [theme, setTheme] = useState("System Setting");

  return (
    <Listbox value={theme} onChange={setTheme}>
      <div className="relative">
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-accent focus-visible:ring-offset-2 focus-visible:border-accent sm:text-sm">
          <span className="block truncate">{theme}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {themes.map((t, idx) => (
              <Listbox.Option
                key={idx}
                value={t}
                className={({ active }) =>
                  `${active ? "text-yellow-900 bg-yellow-100" : "text-gray-900"}
                    cursor-default select-none relative py-2 pl-10 pr-4`
                }
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? "font-medium" : "font-normal"
                      } block truncate`}
                    >
                      {t}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active ? "text-yellow-600" : "text-yellow-600"
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
