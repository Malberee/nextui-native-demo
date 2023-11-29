import { ReactNode } from "react";
import { ColorName, RadiusName, SizeName } from "../../types";

export interface CodeProps {
    content: string
    size?: SizeName
    color?: ColorName
    radius?: RadiusName
}
