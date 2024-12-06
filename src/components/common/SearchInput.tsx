import { useEffect, useState } from "react";
import { CloseButton, TextInput, TextInputProps } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useParamsHelper } from "@/hooks/useParamsHelper";

type SearchInputProps = Omit<
  TextInputProps,
  "onChange" | "icon" | "placeholder" | "rightSection" | "value"
> & {
  delay?: number;
};

export function SearchInput({
  name = "criteria",
  delay = 500,
  ...props
}: SearchInputProps) {
  const { setParam, getParam, setParams } = useParamsHelper();
  const [value, setValue] = useState(getParam("search") ?? "");
  const [debounced] = useDebouncedValue(value, delay);

  useEffect(() => {
    setParams({
      [name]: debounced?.trim(),
      pageIndex: null,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced, name]);

  const handleClear = () => {
    setValue("");
    setParam(name, "");
  };

  return (
    <TextInput
      {...props}
      styles={{
        input: {
          fontSize: 12,
        },
      }}
      value={value}
      placeholder="Search here..."
      leftSection={<IconSearch size={20} />}
      onChange={(e) => setValue(e.currentTarget.value)}
      rightSection={value && <CloseButton onClick={handleClear} />}
    />
  );
}
