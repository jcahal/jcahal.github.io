// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBiDktUxQ-kAPc2i376VRC5qqCiLDNXukQ",
    authDomain: "jcahal-github-io.firebaseapp.com",
    databaseURL: "https://jcahal-github-io-default-rtdb.firebaseio.com",
    projectId: "jcahal-github-io",
    storageBucket: "jcahal-github-io.appspot.com",
    messagingSenderId: "910203885416",
    appId: "1:910203885416:web:bacb4971cdee688e85a8dd"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const projectsDB = firebase.database().ref('data/projects/')
const skillsDB = firebase.database().ref('data/skills/')
const filesDB  = firebase.storage().ref()
const auth = firebase.auth()

let app = new Vue({
    el: '#app',
    data() {
        return { 
            projects: {},
            skills: {}
        }
    },
    created() {
        projectsDB.on('value', snapshot => {
            this.projects = snapshot.val()
        })

        skillsDB.on('value', snapshot => {
            this.skills = snapshot.val()
        })
    }
})

let admin = new Vue({
    data() {
        return { 
            user: {},
            error: {},
            projects: {},
            skills: {},
            files: {},
            newProject: {},
            newSkill: {}
        }
    },
    created() {
        projectsDB.on('value', snapshot => {
            this.projects = snapshot.val()
        })

        skillsDB.on('value', snapshot => {
            this.skills = snapshot.val()
        })

        filesDB.listAll().then(list => {

            list.items.forEach(file => {
                this.files[file.name] = {name: file.name}

                filesDB.child(file.name).getMetadata().then(metadata => {
                    this.files[file.name].type = metadata.contentType
                })

                filesDB.child(file.name).getDownloadURL().then(url => {
                    this.files[file.name].url = url
                })
            })
        })
    },
    mounted() {
        // document.getElementById('projects-loader').classList.toggle('show')
        // document.getElementById('skills-loader').classList.toggle('show')
    },
    methods: {
        addProject() {
            projectsDB.child(encodeURIComponent(this.newProject.name)).set(this.newProject).catch(error => {
                console.log(error)
                document.getElementById('admin-msg').innerHTML = `
                    <div class="error">${error.code}: ${error.message}</div>
                `
            })
            this.newProject = {}
        },

        updateProject(project) {
            projectsDB.child(encodeURIComponent(project.name)).set(project).catch(error => {
                console.log(error)
                document.getElementById('admin-msg').innerHTML = `
                    <div class="error">${error.code}: ${error.message}</div>
                `
            })
        },

        deleteProject(project) {
            projectsDB.child(encodeURIComponent(project.name)).remove().catch(error => {
                console.log(error)
                document.getElementById('admin-msg').innerHTML = `
                    <div class="error">${error.code}: ${error.message}</div>
                `
            })
        },

        addSkill() {
            skillsDB.child(encodeURIComponent(this.newSkill.name)).set(this.newSkill).catch(error => {
                console.log(error)
                document.getElementById('admin-msg').innerHTML = `
                    <div class="error">${error.code}: ${error.message}</div>
                `
            })
            this.newSkill = {}
        },

        updateSkill(skill) {
            skillsDB.child(encodeURIComponent(this.newSkill.name)).set(skill).catch(error => {
                console.log(error)
                document.getElementById('admin-msg').innerHTML = `
                    <div class="error">${error.code}: ${error.message}</div>
                `
            })
        },

        deleteSkill(skill) {
            skillsDB.child(encodeURIComponent(this.newSkill.name)).remove().catch(error => {
                console.log(error)
                document.getElementById('admin-msg').innerHTML = `
                    <div class="error">${error.code}: ${error.message}</div>
                `
            })
        },

        uploadFile() {
            let newFile = document.querySelector('#new-file').files[0]
            filesDB.child(newFile.name).put(newFile)
        },

        deleteFile(file) {
            filesDB.child(file.name).delete()
        }
    },
    template: `
        <div id="admin-settings">

            <div id="admin-new-project">
                <h3>New Project</h3>
                <input type="text" v-model="newProject.name" placeholder="Name" />
                <input type="text" v-model="newProject.description" placeholder="Description" />
                <label for="new-project-image-selector">Select an Image</label>
                <select id="new-project-image-selector" v-model="newProject.imageURL">
                    <option value="">--</option>
                    <option v-for="file in files" v-bind:value="file.url">{{file.name}}</option>
                </select>
                <input type="text" v-model="newProject.url" placeholder="URL" />
                <input type="text" v-model="newProject.source" placeholder="Source" />
                <input type="button" value="Add Project" @click="addProject()" />
            </div>

            <div id="admin-new-skill">
                <h3>New Skill</h3>
                <input type="text" v-model="newSkill.name" placeholder="Name" />
                <input type="text" v-model="newSkill.level" placeholder="Level" />
                <input type="button" value="Add Skill" @click="addSkill" />
            </div>

            <div id="admin-new-file">
                <h3>New File</h3>
                <input id="new-file" type="file" />
                <input type="button" value="Upload" @click="uploadFile" />
            </div>

            <div id="admin-projects">
                <h3>Projects</h3>
                <div v-for="project in projects">             
                    <input type="text" v-model="project.name" />
                    <input type="text" v-model="project.description" />
                    <label for="project-image-selector">Select an Image</label>
                    <select id="project-image-selector" v-model="project.imageURL">
                        <option value="">--</option>
                        <option v-for="file in files" v-bind:value="file.url">{{file.name}}</option>
                    </select>
                    <input type="text" v-model="project.url" />
                    <input type="text" v-model="project.source" />
                    <button><i style="color: red;" class="fas fa-trash" @click="deleteProject(project)"></i></button>
                    <button><i style="color: green;" class="fas fa-save" @click="updateProject(project)"></i></button>
                </div>
            </div>

            <div id="admin-skills">
                <h3>Skills</h3>
                <div v-for="skill in skills">
                    <input type="text" v-model="skill.name" />
                    <input type="text" v-model="skill.level" />
                    <button><i style="color: red;" class="fas fa-trash" @click="deleteSkill(skill)"></i></button>
                    <button><i style="color: green;" class="fas fa-save" @click="updateSkill(skill)"></i></button>
                </div>
            </div>

            <div id="admin-files">
                <h3>Files</h3>
                <div v-for="file in files">
                    {{ file.name }} | <button><i style="color: red;" class="fas fa-trash" @click="deleteFile(file)"></i></button><br>
                    <img style="width: 150px" v-if="file.type == 'image/png'" v-bind:src="file.url" />
                </div>
            </div>
        </div>
    `
})

function adminSignIn() {
    let email = document.getElementById('admin-email').value
    let password = document.getElementById('admin-password').value

    auth.signInWithEmailAndPassword(email, password).then(user => {
        admin.user = user
        admin.$mount('#admin-sign-in')
        document.querySelector('#admin-settings').classList.toggle('grow')
    })
    .catch(error => {
        console.log(error)
        document.getElementById('sign-in-msg').innerHTML = `
            <div class="error">${error.code}: ${error.message}</div>
        `
    })
}

function toggleAdminPanel() {
    document.getElementById('admin').classList.toggle('show')
    document.getElementById('admin').classList.toggle('hide')
}