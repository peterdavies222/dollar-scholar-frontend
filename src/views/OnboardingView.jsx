import brandmark from '../assets/brandmark.svg'
import mascot1 from '../assets/onboarding/mascot-1.svg'
import mascot2 from '../assets/onboarding/mascot-2.svg'
import mascot3 from '../assets/onboarding/mascot-3.svg'
import chevronLeft from '../assets/onboarding/chevron-left.svg'
import chevronRight from '../assets/onboarding/chevron-right.svg'
import OnboardingFrame from '../components/OnboardingFrame'
import { useState, useEffect, useRef } from 'react'
import UserAPI from '../UserAPI'

export default function OnboardingView({currentUser}) {
    const carouselContainerRef = useRef(null)
    const onboardingFrameRef = useRef(null)
    const [currentFrame, setCurrentFrame] = useState(1)
    const next = () => {
        if(currentFrame === 3) return
        setCurrentFrame(prev => prev + 1)
    }
    const previous = () => {
        if(currentFrame === 1) return
        setCurrentFrame(prev => prev - 1)
    }
    const userOnboarded = (currentUser) => {
        UserAPI.onboardUser(currentUser._id)
    }
    useEffect(()=> {
        if(!carouselContainerRef.current) return
        const frames = carouselContainerRef.current.children
        if (frames.length === 0) return
       
        const frameWidth = frames[0].offsetWidth
        const gapWidth = Number(window.getComputedStyle(carouselContainerRef.current).gap.replace("px", ""))
        const scrollPosition = (currentFrame - 1) * (frameWidth + gapWidth)

        // Force Safari to recognize the scroll
        requestAnimationFrame(() => {
            carouselContainerRef.current.scrollLeft = scrollPosition
        })

    }, [currentFrame])

    useEffect(() => {
        const container = carouselContainerRef.current;
        if (!container) return;
        
        const preventScroll = (e) => {
            e.preventDefault();
        };
        
        container.addEventListener('wheel', preventScroll, { passive: false });
        container.addEventListener('touchmove', preventScroll, { passive: false });
        
        return () => {
            container.removeEventListener('wheel', preventScroll);
            container.removeEventListener('touchmove', preventScroll);
        };
    }, []);
    
    return (
        <div className="onboarding">
            <header className="main">
                <img src={brandmark} alt="Dollar Scholar" />
            </header>
            <main>
                <div className="carousel__wrapper">
                    <div className="carousel__container" ref={carouselContainerRef}>
                        <OnboardingFrame 
                            ref={onboardingFrameRef}
                            image={mascot1}
                            alt="Happy character with glasses"
                            title="Learn"
                            description="Discover useful topics relating to personal finance. Learn important content, test your knowledge, and earn rewards."
                            label="Next"
                            onClick={next}
                        />
                        <OnboardingFrame 
                            image={mascot2}
                            alt="Happy character scratching head"
                            title="Revise"
                            description="Explore all of the topics that you’ve learned. Revise content, and discover extra resources to learn even more."
                            label="Next"
                            onClick={next}
                        />
                        <OnboardingFrame 
                            image={mascot3}
                            alt="Happy character with flag"
                            title="Leaderboard"
                            description="See how you’re ranking compared to others. Complete more lessons to work your way up to the podium!"
                            label="Get learning!"
                            link="/learn"
                            onClick={()=>userOnboarded(currentUser)}
                        />
                    </div>
                </div>
            </main>
            <footer>
                <div className="scroll__indicator--container">
                    <button 
                        className={currentFrame === 1 ? 'hidden' : 'visible'} 
                        aria-hidden={currentFrame === 1 ? true : false} 
                        onClick={previous}>
                            <img src={chevronLeft} alt="Pevious" />
                        </button>
                    <div className="scroll__indicator">
                        <div className={`indicator ${currentFrame === 1 ? 'active' : 'inactive'}`}></div>
                        <div className={`indicator ${currentFrame === 2 ? 'active' : 'inactive'}`}></div>
                        <div className={`indicator ${currentFrame === 3 ? 'active' : 'inactive'}`}></div>
                    </div>
                    <button 
                        className={currentFrame === 3 ? 'hidden' : 'visible'} 
                        aria-hidden={currentFrame === 3 ? true : false} 
                        onClick={next}>
                            <img src={chevronRight} alt="Next" />
                        </button>
                </div>
            </footer>
        </div>
    )
}
