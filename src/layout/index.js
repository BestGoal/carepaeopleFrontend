import React from "react"
import MainLayout from "./mainLayout"

const ContextLayout = React.createContext()
class Layout extends React.Component {
    render() {
        return (
            <ContextLayout.Provider
                value={{
                    MainLayout
                }}
            >
                {this.props.children}
            </ContextLayout.Provider>
        )
    }
}

export { Layout, ContextLayout }