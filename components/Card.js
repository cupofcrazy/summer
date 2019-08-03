import React from 'react';
import Link from 'next/link';

const Card = ({ index, title, slug }) => {
    const url = `https://loremflickr.com/200/200?random=${index+1}`
    console.log(slug)
    return (
        <div>
        <div className="card">
            <Link prefetch href={`/hero/[slug]`} as={`/hero/${slug}`}>
                <div className="card-content">
                    <img src={ url }
                        alt="image-description" />
                    <div className="top">
                        <h2>{ title }</h2>
                    </div>
                    <div className="bottom">
                        
                        <h1>0{ index+1 }</h1>
                    </div>
                </div>
            </Link>

            <style jsx>{`
                a {
                    text-decoration: none;
                }
                .card {
                    width: 100%;
                    position: relative;
                    
                    border-bottom: 1px solid #111;
                    cursor: pointer;
                    transition: all .5s ease;
                }
                .card-content {
                    padding: 2em 1em;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .card:hover {
                    background: #111;
                    transition: all .5s ease;
                }
                .card:hover .top {
                    color: #ffb7c1;
                }
                .card:hover .bottom {
                    color: #ffb7c1;
                }
                img {
                    width: 16vw;
                }
                .card .top {
                    font-family: Poppins, sans-serif;
                    font-weight: 100;
                    font-size: 3vw;
                }

                .bottom {
                    font-family: Old Standard TT, serif;
                    transform: rotate(90deg);
                    font-weight: 100;
                    font-size: 4vw;
                }
            `}</style>
        </div>
        </div>
    );
};

export default Card;