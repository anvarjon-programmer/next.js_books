'use client'
import { Provider } from "react-redux"
import { store } from "../store/store"
import { ReactNode } from "react"

const AppProvider = ({children}: {children: ReactNode}) => {
    return (
        <Provider store={store}>{children}</Provider>
    )
}

export default AppProvider