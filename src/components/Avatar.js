const Avatar = (props)=>{
    return(
        <div>
            <img className="Avatar"
                src={props.img.avatarUrl}
                alt={props.img.name} />
        </div>
    )
}

export default Avatar