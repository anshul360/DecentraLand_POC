import { getUserData } from "@decentraland/Identity"

export let userData: any
export let userName: String
export let userId: String
export function logUserData() {
    executeTask(async () => {
        userData = await getUserData()
        log(userData)
        userName = userData.displayName
        userId = userData.userId
    })
}

logUserData()
