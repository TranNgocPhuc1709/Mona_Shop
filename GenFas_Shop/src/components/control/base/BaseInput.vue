<script lang="ts">
import BaseControl from '@src/components/control/base/BaseControl.vue';
export default {
    extends: BaseControl,

    methods:{
        goodbye(){
            const me = this;
            me.hello();
        }
    }
}
</script>