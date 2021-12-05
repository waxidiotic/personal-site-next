import { Fragment, useState } from "react";
import { Popover, Switch, Transition } from "@headlessui/react";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import { DocumentIcon } from "@heroicons/react/solid";

export function OptionsPopover() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

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
            <Popover.Panel className="absolute z-10 w-56 p-4 mt-2 text-sm text-black bg-white divide-y divide-gray-300 rounded-md shadow-lg">
              <div className="flex flex-col pb-2 space-y-2">
                <span>Accent Color</span>
                <div className="flex space-x-2">
                  <button
                    className={`text-orange-light-mode border-2 border-accent rounded-md hover:text-white hover:bg-accent p-1`}
                  >
                    <DocumentIcon className="w-5 h-5" />
                  </button>
                  <button
                    className={`text-blue-light-mode border-2 border-blue-light-mode rounded-md hover:text-white hover:bg-blue-light-mode p-1`}
                  >
                    <DocumentIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col pt-2 space-y-2">
                <span>Dark Mode</span>
                <Switch
                  checked={darkModeEnabled}
                  onChange={setDarkModeEnabled}
                  className={`${
                    darkModeEnabled ? "bg-accent border-accent" : ""
                  } relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-text-dark rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2`}
                >
                  <span
                    aria-hidden="true"
                    className={`${
                      darkModeEnabled ? "translate-x-7" : "translate-x-0"
                    } pointer-events-none inline-block h-6 w-6 rounded-full bg-white border-2 border-accent shadow-lg transform ring-0 transition ease-in-out duration-200`}
                  />
                </Switch>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
