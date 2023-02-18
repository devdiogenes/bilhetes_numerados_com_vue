<script setup>
    import { ref } from 'vue'
    import Input from './components/Input.vue'
    import Print from './components/Print.vue'

    const form = ref({
        title: "",
        subtitle_1: "", 
        subtitle_2: "",
        note: "",
        first_number: 1,
        last_number: 1
    })

    function update_form(e){
        form.value[e.name] = e.value
    }

    function print(){
        if(form.value.first_number > form.value.last_number){
            alert("Primeira etiqueta não pode ter um número maior que a última.")
        } else {
            window.print()
        }
    }

</script>
<template>
    <Print :data="form" />
    <div class="print:hidden bg-silver w-full h-screen flex flex-col items-center justify-center font-roboto">
        <div class="bg-white px-10 py-5 drop-shadow-md rounded-lg text-center flex flex-col items-center" >       
            <a href="http://devdiogenes.com"><h1 class="text-xl font-bold text-red mt-7 mb-3">{ <span class="text-black">Diógenes</span> }</h1></a>
            <h2 class="text-xl mt-3 mb-3 font-medium tracking-wide">Gerador de Bilhetes Numerados</h2>
            <form class="w-full" @submit.prevent="print">
                <Input @input="update_form" title="Título" name="title" maxlength="19"/>
                <Input @input="update_form" title="Subtítulo 1" name="subtitle_1" maxlength="25" />
                <Input @input="update_form" title="Subtítulo 2" name="subtitle_2" maxlength="25" />
                <Input @input="update_form" title="Observação" name="note" maxlength="26" />
                <div class="flex justify-between flex-wrap">
                    <Input @input="update_form" title="Número inicial" type="number" name="first_number" :default="1" required />   
                    <Input @input="update_form" title="Número final" type="number" name="last_number" :default="1" required />
                </div>
                <Input type="submit" />
            </form>
        </div>
    </div>
</template>