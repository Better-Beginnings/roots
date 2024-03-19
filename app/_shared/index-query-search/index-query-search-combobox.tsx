"use client";

import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { Trigger, Value } from "@radix-ui/react-select";
import { Combobox, Select } from "~/components/ui";
import { attributes } from "~/lib/mappings/attributes";
import { QuerySearchCombobox } from "../query-search/combobox-query-search";

export function IndexQuerySearchCombobox() {
  return (
    <QuerySearchCombobox>
      {({ operation, setOperation }) => {
        return (
          <div className="flex h-12 w-full items-center justify-between gap-2 overflow-hidden rounded-lg bg-button-secondary pl-2 shadow-button-secondary transition-shadow has-[:focus-within,:hover]:shadow-button-secondary-hover">
            <MagnifyingGlassIcon className="h-5 w-5 flex-shrink-0 text-zinc-400" />
            <Combobox.Field
              className="h-full w-full font-medium outline-none placeholder:text-zinc-400"
              placeholder="Buscar una propiedad en..."
            />

            <div className="flex h-full">
              <Select.Root onValueChange={setOperation} value={operation}>
                <Trigger className="inline-flex h-full w-[110px] items-center justify-between gap-1 border-l border-zinc-200 px-3 font-medium transition-all hover:bg-zinc-50">
                  <Value className="px-1 text-zinc-900" />
                  <ChevronDownIcon className="h-5 w-5 text-zinc-600" />
                </Trigger>
                <Select.Content>
                  {attributes.OPERATION.values?.map((value) => {
                    return (
                      <Select.Item key={value.id} value={value.id}>
                        {value.name}
                      </Select.Item>
                    );
                  })}
                </Select.Content>
              </Select.Root>
            </div>
          </div>
        );
      }}
    </QuerySearchCombobox>
  );
}
