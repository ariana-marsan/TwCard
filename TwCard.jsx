import { useState } from "react"

export function TwCard ({username =`unkwnown`, name=`unknown`}) {
    const [isFollowing, setIsFollowing]= useState(false)
    const changeState=()=>{
        setIsFollowing(!isFollowing)
      }

    const imgsrc=`https://unavatar.io/x/${username}`
    const twsrc= `https://x.com/${username}`
    const follow= isFollowing ? `Following` : `Follow`
    const buttonClassName = isFollowing ? `yes` : `no`

    return (
    <>
      <article className='total-conteiner'>
        <header className='user-conteiner'>
          <div>
            <img alt="icon" src={imgsrc} />
          </div>
          <div className='names-conteiner'>
            <strong>{name}</strong>
            <a rel="noreferrer" target="_blank" href={twsrc} >@{username}</a>
          </div>
        </header>
        <aside>
          <button className={buttonClassName} onClick={changeState}>
            <span className="span1">{follow}</span>
            <span className="span2">Unfollow</span>
          </button>
        </aside>
      </article>
      </>
    );
  }