let app = new Vue({
    el: '#app',
    data() {
        return { 
            projects: Data.projects,
            skills: Data.skills
        }
    }
})