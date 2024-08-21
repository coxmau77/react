import './TwitterFollowCard.css'

export function TwitterFollowCard({userName, name, isFollowing}) {
  console.log(isFollowing);
  return (
    <article>
        <header>
            <img src={`https://unavatar.io/${userName}`} alt="Imagen de perfil de usuario" />
            <div>
                <strong>{name}</strong>
                <span>@{userName}</span>
            </div>
        </header>
        <aside>
            <button>Seguir</button>
        </aside>   
    </article>
  )
}
