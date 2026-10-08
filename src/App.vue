<script setup lang="ts">
import { vBottomSheetTarget, UiBottomSheet } from "@/ui/bottom-sheet";
</script>

<template>
  <button v-bottom-sheet-target="'bottomSheet'">Open Bottom Sheet</button>

  <UiBottomSheet id="bottomSheet">
    <button v-bottom-sheet-target.close="'bottomSheet'">Close</button>
  </UiBottomSheet>
</template>
