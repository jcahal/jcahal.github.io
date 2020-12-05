new Vue({
    el: '#app',
    data() {
        return {
            name: 'Jonathan Cahal',
            title: 'Computer Systems Engineer',
            projects: [
                {name: 'GNITO', description: 'Free private one-way messenger', image: "gnito-screenshot.png", url: "", source: "", version: ""},
            ],
            skills: [
                "JavaScript"
            ]
        };
    }
});