import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const isCorrectCredentials = credentials =>
    credentials.username === process.env.NEXTAUTH_USERNAME &&
    credentials.password === process.env.NEXTAUTH_PASSWORD

const options = {
    providers: [
        CredentialsProvider({
            name: 'Username and Password',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Your Username" },
                password: { label: "Password", type: "Your Password"}
            },
            async authorize(credentials){
                if (isCorrectCredentials(credentials)){
                    const user = { id: 1, name: "Admin" }
                    return Promise.resolve(user)
                } else {
                    throw new Error('Invalid Login')
                }
            },
        }),
    ],
    pages: {
        signIn: '/admin/signin',
      }
}


export default (req, res) => NextAuth(req, res, options)