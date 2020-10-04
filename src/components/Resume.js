import React from 'react';

const Resume = () => {
    return (
        <>
            <section className="resume-sec container">
                <div className="title">
                    <h2>Resume</h2>
                </div>
                <div className="resume-content">
                    <p>Download my resume <a href="#">Here</a></p>
                    <h4>Front-End Proficiencies</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Resume;