<template>
    <input type="text" :value="modelValue" @input="emits('update:modelValue', (<HTMLInputElement>$event.target).value)">
</template>

<script setup lang="ts" name="MyInput">
defineProps({
    modelValue: {
        type: String,
        default: ''
    }
})

const emits = defineEmits(['update:modelValue'])
</script>

<style scoped>
input {
    border: 1px solid red;
    background-image: linear-gradient(45deg, red, yellow, green);
    height: 30px;
    font-size: 20px;
    color: white;
}
</style>