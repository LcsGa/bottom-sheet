import type { Directive } from "vue";

export const vBottomSheetTarget: Directive<HTMLButtonElement, string, "close"> = (
  target,
  { value, modifiers: { close } },
) => {
  const dialog = document.getElementById(value) as HTMLDialogElement;
  dialog.closedBy = "any";
  target.commandForElement = dialog;
  target.command = close ? "close" : "show-modal";
};
