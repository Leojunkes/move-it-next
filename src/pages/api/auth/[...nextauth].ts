import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
            clientId: process.env.KEY_ID,
            //clientId:process.env.GITHUB_CLIENT_PROD,
            clientSecret: process.env.KEY_SECRET,
            //clientSecret: process.env.GITHUB_SECRET_PROD,
            scope: 'read:user',
            
            

        }),
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
    ],


    // A database is optional, but required to persist accounts in a database

})