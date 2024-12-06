import { ReactNode } from "react";
import { Group, Paper, Text } from "@mantine/core";
import { PageSizeSelect } from "../selects/PageSizeSelect";
import { SearchInput } from "./SearchInput";

export type ToolbarProps = {
  rightSections?: ReactNode;
  leftSections?: ReactNode;
};

export function Toolbar({ rightSections, leftSections }: ToolbarProps) {
  return (
    <Paper px="16px" py="20px">
      <Group p="apart">
        <Group>
          <Text c="greyscale.6" fz="12px">
            Show
          </Text>
          <PageSizeSelect />
          <Text color="greyscale.6" fz="12px">
            entries
          </Text>
          <SearchInput size="sm" />
          {leftSections}
        </Group>
        {rightSections}
      </Group>
    </Paper>
  );
}
