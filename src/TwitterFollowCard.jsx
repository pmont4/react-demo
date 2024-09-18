import './TwitterFollowCard.css'
import { useState } from 'react'

export function TwitterFollowCard({username = 'not defined', name, InitialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(InitialIsFollowing);
    
    const ButtonText = isFollowing ? 'Following' : 'Follow'
    
    const ButtonClass = isFollowing ? 
        'tw-follow-card-button isfollowing' : 
        'tw-follow-card-button'

    const FormatUserName = (user) => 
        username === 'not defined' || username === '' ? 
        'not defined' : `@${user}`;

    return (
        <article className="tw-follow-card">
            <div className="tw-follow-card-body">
                <strong>{name}</strong>
                <span className='tw-follow-card-body-username'>{FormatUserName(username)}</span>
            </div>
            <aside>
                <button className={ButtonClass} onClick={()=> {
                    setIsFollowing(!isFollowing)
                }}>
                    {ButtonText}
                </button>
            </aside>
        </article>
    )
}