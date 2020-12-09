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
const storage  = firebase.storage().ref()
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
            projects: {},
            newProject: {},
            skills: {},
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
    },
    methods: {
        updateProjects() {
            projectsDB.set(this.projects)
        },
        updateSkills() {
            skillsDB.set(this.skills)
        },
        addProject() {
            firebase.database().ref(`data/projects/${this.newProject.name}`).set(this.newProject)
            this.newProject = {}
        },
        addSkill() {
            firebase.database().ref(`data/skills/${this.newSkill.name}`).set(this.newSkill)
            this.newSkill = {}
        }
    },
    template: `
        <div id="admin-settings">
            <div class="admin-projects">
                <h3>Projects</h3>
                <div v-for="project in projects">               
                    <input type="text" v-model="project.name" />
                    <input type="text" v-model="project.description" />
                    <input type="text" v-model="project.image" />
                    <input type="text" v-model="project.url" />
                    <input type="text" v-model="project.source" />
                    <hr>
                </div>
                <input type="button" value="Update Projects" v-on:click="updateProjects" />
            </div>

            <div class="admin-new-project">
                <h3>New Project</h3>
                <input type="text" v-model="newProject.name" />
                <input type="text" v-model="newProject.description" />
                <input type="text" v-model="newProject.image" />
                <input type="text" v-model="newProject.url" />
                <input type="text" v-model="newProject.source" />
                <input type="button" value="Add Skill" v-on:click="addProject" />
            </div>

            <div class="admin-skills">
                <h3>Skills</h3>
                <div v-for="skill in skills">
                    <input type="text" v-model="skill.name" />
                    <input type="text" v-model="skill.level" />
                    <hr>
                </div>
                <input type="button" value="Update Skill" v-on:click="updateSkills" />
            </div>

            <div class="admin-new-skill">
                <h3>New Skill</h3>
                <input type="text" v-model="newSkill.name" />
                <input type="text" v-model="newSkill.level" />
                <input type="button" value="Add Skill" v-on:click="addSkill" />
            </div>
        </div>
    `
})

function adminSignIn() {
    let email = document.getElementById('admin-email').value
    let password = document.getElementById('admin-password').value
    
    auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
        admin.$mount('#admin-sign-in')
        document.getElementById('admin-settings').classList.toggle('grow')
    })
    .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
    })
}

function toggleAdminPanel() {
    document.getElementById('admin').classList.toggle('show')
    document.getElementById('admin').classList.toggle('hide')
}