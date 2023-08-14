import { Profile } from '@/types/user'

const Profile_Key = 'seal_profile'
export function setProfile(data: Profile) {
	localStorage.setItem(Profile_Key, JSON.stringify(data))
}

export function getProfile() {
	return JSON.parse(localStorage.getItem(Profile_Key) || '{}')
}

export function removeProfile() {
	localStorage.removeItem(Profile_Key)
}
