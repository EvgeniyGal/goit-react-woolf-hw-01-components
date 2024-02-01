import css from './Friends.module.css'

export default function FriendsItem({friend:{ isOnline, avatar, name}}){
    return (
        
        <li className={css["item"]}>
  <span className={isOnline ? css["status-active"] : css["status-off_line"]}></span>
  <img className={css["avatar"]} src={avatar} alt={name} width="48" />
  <p className={css["name"]}>{name}</p>
</li>
    )
}