import React from 'react'
import { skills } from "../../data/skills";

function SkillList() {
    return (
        <div className="d-flex justify-content-center pt-3">
            <ul className="list-group list-group-flush" style={{ width: "425px" }}>
                {skills.map((skill) => (
                    <li
                        key={skill.name}
                        className="list-group-item d-flex justify-content-between"
                    >
                        {skill.name}
                        <span class="badge bg-primary rounded-pill">{skill.star} ⭐</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SkillList