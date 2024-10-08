export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    active?: boolean,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
}

export type allUserState = {
    users: UserType[],
    usersArchive: UserType[],
    isLoading: boolean,
    error: null | string,
}

export type currentUserState = {
    user: UserType[],
    isLoading: boolean,
    error: null | string,
}

export type DropdownType = {
    id: number,
    setDropdown: (dropdown: boolean) => void
}