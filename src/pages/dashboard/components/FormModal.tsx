import { ActionIcon, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPencil, IconTrash } from "@tabler/icons-react";

export function EditButton() {
  const [opened, { open, close }] = useDisclosure();
  return (
    <>
      <Modal opened={opened} onClose={close} title="Edit" size="xl">
        <div>Edit</div>
      </Modal>
      <ActionIcon variant="subtle" onClick={open}>
        {<IconPencil />}
      </ActionIcon>
    </>
  );
}

export function DeleteButton() {
  const [opened, { open, close }] = useDisclosure();
  return (
    <>
      <Modal opened={opened} onClose={close} title="Delete" size="xl">
        <div>Delete</div>
      </Modal>
      <ActionIcon variant="subtle" onClick={open}>
        {<IconTrash />}
      </ActionIcon>
    </>
  );
}
