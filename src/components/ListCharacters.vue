<template>
    <div class="container" style="margin-top: 20px">
        <h1>Naruto Characters</h1>
        <table class="table table-hover">
            <thead>
            <tr>
                <td>Name</td>
                <td>Picture</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="character in characters" :key="character._id" v-on:click="clickList(character)">
                <td>{{ character.title }}</td>
                <td><img style="height: 250px" :src="character.image"></td>
            </tr>
            </tbody>
        </table>

        <p>
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="fetchItems(1)">First</button>
            <button v-if="page != 1" type="button" class="btn btn-sm btn-outline-secondary" @click="fetchItems(page-1)">Previous</button>
            <button v-if="page < meta.pages" type="button" class="btn btn-sm btn-outline-secondary" @click="fetchItems(page+1)">Next</button>
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="fetchItems(meta.pages)">Last</button>

        </p>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                characters: [],
                page: 0,
                meta: [],
            }
        },

        created: function()
        {
            this.fetchItems(1);
        },

        methods: {
            fetchItems(fetchPage)
            {

                if(fetchPage < 1){
                    fetchPage = 1;
                }

                if(fetchPage > this.meta.pages){
                    fetchPage = this.meta.pages;
                }

                this.page = fetchPage;

                let uri = 'http://68.183.16.202:3000/characters?page='+fetchPage;
                this.axios.get(uri).then((response) => {
                    this.characters = response.data.docs;
                    this.meta = response.data;
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