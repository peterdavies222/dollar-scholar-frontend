import { SlAvatar } from '@shoelace-style/shoelace/dist/react'
import { fetchAvatar } from '../Utils'

export default function LeaderboardUser(props) {
    return (
        <div className={`leaderboard__user ${props.isCurrentUser ? 'current__user' : null}`}>
            <div>
                <p className="placing">{props.placing}</p>
                <SlAvatar image={fetchAvatar(props.avatar)}/>
                <p className="username">{props.isCurrentUser ? 'You' : props.username}</p>
            </div>
            <p className="lessons__count">{`${props.lessonsCount} lesson${props.lessonsCount == 1 ? '' : 's'}`}</p>
        </div>
    )
}