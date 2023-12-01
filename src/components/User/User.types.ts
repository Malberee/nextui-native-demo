import { ReactNode } from "react"
import { AvatarProps } from "../Avatar/Avatar.types"

export interface UserProps {
    name: string
    description?: ReactNode
    avatarProps: AvatarProps
}
