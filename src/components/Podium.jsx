import { SlAvatar } from '@shoelace-style/shoelace/dist/react'
import { fetchAvatar } from '../Utils'

export default function Podium({firstPlace, secondPlace, thirdPlace, currentUser}) {
    
    return (
        <div className="podium">
            <div className="podium__place podium__place--2">
                <div className="profile">
                    <SlAvatar image={fetchAvatar(secondPlace?.avatar) || ''}/>
                    <p className="profile__username">{secondPlace?.username === currentUser?.username ? 'You' : secondPlace?.username}</p>
                    <p className="profile__lessons-count">{`${secondPlace?.recentlyCompletedLessonsCount} lesson${secondPlace?.recentlyCompletedLessonsCount == 1 ? '' : 's'}` || 'placeholder'}</p>
                </div>
                <div className="podium__stand">
                    2
                </div>
            </div>
            <div className="podium__place podium__place--1">
                <div className="profile">
                    <SlAvatar image={fetchAvatar(firstPlace?.avatar) || ''}/>
                    <p className="profile__username">{firstPlace?.username === currentUser?.username ? 'You' : firstPlace?.username}</p>
                    <p className="profile__lessons-count">{`${firstPlace?.recentlyCompletedLessonsCount} lesson${firstPlace?.recentlyCompletedLessonsCount == 1 ? '' : 's'}` || 'placeholder'}</p>
                </div>
                <div className="podium__stand">
                    1
                </div>
            </div>
            <div className="podium__place podium__place--3">
                <div className="profile">
                    <SlAvatar image={fetchAvatar(thirdPlace?.avatar) || ''}/>
                    <p className="profile__username">{thirdPlace?.username === currentUser?.username ? 'You' : thirdPlace?.username}</p>
                    <p className="profile__lessons-count">{`${thirdPlace?.recentlyCompletedLessonsCount} lesson${thirdPlace?.recentlyCompletedLessonsCount == 1 ? '' : 's'}` || 'placeholder'}</p>
                </div>
                <div className="podium__stand">
                    3
                </div>
            </div>
        </div>
    )
}