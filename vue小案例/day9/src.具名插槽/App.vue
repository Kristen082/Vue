<template>
  <div>
    <my-dialog>
      <template v-slot:header>
        <div class="dialog-header">
          <h3>标题</h3>
          <span>x</span>
        </div>
      </template>
      <input type="text">
      <template v-slot:footer>
        <div>
          999
        </div>
      </template>
    </my-dialog>
  </div>
</template>
<script>
import myDialog from "./components/dialog";
export default {
    props: {},
    components: {
        myDialog
    },
    data() {
        return {};
    },
    computed: {},
    methods: {},
    created() {},
    mounted() {}
};
</script>
<style  lang="">
</style>