import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './whyus.css'
gsap.registerPlugin(ScrollTrigger)


export default function Whyus() {

    const whyUsRef = useRef(null);

    useEffect(() => {
          const whyUsItems = whyUsRef.current.querySelectorAll('dd');

        whyUsItems.forEach((item) => {
            gsap.from(item, {
              opacity: 0,
              yPercent: -200,
              ease: 'back.out',
              duration: 1,
              
              scrollTrigger: {
                trigger: item,
                stagger: 0.1,
                start: 'top 50%',
                end: 'bottom 20%', // Adjust the end value as needed
                // markers: true 
              },
            });
          });

    }, []);


    return (
        <div className='whyus font-inter-light'>
            <div className='container'>
                <header className="header">

                    <h1>Why Partner With Us?</h1>
                    {/* </hgroup> */}
                </header>

                <section className="demo font-inter-light" >

                    <dl className="list maki" ref={whyUsRef} >
                        <dd>Highly engaged audience</dd>
                        <dd><a href="/">Increase brand visibility</a></dd>
                        <dd><a href="/">Support an important cause</a></dd>
                        <dd><a href="/">Increase brand visibility</a></dd>
                        <dd><a href="/">Customized sponsorship packages</a></dd>
                        <dd><a href="/">Brand association with TEDx</a></dd>
                        <dd><a href="/">Positive brand image</a></dd>
                        <dd><a href="/">Negitoro</a></dd>
                    <dd><a href="/">Oshinko</a></dd>
                    <dd><a href="/">Otoro</a></dd>
                    <dd><a href="/">Tekka</a></dd>
                    </dl>


                </section>



            </div>
        </div>
    )
}