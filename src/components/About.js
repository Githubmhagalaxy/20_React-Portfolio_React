import React from 'react';

const About = () => {
    return (
        <section className='about-section container'>
            <div className="title">
                <h2>About Me</h2>
            </div>
            <figure className="picture">
                {/*<img src={userIcon} alt="user"/>*/}
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user"
                     className="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                    <path fill="currentColor"
                          d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                </svg>
            </figure>
            <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dignissimos, ducimus eaque, eveniet in maxime non omnis praesentium, quas repellendus repudiandae sed soluta suscipit temporibus vel veritatis vero voluptas? Accusamus aliquam asperiores assumenda aut culpa eaque error est fugit in itaque labore necessitatibus neque non perspiciatis, quis tempora tenetur voluptas!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid asperiores aspernatur beatae consectetur dolore eius error est, eum facilis fuga fugiat laudantium magnam nihil quidem recusandae rem suscipit temporibus voluptas voluptates. Ab animi consequatur esse facere facilis inventore iusto, mollitia placeat quidem quisquam recusandae reprehenderit voluptatum. At esse hic ut! Aliquid aperiam assumenda corporis error, ipsa ipsam odit perspiciatis quasi totam voluptatem. At debitis nam nemo qui quibusdam. Delectus deleniti dolorem dolorum illo maxime sit suscipit voluptas! Assumenda cumque dolor, dolores doloribus eos id ipsum possimus soluta. Eaque, repudiandae?</p>
            </div>
        </section>
    );
};

export default About;