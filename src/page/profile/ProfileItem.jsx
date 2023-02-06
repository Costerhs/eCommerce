import React from 'react'
let obj = {
    "id": 172,
    "username": "qewert",
    "phone_number": "+996700121212",
    "birth_date": "2023-01-31",
    "avatarka": "https://cryxxen.pythonanywhere.com/media/user_avatars/image_B8JrhSx.jpg",
    "about": "asdasdasdasd",
    "created": "2023-01-30T18:47:06.203655Z",
    "last_activity": "2023-02-05T16:34:08.900016Z",
    "is_online": false
}

const ProfileItem = ({ user }) => {
    return (
        <>
            <div className="profile__img">
                <img src={'https://cryxxen.pythonanywhere.com/' + user.avatarka} alt="ava" />
            </div>
            <div className="profile__description">
                <div className="profile__name">
                    username: {user.username}
                </div>
                <div className="profile__double">
                    <p>Email: {user.email}</p>
                    <p>Phone Number: {user.phone_number}</p>
                </div>
                <div className="profile__birth">
                    Birth Date: {user.birth_date}
                </div>
                <div className="profile__about">
                    About: {user.about}
                </div>
            </div>
        </>
    )
}

export default ProfileItem