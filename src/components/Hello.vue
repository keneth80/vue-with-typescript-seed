<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="click">Click</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import lodash from 'lodash';
// import d3 from '../lib/d3/d3.min';
import Store from 'store';

@Component({})
export default class Hello extends Vue {
    message: string = 'Hello Kenneth!';

    get fullMessage() {
        return `${this.message} from Typescript`;
    }

    created() {
        console.log('created', lodash, Store);
    }

    click() {
        console.log('clicked');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
