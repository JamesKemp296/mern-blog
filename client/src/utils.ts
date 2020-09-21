export const BLUE = "#2B87D1"
export const RED = "#CE2635"
export const GREEN = "#4BDB6A"
export const LIGHT_BLUE = "#45b1ff"
export const OFF_WHTIE = "#e5e8f4" // body color
export const MINT_GREEN = "#2BD1B0"
export const ORANGE = "#FF9245"
export const LIGHT_GREY = "#C2C2C2"
export const DARK_GREY = "#858585"

export const SM_MEDIA_QUERY = "(max-width:600px)"

// Enums

export const title = "Large"

export enum Route {
  Home = "/",
  Login = "/login",
  SignUp = "/signup",
  Dashboard = "/dashboard",
  Blog = "/blog/",
}

export enum Icon {
  Speed,
  Target,
  Squares,
  Hearing,
  Keyboard,
  Numbers,
  Book,
}

export enum GameLink {
  Reaction = "/tests/reaction-time",
  Numbers = "/tests/numbers",
  None = "",
}

// interfaces
export interface Blog {
  _id: string
  title: string
  body: string
  description: string
  createdAt: any
  tags: string[]
  link: string
}

// Information
