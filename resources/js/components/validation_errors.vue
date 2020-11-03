<template>
    <ul class="alert alert-danger">
        <li v-for="(value, key, index) in validationErrors">{{ value }}</li>
    </ul>
</template>
<script>
    export default {
        data() {
            return {}
        },
        props: ['errors'],
        computed: {
            validationErrors() {
                return Object.values(this.errors).flat();
            }
        },
        mounted() {
            //
        }
    }
</script>
