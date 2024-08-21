import './TwitterFollowCard.css'

export function TwitterFollowCard({formatUserName,userName, name, isFollowing}) {
  
  return (
    <article>
        <header>
            <img src={`https://unavatar.io/${userName}`} alt="Imagen de perfil de usuario" />
            <div>
                <strong>{name}</strong>
                <span>{formatUserName(userName)}</span>
            </div>
        </header>
        <aside>
            <button>Seguir</button>
        </aside>   
    </article>
  )
}
