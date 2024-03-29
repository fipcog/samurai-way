import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true
})

export const appAPI = {
    getAuthData() {
        return instance.get<AuthResponseType>('/auth/me')
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<ResponseType<{ userId: number }>>(`/auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete<ResponseType>(`/auth/login`)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ResponseProfileType>(`/profile/${userId}`)
    },
    getProfileStatus(userId: string) {
        return instance.get<string>(`/profile/status/${userId}`)
    },
    setProfileStatus(status: string) {
        return instance.put<ResponseType>(`/profile/status`, { status })
    },
    uploadImage(image: File) {
        const formData = new FormData()
        formData.append('image', image)
        return instance.put<uploadImage>(`/profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    }
}

export const usersAPI = {
    getUsers(pageNum: number = 1, pageSize: number = 10) {
        return instance.get<ResponseUsersType>(`/users?count=${pageSize}&page=${pageNum}`)
    },
    followUser(userId: string) {
        return instance.post(`/follow/${userId}`)
    },
    unfollowUser(userId: string) {
        return instance.delete(`/follow/${userId}`)
    }
}

export type uploadImage = ResponseType<{
    photos: { small: string, large: string }
}>

export type ResponseProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}

export type UserType = {
    id: string
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
    status: string
    name: string
    uniqueUrlName?: string
    // location: {city: string, country: string}
}

export type ResponseUsersType = {
    items: UserType[]
    totalCount: number
    error: string
}

export type AuthDataType = {
    id: number
    email: string
    login: string
}

export type AuthResponseType = {
    data: AuthDataType
    resultCode: number
    messages: string[]
}
type ResponseType<T = {}> = {
    data: T
    resultCode: number
    messages: string[]
}

