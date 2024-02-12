import './Card.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, } from 'react';
import Tilt from 'react-parallax-tilt';


gsap.registerPlugin(ScrollTrigger);

export default function Card(props){

    //hover text animation
    const cardRef = useRef(null);
    const twitterTween = useRef(null);

    useEffect(() => {

        let tl = gsap.timeline();
        tl.fromTo('.card',{
            opacity:0,
            xPercent:140,
            scale: 0.3,
        },{
            scale:1,
            opacity: 1,
            xPercent: 0,
            delay: 2,
            duration: 1.5,
            ease: "circ.out",
        })
        let mm = gsap.matchMedia();
        mm.add("(max-width: 480px)", () => {
            tl.fromTo('.card',{
                opacity:0,
                xPercent:140,
                scale: 0.3,
            },{
                scale:1,
                opacity: 1,
                ease: "back.out(1.7)",
                xPercent: 0,
                delay: 2,
                duration: 1.5,
                ease: "circ.out",
            })
        })


        twitterTween.current = gsap.to(cardRef.current, {
        opacity:1,
        yPercent: 0,
        duration: 2,
        });

        
        twitterTween.current.delay(0.5);
    }, []);

    const mouseEnterEvent = () => {
        twitterTween.current.play();
    };
    const mouseLeaveEvent = () => {
        twitterTween.current.reverse();
    };


    let name = props.name;
    let image = props.img;
    let IQ = props.IQ;
    let humour = props.humour;
    let cuteness = props.cuteness;
    let anger = props.anger;
    let ig = props.ig;
    let info = props.info;
    let fun = props.fun;


    return(
        <div className='card-wrapper'><Tilt>
            <div className='card'  >
                <div>
                    <h1 className='name'>{name}</h1>
                </div>

                <img src={props.img} className='speakerImage'></img>

                <p ref={cardRef} className='info'>
                        {info}
                    </p>

                    <div className='icons'>
                        <a href='' className='insta'>
                            <img src={require('../images/instagram_1384063.png')} width='30px'></img>
                        </a>

                        <a href='' className='linkedin'>
                            <img src={require('../images/icons8-linkedin-144.png')} width='30px'></img>
                        </a>
                    </div>

                

                <div className='hoverCard'>    
                    <div className='stats-section'>                        
                        
                        <div className='metrics'>
                            <span>Humour: </span>
                            <span>Cuteness: </span>
                            <span>Anger: </span>
                            <span>IQ: </span>
                            <span>Fun: </span>
                        </div>

                        <div className='scores'>
                            <div className='humourStat' style={{width:`${humour}%`}}></div>
                            <div className='cutenessStat' style={{width:`${cuteness}%`}}></div>
                            <div className='angerStat' style={{width:`${anger}%`}}></div>
                            <div className='IQStat' style={{width:`${IQ}%`}}></div>
                            <div className='funStat' style={{width:`${fun}%`}}></div>
                        </div>
                        
                    </div>
                        
                </div>
            </div></Tilt>
            
            
        </div>
    )
}