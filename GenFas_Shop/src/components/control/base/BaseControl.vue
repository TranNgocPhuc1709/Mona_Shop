<script lang="ts">
import BaseControl from "@src/models/control/basecontrol/BaseControl.ts"
export default {

    props:{
        control:{
            type: BaseControl
        }
    },
    methods: {
        hello() {
            console.log("hello")
        }
    }
}
</script>