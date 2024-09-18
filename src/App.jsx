import './App.css'

import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        username: 'paulo',
        completename: 'paulo',
        isFollowing: true
    },
    {
        username: 'diego',
        completename: 'diego',
        isFollowing: false
    }
]

export function App() {
    return (
        <div className='usercontainer'>
            {
                users.map(({username, completename, isFollowing}) => (
                    <TwitterFollowCard
                        key={username} 
                        username={username} 
                        name={completename}
                        InitialIsFollowing={isFollowing}
                    /> 
                ))
            }
        </div>
    )
}