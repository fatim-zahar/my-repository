import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

const page = async () => {
    const session = await getServerSession(authOptions)
    // console.log(session)

    if(session?.user){
        return (
                <h1 className="text-4xl">Admin page - Welcome back {session?.user.username || session?.user.name} </h1>
    )}
    return <div>Please login to see the admin page</div>
};

export default page