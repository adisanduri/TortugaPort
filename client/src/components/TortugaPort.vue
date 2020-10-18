<template>
    <v-card>
        <v-card-title>
            Vessels
            <v-spacer></v-spacer>
            <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
                :headers="headers"
                :items="vessels"
                :search="search"
                class="elevation-1"
                sort-by="duration"
                sort-desc="true"
        >
            <template v-slot:item.duration="{item}">
                {{pretty(item.duration)}}
            </template>
            <template v-slot:item.actions="{ item }">
                <v-switch v-model="item.enterToPort"
                          color="green"
                          hide-details
                          @change="stopOrStart(item)">
                </v-switch>
            </template>
        </v-data-table>
    </v-card>

</template>

<script>
    import prettyMilliseconds from 'pretty-ms';

    export default {
        name: "TortugaPort",
        data() {
            return {
                headers: [
                    {
                        text: 'Name',
                        value :'name',
                    },
                    {
                        text: 'Duration',
                        value : 'duration',
                    },
                    { text: 'Stop/Start', value: 'actions', sortable: false },

                ],
                vessels: [],
                search: '',
            }
        },
        methods: {
            async getAllVessels() {
                const response = await fetch('/api/vessels');
                await response.json().then(response => {
                    this.vessels = response.map(currVessel => {
                        currVessel.enterToPort = false;
                        return currVessel;
                    });
                });
            },
            stopOrStart(item) {

                if (item.enterToPort) {
                    item.time = new Date().getTime();
                }else {
                    item.duration += (new Date().getTime() - item.time);
                }
            },
            pretty(item) {
                return prettyMilliseconds(item);
            }
        },
        mounted () {
            this.getAllVessels();
        }
    }
</script>

<style scoped>

</style>