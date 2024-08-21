import { useState } from 'react'
import './TwitterFollowCard.css'

export function TwitterFollowCard({children,formatUserName,userName = 'Unknow ??'}) {

  const [isFollowing, setIsfollowing] = useState(false)

  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassFollow = isFollowing ? 'is-following' : ''

  const handleClick = () =>{
    setIsfollowing(!isFollowing)
  }

  return (
    <article>
        <header>
            <img src={`https://unavatar.io/${userName}`} alt="Imagen de perfil de usuario" />
            <div>
                <strong>{children}</strong>
                <span>{formatUserName(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassFollow} onClick={handleClick}>
              {buttonText}
            </button>
        </aside>   
    </article>
  )
}
