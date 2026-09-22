function about(req, res) {
    const skills = [
        {
            name: "HTML",
            level: 90,
            category: "Frontend"
        },
        {
            name: "CSS",
            level: 85,
            category: "Frontend"
        },
        {
            name: "JavaScript",
            level: 80,
            category: "Programming"
        },
        {
            name: "Node.js",
            level: 80,
            category: "Backend"
        },
        {
            name: "Express.js",
            level: 80,
            category: "Backend"
        },
        {
            name: "MySQL",
            level: 75,
            category: "Database"
        },
        {
            name: "EJS",
            level: 80,
            category: "Template Engine"
        },
        {
            name: "Git",
            level: 75,
            category: "Tools"
        }
    ];

    res.render("about", {
        skills: skills
    });
}

module.exports = {
    about
};