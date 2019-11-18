<template> 
    <v-container> 
            <v-card> 
                <v-card-title> 
                    <span class="headline">Login User</span> 
                </v-card-title> 
                <v-card-text> 
                    <v-container> 
                        <v-row> 
                            <v-col cols="12"> 
                                <v-text-field label="Email*" v-model="form.email" required></v-text-field>
                            </v-col>
                            <v-col cols="12"> 
                                <v-text-field label="Password*" v-model="form.password" type="password" required></v-text-field> 
                            </v-col> 
                        </v-row> 
                    </v-container>
                    <small>*indicates required field</small> 
                </v-card-text> 
                <v-card-actions> 
                    <v-spacer></v-spacer> 
                    <v-btn color="blue darken-1" text @click="login()">login</v-btn> 
                </v-card-actions> 
            </v-card>
            <v-snackbar 
            v-model="snackbar"
            :color="color" 
            :multi-line="true" 
            :timeout="3000"
             > 
            {{ text }} 
            <v-btn 
                dark 
                text 
                @click="snackbar = false" 
            > 
                Close 
            </v-btn> 
        </v-snackbar>  
    </v-container> 
</template> 

<script> 
export default { 
    data () { 
        return { 
            users: [], 
            snackbar: false, 
            color: null, 
            text: '', 
            load: false,
            form: {  
                email : '', 
                password : '' 
            }, 
            user : new FormData, 
            errors : '', 
        } 
    }, 
    methods:{ 
        login() {
            var url = this.$apiUrl + "/auth";
            this.user = new FormData();
            this.user.append("email", this.form.email);
            this.user.append("password", this.form.password);
            this.$http.post(url, this.user).then(response => {
                if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                this.$router.push({ name: "UserController" });
                } else {
                alert("gagal login");
                }
            });
        }
    }
} 
</script>