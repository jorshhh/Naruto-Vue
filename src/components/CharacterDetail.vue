<template>
    <div class="container" style="margin-top: 20px">
        <h1>{{ title }}</h1>
        <p><img :src="image" style="width: 300px"></p>
        <p>{{ content }}</p>

    </div>
</template>

<script>

    export default {
        data(){
            return{
                title: "",
                content: "",
                image: ""
            }
        },

        created: function()
        {
            this.fetchItem();
        },

        methods: {
            fetchItem()
            {

                let uri = 'http://68.183.16.202:3000/characters/'+this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.title = response.data.title;
                    this.content = response.data.content;
                    this.image = response.data.image;

                }).catch(response => {
                    console.log(response);
                });
            },
            clickList: function (character) {
                this.$router.push({name:'character',params:{id:character._id}});
            },
        }
    }
</script>