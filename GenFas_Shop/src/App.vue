<template>
  <GButton :control="buttonOrder"></GButton>
  <GButton :control="buttonPay"></GButton>
</template>

<script lang="ts">
import { Ref, ref } from 'vue';
import GButton from './components/control/button/GButton.vue';
import Button from './models/control/button/Button';
export default {
  components: {
    GButton
  },

  /**
   * Hook, khởi tạo dữ liệu ban đầu ~~ Data
   */
  setup(){
    const buttonOrder : Ref<Button> = ref(new Button({
      fieldText: "XemGioHang",
      readonly: true
    }));

    const buttonPay : Ref<Button> = ref(new Button({
      fieldText: "Thanh toans",
      readonly: true
    }));

    return {
      buttonOrder,
      buttonPay
    }
  },
}
</script>