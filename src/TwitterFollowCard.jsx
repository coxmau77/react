import './TwitterFollowCard.css'

export function TwitterFollowCard({children,formatUserName,userName = 'Unknow ??', isFollowing}) {
  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassFollow = isFollowing ? 'is-following' : ''
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
            <button className={buttonClassFollow}>
              {buttonText}
            </button>
        </aside>   
    </article>
  )
}
