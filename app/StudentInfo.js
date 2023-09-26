export default function StudentInfo() {
    return (
        <div>
            <MyName/>
            <CourseSection/>
            <MyGitHubRepo/>
        </div>
    )
}

function MyName() {
    return <p>Clinton Crewe</p>
}

function CourseSection() {
    return <p>CPRG 306 B</p>
}

function MyGitHubRepo() {
    return <a href="https://github.com/Ccrewe92/crpg306-assignments">GitHub</a>
}