<template lang="pug">
  .root
    .container
      ability-list.list(
        :abilities="abilities"
        @change="$emit('change-value', $event)"
      )
    .button-wrapper
      el-button.generate-button(
        type="infor"
        @click="$emit('click-generate')"
      )
        | 設定ファイルの生成
    show-json-modal(
      :json="json"
      :open="showJsonModal"
      @click-close="$emit('click-close')"
      @click-copy="$emit('click-copy')"
    )
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api"
import AppHeader from "../organisms/AppHeader.vue"
import AbilityList, { Ability } from "../organisms/AbilityList.vue"
import ShowJsonModal from "../organisms/ShowJsonModal.vue"
import { Json } from "../molecules/HighlightJson.vue"

export default defineComponent({
  components: {
    AppHeader,
    AbilityList,
    ShowJsonModal
  },

  props: {
    abilities: {
      type: Array as PropType<Ability[]>,
      required: true
    },
    json: {
      type: Object as PropType<Json>,
      required: true
    },
    showJsonModal: {
      type: Boolean,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.root {
  height: calc(100vh - 120px);
  overflow-y: scroll;
  .container {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    flex-direction: column;

    .list {
      height: 70%;
      width: 100%;
    }
  }
  .button-wrapper {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;

    .generate-button {
      width: 200px;
    }
  }
}
</style>
